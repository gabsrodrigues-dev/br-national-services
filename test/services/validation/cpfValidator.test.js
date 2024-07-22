require('../../../src/prototype');

test('should validate correct CPF', () => {
  const validCPF = '12345678909';
  expect(validCPF.validate('cpf')).toBe(true);
});

test('should invalidate incorrect CPF', () => {
  const invalidCPF = '12345678900';
  expect(invalidCPF.validate('cpf')).toBe(false);
});

test('should format CPF correctly', () => {
  const cpf = '12345678909';
  expect(cpf.format('cpf')).toBe('123.456.789-09');
});
