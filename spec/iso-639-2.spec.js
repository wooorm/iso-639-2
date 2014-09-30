'use strict';

/**
 * Dependencies.
 */

var iso6392,
    assert;

iso6392 = require('..');
assert = require('assert');

/**
 * Tests.
 */

describe('iso6392.get(property)', function () {
    it('should return the value of an item in the database', function () {
        var result;

        result = iso6392.get('eng');

        assert(typeof result === 'object');
        assert(result.terminologic === null);
        assert(result.iso6391 === 'en');
        assert(result.name === 'English');
    });

    it('should return null if am item is not in the database', function () {
        assert(iso6392.get('zzz') === null);
    });
});

describe('iso6392.has(property)', function () {
    it('should return if an item is in the database', function () {
        assert(iso6392.has('eng') === true);
        assert(iso6392.has('unicorn') === false);
    });

    it('should not fail on prototpe extending', function () {
        /* eslint-disable no-extend-native */
        Object.prototype.unicorn = 'mammal';

        assert(!iso6392.has('unicorn'));

        delete Object.prototype.unicorn;
        /* eslint-enable no-extend-native */
    });

    it('should not fail on native properties', function () {
        assert(!iso6392.has('toString'));
        assert(!iso6392.has('constructor'));
        assert(!iso6392.has('hasOwnProperty'));
    });
});

describe('iso6392.all()', function () {
    var all;

    all = iso6392.all();

    it('should return an object', function () {
        assert(typeof all === 'object');
    });

    it('should return all values in the datamap', function () {
        assert(Object.keys(all).length === 486);
        assert('eng' in all);
        assert('dut' in all);
    });

    it('should be immutable', function () {
        all.unicorn = 'mammal';

        assert(!iso6392.has('unicorn'));
        assert(!('unicorn' in iso6392.all()));
    });
});
