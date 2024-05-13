import { JobTask } from '@/types/job';
import { saveJsonAsFile } from '@/utils/file';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  finishTask,
  startTask,
  STORAGE_VERSION,
  getTask,
} from '@/utils/storage';
import { useEffect, useMemo, useState } from 'react';

const useJobTasks = () => {
  const [jobTasks, _setJobTasks] = useState<JobTask[]>([]);
  const activeTask = useMemo(
    () => jobTasks.find((t) => t.status === 'processing'),
    [jobTasks]
  );

  const createJobTask: typeof createTask = async (jobTasks, jobConditions) => {
    await createTask(jobTasks, jobConditions);
    refreshJobTasks();
  };

  const updateJobTask: typeof updateTask = async (taskId, jobTask) => {
    await updateTask(taskId, jobTask);
    refreshJobTasks();
  };

  const deleteJobTask: typeof deleteTask = async (taskId) => {
    await deleteTask(taskId);
    refreshJobTasks();
  };

  const finishJobTask: typeof finishTask = async (taskId, data) => {
    const result = await finishTask(taskId, data);
    refreshJobTasks();
    return result;
  };

  const startJobTask: typeof startTask = async (taskId) => {
    const result = await startTask(taskId);
    refreshJobTasks();
    return result;
  };

  const refreshJobTasks = async () => {
    _setJobTasks(await getTasks());
  };

  const downloadJobTask = async (taskId: string, taskName: string) => {
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

    chrome.storage.onChanged.addListener((changes) => {
      for (const [key] of Object.entries(changes)) {
        switch (key) {
          case STORAGE_VERSION:
            refreshJobTasks();
            break;
        }
      }
    });

    refreshJobTasks();
  }, []);

  return {
    jobTasks,
    activeTask,
    createJobTask,
    updateJobTask,
    deleteJobTask,
    startJobTask,
    finishJobTask,
    downloadJobTask,
  };
};

export default useJobTasks;
