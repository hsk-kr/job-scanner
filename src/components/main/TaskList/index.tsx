import { useJobTasks } from '@/stores/job-task';
import TaskListItem from '../TaskListItem';
import { deleteAllTasks } from '@/utils/storage';
import { useEffect, useState } from 'react';
import TaskListSkeleton from '../TaskListSkeleton';

const TaskList = () => {
  const [loading, setLoading] = useState(true);
  const { jobTasks, activeTask } = useJobTasks();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <button
          className="btn btn-sm btn-error text-neutral-100"
          onClick={() => {
            if (
              window.confirm(
                "Do you reallt want to delete ALL the tasks?\nOnce you delete all, you can't restore them."
              )
            ) {
              deleteAllTasks();
            }
          }}
          disabled={activeTask !== undefined}
        >
          Delete All Tasks
        </button>
      </div>
      {loading ? (
        <TaskListSkeleton />
      ) : (
        <div className="flex flex-col gap-4">
          {jobTasks.map((jobTask) => (
            <TaskListItem key={jobTask.id} {...jobTask} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
