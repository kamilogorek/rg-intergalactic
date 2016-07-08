function flattenDeep (input) {
  if (!Array.isArray(input)) {
    return [];
  }

  return input.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return acc.concat(flattenDeep(value));
    }
    return acc.concat(value);
  }, []);
}

module.exports = { flattenDeep }
