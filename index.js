'use strict';

/**
 * Converts the input to a numeronym
 * @param {string} text
 * @return {string}
 */
module.exports = function (text) {
  var re = /^\s*(.{1})(.+?)(.{1})\s*$/;

  var string = '' + text;
  var length = string.length;

  if (length < 3) {
    return string;
  }

  string = string.toLowerCase();
  var tokens = string.match(re);

  return tokens[1] + tokens[2].replace(/\s+/g, '').length + tokens[3];
};
