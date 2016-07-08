const { test } = require('ava');
const { flattenDeep } = require('./index.js');

// Invalid input

test('Returns empty array for no input', (t) => {
  t.deepEqual(flattenDeep(), []);
});

test('Returns empty array for null input', (t) => {
  t.deepEqual(flattenDeep(null), []);
});

test('Returns empty array for undefined input', (t) => {
  t.deepEqual(flattenDeep(undefined), []);
});

test('Returns empty array for any string input', (t) => {
  t.deepEqual(flattenDeep(''), []);
  t.deepEqual(flattenDeep('foo'), []);
});

test('Returns empty array for any number input', (t) => {
  t.deepEqual(flattenDeep(0), []);
  t.deepEqual(flattenDeep(1), []);
  t.deepEqual(flattenDeep(1.23), []);
});

test('Returns empty array for any object input', (t) => {
  t.deepEqual(flattenDeep({}), []);
  t.deepEqual(flattenDeep({ foo: 'bar' }), []);
});

test('Returns empty array for empty array input', (t) => {
  t.deepEqual(flattenDeep([]), []);
});

// Valid input

test('Integer only arrays', (t) => {
  t.deepEqual(flattenDeep([1, [2, [3]], 4]), [1, 2, 3, 4]);
});

test('Ignore empty arrays', (t) => {
  t.deepEqual(flattenDeep([1, [2, 3, [4], [], 5]]), [1, 2, 3, 4, 5]);
});

test('Ignore empty nested arrays', (t) => {
  t.deepEqual(flattenDeep([1, [2, 3, [4], [[[]]], 5]]), [1, 2, 3, 4, 5]);
});

test('Mixed arrays', (t) => {
  t.deepEqual(flattenDeep([1, ['a', [3]], null]), [1, 'a', 3, null]);
});

test('Mixed arrays with empty nested arrays', (t) => {
  t.deepEqual(flattenDeep([1, [2], [3, 4, null, 5], [[undefined]], [[[], 6]]]), [1, 2, 3, 4, null, 5, undefined, 6]);
});
