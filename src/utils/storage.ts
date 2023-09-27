import { v4 as uuidv4 } from 'uuid';
import { JobCondition, JobTask, JobTaskStatus } from '@/types/job';
import { StorageData } from '@/types/storage';

// When the structure of data is changed, upgrade the version.
// If you update the version, users will loss their data.
const STORAGE_VERSION = 'v1';

// dependencies: [getTasks]
export const createTask = async (
  jobTask: Omit<JobTask, 'id' | 'status' | 'updatedAt'>,
  jobConditions: JobCondition[]
) => {
  const tasks = await getTasks();

  // If there are addtional fields besides tasks, they also need to be set.
  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      tasks: tasks.concat({
        id: uuidv4(),
        status: 'ready',
        taskName: jobTask.taskName,
        delay: jobTask.delay,
        updatedAt: new Date().toLocaleDateString(),
        jobConditions,
      }),
    },
  });
};

// dependencies: [getTasks]
export const updateTask = async (
  taskId: string,
  jobTask: Omit<JobTask, 'id'>
) => {
  const tasks = await getTasks();

  // If there are addtional fields besides tasks, they also need to be set.
  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      tasks: tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...jobTask,
            updatedAt: new Date().toLocaleDateString(),
            id: taskId,
          };
        }

        return task;
      }),
    },
  });
};

// dependencies: [getTasks]
export const getTask = async (taskId: string) => {
  const tasks = await getTasks();

  return tasks.find((task) => task.id === taskId);
};

export const getTasks = async () => {
  if (!chrome?.storage?.local) return [];

  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;
  return data.tasks ?? [];
};

// dependencies: [getTasks]
export const deleteTask = async (taskId: string) => {
  const tasks = await getTasks();

  // If there are addtional fields besides tasks, they also need to be set.
  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      tasks: tasks.filter((task) => task.id !== taskId),
    },
  });
};

/**
 * Update task's status with a log message dependencies: [getTask]
 * @param taskId
 * @param data numOfFoundJobs, numOfTotalJobs and message are used to generate a log message
 * @returns
 */
export const finishTask = async (
  taskId: string,
  data: {
    status: Exclude<JobTaskStatus, 'processing' | 'ready'>;
    numOfFoundJobs: number;
    numOfTotalJobs: number;
    message: string;
  }
) => {
  const task = await getTask(taskId);

  if (!task) return false;

  task.status = data.status;
  task.logMessage = `${data.numOfFoundJobs} out of ${data.numOfTotalJobs} Jobs found.\n\n${data.message}`;

  await updateTask(taskId, task);
  return true;
};

export const getProcessingTask = async () => {
  const tasks = await getTasks();
  return tasks.find((task) => task.status === 'processing');
};
