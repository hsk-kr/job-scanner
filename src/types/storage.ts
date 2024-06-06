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

export interface QuerySelectors {
  jobTitle: string;
  jobDescription: string;
  jobCompanyName: string;
  jobAdddtionalInfo: string;
  jobListPost: string;
  clickItemInJobPost: string;
  activeJobPostInJobPost: string;
  jobListContainer: string;
  page: string;
  clickItemInPage: string;
}

export type QuerySelectorDescriptions = QuerySelectors;

export type QuerySelectorsKey = keyof QuerySelectors;
