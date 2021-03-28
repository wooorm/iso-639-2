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

function onconnection(response) {
  response.pipe(concat(onconcat))
}

function onconcat(buf) {
  var bTo1 = {}
  var tTo1 = {}
  var bTo2T = {}
  var tTo2B = {}
  var doc = String(buf)
  var index = -1
  var d

  if (doc.charCodeAt(0) === 0xfeff) {
    doc = doc.slice(1)
  }

  var data = dsv
    .dsvFormat('|')
    .parse('b|t|i|n\n' + doc)
    .map(map)

  while (++index < data.length) {
    d = data[index]

    if (d.iso6391) {
      bTo1[d.iso6392B] = d.iso6391
      if (d.iso6392T) tTo1[d.iso6392B] = d.iso6391
    }

    if (d.iso6392T) {
      bTo2T[d.iso6392B] = d.iso6392T
      tTo2B[d.iso6392T] = d.iso6392B
    }
  }

  write('index', data)
  write('2t-to-1', tTo1)
  write('2b-to-1', bTo1)
  write('2t-to-2b', tTo2B)
  write('2b-to-2t', bTo2T)

  function write(name, data) {
    fs.writeFile(name + '.json', JSON.stringify(data, null, 2) + '\n', bail)
  }
}

function map(d) {
  return {
    name: d.n,
    iso6392B: d.b,
    iso6392T: d.t || undefined,
    iso6391: d.i || undefined
  }
}
