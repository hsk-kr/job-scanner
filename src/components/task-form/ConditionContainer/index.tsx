// import { useDrop } from 'react-dnd';
import { Fragment, useMemo } from 'react';
import ConditionBadge from '../ConditionBadge';
import { useTaskForm } from '@/stores/taskform';
import { DragItem } from '@/types/taskform';

interface ConditionContainerProps {
  status: DragItem['status'];
  conditionId?: string;
  canDelete: boolean;
}

const ConditionContainer = ({
  status,
  conditionId,
  canDelete,
}: ConditionContainerProps) => {
  const {
    unusedSubConditions,
    conditions,
    // moveSubCondition,
    deleteCondition,
    deleteSubCondition,
  } = useTaskForm();
  // const [, drop] = useDrop<DragItem>(
  //   () => ({
  //     accept: 'condition',
  //     drop: (item) => {
  //       const from =
  //         item.status === 'unused'
  //           ? { subConditionId: item.subConditionId }
  //           : {
  //               conditionId: item.conditionId || '',
  //               subConditionId: item.subConditionId,
  //             };
  //       const to = { conditionId };
  //       moveSubCondition(from, to);
  //     },
  //   }),
  //   [moveSubCondition]
  // );
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
      className="relative p-4 h-28 card bg-base-300 rounded-box mt-4 flex gap-2 overflow-y-auto flex-row flex-wrap content-start"
      // ref={drop}
    >
      {subConditions?.map((subCondition, subConditionIdx) => (
        <Fragment key={subCondition.id}>
          <ConditionBadge
            status={status}
            conditionId={conditionId || ''}
            subConditionId={subCondition.id}
            onDelete={handleSubConditionDelete(subCondition.id)}
            {...subCondition}
          />
          {subConditionIdx < subConditions.length - 1 && (
            <div className="text-white text-sm">OR</div>
          )}
        </Fragment>
      ))}
      {canDelete && conditionId && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute top-1 right-1 inline-block w-4 h-4 stroke-current cursor-pointer hover:scale-125 transition-all"
          onClick={() => deleteCondition(conditionId)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default ConditionContainer;
