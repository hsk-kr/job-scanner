import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import TaskFormContextProvider, { useTaskForm } from '@/stores/taskform';
import ConditionContainer from '../ConditionContainer';
import { Fragment, useState } from 'react';
import { ITaskForm } from '@/types/taskform';
import { SubmitHandler } from 'react-hook-form';
import SubConditionCreateForm from '../SubConditionCreateForm';
import ConditionCheckModal from '@/components/modals/ConditionCheckModal';
import { clearDraftTaskFormData } from '@/utils/storage';
import { useJobTasks } from '@/stores/job-task';
import Loading from '@/components/Loading';

const TaskForm = () => {
  const { form, isEdit, taskId, conditions, appendCondition } = useTaskForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const { createJobTask, updateJobTask } = useJobTasks();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toggleModalOpen = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };
  const submit: SubmitHandler<ITaskForm> = async (data) => {
    setLoading(true);

    await clearDraftTaskFormData();

    if (isEdit && taskId) {
      await updateJobTask(taskId, {
        taskName: data.taskName,
        delay: data.delay,
        jobConditions: conditions,
        status: 'ready',
      });
    } else {
      await createJobTask({
        taskName: data.taskName,
        delay: data.delay,
        jobConditions: conditions,
      });
    }

    navigate('/');
  };

  const back = async () => {
    setLoading(true);
    await clearDraftTaskFormData();
    navigate('/');
  };

  return (
    <>
      {loading && <Loading />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(submit)();
        }}
      >
        <div className="navbar bg-neutral">
          <div className="gap-2 navbar-start">
            <button
              type="button"
              className="btn-sm btn-ghost text-xl flex justify-center items-center rounded"
              onClick={back}
            >
              <IoIosArrowBack />
            </button>
            <a className="btn btn-ghost text-lg">Task Form</a>
          </div>
          <div className="navbar-end">
            <button
              className={`btn btn-sm ${isEdit ? 'btn-warning' : ''}`}
              disabled={loading}
            >
              {isEdit ? 'Update' : 'Create'}
            </button>
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
                step={1000}
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
        <ConditionContainer status="unused" canDelete={false} />
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
            <ConditionContainer
              status="used"
              conditionId={condition.id}
              canDelete={conditions.length > 1}
            />
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
