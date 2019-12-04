const assert = require('assert');
let sieveFunction = require("../controller/magic");

describe('Sieve Test', () => {
  describe('sieve', () => {
    it('the sieve function should return undefined when input is not given', () => {
      assert.equal(undefined, sieveFunction.sieve(''));
    });
    it('the sieve function should return two numbers (3 and 5) when the input is 11', () => {
      assert.deepEqual([3,5], sieveFunction.sieve(11));
    });
    it('the sieve function should return one number (7) when the input is 19', () => {
      assert.equal(7, sieveFunction.sieve(19) );
    });
  });
});