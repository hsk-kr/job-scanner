import { useDrop } from 'react-dnd';
import { useMemo } from 'react';
import ConditionBadge from '../ConditionBadge';
import { useTaskFormContext } from '@/stores/taskform';
import { DragItem } from '@/types/taskform';

interface ConditionContainerProps {
  status: DragItem['status'];
  conditionId?: string;
}

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

export default ConditionContainer;
