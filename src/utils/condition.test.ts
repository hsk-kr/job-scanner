import { JobCondition, JobInfo } from '@/types/job';
import { checkJobConditions as _checkJobConditions } from './condition';
import { describe, test, expect } from 'vitest';

const checkJobConditions = (jobConditions: JobCondition[]) => {
  return _checkJobConditions(
    jobPost.jobTitle,
    jobPost.jobDescription,
    jobPost.jobAdditionalInfo,
    jobConditions
  );
};

describe('checkJobConditions', () => {
  test('should return a correct boolean value', () => {
    expect(
      checkJobConditions([
        {
          id: 'a',
          subConditions: [
            {
              id: 'a',
              target: 'title',
              not: false,
              caseInsensitive: true,
              text: 'react',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
      ])
    ).toBe(true);

    expect(
      checkJobConditions([
        {
          id: 'a',
          subConditions: [
            {
              id: 'a',
              target: 'additional_info',
              not: false,
              caseInsensitive: true,
              text: '48 appli',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
      ])
    ).toBe(true);

    expect(
      checkJobConditions([
        {
          id: 'a',
          subConditions: [
            {
              id: 'a',
              target: 'title',
              not: false,
              caseInsensitive: false,
              text: 'react',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
      ])
    ).toBe(false);

    expect(
      checkJobConditions([
        {
          id: 'a',
          subConditions: [
            {
              id: 'a',
              target: 'title',
              not: false,
              caseInsensitive: true,
              text: 'react',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
        {
          id: 'b',
          subConditions: [
            {
              id: 'a',
              target: 'description',
              not: false,
              caseInsensitive: true,
              text: 'react',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
      ])
    ).toBe(true);

    expect(
      checkJobConditions([
        {
          id: 'a',
          subConditions: [
            {
              id: 'a',
              target: 'title',
              not: false,
              caseInsensitive: true,
              text: 'react',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
        {
          id: 'b',
          subConditions: [
            {
              id: 'a',
              target: 'description',
              not: false,
              caseInsensitive: true,
              text: 'german is a bonus',
              frequency: 1,
              operator: '>=',
            },
            {
              id: 'a',
              target: 'description',
              not: false,
              caseInsensitive: true,
              text: 'english',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
      ])
    ).toBe(true);

    expect(
      checkJobConditions([
        {
          id: 'a',
          subConditions: [
            {
              id: 'a',
              target: 'title',
              not: false,
              caseInsensitive: true,
              text: 'react',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
        {
          id: 'b',
          subConditions: [
            {
              id: 'a',
              target: 'description',
              not: false,
              caseInsensitive: true,
              text: 'du ',
              frequency: 1,
              operator: '>=',
            },
            {
              id: 'a',
              target: 'description',
              not: false,
              caseInsensitive: true,
              text: 'wir ',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
      ])
    ).toBe(false);

    expect(
      checkJobConditions([
        {
          id: 'a',
          subConditions: [
            {
              id: 'a',
              target: 'description',
              not: false,
              caseInsensitive: false,
              text: 'Java',
              frequency: 1,
              operator: '>=',
            },
          ],
        },
        {
          id: 'b',
          subConditions: [
            {
              id: 'a',
              target: 'description',
              not: false,
              caseInsensitive: true,
              text: 'javascript',
              frequency: 0,
              operator: '=',
            },
          ],
        },
      ])
    ).toBe(false);
  });
});

const jobPost: JobInfo = {
  jobTitle: `
  React Developer / Frankfurt / 80k 
`,
  jobDescription: `
  Senior React Developer, Fintech industry // Frankfurt // €80.000We need you! Our international, fastgrowing fintech company central in Frankfurt is looking for a strong Senior React Developer to join their team to help build a new generation of Banking Systems. We cater to the future of payment services, and are looking for support on refining our internal system to understand our clients business needs inside and out - Our technical and industry know-how paired with a passion makes payments safe, transparent and seamless.The Role      Working on a Cloud-banking product with React and Javascript Taking part in a high quality processImplementing a high-performance database, handle large volumes of data Delivering clean and clear code
Your Profile      4+ years experience with React (or Angular/Vue.js) and Javascript/TypescriptPassion for the world of fintechExperience working with high-performance databasesSome experience with Node.js or Next.jsFluent English
Our Offer      Be part of a revolution! We are on track to become the EUs and UKs leading financial services partnerOffice central in Frankfurt, with free parkingRegional half-working days on Shrove Tuesday and Whit TuesdayFree refreshmentsTravel expenses paid for for local public transportInternational work environmentModern technologies
If this sounds like something you would like to be a part of get in touch today with an up-to-date CV. Interviews are running from this week. We are excited to hear from you!Direct Line: +49 (0) 3031199380Email: jwortmann@optimussearch.comWeb: www.optimussearch.com
`,
  jobAdditionalInfo:
    'London, England, United Kingdom · Reposted 1 week ago · 48 applicants',
  url: '',
};
