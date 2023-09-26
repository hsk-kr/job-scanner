import Main from './pages/Main';
import TaskForm from './pages/TaskForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/task-form',
    element: <TaskForm />,
  },
  {
    path: '*',
    element: <Main />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
