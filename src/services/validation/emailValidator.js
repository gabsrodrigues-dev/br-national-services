function validateEmail(email) {
  if (/\s/.test(email)) {
    return false;
  }
  if (/@\./.test(email)) {
    return false;
  }
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

module.exports = {
  validateEmail
};
