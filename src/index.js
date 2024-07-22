const services = require('./services');
const utils = require('./utils');

const br = {
  validate: {
    cpf: services.verifyCPF,
    email: services.validateEmail
  },
  format: {
    currency: utils.formatToCurrency,
    phone: utils.formatPhoneNumber,
    cpf: utils.formatCPF
  },
  parse: {
    currency: utils.parseCurrencyToNumber,
    phone: utils.parsePhoneNumber
  }
};

module.exports = {
  br
};
