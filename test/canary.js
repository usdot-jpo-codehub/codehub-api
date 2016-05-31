var assert = require('chai').assert;
var canary = require('../common/canary').createCanary('chirp');
describe('makeSound', function () {
  it('should return hello when called', function () {
    assert.equal('chirp', canary.sound);
  });
});
