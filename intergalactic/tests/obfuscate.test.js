const { test } = require('ava');
const obfuscate = require('../lib/obfuscate');

test('Throws error for invalid input', (t) => {
  t.throws(() => obfuscate(null));
  t.throws(() => obfuscate(undefined));
  t.throws(() => obfuscate(1));
  t.throws(() => obfuscate({}));
  t.throws(() => obfuscate([]));
});

test('Returns empty string for empty string input', (t) => {
  t.is(obfuscate(''), '');
});

test('Single dot', (t) => {
  t.is(obfuscate('.'), '1');
});

test('Single dash', (t) => {
  t.is(obfuscate('-'), 'A');
});

test('Multiple dots', (t) => {
  t.is(obfuscate('...'), '3');
});

test('Multiple dashes', (t) => {
  t.is(obfuscate('---'), 'C');
});

test('Mixed single characters', (t) => {
  t.is(obfuscate('.-'), '1A');
});

test('Mixed multiple characters', (t) => {
  t.is(obfuscate('..--.-'), '2B1A');
});
