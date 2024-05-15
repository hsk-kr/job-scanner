import { beforeAll, describe, expect, test, vi } from 'vitest';
import {
  getJobInfo,
  getJobList,
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

describe('JobList Page', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = jobListHtml;
  });

  describe('getJobInfo', () => {
    test('should return correct job information.', async () => {
      const jobInfo = await getJobInfo();

      // Below comments UPDATE START ~ UPDATE END is used to update the test code by linkedin-test-html-generator script
      // linkedin-test-html-generator UPDATE START
      expect(jobInfo).toEqual({
        jobTitle: expect.stringContaining('Design Frontend Developer'),
        jobDescription: expect.stringContaining('for'),
        jobAdditionalInfo: expect.stringContaining('Blooket'),
        url: expect.stringContaining('http'),
      });
      // linkedin-test-html-generator UPDATE END
    });
  });

  describe('getJobList', () => {
    test('the length of the jobList array should be 25.', async () => {
      const [jobList] = await getJobList();

      expect(jobList.length).toBe(25);
    });
  });

  describe('moveToNextJobList', () => {
    test('should click the next page button.', async () => {
      const linkButtons = document.querySelectorAll<HTMLButtonElement>(
        '.jobs-search-pagination__indicator-button'
      );
      const handleNextPageClick = vi.fn();
      const button = linkButtons[1];

      button?.addEventListener('click', handleNextPageClick);
      await moveToNextJobList();
      expect(handleNextPageClick).toHaveBeenCalledOnce();
    });

    test('should return true.', async () => {
      expect(await moveToNextJobList()).toBe(true);
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
