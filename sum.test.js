const sum = require('./sum');

test('2개숫자의 합', () => {
  expect(sum(10, 40)).toBe(50);
  expect(sum(5, 41)).toBe(46);
});