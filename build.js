'use strict'

var fs = require('fs')
var http = require('http')
var bail = require('bail')
var concat = require('concat-stream')
var dsv = require('d3-dsv')

http
  .request(
    'http://www.loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt',
    onconnection
  )
  .end()

function onconnection(res) {
  res.pipe(concat(onconcat))
}

function onconcat(body) {
  var head = 'b|t|i|n\n'
  var data = dsv
    .dsvFormat('|')
    .parse(head + body.toString())
    .map(map)

  fs.writeFile('index.json', JSON.stringify(data, 0, 2) + '\n', bail)
}

function map(d) {
  return {
    name: d.n,
    iso6392B: d.b,
    iso6392T: d.t || null,
    iso6391: d.i || null
  }
}
