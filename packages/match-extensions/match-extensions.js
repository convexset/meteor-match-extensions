/* global check: true */
/* global Match: true */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'underscore' : '^1.8.3',
});
const _ = require('underscore');


_.extend(Match, {
    isArrayOf: function isArrayOf(typeInfo) {
        return Match.Where(function isArrayOfType(arr) {
            check(arr, Array);
            arr.forEach(function(x) {
                check(x, typeInfo);
            });
            return true;
        });
    },
    isDictionaryOf: function isDictionaryOf(keyType, valueTypeInfo) {
        return Match.Where(function isDictionaryOfType(dict) {
            check(dict, Object);
            for (var key in dict) {
                if (dict.hasOwnProperty(key)) {
                    check(key, keyType);
                    check(dict[key], valueTypeInfo);
                }
            }
            return true;
        });
    },
    isPrimitive: Match.OneOf(String, Number, Boolean, null),
    isPositive: Match.Where(function(x) {
        check(x, Number);
        return x > 0;
    }),
    isNonPositive: Match.Where(function(x) {
        check(x, Number);
        return x <= 0;
    }),
    isNegative: Match.Where(function(x) {
        check(x, Number);
        return x < 0;
    }),
    isNonNegative: Match.Where(function(x) {
        check(x, Number);
        return x >= 0;
    }),
    isPositiveInteger: Match.Where(function(x) {
        check(x, Match.Integer);
        return x > 0;
    }),
    isNonPositiveInteger: Match.Where(function(x) {
        check(x, Match.Integer);
        return x <= 0;
    }),
    isNegativeInteger: Match.Where(function(x) {
        check(x, Match.Integer);
        return x < 0;
    }),
    isNonNegativeInteger: Match.Where(function(x) {
        check(x, Match.Integer);
        return x >= 0;
    }),
});