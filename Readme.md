# iso-639-2 [![Build Status](https://img.shields.io/travis/wooorm/iso-639-2.svg?style=flat)](https://travis-ci.org/wooorm/iso-639-2) [![Coverage Status](https://img.shields.io/coveralls/wooorm/iso-639-2.svg?style=flat)](https://coveralls.io/r/wooorm/iso-639-2?branch=master)

[ISO-639-2](http://www.loc.gov/standards/iso639-2/php/code_list.php) codes in an accessible format, all 486 of 'em.

## Installation

npm:
```sh
$ npm install iso-639-2
```

## Usage

```js
var iso6392 = require('iso-639-2');

iso6392.get('eng');
/**
 * {
 *   terminologic: null,
 *   iso6391: 'en',
 *   name: 'English'
 * }
 */

iso6392.get('dut');
/**
 * {
 *   terminologic: 'nld',
 *   iso6391: 'nl',
 *   name: 'Dutch; Flemish'
 * }
 */

iso6392.has('unicorn'); // false

iso6392.all(); // An array with 486 objects.
```

## API

See [the **datamap-interface** API](https://github.com/wooorm/datamap-interface).

## iso-639-2 Codes

See [Support.md](Support.md).

## License

MIT © [Titus Wormer](http://wooorm.com)
