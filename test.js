import assert from 'node:assert/strict'
import test from 'node:test'
import {iso6392} from './index.js'

test('iso6392', function () {
  assert.ok(Array.isArray(iso6392), 'should be an `array`')
  const en = iso6392.find((d) => d.iso6391 === 'en')
  assert(en)
  assert.equal(en.iso6392B, 'eng', 'bibliographic code')
  assert.equal(en.iso6392T, undefined, 'terminologic code')
  assert.equal(en.iso6391, 'en', '639-1 code')
  assert.equal(en.name, 'English', 'name')
})
