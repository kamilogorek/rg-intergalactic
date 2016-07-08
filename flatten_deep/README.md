# flattenDeep

Flatten an arbitrarily nested arrays for node.js

## Requirements

`Node.js >=5.0.0`

## Usage

```
const { flattenDeep } = require('./index.js');
flattenDeep([1, [2, [3]], 4]); // [1, 2, 3, 4]
```

## Running Tests

```
$ npm install
$ npm test
````
