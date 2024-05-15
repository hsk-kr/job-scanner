import TaskList from '@/components/main/TaskList';
import Header from '@/components/main/Header';
import Divider from '@mui/material/Divider';
import RedirectDraftPage from '@/components/RedirectDraftPage';
import ErrorBoundary from '@/components/ErrorBoundary';

const Main = () => {
  return (
    <ErrorBoundary>
      <div className="flex flex-col h-full">
        <RedirectDraftPage />
        <Header />
        <Divider />
        <TaskList />
      </div>
    </ErrorBoundary>
  );
};

export default Main;
