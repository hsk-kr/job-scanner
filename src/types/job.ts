export interface JobInfo {
  jobTitle: string;
  jobDescription: string;
  jobAdditionalInfo: string;
  url: string;
}

export interface JobTask {
  id: string;
  taskName: string;
  status: JobTaskStatus;
  updatedAt: string;
  delay: number;
  jobConditions: JobCondition[];
  foundJobs?: JobInfo[]; // Set optional to integrate to the old version
  numOfTotalJobs?: number; // Set optional to integrate to the old version
}

export interface ActiveJobTask {
  numOfTotalJobs: number;
  foundJobs: JobInfo[];
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
