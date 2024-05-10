import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import {
  HTMLAttributes,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { JobCondition } from '@/types/job';
import { v4 as uuidv4 } from 'uuid';

interface TaskFormContext {
  unusedSubConditions: JobCondition['subConditions'];
  conditions: JobCondition[];
  moveCondition: (from: DragItem, to: DragItem) => void;
}

type ConditionBadgeProps = JobCondition['subConditions'][0] & DragItem;

interface ConditionContainerProps {
  status: DragItem['status'];
  conditionId?: string;
}

type DragItem =
  | { status: 'unused'; subConditionId: string }
  | { status: 'used'; conditionId: string; subConditionId: string };

const TaskFormContext = createContext<TaskFormContext>(null!);

const useTaskFormContext = () => useContext(TaskFormContext);

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
  const { unusedSubConditions, conditions } = useTaskFormContext();

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
        <select className="select select-bordered max-w-xs">
          <option selected>Job Title</option>
          <option>Job Description</option>
        </select>
        <select className="select select-bordered max-w-xs">
          <option selected>=</option>
          <option>!=</option>
          <option>{'<'}</option>
          <option>{'<='}</option>
          <option>{'>'}</option>
          <option>{'>='}</option>
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
        <ConditionContainer
          key={condition.id}
          status="used"
          conditionId={'test'}
        />
      ))}
    </form>
  );
};

const ConditionContainer = ({
  status,
  conditionId,
}: ConditionContainerProps) => {
  const { unusedSubConditions, conditions, moveCondition } =
    useTaskFormContext();
  const [, drop] = useDrop<DragItem>(() => ({
    accept: 'condition',
    drop: (item) => {
      if (item.status === 'unused') {
        moveCondition(item, {
          status,
          conditionId: conditionId || '',
          subConditionId: '',
        });
      }
      return [];
    },
  }));
  const subConditions = useMemo(() => {
    if (status === 'unused') return unusedSubConditions;
    return conditions[0].subConditions;
  }, [status, conditions, unusedSubConditions]);

  return (
    <div
      className="p-4 h-28 card bg-base-300 rounded-box mt-4 flex gap-2 overflow-y-auto flex-row flex-wrap"
      ref={drop}
    >
      {subConditions.map((subCondition) => (
        <ConditionBadge
          key={subCondition.id}
          status={status}
          conditionId={conditionId || ''}
          subConditionId={subCondition.id}
          {...subCondition}
        />
      ))}
    </div>
  );
};

const ConditionBadge = ({
  id,
  not,
  caseInsensitive,
  frequency,
  operator,
  target,
  text,
  ...dragItem
}: ConditionBadgeProps) => {
  let conditionText = '';
  conditionText += not ? 'not, ' : '';
  conditionText += caseInsensitive ? 'ci, ' : '';
  conditionText += target === 'title' ? 'Job Title, ' : 'Job Description, ';
  conditionText += `${operator}, `;
  conditionText += `${frequency}, `;
  conditionText += `"${text}"`;

  const [collected, drag] = useDrag<
    DragItem,
    DragItem,
    HTMLAttributes<HTMLDivElement>
  >(() => ({
    type: 'condition',
    item: dragItem,
  }));

  return (
    <div
      className="badge badge-warning gap-2 text-nowrap"
      ref={drag}
      {...collected}
    >
      {conditionText}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-4 h-4 stroke-current cursor-pointer hover:scale-125 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  );
};

const TaskForm = () => {
  const [unusedSubConditions, setUnusedSubConditions] = useState<
    JobCondition['subConditions']
  >(
    Array(30)
      .fill(0)
      .map(() => ({
        id: uuidv4(),
        not: false,
        caseInsensitive: true,
        target: 'title',
        operator: '=',
        frequency: 1,
        text: 'jobtitle',
      }))
  );
  const [conditions, setConditions] = useState<JobCondition[]>([
    { id: 'test', subConditions: [] },
  ]);

  const moveCondition = useCallback((from: DragItem, to: DragItem) => {
    try {
      if (from.status === 'unused') {
        const subCondition = unusedSubConditions.find(
          (e) => e.id === from.subConditionId
        );
        if (!subCondition) throw new Error('subCondition');

        if (to.status === 'used') {
          setConditions((prevConditions) => {
            return prevConditions.map((condition) => {
              if (condition.id === to.conditionId) {
                condition.subConditions =
                  condition.subConditions.concat(subCondition);
              }

              return condition;
            });
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const value = { unusedSubConditions, conditions, moveCondition };

  return (
    <TaskFormContext.Provider value={value}>
      <TaskFormHeader />
      <TaskFormBody />
    </TaskFormContext.Provider>
  );
};

export default TaskForm;
