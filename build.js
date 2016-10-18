'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var http = require('http');
var concat = require('concat-stream');
var dsv = require('d3-dsv');

/* Constants. */
var input = 'http://www.loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt';
var output = path.join(__dirname, 'index.json');

/* Core. */
http.request(input, function (response) {
  response.pipe(concat(function (body) {
    var head = 'b|t|i|n\n';
    var data = dsv.dsvFormat('|')
      .parse(head + body.toString())
      .map(function (d) {
        return {
          name: d.n,
          iso6392B: d.b,
          iso6392T: d.t || null,
          iso6391: d.i || null
        };
      });

    fs.writeFile(output, JSON.stringify(data, 0, 2) + '\n');
  }));
}).end();
