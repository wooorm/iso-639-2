'use strict';

/**
 * Dependencies.
 */

var languages,
    fs,
    table;

languages = require('..');
fs = require('fs');
table = require('markdown-table');

/**
 * Write.
 */

fs.writeFileSync('Support.md',
    'Supported Codes\n' +
    '=================\n' +
    '\n' +
    table(
        [
            ['ISO-639-2', 'ISO-639-2T', 'ISO-639-1', 'Name']
        ].concat(languages.keys().map(function (code) {
            var language;

            language = languages.get(code);

            return [
                code,
                language.terminologic || '',
                language.iso6391 || '',
                language.name
            ];
        })), {
            'align': ['c', 'c', 'c', 'l']
        }
    ) +
    '\n'
);
