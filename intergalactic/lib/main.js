const fs = require('fs');
const encode = require('./encode');

module.exports = (argv) => {
  let [path] = argv._;
  // Respect newline character passed through STDIN
  let message = (argv.message || '').replace(/\\n/g, '\n');

  if (path) {
    try {
      message = fs.readFileSync(path, 'utf8');
    } catch (e) {
      console.error(`File at path '${path}' doesn't exist.\n`);
      process.exit(1);
    }
  }

  if (!message) {
    console.error('Please provide path or a direct message. Use --help for help.\n');
    process.exit(1);
  }

  console.log(encode(message));
  process.exit(0);
};
