import { useJobTasks } from '@/stores/job-task';
import TaskListItem from '../TaskListItem';
import { deleteAllTasks } from '@/utils/storage';
import { useEffect, useState } from 'react';
import TaskListSkeleton from '../TaskListSkeleton';
import Button from '@/components/ui/Button';

const TaskList = () => {
  const [loading, setLoading] = useState(true);
  const { jobTasks, activeTask } = useJobTasks();

  const handleDeleteAllTasks = () => {
    if (
      window.confirm(
        "Do you really want to delete all tasks? Once deleted, they can't be restored."
      )
    ) {
      deleteAllTasks();
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Button
          color="error"
          className="text-inherit"
          onClick={handleDeleteAllTasks}
          disabled={activeTask !== undefined}
        >
          Delete All Tasks
        </Button>
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
