import dobValidation from './dobValid';

describe('dobValidation', () => {
  const mockRule = {
    validator: dobValidation[0].validator,
  };

  it('should return a resolved Promise for a valid date of birth', async () => {
    const validDateOfBirth = '2010-01-01';
    const result = await dobValidation[0].validator(mockRule, validDateOfBirth);
    expect(result).toBeUndefined();
  });

  it('should return a rejected Promise for an invalid date of birth', async () => {
    const invalidDateOfBirth = '2015-01-01';
    try {
      await dobValidation[0].validator(mockRule, invalidDateOfBirth);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('You must be at least 13 years old.');
      }
    }
  });

  it('should return a rejected Promise for an empty date of birth', async () => {
    const emptyDateOfBirth = '';
    try {
      await dobValidation[0].validator(mockRule, emptyDateOfBirth);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Please select your date of birth!');
      }
    }
  });
});
