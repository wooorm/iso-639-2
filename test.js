import assert from 'node:assert/strict'
import test from 'node:test'
import {iso6392} from './index.js'

test('iso6392', async function () {
  assert.deepEqual(
    Object.keys(await import('./index.js')).sort(),
    ['iso6392', 'iso6392BTo1', 'iso6392BTo2T', 'iso6392TTo1', 'iso6392TTo2B'],
    'should expose the public api'
  )

  assert.ok(Array.isArray(iso6392), 'should be an `array`')
  const en = iso6392.find((d) => d.iso6391 === 'en')
  assert(en)
  assert.equal(en.iso6392B, 'eng', 'bibliographic code')
  assert.equal(en.iso6392T, undefined, 'terminologic code')
  assert.equal(en.iso6391, 'en', '639-1 code')
  assert.equal(en.name, 'English', 'name')
})
