import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concat from 'concat-stream'
import {dsvFormat} from 'd3-dsv'

https
  .request(
    'https://www.loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt',
    onconnection
  )
  .end()

/**
 * @typedef {{n: string, b: string, t?: string, i?: string}} Iso6392Raw
 *
 * @typedef {{name: string, iso6392B: string, iso6392T?: string, iso6391?: string}} Iso6392
 */

/**
 * @param {import('http').IncomingMessage} response
 */
function onconnection(response) {
  response.pipe(concat(onconcat))
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  const bTo1 = {}
  const tTo1 = {}
  const bTo2T = {}
  const tTo2B = {}
  let doc = String(buf)
  let index = -1

  if (doc.charCodeAt(0) === 0xfeff) {
    doc = doc.slice(1)
  }

  const data = dsvFormat('|')
    .parse('b|t|i|n\n' + doc)
    .map(
      /** @param {Iso6392Raw} d */
      (d) => ({
        name: d.n,
        iso6392B: d.b,
        iso6392T: d.t || undefined,
        iso6391: d.i || undefined
      })
    )

  while (++index < data.length) {
    const d = data[index]

    if (d.iso6391) {
      bTo1[d.iso6392B] = d.iso6391
      if (d.iso6392T) tTo1[d.iso6392B] = d.iso6391
    }

    if (d.iso6392T) {
      bTo2T[d.iso6392B] = d.iso6392T
      tTo2B[d.iso6392T] = d.iso6392B
    }
  }

  write('2.js', 'iso6392', data)
  write('2t-to-1.js', 'iso6392TTo1', tTo1)
  write('2b-to-1.js', 'iso6392BTo1', bTo1)
  write('2t-to-2b.js', 'iso6392TTo2B', tTo2B)
  write('2b-to-2t.js', 'iso6392BTo2T', bTo2T)

  /**
   * @param {string} name
   * @param {string} id
   * @param {unknown} data
   */
  function write(name, id, data) {
    fs.writeFile(
      name,
      'export const ' + id + ' = ' + JSON.stringify(data, null, 2) + '\n',
      bail
    )
  }
}
