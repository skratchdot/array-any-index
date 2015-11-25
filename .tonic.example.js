var arrayGet = require('array-any-index');
var arr = [1, 2, 3, 4, 5];
var r1 = arrayGet(arr, -1); // result: 5
var r2 = arrayGet(arr, 0); // result: 1
var r3 = arrayGet(arr, 0.5); // result: 1.5
var r4 = arrayGet(['red', 'blue'], 0.5); // result: '#080080'
console.log(r1, r2, r3, r4);
