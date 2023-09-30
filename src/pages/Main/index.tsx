import { useNavigate } from 'react-router-dom';
import TaskList from '@/components/main/TaskList';
import Header from '@/components/main/MainHeader';
import RandomTipBanner from '@/components/main/RandomTipBanner';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import useJobTasks from '@/hooks/useJobTasks';
import LogViewer from '@/components/main/LogViewer';
import { useState } from 'react';
import { getTask } from '@/utils/storage';
import { saveJsonAsFile } from '@/utils/file';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = () => {
  const navigate = useNavigate();
  const { jobTasks, activeTask, deleteJobTask, finishJobTask, startJobTask } =
    useJobTasks();
  const [logViewer, setLogViewer] = useState<{
    visible: boolean;
    message: string;
  }>({
    visible: false,
    message: '',
  });

  const openViewer = (taskId: string) => {
    const jobTask = jobTasks.find((jobTask) => jobTask.id === taskId);

    if (!jobTask) {
      alert('Something went wrong. Re-open the extension.');
      return;
    }

    setLogViewer({
      visible: true,
      message: jobTask.logMessage ?? '',
    });
  };

  const closeViewer = () => {
    setLogViewer((prevLogViewer) => ({ ...prevLogViewer, visible: false }));
  };

  const openGithub = () => {
    window.open('https://github.com/hsk-kr/linkedin-job-scanner', '_blank');
  };

  const handleTaskEdit = (taskId: string) => {
    navigate(`/task-form?isEdit=true&id=${taskId}`);
  };

  const handleTaskDuplicate = (taskId: string) => {
    navigate(`/task-form?isEdit=false&id=${taskId}`);
  };

  const handleTaskAdd = () => {
    navigate('/task-form');
  };

  const handleTask = (taskId: string) => {
    const isTaskActive = taskId === activeTask?.id;
    const message = isTaskActive
      ? "Do you really want to stop the task?\nOnce you stop the task, you can't restart the task."
      : 'Do you want to start the task?';

    if (window.confirm(message)) {
      if (isTaskActive) {
        finishJobTask(taskId, {
          status: 'stopped',
          message: 'Manually, stopped.',
        });
      } else {
        startJobTask(taskId);
      }
    }
  };

  const handleDelete = (taskId: string) => {
    if (
      window.confirm(
        "Do you really want to delete the task?\nOnce you delete the task, you can't restore it."
      )
    ) {
      deleteJobTask(taskId);
    }
  };

  const handleJsonDownload = (taskId: string) => {
    const download = async () => {
      const task = await getTask(taskId);
      if (!task) {
        alert(`Cannot find the task.`);
        return;
      }

      saveJsonAsFile(`${taskId}.json`, task.foundJobs);
    };

    download();
  };

  return (
    <Container>
      <Header onGithubClick={openGithub} />
      <RandomTipBanner tips={['tipa', 'tipb']} delay={1000} />
      <Divider />
      <TaskList
        onAdd={handleTaskAdd}
        onEdit={handleTaskEdit}
        onDelete={handleDelete}
        onTask={handleTask}
        onLog={openViewer}
        onDuplicate={handleTaskDuplicate}
        onDownload={handleJsonDownload}
        activeTaskId={activeTask?.id}
        tasks={jobTasks}
      />
      <LogViewer
        visible={logViewer.visible}
        message={logViewer.message}
        onClose={closeViewer}
      />
    </Container>
  );
};

export default Main;
