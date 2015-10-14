/* global Tinytest: true */
/* global Match: true */

Tinytest.add('Arrays', function(test) {

	// `Match.isArrayOf(typeInfo)`: Checks for an `Array` where each element `x` passes `check(x, typeInfo)`.
	test.isTrue(Match.test([0, 0], Match.isArrayOf(Number)), "Arrays");
	test.isFalse(Match.test([-1.1, 'a'], Match.isArrayOf(Number)), "Failing: Arrays");

	test.isTrue(Match.test([{name: 'name', age: 10}, {name: 'name', age: '10'}], Match.isArrayOf(Match.isDictionaryOf(String, Match.isPrimitive))), "Arrays of Dict");
});


Tinytest.add('Dictionaries', function(test) {

	// `Match.isDictionaryOf(keyType, valueTypeInfo)`: Checks for an `Object` ("dictionary") where each key-value pair (`key`, `value`) passes `check(key, keyType)` and `check(value, typeInfo)`.

	test.isTrue(Match.test({name: 'name', age: 10}, Match.isDictionaryOf(String, Match.isPrimitive)), "Dict");
	test.isFalse(Match.test({name: 'name', age: 10}, Match.isDictionaryOf(String, String)), "Failing Dict");

});


Tinytest.add('Primitives', function(test) {

	// `Match.isPrimitive`: Is one of `String`, `Number`, `Boolean`, or `null`

	test.isTrue(Match.test('', Match.isPrimitive), "Primitives: String");
	test.isTrue(Match.test(5, Match.isPrimitive), "Primitives: Number");
	test.isTrue(Match.test(true, Match.isPrimitive), "Primitives: Boolean");
	test.isTrue(Match.test(null, Match.isPrimitive), "Primitives: null");
	test.isFalse(Match.test({}, Match.isPrimitive), "Failing: Primitives");

});


Tinytest.add('Numerical stuff', function(test) {

	// `Match.isPositive`
	// `Match.isNonPositive`
	// `Match.isNegative`
	// `Match.isNonNegative`
	// `Match.isPositiveInteger`
	// `Match.isNonPositiveInteger`
	// `Match.isNegativeInteger`
	// `Match.isNonNegativeInteger`

	// Passing

	test.isTrue(Match.test(1.1, Match.isPositive), "isPositive");
	test.isTrue(Match.test(-1.1, Match.isNegative), "isNegative");
	test.isTrue(Match.test(0.0, Match.isNonPositive), "isNonPositive");
	test.isTrue(Match.test(-1.1, Match.isNonPositive), "isNonPositive");
	test.isTrue(Match.test(0.0, Match.isNonNegative), "isNonNegative");
	test.isTrue(Match.test(1.1, Match.isNonNegative), "isNonNegative");

	test.isTrue(Match.test(1, Match.isPositiveInteger), "isPositiveInteger");
	test.isTrue(Match.test(-1, Match.isNegativeInteger), "isNegativeInteger");
	test.isTrue(Match.test(0, Match.isNonPositiveInteger), "isNonPositiveInteger");
	test.isTrue(Match.test(-1, Match.isNonPositiveInteger), "isNonPositiveInteger");
	test.isTrue(Match.test(1, Match.isNonNegativeInteger), "isNonNegativeInteger");
	test.isTrue(Match.test(0, Match.isNonNegativeInteger), "isNonNegativeInteger");


	// Failing

	test.isFalse(Match.test(-1.1, Match.isPositive), "Failing: isPositive");
	test.isFalse(Match.test(1.1, Match.isNegative), "Failing: isNegative");
	test.isFalse(Match.test(0.01, Match.isNonPositive), "Failing: isNonPositive");
	test.isFalse(Match.test(1.1, Match.isNonPositive), "Failing: isNonPositive");
	test.isFalse(Match.test(-0.01, Match.isNonNegative), "Failing: isNonNegative");
	test.isFalse(Match.test(-1.1, Match.isNonNegative), "Failing: isNonNegative");

	test.isFalse(Match.test(1.1, Match.isPositiveInteger), "Failing: isPositiveInteger");
	test.isFalse(Match.test(-1.1, Match.isNegativeInteger), "Failing: isNegativeInteger");
	test.isFalse(Match.test(0.1, Match.isNonPositiveInteger), "Failing: isNonPositiveInteger");
	test.isFalse(Match.test(-1.1, Match.isNonPositiveInteger), "Failing: isNonPositiveInteger");
	test.isFalse(Match.test(1.1, Match.isNonNegativeInteger), "Failing: isNonNegativeInteger");
	test.isFalse(Match.test(0.1, Match.isNonNegativeInteger), "Failing: isNonNegativeInteger");
});