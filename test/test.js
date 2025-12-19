const assert = require('assert');
const { greet } = require('../index');

assert.strictEqual(greet('Venkat'), 'Hello, Venkat!');
assert.strictEqual(greet(), 'Hello, world!');

console.log('All tests passed');
