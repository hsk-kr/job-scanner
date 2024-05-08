import puppeteer from 'puppeteer';
import readline from 'node:readline';
import fs from 'node:fs';
import path from 'node:path';

const JOB_PAGE = 'https://www.linkedin.com/jobs/';
const JOB_LIST_PAGE =
  'https://www.linkedin.com/jobs/search/?keywords=developer&location=United%20States';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Save the file with the content under the html directory.
 * @param {string} filename
 * @param {string} content To be written in the file
 */
const saveFile = (filename, content) => {
  const currentDirname = import.meta.url.substring(
    'file://'.length,
    import.meta.url.lastIndexOf('/')
  );
  const dirPath = path.join(currentDirname, 'html');
  const filePath = path.join(dirPath, filename);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  fs.writeFileSync(filePath, content);
};

/**
 * Input string from the command line
 * @param {readline.Interface} rl
 * @param {string} question text to display to the console
 * @returns Entered text from the command line
 */
const input = (rl, question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
};

/**
 * type keyword until the selector value equlas to the keyword
 * @param {Page} page
 * @param {string} selector
 * @param {string} keyword
 */
const type = (page, selector, keyword) => {
  return new Promise(async (resolve) => {
    let value;

    do {
      const input = await page.waitForSelector(selector);
      await input.evaluate((e) => {
        e.focus();
      });
      await page.type(selector, keyword);

      value = await input.evaluate((e) => e.value);
    } while (value !== keyword);

    resolve();
  });
};

const browser = await puppeteer.launch({
  headless: false,
});
const page = await browser.newPage();

// ask to sign in manually
await page.goto(JOB_PAGE);
await page.setViewport({ width: 1080, height: 1024 });

let answer = '';
do {
  answer = await input(
    rl,
    'Sign in on the linked in page and enter "YES" here: '
  );
  answer = answer.toLowerCase();
} while (answer !== 'yes');

// search
await page.goto(JOB_LIST_PAGE);

// scroll to the bottom
const jobList = await page.waitForSelector('.jobs-search-results-list');
await jobList.evaluate(async (e) => {
  const scrollToBottom = async () => {
    const waitUntilLoadingFininish = async () => {
      const delay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

      const isLoading = () => {
        const loading =
          document.querySelector('#main *[class*=--loading]') ??
          document.querySelector('.jobs-ghost-fadein-placeholder') ??
          document.querySelector('*[class*=ghost-placeholder]');

        return loading !== null ? true : false;
      };

      return new Promise(async (resolve) => {
        while (isLoading()) {
          await delay(200);
        }
        resolve();
      });
    };

    let previousScrollTop;
    do {
      previousScrollTop = e.scrollTop;
      await waitUntilLoadingFininish();
      e.scrollTop += 200;
    } while (previousScrollTop !== e.scrollTop);
  };

  await scrollToBottom();
});

// get job information
const jobTitle = await page.waitForSelector(
  '.job-details-jobs-unified-top-card__job-title'
);
const jobAdditionalInfo = await page.waitForSelector(
  '.job-details-jobs-unified-top-card__primary-description-container'
);
const jobDescription = await page.waitForSelector(
  '.jobs-description-content__text'
);

const jobInfo = {
  jobTitle: (await jobTitle.evaluate((e) => e.textContent)).trim(),
  jobAdditionalInfo: (
    await jobAdditionalInfo.evaluate((e) => e.textContent)
  ).trim(),
  jobDescription: (await jobDescription.evaluate((e) => e.textContent)).trim(),
};

const html = await page.content();
saveFile('joblist.html', html);
saveFile('jobinfo.json', JSON.stringify(jobInfo, undefined, 2));

console.log('joblist.html, jobinfo.json are created in the html directory.');

// dispose resources
rl.close();
await browser.close();
