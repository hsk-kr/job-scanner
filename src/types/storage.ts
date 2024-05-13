import { ActiveJobTask, JobCondition, JobTask } from './job';

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

export interface StorageData {
  tasks?: JobTask[];
  activeTask?: ActiveJobTask;
  draft?: TaskFormDraft;
}
