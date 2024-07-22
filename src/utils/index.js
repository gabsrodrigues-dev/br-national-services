const { formatToCurrency, parseCurrencyToNumber } = require('./formatters/currency');
const { formatPhoneNumber, parsePhoneNumber } = require('./formatters/phone');
const { formatCPF } = require('./formatters/cpf');

module.exports = {
  formatToCurrency,
  parseCurrencyToNumber,
  formatPhoneNumber,
  parsePhoneNumber,
  formatCPF
};
