'use strict'

var test = require('tape')
var iso6392 = require('.')

test('iso6392', function (t) {
  var index = -1

  t.plan(5)

  t.ok(Array.isArray(iso6392), 'should be an `array`')

  while (++index < iso6392.length) {
    if (iso6392[index].iso6391 !== 'en') {
      continue
    }

    t.equal(iso6392[index].iso6392B, 'eng', 'bibliographic code')
    t.equal(iso6392[index].iso6392T, undefined, 'terminologic code')
    t.equal(iso6392[index].iso6391, 'en', '639-1 code')
    t.equal(iso6392[index].name, 'English', 'name')
  }
})
