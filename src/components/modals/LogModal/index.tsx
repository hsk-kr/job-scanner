import { getLog } from '@/utils/log';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { IoMdClose } from 'react-icons/io';

export const showLogModal = () => {
  const modalRootElement = document.createElement('div');
  document.body.append(modalRootElement);

  const handleClose = () => {
    modalRootElement.remove();
  };

  const root = createRoot(modalRootElement);
  root.render(<LogModal onClose={handleClose} />);
};

const LogModal = ({ onClose }: { onClose: VoidFunction }) => {
  const [log, setLog] = useState('');

  const updateLog = async () => {
    setLog(await getLog());
  };

  useEffect(() => {
    updateLog();
  }, []);

  return (
    <div className="flex flex-col gap-4 fixed z-40 top-4 bottom-4 right-4 left-4 bg-base-300 rounded-lg p-8 border border-color-white overflow-y-auto">
      <div>
        <h1 className="text-xl">Log</h1>
        <IoMdClose
          className="absolute top-2 right-2 text-2xl text-white cursor-pointer hover:scale-110 transition-all"
          role="button"
          onClick={onClose}
          data-testid="conditionCheckModalCloseBtn"
        />
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-800 p-4 whitespace-pre-line">
        {log}
      </div>
    </div>
  );
};

export default LogModal;
