/**
 * @typedef {{name: string, iso6392B: string, iso6392T?: string, iso6391?: string}} Iso6392
 */

import assert from 'node:assert'
import fs from 'node:fs'
import https from 'node:https'
import concatStream from 'concat-stream'
import {bail} from 'bail'
import {dsvFormat} from 'd3-dsv'

https
  .request(
    'https://www.loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt',
    (response) => {
      response.pipe(
        concatStream((buf) => {
          /** @type {Record<string, string>} */
          const bTo1 = {}
          /** @type {Record<string, string>} */
          const tTo1 = {}
          /** @type {Record<string, string>} */
          const bTo2T = {}
          /** @type {Record<string, string>} */
          const tTo2B = {}
          let doc = String(buf)
          let index = -1

          // BOM.
          if (doc.charCodeAt(0) === 0xfeff) {
            doc = doc.slice(1)
          }

          const data = dsvFormat('|')
            .parse('b|t|i|n\n' + doc)
            .map((d) => {
              assert(d.n, 'expected name in all languages')
              assert(d.b, 'expected bibliographic in all languages')
              return {
                name: d.n,
                iso6392B: d.b,
                iso6392T: d.t || undefined,
                iso6391: d.i || undefined
              }
            })

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

          fs.writeFile(
            '2.js',
            [
              '/**',
              ' * @typedef Language',
              ' *   One language.',
              ' * @property {string} name',
              ' *   Language name.',
              ' * @property {string} iso6392B',
              ' *   Bibliographic ISO 639-2 code.',
              ' * @property {string} [iso6392T]',
              ' *   Terminologic ISO 639-2 code.',
              ' * @property {string} [iso6391]',
              ' *   ISO 639-1 code.',
              ' */',
              '',
              '/**',
              ' * List of languages.',
              ' *',
              ' * @type {Array<Language>}',
              ' */',
              'export const iso6392 = ' + JSON.stringify(data, null, 2),
              ''
            ].join('\n'),
            bail
          )

          fs.writeFile(
            '2b-to-1.js',
            [
              '/**',
              ' * Map of ISO 639-2 bibliographic codes (`dut`) to ISO 639-1 codes (`nl`).',
              ' *',
              ' * @type {Record<string, string>}',
              ' */',
              'export const iso6392BTo1 = ' + JSON.stringify(bTo1, null, 2),
              ''
            ].join('\n'),
            bail
          )

          fs.writeFile(
            '2t-to-1.js',
            [
              '/**',
              ' * Map of ISO 639-2 terminologic codes (`nld`) to ISO 639-1 codes (`nl`).',
              ' *',
              ' * @type {Record<string, string>}',
              ' */',
              'export const iso6392TTo1 = ' + JSON.stringify(tTo1, null, 2),
              ''
            ].join('\n'),
            bail
          )

          fs.writeFile(
            '2t-to-2b.js',
            [
              '/**',
              ' * Map of ISO 639-2 terminologic codes (`nld`) to bibliographic codes (`dut`).',
              ' *',
              ' * @type {Record<string, string>}',
              ' */',
              'export const iso6392TTo2B = ' + JSON.stringify(tTo2B, null, 2),
              ''
            ].join('\n'),
            bail
          )

          fs.writeFile(
            '2b-to-2t.js',
            [
              '/**',
              ' * Map of ISO 639-2 bibliographic codes (`dut`) to terminologic codes (`nld`).',
              ' *',
              ' * @type {Record<string, string>}',
              ' */',
              'export const iso6392BTo2T = ' + JSON.stringify(bTo2T, null, 2),
              ''
            ].join('\n'),
            bail
          )
        })
      )
    }
  )
  .end()
