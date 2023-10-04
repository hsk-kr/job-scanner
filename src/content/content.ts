import { JobInfo } from '@/types/job';
import { checkJobConditions } from '@/utils/condition';
import {
  getJobInfo,
  getJobList,
  isLoading,
  moveToNextJobList,
  removeHTMLTags,
  scrollToTheBottom,
  scrollToTheJobPost,
} from '@/utils/linkedin/dom';
import {
  addUpActiveTask,
  finishTask,
  getProcessingTask,
} from '@/utils/storage';
import { delay } from '@/utils/time';

const genearatorJobPosts = async function* () {
  const delayUntilDoneLoading = () => {
    const LOADING_RECHECK_INTERVAL = 200;
    const MAX_TRY = 30;
    let cnt = 0;
    return new Promise<void>((resolve, reject) => {
      const cb = () => {
        if (isLoading()) {
          cnt++;
          if (cnt > MAX_TRY) {
            clearInterval(tm);
            reject(`tried over MAX_TRY(${MAX_TRY}) times.`);
          }
        } else {
          clearInterval(tm);
          resolve();
        }
      };

      const tm = setInterval(cb, LOADING_RECHECK_INTERVAL);
      cb();
    });
  };

  let processingTask = await getProcessingTask();

  while (processingTask) {
    // There is no task in the progress
    if (!processingTask) {
      return {
        processingTask,
        value: null,
      };
    }

    await delay(processingTask.delay);
    await delayUntilDoneLoading();
    await scrollToTheBottom(); // to load all job posts.

    let [jobList, clickJob] = getJobList();
    let count = jobList.length;

    for (let i = 0; i < count; i++) {
      processingTask = await getProcessingTask();
      // There is no task in the progress
      if (!processingTask) {
        return {
          processingTask,
          value: null,
        };
      }

      // since it returns visible job list, gets joblist every time.
      scrollToTheJobPost(jobList[i]);
      await delayUntilDoneLoading();

      [jobList, clickJob] = getJobList();
      count = jobList.length;

      if (!clickJob(i)) {
        continue;
      }

      await delay(processingTask.delay);
      await delayUntilDoneLoading();

      const jobInfo = getJobInfo();
      // Returns jobInfo
      yield {
        processingTask,
        value: jobInfo,
      };
    }

    // next page and wait
    const success = moveToNextJobList();

    // Last Page
    if (!success) {
      return {
        processingTask,
        value: null,
      };
    }

    await delayUntilDoneLoading();
    processingTask = await getProcessingTask();
  }
};

const CARWL_INTERVAL = 1000;
const crawlJobPosts = async () => {
  let numOfJobPostsHaveSeen = 0;
  let jobsHaveFound: JobInfo[] = [];
  let taskId = '';

  try {
    for await (const jobPost of genearatorJobPosts()) {
      taskId = jobPost.processingTask.id;
      numOfJobPostsHaveSeen++;

      if (jobPost.value === null) {
        break;
      }

      // add a job into the storage
      if (
        checkJobConditions(
          jobPost.value.jobTitle,
          removeHTMLTags(jobPost.value.jobDescription),
          jobPost.processingTask.jobConditions
        )
      ) {
        // Remove jobDecsription, the text is too long.
        jobsHaveFound.push({ ...jobPost.value, jobDescription: '' });

        await addUpActiveTask(numOfJobPostsHaveSeen, jobsHaveFound);
        numOfJobPostsHaveSeen = 0;
        jobsHaveFound = [];
      }
    }

    if (taskId) {
      await addUpActiveTask(numOfJobPostsHaveSeen, jobsHaveFound);
      await finishTask(taskId, {
        status: 'done',
        message: 'Done job searching.',
      });
    }
  } catch (e) {
    await addUpActiveTask(numOfJobPostsHaveSeen, jobsHaveFound);
    console.error(e);
  }

  setTimeout(crawlJobPosts, CARWL_INTERVAL);
};

setTimeout(crawlJobPosts, CARWL_INTERVAL);
