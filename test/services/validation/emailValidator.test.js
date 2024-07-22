const { validateEmail } = require('../../../src/services/validation/emailValidator');

test('should validate correct email', () => {
  const validEmail = 'example@example.com';
  expect(validateEmail(validEmail)).toBe(true);
});

test('should validate email with special characters', () => {
  const validEmail = "user.name+tag+sorting@example.com";
  expect(validateEmail(validEmail)).toBe(true);
});

test('should invalidate email with spaces', () => {
  const invalidEmail = 'example @example.com';
  expect(validateEmail(invalidEmail)).toBe(false);
});

test('should invalidate email with invalid sequence', () => {
  const invalidEmail = 'example@.com';
  expect(validateEmail(invalidEmail)).toBe(false);
});

test('should invalidate email without domain', () => {
  const invalidEmail = 'example@example';
  expect(validateEmail(invalidEmail)).toBe(false);
});

test('should invalidate email without username', () => {
  const invalidEmail = '@example.com';
  expect(validateEmail(invalidEmail)).toBe(false);
});

test('should invalidate email with invalid characters', () => {
  const invalidEmail = 'example@exa[mple.com';
  expect(validateEmail(invalidEmail)).toBe(false);
});
