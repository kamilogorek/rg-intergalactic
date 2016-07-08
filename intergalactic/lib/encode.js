const obfuscate = require('./obfuscate');
const morseDictionary = require('./morse');

const encodeLine = (line) => line.split(/\s+/g).map(encodeWord).join('/');
const encodeWord = (word) => word.split('').map(encodeLetter).join('|');
const encodeLetter = (letter) => obfuscate(morseDictionary[letter] || '');

module.exports = function encode (input) {
  if (typeof input !== 'string') throw new Error('Encode function has been called with invalid input');

  return input.trim()
    .toUpperCase()
    .split('\n')
    .map(encodeLine)
    .join('\n');
}
