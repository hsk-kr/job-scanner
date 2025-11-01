import { showLogModal } from '@/components/modals/LogModal';
import { useJobTasks } from '@/stores/job-task';
import { Link } from 'react-router-dom';

const VERSION = import.meta.env.VITE_VERSION;

const Header = () => {
  const { activeTask } = useJobTasks();
  const canCreateTask = activeTask === undefined;

  const openLog = async () => {
    showLogModal();
  };

  return (
    <div className="navbar bg-base-300 px-4">
      <div className="flex-1">
        <h1 className="text-lg font-bold">Job Scanner {VERSION}</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {canCreateTask && (
            <li>
              <Link to="/task-form">Create Task</Link>
            </li>
          )}
          <li>
            <details className="z-30">
              <summary>Links</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <b className="text-center block">v{VERSION}</b>
                <li>
                  <a
                    href="https://github.com/hsk-kr/linkedin-job-scanner"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://hsk-kr.github.io/job-scanner-json-webviewer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Viewer
                  </a>
                </li>
                <li onClick={openLog}>
                  <a href="#">Log</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
