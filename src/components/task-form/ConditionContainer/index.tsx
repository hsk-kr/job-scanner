import { Fragment, useMemo, ComponentProps } from 'react';
import ConditionBadge from '../ConditionBadge';
import { useTaskForm } from '@/stores/taskform';
import { DragItem } from '@/types/taskform';
import Drop from '@/lib/dnd/components/Drop';

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
    moveSubCondition,
    deleteCondition,
    deleteSubCondition,
  } = useTaskForm();
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

  const handleDrop: ComponentProps<typeof Drop>['onDrop'] = (data) => {
    if (data?.name !== 'condition') return;

    const item = data.value;

    const from =
      item.status === 'unused'
        ? { subConditionId: item.subConditionId }
        : {
            conditionId: item.conditionId || '',
            subConditionId: item.subConditionId,
          };
    const to = { conditionId };
    moveSubCondition(from, to);
  };

  return (
    <Drop name="condition" onDrop={handleDrop}>
      <div className="relative p-4 h-28 card bg-base-300 rounded-box mt-4 flex gap-2 overflow-y-auto flex-row flex-wrap content-start items-center">
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
              <div className="text-white text-xs">OR</div>
            )}
          </Fragment>
        ))}
        {canDelete && conditionId && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="absolute top-2 right-2 inline-block w-4 h-4 stroke-current cursor-pointer scale-[1.3] hover:scale-[1.6] transition-all"
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
    </Drop>
  );
};

export default ConditionContainer;
