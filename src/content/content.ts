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
import { addUpActiveTask, finishTask, getActiveTask } from '@/utils/storage';
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

  let activeTask = await getActiveTask();

  while (activeTask) {
    // There is no task in the progress
    if (!activeTask) {
      return {
        activeTask,
        value: null,
      };
    }

    await delay(activeTask.delay);
    await delayUntilDoneLoading();
    await scrollToTheBottom(); // to load all job posts.

    let [jobList, clickJob] = getJobList();
    let count = jobList.length;

    for (let i = 0; i < count; i++) {
      activeTask = await getActiveTask();
      // There is no task in the progress
      if (!activeTask) {
        return {
          activeTask,
          value: null,
        };
      }

      // since it returns visible job list, gets joblist every time.
      scrollToTheJobPost(jobList[i]);
      await delayUntilDoneLoading();

      [jobList, clickJob] = getJobList();
      count = jobList.length;

      // When the div of a job post is not usual, skip the job post.
      if (!clickJob(i)) {
        continue;
      }

      await delay(activeTask.delay);

      // Sometimes, loading of the job post doesn't finish,
      // when it happens, click another item then click back to the item.
      try {
        await delayUntilDoneLoading();
      } catch {
        // if the job post is the only one in the job list, refresh it.
        if (count === 1) {
          window.location.reload();
          return;
        }

        // click another post
        let isNormalJobPost: boolean;
        if (i === 0) {
          isNormalJobPost = clickJob(1);
        } else {
          isNormalJobPost = clickJob(0);
        }

        if (!isNormalJobPost) {
          window.location.reload();
          return;
        }

        // it will increase i by 1 and will come back to this job post in the next step.
        i--;
        await delay(activeTask.delay);
        continue;
      }

      const jobInfo = getJobInfo();
      // Returns jobInfo
      yield {
        activeTask,
        value: jobInfo,
      };
    }

    // next page and wait
    const success = moveToNextJobList();

    // Last Page
    if (!success) {
      return {
        activeTask,
        value: null,
      };
    }

    await delayUntilDoneLoading();
    activeTask = await getActiveTask();
  }
};

const CARWL_INTERVAL = 1000;
const crawlJobPosts = async () => {
  let taskId = '';

  try {
    for await (const jobPost of genearatorJobPosts()) {
      taskId = jobPost.activeTask.id;

      // add a job into the storage
      if (
        jobPost.value &&
        checkJobConditions(
          jobPost.value.jobTitle,
          removeHTMLTags(jobPost.value.jobDescription),
          jobPost.activeTask.jobConditions
        )
      ) {
        // Remove jobDecsription as it takes too much space
        await addUpActiveTask({ ...jobPost.value, jobDescription: '' });
      } else {
        await addUpActiveTask(null);
      }
    }

    if (taskId) {
      await finishTask({
        status: 'done',
        message: 'Done job searching.',
      });
    }
  } catch (e) {
    console.error(e);
  }

  setTimeout(crawlJobPosts, CARWL_INTERVAL);
};

setTimeout(crawlJobPosts, CARWL_INTERVAL);
