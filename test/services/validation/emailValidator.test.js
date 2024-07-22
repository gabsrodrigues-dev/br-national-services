require('../../../src/prototype');

test('should validate correct email', () => {
  const validEmail = 'example@example.com';
  expect(validEmail.brValidate('email')).toBe(true);
});

test('should validate email with special characters', () => {
  const validEmail = "user.name+tag+sorting@example.com";
  expect(validEmail.brValidate('email')).toBe(true);
});

test('should invalidate email with spaces', () => {
  const invalidEmail = 'example @example.com';
  expect(invalidEmail.brValidate('email')).toBe(false);
});

test('should invalidate email with invalid sequence', () => {
  const invalidEmail = 'example@.com';
  expect(invalidEmail.brValidate('email')).toBe(false);
});

test('should invalidate email without domain', () => {
  const invalidEmail = 'example@example';
  expect(invalidEmail.brValidate('email')).toBe(false);
});

test('should invalidate email without username', () => {
  const invalidEmail = '@example.com';
  expect(invalidEmail.brValidate('email')).toBe(false);
});

test('should invalidate email with invalid characters', () => {
  const invalidEmail = 'example@exa[mple.com';
  expect(invalidEmail.brValidate('email')).toBe(false);
});
