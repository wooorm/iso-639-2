'use strict';

/**
 * Dependencies.
 */

var fs,
    textToJSON;

fs = require('fs');
textToJSON = require('plain-text-data-to-json');

/**
 * Data.
 */

var data;

data = textToJSON(fs.readFileSync('data/iso-639-2.txt', 'utf8'), {
    'comment': false,
    'delimiter': null,
    'forgiving': 'fix'
});

/**
 * Clean.
 */

var dictionary;

dictionary = {};

data.forEach(function (line) {
    var code;

    line = line.split('|');
    code = line.shift();

    dictionary[code] = {
        'terminologic': line[0] || null,
        'iso6391': line[1] || null,
        'name': line[2]
    };
});

/**
 * Write.
 */

fs.writeFileSync('data/iso-639-2.json', JSON.stringify(dictionary, 0, 2));
