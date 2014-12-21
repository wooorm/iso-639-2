'use strict';

/*
 * Dependencies.
 */

var Interface;

Interface = require('datamap-interface');

/*
 * Data.
 */

var codes;

codes = require('./data/iso-639-2.json');

/*
 * Expose iso-639-2.
 */

module.exports = new Interface(codes);
