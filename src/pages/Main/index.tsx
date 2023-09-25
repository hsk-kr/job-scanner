import TaskList from '@/components/TaskList';
import Header from '@/components/main/Header';
import RandomTipBanner from '@/components/main/RandomTipBanner';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';

const Container = styled.div``;

const Main = () => {
  return (
    <Container>
      <Header />
      <RandomTipBanner tips={['tipa', 'tipb']} delay={1000} />
      <Divider />
      <TaskList
        activeTaskId="3"
        tasks={[
          {
            taskName: 'Task A',
            createdAt: '2023-09-25',
            id: '1',
            status: 'ready',
          },
          {
            taskName: 'Task B',
            createdAt: '2023-09-25',
            id: '2',
            status: 'ready',
          },
          {
            taskName: 'Task C',
            createdAt: '2023-09-25',
            id: '3',
            status: 'processing',
          },
          {
            taskName: 'Task D',
            createdAt: '2023-09-25',
            id: '4',
            status: 'done',
          },
        ]}
      />
    </Container>
  );
};

export default Main;
