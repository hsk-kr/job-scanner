import TaskForm from '@/components/task-form/TaskForm';
import { DragNDropProvider } from '@/lib/dnd/context';

const TaskFormPage = () => {
  return (
    <DragNDropProvider>
      <TaskForm />
    </DragNDropProvider>
  );
};

export default TaskFormPage;
