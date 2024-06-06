import puppeteer from 'puppeteer';
import readline from 'node:readline';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const JOB_PAGE = 'https://www.linkedin.com/jobs/';
const JOB_LIST_PAGE =
  'https://www.linkedin.com/jobs/search/?keywords=developer&location=United%20States';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const updateOption = process.argv.findIndex((v) => v === '--update') !== -1;

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
 * update utils/linkedin/__test__/html/joblist.html file and dom.test.ts code.
 * @param {string} html
 * @param {{ jobTitle: string, jobAdditionalInfo: string, jobDescription: string }} jobInfo
 */
const updateTestFile = (html, jobInfo) => {
  const rootDir = path.join(
    import.meta.url.substring(
      'file://'.length,
      import.meta.url.lastIndexOf('/')
    ),
    '..',
    '..'
  );
  const testDirPath = path.join(
    rootDir,
    'src',
    'utils',
    'linkedin',
    '__test__'
  );
  const joblistPath = path.join(testDirPath, 'html', 'joblist.html');
  const domTestPath = path.join(testDirPath, 'dom.test.ts');

  if (!fs.existsSync(joblistPath) || !fs.existsSync(domTestPath)) {
    console.error('joblist.html or dom.test.ts file not found.');
    return false;
  }

  const testCode = fs.readFileSync(domTestPath, 'utf8');

  let updateStartIdx = testCode.indexOf(
    'linkedin-test-html-generator UPDATE START'
  );
  let updateEndIdx = testCode.indexOf(
    'linkedin-test-html-generator UPDATE END'
  );
  if (updateStartIdx === -1 || updateEndIdx === -1) {
    console.error(
      'the code will be updated should be noted with the comments linkedin-test-html-generator UPDATE START and linkedin-test-html-generator UPDATE END'
    );
    return false;
  }
  updateStartIdx = testCode.indexOf('expect', updateStartIdx);
  updateEndIdx = testCode.lastIndexOf(';', updateEndIdx) + 1;

  const updatedTestCode = `
    expect(jobInfo).toEqual({
      jobTitle: expect.stringContaining('${jobInfo.jobTitle}'),
      jobDescription: expect.stringContaining(
        '${jobInfo.jobDescription}'
      ),
      jobAdditionalInfo: expect.stringContaining('${jobInfo.jobAdditionalInfo}'),
      url: expect.stringContaining('http'),
    });
  `;

  const newTestCode =
    testCode.substring(0, updateStartIdx) +
    updatedTestCode +
    testCode.substring(updateEndIdx);

  fs.writeFileSync(joblistPath, html);
  fs.writeFileSync(domTestPath, newTestCode);

  return true;
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
const jobCompanyName = await page.waitForSelector(
  '.jobs-details__main-content [class*=company-name]'
);

let additionalInfo = `${
  (await jobCompanyName.evaluate((e) => e.textContent)).trim() ?? ''
} • ${(await jobAdditionalInfo.evaluate((e) => e.textContent)).trim() ?? ''}`;

const jobInfo = {
  jobTitle: (await jobTitle.evaluate((e) => e.textContent)).trim(),
  jobAdditionalInfo: additionalInfo,
  jobDescription: (await jobDescription.evaluate((e) => e.textContent)).trim(),
};

const html = await page.content();

if (updateOption) {
  const jobDescriptionWords = jobInfo.jobDescription.split(' ');
  let randomJobDescriptionPart;

  do {
    randomJobDescriptionPart =
      jobDescriptionWords[
        Math.floor(Math.random() * jobDescriptionWords.length)
      ];
  } while (randomJobDescriptionPart.length === 0);

  // update the test code and the test html file in the project
  const result = updateTestFile(html, {
    jobTitle: jobInfo.jobTitle,
    jobAdditionalInfo: jobInfo.jobAdditionalInfo.substring(
      0,
      jobInfo.jobAdditionalInfo.indexOf(' ')
    ),
    jobDescription: randomJobDescriptionPart,
  });

  if (result) {
    console.log(
      'joblist.html, dom.test.ts files has been updated. You must check if the changes updated accordingly.'
    );
  }
} else {
  saveFile('joblist.html', html);
  saveFile('jobinfo.json', JSON.stringify(jobInfo, undefined, 2));
  console.log('joblist.html, jobinfo.json are created in the html directory.');
}

// dispose resources
rl.close();
await browser.close();
