import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import TaskFormContextProvider, { useTaskFormContext } from '@/stores/taskform';
import ConditionContainer from '../ConditionContainer';

const TaskFormHeader = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="gap-2 navbar-start">
        <Link
          to="/"
          className="btn-sm btn-ghost text-xl flex justify-center items-center"
        >
          <IoIosArrowBack />
        </Link>
        <a className="btn btn-ghost text-lg">Task Form</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm">Create</button>
      </div>
    </div>
  );
};

const TaskFormBody = () => {
  const { conditions } = useTaskFormContext();

  return (
    <form className="p-4">
      {/* Task Name & Interval */}
      <div className="flex gap-2">
        <label className="flex-1 input input-bordered flex items-center gap-2">
          <span className="whitespace-nowrap">Name</span>
          <input type="text" className="grow" placeholder="Task Name" />
        </label>
        <label className="flex-1 input input-bordered flex items-center gap-2">
          Interval
          <input
            type="text"
            className="grow"
            placeholder="1000 (recommended)"
          />
        </label>
      </div>
      <div className="divider"></div>
      {/* Create Condition */}
      <div className="flex gap-2 items-center">
        <select
          className="select select-bordered max-w-xs"
          defaultValue="title"
        >
          <option value="title">Job Title</option>
          <option value="description">Job Description</option>
        </select>
        <select className="select select-bordered max-w-xs" defaultValue="=">
          <option value="=">=</option>
          <option value="!=">!=</option>
          <option value="<">{'<'}</option>
          <option value="<=">{'<='}</option>
          <option value=">">{'>'}</option>
          <option value=">=">{'>='}</option>
        </select>
        <input
          type="text"
          placeholder="Frequency"
          className="input input-bordered w-36"
        />
        <button className="btn btn-neutral ml-2">Create Condition</button>
      </div>
      <ConditionContainer status="unused" />
      <div className="chat chat-start mt-2">
        <div className="chat-bubble">
          Drag the conditions to the bottom section to apply
        </div>
      </div>
      <div className="divider"></div>
      {/* Conditions */}
      {conditions.map((condition) => (
        <>
          <ConditionContainer
            key={condition.id}
            status="used"
            conditionId={condition.id}
          />
          <div className="divider">AND</div>
        </>
      ))}
      <div className="flex justify-center">
        <button className="btn btn-outline">Add Condition Box</button>
      </div>
    </form>
  );
};

const TaskForm = () => {
  return (
    <TaskFormContextProvider>
      <TaskFormHeader />
      <TaskFormBody />
    </TaskFormContextProvider>
  );
};

export default TaskForm;
