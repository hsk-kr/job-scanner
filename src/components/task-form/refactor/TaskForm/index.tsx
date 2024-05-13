import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import TaskFormContextProvider, { useTaskFormContext } from '@/stores/taskform';
import ConditionContainer from '../ConditionContainer';
import { Fragment, useState } from 'react';
import { ITaskForm } from '@/types/taskform';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubConditionCreateForm from '../SubConditionCreateForm';
import ConditionCheckModal from '../../ConditionCheckModal';

const TaskForm = () => {
  const { conditions, appendCondition } = useTaskFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITaskForm>();
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModalOpen = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };
  const submit: SubmitHandler<ITaskForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(submit)();
        }}
      >
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
        <div className="p-4">
          {/* Task Name & Interval */}
          <div className="flex gap-2">
            <label
              className={`flex-1 input input-bordered flex items-center gap-2 ${errors.taskName ? 'input-error' : ''} `}
            >
              <span className="whitespace-nowrap">Name</span>
              <input
                {...register('taskName', {
                  required: 'TaskName is required.',
                })}
                type="text"
                className="grow"
                placeholder="Task Name"
              />
            </label>
            <div className="w-full max-w-xs tooltip" data-tip="Interval">
              <input
                {...register('delay', {
                  required: 'Interval is required.',
                  valueAsNumber: true,
                  min: {
                    message: 'Interval must be equal or greater than 1000',
                    value: 1000,
                  },
                })}
                type="range"
                min={1000}
                max={5000}
                className="range"
                step="1000"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>1s</span>
                <span>2s</span>
                <span>3s</span>
                <span>4s</span>
                <span>5s</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="p-4 pt-0">
        <div className="divider"></div> {/* Create Condition */}
        <SubConditionCreateForm />
        <ConditionContainer status="unused" />
        <div className="chat chat-start mt-2">
          <div className="chat-bubble">
            Drag the conditions to the bottom section to apply
          </div>
        </div>
        <div className="chat chat-end mt-2">
          <div className="chat-bubble">
            <span
              className="text-blue-300 cursor-pointer"
              onClick={toggleModalOpen}
            >
              Click here to test if your conditions meet your expectations.
            </span>
          </div>
        </div>
        <div className="divider"></div>
        {/* Conditions */}
        {conditions.map((condition) => (
          <Fragment key={condition.id}>
            <ConditionContainer status="used" conditionId={condition.id} />
            <div className="divider">AND</div>
          </Fragment>
        ))}
        <div className="flex justify-center">
          <button className="btn btn-outline" onClick={appendCondition}>
            Add Condition Box
          </button>
        </div>
      </div>
      <ConditionCheckModal
        visible={modalOpen}
        onClose={toggleModalOpen}
        jobConditions={conditions}
      />
    </>
  );
};

const TaskFormWithContext = () => {
  return (
    <TaskFormContextProvider>
      <TaskForm />
    </TaskFormContextProvider>
  );
};

export default TaskFormWithContext;
