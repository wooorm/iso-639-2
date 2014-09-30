'use strict';

var Interface,
    data;

Interface = require('datamap-interface');
data = require('./data/iso-639-2.json');

module.exports = new Interface(data);
