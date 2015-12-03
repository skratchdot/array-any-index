'use strict';
var expect = require('chai').expect;
var arrayGet = require('./index.js');
var arr;

describe('array-any-index', function () {
	beforeEach(function () {
		arr = [1, 2, 3, 4, 5];
	});
	it('should throw when an array isn\'t passed', function () {
		expect(function () {
			arrayGet({}, 0);
		}).to.throw(Error);
		expect(function () {
			arrayGet('', 0);
		}).to.throw(Error);
		expect(function () {
			arrayGet(null, 0);
		}).to.throw(Error);
		expect(function () {
			arrayGet(undefined, 0);
		}).to.throw(Error);
	});
	it('should throw when an the array length is zero', function () {
		expect(function () {
			arrayGet([], 0);
		}).to.throw(Error);
	});
	it('should throw when index is not finite', function () {
		expect(function () {
			arrayGet(arr, null);
		}).to.throw(Error);
		expect(function () {
			arrayGet(arr, '');
		}).to.throw(Error);
		expect(function () {
			arrayGet(arr, -Infinity);
		}).to.throw(Error);
		expect(function () {
			arrayGet(arr, Infinity);
		}).to.throw(Error);
		expect(function () {
			arrayGet(arr, NaN);
		}).to.throw(Error);
		expect(function () {
			arrayGet(arr, undefined);
		}).to.throw(Error);
	});
	it('should return the correct values for positive integers', function () {
		expect(arrayGet(arr, 0)).to.equal(1);
		expect(arrayGet(arr, 1)).to.equal(2);
		expect(arrayGet(arr, 2)).to.equal(3);
		expect(arrayGet(arr, 3)).to.equal(4);
		expect(arrayGet(arr, 4)).to.equal(5);
		expect(arrayGet(arr, 5)).to.equal(1);
		expect(arrayGet(arr, 10)).to.equal(1);
		expect(arrayGet(arr, 11)).to.equal(2);
	});
	it('should return the correct values for negative integers', function () {
		expect(arrayGet(arr, -0)).to.equal(1);
		expect(arrayGet(arr, -1)).to.equal(5);
		expect(arrayGet(arr, -2)).to.equal(4);
		expect(arrayGet(arr, -3)).to.equal(3);
		expect(arrayGet(arr, -4)).to.equal(2);
		expect(arrayGet(arr, -5)).to.equal(1);
		expect(arrayGet(arr, -10)).to.equal(1);
		expect(arrayGet(arr, -11)).to.equal(5);
	});
	it('should always return the same value for arrays of length 1', function () {
		var randInt = Math.floor(Math.random() * 1000000);
		arr = [randInt];
		for (var i = -100; i < 100; i = i + 0.1) {
			expect(arrayGet(arr, i)).to.equal(randInt);
		}
	});
	it('should work for fractional indexes', function () {
		expect(arrayGet(arr, 0.5)).to.equal(1.5);
		expect(arrayGet(arr, 1.5)).to.equal(2.5);
		expect(arrayGet(arr, 2.5)).to.equal(3.5);
		expect(arrayGet(arr, 3.5)).to.equal(4.5);
		expect(arrayGet(arr, 4.5)).to.equal(3);
		expect(arrayGet(arr, 5.5)).to.equal(1.5);
		expect(arrayGet(arr, 6.5)).to.equal(2.5);
		expect(arrayGet([-1, 0, 1], -2.3)).to.be.closeTo(-0.3, 0.000001);
		expect(arrayGet([-1, 0, 1], 0.3)).to.equal(-0.7);
		expect(arrayGet([-1, 0, 1], 1.3)).to.be.closeTo(0.3, 0.000001);
	});
	it('should use d3 interpolate', function () {
		arr = ['red', 'green', 'blue', { a: 0 }, { a: 10 }];
		expect(arrayGet(arr, .5)).to.equal('#804000');
		expect(arrayGet(arr, 1.5)).to.equal('#004080');
		expect(function () {
			arrayGet(arr, 2.5);
		}).to.throw(Error);
		expect(arrayGet(arr, 3.5)).to.deep.equal({ a: 5 });
		for (var i = 0; i < arr.length; i++) {
			expect(arrayGet(arr, i)).to.equal(arr[i]);
		}
	});
	it('should work for Float32Array types', function () {
		arr = new Float32Array(arr);
		expect(arrayGet(arr, 0.5)).to.equal(1.5);
		expect(arrayGet(arr, 1.5)).to.equal(2.5);
		expect(arrayGet(arr, 2.5)).to.equal(3.5);
	});
});
