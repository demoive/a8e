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
      {input: 'internationalization', output: 'i18n'},
      {input: 'documentation',        output: 'd11n'},
      {input: 'modularization',       output: 'm12n'},
      {input: 'accessibility',        output: 'a11y'},
      {input: 'canonicalization',     output: 'c14n'},
      {input: 'normalization',        output: 'n11n'},
      {input: 'virtualization',       output: 'v12n'},
      {input: 'globalization',        output: 'g11n'},
      {input: 'localizability',       output: 'l12y'},
      {input: 'personalization',      output: 'p13n'},
      {input: 'interoperability',     output: 'i14y'},
      {input: 'Arabization',          output: 'a9n'},
      {input: 'Andreessen Horowitz',  output: 'a16z'}
    ];

    tests.forEach(function (test) {
      it('should work for "' + test.input + '" => "' + test.output + '"', function () {
        var result = a8e(test.input);
        expect(result).to.equal(test.output);
      });
    });
  });
});
