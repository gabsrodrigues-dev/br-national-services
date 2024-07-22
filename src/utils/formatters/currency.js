function formatToCurrency(number) {
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function parseCurrencyToNumber(currency) {
  return parseFloat(currency.replace(/[^\d,-]/g, '').replace(',', '.'));
}

module.exports = {
  formatToCurrency,
  parseCurrencyToNumber
};
