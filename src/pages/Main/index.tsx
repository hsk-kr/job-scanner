import TaskList from '@/components/refactor/main/TaskList';
// import TaskList from '@/components/main/TaskList';
import Header from '@/components/refactor/main/Header';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import RedirectDraftPage from '@/components/RedirectDraftPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = () => {
  return (
    <Container>
      <RedirectDraftPage />
      <Header />
      <Divider />
      <TaskList />
    </Container>
  );
};

export default Main;
