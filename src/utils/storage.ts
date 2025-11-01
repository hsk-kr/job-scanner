import { v4 as uuidv4 } from 'uuid';
import { JobInfo, JobTask, JobTaskStatus } from '@/types/job';
import { TaskFormDraft } from '@/types/storage';
import { logInfo } from './log';

// lcoal
// in the local storage, except those fields are tasks.
const ACTIVE_TASK_ID = 'activeTaskId';
const CUSTOM_QUERY_SELECTORS = 'customQuerySelectors';
const LOG = 'log';

// session
const DRAFT = 'draft'; // key to save draft data in the sessino storage

/**
 * Add a task into the chrome local storage.
 * @param jobTask task data to store in the local storage
 */
export const createTask = async (
  jobTask: Omit<
    JobTask,
    'id' | 'status' | 'updatedAt' | 'foundJobs' | 'numOfTotalJobs'
  >
) => {
  const newTask = {
    id: uuidv4(),
    status: 'ready',
    taskName: jobTask.taskName,
    delay: jobTask.delay,
    updatedAt: new Date().toLocaleString(),
    jobConditions: jobTask.jobConditions,
    foundJobs: [],
    numOfTotalJobs: 0,
  };

  await chrome.storage.local.set({
    [newTask.id]: newTask,
  });
};

/**
 * Update a task from the chrome local storage.
 * @param taskId taskId of the task to be updated
 * @param jobTask values to be updated. The fields not included in this field will remain in the data
 * @returns
 */
export const updateTask = async (taskId: string, jobTask: Partial<JobTask>) => {
  const task = await getTask(taskId);
  if (!task) {
    logInfo(`cannot find a task ${taskId}`);
    return;
  }

  const updatedTask = {
    ...task,
    ...jobTask,
    updatedAt: new Date().toLocaleString(),
    id: taskId,
  };
  await chrome.storage.local.set({
    [taskId]: updatedTask,
  });
};

/**
 * Increase numberOfJob by 1 and append jobHaveFound param to the foundJobs field of the active task
 * @param jobHaveFound to be appended to the foundJobs field, if it is null, it does nothing
 */
export const addUpActiveTask = async (jobHaveFound: JobInfo | null) => {
  const activeTask = await getActiveTask();
  if (activeTask === null) {
    logInfo('cannot find active task');
    return;
  }

  await chrome.storage.local.set({
    [activeTask.id]: {
      ...activeTask,
      numOfTotalJobs: (activeTask?.numOfTotalJobs ?? 0) + 1,
      foundJobs: jobHaveFound
        ? (activeTask?.foundJobs ?? []).concat(jobHaveFound)
        : activeTask?.foundJobs,
    },
  });
};

/**
 * Returns tasks from the local storage
 * @returns JobTask[]
 */
export const getTasks = async (): Promise<JobTask[]> => {
  if (!window.chrome?.storage?.local) return [];

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [ACTIVE_TASK_ID]: activeTaskId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [CUSTOM_QUERY_SELECTORS]: customQuerySelectors,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [LOG]: log,
    ...tasks
  } = await chrome.storage.local.get();

  const tasksAsArr = (
    Object.keys(tasks ?? {}).map((k) => tasks[k]) as JobTask[]
  ).sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));

  return tasksAsArr;
};

/**
 * Delete a tasks from the chrome local storage.
 * @param taskId the id of a task to be deleted
 */
export const deleteTask = async (taskId: string) => {
  await chrome.storage.local.remove(taskId);
};

/**
 * Delete all tasks from the chorme local storage.
 */
export const deleteAllTasks = async () => {
  await chrome.storage.local.clear();
};

/**
 * Start a task, basically, it sets the ACTIVE_TASK_ID from the chrome local storage
 * and the content script that executes on the browser will detect the task and will start
 * to crawl the job posts on the LinkedIn job list page
 * @param taskId the id of the task to be started
 */
export const startTask = async (taskId: string) => {
  const task = await getTask(taskId);
  if (!task) {
    logInfo(`cannot find a task to start ${taskId}`);
    return;
  }

  await chrome.storage.local.set({
    [taskId]: {
      ...task,
      status: 'processing',
    },
    [ACTIVE_TASK_ID]: taskId,
  });
};

/**
 * Finish the active task with the status
 * of the activeTask to the numberOfJobs it founds.
 * @param data status: finish or stopped
 */
export const finishTask = async (data: {
  status: Exclude<JobTaskStatus, 'processing' | 'ready'>;
}) => {
  const activeTask = await getActiveTask();
  if (!activeTask) {
    logInfo('cannot find active task to finish');
    return;
  }

  activeTask.status = data.status;

  await chrome.storage.local.remove(ACTIVE_TASK_ID);
  await chrome.storage.local.set({
    [activeTask.id]: { ...activeTask },
  });
};

/**
 * Clear draft the data you should call this function to clear the data
 * and prevent to redirect when users enter the main page
 */
export const clearDraftTaskFormData = async () => {
  if (!window.chrome?.storage?.session) return;
  await chrome.storage.session.remove(DRAFT);
};

let tmDraftTaskFormData: NodeJS.Timeout;
/**
 * Set draft data. the data is stored in the session storage which means when the tab is closed, the data is removed.
 * @param draftData the data will be stored as the draft data
 * @param delay debounce time.
 * It's applied to store the draft data,
 * which means if there more actions within the certain time,
 * the action ignores the previous action and restarts.
 */
export const setDraftTaskFormData = (
  draftData: TaskFormDraft,
  delay = 1000
) => {
  if (!window.chrome?.storage?.session) return () => {};

  clearTimeout(delay);
  tmDraftTaskFormData = setTimeout(() => {
    chrome.storage.session.set({
      [DRAFT]: draftData,
    });
  }, delay);
  return () => {
    clearTimeout(tmDraftTaskFormData);
  };
};

/**
 * Returns the draft data stored from the chrome storage session
 * @returns draftdata
 */
export const getDraftTaskFormData = async (): Promise<TaskFormDraft | null> => {
  if (!window.chrome?.storage?.session) return null;
  return ((await chrome.storage.session.get(DRAFT)) ?? {})[DRAFT] ?? null;
};

/**
 * Returns if there is a task that has the state of 'processing', otherwise returns null
 * @returns JobTask or null
 */
export const getActiveTask = async (): Promise<JobTask | null> => {
  if (!chrome.storage.local) return null;
  const activeTaskId = ((await chrome.storage.local.get(ACTIVE_TASK_ID)) ?? {})[
    ACTIVE_TASK_ID
  ];
  if (!activeTaskId) return null;
  return await getTask(activeTaskId);
};

/**
 * Returns a task corresponds to the taskId, if it does not find the task, returns null
 * @param taskId taskId of the task will be retrieved
 * @returns JobTask | null
 */
export const getTask = async (taskId: string): Promise<JobTask | null> => {
  if (!chrome.storage.local) return null;
  return ((await chrome.storage.local.get(taskId)) ?? {})[taskId] ?? null;
};
