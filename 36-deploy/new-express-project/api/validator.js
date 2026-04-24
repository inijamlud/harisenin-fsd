const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isNumber = (number) => {
  return typeof number == "number";
};

module.exports = { isValidEmail, isNumber };
