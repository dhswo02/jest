const sum = require('./sum');

test('2개숫자의 합', () => {
  expect(sum(2, 48)).toBe(5);
  expect(sum(6, 40)).toBe(46);
});