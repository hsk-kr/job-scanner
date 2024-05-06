/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { beforeAll, describe, expect, test, vi } from 'vitest';
import {
  getJobInfo,
  getJobList,
  getSelectedJobIndex,
  isLoading,
  moveToNextJobList,
  removeHTMLTags,
} from '../dom';
import { readFileSync } from 'fs';
import path from 'path';

const jobListHtml = readFileSync(path.join(__dirname, 'html/joblist.html'), {
  encoding: 'utf-8',
  flag: 'r',
}).toString();

const jobListLoadingHtml = readFileSync(
  path.join(__dirname, 'html/joblist-detail-contents-loading.html'),
  {
    encoding: 'utf-8',
    flag: 'r',
  }
).toString();

const jobListLastPageHtml = readFileSync(
  path.join(__dirname, 'html/joblist-last-page.html'),
  {
    encoding: 'utf-8',
    flag: 'r',
  }
).toString();

describe('JobList Loading Page', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = jobListLoadingHtml;
  });

  describe('isLoading', () => {
    test('should return true.', () => {
      expect(isLoading()).toBe(true);
    });
  });
});

describe('JobList Last Page', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = jobListLastPageHtml;
  });

  describe('moveToNextJobList', () => {
    test('should return false.', () => {
      expect(moveToNextJobList()).toBe(false);
    });
  });

  describe('isLoading', () => {
    test('should return false.', () => {
      expect(isLoading()).toBe(false);
    });
  });
});

describe('JobList Page', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = jobListHtml;
  });

  describe('getJobInfo', () => {
    test('should return correct job title and description.', () => {
      const jobInfo = getJobInfo();

      expect(jobInfo).toEqual({
        jobTitle: expect.stringMatching(/Javascript Developer/),
        jobDescription: expect.stringMatching(
          /My client are an innovative and forward thinking tech company/
        ),
        jobAdditionalInfo: expect.stringMatching(/Oakwell Hampton/),
        url: expect.stringMatching(/http/),
      });
    });
  });

  describe('getJobList', () => {
    test('the length of the jobList array should be 25.', () => {
      const [jobList] = getJobList();

      expect(jobList.length).toBe(25);
    });
  });

  describe('getSelectedJobIndex', () => {
    test('should return 22.', () => {
      const selectedJobIndex = getSelectedJobIndex();

      expect(selectedJobIndex).toBe(22);
    });
  });

  describe('moveToNextJobList', () => {
    test('should click the next page button.', () => {
      const linkButtons = document.querySelectorAll<HTMLButtonElement>(
        '.jobs-search-pagination__indicator-button'
      );
      const handleNextPageClick = vi.fn();
      const button = linkButtons[2];
      console.log('button', button, linkButtons);

      button?.addEventListener('click', handleNextPageClick);
      moveToNextJobList();
      expect(handleNextPageClick).toHaveBeenCalledOnce();
    });

    test('should return true.', () => {
      expect(moveToNextJobList()).toBe(true);
    });
  });

  describe('isLoading', () => {
    test('should return false.', () => {
      expect(isLoading()).toBe(false);
    });
  });

  describe('removeHTMLTags', () => {
    test('shuold return string without html tags', () => {
      expect(removeHTMLTags('<div>hello</div>')).toBe('hello');
      expect(removeHTMLTags('<span><div>hello</div></span>')).toBe('hello');
    });
  });
});
