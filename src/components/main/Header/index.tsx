import { useJobTasks } from '@/stores/job-task';
import { Link } from 'react-router-dom';

const Header = () => {
  const { activeTask } = useJobTasks();
  const canCreateTask = activeTask === undefined;

  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Job Scanner 1.0.0</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {canCreateTask && (
            <li>
              <Link to="/task-form">Create Task</Link>
            </li>
          )}
          <li>
            <details className="z-50">
              <summary>Links</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <b className="text-center block">v1.0.0</b>
                <li>
                  <a
                    href="https://github.com/hsk-kr/linkedin-job-scanner"
                    target="_blank"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://hsk-kr.github.io/job-scanner-json-webviewer/"
                    target="_blank"
                  >
                    Viewer
                  </a>
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
