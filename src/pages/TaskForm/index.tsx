import TaskForm from '@/components/task-form/TaskForm';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TaskFormPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TaskForm />
    </DndProvider>
  );
};

export default TaskFormPage;
