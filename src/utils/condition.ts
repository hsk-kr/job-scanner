import { JobCondition } from '@/types/job';

export const checkJobConditions = (
  title: string,
  description: string,
  jobAdddtionalInfo: string,
  jobConditions: JobCondition[]
) => {
  // all conditions must be correct
  let allPass = true;

  for (const jobCondition of jobConditions) {
    // if one of subCondition is correct, set it to true.
    let conditionPass = false;

    for (const subCondition of jobCondition.subConditions) {
      let targetContent = '';
      let text = subCondition.text;

      // target
      switch (subCondition.target) {
        case 'title':
          targetContent = title;
          break;
        case 'description':
          targetContent = description;
          break;
        case 'additional_info':
          targetContent = jobAdddtionalInfo;
      }

      // skip there are no contents to compare
      if (!text || !targetContent) continue;

      // caseInsensitive
      if (subCondition.caseInsensitive) {
        targetContent = targetContent.toLocaleLowerCase();
        text = text.toLocaleLowerCase();
      }

      // how many times the text shows up in the text
      let frequency = -1;
      let indexOf = -1;

      do {
        indexOf++;
        indexOf = targetContent.indexOf(text, indexOf);
        frequency++;
      } while (indexOf !== -1);

      let subConditionPass = false;

      // operator
      switch (subCondition.operator) {
        case '=':
          subConditionPass = frequency === subCondition.frequency;
          break;
        case '!=':
          subConditionPass = frequency !== subCondition.frequency;
          break;
        case '<':
          subConditionPass = frequency < subCondition.frequency;
          break;
        case '>':
          subConditionPass = frequency > subCondition.frequency;
          break;
        case '<=':
          subConditionPass = frequency <= subCondition.frequency;
          break;
        case '>=':
          subConditionPass = frequency >= subCondition.frequency;
          break;
      }

      // not
      if (subCondition.not) subConditionPass = !subConditionPass;

      // if one of subCondition is correct, set it to true.
      if (subConditionPass) {
        conditionPass = subConditionPass;
        break;
      }
    }

    // If a part of condition is incorrect, set it to false.
    if (!conditionPass) {
      allPass = false;
      break;
    }
  }

  return allPass;
};
