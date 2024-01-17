import Validator from "../app";

test('The username must contain only Latin letters, dashes, underscores and numbers (0-9)', () => {
  expect(Validator.validateUsername('sunny_123-day')).toBe(true);
  expect(Validator.validateUsername('sun#ny_123-day')).toBe(false);
});

test('The username cannot be empty', () => {
  expect(Validator.validateUsername('sunny')).toBe(true);
  expect(Validator.validateUsername('')).toBe(false);
});

test('The name should not contain more than three digits in a row', () => {
  expect(Validator.validateUsername('sunny_12-day4567')).toBe(false);
});

test('The username must not begin or end with numbers, underscores, or dashes', () => {
  expect(Validator.validateUsername('sunny_123-day45')).toBe(false);
  expect(Validator.validateUsername('8sunny_123-day')).toBe(false);
  expect(Validator.validateUsername('-sunny_123-day')).toBe(false);
  expect(Validator.validateUsername('sunny_123-day-')).toBe(false);
  expect(Validator.validateUsername('_sunny_123-day')).toBe(false);
  expect(Validator.validateUsername('sunny_123-day_')).toBe(false);
});
