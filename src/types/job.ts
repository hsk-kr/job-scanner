export interface JobInfo {
  jobTitle: string;
  jobDescription: string;
}

export interface JobTask {
  id: string;
  taskName: string;
  status: JobTaskStatus;
  createdAt: string;
}

export type JobTaskStatus = 'done' | 'processing' | 'stopped' | 'ready';
