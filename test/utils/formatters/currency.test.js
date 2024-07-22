const { formatToCurrency, parseCurrencyToNumber } = require('../../../src/utils/formatters/currency');

test('should format number to currency', () => {
    const number = 1250.52;
    const formatted = formatToCurrency(number);
    expect(formatted).toBe('R$ 1.250,52');
});

test('should parse currency to number', () => {
    const currency = 'R$ 1.250,52';
    const number = parseCurrencyToNumber(currency);
    expect(number).toBe(1250.52);
});

test('should parse currency with different format to number', () => {
    const currency = 'R$ 1.250,52';
    const number = parseCurrencyToNumber(currency);
    expect(number).toBe(1250.52);
});

test('should parse currency with no space different format to number', () => {
    const currency = 'R$1.250,52';
    const number = parseCurrencyToNumber(currency);
    expect(number).toBe(1250.52);
});
