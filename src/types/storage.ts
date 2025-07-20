import { JobCondition } from './job';

export interface TaskFormDraft {
  taskId: string | null;
  isEdit: boolean;
  value: {
    taskName: string;
    delay: string;
    unusedSubConditions?: JobCondition['subConditions'];
    jobConditions?: JobCondition[];
  };
}
