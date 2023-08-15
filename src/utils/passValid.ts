import { Rule } from 'antd/es/form';

const passwordValidationRules = [
  {
    validator(_: Rule, value: string) {
      if (!value) {
        return Promise.reject(new Error('Please input your password!'));
      }
      if (value.length < 8) {
        return Promise.reject(new Error('Password must be at least 8 characters long.'));
      }
      if (!/[A-Z]/.test(value)) {
        return Promise.reject(new Error('Password must contain at least one uppercase letter (A-Z).'));
      }
      if (!/[a-z]/.test(value)) {
        return Promise.reject(new Error('Password must contain at least one lowercase letter (a-z).'));
      }
      if (!/\d/.test(value)) {
        return Promise.reject(new Error('Password must contain at least one digit (0-9).'));
      }
      if (value.trim() !== value) {
        return Promise.reject(new Error('Password must not contain leading or trailing whitespace.'));
      }
      return Promise.resolve();
    },
  },
];

export default passwordValidationRules;
