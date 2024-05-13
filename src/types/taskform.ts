import { JobCondition } from '@/types/job';

export type DragItemUnusedCondition = {
  status: 'unused';
  subConditionId: string;
};

export type DragItemUsedCondition = {
  status: 'used';
  conditionId: string;
  subConditionId: string;
};

export type DragItem = DragItemUnusedCondition | DragItemUsedCondition;

export interface TaskFormContext {
  unusedSubConditions: JobCondition['subConditions'];
  conditions: JobCondition[];
  moveSubCondition: MoveCondition;
  deleteSubCondition: DeleteSubCondition;
}

/**
 * If conditionId does not exist in `from`, it means the data came from unusedConditions.
 * If conditionId does not exist in `to`, it means the data gets into the unusedConditions.
 */
export type MoveCondition = (
  from: { conditionId?: string; subConditionId: string },
  to: { conditionId?: string }
) => void;

/**
 * If conditionId exists, it means subCondition is in one of the usedConditions
 * Otherwise, it places in the unusedSubConditions;
 */
export type DeleteSubCondition = (params: {
  conditionId?: string;
  subConditionId: string;
}) => void;
