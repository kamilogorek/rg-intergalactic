/**
 * startingCharCode + 1 = A
 * startingCharCode + 2 = B
 * startingCharCode + 3 = C
 * And so on...
 */
const startingCharCode = 64;

module.exports = function obfuscate (input) {
  if (typeof input !== 'string') throw new Error('Obfuscate function has been called with invalid input');

  let matches = input.match(/([\.-])\1*/g) || [];

  return matches.map((group) => {
    if (group[0] === '.') return group.length;
    if (group[0] === '-') return String.fromCharCode(startingCharCode + group.length);
    return '';
  }).join('');
}
