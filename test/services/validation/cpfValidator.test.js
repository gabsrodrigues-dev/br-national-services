const { br } = require('../../../src/index');

test('should validate correct CPF', () => {
  const validCPF = '12345678909';
  expect(br.validate.cpf(validCPF)).toBe(true);
});

test('should invalidate incorrect CPF', () => {
  const invalidCPF = '12345678900';
  expect(br.validate.cpf(invalidCPF)).toBe(false);
});
