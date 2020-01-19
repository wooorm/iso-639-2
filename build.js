'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var dsv = require('d3-dsv')

https
  .request(
    'https://www.loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt',
    onconnection
  )
  .end()

function onconnection(res) {
  res.pipe(concat(onconcat))
}

function onconcat(buf) {
  var doc = String(buf)
  if (doc.charCodeAt(0) === 0xfeff) {
    doc = doc.slice(1)
  }

  var head = 'b|t|i|n\n'
  var data = dsv
    .dsvFormat('|')
    .parse(head + doc)
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
