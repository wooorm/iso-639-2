'use strict'

var test = require('tape')
var iso6392 = require('.')

test('iso6392', function(t) {
  t.plan(5)

  t.ok(Array.isArray(iso6392), 'should be an `array`')

  iso6392.forEach(function(language) {
    if (language.iso6391 !== 'en') {
      return
    }

    t.equal(language.iso6392B, 'eng', 'bibliographic code')
    t.equal(language.iso6392T, undefined, 'terminologic code')
    t.equal(language.iso6391, 'en', '639-1 code')
    t.equal(language.name, 'English', 'name')
  })
})
