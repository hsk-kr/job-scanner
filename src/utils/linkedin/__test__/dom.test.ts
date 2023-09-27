/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { beforeAll, describe, expect, test, vi } from 'vitest';
import {
  getJobInfo,
  getJobList,
  getSelectedJobIndex,
  isLoading,
  moveToNextJobList,
  scrollJobListToBottom,
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
        jobTitle: expect.stringMatching(/Frontend Developer \(f\/m\/d\)/),
        jobDescription: expect.stringMatching(
          /We are a VC and corporate funded global technology company/
        ),
        jobAdditionalInfo: expect.stringMatching(
          /CrateDB · Berlin, Berlin, Germany \(Remote\)/
        ),
        url: expect.stringMatching(/http/),
      });
    });
  });

  describe('getJobList', () => {
    test('the length of the jobList array should be 25.', () => {
      const jobList = getJobList();

      expect(jobList.length).toBe(25);
    });
  });

  describe('getSelectedJobIndex', () => {
    test('should return 3.', () => {
      const selectedJobIndex = getSelectedJobIndex();

      expect(selectedJobIndex).toBe(3);
    });
  });

  describe('scrollJobListToBottom', () => {
    test('the scroll should be greater than 2000.', () => {
      scrollJobListToBottom();

      const jobListContainer = document.querySelector(
        '.jobs-search-results-list'
      );
      expect(jobListContainer?.scrollTop).greaterThan(2000);
    });
  });

  describe('moveToNextJobList', () => {
    test('should click the next page button.', () => {
      const handleNextPageClick = vi.fn();
      const button = document.querySelector('#ember1956 > button');

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
});
