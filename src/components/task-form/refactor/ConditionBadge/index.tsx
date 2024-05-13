import { JobCondition } from '@/types/job';
import { DragItem } from '@/types/taskform';
import { HTMLAttributes } from 'react';
import { useDrag } from 'react-dnd';

type ConditionBadgeProps = JobCondition['subConditions'][0] &
  DragItem & { onDelete?: VoidFunction };

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

  const buttonColor =
    dragItem.status === 'unused' ? 'badge-warning' : 'badge-success';
  return (
    <div
      data-id={id}
      className={`badge ${buttonColor} gap-2 text-nowrap`}
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

export default ConditionBadge;
