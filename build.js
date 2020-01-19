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

  var data = dsv
    .dsvFormat('|')
    .parse('b|t|i|n\n' + doc)
    .map(map)

  fs.writeFile('index.json', JSON.stringify(data, null, 2) + '\n', bail)
}

function map(d) {
  return {
    name: d.n,
    iso6392B: d.b,
    iso6392T: d.t || undefined,
    iso6391: d.i || undefined
  }
}
