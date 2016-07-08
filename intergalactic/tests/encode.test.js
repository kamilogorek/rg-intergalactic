const { test } = require('ava');
const encode = require('../lib/encode');

test('Throws error for invalid input', (t) => {
  t.throws(() => encode(null));
  t.throws(() => encode(undefined));
  t.throws(() => encode(1));
  t.throws(() => encode({}));
  t.throws(() => encode([]));
});

test('Single letter input', (t) => {
  t.is(encode('F'), '2A1');
});

test('Multiple letters input', (t) => {
  t.is(encode('F O'), '2A1/C');
});

test('One word input', (t) => {
  t.is(encode('FOO'), '2A1|C|C');
});

test('Encode lower-cased and upper-cased characters in a same way', (t) => {
  t.is(encode('FoO'), '2A1|C|C');
  t.is(encode('fOo'), '2A1|C|C');
});

test('Multiple words input', (t) => {
  t.is(encode('FOO BAR'), '2A1|C|C/A3|1A|1A1');
});

test('Multiple lines input', (t) => {
  t.is(encode('FOO\nBAR'), '2A1|C|C\nA3|1A|1A1');
});

test('Multiple lines multiple words input', (t) => {
  t.is(encode('FOO BAR\nBAZ QUX'), '2A1|C|C/A3|1A|1A1\nA3|1A|B2/B1A|2A|A2A');
});

test('Respect multiple new line breaks', (t) => {
  t.is(encode('FOO\n\n\nBAZ'), '2A1|C|C\n\n\nA3|1A|B2');
});

test('Ignore multiple whitespaces between words', (t) => {
  t.is(encode('FOO    BAR'), '2A1|C|C/A3|1A|1A1');
});

test('Trims whitespace from the input', (t) => {
  t.is(encode('   FOO  '), '2A1|C|C');
});
