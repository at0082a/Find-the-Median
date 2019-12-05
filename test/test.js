const assert = require('assert');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../server/server');
let sieveFunction = require("../controller/findPrime");

chai.use(chaiHTTP);
chai.should();

//Test Find Median Prime Function
describe('Sieve Backend Test', () => {
  describe('sieve', () => {
    it('the sieve function should return undefined when input is not given', () => {
      assert.equal(undefined, sieveFunction.sieve(''));
    });
    it('the sieve function should return two numbers (3 and 5) when the input is 11', () => {
      //Test for two median numbers
      assert.deepEqual([3,5], sieveFunction.sieve(11));
    });
    it('the sieve function should return one number (7) when the input is 19', () => {
      //Test for one median number
      assert.equal(7, sieveFunction.sieve(19) );
    });
  });

  //Test GET Route
  describe('GET route', () => {
    it("should return an array", (done) => {
      const num = 9;
      chai.request(app)
        .get(`/prime/${num}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          done();
      });
    });
    it("the array should contain a number(s)", (done) => {
      const num = 11;
      chai.request(app)
        .get(`/prime/${num}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.length === 1 ? res.body.data[0].should.be.a('number') : 
            res.body.data[0].should.be.a('number')
            res.body.data[1].should.be.a('number');
          done();
      });
    });
  });
});