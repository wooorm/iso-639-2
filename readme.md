# iso-639-2

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[ISO 639-2][source] codes in an accessible format, all of them.

Also includes pre-built indexes to map from 639-2 codes to other codes:

*   [`iso-639-2/2b-to-1`][2b-to-1]
    — Map bibliographic ISO 639-2 codes to ISO 639-1 codes
*   [`iso-639-2/2b-to-2t`][2b-to-2t]
    — Map bibliographic ISO 639-2 codes to terminologic ISO 639-2 codes
*   [`iso-639-2/2t-to-1`][2t-to-1]
    — Map terminologic ISO 639-2 codes to ISO 639-1 codes
*   [`iso-639-2/2t-to-2b`][2t-to-2b]
    — Map terminologic ISO 639-2 codes to bibliographic ISO 639-2 codes

## Install

[npm][]:

```sh
npm install iso-639-2
```

## Use

```js
var iso6392 = require('iso-639-2')

iso6392.slice(120, 150)
```

Yields:

```js
[
  {name: 'Egyptian (Ancient)', iso6392B: 'egy'},
  {name: 'Ekajuk', iso6392B: 'eka'},
  {name: 'Elamite', iso6392B: 'elx'},
  {name: 'English', iso6392B: 'eng', iso6391: 'en'},
  {name: 'English, Middle (1100-1500)', iso6392B: 'enm'},
  {name: 'Esperanto', iso6392B: 'epo', iso6391: 'eo'},
  {name: 'Estonian', iso6392B: 'est', iso6391: 'et'},
  {name: 'Ewe', iso6392B: 'ewe', iso6391: 'ee'},
  {name: 'Ewondo', iso6392B: 'ewo'},
  {name: 'Fang', iso6392B: 'fan'},
  {name: 'Faroese', iso6392B: 'fao', iso6391: 'fo'},
  {name: 'Fanti', iso6392B: 'fat'},
  {name: 'Fijian', iso6392B: 'fij', iso6391: 'fj'},
  {name: 'Filipino; Pilipino', iso6392B: 'fil'},
  {name: 'Finnish', iso6392B: 'fin', iso6391: 'fi'},
  {name: 'Finno-Ugrian languages', iso6392B: 'fiu'},
  {name: 'Fon', iso6392B: 'fon'},
  {name: 'French', iso6392B: 'fre', iso6392T: 'fra', iso6391: 'fr'},
  {name: 'French, Middle (ca.1400-1600)', iso6392B: 'frm'},
  {name: 'French, Old (842-ca.1400)', iso6392B: 'fro'},
  {name: 'Northern Frisian', iso6392B: 'frr'},
  {name: 'Eastern Frisian', iso6392B: 'frs'},
  {name: 'Western Frisian', iso6392B: 'fry', iso6391: 'fy'},
  {name: 'Fulah', iso6392B: 'ful', iso6391: 'ff'},
  {name: 'Friulian', iso6392B: 'fur'},
  {name: 'Ga', iso6392B: 'gaa'},
  {name: 'Gayo', iso6392B: 'gay'},
  {name: 'Gbaya', iso6392B: 'gba'},
  {name: 'Germanic languages', iso6392B: 'gem'},
  {name: 'Georgian', iso6392B: 'geo', iso6392T: 'kat', iso6391: 'ka'}
]
```

## API

### `iso6392`

`Array.<Language>` — List of languages.

#### `Language`

*   `iso6392B` (`string`) — Bibliographic code
*   `iso6392T` (`string?`) — Terminologic code
*   `iso6391` (`string?`) — ISO 639-1 code
*   `name` (`string`) — Language name

## Related

*   [`iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes in an accessible format

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/iso-639-2.svg

[build]: https://travis-ci.org/wooorm/iso-639-2

[downloads-badge]: https://img.shields.io/npm/dm/iso-639-2.svg

[downloads]: https://www.npmjs.com/package/iso-639-2

[size-badge]: https://img.shields.io/bundlephobia/minzip/iso-639-2.svg

[size]: https://bundlephobia.com/result?p=iso-639-2

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[source]: https://www.loc.gov/standards/iso639-2/php/code_list.php

[2b-to-1]: 2b-to-1.json

[2b-to-2t]: 2b-to-2t.json

[2t-to-1]: 2t-to-1.json

[2t-to-2b]: 2t-to-2b.json
