const { addCommas } = require('./index');
/**
 * 1. Are commas added
 * 2. Are decimal values retained accurately
 */

test('adds commas to a list', () => {
  expect(addCommas(1000)).toBe('1,000');
});
