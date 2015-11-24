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

## Usage

`Match.isArrayOf(typeInfo)`: Checks for an `Array` where each element `x` passes `check(x, typeInfo)`.

`Match.isDictionaryOf(keyType, valueTypeInfo)`: Checks for an `Object` ("dictionary") where each key-value pair (`key`, `value`) passes `check(key, keyType)` and `check(value, typeInfo)`.

`Match.isPrimitive`: Is one of `String`, `Number`, `Boolean`, or `null`

#### Numerical Checks (Self-explanatory)

`Match.isPositive`
`Match.isNonPositive`
`Match.isNegative`
`Match.isNonNegative`
`Match.isPositiveInteger`
`Match.isNonPositiveInteger`
`Match.isNegativeInteger`
`Match.isNonNegativeInteger`
