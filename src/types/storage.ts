import { ActiveJobTask, JobTask } from './job';

export interface StorageData {
  tasks?: JobTask[];
  activeTask?: ActiveJobTask;
}
