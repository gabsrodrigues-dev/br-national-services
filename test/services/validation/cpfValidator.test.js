const { verifyCPF } = require('../../../src/services/validation/cpfValidator');

test('should validate correct CPF', () => {
  const validCPF = '12345678909';
  expect(verifyCPF(validCPF)).toBe(true);
});

test('should invalidate incorrect CPF', () => {
  const invalidCPF = '12345678900';
  expect(verifyCPF(invalidCPF)).toBe(false);
});
