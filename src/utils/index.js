const { formatToCurrency, parseCurrencyToNumber } = require('./formatters/currency');
const { formatPhoneNumber, parsePhoneNumber } = require('./formatters/phone');

module.exports = {
  formatToCurrency,
  parseCurrencyToNumber,
  formatPhoneNumber,
  parsePhoneNumber
};
