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
  moveSubCondition: MoveCondition;
  deleteSubCondition: DeleteSubCondition;
}

type ConditionBadgeProps = JobCondition['subConditions'][0] &
  DragItem & { onDelete?: VoidFunction };

interface ConditionContainerProps {
  status: DragItem['status'];
  conditionId?: string;
}

type DragItemUnusedCondition = { status: 'unused'; subConditionId: string };

type DragItemUsedCondition = {
  status: 'used';
  conditionId: string;
  subConditionId: string;
};

type DragItem = DragItemUnusedCondition | DragItemUsedCondition;

/**
 * If conditionId does not exist in `from`, it means the data came from unusedConditions.
 * If conditionId does not exist in `to`, it means the data gets into the unusedConditions.
 */
type MoveCondition = (
  from: { conditionId?: string; subConditionId: string },
  to: { conditionId?: string }
) => void;

/**
 * If conditionId exists, it means subCondition is in one of the usedConditions
 * Otherwise, it places in the unusedSubConditions;
 */
type DeleteSubCondition = (params: {
  conditionId?: string;
  subConditionId: string;
}) => void;

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

const ConditionContainer = ({
  status,
  conditionId,
}: ConditionContainerProps) => {
  const {
    unusedSubConditions,
    conditions,
    moveSubCondition,
    deleteSubCondition,
  } = useTaskFormContext();
  const [, drop] = useDrop<DragItem>(
    () => ({
      accept: 'condition',
      drop: (item) => {
        const from =
          item.status === 'unused'
            ? { subConditionId: item.subConditionId }
            : {
                conditionId: conditionId || '',
                subConditionId: item.subConditionId,
              };
        const to = { conditionId };
        moveSubCondition(from, to);
      },
    }),
    [moveSubCondition]
  );
  const subConditions = useMemo(() => {
    if (status === 'unused') return unusedSubConditions;
    return conditions.find((c) => c.id === conditionId)?.subConditions;
  }, [status, conditions, unusedSubConditions, conditionId]);

  const handleSubConditionDelete = (subConditionId: string) => () => {
    deleteSubCondition({
      conditionId,
      subConditionId,
    });
  };

  return (
    <div
      className="p-4 h-28 card bg-base-300 rounded-box mt-4 flex gap-2 overflow-y-auto flex-row flex-wrap content-start"
      ref={drop}
    >
      {subConditions?.map((subCondition, subConditionIdx) => (
        <>
          <ConditionBadge
            key={subCondition.id}
            status={status}
            conditionId={conditionId || ''}
            subConditionId={subCondition.id}
            onDelete={handleSubConditionDelete(subCondition.id)}
            {...subCondition}
          />
          {subConditionIdx < subConditions.length - 1 && (
            <div className="text-white text-sm">OR</div>
          )}
        </>
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
  onDelete,
  ...dragItem
}: ConditionBadgeProps) => {
  const [collected, drag] = useDrag<
    DragItem,
    DragItem,
    HTMLAttributes<HTMLDivElement>
  >(() => ({
    type: 'condition',
    item: dragItem,
  }));

  let conditionText = '';
  conditionText += not ? 'not, ' : '';
  conditionText += caseInsensitive ? 'ci, ' : '';
  conditionText += target === 'title' ? 'Job Title, ' : 'Job Description, ';
  conditionText += `${operator}, `;
  conditionText += `${frequency}, `;
  conditionText += `"${text}"`;

  return (
    <div
      data-id={id}
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
        onClick={onDelete}
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

const dummy: JobCondition['subConditions'] = Array(5)
  .fill(0)
  .map(() => ({
    id: uuidv4(),
    not: false,
    caseInsensitive: true,
    target: 'title',
    operator: '=',
    frequency: 1,
    text: 'jobtitle',
  }));

const TaskForm = () => {
  const [unusedSubConditions, setUnusedSubConditions] =
    useState<JobCondition['subConditions']>(dummy);
  const [conditions, setConditions] = useState<JobCondition[]>([
    { id: 'test', subConditions: [] },
  ]);

  const deleteSubCondition: DeleteSubCondition = useCallback(
    ({ conditionId, subConditionId }) => {
      if (!conditionId) {
        setUnusedSubConditions((prevUnusedSubConditions) =>
          prevUnusedSubConditions.filter((sc) => sc.id !== subConditionId)
        );
        return;
      }

      setConditions((c) =>
        c.map((c) => {
          if (c.id === conditionId) {
            c.subConditions = c.subConditions.filter(
              (sc) => sc.id !== subConditionId
            );
          }
          return c;
        })
      );
    },
    []
  );

  const moveSubCondition = useCallback<MoveCondition>(
    (from, to) => {
      try {
        let newUnusedSubConditions = [...unusedSubConditions];
        const newConditions = [...conditions];
        let hasUnusedSubConditionsUpdated = false;
        let hasConditionsUpdated = false;

        // Find condition will move and remove it
        let fromCondition;
        if (!from.conditionId) {
          newUnusedSubConditions = newUnusedSubConditions.filter((c) => {
            if (c.id === from.subConditionId) fromCondition = c;
            return c.id !== from.subConditionId;
          });
          if (!fromCondition)
            throw new Error(
              `cannot find subCondition in unusedSubConditions - ${from.subConditionId}`
            );
          hasUnusedSubConditionsUpdated = true;
        } else {
          const condition = newConditions.find(
            (c) => c.id === from.conditionId
          );
          if (!condition)
            throw new Error(
              `cannot find condition in conditions - ${from.conditionId}`
            );

          condition.subConditions = condition.subConditions.filter((sc) => {
            if (sc.id === from.subConditionId) fromCondition = sc;
            return sc.id !== from.subConditionId;
          });
          if (!fromCondition)
            throw new Error(
              `cannot find subCondition in conditions - ${from.conditionId}/${from.subConditionId}`
            );
          hasConditionsUpdated = true;
        }

        // Move the condition finded in the previous step to the target list
        if (to.conditionId) {
          const condition = newConditions.find((c) => c.id === to.conditionId);
          condition?.subConditions.push(fromCondition);
          hasConditionsUpdated = true;
        } else {
          newUnusedSubConditions.push(fromCondition);
          hasUnusedSubConditionsUpdated = true;
        }

        // Update states
        if (hasConditionsUpdated) setConditions(newConditions);
        if (hasUnusedSubConditionsUpdated)
          setUnusedSubConditions(newUnusedSubConditions);
      } catch (e) {
        console.error(e);
      }
    },
    [conditions, unusedSubConditions]
  );

  const value = {
    unusedSubConditions,
    conditions,
    moveSubCondition,
    deleteSubCondition,
  };

  return (
    <TaskFormContext.Provider value={value}>
      <TaskFormHeader />
      <TaskFormBody />
    </TaskFormContext.Provider>
  );
};

export default TaskForm;
