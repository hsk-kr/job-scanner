import useJobTasks from '@/hooks/useJobTasks';
import TaskListItem from '../TaskListItem';
import { deleteAllTasks } from '@/utils/storage';

const TaskList = () => {
  const { jobTasks } = useJobTasks();

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
        >
          Delete All Tasks
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {jobTasks.map((jobTask) => (
          <TaskListItem key={jobTask.id} {...jobTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
