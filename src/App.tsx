import Main from './pages/Main';
import TaskForm from './pages/TaskForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import JobTaskContextProvider from './stores/job-task';

const router = createBrowserRouter([
  {
    path: 'task-form',
    element: <TaskForm />,
  },
  {
    path: '*',
    element: <Main />,
  },
]);

function App() {
  return (
    <JobTaskContextProvider>
      <RouterProvider router={router} />
    </JobTaskContextProvider>
  );
}

export default App;
