'use strict';

var fs,
    textToJSON;

fs = require('fs');
textToJSON = require('plain-text-data-to-json');

var input;

input = fs.readFileSync('data/iso-639-2.txt', 'utf8');

var data;

data = textToJSON(input, {
    'comment' : false,
    'delimiter' : null,
    'forgiving' : 'fix'
});

var dictionary;

dictionary = {};

data.forEach(function (line) {
    var code;

    line = line.split('|');
    code = line.shift();

    dictionary[code] = {
        'terminologic' : line[0] || null,
        'iso6391' : line[1] || null,
        'name' : line[2]
    };
});

fs.writeFileSync('data/iso-639-2.json', JSON.stringify(dictionary, 0, 2));
