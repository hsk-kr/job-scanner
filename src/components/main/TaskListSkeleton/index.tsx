const TaskListSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
      </div>
    </div>
  );
};
export default TaskListSkeleton;
