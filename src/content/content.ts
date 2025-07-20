import { JobInfo } from '@/types/job';
import { checkJobConditions } from '@/utils/condition';
import {
  getJobInfo,
  getJobListItems,
  getJobListContainer,
  removeHTMLTags,
  clickJobListItem,
  scrollToTheBottom,
  scrollToTheJobListItem,
  moveToNextJobPage,
} from '@/utils/linkedin/dom';
import { addUpActiveTask, finishTask, getActiveTask } from '@/utils/storage';
import { delay } from '@/utils/time';

const DELAY = 3000;

const getJobPosts = async function* () {
  let activeTask = await getActiveTask();

  while (activeTask) {
    if (!activeTask) {
      return {
        activeTask,
        value: null,
      };
    }

    const jobListContainer = getJobListContainer(document.body);
    if (!jobListContainer) {
      await delay(DELAY);
      continue;
    }
    await delay(activeTask.delay);
    await scrollToTheBottom(jobListContainer); // to load all job posts.

    let jobListItems = getJobListItems(document.body);
    let listItemIdx = 0;

    while (listItemIdx < jobListItems.length) {
      const jobListItem = jobListItems[listItemIdx];

      activeTask = await getActiveTask();
      if (!activeTask) {
        return {
          activeTask,
          value: null,
        };
      }

      scrollToTheJobListItem(jobListContainer, jobListItem);
      clickJobListItem(jobListItem);

      let retry = 5;
      let jobInfo: JobInfo | null = null;

      do {
        await delay(DELAY);
        jobInfo = getJobInfo(document.body);
        retry--;
      } while (jobInfo === null && retry > 0);
      if (retry <= 0) {
        window.location.reload();
        continue;
      }

      yield {
        activeTask,
        value: jobInfo,
      };

      jobListItems = getJobListItems(document.body);
      listItemIdx++;
    }

    const hasMorePages = moveToNextJobPage(document.body);
    if (!hasMorePages) {
      return {
        activeTask,
        value: null,
      };
    }
  }
};

const CARWL_INTERVAL = 1000;
const crawlJobPosts = async () => {
  let taskId = '';

  try {
    for await (const jobPost of getJobPosts()) {
      taskId = jobPost.activeTask.id;

      if (
        jobPost.value &&
        checkJobConditions(
          jobPost.value.jobTitle,
          removeHTMLTags(jobPost.value.jobDescription),
          jobPost.value.jobAdditionalInfo,
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
      });
    }
  } catch (e) {
    console.error(e);
  }

  setTimeout(crawlJobPosts, CARWL_INTERVAL);
};

setTimeout(crawlJobPosts, CARWL_INTERVAL);
