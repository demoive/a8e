'use strict';

var expect = require('chai').expect;
var a8e = require('../index');

describe('#numeronymize', function () {
  it('should return stringified version of input', function () {
    var result = a8e(1);
    expect(result).to.equal('1');
  });

  it('should return same input if length less than 3', function () {
    var result = a8e('hi');
    expect(result).to.equal('hi');
  });

  it('should return same input if length less than 3', function () {
    var result = a8e('foo');
    expect(result).to.equal('f1o');
  });
});
