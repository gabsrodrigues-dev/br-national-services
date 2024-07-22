require('../../../src/prototype');

test('should format phone number with country code', () => {
  const number = '5531991647507';
  const formatted = number.brFormat('phone');
  expect(formatted).toBe('+55 (31) 99164-7507');
});

test('should format phone number without country code', () => {
  const number = '31991647507';
  const formatted = number.brFormat('phone');
  expect(formatted).toBe('(31) 99164-7507');
});

test('should parse formatted phone number to digits only', () => {
  const formatted = '+55 (31) 99164-7507';
  const parsed = formatted.brParse('phone');
  expect(parsed).toBe('5531991647507');
});

test('should parse phone number without country code to digits only', () => {
  const formatted = '(31) 99164-7507';
  const parsed = formatted.brParse('phone');
  expect(parsed).toBe('31991647507');
});
