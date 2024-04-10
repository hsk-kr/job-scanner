import { v4 as uuidv4 } from 'uuid';
import { JobCondition, JobInfo, JobTask, JobTaskStatus } from '@/types/job';
import { StorageData, TaskFormDraft } from '@/types/storage';

// When the structure of data is changed, upgrade the version.
// If you update the version, users will loss their data.
export const STORAGE_VERSION = 'v1';

// dependencies: [getTasks]
export const createTask = async (
  jobTask: Omit<JobTask, 'id' | 'status' | 'updatedAt'>,
  jobConditions: JobCondition[]
) => {
  const tasks = await getTasks();

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...(await chrome.storage.local.get([STORAGE_VERSION])),
      tasks: tasks.concat({
        id: uuidv4(),
        status: 'ready',
        taskName: jobTask.taskName,
        delay: jobTask.delay,
        updatedAt: new Date().toLocaleString(),
        jobConditions,
      }),
    },
  });
};

// dependencies: [getTasks]
export const updateTask = async (taskId: string, jobTask: Partial<JobTask>) => {
  const tasks = await getTasks();

  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  // If there are addtional fields besides tasks, they also need to be set.
  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      tasks: tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            ...jobTask,
            updatedAt: new Date().toLocaleString(),
            id: taskId,
          };
        }

        return task;
      }),
    },
  });
};

export const updateActiveTask = async (
  numOfTotalJobs: number,
  foundJobs: JobInfo[]
) => {
  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      activeTask: {
        numOfTotalJobs,
        foundJobs,
      },
    },
  });
};

export const addUpActiveTask = async (
  numOfJobPostsHaveSeen: number,
  jobsHaveFound: JobInfo[]
) => {
  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      activeTask: {
        numOfTotalJobs:
          (data.activeTask?.numOfTotalJobs ?? 0) + numOfJobPostsHaveSeen,
        foundJobs: (data.activeTask?.foundJobs ?? []).concat(jobsHaveFound),
      },
    },
  });
};

// dependencies: [getTasks]
export const getTask = async (taskId: string) => {
  const tasks = await getTasks();

  return tasks.find((task) => task.id === taskId);
};

export const getTasks = async () => {
  if (!window.chrome?.storage?.local) return [];

  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  if (!data.tasks) return [];

  data.tasks.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
  return data.tasks ?? [];
};

// dependencies: [getTasks]
export const deleteTask = async (taskId: string) => {
  const tasks = await getTasks();

  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      tasks: tasks.filter((task) => task.id !== taskId),
    },
  });
};

export const deleteAllTasks = async () => {
  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      tasks: [],
    },
  });
};

export const startTask = async (taskId: string) => {
  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      tasks: (data.tasks ?? []).map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: 'processing',
            }
          : task
      ),
      activeTask: {
        numOfTotalJobs: 0,
        foubndJobs: [],
      },
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
    message: string;
  }
) => {
  const {
    [STORAGE_VERSION]: { tasks, activeTask },
  }: Record<string, StorageData> = await chrome.storage.local.get([
    STORAGE_VERSION,
  ]);

  const processingTask = await getProcessingTask(tasks ?? []);

  if (!processingTask) return false;

  processingTask.status = data.status;
  processingTask.logMessage = `${activeTask?.foundJobs?.length ?? -1} out of ${
    activeTask?.numOfTotalJobs ?? -1
  } Jobs found.\n\n${data.message}`;
  processingTask.foundJobs = activeTask?.foundJobs ?? [];

  await updateTask(taskId, processingTask);
  return true;
};

// dependencies [getTask]
export const getProcessingTask = async (tasks?: JobTask[]) => {
  const _tasks = tasks ?? (await getTasks());
  return _tasks.find((task) => task.status === 'processing');
};

export const clearDraftTaskFormData = async () => {
  if (!window.chrome?.storage?.local) return;
  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      draft: undefined,
    },
  });
};

export const draftTaskFormData = async (draftData: TaskFormDraft) => {
  if (!window.chrome?.storage?.local) return;
  const versionData = await chrome.storage.local.get(STORAGE_VERSION);
  const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

  await chrome.storage.local.set({
    [STORAGE_VERSION]: {
      ...data,
      draft: draftData,
    },
  });
};

export const loadDraftTaskFormData =
  async (): Promise<TaskFormDraft | null> => {
    if (!window.chrome?.storage?.local) return null;
    const versionData = await chrome.storage.local.get(STORAGE_VERSION);
    const data = (versionData[STORAGE_VERSION] ?? {}) as StorageData;

    return data.draft ?? null;
  };
