import { JobTask } from '@/types/job';
import { useJobTasks } from '@/stores/job-task';
import {
  FaPlayCircle,
  FaCopy,
  FaFileDownload,
  FaRegStopCircle,
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
        return 'badge-neutral';
      case 'done':
        return 'badge-success';
      case 'processing':
        return 'badge-primary';
      case 'stopped':
        return 'badge-error';
    }
  })();
  const canStart = status === 'ready';
  const canStop = activeTask?.id === id;
  const canDownload = status !== 'ready';
  const canDuplicate = activeTask === undefined;
  const canDelete = activeTask === undefined;
  const canEdit = activeTask === undefined && status !== 'done';

  return (
    <div className="flex flex-col gap-2">
      <span className="text-white">{taskName.substring(0, 70)}</span>
      <div className="relative stats bg-white text-primary-content">
        <div className="stat">
          <div className="stat-title text-black">Found Jobs</div>
          <div className="stat-value">{foundJobs?.length ?? 0}</div>
        </div>
        <div className="stat">
          <div className="stat-title text-black">Searched Jobs</div>
          <div className="stat-value">{numOfTotalJobs ?? 0}</div>
        </div>
        <div className="stat flex flex-col">
          <span className="text-sm text-gray-600">{updatedAt}</span>
          <div className="stat-actions">
            <div className="flex gap-2">
              <div className={`badge text-white mr-2 ${statusClassName}`}>
                {status}
              </div>
              {canStart && (
                <div className="tooltip" data-tip="Start">
                  <FaPlayCircle
                    className="text-gray-600 text-xl cursor-pointer hover:scale-110 transition-all"
                    onClick={() => {
                      if (window.confirm('Do you want to start the task?')) {
                        startJobTask(id);
                      }
                    }}
                  />
                </div>
              )}
              {canStop && (
                <div className="tooltip" data-tip="Stop">
                  <FaRegStopCircle
                    className="text-gray-600 text-xl cursor-pointer hover:scale-110 transition-all"
                    onClick={() => {
                      if (confirm('Do you really want to stop the task?\n')) {
                        finishJobTask(id, {
                          status: 'stopped',
                          message: ' Manually, stopped.',
                        });
                      }
                    }}
                  />
                </div>
              )}
              {canDuplicate && (
                <div className="tooltip" data-tip="Duplicate">
                  <Link to={`/task-form?isEdit=false&id=${id}`}>
                    <FaCopy className="text-gray-600 text-xl cursor-pointer hover:scale-110 transition-all" />
                  </Link>
                </div>
              )}
              {canEdit && (
                <div className="tooltip" data-tip="Edit">
                  <Link to={`/task-form?isEdit=true&id=${id}`}>
                    <MdEdit className="text-gray-600 text-xl cursor-pointer hover:scale-110 transition-all" />
                  </Link>
                </div>
              )}
              {canDownload && (
                <div className="tooltip" data-tip="Download">
                  <FaFileDownload
                    className="text-gray-600 text-xl cursor-pointer hover:scale-110 transition-all"
                    onClick={() => downloadJobTask(id, taskName)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {canDelete && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="absolute top-1 right-1 inline-block w-4 h-4 stroke-current cursor-pointer hover:scale-125 transition-all border-none"
            onClick={() => {
              if (
                window.confirm(
                  "Do you really want to delete the task?\nOnce you delete the task, you can't restore it."
                )
              ) {
                deleteJobTask(id);
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default TaskListItem;
