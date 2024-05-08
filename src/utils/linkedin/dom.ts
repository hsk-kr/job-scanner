import { JobInfo } from '@/types/job';

export const getJobInfo = (): JobInfo => {
  const jobTitle = document.querySelector(
    '.job-details-jobs-unified-top-card__job-title'
  );
  const jobDescription = document.querySelector(
    '.jobs-description-content__text > div'
  );
  const jobAdddtionalInfo = document.querySelector(
    '.job-details-jobs-unified-top-card__primary-description-container'
  );

  return {
    jobTitle: jobTitle?.textContent?.trim() ?? '',
    jobDescription: jobDescription?.textContent?.trim() ?? '',
    jobAdditionalInfo: jobAdddtionalInfo?.textContent?.trim() ?? '',
    url: window.location.href,
  };
};

export const getJobList = (): [
  NodeListOf<HTMLLIElement>,
  (index: number) => boolean
] => {
  const jobList = document.querySelectorAll<HTMLLIElement>(
    '.jobs-search-results-list > ul > li'
  );

  const clickJob = (index: number) => {
    const jobList = document.querySelectorAll<HTMLLIElement>(
      '.jobs-search-results-list > ul > li'
    );
    const clickableItem =
      jobList[index].querySelector<HTMLDivElement>('div > div');
    if (!clickableItem) return false;
    clickableItem.click();
    return true;
  };

  return [jobList, clickJob];
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

export const scrollToTheJobPost = (target?: HTMLElement) => {
  const jobListContainer = document.querySelector('.jobs-search-results-list');
  if (jobListContainer)
    jobListContainer.scrollTop =
      target !== undefined
        ? jobListContainer.getBoundingClientRect().top +
            target.getBoundingClientRect().top || 0
        : jobListContainer.scrollHeight;
};

export const scrollToTheBottom = (delay = 250) => {
  return new Promise<void>((resolve) => {
    let prevScrollTop = 0;
    let tm: NodeJS.Timeout | undefined = undefined;

    const scroll = () => {
      const jobListContainer = document.querySelector(
        '.jobs-search-results-list'
      );
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

export const moveToNextJobList = () => {
  const pages = document.querySelectorAll<HTMLLIElement>(
    'ul.jobs-search-pagination__pages > li'
  );

  if (pages.length === 0) return false;

  for (let i = 0; i < pages.length; i++) {
    const button = pages[i].querySelector('button');
    if (
      button?.classList.contains(
        'jobs-search-pagination__indicator-button--active'
      )
    ) {
      if (i === pages.length - 1) return false;
      pages[i + 1]?.querySelector('button')?.click();
      break;
    }
  }

  return true;
};

export const isLoading = () => {
  const loading =
    document.querySelector('#main *[class*=--loading]') ??
    document.querySelector('.jobs-ghost-fadein-placeholder') ??
    document.querySelector('*[class*=ghost-placeholder]');

  return loading !== null ? true : false;
};

export const removeHTMLTags = (html: string): string => {
  if (!html) return '';

  return html.replace(/(<([^>]+)>)/gi, '');
};
