const { br } = require('./index');

Object.defineProperty(String.prototype, 'br', {
  get: function () {
    return br;
  }
});
