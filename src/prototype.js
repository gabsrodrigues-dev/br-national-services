const { br } = require('./');

String.prototype.format = function(type) {
  if (type === 'cpf') {
    return br.format.cpf(this);
  } else if (type === 'phone') {
    return br.format.phone(this);
  } else if (type === 'currency') {
    return br.format.currency(parseFloat(this));
  }
  throw new Error('Unsupported format type');
};

String.prototype.parse = function(type) {
  if (type === 'phone') {
    return br.parse.phone(this);
  } else if (type === 'currency') {
    return br.parse.currency(this);
  }
  throw new Error('Unsupported parse type');
};

String.prototype.validate = function(type) {
  if (type === 'cpf') {
    return br.validate.cpf(this);
  } else if (type === 'email') {
    return br.validate.email(this);
  }
  throw new Error('Unsupported validate type');
};

Number.prototype.format = function(type) {
  if (type === 'currency') {
    return br.format.currency(this);
  }
  throw new Error('Unsupported format type');
};
