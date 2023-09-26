import { useNavigate } from 'react-router-dom';
import TaskList from '@/components/main/TaskList';
import Header from '@/components/main/MainHeader';
import RandomTipBanner from '@/components/main/RandomTipBanner';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = () => {
  const navigate = useNavigate();

  const openGithub = () => {
    window.open('https://github.com/hsk-kr/linkedin-job-scanner', '_blank');
  };

  const handleTaskAdd = () => {
    navigate('/task-form');
  };

  return (
    <Container>
      <Header onGithubClick={openGithub} />
      <RandomTipBanner tips={['tipa', 'tipb']} delay={1000} />
      <Divider />
      <TaskList
        onAdd={handleTaskAdd}
        // activeTaskId="3"
        tasks={[
          {
            taskName: 'Task A',
            updatedAt: '2023-09-25',
            id: '1',
            status: 'ready',
          },
          {
            taskName: 'Task B',
            updatedAt: '2023-09-25',
            id: '2',
            status: 'ready',
          },
          {
            taskName: 'Task C',
            updatedAt: '2023-09-25',
            id: '3',
            status: 'processing',
          },
          {
            taskName: 'Task D',
            updatedAt: '2023-09-25',
            id: '4',
            status: 'done',
          },
        ]}
      />
    </Container>
  );
};

export default Main;
