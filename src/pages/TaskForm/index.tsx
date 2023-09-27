import TaskFormHeader from '@/components/task-form/TaskFormHeader';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import TaskFormBody from '@/components/task-form/TaskFormBody';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px);
`;

const TaskForm = () => {
  const navigate = useNavigate();

  const back = () => navigate(-1);

  return (
    <Container>
      <TaskFormHeader onBack={back} />
      <TaskFormBody />
    </Container>
  );
};

export default TaskForm;
