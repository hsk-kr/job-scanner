import { JobCondition } from './job';

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

export interface ITaskForm {
  taskName: string;
  delay: number;
}

export type ITaskSubConditionForm = Omit<
  JobCondition['subConditions'][0],
  'id'
>;
