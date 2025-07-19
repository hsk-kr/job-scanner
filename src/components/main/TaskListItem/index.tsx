import { JobTask } from '@/types/job';
import { useJobTasks } from '@/stores/job-task';
import {
  FaPlayCircle,
  FaCopy,
  FaFileDownload,
  FaRegStopCircle,
  FaTrash,
} from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TaskListItem = ({
  status,
  id,
  numOfTotalJobs,
  foundJobs,
  updatedAt,
  taskName,
}: JobTask) => {
  const {
    activeTask,
    deleteJobTask,
    downloadJobTask,
    startJobTask,
    finishJobTask,
  } = useJobTasks();

  const statusClassName = (() => {
    switch (status) {
      case 'ready':
        return 'bg-warning text-text-primary';
      case 'done':
        return 'bg-success text-surface';
      case 'processing':
        return 'bg-primary text-surface';
      case 'stopped':
        return 'bg-error text-surface';
      default:
        return '';
    }
  })();

  const canStart = status === 'ready';
  const canStop = activeTask?.id === id;
  const canDownload = status !== 'ready';
  const canDuplicate = activeTask === undefined;
  const canDelete = activeTask === undefined;
  const canEdit =
    activeTask === undefined && status !== 'done' && status !== 'stopped';

  const currentNumFoundJobs =
    activeTask?.id === id ? activeTask.foundJobs?.length : foundJobs?.length;
  const currentNumOfTotalJobs =
    activeTask?.id === id ? activeTask.numOfTotalJobs : numOfTotalJobs;

  return (
    <div className="relative bg-gray-800 border border-gray-600 ring-1 ring-inset ring-gray-600/50 hover:border-primary hover:shadow-xl rounded-2xl shadow-md p-5 flex flex-col gap-4 w-full transition-all">
      {/* Title */}
      <h3 className="text-xl font-semibold truncate text-text-primary">
        {taskName}
      </h3>

      {/* Stats */}
      <dl className="grid grid-cols-2 gap-6">
        <div>
          <dt className="text-sm text-gray-400">Found Jobs</dt>
          <dd className="mt-1 text-2xl font-medium text-text-primary">
            {currentNumFoundJobs ?? 0}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-gray-400">Searched Jobs</dt>
          <dd className="mt-1 text-2xl font-medium text-text-primary">
            {currentNumOfTotalJobs ?? 0}
          </dd>
        </div>
      </dl>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <time className="text-sm text-gray-400">{updatedAt}</time>

        <div className="flex items-center space-x-3">
          {/* Status badge */}
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${statusClassName}`}
          >
            {status}
          </span>

          {/* Actions */}
          {canStart && (
            <FaPlayCircle
              className="text-success hover:text-success-hover text-2xl cursor-pointer transition-transform transform hover:scale-110"
              onClick={() =>
                window.confirm('Do you want to start the task?') &&
                startJobTask(id)
              }
            />
          )}
          {canStop && (
            <FaRegStopCircle
              className="text-warning hover:text-warning-hover text-2xl cursor-pointer transition-transform transform hover:scale-110"
              onClick={() =>
                window.confirm('Do you really want to stop the task?') &&
                finishJobTask({ status: 'stopped' })
              }
            />
          )}
          {canDuplicate && (
            <Link to={`/task-form?isEdit=false&id=${id}`}>
              <FaCopy className="text-accent text-2xl cursor-pointer transition-transform transform hover:scale-110" />
            </Link>
          )}
          {canEdit && (
            <Link to={`/task-form?isEdit=true&id=${id}`}>
              <MdEdit className="text-primary text-2xl cursor-pointer transition-transform transform hover:scale-110" />
            </Link>
          )}
          {canDownload && (
            <FaFileDownload
              className="text-primary text-2xl cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => downloadJobTask(id, taskName)}
            />
          )}
          {canDelete && (
            <FaTrash
              className="text-error text-2xl cursor-pointer transition-transform transform hover:scale-110"
              onClick={() =>
                window.confirm(
                  "Do you really want to delete the task? This can't be undone."
                ) && deleteJobTask(id)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskListItem;
