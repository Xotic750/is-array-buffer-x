/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2015-2017",
  "date": "2019-08-27T21:05:27.262Z",
  "describe": "",
  "description": "Detect whether or not an object is an ArrayBuffer.",
  "file": "is-array-buffer-x.js",
  "hash": "544cfd52970475c33659",
  "license": "MIT",
  "version": "2.1.1"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["isArrayBufferX"] = factory();
	else
		root["isArrayBufferX"] = factory();
})((function () {
  'use strict';

  var ObjectCtr = {}.constructor;
  var objectPrototype = ObjectCtr.prototype;
  var defineProperty = ObjectCtr.defineProperty;
  var $globalThis;
  var getGlobalFallback = function() {
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    return void 0;
  };

  var returnThis = function() {
    return this;
  };

  try {
    if (defineProperty) {
      defineProperty(objectPrototype, '$$globalThis$$', {
        get: returnThis,
        configurable: true
      });
    } else {
      objectPrototype.__defineGetter__('$$globalThis$$', returnThis);
    }

    $globalThis = typeof $$globalThis$$ === 'undefined' ? getGlobalFallback() : $$globalThis$$;

    delete objectPrototype.$$globalThis$$;

    return $globalThis;
  } catch (error) {
    return getGlobalFallback();
  }
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(3)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(5);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/is-primitive-x/dist/is-primitive-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Returns true if the value is a primitive.
 *
 * @param {*} [val] - The value to test.
 * @returns {boolean} True if a primitive, otherwise false..
 */
var isPrimitive = function isPrimitive(val) {
  return _typeof(val) === 'object' ? val === null : typeof val !== 'function';
};

/* harmony default export */ var is_primitive_x_esm = (isPrimitive);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(1);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_esm_string = 'a';
var boxedString = {}.constructor(has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === has_boxed_string_x_esm_string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// CONCATENATED MODULE: ./node_modules/noop-x/dist/noop-x.esm.js
/**
 * This method returns undefined.
 *
 * @returns {undefined} Always undefined.
 */
var noop = function noop() {};
/* eslint-disable-line lodash/prefer-noop */


/* harmony default export */ var noop_x_esm = (noop);


// CONCATENATED MODULE: ./node_modules/has-working-bind-x/dist/has-working-bind-x.esm.js

var has_working_bind_x_esm_bind = noop_x_esm.bind;

var test1 = function test1() {
  var a1 = null;
  var a2 = null;
  var context = null;
  var testThis = [];

  var test1Fn = function test1Fn(arg1, arg2) {
    /* eslint-disable-next-line babel/no-invalid-this */
    context = this;
    a1 = arg1;
    a2 = arg2;
    /* eslint-disable-next-line prefer-rest-params */

    return arguments;
  };

  try {
    var boundFn = has_working_bind_x_esm_bind.apply(test1Fn, [testThis, 1]);
    var args = boundFn(2);
    return boundFn.length === 1 && args.length === 2 && a1 === 1 && a2 === 2 && context === testThis;
  } catch (e) {
    return false;
  }
};

var test2 = function test2() {
  var a1 = null;
  var a2 = null;
  var context = null;
  var oracle = [1, 2, 3];

  var Ctr = function Ctr(arg1, arg2) {
    a1 = arg1;
    a2 = arg2;
    context = this;
    return oracle;
  };

  try {
    var BoundFn = has_working_bind_x_esm_bind.apply(Ctr, [null]);
    var returned = new BoundFn(1, 2);
    return BoundFn.length === Ctr.length && returned === oracle && a1 === 1 && a2 === 2 && context !== oracle;
  } catch (e) {
    return false;
  }
};
/**
 * Indicates if the engine has a working bind function.
 *
 * @type {boolean}
 */


var isWorking = typeof has_working_bind_x_esm_bind === 'function' && test1() && test2();
/* harmony default export */ var has_working_bind_x_esm = (isWorking);


// CONCATENATED MODULE: ./node_modules/util-pusher-x/dist/util-pusher-x.esm.js




var EMPTY_STRING = '';
var split = EMPTY_STRING.split;
var util_pusher_x_esm_max = Math.max;
var util_pusher_x_esm_bind = is_primitive_x_esm.bind,
    util_pusher_x_esm_call = is_primitive_x_esm.call;
var stringSplit = function stringSplit(string, pattern) {
  // noinspection JSUnresolvedFunction
  return split.call(string, pattern);
};
var $split = has_working_bind_x_esm ? util_pusher_x_esm_bind.call(util_pusher_x_esm_call, split) : stringSplit;
var util_pusher_x_esm_getIterable = function getIterable(arrayLike) {
  // noinspection JSUnresolvedFunction
  return is_string_default()(arrayLike) ? $split(arrayLike, EMPTY_STRING) : arrayLike;
}; // eslint-disable jsdoc/no-undefined-types
// noinspection JSCommentMatchesSignature

/**
 * This pushes or concatenates into a new or existing array.
 *
 * @param {Array} arrayLike - The source.
 * @param {number} [from=0] - The from source index.
 * @param {Array} [target=[]] - The target array.
 * @returns {*} The target array.
 */
// eslint-enable jsdoc/no-undefined-types

var util_pusher_x_esm_pusher = function pusher(arrayLike, from) {
  /* eslint-disable-next-line prefer-rest-params */
  var target = arguments.length > 2 ? arguments[2] : [];

  if (typeof arrayLike !== 'string' && is_primitive_x_esm(arrayLike)) {
    return target;
  }

  var iterable = has_boxed_string_x_esm ? arrayLike : util_pusher_x_esm_getIterable(arrayLike);
  var length = iterable.length;

  for (var i = util_pusher_x_esm_max(0, from) || 0; i < length; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
};

/* harmony default export */ var util_pusher_x_esm = (util_pusher_x_esm_pusher);


// CONCATENATED MODULE: ./node_modules/simple-bind-x/dist/simple-bind-x.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var nativeBind = util_pusher_x_esm.bind,
    simple_bind_x_esm_call = util_pusher_x_esm.call;
var ERROR_MESSAGE = 'bind called on incompatible ';
var simple_bind_x_esm_object = {};
var ObjectCtr = simple_bind_x_esm_object.constructor;
var toStringTag = simple_bind_x_esm_object.toString;
var funcType = '[object Function]';
var ZERO = 0;
var argsOffset = 2;

var getMax = function getMax(a, b) {
  return a >= b ? a : b;
};

var simple_bind_x_esm_assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && toStringTag.apply(value) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + value);
  }
};

var boundFns = [function zero(binder) {
  return function boundFn() {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments));
  };
}, function one(binder, boundLength) {
  return function boundFn(a) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a]));
  };
}, function two(binder, boundLength) {
  return function boundFn(a, b) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b]));
  };
}, function three(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c]));
  };
}, function four(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d]));
  };
}, function five(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e]));
  };
}, function six(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f]));
  };
}, function seven(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f, g) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f, g]));
  };
}, function eight(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f, g, h) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f, g, h]));
  };
}];

var getBoundFn = function getBoundFn(args) {
  var _args = _slicedToArray(args, 3),
      binder = _args[0],
      target = _args[1],
      bindArgs = _args[2];

  var boundLength = getMax(ZERO, target.length - getMax(ZERO, bindArgs.length - argsOffset));
  var fn = boundFns[boundLength];
  var boundFn = fn ? fn(binder, boundLength) : boundFns[ZERO](binder);

  if (target.prototype) {
    /* eslint-disable-next-line lodash/prefer-noop */
    var Empty = function Empty() {};

    Empty.prototype = target.prototype;
    boundFn.prototype = new Empty();
    Empty.prototype = null;
  }

  return boundFn;
};

var simple_bind_x_esm_getResult = function getResult(target, boundArgs) {
  /* eslint-disable-next-line babel/no-invalid-this */
  var result = target.apply(this, boundArgs);
  /* eslint-disable-next-line babel/no-invalid-this,babel/new-cap */

  return ObjectCtr(result) === result ? result : this;
};

var implementation = function bind(target, thisArg) {
  simple_bind_x_esm_assertIsFunction(target);
  /* eslint-disable-next-line prefer-rest-params */

  var bindArgs = arguments;
  var bound;

  var binder = function binder() {
    /* eslint-disable-next-line prefer-rest-params */
    var boundArgs = util_pusher_x_esm(arguments, ZERO, util_pusher_x_esm(bindArgs, argsOffset));
    /* eslint-disable-next-line babel/no-invalid-this */

    return this instanceof bound ? simple_bind_x_esm_getResult.apply(this, [target, boundArgs]) : target.apply(thisArg, boundArgs);
  };

  bound = getBoundFn([binder, target, bindArgs]);
  return bound;
};
/**
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments
 * preceding any provided when the new function is called.
 *
 * @function bind
 * @param {Function} target - The target function.
 * @param {*} [thisArg] - The value to be passed as the this parameter to the target
 *  function when the bound function is called. The value is ignored if the
 *  bound function is constructed using the new operator.
 * @param {...*} [args] - Arguments to prepend to arguments provided to the bound
 *  function when invoking the target function.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The bound function.
 */

var $bind = has_working_bind_x_esm ? simple_bind_x_esm_call.bind(nativeBind) : implementation;
/* harmony default export */ var simple_bind_x_esm = ($bind);


// CONCATENATED MODULE: ./node_modules/simple-call-x/dist/simple-call-x.esm.js


var $TypeError = TypeError;
var nativeApply = simple_bind_x_esm.apply,
    nativeCall = simple_bind_x_esm.call;
var $apply = simple_bind_x_esm(nativeCall, nativeApply);
var simple_call_x_esm_toStringTag = simple_bind_x_esm(nativeApply, {}.toString);
var simple_call_x_esm_ERROR_MESSAGE = ' is not a function';
var simple_call_x_esm_funcType = '[object Function]';

var simple_call_x_esm_assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && simple_call_x_esm_toStringTag(value) !== simple_call_x_esm_funcType) {
    throw new $TypeError(value + simple_call_x_esm_ERROR_MESSAGE);
  }

  return value;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The abstract operation Call is used to call the [[Call]] internal method of a function object.
 *
 * @function call
 * @param {Function} F - The target function.
 * @param {*} [V] - The context.
 * @param {Array} [args] - Argument to call the function with.
 * @throws {TypeError} If target is not a function.
 * @returns {*} The the result of invoking the function.
 * @see https://www.ecma-international.org/ecma-262/6.0/#sec-call
 */
// eslint-enable jsdoc/check-param-names


var simple_call_x_esm_call = function call(F, V) {
  /* eslint-disable-next-line prefer-rest-params */
  return $apply(simple_call_x_esm_assertIsFunction(F), V, util_pusher_x_esm(arguments[2]));
};

/* harmony default export */ var simple_call_x_esm = (simple_call_x_esm_call);


// CONCATENATED MODULE: ./node_modules/attempt-x/dist/attempt-x.esm.js

 // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @function attempt
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
// eslint-disable jsdoc/check-param-names

var attempt_x_esm_attempt = function attempt(fn) {
  try {
    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
      value: simple_call_x_esm(fn, this, util_pusher_x_esm(arguments, 1))
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};

/* harmony default export */ var attempt_x_esm = (attempt_x_esm_attempt);


// CONCATENATED MODULE: ./node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
var toBoolean = function toBoolean(value) {
  return !!value;
};

/* harmony default export */ var to_boolean_x_esm = (toBoolean);


// CONCATENATED MODULE: ./node_modules/simple-methodize-x/dist/simple-methodize-x.esm.js


var simple_methodize_x_esm_toStringTag = {}.toString;
var simple_methodize_x_esm_ERROR_MESSAGE = 'methodize called on incompatible ';
var simple_methodize_x_esm_funcType = '[object Function]';

var simple_methodize_x_esm_assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && simple_call_x_esm(simple_methodize_x_esm_toStringTag, value) !== simple_methodize_x_esm_funcType) {
    throw new TypeError(simple_methodize_x_esm_ERROR_MESSAGE + value);
  }

  return value;
};
/**
 * Methodize a prototype method. Compliant to 8 arguments.
 *
 * @param {Function} prototypeMethod - The prototype method to methodize.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The static method.
 */


var simple_methodize_x_esm_methodize = function methodize(prototypeMethod) {
  simple_methodize_x_esm_assertIsFunction(prototypeMethod);
  return function methodized() {
    /* eslint-disable-next-line prefer-rest-params */
    return simple_call_x_esm(prototypeMethod, arguments[0], util_pusher_x_esm(arguments, 1));
  };
};

/* harmony default export */ var simple_methodize_x_esm = (simple_methodize_x_esm_methodize);


// CONCATENATED MODULE: ./node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js

var methodizedToString = simple_methodize_x_esm({}.toString);
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

var to_string_tag_x_esm_toStringTag = function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return methodizedToString(value);
};

/* harmony default export */ var to_string_tag_x_esm = (to_string_tag_x_esm_toStringTag);


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var _this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt_x_esm(function () {
  _newArrowCheck(this, _this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// CONCATENATED MODULE: ./node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
var isNil = function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
};

/* harmony default export */ var is_nil_x_esm = (isNil);


// CONCATENATED MODULE: ./node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

var require_object_coercible_x_esm_requireObjectCoercible = function requireObjectCoercible(value) {
  if (is_nil_x_esm(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
};

/* harmony default export */ var require_object_coercible_x_esm = (require_object_coercible_x_esm_requireObjectCoercible);


// CONCATENATED MODULE: ./node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

var to_string_x_esm_ToString = function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_esm_ERROR_MESSAGE);
  }

  return castString(value);
};

/* harmony default export */ var to_string_x_esm = (to_string_x_esm_ToString);


// CONCATENATED MODULE: ./node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var require_coercible_to_string_x_esm_requireCoercibleToString = function requireCoercibleToString(value) {
  return to_string_x_esm(require_object_coercible_x_esm(value));
};

/* harmony default export */ var require_coercible_to_string_x_esm = (require_coercible_to_string_x_esm_requireCoercibleToString);


// CONCATENATED MODULE: ./node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/trim-left-x/dist/trim-left-x.esm.js



var trim_left_x_esm_EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var methodizedReplace = simple_methodize_x_esm(trim_left_x_esm_EMPTY_STRING.replace);
/**
 * This method removes whitespace from the start of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

var trim_left_x_esm_trimStart = function trimStart(string) {
  return methodizedReplace(require_coercible_to_string_x_esm(string), reLeft, trim_left_x_esm_EMPTY_STRING);
};

/* harmony default export */ var trim_left_x_esm = (trim_left_x_esm_trimStart);


// CONCATENATED MODULE: ./node_modules/trim-right-x/dist/trim-right-x.esm.js



var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_methodizedReplace = simple_methodize_x_esm(trim_right_x_esm_EMPTY_STRING.replace);
/**
 * This method removes whitespace from the end of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var trim_right_x_esm_trimEnd = function trimEnd(string) {
  return trim_right_x_esm_methodizedReplace(require_coercible_to_string_x_esm(string), reRight, trim_right_x_esm_EMPTY_STRING);
};

/* harmony default export */ var trim_right_x_esm = (trim_right_x_esm_trimEnd);


// CONCATENATED MODULE: ./node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the start and end of a string.
 * (ES2019).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

var trim_x_esm_trim = function trim(string) {
  return trim_left_x_esm(trim_right_x_esm(string));
};

/* harmony default export */ var trim_x_esm = (trim_x_esm_trim);


// CONCATENATED MODULE: ./node_modules/normalize-space-x/dist/normalize-space-x.esm.js



var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_methodizedReplace = simple_methodize_x_esm(SPACE.replace);
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalize_space_x_esm_normalizeSpace = function normalizeSpace(string) {
  return normalize_space_x_esm_methodizedReplace(trim_x_esm(string), reNormalize, SPACE);
};

/* harmony default export */ var normalize_space_x_esm = (normalize_space_x_esm_normalizeSpace);


// CONCATENATED MODULE: ./node_modules/replace-comments-x/dist/replace-comments-x.esm.js



var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_methodizedReplace = simple_methodize_x_esm(replace_comments_x_esm_EMPTY_STRING.replace);
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

var replace_comments_x_esm_replaceComments = function replaceComments(string, replacement) {
  return replace_comments_x_esm_methodizedReplace(require_coercible_to_string_x_esm(string), STRIP_COMMENTS, arguments.length > 1 ? to_string_x_esm(replacement) : replace_comments_x_esm_EMPTY_STRING);
};

/* harmony default export */ var replace_comments_x_esm = (replace_comments_x_esm_replaceComments);


// CONCATENATED MODULE: ./node_modules/is-function-x/dist/is-function-x.esm.js








var FunctionCtr = attempt_x_esm.constructor;
var is_function_x_esm_SPACE = ' ';
var methodizedFunctionToString = simple_methodize_x_esm(attempt_x_esm.toString);
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var methodizedTest = simple_methodize_x_esm(ctrRx.test);
var hasNativeClass = attempt_x_esm(function attemptee() {
  /* eslint-disable-next-line babel/new-cap */
  return FunctionCtr('"use strict"; return class My {};')();
}).threw === false;

var is_function_x_esm_testClassString = function testClassString(value) {
  return methodizedTest(ctrRx, normalize_space_x_esm(replace_comments_x_esm(methodizedFunctionToString(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_esm(is_function_x_esm_testClassString, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm(function attemptee() {
    return methodizedFunctionToString(value);
  }).threw === false;
};

var is_function_x_esm_compareTags = function compareTags(value) {
  var strTag = to_string_tag_x_esm(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_isFunction = function isFunction(value, allowClass) {
  if (is_primitive_x_esm(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, to_boolean_x_esm(allowClass));
  }

  if (hasNativeClass && to_boolean_x_esm(allowClass) === false && isES6ClassFn(value)) {
    return false;
  }

  return is_function_x_esm_compareTags(value);
};

/* harmony default export */ var is_function_x_esm = (is_function_x_esm_isFunction);


// CONCATENATED MODULE: ./node_modules/is-object-like-x/dist/is-object-like-x.esm.js


/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */

var is_object_like_x_esm_isObjectLike = function isObjectLike(value) {
  return is_primitive_x_esm(value) === false && is_function_x_esm(value, true) === false;
};

/* harmony default export */ var is_object_like_x_esm = (is_object_like_x_esm_isObjectLike);


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

var to_object_x_esm_toObject = function toObject(value) {
  return castObject(require_object_coercible_x_esm(value));
};

/* harmony default export */ var to_object_x_esm = (to_object_x_esm_toObject);


// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(2);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/to-primitive-x/dist/to-primitive-x.esm.js








var to_primitive_x_esm_ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void to_primitive_x_esm_ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
var StringCtr = STRING.constructor;
var NumberCtr = to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var assertHint = function assertHint(hint) {
  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  return hint;
};
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_ordinaryToPrimitive = function ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_esm(ordinary);
  assertHint(hint);
  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;

  for (var i = to_primitive_x_esm_ZERO; i < orderLength; i += ONE) {
    var method = ordinary[methodNames[i]];

    if (is_function_x_esm(method)) {
      var result = simple_call_x_esm(method, ordinary);

      if (is_primitive_x_esm(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var to_primitive_x_esm_getMethod = function getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_esm(func) === false) {
    if (is_function_x_esm(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return to_primitive_x_esm_getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};

var to_primitive_x_esm_evalExotic = function evalExotic(obj) {
  var exoticToPrim = obj.exoticToPrim,
      input = obj.input,
      hint = obj.hint;
  var result = simple_call_x_esm(exoticToPrim, input, [hint]);

  if (is_primitive_x_esm(result)) {
    return result;
  }

  throw new TypeError('unable to convert exotic object to primitive');
};

var to_primitive_x_esm_evalPrimitive = function evalPrimitive(input, hint) {
  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return to_primitive_x_esm_ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {Function} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


var to_primitive_x_esm_toPrimitive = function toPrimitive(input, preferredType) {
  if (is_primitive_x_esm(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);
  return typeof exoticToPrim === 'undefined' ? to_primitive_x_esm_evalPrimitive(input, hint) : to_primitive_x_esm_evalExotic({
    exoticToPrim: exoticToPrim,
    input: input,
    hint: hint
  });
};

/* harmony default export */ var to_primitive_x_esm = (to_primitive_x_esm_toPrimitive);


// CONCATENATED MODULE: ./node_modules/to-property-key-x/dist/to-property-key-x.esm.js
function to_property_key_x_esm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { to_property_key_x_esm_typeof = function _typeof(obj) { return typeof obj; }; } else { to_property_key_x_esm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return to_property_key_x_esm_typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 */

var to_property_key_x_esm_toPropertyKey = function toPropertyKey(argument) {
  var key = to_primitive_x_esm(argument, String);
  return has_symbol_support_x_esm && to_property_key_x_esm_typeof(key) === 'symbol' ? key : to_string_x_esm(key);
};

/* harmony default export */ var to_property_key_x_esm = (to_property_key_x_esm_toPropertyKey);


// CONCATENATED MODULE: ./node_modules/has-own-property-x/dist/has-own-property-x.esm.js



var hop = simple_methodize_x_esm({}.hasOwnProperty);
/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|number|symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 */

var has_own_property_x_esm_hasOwnProperty = function hasOwnProperty(object, property) {
  return hop(to_object_x_esm(object), to_property_key_x_esm(property));
};

/* harmony default export */ var has_own_property_x_esm = (has_own_property_x_esm_hasOwnProperty);


// CONCATENATED MODULE: ./node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var pToString = has_symbol_support_x_esm && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

var toStringSymbolsSupported = function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : to_string_symbols_supported_x_esm_castString(value);
};

/* harmony default export */ var to_string_symbols_supported_x_esm = (toStringSymbolsSupported);


// CONCATENATED MODULE: ./node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
var constantNAN = 0 / 0;
/* harmony default export */ var nan_x_esm = (constantNAN);


// CONCATENATED MODULE: ./node_modules/parse-int-x/dist/parse-int-x.esm.js




var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor;
var BAD_CHAR = "\u180E";
var methodizedCharAt = simple_methodize_x_esm(BAD_CHAR.charAt);
var hexRegex = /^[-+]?0[xX]/;
var parse_int_x_esm_methodizedTest = simple_methodize_x_esm(hexRegex.test);
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2019).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

var parse_int_x_esm_$parseInt = function $parseInt(string, radix) {
  var str = trim_left_x_esm(to_string_x_esm(string));

  if (methodizedCharAt(str, 0) === BAD_CHAR) {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_methodizedTest(hexRegex, str) ? 16 : 10));
};

/* harmony default export */ var parse_int_x_esm = (parse_int_x_esm_$parseInt);


// CONCATENATED MODULE: ./node_modules/to-number-x/dist/to-number-x.esm.js






var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
var to_number_x_esm_castNumber = testCharsCount.constructor;
var methodizedStringSlice = simple_methodize_x_esm(to_number_x_esm_ERROR_MESSAGE.slice);
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_methodizedTest = simple_methodize_x_esm(binaryRegex.test);

var isBinary = function isBinary(value) {
  return to_number_x_esm_methodizedTest(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function isOctal(value) {
  return to_number_x_esm_methodizedTest(octalRegex, value);
};

var nonWSregex = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS = function hasNonWS(value) {
  return to_number_x_esm_methodizedTest(nonWSregex, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function isInvalidHexLiteral(value) {
  return to_number_x_esm_methodizedTest(invalidHexLiteral, value);
};

var to_number_x_esm_assertNotSymbol = function assertNotSymbol(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  return value;
};

var to_number_x_esm_parseBase = function parseBase(value, radix) {
  return parse_int_x_esm(methodizedStringSlice(value, testCharsCount), radix);
};

var parseString = function parseString(toNum, value) {
  if (isBinary(value)) {
    return toNum(to_number_x_esm_parseBase(value, binaryRadix));
  }

  if (isOctal(value)) {
    return toNum(to_number_x_esm_parseBase(value, octalRadix));
  }

  return null;
};

var to_number_x_esm_convertString = function convertString(toNum, value) {
  var val = parseString(toNum, value);

  if (val !== null) {
    return val;
  }

  if (hasNonWS(value) || isInvalidHexLiteral(value)) {
    return nan_x_esm;
  }

  var trimmed = trim_x_esm(value);

  if (trimmed !== value) {
    return toNum(trimmed);
  }

  return null;
};
/**
 * This method converts argument to a value of type Number. (ES2019).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


var to_number_x_esm_toNumber = function toNumber(argument) {
  var value = to_number_x_esm_assertNotSymbol(to_primitive_x_esm(argument, to_number_x_esm_castNumber));

  if (typeof value === 'string') {
    var val = to_number_x_esm_convertString(toNumber, value);

    if (val !== null) {
      return val;
    }
  }

  return to_number_x_esm_castNumber(value);
};

/* harmony default export */ var to_number_x_esm = (to_number_x_esm_toNumber);


// CONCATENATED MODULE: ./node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
var is_nan_x_esm_isNaN = function isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

/* harmony default export */ var is_nan_x_esm = (is_nan_x_esm_isNaN);


// CONCATENATED MODULE: ./node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
var constantInfinity = 1 / 0;
/* harmony default export */ var infinity_x_esm = (constantInfinity);


// CONCATENATED MODULE: ./node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

var is_finite_x_esm_isFinite = function isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
};

/* harmony default export */ var is_finite_x_esm = (is_finite_x_esm_isFinite);


// CONCATENATED MODULE: ./node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2019).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

var math_sign_x_esm_sign = function sign(x) {
  var n = to_number_x_esm(x);

  if (n === 0 || is_nan_x_esm(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

/* harmony default export */ var math_sign_x_esm = (math_sign_x_esm_sign);


// CONCATENATED MODULE: ./node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2019).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

var to_integer_x_esm_toInteger = function toInteger(value) {
  var number = to_number_x_esm(value);

  if (is_nan_x_esm(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm(number) === false) {
    return number;
  }

  return math_sign_x_esm(number) * floor(abs(number));
};

/* harmony default export */ var to_integer_x_esm = (to_integer_x_esm_toInteger);


// CONCATENATED MODULE: ./node_modules/math-clamp-x/dist/math-clamp-x.esm.js


var math_clamp_x_esm_getMaxMin = function getMaxMin(args) {
  var minVal = to_number_x_esm(args[1]);
  var result = args.length < 3 ? {
    max: minVal,
    min: 0
  } : {
    max: to_number_x_esm(args[2]),
    min: minVal
  };

  if (result.min > result.max) {
    throw new RangeError('"min" must be less than "max"');
  }

  return result;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @returns {number} The clamped number.
 */
// eslint-enable jsdoc/check-param-names


var math_clamp_x_esm_clamp = function clamp(value) {
  var number = to_number_x_esm(value);

  if (arguments.length < 2) {
    return number;
  }
  /* eslint-disable-next-line prefer-rest-params */


  var _getMaxMin = math_clamp_x_esm_getMaxMin(arguments),
      max = _getMaxMin.max,
      min = _getMaxMin.min;

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};

/* harmony default export */ var math_clamp_x_esm = (math_clamp_x_esm_clamp);


// CONCATENATED MODULE: ./node_modules/is-index-x/dist/is-index-x.esm.js




var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;
/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 */

var is_index_x_esm_isIndex = function isIndex(value, length) {
  var string = to_string_symbols_supported_x_esm(value);

  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = to_number_x_esm(string);

  if (arguments.length > 1) {
    return number < math_clamp_x_esm(to_integer_x_esm(length), MAX_SAFE_INTEGER);
  }

  return number < MAX_SAFE_INTEGER;
};

/* harmony default export */ var is_index_x_esm = (is_index_x_esm_isIndex);


// CONCATENATED MODULE: ./node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js



var propIsEnumerable = simple_methodize_x_esm({}.propertyIsEnumerable);
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

var property_is_enumerable_x_esm_propertyIsEnumerable = function propertyIsEnumerable(object, property) {
  return propIsEnumerable(to_object_x_esm(object), to_property_key_x_esm(property));
};

/* harmony default export */ var property_is_enumerable_x_esm = (property_is_enumerable_x_esm_propertyIsEnumerable);


// CONCATENATED MODULE: ./node_modules/object-get-own-property-descriptor-x/dist/object-get-own-property-descriptor-x.esm.js











var object_get_own_property_descriptor_x_esm_EMPTY_STRING = '';
var charAt = simple_methodize_x_esm(object_get_own_property_descriptor_x_esm_EMPTY_STRING.charAt);
var object_get_own_property_descriptor_x_esm_ObjectCtr = {}.constructor;
var ngopd = object_get_own_property_descriptor_x_esm_ObjectCtr.getOwnPropertyDescriptor;
var nativeGOPD = typeof ngopd === 'function' && ngopd;
var getOPDFallback1;
var getOPDFallback2; // ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var object_get_own_property_descriptor_x_esm_doesGOPDWork = function doesGOPDWork(object, prop) {
  object[to_property_key_x_esm(prop)] = 0;
  var testResult = attempt_x_esm(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
};

var prototypeOfObject = object_get_own_property_descriptor_x_esm_ObjectCtr.prototype; // If JS engine supports accessors creating shortcuts.

var supportsAccessors = has_own_property_x_esm(prototypeOfObject, '__defineGetter__');
/* eslint-disable-next-line no-underscore-dangle */

var lookupGetter = supportsAccessors && simple_methodize_x_esm(prototypeOfObject.__lookupGetter__);
/* eslint-disable-next-line no-underscore-dangle */

var lookupSetter = supportsAccessors && simple_methodize_x_esm(prototypeOfObject.__lookupSetter__);
var object_get_own_property_descriptor_x_esm_implementation = function getOwnPropertyDescriptor(object, property) {
  var obj = to_object_x_esm(object);
  var propKey = to_property_key_x_esm(property);
  var result; // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.

  if (getOPDFallback1) {
    result = attempt_x_esm(function attemptee() {
      return getOPDFallback1(to_object_x_esm(obj), propKey);
    });

    if (result.threw === false) {
      return result.value;
    } // try the shim if the real one doesn't work

  }

  var isStringIndex = is_string_default()(obj) && is_index_x_esm(propKey, obj.length);

  if (getOPDFallback2 && isStringIndex === false) {
    result = attempt_x_esm(function attemptee() {
      return getOPDFallback2(to_object_x_esm(obj), propKey);
    });

    if (result.threw === false) {
      return result.value;
    } // try the shim if the real one doesn't work

  }
  /* eslint-disable-next-line no-void */


  var descriptor = void 0; // If object does not owns property return undefined immediately.

  if (isStringIndex === false && has_own_property_x_esm(obj, propKey) === false) {
    return descriptor;
  } // If object has a property then it's for sure `configurable`, and
  // probably `enumerable`. Detect enumerability though.


  descriptor = {
    configurable: is_primitive_x_esm(object) === false && isStringIndex === false,
    enumerable: property_is_enumerable_x_esm(obj, propKey)
  }; // If JS engine supports accessor properties then property may be a
  // getter or setter.

  if (supportsAccessors) {
    // Unfortunately `__lookupGetter__` will return a getter even
    // if object has own non getter property along with a same named
    // inherited getter. To avoid misbehavior we temporary remove
    // `__proto__` so that `__lookupGetter__` will return getter only
    // if it's owned by an object.

    /* eslint-disable-next-line no-proto */
    var prototype = obj.__proto__;
    var notPrototypeOfObject = obj !== prototypeOfObject; // avoid recursion problem, breaking in Opera Mini when
    // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
    // or any other Object.prototype accessor

    if (notPrototypeOfObject) {
      /* eslint-disable-next-line no-proto */
      obj.__proto__ = prototypeOfObject;
    }

    var getter = lookupGetter(obj, propKey);
    var setter = lookupSetter(obj, propKey);

    if (notPrototypeOfObject) {
      // Once we have getter and setter we can put values back.

      /* eslint-disable-next-line no-proto */
      obj.__proto__ = prototype;
    }

    if (getter || setter) {
      if (getter) {
        descriptor.get = getter;
      }

      if (setter) {
        descriptor.set = setter;
      } // If it was accessor property we're done and return here
      // in order to avoid adding `value` to the descriptor.


      return descriptor;
    }
  } // If we got this far we know that object has an own property that is
  // not an accessor so we set it as a value and return descriptor.


  if (isStringIndex) {
    descriptor.value = charAt(obj, propKey);
    descriptor.writable = false;
  } else {
    descriptor.value = obj[propKey];
    descriptor.writable = true;
  }

  return descriptor;
};
/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 */

var $getOwnPropertyDescriptor; // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.

if (nativeGOPD) {
  var doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = doc ? object_get_own_property_descriptor_x_esm_doesGOPDWork(doc.createElement('div'), 'sentinel') : true;

  if (getOPDWorksOnDom) {
    var object_get_own_property_descriptor_x_esm_res = attempt_x_esm(nativeGOPD, to_object_x_esm('abc'), 1);
    var worksWithStr = object_get_own_property_descriptor_x_esm_res.threw === false && object_get_own_property_descriptor_x_esm_res.value && object_get_own_property_descriptor_x_esm_res.value.value === 'b';

    if (worksWithStr) {
      var getOPDWorksOnObject = object_get_own_property_descriptor_x_esm_doesGOPDWork({}, 'sentinel');

      if (getOPDWorksOnObject) {
        var worksWithPrim = attempt_x_esm(nativeGOPD, 42, 'name').threw === false;
        /* eslint-disable-next-line compat/compat */

        var worksWithObjSym = has_symbol_support_x_esm && object_get_own_property_descriptor_x_esm_doesGOPDWork({}, to_object_x_esm(Symbol(object_get_own_property_descriptor_x_esm_EMPTY_STRING)));

        if (worksWithObjSym) {
          if (worksWithPrim) {
            $getOwnPropertyDescriptor = nativeGOPD;
          } else {
            $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
              return nativeGOPD(to_object_x_esm(object), property);
            };
          }
        } else if (worksWithPrim) {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(object, to_property_key_x_esm(property));
          };
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(to_object_x_esm(object), to_property_key_x_esm(property));
          };
        }
      } else {
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (to_boolean_x_esm($getOwnPropertyDescriptor) === false || getOPDFallback1 || getOPDFallback2) {
  $getOwnPropertyDescriptor = object_get_own_property_descriptor_x_esm_implementation;
}

var gOPS = $getOwnPropertyDescriptor;
/* harmony default export */ var object_get_own_property_descriptor_x_esm = (gOPS);


// CONCATENATED MODULE: ./node_modules/util-get-getter-x/dist/util-get-getter-x.esm.js





var stubTrue = function stubTrue() {
  return true;
};
/**
 * @param {Function|!object} creator - A creator function or a created object.
 * @returns {!object} - An attempt object.
 */


var util_get_getter_x_esm_getResult = function getResult(creator) {
  return typeof creator === 'function' ? attempt_x_esm(creator) : {
    threw: false,
    value: creator
  };
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * @param {!object} descriptor - A descriptor object.
 * @param {!object} context - A created object.
 * @param {Function} [validator] - A function to validate the result.
 * @returns {Function|null} - The getter function or null.
 */
// eslint-enable jsdoc/check-param-names


var util_get_getter_x_esm_getter = function getter(descriptor, context) {
  /* eslint-disable-next-line prefer-rest-params */
  var validator = typeof arguments[2] === 'function' ? arguments[2] : stubTrue;
  var res = attempt_x_esm(function attemptee() {
    return simple_call_x_esm(descriptor.get, context);
  });
  return res.threw === false && validator(res.value) ? descriptor.get : null;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * Get a getter.
 *
 * @param {Function|!object} creator - A creator function or a created object.
 * @param {string} getterName - The getter name.
 * @param {Function} [validator] - A function to validate the result.
 * @returns {Function|null} The target.
 */
// eslint-enable jsdoc/check-param-names


var util_get_getter_x_esm_getGetter = function getGetter(creator, getterName) {
  var resTest1 = util_get_getter_x_esm_getResult(creator);

  if (resTest1.threw === false && is_object_like_x_esm(resTest1.value)) {
    var descriptor = object_get_own_property_descriptor_x_esm(resTest1.value.constructor.prototype, getterName);

    if (descriptor && typeof descriptor.get === 'function') {
      /* eslint-disable-next-line prefer-rest-params */
      return util_get_getter_x_esm_getter(descriptor, resTest1.value, arguments[2]);
    }
  }

  return null;
};

/* harmony default export */ var util_get_getter_x_esm = (util_get_getter_x_esm_getGetter);


// CONCATENATED MODULE: ./dist/is-array-buffer-x.esm.js







var hasABuf = typeof ArrayBuffer === 'function';
var aBufTag = '[object ArrayBuffer]';

var is_array_buffer_x_esm_validator = function validator(value) {
  return typeof value === 'number';
};

var is_array_buffer_x_esm_creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new ArrayBuffer(4);
};

var byteLength = hasABuf && has_to_string_tag_x_esm ? util_get_getter_x_esm(is_array_buffer_x_esm_creator, 'byteLength', is_array_buffer_x_esm_validator) : null;
/**
 * Determine if an `object` is an `ArrayBuffer`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is an `ArrayBuffer`,
 *  else false`.
 */

var is_array_buffer_x_esm_isArrayBuffer = function isArrayBuffer(object) {
  if (hasABuf === false || is_object_like_x_esm(object) === false) {
    return false;
  }

  if (to_boolean_x_esm(byteLength) === false) {
    return to_string_tag_x_esm(object) === aBufTag;
  }

  var result = attempt_x_esm(function attemptee() {
    return simple_call_x_esm(byteLength, object);
  });
  return result.threw === false && is_array_buffer_x_esm_validator(result.value);
};

/* harmony default export */ var is_array_buffer_x_esm = __webpack_exports__["default"] = (is_array_buffer_x_esm_isArrayBuffer);



/***/ })
/******/ ]);
});
//# sourceMappingURL=is-array-buffer-x.js.map