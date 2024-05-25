import { useJobTasks } from '@/stores/job-task';
import { Link } from 'react-router-dom';
import SettingModal from '@/components/modals/SettingModal';
import { useState } from 'react';

const Header = () => {
  const { activeTask } = useJobTasks();
  const canCreateTask = activeTask === undefined;
  const [settingModalVisible, setSettingModalVisible] = useState(false);

  const toggleSettingModal = () =>
    setSettingModalVisible((prevVisible) => !prevVisible);

  return (
    <div className="navbar bg-neutral">
      {settingModalVisible && <SettingModal onClose={toggleSettingModal} />}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Job Scanner 1.0.1</a>
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
                <b className="text-center block">v1.0.1</b>
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
                <li onClick={toggleSettingModal}>
                  <a>Setting</a>
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
