function generateCPF() {
  const randomDigits = (count) =>
    Array.from(Array(count), () => Math.floor(Math.random() * 10));

  const calculateDigit = (digits) => {
    const factor = digits.length + 1;
    const total = digits.reduce(
      (sum, digit, index) => sum + digit * (factor - index),
      0
    );
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const baseDigits = randomDigits(9);
  const firstDigit = calculateDigit(baseDigits);
  const secondDigit = calculateDigit([...baseDigits, firstDigit]);

  return [...baseDigits, firstDigit, secondDigit].join("");
}

module.exports = { generateCPF };
