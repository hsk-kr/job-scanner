import TaskList from '@/components/main/TaskList';
import Header from '@/components/main/Header';
import RedirectDraftPage from '@/components/RedirectDraftPage';
import ErrorBoundary from '@/components/ErrorBoundary';

const Main = () => {
  return (
    <ErrorBoundary>
      <div className="flex flex-col h-full">
        <RedirectDraftPage />
        <Header />
        <TaskList />
      </div>
    </ErrorBoundary>
  );
};

export default Main;
