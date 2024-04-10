import { useNavigate } from 'react-router-dom';
import TaskList from '@/components/main/TaskList';
import Header from '@/components/main/MainHeader';
import RandomTipBanner from '@/components/main/RandomTipBanner';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import useJobTasks from '@/hooks/useJobTasks';
import LogViewer from '@/components/main/LogViewer';
import { ComponentProps, useState } from 'react';
import { deleteAllTasks, getTask } from '@/utils/storage';
import { saveJsonAsFile } from '@/utils/file';
import RedirectDraftPage from '@/components/RedirectDraftPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const tipBannerProps: ComponentProps<typeof RandomTipBanner> = {
  delay: 5000,
  tips: [
    "You should stay on the job list page while it's in progress.",
    'You can check if your conditions work correctly as you expect.',
    "Once you stop a job task, you can't restart it.",
    'If you have any suggestions, click the GitHub icon!',
    'If you find any errors, let me know on the GitHub repo!',
    'Use a JSON viewer in the top right corner to view a JSON file on the web.',
    "Once you delete a job task, you can't restore it.",
    'You can copy a task to create a new one.',
    'You can include space characters in the text.',
  ],
};

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

  const openLogViewer = (taskId: string) => {
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

  const closeLogViewer = () => {
    setLogViewer((prevLogViewer) => ({ ...prevLogViewer, visible: false }));
  };

  const openGithub = () => {
    window.open('https://github.com/hsk-kr/linkedin-job-scanner', '_blank');
  };

  const openViewer = () => {
    window.open(
      'https://hsk-kr.github.io/job-scanner-json-webviewer/',
      '_blank'
    );
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

  const handleTaskDelete = (taskId: string) => {
    if (
      window.confirm(
        "Do you really want to delete the task?\nOnce you delete the task, you can't restore it."
      )
    ) {
      deleteJobTask(taskId);
    }
  };

  const handleAllTasksDelete = () => {
    if (
      window.confirm(
        "Do you reallt want to delete ALL the tasks?\nOnce you delete all, you can't restore them."
      )
    ) {
      deleteAllTasks();
    }
  };

  const handleJsonDownload = (taskId: string, taskName: string) => {
    const download = async () => {
      const task = await getTask(taskId);
      if (!task) {
        alert(`Cannot find the task.`);
        return;
      }

      const currentDate = new Date();
      const dateStr = `${currentDate.getFullYear()}${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
      saveJsonAsFile(`${taskName}-${dateStr}`, task.foundJobs);
    };

    download();
  };

  return (
    <Container>
      <RedirectDraftPage />
      <Header onGithubClick={openGithub} onViewerClick={openViewer} />
      <RandomTipBanner {...tipBannerProps} />
      <Divider />
      <TaskList
        onAdd={handleTaskAdd}
        onEdit={handleTaskEdit}
        onDelete={handleTaskDelete}
        onDeleteAllTasks={handleAllTasksDelete}
        onTask={handleTask}
        onLog={openLogViewer}
        onDuplicate={handleTaskDuplicate}
        onDownload={handleJsonDownload}
        activeTaskId={activeTask?.id}
        tasks={jobTasks}
      />
      <LogViewer
        visible={logViewer.visible}
        message={logViewer.message}
        onClose={closeLogViewer}
      />
    </Container>
  );
};

export default Main;
