import { JobInfo } from '@/types/job';

export const getJobInfo = (): JobInfo => {
  const jobTitle = document.querySelector(
    '.job-details-jobs-unified-top-card__job-title'
  );
  const jobDescription = document.querySelector('#job-details > span');

  return {
    jobTitle: jobTitle?.textContent?.trim() ?? '',
    jobDescription: jobDescription?.textContent?.trim() ?? '',
  };
};

export const getJobList = () => {
  const jobList = document.querySelectorAll<HTMLLIElement>(
    '.jobs-search-results-list > ul > li'
  );
  return jobList;
};

export const getSelectedJobIndex = (
  initialJobList?: NodeListOf<HTMLLIElement>
) => {
  const jobList =
    initialJobList ??
    document.querySelectorAll<HTMLLIElement>(
      '.jobs-search-results-list > ul > li'
    );

  for (let i = 0; i < jobList.length; i++) {
    const jobListItem = jobList[i];
    if (
      jobListItem.querySelector(
        'div[class*="jobs-search-results-list__list-item--active"]'
      ) !== null
    )
      return i;
  }

  return null;
};

export const scrollJobListToBottom = () => {
  const jobListContainer = document.querySelector('.jobs-search-results-list');
  if (jobListContainer) jobListContainer.scrollTop = 10000;
};

export const moveToNextJobList = () => {
  const pages = document.querySelectorAll<HTMLLIElement>(
    'ul.artdeco-pagination__pages > li'
  );

  if (pages.length === 0) return false;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains('selected')) {
      if (i === pages.length - 1) return false;
      const button = pages[i + 1].querySelector<HTMLButtonElement>('button');
      button?.click();
      break;
    }
  }

  return true;
};

export const isLoading = () => {
  const loading = document.querySelector('#main *[class*=--loading]');

  return loading !== null ? true : false;
};
