import getDataFromString from './createDate';

describe('getDataFromString', () => {
  it('should return a Date object for a valid date string', () => {
    const validDateStr = '2023-09-18';
    const result = getDataFromString(validDateStr);

    expect(result).toBeInstanceOf(Date);
  });

  it('should return a string for an invalid date format', () => {
    const invalidDateStr = '2023-09';
    const result = getDataFromString(invalidDateStr);

    expect(typeof result).toBe('string');
    expect(result).toBe('Invalid date format');
  });

  it('should return "Invalid day for the given month" for an invalid day in the date', () => {
    const invalidDateStr = '2023-09-32';
    const result = getDataFromString(invalidDateStr);

    expect(typeof result).toBe('string');
    expect(result).toBe('Invalid day for the given month');
  });

  it('should handle non-numeric date components', () => {
    const invalidDateStr = '2023-09-foo';
    const result = getDataFromString(invalidDateStr);

    expect(typeof result).toBe('string');
    expect(result).toBe('Invalid date components');
  });
});
