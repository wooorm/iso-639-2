# iso-639-2

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Info on ISO 639-2.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`iso6392`](#iso6392)
    *   [`iso6392BTo1`](#iso6392bto1)
    *   [`iso6392BTo2T`](#iso6392bto2t)
    *   [`iso6392TTo1`](#iso6392tto1)
    *   [`iso6392TTo2B`](#iso6392tto2b)
    *   [`Language`](#language)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package contains info on [ISO 639-2][source].
ISO 639-2 is the alpha-3 code in “Codes for the representation of names of
languages – Part 2”.

## When should I use this?

You can use this package any time you have to deal with languages or ISO 639-2
in particular.
But [ISO 639-3][iso-639-3] might be better.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install iso-639-2
```

In Deno with [`esm.sh`][esmsh]:

```js
import {iso6392} from 'https://esm.sh/iso-639-2@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {iso6392} from 'https://esm.sh/iso-639-2@3?bundle'
</script>
```

## Use

```js
import {iso6392} from 'iso-639-2'

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

This package exports the identifiers
[`iso6392`][api-iso-639-2],
[`iso6392BTo1`][api-iso-639-2b-to-1],
[`iso6392BTo2T`][api-iso-639-2b-to-2t],
[`iso6392TTo1`][api-iso-639-2t-to-1], and
[`iso6392TTo2B`][api-iso-639-2t-to-2b].
There is no default export.

### `iso6392`

List of languages (`Array<Language>`).

### `iso6392BTo1`

ISO 639-2 Bibliographic (`dut`) to ISO 639-1 (`nl`) (`Record<string, string>`).

### `iso6392BTo2T`

ISO 639-2 Bibliographic (`dut`) to ISO 639-2 Terminologic (`nld`)
(`Record<string, string>`)
Missing when the bibliographic and terminologic codes are the same.

### `iso6392TTo1`

ISO 639-2 Terminologic (`nld`) to ISO 639-1 (`nl`) (`Record<string, string>`).
Not all language in 639-2 were available in 639-1.

### `iso6392TTo2B`

ISO 639-2 Terminologic (`nld`) to ISO 639-2 Bibliographic (`dut`)
(`Record<string, string>`).
Missing when the bibliographic and terminologic codes are the same.

### `Language`

One language (TypeScript type).

###### Fields

*   `name` (`string`)
    — language name
*   `iso6392B` (`string`)
    — bibliographic ISO 639-2 code
*   `iso6392T` (`string | undefined`)
    — terminologic ISO 639-2 code (if different than `iso6392B`)
*   `iso6391` (`string | undefined`)
    — ISO 639-1 code (if available)

## Data

The data is crawled from [`www.loc.gov`][source].

## Types

This package is fully typed with [TypeScript][].
It exports an additional type `Language`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 16+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`bcp-47`](https://github.com/wooorm/bcp-47)
    — parse and serialize BCP 47 language tags
*   [`bcp-47-match`](https://github.com/wooorm/bcp-47-match)
    — match BCP 47 language tags with language ranges per RFC 4647
*   [`bcp-47-normalize`](https://github.com/wooorm/bcp-47-normalize)
    — normalize, canonicalize, and format BCP 47 tags
*   [`iso-3166`](https://github.com/wooorm/iso-3166)
    — ISO 3166 codes
*   [`iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes
*   [`iso-15924`](https://github.com/wooorm/iso-15924)
    — ISO 15924 codes
*   [`un-m49`](https://github.com/wooorm/un-m49)
    — UN M49 codes

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/iso-639-2/workflows/main/badge.svg

[build]: https://github.com/wooorm/iso-639-2/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/iso-639-2.svg

[coverage]: https://codecov.io/github/wooorm/iso-639-2

[downloads-badge]: https://img.shields.io/npm/dm/iso-639-2.svg

[downloads]: https://www.npmjs.com/package/iso-639-2

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=iso-639-2

[size]: https://bundlejs.com/?q=iso-639-2

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[source]: https://www.loc.gov/standards/iso639-2/php/code_list.php

[iso-639-3]: https://github.com/wooorm/iso-639-3

[api-iso-639-2]: #iso6392

[api-iso-639-2b-to-1]: #iso6392bto1

[api-iso-639-2b-to-2t]: #iso6392bto2t

[api-iso-639-2t-to-1]: #iso6392tto1

[api-iso-639-2t-to-2b]: #iso6392tto2b
