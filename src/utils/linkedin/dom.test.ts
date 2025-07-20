import { describe, expect, it } from 'vitest';
import { getClosestParentFromChild, getJobInfo, getJobListItems } from './dom';
import { jobListElement } from './const';

describe('getClosestParentFromChild', () => {
  const html = document.createElement('html');
  html.innerHTML = `<div id="a">
  <div id="b">
    <p id="c">
    </p>
    <p id="d">
    </p>
  </div>
</div>`;

  it('should return closest tag from child', () => {
    const child = html.querySelector<HTMLParagraphElement>('#c')!;
    const parent = getClosestParentFromChild(child, 'div');
    expect(parent!.id).toBe('b');
  });

  it('should return closest tag from child', () => {
    const child = html.querySelector<HTMLParagraphElement>('#b')!;
    const parent = getClosestParentFromChild<HTMLDivElement>(child, 'div');
    expect(parent!.id).toBe('a');
  });

  it('should return verified closest tag from child', () => {
    const child = html.querySelector<HTMLParagraphElement>('#b')!;
    const parent = getClosestParentFromChild<HTMLDivElement>(child, 'div', {
      verify: (element) => {
        return element.id === 'a';
      },
    });
    expect(parent!.id).toBe('a');
  });

  it('should return null', () => {
    const child = html.querySelector<HTMLParagraphElement>('#c')!;
    const parent = getClosestParentFromChild(child, 'p');
    expect(parent).toBe(null);
  });
});

describe('getJobListItems', () => {
  it('should return 25 items', () => {
    const listItems = getJobListItems(jobListElement);
    expect(listItems).length(25);
  });
});

describe('getJobInfo', () => {
  it('should return job info', () => {
    const jobInfo = getJobInfo(jobListElement);
    expect(jobInfo?.jobAdditionalInfo).not.toBe('-');
    expect(jobInfo?.jobTitle).not.toBe('-');
    expect(jobInfo?.url).not.toBe('-');
    expect(jobInfo?.jobDescription).not.toBe('-');
  });
});
