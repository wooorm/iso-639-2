# iso-639-2 [![Build Status][build-badge]][build-page]

[ISO 639-2][source] codes in an accessible format, all of them.

## Installation

[npm][]:

```bash
npm install iso-639-2
```

## Usage

```javascript
var iso6392 = require('iso-639-2');

var subset = iso6392.slice(121, 126);
```

Yields:

```javascript
[ { name: 'Elamite',
    iso6392B: 'elx',
    iso6392T: null,
    iso6391: null },
  { name: 'English',
    iso6392B: 'eng',
    iso6392T: null,
    iso6391: 'en' },
  { name: 'English, Middle (1100-1500)',
    iso6392B: 'enm',
    iso6392T: null,
    iso6391: null },
  { name: 'Esperanto',
    iso6392B: 'epo',
    iso6392T: null,
    iso6391: 'eo' },
  { name: 'Estonian',
    iso6392B: 'est',
    iso6392T: null,
    iso6391: 'et' } ]
```

## API

### `iso6392`

`Array.<Language>` — List of languages.

#### `Language`

*   `iso6392B` (`string`) — Bibliographic code
*   `iso6392T` (`string?`) — Terminologic code
*   `iso6391` (`string?`) — ISO 639-1 code
*   `name` (`string`) — Language name

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/iso-639-2.svg

[build-page]: https://travis-ci.org/wooorm/iso-639-2

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[source]: http://www.loc.gov/standards/iso639-2/php/code_list.php
