import { Rule } from 'antd/es/form';

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const DAYS_PER_YEAR = 365.25;

const dobValidation = [
  {
    validator(_: Rule, value: string) {
      if (!value) {
        return Promise.reject(new Error('Please select your date of birth!'));
      }
      if (value) {
        const currentDate: Date = new Date();
        const selectedDate: Date = new Date(value);
        const utc1 = Date.UTC(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
        );
        const utc2 = Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
        );
        const diffYears =
          Math.floor((utc1 - utc2) / MS_PER_DAY) / DAYS_PER_YEAR;
        if (diffYears < 13) {
          return Promise.reject(
            new Error('You must be at least 13 years old.'),
          );
        }
      }
      return Promise.resolve();
    },
  },
];

export default dobValidation;
