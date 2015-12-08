'use strict';

var expect = require('chai').expect;
var a8e = require('../index');

describe('a8e', function() {
  describe('#edgeCases', function () {
    it('should return a stringified version of input', function () {
      var result = a8e(1);
      expect(result).to.be.a('string');
      expect(result).to.equal('1');
    });

    it('should return same input if length less than 3', function () {
      var input0 = '';
      var input1 = 'I';
      var input2 = 'yo';
      var input3 = 'foo';

      expect(a8e(input0)).to.equal(input0);
      expect(a8e(input1)).to.equal(input1);
      expect(a8e(input2)).to.equal(input2);
      expect(a8e(input3)).to.not.equal(input3);
    });
  });

  describe('#numeronymization', function () {
    var tests = [
      {input: 'localization',         output: 'l10n'},
      {input: 'internationalization', output: 'i18n'}
    ];

    tests.forEach(function (test) {
      it('should work for <' + test.input + '>', function () {
        var result = a8e(test.input);
        expect(result).to.equal(test.output);
      });
    });
  });
});
