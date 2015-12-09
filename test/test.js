'use strict';

var expect = require('chai').expect;
var a8e = require('../index');

describe('a8e', function() {
  describe('#edgeCases', function () {
    it('should return `undefined` for non-strings', function () {
      var result = a8e(1);
      expect(result).to.equal(undefined);
    });

    it('should return `undefined` if length less than 3', function () {
      var input0 = '';
      var input1 = 'I';
      var input2 = 'yo';
      var input3 = 'foo';

      expect(a8e(input0)).to.equal(undefined);
      expect(a8e(input1)).to.equal(undefined);
      expect(a8e(input2)).to.equal(undefined);
      expect(a8e(input3)).to.not.equal(undefined);
      expect(a8e(input3)).to.be.a('string');
    });

    it('should trim leading/trailing whitespace', function () {
      var result = a8e('  localization  ');
      expect(result).to.equal('l10n');
    });

    it('should remove spaces', function () {
      var result = a8e('Andreessen Horowitz');
      expect(result).to.equal('a16z');
    });

    it('should convert output to lowercase', function () {
      var result = a8e('DocumeNtatioN');
      expect(result).to.equal('d11n');
    });

    // it('should only use first line in multiline inputs', function () {
    //   var result = a8e('accessibility\ncanonicalization');
    //   expect(result).to.equal('a11y');
    // });
  });

  describe('#numeronymization', function () {
    var tests = [
      {input: 'localization',         expect: 'l10n'},
      {input: 'internationalization', expect: 'i18n'},
      {input: 'documentation',        expect: 'd11n'},
      {input: 'modularization',       expect: 'm12n'},
      {input: 'accessibility',        expect: 'a11y'},
      {input: 'canonicalization',     expect: 'c14n'},
      {input: 'normalization',        expect: 'n11n'},
      {input: 'virtualization',       expect: 'v12n'},
      {input: 'globalization',        expect: 'g11n'},
      {input: 'localizability',       expect: 'l12y'},
      {input: 'personalization',      expect: 'p13n'},
      {input: 'interoperability',     expect: 'i14y'},
      {input: 'arabization',          expect: 'a9n'},
      {input: 'Andreessen Horowitz',  expect: 'a16z'}
    ];

    tests.forEach(function (test) {
      it('should work for "' + test.input + '" => "' + test.expect + '"', function () {
        var result = a8e(test.input);
        expect(result).to.equal(test.expect);
      });
    });
  });
});
