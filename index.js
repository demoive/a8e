'use strict';

/**
 * Converts the input to a numeronym
 * @param {string} text
 * @return {string}
 */
module.exports = function (text) {
  var re = /(.{1})(.+)(.{1})/;

  var string = '' + text;
  var length = string.length;
  var tokens = string.match(re);

  if (length < 3) {
    return string;
  }

  return tokens[1] + tokens[2].length + tokens[3];
};
