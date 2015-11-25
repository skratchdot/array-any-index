# array-any-index

[![NPM version](https://badge.fury.io/js/array-any-index.svg)](http://badge.fury.io/js/array-any-index)
[![Build Status](https://travis-ci.org/skratchdot/array-any-index.png?branch=master)](https://travis-ci.org/skratchdot/array-any-index)
[![Code Climate](https://codeclimate.com/github/skratchdot/array-any-index.png)](https://codeclimate.com/github/skratchdot/array-any-index)
[![Coverage Status](https://coveralls.io/repos/skratchdot/array-any-index/badge.svg?branch=master&service=github)](https://coveralls.io/github/skratchdot/array-any-index?branch=master)
[![Dependency Status](https://david-dm.org/skratchdot/array-any-index.svg)](https://david-dm.org/skratchdot/array-any-index)
[![devDependency Status](https://david-dm.org/skratchdot/array-any-index/dev-status.svg)](https://david-dm.org/skratchdot/array-any-index#info=devDependencies)

[![NPM](https://nodei.co/npm/array-any-index.png)](https://npmjs.org/package/array-any-index)


## Description

This module allows you to get values from an array using any index.  This means
that you can pass in a negative index or a float value.  If float values are
passed in, then interpolation will be used to calculate the value. If a negative
index is passed in, then we travel backwards through the array to get a value.
If an index that is larger than the array is passed in, we "loop" back through
the array to get the value.

See [Getting Started](#getting-started) below for usage instructions or
[d3-interpolate](https://github.com/d3/d3-interpolate) for information on how
we calculate float indexes.


## Getting Started

Install the module with: `npm install array-any-index`

```javascript
var arrayGet = require('array-any-index');
var arr = [0, 1, 2, 3, 4, 5];
arrayGet(arr, 2); // result: 2
arrayGet(arr, 2.5); // result: 2.5
arrayGet(arr, -2); // result: 4
arrayGet(['red', 'blue'], 0.5); // result: '#080080'
```

- [Live example on Tonic](https://tonicdev.com/npm/array-any-index)


## See Also

- [array-jumper](https://www.npmjs.com/package/array-jumper)
- [negative-array](https://www.npmjs.com/package/negative-array)


## License

Copyright (c) 2015 skratchdot  
Licensed under the MIT license.
