'use strict';

/**
 * Converts the input to a numeronym
 * @param {string} text
 * @returns {string|undefined} Numeronymization of text
 */
module.exports = function (text) {
  var PATTERN = /^(.)(.+?)(.)$/;

  var string = ('' + text)
    .toLowerCase()
    .replace(/\s+/g, '');

  var tokens = string.match(PATTERN);

  if (!tokens) {
    return;
  }

  return (
    tokens[1] +
    tokens[2].length +
    tokens[3]
  );
};
