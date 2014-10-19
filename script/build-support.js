'use strict';

var fs,
    languages;

fs = require('fs');
languages = require('../').all();

fs.writeFileSync('Support.md',
    'Supported Codes\n' +
    '=================\n' +
    '\n' +
    '| ISO-639-2 | ISO-639-2T | ISO-639-1 | Name |\n' +
    '| :-------: | :--------: | :-------: | :--: |\n' +

    Object.keys(languages).map(function (code) {
        var language;

        language = languages[code];

        return '| ' +
            [
                code,
                language.terminologic || '',
                language.iso6391 || '',
                language.name
            ].join(' | ') +
            ' |';
    }).join('\n') +

    '\n'
);
