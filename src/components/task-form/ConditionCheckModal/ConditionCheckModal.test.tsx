import { test, describe, expect } from 'vitest';
import { act, render, screen, fireEvent } from '@testing-library/react';
import ConditionCheckModal from '.';

const submit = () => {
  const checkButton = screen.getByTestId('checkBtn');
  act(() => {
    checkButton.click();
  });
};

// It has a dependency with the submit func
const submitWithDefaultJobPost = () => {
  const title = screen.getByTestId('title');
  const desc = screen.getByTestId('desc');

  if (!title || !desc) {
    throw new Error('cannot find title or desc.');
  }

  act(() => {
    fireEvent.change(title, {
      target: {
        value: jobPost.title,
      },
    });

    fireEvent.change(desc, {
      target: {
        value: jobPost.description,
      },
    });
  });

  submit();
};

describe('ConditionCheckModal', () => {
  test('should not render', () => {
    render(<ConditionCheckModal visible={false} />);
    expect(screen.queryByTestId('conditionCheckModal')).toBeNull();
  });

  test('should pass', () => {
    render(
      <ConditionCheckModal
        visible={true}
        jobConditions={[
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
        ]}
      />
    );

    submitWithDefaultJobPost();
    screen.getByText(/pass \(1\)/i);

    submitWithDefaultJobPost();
    screen.getByText(/pass \(2\)/i);
  });

  test('should fail', () => {
    render(
      <ConditionCheckModal
        visible={true}
        jobConditions={[
          {
            id: 'a',
            subConditions: [
              {
                id: 'a',
                target: 'title',
                not: false,
                caseInsensitive: true,
                text: 'rust',
                frequency: 1,
                operator: '>=',
              },
            ],
          },
        ]}
      />
    );

    submitWithDefaultJobPost();
    screen.getByText(/fail \(1\)/i);

    submitWithDefaultJobPost();
    screen.getByText(/fail \(2\)/i);
  });

  test('should initialize the count number', () => {
    render(
      <ConditionCheckModal
        visible={true}
        jobConditions={[
          {
            id: 'a',
            subConditions: [
              {
                id: 'a',
                target: 'title',
                not: false,
                caseInsensitive: true,
                text: 'rust',
                frequency: 1,
                operator: '>=',
              },
            ],
          },
        ]}
      />
    );

    submitWithDefaultJobPost();
    screen.getByText(/fail \(1\)/i);

    const title = screen.getByTestId('title');
    if (!title) throw new Error('cannot find the title input');

    act(() => {
      fireEvent.change(title, {
        target: {
          value: 'rust',
        },
      });
    });

    submit();
    screen.getByText(/pass \(1\)/i);
  });
});

const jobPost = {
  title: `
  React Developer / Frankfurt / 80k 
`,
  description: `
  Senior React Developer, Fintech industry // Frankfurt // €80.000We need you! Our international, fastgrowing fintech company central in Frankfurt is looking for a strong Senior React Developer to join their team to help build a new generation of Banking Systems. We cater to the future of payment services, and are looking for support on refining our internal system to understand our clients business needs inside and out - Our technical and industry know-how paired with a passion makes payments safe, transparent and seamless.The Role      Working on a Cloud-banking product with React and Javascript Taking part in a high quality processImplementing a high-performance database, handle large volumes of data Delivering clean and clear code
Your Profile      4+ years experience with React (or Angular/Vue.js) and Javascript/TypescriptPassion for the world of fintechExperience working with high-performance databasesSome experience with Node.js or Next.jsFluent English
Our Offer      Be part of a revolution! We are on track to become the EUs and UKs leading financial services partnerOffice central in Frankfurt, with free parkingRegional half-working days on Shrove Tuesday and Whit TuesdayFree refreshmentsTravel expenses paid for for local public transportInternational work environmentModern technologies
If this sounds like something you would like to be a part of get in touch today with an up-to-date CV. Interviews are running from this week. We are excited to hear from you!Direct Line: +49 (0) 3031199380Email: jwortmann@optimussearch.comWeb: www.optimussearch.com
`,
};
