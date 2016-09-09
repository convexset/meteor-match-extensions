# MatchExtensions

A Meteor package extending the [`match`](http://docs.meteor.com/#/full/match_test) package.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Install](#install)
- [Usage](#usage)
    - [Numerical Checks (Self-explanatory)](#numerical-checks-self-explanatory)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

This is available as [`convexset:match-extensions`](https://atmospherejs.com/convexset/operations-queue) on [Atmosphere](https://atmospherejs.com/). (Install with `meteor add convexset:match-extensions`.)

If you get an error message like:
```
WARNING: npm peer requirements not installed:
 - package-utils@^0.2.1 not installed.
          
Read more about installing npm peer dependencies:
  http://guide.meteor.com/using-packages.html#peer-npm-dependencies
```
It is because, by design, the package does not include instances of these from `npm` to avoid repetition. (In this case, `meteor npm install --save package-utils` will deal with the problem.)

See [this](http://guide.meteor.com/using-packages.html#peer-npm-dependencies) or [this](https://atmospherejs.com/tmeasday/check-npm-versions) for more information.

Now, if you see a message like
```
WARNING: npm peer requirements not installed:
underscore@1.5.2 installed, underscore@^1.8.3 needed
```
it is because you or something you are using is using Meteor's cruddy old `underscore` package. Install a new version from `npm`. (And, of course, you may use the `npm` version in a given scope via `require("underscore")`.)


## Usage

`Match.isArrayOf(typeInfo)`: Checks for an `Array` where each element `x` passes `check(x, typeInfo)`.

`Match.isDictionaryOf(keyType, valueTypeInfo)`: Checks for an `Object` ("dictionary") where each key-value pair (`key`, `value`) passes `check(key, keyType)` and `check(value, typeInfo)`.

`Match.isPrimitive`: Is one of `String`, `Number`, `Boolean`, or `null`

#### Numerical Checks (Self-explanatory)

 - `Match.isInteger` (because `Match.Integer` does not play well with `SimpleSchema`)
 - `Match.isPositive`
 - `Match.isNonPositive`
 - `Match.isNegative`
 - `Match.isNonNegative`
 - `Match.isPositiveInteger`
 - `Match.isNonPositiveInteger`
 - `Match.isNegativeInteger`
 - `Match.isNonNegativeInteger`
