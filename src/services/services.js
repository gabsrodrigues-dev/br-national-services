const { verifyCPF } = require('./validation/cpfValidator');
const { validateEmail } = require('./validation/emailValidator');

module.exports = {
  verifyCPF,
  validateEmail,
};
