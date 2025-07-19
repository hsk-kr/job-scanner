import Drag from '@/lib/dnd/components/Drag';
import { JobCondition } from '@/types/job';
import { DragItem } from '@/types/taskform';

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
  let targetText: string;
  switch (target) {
    case 'title':
      targetText = 'Job Title';
      break;
    case 'description':
      targetText = 'Job Description';
      break;
    case 'additional_info':
      targetText = 'Job Additional Info';
      break;
    case 'applicants':
      targetText = 'applicants';
      break;
  }
  let conditionText = '';
  conditionText += not ? 'not, ' : '';
  conditionText += caseInsensitive ? 'ci, ' : '';
  conditionText += `${targetText}, `;
  conditionText += `${operator}, `;
  conditionText += `${frequency}, `;
  conditionText += `"${text}"`;

  const buttonColor =
    dragItem.status === 'unused' ? 'badge-warning' : 'badge-success';
  return (
    <Drag name="condition" value={dragItem}>
      <div data-id={id} className={`badge ${buttonColor} gap-2 text-nowrap`}>
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
    </Drag>
  );
};

export default ConditionBadge;
