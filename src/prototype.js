const { br } = require('./');

// Adicionando métodos ao protótipo de String
String.prototype.brFormat = function(type) {
  if (type === 'cpf') {
    return br.format.cpf(this);
  } else if (type === 'phone') {
    return br.format.phone(this);
  } else if (type === 'currency') {
    return br.format.currency(parseFloat(this));
  }
  throw new Error('Unsupported format type');
};

String.prototype.brParse = function(type) {
  if (type === 'phone') {
    return br.parse.phone(this);
  } else if (type === 'currency') {
    return br.parse.currency(this);
  }
  throw new Error('Unsupported parse type');
};

String.prototype.brValidate = function(type) {
  if (type === 'cpf') {
    return br.validate.cpf(this);
  } else if (type === 'email') {
    return br.validate.email(this);
  }
  throw new Error('Unsupported validate type');
};

// Adicionando métodos ao protótipo de Number
Number.prototype.brFormat = function(type) {
  if (type === 'currency') {
    return br.format.currency(this);
  }
  throw new Error('Unsupported format type');
};
