'use strict';

var getType = require('get-object-type');
var value = require('d3-interpolate').value;

/**
 * [exports description]
 * @param  {Array} arr		The source array
 * @param  {Number} index	The index to get an interpolated value from. Negative
 *                        and floats are accepted.
 * @return {any}					If the index is an integer, we return the item in the
 *                      	array. If the index is a negative integer, we travel
 *                      	back through the array to get a value. If the index
 *                      	is a float, we use linear interpolation to find an
 *                      	acceptable value.
 */
var arrayAnyIndex = function (arr, index) {
	var abs;
	var pos;
	var lo;
	var hi;
	var fractional;
	if (getType(arr).toLowerCase().indexOf('array') === -1) {
		throw new Error('A valid array must be used.');
	}
	if (arr.length === 0) {
		throw new Error('The array length must be positive.');
	}
	if (!Number.isFinite(index)) {
		throw new Error('The index must be a finite number.');
	}
	abs = Math.abs(index);
	pos = abs % arr.length;
	fractional = abs % 1;
	if (fractional === 0) {
		if (index < 0 && pos > 0) {
			pos = arr.length - pos;
		}
		return arr[pos];
	} else {
		lo = arrayAnyIndex(arr, Math.floor(index));
		hi = arrayAnyIndex(arr, Math.ceil(index));
		return value(lo, hi)(index < 0 ? 1 - fractional : fractional);
	}
};

module.exports = exports = arrayAnyIndex;
