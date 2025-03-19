import { JobInfo } from '@/types/job';
import { getCustomQuerySelectors } from '../storage';
import {
  QuerySelectorDescriptions,
  QuerySelectors,
  QuerySelectorsKey,
} from '@/types/storage';

type ClickableHTMLElement = HTMLElement & { click: VoidFunction };
export const querySelectors: QuerySelectors = {
  jobTitle: '.job-details-jobs-unified-top-card__job-title',
  jobDescription: '.jobs-box__html-content',
  jobCompanyName: '.job-details-jobs-unified-top-card__company-name',
  jobAdddtionalInfo:
    '.job-details-jobs-unified-top-card__primary-description-container',
  jobListPost: '.scaffold-layout__list div[data-view-name="job-card"]',
  clickItemInJobPost: 'div > div',
  activeJobPostInJobPost:
    'div[class*="jobs-search-results-list__list-item--active"]',
  jobListContainer: '.scaffold-layout__list > div',
  page: '.jobs-search-pagination__pages .jobs-search-pagination__indicator',
  clickItemInPage: 'button',
};

export const querySelectorDesciptions: QuerySelectorDescriptions = {
  jobTitle: 'job title element.',
  jobDescription: 'job description.',
  jobCompanyName: 'company name',
  jobAdddtionalInfo: 'element that includes company name.',
  jobListPost: 'job post in the job list.',
  clickItemInJobPost: 'element shows a job post when clicked.',
  activeJobPostInJobPost: `element shown it as selected job post in the job post element`,
  jobListContainer: 'element that includes job posts and is scrollable.',
  page: `page.`,
  clickItemInPage: `html element redirects when clicked.`,
};

export const getQuerySelectors = async () => {
  const customQuerySelectors = await getCustomQuerySelectors();

  return {
    ...querySelectors,
    ...customQuerySelectors,
  };
};

export const getElement = async <T extends HTMLElement>(
  key: QuerySelectorsKey
) => {
  return document.querySelector<T>((await getQuerySelectors())[key]);
};

export const getElements = async <T extends HTMLElement>(
  key: QuerySelectorsKey
) => {
  return document.querySelectorAll<T>((await getQuerySelectors())[key]);
};

export const getJobInfo = async (): Promise<JobInfo> => {
  const jobTitle = await getElement('jobTitle');
  const jobDescription = await getElement('jobDescription');
  const jobCompanyName = await getElement('jobCompanyName');
  const jobAdddtionalInfo = await getElement('jobAdddtionalInfo');
  const additionalInfo = `${jobCompanyName?.textContent?.trim() ?? ''} • ${jobAdddtionalInfo?.textContent?.trim() ?? ''}`;

  return {
    jobTitle: jobTitle?.textContent?.trim() ?? '',
    jobDescription: jobDescription?.textContent?.trim() ?? '',
    jobAdditionalInfo: additionalInfo,
    url: window.location.href,
  };
};

export const getJobList = async (): Promise<
  [NodeListOf<HTMLElement>, (index: number) => Promise<boolean>]
> => {
  const jobList = await getElements('jobListPost');

  const clickJob = async (index: number) => {
    const jobList = await getElements('jobListPost');
    const clickableItem = jobList[index].querySelector(
      (await getQuerySelectors())['clickItemInJobPost']
    );
    if (!clickableItem) return false;
    (clickableItem as ClickableHTMLElement)?.click();
    return true;
  };

  return [jobList, clickJob];
};

export const scrollToTheJobPost = async (target?: HTMLElement) => {
  const jobListContainer = await getElement('jobListContainer');

  if (jobListContainer)
    jobListContainer.scrollTop =
      target !== undefined
        ? jobListContainer.getBoundingClientRect().top +
            target.getBoundingClientRect().top || 0
        : jobListContainer.scrollHeight;
};

export const scrollToTheBottom = async (delay = 250) => {
  return new Promise<void>((resolve) => {
    let prevScrollTop = 0;
    let tm: NodeJS.Timeout | undefined = undefined;

    const scroll = async () => {
      const jobListContainer = await getElement('jobListContainer');

      if (!jobListContainer) {
        clearInterval(tm);
        resolve();
        return;
      }

      prevScrollTop = jobListContainer.scrollTop;
      jobListContainer.scrollTop += 200;

      if (jobListContainer.scrollTop === prevScrollTop) {
        resolve();
        clearInterval(tm);
        return;
      }
    };

    tm = setInterval(scroll, delay);
  });
};

export const moveToNextJobList = async () => {
  const querySelectors = await getQuerySelectors();
  const pages = await getElements('page');

  if (pages.length === 0) return false;

  for (let i = 0; i < pages.length; i++) {
    const isActive =
      pages[i].className.includes('active') ||
      pages[i].querySelector('button')?.className.includes('active') === true;

    if (isActive) {
      if (i === pages.length - 1) return false;
      (
        pages[i + 1]?.querySelector(
          querySelectors['clickItemInPage']
        ) as ClickableHTMLElement
      )?.click();
      break;
    }
  }

  return true;
};

export const isLoading = () => {
  const loading = document.querySelector('#main *[class*=--loading]');

  return loading !== null ? true : false;
};

export const removeHTMLTags = (html: string): string => {
  if (!html) return '';

  return html.replace(/(<([^>]+)>)/gi, '');
};
