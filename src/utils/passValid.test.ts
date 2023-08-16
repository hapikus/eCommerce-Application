import passwordValidationRules from './passValid';

describe('Password Validation', () => {
  const validPassword = 'Secure123';

  test('should pass all validation rules for a valid password', async () => {
    await Promise.all(
      passwordValidationRules.map(async (rule) => {
        await expect(rule.validator({}, validPassword)).resolves.toBeUndefined();
      }),
    );
  });

  test('should fail validation for a password that is too short', async () => {
    const invalidPassword = 'weak';

    await Promise.all(
      passwordValidationRules.map(async (rule) => {
        await expect(rule.validator({}, invalidPassword)).rejects.toThrow(
          /Password must be at least 8 characters long./,
        );
      }),
    );
  });

  test('should fail validation for a password without a digit', async () => {
    const invalidPassword = 'badPassword';

    await Promise.all(
      passwordValidationRules.map(async (rule) => {
        await expect(rule.validator({}, invalidPassword)).rejects.toThrow(
          /Password must contain at least one digit \(0-9\)/,
        );
      }),
    );
  });
});
