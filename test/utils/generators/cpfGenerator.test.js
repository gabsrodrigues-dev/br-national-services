const { verifyCPF } = require('../../../src/services/validation/cpfValidator');
const { generateCPF } = require('../../../src/utils/generators/cpf');

describe('CPF Generator', () => {
  test('should generate a valid CPF', () => {
    const cpf = generateCPF();
    expect(verifyCPF(cpf)).toBe(true);
  });

  test('should generate a different CPF each time', () => {
    const cpf1 = generateCPF();
    const cpf2 = generateCPF();
    expect(cpf1).not.toBe(cpf2);
  });
});