export interface JobInfo {
  jobTitle: string;
  jobDescription: string;
}

export interface JobTask {
  id: string;
  taskName: string;
  status: JobTaskStatus;
  updatedAt: string;
  delay: number;
  jobConditions: JobCondition[];
  logMessage?: string;
}

export type ConditionTarget = 'title' | 'description';

export type ConditionOperator = '=' | '!=' | '<' | '>' | '<=' | '>=';

export interface JobCondition {
  id: string;
  subConditions: {
    id: string;
    not: boolean;
    caseInsensitive: boolean;
    target: ConditionTarget;
    operator: ConditionOperator;
    text: string;
    frequency: number;
  }[];
}

export type JobTaskStatus = 'done' | 'processing' | 'stopped' | 'ready';
