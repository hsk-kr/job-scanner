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
}

export type ConditionTarget = 'title' | 'description';

export type ConditionOperator = '=' | '!=' | '<' | '>' | '<=' | '>=';

export interface JobCondition {
  key: string;
  conditions: {
    key: string;
    not: boolean;
    caseInsensitive: boolean;
    target: ConditionTarget;
    operator: ConditionOperator;
    text: string;
    frequency: number;
  }[];
}

export type JobTaskStatus = 'done' | 'processing' | 'stopped' | 'ready';
