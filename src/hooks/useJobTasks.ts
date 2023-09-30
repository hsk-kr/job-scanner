import { JobTask } from '@/types/job';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  finishTask,
  startTask,
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

  useEffect(() => {
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
  };
};

export default useJobTasks;
