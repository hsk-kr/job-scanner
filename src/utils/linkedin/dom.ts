import { JobInfo } from '@/types/job';

export const getJobInfo = (body: HTMLElement): JobInfo | null => {
  const jobInfo: JobInfo = {
    jobTitle: '-',
    jobAdditionalInfo: '-',
    jobDescription: '-',
    url: window.location.href,
  };
  const jobsDetails = body.querySelector<HTMLElement>('.jobs-details');
  if (!jobsDetails) return null;

  const links = jobsDetails.querySelectorAll('a');
  let topCardContainer: HTMLElement | null = null;

  for (const link of links) {
    const href = link.href ?? '';

    if (!/\/jobs\/view\/.*\/\?.*/.test(href)) continue;

    jobInfo.jobTitle = link.textContent?.trim() ?? jobInfo.jobTitle;
    topCardContainer = getClosestParentFromChild(link, 'div', {
      verify: (element) =>
        element.className.includes('job-details') &&
        element.className.includes('__container'),
    });
    break;
  }
  if (!topCardContainer) return null;

  jobInfo.jobDescription =
    jobsDetails
      .querySelector<HTMLElement>('#job-details')
      ?.textContent?.trim() ?? '';
  if (jobInfo.jobDescription === '') return null;

  const divs = topCardContainer.querySelectorAll<HTMLDivElement>('div');
  const info: { companyName: string; extraInfo: string } = {
    companyName: '',
    extraInfo: '',
  };
  for (const div of divs) {
    const className = div.className;
    const isCompanyName =
      className.includes('company-name') && className.includes('job-details');
    const isExtraInfo =
      className.includes('primary-description-container') &&
      className.includes('job-details');

    if (isCompanyName)
      info.companyName = div.textContent?.trim() ?? info.companyName;
    if (isExtraInfo) info.extraInfo = div.textContent?.trim() ?? info.extraInfo;
  }

  if (info.companyName === '' || info.extraInfo === '') return null;

  jobInfo.jobAdditionalInfo = `${info.companyName} • ${info.extraInfo}`;

  return jobInfo;
};

export const getClosestParentFromChild = <T extends HTMLElement>(
  element: HTMLElement,
  parentTagName: string,
  options?: {
    verify?: (element: HTMLElement) => boolean;
  }
): T | null => {
  let current = element;

  while (current?.parentElement) {
    if (
      current.parentElement.tagName.toUpperCase() ===
      parentTagName.toUpperCase()
    ) {
      if (options?.verify && options.verify(current.parentElement) === false) {
        current = current.parentElement;
        continue;
      }
      return current.parentElement as T;
    }

    current = current.parentElement;
  }

  return null;
};

export const getJobListItems = (body: HTMLElement): HTMLLIElement[] => {
  const links = body.querySelectorAll<HTMLAnchorElement>('a');
  const jobListItems: HTMLLIElement[] = [];

  for (const link of links) {
    const href = link.href ?? '';

    if (/\/jobs\/view\/.*\/\?.*/.test(href)) {
      const li = getClosestParentFromChild<HTMLLIElement>(link, 'li');
      if (li) jobListItems.push(li);
    }
  }

  return jobListItems;
};

export const clickJobListItem = (jobListItem: HTMLLIElement): boolean => {
  const links = jobListItem.querySelectorAll<HTMLAnchorElement>('a');

  for (const link of links) {
    const href = link.href ?? '';

    if (!/\/jobs\/view\/.*\/\?.*/.test(href)) continue;

    link.click();
    return true;
  }

  return false;
};

export const getJobListContainer = (body: HTMLElement): HTMLElement | null => {
  const links = body.querySelectorAll<HTMLAnchorElement>('a');
  let jobLink: HTMLElement | null = null;

  for (const link of links) {
    const href = link.href ?? '';

    if (/\/jobs\/view\/.*\/\?.*/.test(href)) {
      jobLink = link;
      break;
    }
  }

  if (!jobLink) return null;

  let current = getClosestParentFromChild<HTMLUListElement>(jobLink, 'ul');
  let distance = 3;

  while (current && distance >= 1) {
    current = getClosestParentFromChild(current, 'div');
    if (current && current.scrollHeight > 0) return current;
    distance--;
  }

  return null;
};

export const scrollToTheBottom = async (element: HTMLElement, delay = 250) => {
  return new Promise<void>((resolve) => {
    let prevScrollTop = 0;
    let tm: NodeJS.Timeout | undefined = undefined;

    const scroll = () => {
      prevScrollTop = element.scrollTop;
      element.scrollTop += 200;

      if (element.scrollTop === prevScrollTop) {
        resolve();
        clearInterval(tm);
        return;
      }
    };

    tm = setInterval(scroll, delay);
  });
};

export const moveToNextJobPage = (body: HTMLElement): boolean => {
  const pageUl = body.querySelector<HTMLUListElement>(
    '#jobs-search-results-footer ul'
  );
  if (!pageUl) return false;

  const pageButtons = pageUl.querySelectorAll<HTMLButtonElement>('li button');

  for (const [i, pageButton] of pageButtons.entries()) {
    if (pageButton.className.includes('active')) {
      if (i >= pageButtons.length - 1) return false;
      pageButtons[i + 1].click();
      return true;
    }
  }

  return false;
};

export const scrollToTheJobListItem = (
  jobListContainer: HTMLElement,
  jobListItem: HTMLElement
) => {
  jobListContainer.scrollTop =
    jobListContainer.getBoundingClientRect().top +
    jobListItem.getBoundingClientRect().top;
};

export const removeHTMLTags = (html: string): string => {
  if (!html) return '';

  return html.replace(/(<([^>]+)>)/gi, '');
};
