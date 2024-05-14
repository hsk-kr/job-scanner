import { JobTask } from '@/types/job';
import { saveJsonAsFile } from '@/utils/file';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  finishTask,
  startTask,
  getTask,
} from '@/utils/storage';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface JobTaskContext {
  jobTasks: JobTask[];
  activeTask?: JobTask;
  createJobTask: typeof createTask;
  updateJobTask: typeof updateTask;
  deleteJobTask: typeof deleteTask;
  startJobTask: typeof startTask;
  finishJobTask: typeof finishTask;
  downloadJobTask: (taskId: string, taskName: string) => void;
}
const JobTaskContext = createContext<JobTaskContext>(null!);

// eslint-disable-next-line react-refresh/only-export-components
export const useJobTasks = () => useContext(JobTaskContext);

const JobTaskContextProvider = ({ children }: { children?: ReactNode }) => {
  const [jobTasks, _setJobTasks] = useState<JobTask[]>([]);
  const activeTask = useMemo(
    () => jobTasks.find((t) => t.status === 'processing'),
    [jobTasks]
  );

  const createJobTask: JobTaskContext['createJobTask'] = async (jobTasks) => {
    await createTask(jobTasks);
    refreshJobTasks();
  };

  const updateJobTask: JobTaskContext['updateJobTask'] = async (
    taskId,
    jobTask
  ) => {
    await updateTask(taskId, jobTask);
    refreshJobTasks();
  };

  const deleteJobTask: JobTaskContext['deleteJobTask'] = async (taskId) => {
    await deleteTask(taskId);
    refreshJobTasks();
  };

  const finishJobTask: JobTaskContext['finishJobTask'] = async (data) => {
    const result = await finishTask(data);
    refreshJobTasks();
    return result;
  };

  const startJobTask: JobTaskContext['startJobTask'] = async (taskId) => {
    const result = await startTask(taskId);
    refreshJobTasks();
    return result;
  };

  const refreshJobTasks = async () => {
    _setJobTasks(await getTasks());
  };

  const downloadJobTask: JobTaskContext['downloadJobTask'] = async (
    taskId,
    taskName
  ) => {
    const task = await getTask(taskId);
    if (!task) {
      alert(`Cannot find the task.`);
      return;
    }

    const currentDate = new Date();
    const dateStr = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
    saveJsonAsFile(`${taskName}-${dateStr}`, task.foundJobs);
  };

  useEffect(() => {
    if (!chrome.storage) return;

    chrome.storage.onChanged.addListener(() => {
      refreshJobTasks();
    });

    refreshJobTasks();
  }, []);

  const value = {
    jobTasks,
    activeTask,
    createJobTask,
    updateJobTask,
    deleteJobTask,
    startJobTask,
    finishJobTask,
    downloadJobTask,
  };

  return (
    <JobTaskContext.Provider value={value}>{children}</JobTaskContext.Provider>
  );
};

export default JobTaskContextProvider;
