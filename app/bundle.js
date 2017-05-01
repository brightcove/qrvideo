(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var kxing = require('kxing');
window.kxing = kxing;

var canvas = document.createElement('canvas');
var ctx;
var video = document.querySelector('video');

if (video.readyState > 1) {
  init();
} else {
  video.addEventListener('loadedmetadata', init);
}

function init() {
  var vidComputedStyle = getComputedStyle(video);

  canvas.width = parseInt(vidComputedStyle.width, 10);
  canvas.height = parseInt(vidComputedStyle.height, 10);

  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  window.ctx = ctx;

  video.addEventListener('canplay', function testing() {
    video.play();
    testHarness();
    video.removeEventListener('canplay', testing);
  });
};

let i = 0;
function testHarness() {
  const result = test();

  console.log(result.text);

  if (!video.ended) {
    setTimeout(testHarness, 1000);
  }
}

function test() {
  ctx.drawImage(video, 0, 0);
  let result;
  try {
    result = kxing.KXing.getReader().decode(ctx.getImageData(0, 0, canvas.width, canvas.height));
  } catch (e) {
    console.log(e);
    result = {text: null};
  }

  return result;
};

window.test = test;

},{"kxing":2}],2:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KXingError__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IllegalArgumentError = (function (_super) {
    __extends(IllegalArgumentError, _super);
    function IllegalArgumentError(message) {
        var _this = _super.call(this) || this;
        _this._name = 'IllegalArgumentError';
        _this._message = message;
        return _this;
    }
    Object.defineProperty(IllegalArgumentError.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IllegalArgumentError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return IllegalArgumentError;
}(__WEBPACK_IMPORTED_MODULE_0__KXingError__["a" /* KXingError */]));
/* harmony default export */ __webpack_exports__["a"] = (IllegalArgumentError);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KXingError; });
var KXingError = (function () {
    function KXingError() {
        Error.apply(this, arguments);
    }
    return KXingError;
}());

KXingError.prototype = new Error();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bitCount;
/* harmony export (immutable) */ __webpack_exports__["b"] = arraycopy;
/* harmony export (immutable) */ __webpack_exports__["d"] = distance;
/* harmony export (immutable) */ __webpack_exports__["c"] = round;
/* harmony export (immutable) */ __webpack_exports__["e"] = crossProductZ;
function bitCount(i) {
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    i = (i + (i >>> 4)) & 0x0f0f0f0f;
    i = i + (i >>> 8);
    i = i + (i >>> 16);
    return i & 0x3f;
}
/**
 * {@link https://docs.oracle.com/javase/jp/8/docs/api/java/lang/System.html#arraycopy-java.lang.Object-int-java.lang.Object-int-int-}
 */
function arraycopy(src, srcPos, dest, destPos, length) {
    if (src == null || dest == null) {
        throw new Error("src and dest array should not be null.");
    }
    var slicedSrc = src.slice(srcPos, srcPos + length);
    for (var i = 0; i < slicedSrc.length; i++) {
        dest[destPos + i] = slicedSrc[i];
    }
}
/**
 * @param pattern1 first pattern
 * @param pattern2 second pattern
 * @return distance between two points
 */
function distance(pattern1, pattern2) {
    var xDiff = pattern1.x - pattern2.x;
    var yDiff = pattern1.y - pattern2.y;
    return Math.sqrt((xDiff * xDiff + yDiff * yDiff));
}
/**
 * Ends up being a bit faster than {@link Math#round(float)}. This merely rounds its
 * argument to the nearest int, where x.5 rounds up to x+1. Semantics of this shortcut
 * differ slightly from {@link Math#round(float)} in that half rounds down for negative
 * values. -2.5 rounds to -3, not -2. For purposes here it makes no difference.
 *
 * @param d real value to round
 * @return nearest {@code int}
 */
function round(d) {
    return Math.floor(d + (d < 0.0 ? -0.5 : 0.5));
}
/// <summary> Returns the z component of the cross product between vectors BC and BA.</summary>
function crossProductZ(pointA, pointB, pointC) {
    var bX = pointB.x;
    var bY = pointB.y;
    return ((pointC.x - bX) * (pointA.y - bY)) - ((pointC.y - bY) * (pointA.x - bX));
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KXingError__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        var _this = _super.call(this) || this;
        _this._name = 'NotFoundError';
        _this._message = message;
        return _this;
    }
    Object.defineProperty(NotFoundError.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotFoundError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__KXingError__["a" /* KXingError */]));
/* harmony default export */ __webpack_exports__["a"] = (NotFoundError);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__ = __webpack_require__(0);

/**
 * Porting form {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/BitMatrix.java}
 *
 * @author Tatsuya Yamamoto
 */
var BitMatrix = (function () {
    function BitMatrix(width, height) {
        this._width = 0;
        this._height = 0;
        this._rowSize = 0;
        this._bits = [];
        this._width = width;
        this._height = height ? height : width;
        if (width < 1 || height < 1) {
            throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]("Both dimensions must be greater than 0");
        }
        this._rowSize = Math.floor((width + 31) / 32);
    }
    Object.defineProperty(BitMatrix.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitMatrix.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitMatrix.prototype, "rowSize", {
        get: function () {
            return this._rowSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BitMatrix.prototype, "bits", {
        get: function () {
            return this._bits;
        },
        set: function (bits) {
            this._bits = bits;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * <p>Gets the requested bit, where true means black.</p>
     *
     * @param x The horizontal component (i.e. which column)
     * @param y The vertical component (i.e. which row)
     * @return value of given bit in matrix
     */
    BitMatrix.prototype.getBit = function (x, y) {
        var offset = Math.floor(y * this._rowSize + (x / 32));
        return ((this._bits[offset] >>> (x & 0x1f)) & 1) != 0;
    };
    ;
    /**
     * <p>Sets the given bit to true.</p>
     *
     * @param x The horizontal component (i.e. which column)
     * @param y The vertical component (i.e. which row)
     */
    BitMatrix.prototype.setBit = function (x, y) {
        var offset = Math.floor(y * this._rowSize + (x / 32));
        this._bits[offset] |= 1 << (x & 0x1f);
    };
    ;
    /**
     * <p>Flips the given bit.</p>
     *
     * @param x The horizontal component (i.e. which column)
     * @param y The vertical component (i.e. which row)
     */
    BitMatrix.prototype.flip = function (x, y) {
        var offset = Math.floor(y * this._rowSize + (x / 32));
        this._bits[offset] ^= 1 << (x & 0x1f);
    };
    ;
    /**
     * <p>Sets a square region of the bit matrix to true.</p>
     *
     * @param left The horizontal position to begin at (inclusive)
     * @param top The vertical position to begin at (inclusive)
     * @param width The width of the region
     * @param height The height of the region
     */
    BitMatrix.prototype.setRegion = function (left, top, width, height) {
        if (top < 0 || left < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]("Left and top must be nonnegative");
        }
        if (height < 1 || width < 1) {
            throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]("Height and width must be at least 1");
        }
        var right = left + width;
        var bottom = top + height;
        if (bottom > this._height || right > this._width) {
            throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]("The region must fit inside the matrix");
        }
        for (var y = top; y < bottom; y++) {
            var offset = y * this._rowSize;
            for (var x = left; x < right; x++) {
                this._bits[Math.floor(offset + (x / 32))] |= 1 << (x & 0x1f);
            }
        }
    };
    ;
    return BitMatrix;
}());
/* harmony default export */ __webpack_exports__["a"] = (BitMatrix);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenericGFPoly__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__ = __webpack_require__(0);


/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/reedsolomon/GenericGF.java}
 *
 * @author Tatsuya Yamamoto
 */
var GenericGF = (function () {
    /**
     * Create a representation of GF(size) using the given primitive polynomial.
     *
     * @param primitive irreducible polynomial whose coefficients are represented by
     *  the bits of an int, where the least-significant bit represents the constant
     *  coefficient
     * @param size the size of the field
     * @param b the factor b in the generator polynomial can be 0- or 1-based
     *  (g(x) = (x+a^b)(x+a^(b+1))...(x+a^(b+2t-1))).
     *  In most cases it should be 1, but for QR code it is 0.
     */
    function GenericGF(primitive, size, b) {
        this._expTable = [];
        this._logTable = [];
        this._primitive = primitive;
        this._size = size;
        this._generatorBase = b;
        var x = 1;
        for (var i = 0; i < size; i++) {
            this._expTable[i] = x;
            x *= 2;
            if (x >= size) {
                x ^= primitive;
                x &= size - 1;
            }
        }
        for (var i = 0; i < size - 1; i++) {
            this._logTable[this._expTable[i]] = i;
        }
        this._zero = new __WEBPACK_IMPORTED_MODULE_0__GenericGFPoly__["a" /* default */](this, [0]);
        this._one = new __WEBPACK_IMPORTED_MODULE_0__GenericGFPoly__["a" /* default */](this, [1]);
    }
    Object.defineProperty(GenericGF.prototype, "zero", {
        get: function () {
            return this._zero;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(GenericGF.prototype, "one", {
        get: function () {
            return this._one;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(GenericGF.prototype, "generatorBase", {
        get: function () {
            return this._generatorBase;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(GenericGF.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return the monomial representing coefficient * x^degree
     */
    GenericGF.prototype.buildMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]();
        }
        if (coefficient == 0) {
            return this._zero;
        }
        var coefficients = [];
        coefficients[0] = coefficient;
        return new __WEBPACK_IMPORTED_MODULE_0__GenericGFPoly__["a" /* default */](this, coefficients);
    };
    /**
     * Implements both addition and subtraction -- they are the same in GF(size).
     *
     * @return sum/difference of a and b
     */
    GenericGF.addOrSubtract = function (a, b) {
        return a ^ b;
    };
    /**
     * @return 2 to the power of a in GF(size)
     */
    GenericGF.prototype.exp = function (a) {
        return this._expTable[a];
    };
    /**
     * @return base 2 log of a in GF(size)
     */
    GenericGF.prototype.log = function (a) {
        if (a == 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]();
        }
        return this._logTable[a];
    };
    /**
     * @return multiplicative inverse of a
     */
    GenericGF.prototype.inverse = function (a) {
        if (a == 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]();
        }
        return this._expTable[255 - this._logTable[a]];
    };
    GenericGF.prototype.multiply = function (a, b) {
        if (a == 0 || b == 0) {
            return 0;
        }
        return this._expTable[(this._logTable[a] + this._logTable[b]) % (this._size - 1)];
    };
    Object.defineProperty(GenericGF, "QR_CODE_FIELD_256", {
        get: function () {
            return new GenericGF(0x011D, 256, 0);
        },
        enumerable: true,
        configurable: true
    });
    return GenericGF;
}());
/* harmony default export */ __webpack_exports__["a"] = (GenericGF);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KXingError__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FormatError = (function (_super) {
    __extends(FormatError, _super);
    function FormatError(message) {
        var _this = _super.call(this) || this;
        _this._name = 'FormatError';
        _this._message = message;
        return _this;
    }
    Object.defineProperty(FormatError.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return FormatError;
}(__WEBPACK_IMPORTED_MODULE_0__KXingError__["a" /* KXingError */]));
/* harmony default export */ __webpack_exports__["a"] = (FormatError);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenericGF__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(2);



/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/reedsolomon/GenericGFPoly.java}
 *
 * @author Tatsuya Yamamoto
 */
var GenericGFPoly = (function () {
    function GenericGFPoly(field, coefficients) {
        if (coefficients.length == 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]();
        }
        this._field = field;
        var coefficientsLength = coefficients.length;
        if (coefficientsLength > 1 && coefficients[0] == 0) {
            var firstNonZero = 1;
            while (firstNonZero < coefficientsLength && coefficients[firstNonZero] == 0) {
                firstNonZero++;
            }
            if (firstNonZero == coefficientsLength) {
                this._coefficients = [0];
            }
            else {
                this._coefficients = [];
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Utils__["b" /* arraycopy */])(coefficients, firstNonZero, this._coefficients, 0, this._coefficients.length);
            }
        }
        else {
            this._coefficients = coefficients;
        }
    }
    Object.defineProperty(GenericGFPoly.prototype, "coefficients", {
        get: function () {
            return this._coefficients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericGFPoly.prototype, "degree", {
        /**
         * @return degree of this polynomial
         */
        get: function () {
            return this._coefficients.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return true iff this polynomial is the monomial "0"
     */
    GenericGFPoly.prototype.isZero = function () {
        return this._coefficients[0] == 0;
    };
    ;
    Object.defineProperty(GenericGFPoly.prototype, "field", {
        get: function () {
            return this._field;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return coefficient of x^degree term in this polynomial
     */
    GenericGFPoly.prototype.getCoefficient = function (degree) {
        return this._coefficients[this._coefficients.length - 1 - degree];
    };
    /**
     * @return evaluation of this polynomial at a given point
     */
    GenericGFPoly.prototype.evaluateAt = function (a) {
        if (a == 0) {
            return this.getCoefficient(0);
        }
        var size = this._coefficients.length;
        if (a == 1) {
            var result_1 = 0;
            for (var i = 0; i < size; i++) {
                result_1 = __WEBPACK_IMPORTED_MODULE_0__GenericGF__["a" /* default */].addOrSubtract(result_1, this._coefficients[i]);
            }
            return result_1;
        }
        var result = this._coefficients[0];
        for (var i = 1; i < size; i++) {
            result = __WEBPACK_IMPORTED_MODULE_0__GenericGF__["a" /* default */].addOrSubtract(this._field.multiply(a, result), this._coefficients[i]);
        }
        return result;
    };
    GenericGFPoly.prototype.addOrSubtract = function (other) {
        if (this._field != other.field) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]("GenericGFPolys do not have same GenericGF field");
        }
        if (this.isZero()) {
            return other;
        }
        if (other.isZero()) {
            return this;
        }
        var smallerCoefficients = this._coefficients;
        var largerCoefficients = other.coefficients;
        if (smallerCoefficients.length > largerCoefficients.length) {
            var temp = smallerCoefficients;
            smallerCoefficients = largerCoefficients;
            largerCoefficients = temp;
        }
        var sumDiff = [];
        var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Utils__["b" /* arraycopy */])(largerCoefficients, 0, sumDiff, 0, lengthDiff);
        for (var i = lengthDiff; i < largerCoefficients.length; i++) {
            sumDiff[i] = __WEBPACK_IMPORTED_MODULE_0__GenericGF__["a" /* default */].addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
        }
        return new GenericGFPoly(this._field, sumDiff);
    };
    GenericGFPoly.prototype.multiply = function (other) {
        if (this._field != other.field) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]("GenericGFPolys do not have same GenericGF field");
        }
        if (this.isZero() || other.isZero()) {
            return this._field.zero;
        }
        var aCoefficients = this._coefficients;
        var aLength = aCoefficients.length;
        var bCoefficients = other.coefficients;
        var bLength = bCoefficients.length;
        var product = [];
        for (var i = 0; i < aLength; i++) {
            var aCoeff = aCoefficients[i];
            for (var j = 0; j < bLength; j++) {
                product[i + j] = __WEBPACK_IMPORTED_MODULE_0__GenericGF__["a" /* default */].addOrSubtract(product[i + j], this._field.multiply(aCoeff, bCoefficients[j]));
            }
        }
        return new GenericGFPoly(this._field, product);
    };
    GenericGFPoly.prototype.multiplyWithScalar = function (scalar) {
        if (scalar == 0) {
            return this._field.zero;
        }
        if (scalar == 1) {
            return this;
        }
        var size = this._coefficients.length;
        var product = new Array(size);
        for (var i = 0; i < size; i++) {
            product[i] = this._field.multiply(this._coefficients[i], scalar);
        }
        return new GenericGFPoly(this._field, product);
    };
    GenericGFPoly.prototype.multiplyByMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]();
        }
        if (coefficient == 0) {
            return this._field.zero;
        }
        var size = this._coefficients.length;
        var product = [];
        for (var i = 0; i < product.length; i++)
            product[i] = 0;
        for (var i = 0; i < size; i++) {
            product[i] = this._field.multiply(this._coefficients[i], coefficient);
        }
        return new GenericGFPoly(this._field, product);
    };
    GenericGFPoly.prototype.divide = function (other) {
        if (this._field != other.field) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]("GenericGFPolys do not have same GenericGF field");
        }
        if (other.isZero()) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_IllegalArgumentError__["a" /* default */]("Divide by 0");
        }
        var quotient = this._field.zero;
        var remainder = this;
        var denominatorLeadingTerm = other.getCoefficient(other.degree);
        var inverseDenominatorLeadingTerm = this._field.inverse(denominatorLeadingTerm);
        while (remainder.degree >= other.degree && !remainder.isZero()) {
            var degreeDifference = remainder.degree - other.degree;
            var scale = this._field.multiply(remainder.getCoefficient(remainder.degree), inverseDenominatorLeadingTerm);
            var term = other.multiplyByMonomial(degreeDifference, scale);
            var iterationQuotient = this._field.buildMonomial(degreeDifference, scale);
            quotient = quotient.addOrSubtract(iterationQuotient);
            remainder = remainder.addOrSubtract(term);
        }
        return [quotient, remainder];
    };
    return GenericGFPoly;
}());
/* harmony default export */ __webpack_exports__["a"] = (GenericGFPoly);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErrorCorrectionLevel__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataMask__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_Utils__ = __webpack_require__(2);
/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/FormatInformation.java}
 *
 * @author Tatsuya Yamamoto
 */



var FORMAT_INFO_MASK_QR = 0x5412;
var FORMAT_INFO_DECODE_LOOKUP = [
    [0x5412, 0x00],
    [0x5125, 0x01],
    [0x5E7C, 0x02],
    [0x5B4B, 0x03],
    [0x45F9, 0x04],
    [0x40CE, 0x05],
    [0x4F97, 0x06],
    [0x4AA0, 0x07],
    [0x77C4, 0x08],
    [0x72F3, 0x09],
    [0x7DAA, 0x0A],
    [0x789D, 0x0B],
    [0x662F, 0x0C],
    [0x6318, 0x0D],
    [0x6C41, 0x0E],
    [0x6976, 0x0F],
    [0x1689, 0x10],
    [0x13BE, 0x11],
    [0x1CE7, 0x12],
    [0x19D0, 0x13],
    [0x0762, 0x14],
    [0x0255, 0x15],
    [0x0D0C, 0x16],
    [0x083B, 0x17],
    [0x355F, 0x18],
    [0x3068, 0x19],
    [0x3F31, 0x1A],
    [0x3A06, 0x1B],
    [0x24B4, 0x1C],
    [0x2183, 0x1D],
    [0x2EDA, 0x1E],
    [0x2BED, 0x1F]
];
var INTEGER_MAX_VALUE = 2147483647;
var FormatInformation = (function () {
    function FormatInformation(formatInfo) {
        this._errorCorrectionLevel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ErrorCorrectionLevel__["a" /* forBits */])((formatInfo >> 3) & 0x03);
        this._dataMask = __WEBPACK_IMPORTED_MODULE_1__DataMask__["a" /* DataMask */].values()[formatInfo & 0x07];
    }
    Object.defineProperty(FormatInformation.prototype, "errorCorrectionLevel", {
        get: function () {
            return this._errorCorrectionLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatInformation.prototype, "dataMask", {
        get: function () {
            return this._dataMask;
        },
        enumerable: true,
        configurable: true
    });
    FormatInformation.numBitsDiffering = function (a, b) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_Utils__["a" /* bitCount */])(a ^ b);
    };
    FormatInformation.decodeFormatInformation = function (maskedFormatInfo1, maskedFormatInfo2) {
        var formatInfo = FormatInformation.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
        if (formatInfo != null) {
            return formatInfo;
        }
        return FormatInformation.doDecodeFormatInformation(maskedFormatInfo1 ^ FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FORMAT_INFO_MASK_QR);
    };
    FormatInformation.doDecodeFormatInformation = function (maskedFormatInfo1, maskedFormatInfo2) {
        var bestDifference = INTEGER_MAX_VALUE;
        var bestFormatInfo = 0;
        for (var i = 0; i < FORMAT_INFO_DECODE_LOOKUP.length; i++) {
            var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i];
            var targetInfo = decodeInfo[0];
            if (targetInfo == maskedFormatInfo1 || targetInfo == maskedFormatInfo2) {
                return new FormatInformation(decodeInfo[1]);
            }
            var bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo1, targetInfo);
            if (bitsDifference < bestDifference) {
                bestFormatInfo = decodeInfo[1];
                bestDifference = bitsDifference;
            }
            if (maskedFormatInfo1 != maskedFormatInfo2) {
                // also try the other option
                bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo2, targetInfo);
                if (bitsDifference < bestDifference) {
                    bestFormatInfo = decodeInfo[1];
                    bestDifference = bitsDifference;
                }
            }
        }
        if (bestDifference <= 3) {
            return new FormatInformation(bestFormatInfo);
        }
        return null;
    };
    return FormatInformation;
}());
/* harmony default export */ __webpack_exports__["a"] = (FormatInformation);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionPattern; });
var FunctionPattern = (function () {
    function FunctionPattern(x, y, estimatedModuleSize) {
        this._count = 1;
        this._x = x;
        this._y = y;
        this._estimatedModuleSize = estimatedModuleSize;
    }
    Object.defineProperty(FunctionPattern.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionPattern.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionPattern.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionPattern.prototype, "estimatedModuleSize", {
        get: function () {
            return this._estimatedModuleSize;
        },
        enumerable: true,
        configurable: true
    });
    FunctionPattern.prototype.incrementCount = function () {
        this._count++;
    };
    ;
    FunctionPattern.prototype.aboutEquals = function (moduleSize, i, j) {
        if (Math.abs(i - this._y) <= moduleSize && Math.abs(j - this._x) <= moduleSize) {
            var moduleSizeDiff = Math.abs(moduleSize - this._estimatedModuleSize);
            return moduleSizeDiff <= 1.0 || moduleSizeDiff / this._estimatedModuleSize <= 1.0;
        }
        return false;
    };
    ;
    return FunctionPattern;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_BitMatrix__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormatInformation__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_IllegalArgumentError__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_FormatError__ = __webpack_require__(6);
/* unused harmony export ECB */
/* unused harmony export ECBlocks */




var ECB = (function () {
    function ECB(count, dataCodewords) {
        this._count = count;
        this._dataCodewords = dataCodewords;
    }
    Object.defineProperty(ECB.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ECB.prototype, "dataCodewords", {
        get: function () {
            return this._dataCodewords;
        },
        enumerable: true,
        configurable: true
    });
    return ECB;
}());

var ECBlocks = (function () {
    function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
        this._ecBlocks = [];
        this._ecCodewordsPerBlock = ecCodewordsPerBlock;
        if (ecBlocks2) {
            this._ecBlocks = [ecBlocks1, ecBlocks2];
        }
        else {
            this._ecBlocks = [ecBlocks1];
        }
    }
    Object.defineProperty(ECBlocks.prototype, "ecCodewordsPerBlock", {
        get: function () {
            return this._ecCodewordsPerBlock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ECBlocks.prototype, "ecBlocks", {
        get: function () {
            return this._ecBlocks;
        },
        enumerable: true,
        configurable: true
    });
    return ECBlocks;
}());

/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/Version.java}
 *
 * @author Tatsuya Yamamoto
 */
var Version = (function () {
    function Version(versionNumber, alignmentPatternCenters) {
        var ecBlocks = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            ecBlocks[_i - 2] = arguments[_i];
        }
        this._versionNumber = versionNumber;
        this._alignmentPatternCenters = alignmentPatternCenters;
        this._ecBlocks = ecBlocks;
        var total = 0;
        var ecCodewords = ecBlocks[0].ecCodewordsPerBlock;
        ecBlocks[0].ecBlocks.forEach(function (ecb) {
            total += ecb.count * (ecb.dataCodewords + ecCodewords);
        });
        this._totalCodewords = total;
    }
    Object.defineProperty(Version.prototype, "versionNumber", {
        get: function () {
            return this._versionNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "alignmentPatternCenters", {
        get: function () {
            return this._alignmentPatternCenters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "totalCodewords", {
        get: function () {
            return this._totalCodewords;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Version.prototype, "dimensionForVersion", {
        get: function () {
            return 17 + 4 * this._versionNumber;
        },
        enumerable: true,
        configurable: true
    });
    Version.prototype.getECBlocksForLevel = function (ecLevel) {
        return this._ecBlocks[ecLevel.ordinal];
    };
    /**
     * See ISO 18004:2006 Annex E
     */
    Version.prototype.buildFunctionPattern = function () {
        var dimension = this.dimensionForVersion;
        var bitMatrix = new __WEBPACK_IMPORTED_MODULE_0__common_BitMatrix__["a" /* default */](dimension, dimension);
        // Top left finder pattern + separator + format
        bitMatrix.setRegion(0, 0, 9, 9);
        // Top right finder pattern + separator + format
        bitMatrix.setRegion(dimension - 8, 0, 8, 9);
        // Bottom left finder pattern + separator + format
        bitMatrix.setRegion(0, dimension - 8, 9, 8);
        // Alignment patterns
        var max = this._alignmentPatternCenters.length;
        for (var x = 0; x < max; x++) {
            var i = this._alignmentPatternCenters[x] - 2;
            for (var y = 0; y < max; y++) {
                if ((x == 0 && (y == 0 || y == max - 1)) || (x == max - 1 && y == 0)) {
                    // No alignment patterns near the three finder patterns
                    continue;
                }
                bitMatrix.setRegion(this._alignmentPatternCenters[y] - 2, i, 5, 5);
            }
        }
        // Vertical timing pattern
        bitMatrix.setRegion(6, 9, 1, dimension - 17);
        // Horizontal timing pattern
        bitMatrix.setRegion(9, 6, dimension - 17, 1);
        if (this._versionNumber > 6) {
            // Version info, top right
            bitMatrix.setRegion(dimension - 11, 0, 3, 6);
            // Version info, bottom left
            bitMatrix.setRegion(0, dimension - 11, 6, 3);
        }
        return bitMatrix;
    };
    Version.getVersionForNumber = function (versionNumber) {
        if (versionNumber < 1 || 40 < versionNumber) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_IllegalArgumentError__["a" /* default */]();
        }
        return Version.VERSIONS[versionNumber - 1];
    };
    /**
     * <p>Deduces version information purely from QR Code dimensions.</p>
     *
     * @param dimension dimension in modules
     * @return Version for a QR Code of that dimension
     * @throws FormatException if dimension is not 1 mod 4
     */
    Version.getProvisionalVersionForDimension = function (dimension) {
        if (dimension % 4 != 1) {
            throw new __WEBPACK_IMPORTED_MODULE_3__error_FormatError__["a" /* default */]();
        }
        try {
            return Version.getVersionForNumber(Math.floor((dimension - 17) / 4));
        }
        catch (e) {
            throw new __WEBPACK_IMPORTED_MODULE_3__error_FormatError__["a" /* default */]();
        }
    };
    Version.decodeVersionInformation = function (versionBits) {
        var bestDifference = Version.INTEGER_MAX_VALUE;
        var bestVersion = 0;
        for (var i = 0; i < Version.VERSION_DECODE_INFO.length; i++) {
            var targetVersion = Version.VERSION_DECODE_INFO[i];
            if (targetVersion == versionBits) {
                return this.getVersionForNumber(i + 7);
            }
            var bitsDifference = __WEBPACK_IMPORTED_MODULE_1__FormatInformation__["a" /* default */].numBitsDiffering(versionBits, targetVersion);
            if (bitsDifference < bestDifference) {
                bestVersion = i + 7;
                bestDifference = bitsDifference;
            }
        }
        if (bestDifference <= 3) {
            return this.getVersionForNumber(bestVersion);
        }
        return null;
    };
    return Version;
}());
/* harmony default export */ __webpack_exports__["a"] = (Version);
Version.VERSION_DECODE_INFO = [
    0x07C94, 0x085BC, 0x09A99, 0x0A4D3, 0x0BBF6,
    0x0C762, 0x0D847, 0x0E60D, 0x0F928, 0x10B78,
    0x1145D, 0x12A17, 0x13532, 0x149A6, 0x15683,
    0x168C9, 0x177EC, 0x18EC4, 0x191E1, 0x1AFAB,
    0x1B08E, 0x1CC1A, 0x1D33F, 0x1ED75, 0x1F250,
    0x209D5, 0x216F0, 0x228BA, 0x2379F, 0x24B0B,
    0x2542E, 0x26A64, 0x27541, 0x28C69
];
Version.VERSIONS = buildVersions();
Version.INTEGER_MAX_VALUE = 2147483647;
/**
 * See ISO 18004:2006 6.5.1 Table 9
 */
function buildVersions() {
    return [
        new Version(1, [], new ECBlocks(7, new ECB(1, 19)), new ECBlocks(10, new ECB(1, 16)), new ECBlocks(13, new ECB(1, 13)), new ECBlocks(17, new ECB(1, 9))),
        new Version(2, [6, 18], new ECBlocks(10, new ECB(1, 34)), new ECBlocks(16, new ECB(1, 28)), new ECBlocks(22, new ECB(1, 22)), new ECBlocks(28, new ECB(1, 16))),
        new Version(3, [6, 22], new ECBlocks(15, new ECB(1, 55)), new ECBlocks(26, new ECB(1, 44)), new ECBlocks(18, new ECB(2, 17)), new ECBlocks(22, new ECB(2, 13))),
        new Version(4, [6, 26], new ECBlocks(20, new ECB(1, 80)), new ECBlocks(18, new ECB(2, 32)), new ECBlocks(26, new ECB(2, 24)), new ECBlocks(16, new ECB(4, 9))),
        new Version(5, [6, 30], new ECBlocks(26, new ECB(1, 108)), new ECBlocks(24, new ECB(2, 43)), new ECBlocks(18, new ECB(2, 15), new ECB(2, 16)), new ECBlocks(22, new ECB(2, 11), new ECB(2, 12))),
        new Version(6, [6, 34], new ECBlocks(18, new ECB(2, 68)), new ECBlocks(16, new ECB(4, 27)), new ECBlocks(24, new ECB(4, 19)), new ECBlocks(28, new ECB(4, 15))),
        new Version(7, [6, 22, 38], new ECBlocks(20, new ECB(2, 78)), new ECBlocks(18, new ECB(4, 31)), new ECBlocks(18, new ECB(2, 14), new ECB(4, 15)), new ECBlocks(26, new ECB(4, 13), new ECB(1, 14))),
        new Version(8, [6, 24, 42], new ECBlocks(24, new ECB(2, 97)), new ECBlocks(22, new ECB(2, 38), new ECB(2, 39)), new ECBlocks(22, new ECB(4, 18), new ECB(2, 19)), new ECBlocks(26, new ECB(4, 14), new ECB(2, 15))),
        new Version(9, [6, 26, 46], new ECBlocks(30, new ECB(2, 116)), new ECBlocks(22, new ECB(3, 36), new ECB(2, 37)), new ECBlocks(20, new ECB(4, 16), new ECB(4, 17)), new ECBlocks(24, new ECB(4, 12), new ECB(4, 13))),
        new Version(10, [6, 28, 50], new ECBlocks(18, new ECB(2, 68), new ECB(2, 69)), new ECBlocks(26, new ECB(4, 43), new ECB(1, 44)), new ECBlocks(24, new ECB(6, 19), new ECB(2, 20)), new ECBlocks(28, new ECB(6, 15), new ECB(2, 16))),
        new Version(11, [6, 30, 54], new ECBlocks(20, new ECB(4, 81)), new ECBlocks(30, new ECB(1, 50), new ECB(4, 51)), new ECBlocks(28, new ECB(4, 22), new ECB(4, 23)), new ECBlocks(24, new ECB(3, 12), new ECB(8, 13))),
        new Version(12, [6, 32, 58], new ECBlocks(24, new ECB(2, 92), new ECB(2, 93)), new ECBlocks(22, new ECB(6, 36), new ECB(2, 37)), new ECBlocks(26, new ECB(4, 20), new ECB(6, 21)), new ECBlocks(28, new ECB(7, 14), new ECB(4, 15))),
        new Version(13, [6, 34, 62], new ECBlocks(26, new ECB(4, 107)), new ECBlocks(22, new ECB(8, 37), new ECB(1, 38)), new ECBlocks(24, new ECB(8, 20), new ECB(4, 21)), new ECBlocks(22, new ECB(12, 11), new ECB(4, 12))),
        new Version(14, [6, 26, 46, 66], new ECBlocks(30, new ECB(3, 115), new ECB(1, 116)), new ECBlocks(24, new ECB(4, 40), new ECB(5, 41)), new ECBlocks(20, new ECB(11, 16), new ECB(5, 17)), new ECBlocks(24, new ECB(11, 12), new ECB(5, 13))),
        new Version(15, [6, 26, 48, 70], new ECBlocks(22, new ECB(5, 87), new ECB(1, 88)), new ECBlocks(24, new ECB(5, 41), new ECB(5, 42)), new ECBlocks(30, new ECB(5, 24), new ECB(7, 25)), new ECBlocks(24, new ECB(11, 12), new ECB(7, 13))),
        new Version(16, [6, 26, 50, 74], new ECBlocks(24, new ECB(5, 98), new ECB(1, 99)), new ECBlocks(28, new ECB(7, 45), new ECB(3, 46)), new ECBlocks(24, new ECB(15, 19), new ECB(2, 20)), new ECBlocks(30, new ECB(3, 15), new ECB(13, 16))),
        new Version(17, [6, 30, 54, 78], new ECBlocks(28, new ECB(1, 107), new ECB(5, 108)), new ECBlocks(28, new ECB(10, 46), new ECB(1, 47)), new ECBlocks(28, new ECB(1, 22), new ECB(15, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(17, 15))),
        new Version(18, [6, 30, 56, 82], new ECBlocks(30, new ECB(5, 120), new ECB(1, 121)), new ECBlocks(26, new ECB(9, 43), new ECB(4, 44)), new ECBlocks(28, new ECB(17, 22), new ECB(1, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(19, 15))),
        new Version(19, [6, 30, 58, 86], new ECBlocks(28, new ECB(3, 113), new ECB(4, 114)), new ECBlocks(26, new ECB(3, 44), new ECB(11, 45)), new ECBlocks(26, new ECB(17, 21), new ECB(4, 22)), new ECBlocks(26, new ECB(9, 13), new ECB(16, 14))),
        new Version(20, [6, 34, 62, 90], new ECBlocks(28, new ECB(3, 107), new ECB(5, 108)), new ECBlocks(26, new ECB(3, 41), new ECB(13, 42)), new ECBlocks(30, new ECB(15, 24), new ECB(5, 25)), new ECBlocks(28, new ECB(15, 15), new ECB(10, 16))),
        new Version(21, [6, 28, 50, 72, 94], new ECBlocks(28, new ECB(4, 116), new ECB(4, 117)), new ECBlocks(26, new ECB(17, 42)), new ECBlocks(28, new ECB(17, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(19, 16), new ECB(6, 17))),
        new Version(22, [6, 26, 50, 74, 98], new ECBlocks(28, new ECB(2, 111), new ECB(7, 112)), new ECBlocks(28, new ECB(17, 46)), new ECBlocks(30, new ECB(7, 24), new ECB(16, 25)), new ECBlocks(24, new ECB(34, 13))),
        new Version(23, [6, 30, 54, 74, 102], new ECBlocks(30, new ECB(4, 121), new ECB(5, 122)), new ECBlocks(28, new ECB(4, 47), new ECB(14, 48)), new ECBlocks(30, new ECB(11, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(16, 15), new ECB(14, 16))),
        new Version(24, [6, 28, 54, 80, 106], new ECBlocks(30, new ECB(6, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(6, 45), new ECB(14, 46)), new ECBlocks(30, new ECB(11, 24), new ECB(16, 25)), new ECBlocks(30, new ECB(30, 16), new ECB(2, 17))),
        new Version(25, [6, 32, 58, 84, 110], new ECBlocks(26, new ECB(8, 106), new ECB(4, 107)), new ECBlocks(28, new ECB(8, 47), new ECB(13, 48)), new ECBlocks(30, new ECB(7, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(13, 16))),
        new Version(26, [6, 30, 58, 86, 114], new ECBlocks(28, new ECB(10, 114), new ECB(2, 115)), new ECBlocks(28, new ECB(19, 46), new ECB(4, 47)), new ECBlocks(28, new ECB(28, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(33, 16), new ECB(4, 17))),
        new Version(27, [6, 34, 62, 90, 118], new ECBlocks(30, new ECB(8, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(22, 45), new ECB(3, 46)), new ECBlocks(30, new ECB(8, 23), new ECB(26, 24)), new ECBlocks(30, new ECB(12, 15), new ECB(28, 16))),
        new Version(28, [6, 26, 50, 74, 98, 122], new ECBlocks(30, new ECB(3, 117), new ECB(10, 118)), new ECBlocks(28, new ECB(3, 45), new ECB(23, 46)), new ECBlocks(30, new ECB(4, 24), new ECB(31, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(31, 16))),
        new Version(29, [6, 30, 54, 78, 102, 126], new ECBlocks(30, new ECB(7, 116), new ECB(7, 117)), new ECBlocks(28, new ECB(21, 45), new ECB(7, 46)), new ECBlocks(30, new ECB(1, 23), new ECB(37, 24)), new ECBlocks(30, new ECB(19, 15), new ECB(26, 16))),
        new Version(30, [6, 26, 52, 78, 104, 130], new ECBlocks(30, new ECB(5, 115), new ECB(10, 116)), new ECBlocks(28, new ECB(19, 47), new ECB(10, 48)), new ECBlocks(30, new ECB(15, 24), new ECB(25, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(25, 16))),
        new Version(31, [6, 30, 56, 82, 108, 134], new ECBlocks(30, new ECB(13, 115), new ECB(3, 116)), new ECBlocks(28, new ECB(2, 46), new ECB(29, 47)), new ECBlocks(30, new ECB(42, 24), new ECB(1, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(28, 16))),
        new Version(32, [6, 34, 60, 86, 112, 138], new ECBlocks(30, new ECB(17, 115)), new ECBlocks(28, new ECB(10, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(10, 24), new ECB(35, 25)), new ECBlocks(30, new ECB(19, 15), new ECB(35, 16))),
        new Version(33, [6, 30, 58, 86, 114, 142], new ECBlocks(30, new ECB(17, 115), new ECB(1, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(21, 47)), new ECBlocks(30, new ECB(29, 24), new ECB(19, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(46, 16))),
        new Version(34, [6, 34, 62, 90, 118, 146], new ECBlocks(30, new ECB(13, 115), new ECB(6, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(44, 24), new ECB(7, 25)), new ECBlocks(30, new ECB(59, 16), new ECB(1, 17))),
        new Version(35, [6, 30, 54, 78, 102, 126, 150], new ECBlocks(30, new ECB(12, 121), new ECB(7, 122)), new ECBlocks(28, new ECB(12, 47), new ECB(26, 48)), new ECBlocks(30, new ECB(39, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(41, 16))),
        new Version(36, [6, 24, 50, 76, 102, 128, 154], new ECBlocks(30, new ECB(6, 121), new ECB(14, 122)), new ECBlocks(28, new ECB(6, 47), new ECB(34, 48)), new ECBlocks(30, new ECB(46, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(2, 15), new ECB(64, 16))),
        new Version(37, [6, 28, 54, 80, 106, 132, 158], new ECBlocks(30, new ECB(17, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(29, 46), new ECB(14, 47)), new ECBlocks(30, new ECB(49, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(24, 15), new ECB(46, 16))),
        new Version(38, [6, 32, 58, 84, 110, 136, 162], new ECBlocks(30, new ECB(4, 122), new ECB(18, 123)), new ECBlocks(28, new ECB(13, 46), new ECB(32, 47)), new ECBlocks(30, new ECB(48, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(42, 15), new ECB(32, 16))),
        new Version(39, [6, 26, 54, 82, 110, 138, 166], new ECBlocks(30, new ECB(20, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(40, 47), new ECB(7, 48)), new ECBlocks(30, new ECB(43, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(10, 15), new ECB(67, 16))),
        new Version(40, [6, 30, 58, 86, 114, 142, 170], new ECBlocks(30, new ECB(19, 118), new ECB(6, 119)), new ECBlocks(28, new ECB(18, 47), new ECB(31, 48)), new ECBlocks(30, new ECB(34, 24), new ECB(34, 25)), new ECBlocks(30, new ECB(20, 15), new ECB(61, 16)))
    ];
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__qrcode_QRCodeReader__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KXing; });

var KXing = (function () {
    function KXing() {
    }
    KXing.getReader = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__qrcode_QRCodeReader__["a" /* default */]();
    };
    return KXing;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeFormat; });
var BarcodeFormat;
(function (BarcodeFormat) {
    /** QR Code 2D barcode format. */
    BarcodeFormat[BarcodeFormat["QR_CODE"] = 0] = "QR_CODE";
})(BarcodeFormat || (BarcodeFormat = {}));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Result = (function () {
    function Result(text, rawBytes, format, timestamp) {
        this._text = text;
        this._rawBytes = rawBytes;
        this._numBits = rawBytes == null ? 0 : 8 * rawBytes.length;
        this._format = format;
        this._timestamp = timestamp ? timestamp : Date.now();
    }
    Object.defineProperty(Result.prototype, "text", {
        /**
         * @return raw text encoded by the barcode
         */
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "rawBytes", {
        /**
         * @return raw bytes encoded by the barcode, if applicable, otherwise {@code null}
         */
        get: function () {
            return this._rawBytes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "numBits", {
        /**
         * @return how many bits of {@link Result#rawBytes} are valid; typically 8 times its length
         * @since 3.3.0
         */
        get: function () {
            return this._numBits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "barcodeFormat", {
        /**
         * @return {@link BarcodeFormat} representing the format of the barcode that was decoded
         */
        get: function () {
            return this._format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    return Result;
}());
/* harmony default export */ __webpack_exports__["a"] = (Result);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BitMatrix__ = __webpack_require__(4);
/* harmony export (immutable) */ __webpack_exports__["a"] = binarize;

var MAX_LUMINANCE_VALUE = 255;
var MIN_LUMINANCE_VALUE = 0;
/**
 *
 * @param canvasImageData
 * @returns {BitMatrix}
 */
function binarize(canvasImageData) {
    var luminanceArray = convertGreyscale(canvasImageData);
    var threshold = calculateThresholdWithOtsuMethod(luminanceArray);
    var bitMatrix = new __WEBPACK_IMPORTED_MODULE_0__BitMatrix__["a" /* default */](canvasImageData.width, canvasImageData.height);
    bitMatrix.bits = luminanceArray.map(function (lum) {
        return lum <= threshold ? 1 : 0;
    });
    return bitMatrix;
}
/**
 * convert greyscale
 *
 * @param image target of convert
 * @returns {number[]}
 */
function convertGreyscale(image) {
    var luminances = [];
    for (var y = 0; y < image.height; y++) {
        for (var x = 0; x < image.width; x++) {
            var point = (x * 4) + (y * image.width * 4);
            var r = image.data[point];
            var g = image.data[point + 1];
            var b = image.data[point + 2];
            luminances[x + y * image.width] = Math.floor((r * 33 + g * 34 + b * 33) / 100);
        }
    }
    return luminances;
}
/**
 *
 *
 * @param luminanceArray
 * @returns {number}
 */
function calculateThresholdWithOtsuMethod(luminanceArray) {
    var luminanceHistgram = [];
    for (var i = MIN_LUMINANCE_VALUE; i <= MAX_LUMINANCE_VALUE; i++) {
        luminanceHistgram[i] = 0;
    }
    luminanceArray.forEach(function (lu) {
        luminanceHistgram[lu]++;
    });
    var threshold = 0;
    var max = 0.0;
    for (var i = 0; i <= MAX_LUMINANCE_VALUE; ++i) {
        var blackArea = {
            pixels: 0,
            sum: 0,
            average: 0
        };
        var whiteArea = {
            pixels: 0,
            sum: 0,
            average: 0
        };
        for (var j = MIN_LUMINANCE_VALUE; j <= i; ++j) {
            blackArea.pixels += luminanceHistgram[j];
            blackArea.sum += j * luminanceHistgram[j];
        }
        for (var j = i + 1; j <= MAX_LUMINANCE_VALUE; ++j) {
            whiteArea.pixels += luminanceHistgram[j];
            whiteArea.sum += j * luminanceHistgram[j];
        }
        if (blackArea.pixels) {
            blackArea.average = blackArea.sum / blackArea.pixels;
        }
        if (whiteArea.pixels) {
            whiteArea.average = whiteArea.sum / whiteArea.pixels;
        }
        var result = (blackArea.pixels * whiteArea.pixels * Math.pow((blackArea.average - whiteArea.average), 2));
        if (max < result) {
            max = result;
            threshold = i;
        }
    }
    return threshold;
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__ = __webpack_require__(0);

/**
 * Porting form {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/BitSource.java}
 *
 * @author Tatsuya Yamamoto
 */
var BitSource = (function () {
    /**
     * @param bytes bytes from which this will read bits. Bits will be read from the first byte first.
     * Bits are read within a byte from most-significant to least-significant bit.
     */
    function BitSource(bytes) {
        this._byteOffset = 0;
        this._bitOffset = 0;
        this._bytes = bytes;
    }
    /**
     * @return index of next bit in current byte which would be read by the next call to {@link #readBits(int)}.
     */
    BitSource.prototype.bitOffset = function () {
        return this._bitOffset;
    };
    /**
     * @return index of next byte in input byte array which would be read by the next call to {@link #readBits(int)}.
     */
    BitSource.prototype.byteOffset = function () {
        return this._byteOffset;
    };
    /**
     * @param numBits number of bits to read
     * @return int representing the bits read. The bits will appear as the least-significant
     *         bits of the int
     * @throws IllegalArgumentException if numBits isn't in [1,32] or more than is available
     */
    BitSource.prototype.readBits = function (numBits) {
        if (numBits < 1 || numBits > 32 || numBits > this.available()) {
            throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]();
        }
        var result = 0;
        // First, read remainder from current byte
        if (this._bitOffset > 0) {
            var bitsLeft = 8 - this._bitOffset;
            var toRead = numBits < bitsLeft ? numBits : bitsLeft;
            var bitsToNotRead = bitsLeft - toRead;
            var mask = (0xFF >> (8 - toRead)) << bitsToNotRead;
            result = (this._bytes[this._byteOffset] & mask) >> bitsToNotRead;
            numBits -= toRead;
            this._bitOffset += toRead;
            if (this._bitOffset == 8) {
                this._bitOffset = 0;
                this._byteOffset++;
            }
        }
        // Next read whole bytes
        if (numBits > 0) {
            while (numBits >= 8) {
                result = (result << 8) | (this._bytes[this._byteOffset] & 0xFF);
                this._byteOffset++;
                numBits -= 8;
            }
            // Finally read a partial byte
            if (numBits > 0) {
                var bitsToNotRead = 8 - numBits;
                var mask = (0xFF >> bitsToNotRead) << bitsToNotRead;
                result = (result << numBits) | ((this._bytes[this._byteOffset] & mask) >> bitsToNotRead);
                this._bitOffset += numBits;
            }
        }
        return result;
    };
    /**
     * @return number of bits that can be read successfully
     */
    BitSource.prototype.available = function () {
        return 8 * (this._bytes.length - this._byteOffset) - this._bitOffset;
    };
    return BitSource;
}());
/* harmony default export */ __webpack_exports__["a"] = (BitSource);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/DecoderResult.java}
 *
 * @author Tatsuya Yamamoto
 */
var DecoderResult = (function () {
    function DecoderResult(rawBytes, text, byteSegments, ecLevel, saSequence, saParity) {
        this._rawBytes = rawBytes;
        this._numBits = rawBytes == null ? 0 : 8 * rawBytes.length;
        this._text = text;
        this._byteSegments = byteSegments;
        this._ecLevel = ecLevel;
        this._structuredAppendParity = saParity ? saParity : -1;
        this._structuredAppendSequenceNumber = saSequence ? saSequence : -1;
    }
    Object.defineProperty(DecoderResult.prototype, "rawBytes", {
        /**
         * @return raw bytes representing the result, or {@code null} if not applicable
         */
        get: function () {
            return this._rawBytes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "numBits", {
        /**
         * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
         * @since 3.3.0
         */
        get: function () {
            return this._numBits;
        },
        /**
         * @param numBits overrides the number of bits that are valid in {@link #getRawBytes()}
         * @since 3.3.0
         */
        set: function (numBits) {
            this._numBits = numBits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "text", {
        /**
         * @return text representation of the result
         */
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "byteSegments", {
        /**
         * @return list of byte segments in the result, or {@code null} if not applicable
         */
        get: function () {
            return this._byteSegments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "ecLevel", {
        /**
         * @return name of error correction level used, or {@code null} if not applicable
         */
        get: function () {
            return this._ecLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "errorsCorrected", {
        /**
         * @return number of errors corrected, or {@code null} if not applicable
         */
        get: function () {
            return this._errorsCorrected;
        },
        set: function (errorsCorrected) {
            this._errorsCorrected = errorsCorrected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "erasures", {
        /**
         * @return number of erasures corrected, or {@code null} if not applicable
         */
        get: function () {
            return this._erasures;
        },
        set: function (erasures) {
            this._erasures = erasures;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "other", {
        /**
         * @return arbitrary additional metadata
         */
        get: function () {
            return this._other;
        },
        set: function (other) {
            this._other = other;
        },
        enumerable: true,
        configurable: true
    });
    DecoderResult.prototype.hasStructuredAppend = function () {
        return this._structuredAppendParity >= 0 && this._structuredAppendSequenceNumber >= 0;
    };
    Object.defineProperty(DecoderResult.prototype, "structuredAppendParity", {
        get: function () {
            return this._structuredAppendParity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecoderResult.prototype, "structuredAppendSequenceNumber", {
        get: function () {
            return this._structuredAppendSequenceNumber;
        },
        enumerable: true,
        configurable: true
    });
    return DecoderResult;
}());
/* harmony default export */ __webpack_exports__["a"] = (DecoderResult);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BitMatrix__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_NotFoundError__ = __webpack_require__(3);


/*
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/GridSampler.java}
 *
 * @author Tatsuya Yamamoto
 */
var GridSampler = (function () {
    function GridSampler(width, height) {
        this._width = width;
        this._height = height;
    }
    ;
    GridSampler.prototype.sampleGrid = function (image, dimensionX, dimensionY, transform) {
        if (dimensionX <= 0 || dimensionY <= 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__error_NotFoundError__["a" /* default */]("x or y dimension of the code is Less than 1.");
        }
        var bits = new __WEBPACK_IMPORTED_MODULE_0__BitMatrix__["a" /* default */](dimensionX, dimensionY);
        var points = new Array(2 * dimensionX);
        for (var y = 0; y < dimensionY; y++) {
            var max = points.length;
            var iValue = y + 0.5;
            for (var x = 0; x < max; x += 2) {
                points[x] = (x / 2) + 0.5;
                points[x + 1] = iValue;
            }
            transform.transformPoints(points);
            // Quick check to see if points transformed to something inside the image;
            // sufficient to check the endpoints
            this.checkAndNudgePoints(points);
            try {
                for (var x = 0; x < max; x += 2) {
                    var bit = image[Math.floor(points[x]) + this._width * Math.floor(points[x + 1])];
                    if (bit) {
                        bits.setBit(x / 2, y);
                    }
                }
            }
            catch (aioobe) {
                // This feels wrong, but, sometimes if the finder patterns are misidentified, the resulting
                // transform gets "twisted" such that it maps a straight line of points to a set of points
                // whose endpoints are in bounds, but others are not. There is probably some mathematical
                // way to detect this about the transformation that I don't know yet.
                // This results in an ugly runtime exception despite our clever checks above -- can't have
                // that. We could check each point's coordinates but that feels duplicative. We settle for
                // catching and wrapping ArrayIndexOutOfBoundsException.
                throw new __WEBPACK_IMPORTED_MODULE_1__error_NotFoundError__["a" /* default */]("ArrayIndexOutOfBoundsException");
            }
        }
        return bits;
    };
    ;
    /**
     * <p>Checks a set of points that have been transformed to sample points on an image against
     * the image's dimensions to see if the point are even within the image.</p>
     *
     * <p>This method will actually "nudge" the endpoints back onto the image if they are found to be
     * barely (less than 1 pixel) off the image. This accounts for imperfect detection of finder
     * patterns in an image where the QR Code runs all the way to the image border.</p>
     *
     * <p>For efficiency, the method will check points from either end of the line until one is found
     * to be within the image. Because the set of points are assumed to be linear, this is valid.</p>
     *
     * @param image image into which the points should map
     * @param points actual points in x1,y1,...,xn,yn form
     * @throws NotFoundException if an endpoint is lies outside the image boundaries
     */
    GridSampler.prototype.checkAndNudgePoints = function (points) {
        // Check and nudge points from start until we see some that are OK:
        var nudged = true;
        for (var offset = 0; offset < points.Length && nudged; offset += 2) {
            var x = Math.floor(points[offset]);
            var y = Math.floor(points[offset + 1]);
            if (x < -1 || x > this._width || y < -1 || y > this._height) {
                throw new __WEBPACK_IMPORTED_MODULE_1__error_NotFoundError__["a" /* default */]();
            }
            nudged = false;
            if (x == -1) {
                points[offset] = 0.0;
                nudged = true;
            }
            else if (x == this._width) {
                points[offset] = this._width - 1;
                nudged = true;
            }
            if (y == -1) {
                points[offset + 1] = 0.0;
                nudged = true;
            }
            else if (y == this._height) {
                points[offset + 1] = this._height - 1;
                nudged = true;
            }
        }
        // Check and nudge points from end:
        nudged = true;
        for (var offset = points.Length - 2; offset >= 0 && nudged; offset -= 2) {
            var x = Math.floor(points[offset]);
            var y = Math.floor(points[offset + 1]);
            if (x < -1 || x > this._width || y < -1 || y > this._height) {
                throw new __WEBPACK_IMPORTED_MODULE_1__error_NotFoundError__["a" /* default */]();
            }
            nudged = false;
            if (x == -1) {
                points[offset] = 0.0;
                nudged = true;
            }
            else if (x == this._width) {
                points[offset] = this._width - 1;
                nudged = true;
            }
            if (y == -1) {
                points[offset + 1] = 0.0;
                nudged = true;
            }
            else if (y == this._height) {
                points[offset + 1] = this._height - 1;
                nudged = true;
            }
        }
    };
    ;
    return GridSampler;
}());
/* harmony default export */ __webpack_exports__["a"] = (GridSampler);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/PerspectiveTransform.java}
 *
 * @author Tatsuya Yamamoto
 */
var PerspectiveTransform = (function () {
    function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13, a23, a33) {
        this.a11 = a11;
        this.a12 = a12;
        this.a13 = a13;
        this.a21 = a21;
        this.a22 = a22;
        this.a23 = a23;
        this.a31 = a31;
        this.a32 = a32;
        this.a33 = a33;
    }
    PerspectiveTransform.quadrilateralToQuadrilateral = function (x0, y0, x1, y1, x2, y2, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
        var qToS = PerspectiveTransform.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
        var sToQ = PerspectiveTransform.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
        return sToQ.times(qToS);
    };
    ;
    PerspectiveTransform.prototype.transformPoints = function (points) {
        var max = points.length;
        var a11 = this.a11;
        var a12 = this.a12;
        var a13 = this.a13;
        var a21 = this.a21;
        var a22 = this.a22;
        var a23 = this.a23;
        var a31 = this.a31;
        var a32 = this.a32;
        var a33 = this.a33;
        for (var i = 0; i < max; i += 2) {
            var x = points[i];
            var y = points[i + 1];
            var denominator = a13 * x + a23 * y + a33;
            points[i] = (a11 * x + a21 * y + a31) / denominator;
            points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
        }
    };
    ;
    PerspectiveTransform.squareToQuadrilateral = function (x0, y0, x1, y1, x2, y2, x3, y3) {
        var dx3 = x0 - x1 + x2 - x3;
        var dy3 = y0 - y1 + y2 - y3;
        if (dx3 == 0.0 && dy3 == 0.0) {
            return new PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0.0, 0.0, 1.0);
        }
        else {
            var dx1 = x1 - x2;
            var dx2 = x3 - x2;
            var dy1 = y1 - y2;
            var dy2 = y3 - y2;
            var denominator = dx1 * dy2 - dx2 * dy1;
            var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
            var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
            return new PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1.0);
        }
    };
    PerspectiveTransform.quadrilateralToSquare = function (x0, y0, x1, y1, x2, y2, x3, y3) {
        // Here, the adjoint serves as the inverse:
        return PerspectiveTransform.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
    };
    PerspectiveTransform.prototype.buildAdjoint = function () {
        // Adjoint is the transpose of the cofactor matrix:
        return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
    };
    ;
    PerspectiveTransform.prototype.times = function (other) {
        return new PerspectiveTransform(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
    };
    ;
    return PerspectiveTransform;
}());
/* harmony default export */ __webpack_exports__["a"] = (PerspectiveTransform);
;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenericGFPoly__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GenericGF__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_ReedSolomonError__ = __webpack_require__(21);



/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/common/reedsolomon/ReedSolomonDecoder.java}
 *
 * @author Tatsuya Yamamoto
 */
var ReedSolomonDecoder = (function () {
    function ReedSolomonDecoder(field) {
        this._field = field;
    }
    /**
     * <p>Decodes given set of received codewords, which include both data and error-correction
     * codewords. Really, this means it uses Reed-Solomon to detect and correct errors, in-place,
     * in the input.</p>
     *
     * @param received data and error-correction codewords
     * @param twoS number of error-correction codewords available
     * @throws ReedSolomonException if decoding fails for any reason
     */
    ReedSolomonDecoder.prototype.decode = function (received, twoS) {
        var poly = new __WEBPACK_IMPORTED_MODULE_0__GenericGFPoly__["a" /* default */](this._field, received);
        var syndromeCoefficients = [];
        var noError = true;
        for (var i = 0; i < twoS; i++) {
            var evaluate = poly.evaluateAt(this._field.exp(i + this._field.generatorBase));
            syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evaluate;
            if (evaluate != 0) {
                noError = false;
            }
        }
        if (noError) {
            return;
        }
        var syndrome = new __WEBPACK_IMPORTED_MODULE_0__GenericGFPoly__["a" /* default */](this._field, syndromeCoefficients);
        var sigmaOmega = this.runEuclideanAlgorithm(this._field.buildMonomial(twoS, 1), syndrome, twoS);
        var sigma = sigmaOmega[0];
        var omega = sigmaOmega[1];
        var errorLocations = this.findErrorLocations(sigma);
        var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
        for (var i = 0; i < errorLocations.length; i++) {
            var position = received.length - 1 - this._field.log(errorLocations[i]);
            if (position < 0) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_ReedSolomonError__["a" /* default */]("Bad error location");
            }
            received[position] = __WEBPACK_IMPORTED_MODULE_1__GenericGF__["a" /* default */].addOrSubtract(received[position], errorMagnitudes[i]);
        }
    };
    ;
    ReedSolomonDecoder.prototype.runEuclideanAlgorithm = function (a, b, R) {
        if (a.degree < b.degree) {
            var temp = a;
            a = b;
            b = temp;
        }
        var rLast = a;
        var r = b;
        var tLast = this._field.zero;
        var t = this._field.one;
        while (r.degree >= R / 2) {
            var rLastLast = rLast;
            var tLastLast = tLast;
            rLast = r;
            tLast = t;
            if (rLast.isZero()) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_ReedSolomonError__["a" /* default */]("r_{i-1} was zero");
            }
            r = rLastLast;
            var q = this._field.zero;
            var denominatorLeadingTerm = rLast.getCoefficient(rLast.degree);
            var dltInverse = this._field.inverse(denominatorLeadingTerm);
            while (r.degree >= rLast.degree && !r.isZero()) {
                var degreeDiff = r.degree - rLast.degree;
                var scale = this._field.multiply(r.getCoefficient(r.degree), dltInverse);
                q = q.addOrSubtract(this._field.buildMonomial(degreeDiff, scale));
                r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
            }
            t = q.multiply(tLast).addOrSubtract(tLastLast);
            if (r.degree >= rLast.degree) {
                throw new Error("Division algorithm failed to reduce polynomial?");
            }
        }
        var sigmaTildeAtZero = t.getCoefficient(0);
        if (sigmaTildeAtZero == 0) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_ReedSolomonError__["a" /* default */]("sigmaTilde(0) was zero");
        }
        var inverse = this._field.inverse(sigmaTildeAtZero);
        var sigma = t.multiplyWithScalar(inverse);
        var omega = r.multiplyWithScalar(inverse);
        return [sigma, omega];
    };
    ;
    ReedSolomonDecoder.prototype.findErrorLocations = function (errorLocator) {
        var numErrors = errorLocator.degree;
        if (numErrors == 1) {
            return [errorLocator.getCoefficient(1)];
        }
        var result = [];
        var e = 0;
        for (var i = 1; i < this._field.size && e < numErrors; i++) {
            if (errorLocator.evaluateAt(i) == 0) {
                result[e] = this._field.inverse(i);
                e++;
            }
        }
        if (e != numErrors) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_ReedSolomonError__["a" /* default */]("Error locator degree does not match number of roots");
        }
        return result;
    };
    ;
    ReedSolomonDecoder.prototype.findErrorMagnitudes = function (errorEvaluator, errorLocations) {
        var s = errorLocations.length;
        var result = [];
        for (var i = 0; i < s; i++) {
            var xiInverse = this._field.inverse(errorLocations[i]);
            var denominator = 1;
            for (var j = 0; j < s; j++) {
                if (i != j) {
                    var term = this._field.multiply(errorLocations[j], xiInverse);
                    var termPlus1 = (term & 0x1) == 0 ? term | 1 : term & ~1;
                    denominator = this._field.multiply(denominator, termPlus1);
                }
            }
            result[i] = this._field.multiply(errorEvaluator.evaluateAt(xiInverse), this._field.inverse(denominator));
            if (this._field.generatorBase != 0) {
                result[i] = this._field.multiply(result[i], xiInverse);
            }
        }
        return result;
    };
    ;
    return ReedSolomonDecoder;
}());
/* harmony default export */ __webpack_exports__["a"] = (ReedSolomonDecoder);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KXingError__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ChecksumError = (function (_super) {
    __extends(ChecksumError, _super);
    function ChecksumError(message) {
        var _this = _super.call(this) || this;
        _this._name = 'ChecksumError';
        _this._message = message;
        return _this;
    }
    Object.defineProperty(ChecksumError.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChecksumError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return ChecksumError;
}(__WEBPACK_IMPORTED_MODULE_0__KXingError__["a" /* KXingError */]));
/* harmony default export */ __webpack_exports__["a"] = (ChecksumError);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KXingError__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ReedSolomonError = (function (_super) {
    __extends(ReedSolomonError, _super);
    function ReedSolomonError(message) {
        var _this = _super.call(this) || this;
        _this._name = 'ReedSolomonError';
        _this._message = message;
        return _this;
    }
    Object.defineProperty(ReedSolomonError.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReedSolomonError.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return ReedSolomonError;
}(__WEBPACK_IMPORTED_MODULE_0__KXingError__["a" /* KXingError */]));
/* harmony default export */ __webpack_exports__["a"] = (ReedSolomonError);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KXing__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KXing", function() { return __WEBPACK_IMPORTED_MODULE_0__KXing__["a"]; });



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decode_QRDecoder__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Result__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detector_QRDetector__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BarcodeFormat__ = __webpack_require__(12);




var QRCodeReader = (function () {
    function QRCodeReader() {
    }
    /**
     * Locates and decodes a QR code in an image.
     */
    QRCodeReader.prototype.decode = function (image) {
        var detector = new __WEBPACK_IMPORTED_MODULE_2__detector_QRDetector__["a" /* default */](image);
        var detectedCode = detector.detect();
        var decoder = new __WEBPACK_IMPORTED_MODULE_0__decode_QRDecoder__["a" /* default */]();
        var decoderResult = decoder.decode(detectedCode);
        return new __WEBPACK_IMPORTED_MODULE_1__Result__["a" /* default */](decoderResult.text, decoderResult.rawBytes, __WEBPACK_IMPORTED_MODULE_3__BarcodeFormat__["a" /* BarcodeFormat */].QR_CODE);
    };
    return QRCodeReader;
}());
/* harmony default export */ __webpack_exports__["a"] = (QRCodeReader);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_Version__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_FormatInformation__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_FormatError__ = __webpack_require__(6);



/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/BitMatrixParser.java}
 *
 * @author Tatsuya Yamamoto
 */
var BitMatrixParser = (function () {
    function BitMatrixParser(target) {
        var dimension = target.height;
        if (dimension < 21 || (dimension & 0x03) != 1) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
        }
        this._target = target;
    }
    /**
     * <p>Reads format information from one of its two locations within the QR Code.</p>
     *
     * @return {@link FormatInformation} encapsulating the QR Code's format info
     * @throws FormatException if both format information locations cannot be parsed as
     * the valid encoding of format information
     */
    BitMatrixParser.prototype.readFormatInformation = function () {
        if (this._parsedFormatInfo != null) {
            return this._parsedFormatInfo;
        }
        // Read top-left format info bits
        var formatInfoBits1 = 0;
        for (var i = 0; i < 6; i++) {
            formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
        }
        // .. and skip a bit in the timing pattern ...
        formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
        formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
        formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
        // .. and skip a bit in the timing pattern ...
        for (var j = 5; j >= 0; j--) {
            formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
        }
        // Read the top-right/bottom-left pattern too
        var dimension = this._target.height;
        var formatInfoBits2 = 0;
        var jMin = dimension - 7;
        for (var j = dimension - 1; j >= jMin; j--) {
            formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
        }
        for (var i = dimension - 8; i < dimension; i++) {
            formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
        }
        this._parsedFormatInfo = __WEBPACK_IMPORTED_MODULE_1__format_FormatInformation__["a" /* default */].decodeFormatInformation(formatInfoBits1, formatInfoBits2);
        if (this._parsedFormatInfo != null) {
            return this._parsedFormatInfo;
        }
        throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
    };
    ;
    /**
     * <p>Reads version information from one of its two locations within the QR Code.</p>
     *
     * @return {@link Version} encapsulating the QR Code's version
     * @throws FormatException if both version information locations cannot be parsed as
     * the valid encoding of version information
     */
    BitMatrixParser.prototype.readVersion = function () {
        if (this._parsedVersion != null) {
            return this._parsedVersion;
        }
        var dimension = this._target.height;
        var provisionalVersion = (dimension - 17) / 4;
        if (provisionalVersion <= 6) {
            return __WEBPACK_IMPORTED_MODULE_0__format_Version__["a" /* default */].getVersionForNumber(provisionalVersion);
        }
        // Read top-right version info: 3 wide by 6 tall
        var versionBits = 0;
        var ijMin = dimension - 11;
        for (var j = 5; j >= 0; j--) {
            for (var i = dimension - 9; i >= ijMin; i--) {
                versionBits = this.copyBit(i, j, versionBits);
            }
        }
        var theParsedVersion = __WEBPACK_IMPORTED_MODULE_0__format_Version__["a" /* default */].decodeVersionInformation(versionBits);
        if (theParsedVersion != null && theParsedVersion.dimensionForVersion == dimension) {
            this._parsedVersion = theParsedVersion;
            return theParsedVersion;
        }
        // Hmm, failed. Try bottom left: 6 wide by 3 tall
        versionBits = 0;
        for (var i = 5; i >= 0; i--) {
            for (var j = dimension - 9; j >= ijMin; j--) {
                versionBits = this.copyBit(i, j, versionBits);
            }
        }
        theParsedVersion = __WEBPACK_IMPORTED_MODULE_0__format_Version__["a" /* default */].decodeVersionInformation(versionBits);
        if (theParsedVersion != null && theParsedVersion.dimensionForVersion == dimension) {
            this._parsedVersion = theParsedVersion;
            return theParsedVersion;
        }
        throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
    };
    BitMatrixParser.prototype.copyBit = function (i, j, versionBits) {
        return this._target.getBit(i, j) ? (versionBits << 1) | 0x1 : versionBits << 1;
    };
    /**
     * <p>Reads the bits in the {@link BitMatrix} representing the finder pattern in the
     * correct order in order to reconstruct the codewords bytes contained within the
     * QR Code.</p>
     *
     * @return bytes encoded within the QR Code
     * @throws FormatException if the exact number of bytes expected is not read
     */
    BitMatrixParser.prototype.readCodewords = function () {
        var formatInformation = this.readFormatInformation();
        var version = this.readVersion();
        // Get the data mask for the format used in this QR Code. This will exclude
        // some bits from reading as we wind through the bit matrix.
        var dataMask = formatInformation.dataMask;
        var dimension = this._target.height;
        dataMask.unmaskBitMatrix(this._target, dimension);
        var functionPattern = version.buildFunctionPattern();
        var readingUp = true;
        var result = [];
        var resultOffset = 0;
        var currentByte = 0;
        var bitsRead = 0;
        // Read columns in pairs, from right to left
        for (var j = dimension - 1; j > 0; j -= 2) {
            if (j == 6) {
                // Skip whole column with vertical alignment pattern;
                // saves time and makes the other code proceed more cleanly
                j--;
            }
            // Read alternatingly from bottom to top then top to bottom
            for (var count = 0; count < dimension; count++) {
                var i = readingUp ? dimension - 1 - count : count;
                for (var col = 0; col < 2; col++) {
                    // Ignore bits covered by the function pattern
                    if (!functionPattern.getBit(j - col, i)) {
                        // Read a bit
                        bitsRead++;
                        currentByte <<= 1;
                        if (this._target.getBit(j - col, i)) {
                            currentByte |= 1;
                        }
                        // If we've made a whole byte, save it off
                        if (bitsRead == 8) {
                            result[resultOffset++] = Math.floor(currentByte);
                            bitsRead = 0;
                            currentByte = 0;
                        }
                    }
                }
            }
            readingUp = !readingUp;
        }
        if (resultOffset != version.totalCodewords) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
        }
        return result;
    };
    ;
    return BitMatrixParser;
}());
/* harmony default export */ __webpack_exports__["a"] = (BitMatrixParser);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__ = __webpack_require__(0);

/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/DataBlock.java}
 *
 * @author Tatsuya Yamamoto
 */
var DataBlock = (function () {
    function DataBlock(numDataCodewords, codewords) {
        this._numDataCodewords = numDataCodewords;
        this._codewords = codewords;
    }
    Object.defineProperty(DataBlock.prototype, "numDataCodewords", {
        get: function () {
            return this._numDataCodewords;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataBlock.prototype, "codewords", {
        get: function () {
            return this._codewords;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * <p>When QR Codes use multiple data blocks, they are actually interleaved.
     * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
     * method will separate the data into original blocks.</p>
     *
     * @param rawCodewords bytes as read directly from the QR Code
     * @param version version of the QR Code
     * @param ecLevel error-correction level of the QR Code
     * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
     *         QR Code
     */
    DataBlock.getDataBlocks = function (rawCodewords, version, ecLevel) {
        if (rawCodewords.length != version.totalCodewords) {
            throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]();
        }
        // Figure out the number and size of data blocks used by this version and
        // error correction level
        var ecBlocks = version.getECBlocksForLevel(ecLevel);
        // First count the total number of data blocks
        var totalBlocks = 0;
        var ecBlockArray = ecBlocks.ecBlocks;
        for (var i = 0; i < ecBlockArray.length; i++) {
            totalBlocks += ecBlockArray[i].count;
        }
        // Now establish DataBlocks of the appropriate size and number of data codewords
        var result = [];
        var numResultBlocks = 0;
        for (var j = 0; j < ecBlockArray.length; j++) {
            var ecBlock = ecBlockArray[j];
            for (var i = 0; i < ecBlock.count; i++) {
                var numDataCodewords = ecBlock.dataCodewords;
                var numBlockCodewords = ecBlocks.ecCodewordsPerBlock + numDataCodewords;
                result[numResultBlocks++] = new DataBlock(numDataCodewords, new Array(numBlockCodewords));
            }
        }
        // All blocks have the same amount of data, except that the last n
        // (where n may be 0) have 1 more byte. Figure out where these start.
        var shorterBlocksTotalCodewords = result[0].codewords.length;
        var longerBlocksStartAt = result.length - 1;
        while (longerBlocksStartAt >= 0) {
            var numCodewords = result[longerBlocksStartAt].codewords.length;
            if (numCodewords == shorterBlocksTotalCodewords) {
                break;
            }
            longerBlocksStartAt--;
        }
        longerBlocksStartAt++;
        var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ecCodewordsPerBlock;
        // The last elements of result may be 1 element longer;
        // first fill out as many elements as all of them have
        var rawCodewordsOffset = 0;
        for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
                result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
            }
        }
        // Fill out the last data block in the longer ones
        for (var j = longerBlocksStartAt; j < numResultBlocks; j++) {
            result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
        }
        // Now add in error correction blocks
        var max = result[0].codewords.length;
        for (var i = shorterBlocksNumDataCodewords; i < max; i++) {
            for (var j = 0; j < numResultBlocks; j++) {
                var iOffset = j < longerBlocksStartAt ? i : i + 1;
                result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
            }
        }
        return result;
    };
    return DataBlock;
}());
/* harmony default export */ __webpack_exports__["a"] = (DataBlock);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_BitSource__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_DecoderResult__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_FormatError__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format_Mode__ = __webpack_require__(35);




/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/DecodedBitStreamParser.java}
 *
 * @author Tatsuya Yamamoto
 */
var DecodedBitStreamParser = (function () {
    function DecodedBitStreamParser() {
    }
    DecodedBitStreamParser.decode = function (bytes, version, ecLevel) {
        var bits = new __WEBPACK_IMPORTED_MODULE_0__common_BitSource__["a" /* default */](bytes);
        var result = '';
        var byteSegments = [];
        var symbolSequence = -1;
        var parityData = -1;
        var fc1InEffect = false;
        var mode;
        do {
            // While still another segment to read...
            if (bits.available() < 4) {
                // OK, assume we're done. Really, a TERMINATOR mode should have been recorded here
                mode = new __WEBPACK_IMPORTED_MODULE_3__format_Mode__["a" /* TerminatorMode */]();
            }
            else {
                mode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__format_Mode__["b" /* forBits */])(bits.readBits(4)); // mode is encoded by 4 bits
            }
            switch (mode.bits) {
                case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["a" /* TerminatorMode */].BITS:
                case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["c" /* Fnc1FirstPositionMode */].BITS:
                case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["d" /* Fnc1SecondPositionMode */].BITS:
                case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["e" /* StructuredAppendMode */].BITS:
                case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["f" /* EciMode */].BITS:
                case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["g" /* HanziMode */].BITS:
                    break;
                default:
                    // "Normal" QR code modes:
                    // How many characters will follow, encoded in this mode?
                    var count = bits.readBits(mode.getCharacterCountBits(version));
                    switch (mode.bits) {
                        case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["h" /* NumericMode */].BITS:
                            result += DecodedBitStreamParser.decodeNumericSegment(bits, count);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["i" /* AlphaNumericMode */].BITS:
                            result += DecodedBitStreamParser.decodeAlphanumericSegment(bits, count, fc1InEffect);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["j" /* ByteMode */].BITS:
                            result += DecodedBitStreamParser.decodeByteSegment(bits, count, byteSegments);
                            break;
                        case __WEBPACK_IMPORTED_MODULE_3__format_Mode__["k" /* KanjiMode */].BITS:
                            result += DecodedBitStreamParser.decodeKanjiSegment(bits, count);
                            break;
                        default:
                            throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
                    }
                    break;
            }
        } while (mode.bits != __WEBPACK_IMPORTED_MODULE_3__format_Mode__["a" /* TerminatorMode */].BITS);
        return new __WEBPACK_IMPORTED_MODULE_1__common_DecoderResult__["a" /* default */](bytes, result, byteSegments.length == 0 ? null : byteSegments, ecLevel, symbolSequence, parityData);
    };
    DecodedBitStreamParser.decodeKanjiSegment = function (bits, count) {
        var result = '';
        // Don't crash trying to read more bits than we have available.
        if (count * 13 > bits.available()) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
        }
        // Each character will require 2 bytes. Read the characters as 2-byte pairs
        // and decode as Shift_JIS afterwards
        while (count > 0) {
            // Each 13 bits encodes a 2-byte character
            var twoBytes = bits.readBits(13);
            var assembledTwoBytes = ((twoBytes / 0x0C0) << 8) | (twoBytes % 0x0C0);
            if (assembledTwoBytes < 0x01F00) {
                // In the 0x8140 to 0x9FFC range
                assembledTwoBytes += 0x08140;
            }
            else {
                // In the 0xE040 to 0xEBBF range
                assembledTwoBytes += 0x0C140;
            }
            result += String.fromCharCode(assembledTwoBytes);
            count--;
        }
        return result;
    };
    DecodedBitStreamParser.decodeByteSegment = function (bits, count, byteSegments) {
        var result = '';
        // Don't crash trying to read more bits than we have available.
        if (8 * count > bits.available()) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
        }
        var readBytes = [];
        for (var i = 0; i < count; i++) {
            readBytes[i] = Math.floor(bits.readBits(8));
            result += String.fromCharCode(readBytes[i]);
        }
        byteSegments.push(readBytes);
        return result;
    };
    DecodedBitStreamParser.toAlphaNumericChar = function (value) {
        if (value >= DecodedBitStreamParser.ALPHANUMERIC_CHARS.length) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
        }
        return DecodedBitStreamParser.ALPHANUMERIC_CHARS[Math.floor(value)];
    };
    DecodedBitStreamParser.decodeAlphanumericSegment = function (bits, count, fc1InEffect) {
        var result = '';
        // Read two characters at a time
        var start = result.length;
        while (count > 1) {
            if (bits.available() < 11) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            var nextTwoCharsBits = bits.readBits(11);
            result += DecodedBitStreamParser.toAlphaNumericChar(nextTwoCharsBits / 45);
            result += DecodedBitStreamParser.toAlphaNumericChar(nextTwoCharsBits % 45);
            count -= 2;
        }
        if (count == 1) {
            // special case: one character left
            if (bits.available() < 6) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            result += DecodedBitStreamParser.toAlphaNumericChar(bits.readBits(6));
        }
        // See section 6.4.8.1, 6.4.8.2
        if (fc1InEffect) {
            // We need to massage the result a bit if in an FNC1 mode:
            for (var i = start; i < result.length; i++) {
                if (result.charAt(i) == '%') {
                    if (i < result.length - 1 && result.charAt(i + 1) == '%') {
                        // %% is rendered as %
                        var firstHalf = result.slice(0, i);
                        var lastHalf = result.slice(i + 2, result.length);
                        result = firstHalf + lastHalf;
                        // result.deleteCharAt(i + 1);
                    }
                    else {
                        // In alpha mode, % should be converted to FNC1 separator 0x1D
                        // result.setCharAt(i, (char)0x1D);
                        var firstHalf = result.slice(0, i - i);
                        var lastHalf = result.slice(i + 1, result.length);
                        result = firstHalf + String.fromCharCode(0x1D) + lastHalf;
                    }
                }
            }
        }
        return result;
    };
    DecodedBitStreamParser.decodeNumericSegment = function (bits, count) {
        var result = '';
        // Read three digits at a time
        while (count >= 3) {
            // Each 10 bits encodes three digits
            if (bits.available() < 10) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            var threeDigitsBits = bits.readBits(10);
            if (threeDigitsBits >= 1000) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            result += DecodedBitStreamParser.toAlphaNumericChar(threeDigitsBits / 100);
            result += DecodedBitStreamParser.toAlphaNumericChar((threeDigitsBits / 10) % 10);
            result += DecodedBitStreamParser.toAlphaNumericChar(threeDigitsBits % 10);
            count -= 3;
        }
        if (count == 2) {
            // Two digits left over to read, encoded in 7 bits
            if (bits.available() < 7) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            var twoDigitsBits = bits.readBits(7);
            if (twoDigitsBits >= 100) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            result += DecodedBitStreamParser.toAlphaNumericChar(twoDigitsBits / 10);
            result += DecodedBitStreamParser.toAlphaNumericChar(twoDigitsBits % 10);
        }
        else if (count == 1) {
            // One digit left over to read
            if (bits.available() < 4) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            var digitBits = bits.readBits(4);
            if (digitBits >= 10) {
                throw new __WEBPACK_IMPORTED_MODULE_2__error_FormatError__["a" /* default */]();
            }
            result += DecodedBitStreamParser.toAlphaNumericChar(digitBits);
        }
        return result;
    };
    return DecodedBitStreamParser;
}());
/* harmony default export */ __webpack_exports__["a"] = (DecodedBitStreamParser);
/**
 * See ISO 18004:2006, 6.4.4 Table 5
 */
DecodedBitStreamParser.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split('');


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataBlock__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BitMatrixParser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_reedsolomon_ReedSolomonDecoder__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_reedsolomon_GenericGF__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DecodedBitStreamParser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_ChecksumError__ = __webpack_require__(20);






/*
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/Decoder.java}
 *
 * @author Tatsuya Yamamoto
 */
var QRDecoder = (function () {
    function QRDecoder() {
        this.decoder = new __WEBPACK_IMPORTED_MODULE_2__common_reedsolomon_ReedSolomonDecoder__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__common_reedsolomon_GenericGF__["a" /* default */].QR_CODE_FIELD_256);
    }
    /**
     * <p>Decodes a Data Matrix Code represented as a {@link BitMatrix}. A 1 or "true" is taken
     * to mean a black module.</p>
     *
     * @param bits booleans representing white/black Data Matrix Code modules
     * @return text and bytes encoded within the Data Matrix Code
     * @throws FormatException if the Data Matrix Code cannot be decoded
     * @throws ChecksumException if error correction fails
     */
    QRDecoder.prototype.decode = function (bits) {
        var _this = this;
        // Construct a parser and read version, error-correction level
        var bitMatrixParser = new __WEBPACK_IMPORTED_MODULE_1__BitMatrixParser__["a" /* default */](bits);
        var version = bitMatrixParser.readVersion();
        var ecLevel = bitMatrixParser.readFormatInformation().errorCorrectionLevel;
        // Read codewords
        var codewords = bitMatrixParser.readCodewords();
        // Separate into data blocks
        var dataBlocks = __WEBPACK_IMPORTED_MODULE_0__DataBlock__["a" /* default */].getDataBlocks(codewords, version, ecLevel);
        var resultBytes = [];
        var resultOffset = 0;
        // Error-correct and copy data blocks together into a stream of bytes
        dataBlocks.forEach(function (dataBlock) {
            var codewordBytes = dataBlock.codewords;
            var numDataCodewords = dataBlock.numDataCodewords;
            _this.correctErrors(codewordBytes, numDataCodewords);
            for (var i = 0; i < numDataCodewords; i++) {
                resultBytes[resultOffset++] = codewordBytes[i];
            }
        });
        // Decode the contents of that stream of bytes
        return __WEBPACK_IMPORTED_MODULE_4__DecodedBitStreamParser__["a" /* default */].decode(resultBytes, version, ecLevel);
    };
    /**
     * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
     * correct the errors in-place using Reed-Solomon error correction.</p>
     *
     * @param codewordBytes data and error correction codewords
     * @param numDataCodewords number of codewords that are data bytes
     * @throws ChecksumException if error correction fails
     */
    QRDecoder.prototype.correctErrors = function (codewordBytes, numDataCodewords) {
        var numCodewords = codewordBytes.length;
        // First read into an array of ints
        var codewordsInts = [];
        for (var i = 0; i < numCodewords; i++) {
            codewordsInts[i] = codewordBytes[i] & 0xFF;
        }
        try {
            this.decoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
        }
        catch (ignored) {
            throw new __WEBPACK_IMPORTED_MODULE_5__error_ChecksumError__["a" /* default */]();
        }
        // Copy back into array of bytes -- only need to worry about the bytes that were data
        // We don't care about errors in the error-correction codewords
        for (var i = 0; i < numDataCodewords; i++) {
            codewordBytes[i] = codewordsInts[i];
        }
    };
    return QRDecoder;
}());
/* harmony default export */ __webpack_exports__["a"] = (QRDecoder);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_AlignmentPattern__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_NotFoundError__ = __webpack_require__(3);


/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/detector/AlignmentPatternFinder.java}
 *
 * @author Tatsuya Yamamoto
 */
var AlignmentPatternFinder = (function () {
    /**
     * <p>Creates a finder that will look in a portion of the whole image.</p>
     *
     * @param bits          image to search
     * @param imageWidth    width of image to search
     * @param imageHeight   height of image to search
     * @param startX        left column from which to start searching
     * @param startY        top row from which to start searching
     * @param width         width of region to search
     * @param height        height of region to search
     * @param moduleSize    estimated module size so far
     */
    function AlignmentPatternFinder(bits, imageWidth, imageHeight, startX, startY, width, height, moduleSize) {
        this.possibleCenters = [];
        this._bits = bits;
        this._imageWidth = imageWidth;
        this._imageHeight = imageHeight;
        this._startX = startX;
        this._startY = startY;
        this._width = width;
        this._height = height;
        this._moduleSize = moduleSize;
    }
    /**
     * <p>This method attempts to find the bottom-right alignment pattern in the image. It is a bit messy since
     * it's pretty performance-critical and so is written to be fast foremost.</p>
     *
     * @return {@link AlignmentPattern} if found
     * @throws NotFoundException if not found
     */
    AlignmentPatternFinder.prototype.find = function () {
        var startX = this._startX;
        var height = this._height;
        var maxJ = startX + this._width;
        var middleI = this._startY + (height >> 1);
        // We are looking for black/white/black modules in 1:1:1 ratio;
        // this tracks the number of black/white/black modules seen so far
        var stateCount = [];
        for (var iGen = 0; iGen < height; iGen++) {
            // Search from middle outwards
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            var i = middleI + ((iGen & 0x01) == 0 ? ((iGen + 1) >> 1) : -((iGen + 1) >> 1));
            var j = startX;
            // Burn off leading white pixels before anything else; if we start in the middle of
            // a white run, it doesn't make sense to count its length, since we don't know if the
            // white run continued to the left of the start point
            while (j < maxJ && !this._bits[j + this._imageWidth * i]) {
                j++;
            }
            var currentState = 0;
            while (j < maxJ) {
                if (this._bits[j + i * this._imageWidth]) {
                    // Black pixel
                    if (currentState == 1) {
                        stateCount[1]++;
                    }
                    else {
                        // Counting white pixels
                        if (currentState == 2) {
                            if (this.foundPatternCross(stateCount)) {
                                var confirmed = this.handlePossibleCenter(stateCount, i, j);
                                if (confirmed != null) {
                                    return confirmed;
                                }
                            }
                            stateCount[0] = stateCount[2];
                            stateCount[1] = 1;
                            stateCount[2] = 0;
                            currentState = 1;
                        }
                        else {
                            stateCount[++currentState]++;
                        }
                    }
                }
                else {
                    if (currentState == 1) {
                        currentState++;
                    }
                    stateCount[currentState]++;
                }
                j++;
            }
            if (this.foundPatternCross(stateCount)) {
                var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
                if (confirmed != null) {
                    return confirmed;
                }
            }
        }
        // Hmm, nothing we saw was observed and confirmed twice. If we had
        // any guess at all, return it.
        if (this.possibleCenters.length != 0) {
            return this.possibleCenters[0];
        }
        throw new __WEBPACK_IMPORTED_MODULE_1__error_NotFoundError__["a" /* default */]("Cound not find an AlignmentPattern.");
    };
    /**
     * Given a count of black/white/black pixels just seen and an end position,
     * figures the location of the center of this black/white/black run.
     */
    AlignmentPatternFinder.centerFromEnd = function (stateCount, end) {
        return (end - stateCount[2]) - stateCount[1] / 2.0;
    };
    /**
     * @param stateCount count of black/white/black pixels just read
     * @return true iff the proportions of the counts is close enough to the 1/1/1 ratios
     *         used by alignment patterns to be considered a match
     */
    AlignmentPatternFinder.prototype.foundPatternCross = function (stateCount) {
        var moduleSize = this._moduleSize;
        var maxVariance = moduleSize / 2.0;
        for (var i = 0; i < 3; i++) {
            if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
                return false;
            }
        }
        return true;
    };
    /**
     * <p>After a horizontal scan finds a potential alignment pattern, this method
     * "cross-checks" by scanning down vertically through the center of the possible
     * alignment pattern to see if the same proportion is detected.</p>
     *
     * @param startI row where an alignment pattern was detected
     * @param centerJ center of the section that appears to cross an alignment pattern
     * @param maxCount maximum reasonable number of modules that should be
     * observed in any reading state, based on the results of the horizontal scan
     * @param originalStateCountTotal
     * @return vertical center of alignment pattern, or {@link NaN} if not found
     */
    AlignmentPatternFinder.prototype.crossCheckVertical = function (startI, centerJ, maxCount, originalStateCountTotal) {
        var maxI = this._imageHeight;
        var stateCount = [0, 0, 0];
        stateCount[0] = 0;
        stateCount[1] = 0;
        stateCount[2] = 0;
        // Start counting up from center
        var i = startI;
        while (i >= 0 && this._bits[centerJ + i * this._imageWidth] && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
        }
        // If already too many modules in this state or ran off the edge:
        if (i < 0 || stateCount[1] > maxCount) {
            return NaN;
        }
        while (i >= 0 && !this._bits[centerJ + i * this._imageWidth] && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
        }
        if (stateCount[0] > maxCount) {
            return NaN;
        }
        // Now also count down from center
        i = startI + 1;
        while (i < maxI && this._bits[centerJ + i * this._imageWidth] && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i++;
        }
        if (i == maxI || stateCount[1] > maxCount) {
            return NaN;
        }
        while (i < maxI && !this._bits[centerJ + i * this._imageWidth] && stateCount[2] <= maxCount) {
            stateCount[2]++;
            i++;
        }
        if (stateCount[2] > maxCount) {
            return NaN;
        }
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return NaN;
        }
        return this.foundPatternCross(stateCount) ? AlignmentPatternFinder.centerFromEnd(stateCount, i) : NaN;
    };
    ;
    /**
     * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
     * cross check with a vertical scan, and if successful, will see if this pattern had been
     * found on a previous horizontal scan. If so, we consider it confirmed and conclude we have
     * found the alignment pattern.</p>
     *
     * @param stateCount reading state module counts from horizontal scan
     * @param i row where alignment pattern may be found
     * @param j end of possible alignment pattern in row
     * @return {@link AlignmentPattern} if we have found the same pattern twice, or null if not
     */
    AlignmentPatternFinder.prototype.handlePossibleCenter = function (stateCount, i, j) {
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
        var centerJ = AlignmentPatternFinder.centerFromEnd(stateCount, j);
        var centerI = this.crossCheckVertical(i, Math.floor(centerJ), 2 * stateCount[1], stateCountTotal);
        if (!isNaN(centerI)) {
            var estimatedModuleSize_1 = (stateCount[0] + stateCount[1] + stateCount[2]) / 3.0;
            this.possibleCenters.forEach(function (center) {
                // Look for about the same center and module size:
                if (center.aboutEquals(estimatedModuleSize_1, centerI, centerJ)) {
                    return center.combineEstimate(centerI, centerJ, estimatedModuleSize_1);
                }
            });
            // Hadn't found this before; save it
            var point = new __WEBPACK_IMPORTED_MODULE_0__format_AlignmentPattern__["a" /* default */](centerJ, centerI, estimatedModuleSize_1);
            this.possibleCenters.push(point);
        }
        return null;
    };
    return AlignmentPatternFinder;
}());
/* harmony default export */ __webpack_exports__["a"] = (AlignmentPatternFinder);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_FinderPattern__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_NotFoundError__ = __webpack_require__(3);
/* unused harmony export FinderPatternFinderResult */



var MIN_SKIP = 3;
var MAX_MODULES = 57;
var CENTER_QUORUM = 2;
var FinderPatternFinderResult = (function () {
    function FinderPatternFinderResult(topLeft, topRight, bottomLeft) {
        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomLeft = bottomLeft;
    }
    Object.defineProperty(FinderPatternFinderResult.prototype, "topLeft", {
        get: function () {
            return this._topLeft;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinderPatternFinderResult.prototype, "topRight", {
        get: function () {
            return this._topRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinderPatternFinderResult.prototype, "bottomLeft", {
        get: function () {
            return this._bottomLeft;
        },
        enumerable: true,
        configurable: true
    });
    return FinderPatternFinderResult;
}());

/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/detector/FinderPatternFinder.java}
 *
 * @author Tatsuya Yamamoto
 */
var FinderPatternFinder = (function () {
    function FinderPatternFinder(bits, width, height) {
        this._possibleCenters = [];
        this._hasSkipped = false;
        this._bits = bits;
        this._width = width;
        this._height = height;
    }
    FinderPatternFinder.prototype.find = function () {
        var imageHeigth = this._height;
        var imageWidth = this._width;
        var iSkip = Math.floor(imageHeigth * 0.25 * (1 / MAX_MODULES) * 3);
        if (iSkip < MIN_SKIP) {
            iSkip = MIN_SKIP;
        }
        var done = false;
        var stateCount = [];
        for (var i = iSkip - 1; i < imageHeigth && !done; i += iSkip) {
            // Get a row of black/white values
            stateCount[0] = 0; // beforeBlackArea
            stateCount[1] = 0; // beforeWhiteArea
            stateCount[2] = 0; // centerBlackArea
            stateCount[3] = 0; // afterWhiteArea
            stateCount[4] = 0; // afterBlackArea
            var currentState = 0;
            for (var horizontalIndex = 0; horizontalIndex < imageWidth; horizontalIndex++) {
                if (this._bits[horizontalIndex + i * this._width]) {
                    // Black pixel
                    // is white area?
                    if ((currentState & 1) == 1) {
                        currentState++;
                    }
                    stateCount[currentState]++;
                }
                else {
                    // White pixel
                    // is black area?
                    if ((currentState & 1) == 0) {
                        // is after black area?
                        if (currentState == 4) {
                            // A winner?
                            if (FinderPatternFinder.foundPatternCross(stateCount)) {
                                // Yes
                                if (this.handlePossibleCenter(stateCount, i, horizontalIndex)) {
                                    // Start examining every other line. Checking each line turned out to be too
                                    // expensive and didn't improve performance.
                                    iSkip = 2;
                                    if (this._hasSkipped) {
                                        done = this.haveMultiplyConfirmedCenters();
                                    }
                                    else {
                                        var rowSkip = this.findRowSkip();
                                        if (rowSkip > stateCount[2]) {
                                            // Skip rows between row of lower confirmed center
                                            // and top of presumed third confirmed center
                                            // but back up a bit to get a full chance of detecting
                                            // it, entire width of center of finder pattern
                                            // Skip by rowSkip, but back off by stateCount[2] (size of last center
                                            // of pattern we saw) to be conservative, and also back off by iSkip which
                                            // is about to be re-added
                                            i += rowSkip - stateCount[2] - iSkip;
                                            horizontalIndex = imageWidth - 1;
                                        }
                                    }
                                }
                                else {
                                    stateCount[0] = stateCount[2];
                                    stateCount[1] = stateCount[3];
                                    stateCount[2] = stateCount[4];
                                    stateCount[3] = 1;
                                    stateCount[4] = 0;
                                    currentState = 3;
                                    continue;
                                }
                                // Clear state to start looking again
                                currentState = 0;
                                stateCount[0] = 0;
                                stateCount[1] = 0;
                                stateCount[2] = 0;
                                stateCount[3] = 0;
                                stateCount[4] = 0;
                            }
                            else {
                                stateCount[0] = stateCount[2];
                                stateCount[1] = stateCount[3];
                                stateCount[2] = stateCount[4];
                                stateCount[3] = 1;
                                stateCount[4] = 0;
                                currentState = 3;
                            }
                        }
                        else {
                            stateCount[++currentState]++;
                        }
                    }
                    else {
                        stateCount[currentState]++;
                    }
                }
            }
        }
        var patternInfo = this.selectBestPatterns();
        var bestPatterns = FinderPatternFinder.orderBestPatterns(patternInfo);
        return new FinderPatternFinderResult(bestPatterns[1], bestPatterns[2], bestPatterns[0]);
    };
    ;
    /**
     * Given a count of black/white/black/white/black pixels just seen and an end position,
     * figures the location of the center of this run.
     */
    FinderPatternFinder.centerFromEnd = function (stateCount, end) {
        return (end - stateCount[4] - stateCount[3]) - stateCount[2] / 2.0;
    };
    /**
     * @param stateCount count of black/white/black/white/black pixels just read
     * @return true iff the proportions of the counts is close enough to the 1/1/3/1/1 ratios
     *         used by finder patterns to be considered a match
     */
    FinderPatternFinder.foundPatternCross = function (stateCount) {
        var totalModuleSize = 0;
        for (var i = 0; i < 5; i++) {
            var count = stateCount[i];
            if (count == 0) {
                return false;
            }
            totalModuleSize += count;
        }
        if (totalModuleSize < 7) {
            return false;
        }
        var moduleSize = totalModuleSize / 7.0;
        var maxVariance = moduleSize / 2;
        // Allow less than 50% variance from 1-1-3-1-1 proportions
        return Math.abs(moduleSize - stateCount[0]) < maxVariance
            && Math.abs(moduleSize - stateCount[1]) < maxVariance
            && Math.abs(3 * moduleSize - stateCount[2]) < 3 * maxVariance
            && Math.abs(moduleSize - stateCount[3]) < maxVariance
            && Math.abs(moduleSize - stateCount[4]) < maxVariance;
    };
    /**
     * <p>After a horizontal scan finds a potential finder pattern, this method
     * "cross-checks" by scanning down vertically through the center of the possible
     * finder pattern to see if the same proportion is detected.</p>
     *
     * @param startI row where a finder pattern was detected
     * @param centerJ center of the section that appears to cross a finder pattern
     * @param maxCount maximum reasonable number of modules that should be
     * observed in any reading state, based on the results of the horizontal scan
     * @param originalStateCountTotal
     * @return vertical center of finder pattern, or {@link NaN} if not found
     */
    FinderPatternFinder.prototype.crossCheckVertical = function (startI, centerJ, maxCount, originalStateCountTotal) {
        var image = this._bits;
        var imageHeigth = this._height;
        var stateCount = [0, 0, 0, 0, 0];
        // Start counting up from center
        var i = startI;
        while (i >= 0 && image[centerJ + i * this._width]) {
            stateCount[2]++;
            i--;
        }
        if (i < 0) {
            return NaN;
        }
        while (i >= 0 && !image[centerJ + i * this._width] && stateCount[1] <= maxCount) {
            stateCount[1]++;
            i--;
        }
        // If already too many modules in this state or ran off the edge:
        if (i < 0 || stateCount[1] > maxCount) {
            return NaN;
        }
        while (i >= 0 && image[centerJ + i * this._width] && stateCount[0] <= maxCount) {
            stateCount[0]++;
            i--;
        }
        if (stateCount[0] > maxCount) {
            return NaN;
        }
        // Now also count down from center
        i = startI + 1;
        while (i < imageHeigth && image[centerJ + i * this._width]) {
            stateCount[2]++;
            i++;
        }
        if (i == imageHeigth) {
            return NaN;
        }
        while (i < imageHeigth && !image[centerJ + i * this._width] && stateCount[3] < maxCount) {
            stateCount[3]++;
            i++;
        }
        if (i == imageHeigth || stateCount[3] >= maxCount) {
            return NaN;
        }
        while (i < imageHeigth && image[centerJ + i * this._width] && stateCount[4] < maxCount) {
            stateCount[4]++;
            i++;
        }
        if (stateCount[4] >= maxCount) {
            return NaN;
        }
        // If we found a finder-pattern-like section, but its size is more than 40% different than
        // the original, assume it's a false positive
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
            stateCount[4];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
            return NaN;
        }
        return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, i) : NaN;
    };
    /**
     * <p>Like {@link #crossCheckVertical(int, int, int, int)}, and in fact is basically identical,
     * except it reads horizontally instead of vertically. This is used to cross-cross
     * check a vertical cross check and locate the real center of the alignment pattern.</p>
     */
    FinderPatternFinder.prototype.crossCheckHorizontal = function (startJ, centerI, maxCount, originalStateCountTotal) {
        var image = this._bits;
        var imageWidth = this._width;
        var stateCount = [0, 0, 0, 0, 0];
        var j = startJ;
        while (j >= 0 && image[j + centerI * this._width]) {
            stateCount[2]++;
            j--;
        }
        if (j < 0) {
            return NaN;
        }
        while (j >= 0 && !image[j + centerI * this._width] && stateCount[1] <= maxCount) {
            stateCount[1]++;
            j--;
        }
        if (j < 0 || stateCount[1] > maxCount) {
            return NaN;
        }
        while (j >= 0 && image[j + centerI * this._width] && stateCount[0] <= maxCount) {
            stateCount[0]++;
            j--;
        }
        if (stateCount[0] > maxCount) {
            return NaN;
        }
        j = startJ + 1;
        while (j < imageWidth && image[j + centerI * this._width]) {
            stateCount[2]++;
            j++;
        }
        if (j == imageWidth) {
            return NaN;
        }
        while (j < imageWidth && !image[j + centerI * this._width] && stateCount[3] < maxCount) {
            stateCount[3]++;
            j++;
        }
        if (j == imageWidth || stateCount[3] >= maxCount) {
            return NaN;
        }
        while (j < imageWidth && image[j + centerI * this._width] && stateCount[4] < maxCount) {
            stateCount[4]++;
            j++;
        }
        if (stateCount[4] >= maxCount) {
            return NaN;
        }
        // If we found a finder-pattern-like section, but its size is significantly different than
        // the original, assume it's a false positive
        var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
            stateCount[4];
        if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
            return NaN;
        }
        return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, j) : NaN;
    };
    /**
     * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
     * cross check with a vertical scan, and if successful, will, ah, cross-cross-check
     * with another horizontal scan. This is needed primarily to locate the real horizontal
     * center of the pattern in cases of extreme skew.
     * And then we cross-cross-cross check with another diagonal scan.</p>
     *
     * <p>If that succeeds the finder pattern location is added to a list that tracks
     * the number of times each location has been nearly-matched as a finder pattern.
     * Each additional find is more evidence that the location is in fact a finder
     * pattern center
     *
     * @param stateCount        reading state module counts from horizontal scan
     * @param verticalIndex     row where finder pattern may be found
     * @param horizontalIndex   end of possible finder pattern in row
     * @return true if a finder pattern candidate was found this time
     */
    FinderPatternFinder.prototype.handlePossibleCenter = function (stateCount, verticalIndex, horizontalIndex) {
        var stateCountTotal = stateCount.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        var centerHorizontalIndex = (horizontalIndex - stateCount[4] - stateCount[3]) - stateCount[2] / 2.0;
        var centerVerticalIndex = this.crossCheckVertical(verticalIndex, Math.floor(centerHorizontalIndex), stateCount[2], stateCountTotal);
        if (!isNaN(centerVerticalIndex)) {
            // Re-cross check
            centerHorizontalIndex = this.crossCheckHorizontal(Math.floor(centerHorizontalIndex), Math.floor(centerVerticalIndex), stateCount[2], stateCountTotal);
            if (!isNaN(centerHorizontalIndex)) {
                var estimatedModuleSize_1 = stateCountTotal / 7.0;
                var found = this._possibleCenters.some(function (center) {
                    return center.aboutEquals(estimatedModuleSize_1, centerVerticalIndex, centerHorizontalIndex);
                });
                for (var index = 0; index < this._possibleCenters.length; index++) {
                    var center = this._possibleCenters[index];
                    // Look for about the same center and module size:
                    if (center.aboutEquals(estimatedModuleSize_1, centerVerticalIndex, centerHorizontalIndex)) {
                        center.incrementCount();
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    this._possibleCenters.push(new __WEBPACK_IMPORTED_MODULE_0__format_FinderPattern__["a" /* default */](centerHorizontalIndex, centerVerticalIndex, estimatedModuleSize_1));
                }
                return true;
            }
        }
        return false;
    };
    /**
     * @return true iff we have found at least 3 finder patterns that have been detected
     *         at least {@link #CENTER_QUORUM} times each, and, the estimated module size of the
     *         candidates is "pretty similar"
     */
    FinderPatternFinder.prototype.haveMultiplyConfirmedCenters = function () {
        var confirmedCount = 0;
        var totalModuleSize = 0.0;
        this._possibleCenters.forEach(function (possibleCenter) {
            if (possibleCenter.count >= CENTER_QUORUM) {
                confirmedCount++;
                totalModuleSize += possibleCenter.estimatedModuleSize;
            }
        });
        if (confirmedCount < 3) {
            return false;
        }
        // OK, we have at least 3 confirmed centers, but, it's possible that one is a "false positive"
        // and that we need to keep looking. We detect this by asking if the estimated module sizes
        // vary too much. We arbitrarily say that when the total deviation from average exceeds
        // 5% of the total module size estimates, it's too much.
        var max = this._possibleCenters.length;
        var average = totalModuleSize / max;
        var totalDeviation = 0.0;
        this._possibleCenters.forEach(function (possibleCenter) {
            totalDeviation += Math.abs(possibleCenter.estimatedModuleSize - average);
        });
        return totalDeviation <= 0.05 * totalModuleSize;
    };
    /**
     * @return the 3 best {@link FinderPattern}s from our list of candidates. The "best" are
     *         those that have been detected at least {@link #CENTER_QUORUM} times, and whose module
     *         size differs from the average among those patterns the least
     * @throws NotFoundException if 3 such finder patterns do not exist
     */
    FinderPatternFinder.prototype.selectBestPatterns = function () {
        var startSize = this._possibleCenters.length;
        if (startSize < 3) {
            throw new __WEBPACK_IMPORTED_MODULE_2__error_NotFoundError__["a" /* default */]("Couldn't find enough finder patterns.");
        }
        // Filter outlier possibilities whose module size is too different
        if (startSize > 3) {
            // But we can only afford to do so if we have at least 4 possibilities to choose from
            var totalModuleSize_1 = 0.0;
            var square_1 = 0.0;
            this._possibleCenters.forEach(function (center) {
                var size = center.estimatedModuleSize;
                totalModuleSize_1 += size;
                square_1 += size * size;
            });
            var average_1 = totalModuleSize_1 / startSize;
            var stdDev = Math.sqrt(square_1 / startSize - average_1 * average_1);
            this._possibleCenters.sort(function (center1, center2) {
                var dA = Math.abs(center2.estimatedModuleSize - average_1);
                var dB = Math.abs(center1.estimatedModuleSize - average_1);
                return dA < dB ? -1 : dA > dB ? 1 : 0;
            });
            var limit = Math.max(0.2 * average_1, stdDev);
            for (var i = 0; i < this._possibleCenters.length && this._possibleCenters.length > 3; i++) {
                var pattern = this._possibleCenters[i];
                if (Math.abs(pattern.estimatedModuleSize - average_1) > limit) {
                    this._possibleCenters.splice(i, 1);
                    i--;
                }
            }
        }
        if (this._possibleCenters.length > 3) {
            // Throw away all but those first size candidate points we found.
            var totalModuleSize_2 = 0.0;
            this._possibleCenters.forEach(function (center) {
                totalModuleSize_2 += center.estimatedModuleSize;
            });
            var average_2 = totalModuleSize_2 / this._possibleCenters.length;
            this._possibleCenters.sort(function (center1, center2) {
                if (center2.count == center1.count) {
                    var dA = Math.abs(center2.estimatedModuleSize - average_2);
                    var dB = Math.abs(center1.estimatedModuleSize - average_2);
                    return dA < dB ? 1 : dA > dB ? -1 : 0;
                }
                else {
                    return center2.count - center1.count;
                }
            });
        }
        return [this._possibleCenters[0], this._possibleCenters[1], this._possibleCenters[2]];
    };
    /**
     * @return number of rows we could safely skip during scanning, based on the first
     *         two finder patterns that have been located. In some cases their position will
     *         allow us to infer that the third pattern must lie below a certain point farther
     *         down in the image.
     */
    FinderPatternFinder.prototype.findRowSkip = function () {
        var _this = this;
        var max = this._possibleCenters.length;
        if (max <= 1) {
            return 0;
        }
        var firstConfirmedCenter = null;
        this._possibleCenters.forEach(function (center) {
            if (center.count >= CENTER_QUORUM) {
                if (firstConfirmedCenter == null) {
                    firstConfirmedCenter = center;
                }
                else {
                    // We have two confirmed centers
                    // How far down can we skip before resuming looking for the next
                    // pattern? In the worst case, only the difference between the
                    // difference in the x / y coordinates of the two centers.
                    // This is the case where you find top left last.
                    _this._hasSkipped = true;
                    return Math.floor((Math.abs(firstConfirmedCenter.x - center.x) - Math.abs(firstConfirmedCenter.y - center.y)) / 2);
                }
            }
        });
        return 0;
    };
    /**
     * Orders an array of three ResultPoints in an order [A,B,C] such that AB is less than AC
     * and BC is less than AC, and the angle between BC and BA is less than 180 degrees.
     *
     * @param patterns array of three {@code ResultPoint} to order
     */
    FinderPatternFinder.orderBestPatterns = function (patterns) {
        // Find distances between pattern centers
        var zeroOneDistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Utils__["d" /* distance */])(patterns[0], patterns[1]);
        var oneTwoDistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Utils__["d" /* distance */])(patterns[1], patterns[2]);
        var zeroTwoDistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Utils__["d" /* distance */])(patterns[0], patterns[2]);
        var pointA;
        var pointB;
        var pointC;
        // Assume one closest to other two is B; A and C will just be guesses at first
        if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
            pointB = patterns[0];
            pointA = patterns[1];
            pointC = patterns[2];
        }
        else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
            pointB = patterns[1];
            pointA = patterns[0];
            pointC = patterns[2];
        }
        else {
            pointB = patterns[2];
            pointA = patterns[0];
            pointC = patterns[1];
        }
        // Use cross product to figure out whether A and C are correct or flipped.
        // This asks whether BC x BA has a positive z component, which is the arrangement
        // we want for A, B, C. If it's negative, then we've got it flipped around and
        // should swap A and C.
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_Utils__["e" /* crossProductZ */])(pointA, pointB, pointC) < 0.0) {
            var temp = pointA;
            pointA = pointC;
            pointC = temp;
        }
        patterns[0] = pointA;
        patterns[1] = pointB;
        patterns[2] = pointC;
        return [pointA, pointB, pointC];
    };
    return FinderPatternFinder;
}());
/* harmony default export */ __webpack_exports__["a"] = (FinderPatternFinder);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_Version__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AlignmentPatternFinder__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FinderPatternFinder__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_NotFoundError__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_PerspectiveTransform__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_GridSampler__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Binarizer__ = __webpack_require__(14);








/*
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/detector/Detector.java}
 *
 * @author Tatsuya Yamamoto
 */
var QRDetector = (function () {
    function QRDetector(canvasImageData) {
        this._bits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__common_Binarizer__["a" /* binarize */])(canvasImageData).bits;
        this._width = canvasImageData.width;
        this._height = canvasImageData.height;
    }
    QRDetector.prototype.detect = function () {
        var finderPatternFinder = new __WEBPACK_IMPORTED_MODULE_2__FinderPatternFinder__["a" /* default */](this._bits, this._width, this._height);
        var finderPatterns = finderPatternFinder.find();
        var topLeft = finderPatterns.topLeft;
        var topRight = finderPatterns.topRight;
        var bottomLeft = finderPatterns.bottomLeft;
        var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
        if (moduleSize < 1.0) {
            throw new __WEBPACK_IMPORTED_MODULE_3__error_NotFoundError__["a" /* default */]("Couldn't detect a code that has module size enough.");
        }
        var dimension = QRDetector.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
        var provisionalVersion = __WEBPACK_IMPORTED_MODULE_0__format_Version__["a" /* default */].getProvisionalVersionForDimension(dimension);
        var modulesBetweenFPCenters = provisionalVersion.dimensionForVersion - 7;
        var alignmentPattern = null;
        // Anything above version 1 has an alignment pattern
        if (provisionalVersion.alignmentPatternCenters.length > 0) {
            // Guess where a "bottom right" finder pattern would have been
            var bottomRightX = topRight.x - topLeft.x + bottomLeft.x;
            var bottomRightY = topRight.y - topLeft.y + bottomLeft.y;
            // Estimate that alignment pattern is closer by 3 modules
            // from "bottom right" to known top left location
            var correctionToTopLeft = 1.0 - 3.0 / modulesBetweenFPCenters;
            var estAlignmentX = Math.floor(topLeft.x + correctionToTopLeft * (bottomRightX - topLeft.x));
            var estAlignmentY = Math.floor(topLeft.y + correctionToTopLeft * (bottomRightY - topLeft.y));
            // Kind of arbitrary -- expand search radius before giving up
            for (var i = 4; i <= 16; i <<= 1) {
                try {
                    alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
                    break;
                }
                catch (e) {
                    // try next round
                }
            }
            // If we didn't find alignment pattern... well try anyway without it
        }
        var transform = QRDetector.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
        var sampler = new __WEBPACK_IMPORTED_MODULE_5__common_GridSampler__["a" /* default */](this._width, this._height);
        return sampler.sampleGrid(this._bits, dimension, dimension, transform);
    };
    ;
    QRDetector.createTransform = function (topLeft, topRight, bottomLeft, alignmentPattern, dimension) {
        var dimMinusThree = dimension - 3.5;
        var bottomRightX;
        var bottomRightY;
        var sourceBottomRightX;
        var sourceBottomRightY;
        if (alignmentPattern != null) {
            bottomRightX = alignmentPattern.x;
            bottomRightY = alignmentPattern.y;
            sourceBottomRightX = dimMinusThree - 3.0;
            sourceBottomRightY = sourceBottomRightX;
        }
        else {
            // Don't have an alignment pattern, just make up the bottom-right point
            bottomRightX = (topRight.x - topLeft.x) + bottomLeft.x;
            bottomRightY = (topRight.y - topLeft.y) + bottomLeft.y;
            sourceBottomRightX = dimMinusThree;
            sourceBottomRightY = dimMinusThree;
        }
        return __WEBPACK_IMPORTED_MODULE_4__common_PerspectiveTransform__["a" /* default */].quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.x, topLeft.y, topRight.x, topRight.y, bottomRightX, bottomRightY, bottomLeft.x, bottomLeft.y);
    };
    ;
    /**
     * <p>Computes the dimension (number of modules on a size) of the QR Code based on the position
     * of the finder patterns and estimated module size.</p>
     */
    QRDetector.computeDimension = function (topLeft, topRight, bottomLeft, moduleSize) {
        var tltrCentersDimension = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_Utils__["c" /* round */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_Utils__["d" /* distance */])(topLeft, topRight) / moduleSize);
        var tlblCentersDimension = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_Utils__["c" /* round */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_Utils__["d" /* distance */])(topLeft, bottomLeft) / moduleSize);
        var dimension = ((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
        switch (dimension & 0x03) {
            // mod 4
            case 0:
                dimension++;
                break;
            // 1? do nothing
            case 2:
                dimension--;
                break;
            case 3:
                throw new __WEBPACK_IMPORTED_MODULE_3__error_NotFoundError__["a" /* default */]("Could not compute valid dimension.");
        }
        return dimension;
    };
    ;
    /**
     * <p>Computes an average estimated module size based on estimated derived from the positions
     * of the three finder patterns.</p>
     *
     * @param topLeft detected top-left finder pattern center
     * @param topRight detected top-right finder pattern center
     * @param bottomLeft detected bottom-left finder pattern center
     * @return estimated module size
     */
    QRDetector.prototype.calculateModuleSize = function (topLeft, topRight, bottomLeft) {
        // Take the average
        return (this.calculateModuleSizeOneWay(topLeft, topRight) +
            this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2.0;
    };
    ;
    /**
     * <p>Estimates module size based on two finder patterns -- it uses
     * {@link #sizeOfBlackWhiteBlackRunBothWays(int, int, int, int)} to figure the
     * width of each, measuring along the axis between their centers.</p>
     */
    QRDetector.prototype.calculateModuleSizeOneWay = function (pattern, otherPattern) {
        var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(pattern.x), Math.floor(pattern.y), Math.floor(otherPattern.x), Math.floor(otherPattern.y));
        var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.x), Math.floor(otherPattern.y), Math.floor(pattern.x), Math.floor(pattern.y));
        if (isNaN(moduleSizeEst1)) {
            return moduleSizeEst2 / 7.0;
        }
        if (isNaN(moduleSizeEst2)) {
            return moduleSizeEst1 / 7.0;
        }
        // Average them, and divide by 7 since we've counted the width of 3 black modules,
        // and 1 white and 1 black module on either side. Ergo, divide sum by 14.
        return (moduleSizeEst1 + moduleSizeEst2) / 14.0;
    };
    ;
    /**
     * See {@link #sizeOfBlackWhiteBlackRun(int, int, int, int)}; computes the total width of
     * a finder pattern by looking for a black-white-black run from the center in the direction
     * of another point (another finder pattern center), and in the opposite direction too.
     */
    QRDetector.prototype.sizeOfBlackWhiteBlackRunBothWays = function (fromX, fromY, toX, toY) {
        var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
        // Now count other way -- don't run off image though of course
        var scale = 1.0;
        var otherToX = fromX - (toX - fromX);
        if (otherToX < 0) {
            scale = fromX / (fromX - otherToX);
            otherToX = 0;
        }
        else if (otherToX >= this._width) {
            scale = (this._width - 1 - fromX) / (otherToX - fromX);
            otherToX = this._width - 1;
        }
        var otherToY = Math.floor(fromY - (toY - fromY) * scale);
        scale = 1.0;
        if (otherToY < 0) {
            scale = fromY / (fromY - otherToY);
            otherToY = 0;
        }
        else if (otherToY >= this._height) {
            scale = (this._height - 1 - fromY) / (otherToY - fromY);
            otherToY = this._height - 1;
        }
        otherToX = Math.floor(fromX + (otherToX - fromX) * scale);
        result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
        // Middle pixel is double-counted this way; subtract 1
        return result - 1.0;
    };
    ;
    /**
     * <p>This method traces a line from a point in the image, in the direction towards another point.
     * It begins in a black region, and keeps going until it finds white, then black, then white again.
     * It reports the distance from the start to this point.</p>
     *
     * <p>This is used when figuring out how wide a finder pattern is, when the finder pattern
     * may be skewed or rotated.</p>
     */
    QRDetector.prototype.sizeOfBlackWhiteBlackRun = function (fromX, fromY, toX, toY) {
        // Mild variant of Bresenham's algorithm;
        // see http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
        var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
        if (steep) {
            _a = [fromY, fromX], fromX = _a[0], fromY = _a[1]; //swap
            _b = [toY, toX], toX = _b[0], toY = _b[1]; //swap
        }
        var dx = Math.abs(toX - fromX);
        var dy = Math.abs(toY - fromY);
        var error = -dx / 2;
        var xstep = fromX < toX ? 1 : -1;
        var ystep = fromY < toY ? 1 : -1;
        // In black pixels, looking for white, first or second time.
        var state = 0;
        // Loop up until x == toX, but not beyond
        var xLimit = toX + xstep;
        for (var x = fromX, y = fromY; x != xLimit; x += xstep) {
            var realX = steep ? y : x;
            var realY = steep ? x : y;
            // Does current pixel mean we have moved white to black or vice versa?
            // Scanning black in state 0,2 and white in state 1, so if we find the wrong
            // color, advance to next state or end if we are in state 2 already
            if ((state == 1) == (this._bits[realX + realY * this._width] == 1)) {
                if (state == 2) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_Utils__["d" /* distance */])({ x: x, y: y }, { x: fromX, y: fromY });
                }
                state++;
            }
            error += dy;
            if (error > 0) {
                if (y == toY) {
                    break;
                }
                y += ystep;
                error -= dx;
            }
        }
        // Found black-white-black; give the benefit of the doubt that the next pixel outside the image
        // is "white" so this last point at (toX+xStep,toY) is the right ending. This is really a
        // small approximation; (toX+xStep,toY+yStep) might be really correct. Ignore this.
        if (state == 2) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_Utils__["d" /* distance */])({ x: toX + xstep, y: toY }, { x: fromX, y: fromY });
        }
        // else we didn't find even black-white-black; no estimate is really possible
        return NaN;
        var _a, _b;
    };
    ;
    /**
     * <p>Attempts to locate an alignment pattern in a limited region of the image, which is
     * guessed to contain it. This method uses {@link AlignmentPattern}.</p>
     *
     * @param overallEstModuleSize estimated module size so far
     * @param estAlignmentX x coordinate of center of area probably containing alignment pattern
     * @param estAlignmentY y coordinate of above
     * @param allowanceFactor number of pixels in all directions to search from the center
     * @return {@link AlignmentPattern} if found, or null otherwise
     * @throws NotFoundException if an unexpected error occurs during detection
     */
    QRDetector.prototype.findAlignmentInRegion = function (overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
        // Look for an alignment pattern (3 modules in size) around where it
        // should be
        var allowance = Math.floor(allowanceFactor * overallEstModuleSize);
        var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
        var alignmentAreaRightX = Math.min(this._width - 1, estAlignmentX + allowance);
        if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
            throw new __WEBPACK_IMPORTED_MODULE_3__error_NotFoundError__["a" /* default */]("an unexpected error occurs during detection");
        }
        var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
        var alignmentAreaBottomY = Math.min(this._height - 1, estAlignmentY + allowance);
        if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
            throw new __WEBPACK_IMPORTED_MODULE_3__error_NotFoundError__["a" /* default */]("an unexpected error occurs during detection");
        }
        var alignmentFinder = new __WEBPACK_IMPORTED_MODULE_1__AlignmentPatternFinder__["a" /* default */](this._bits, this._width, this._height, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize);
        return alignmentFinder.find();
    };
    ;
    return QRDetector;
}());
/* harmony default export */ __webpack_exports__["a"] = (QRDetector);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FunctionPattern__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AlignmentPattern = (function (_super) {
    __extends(AlignmentPattern, _super);
    function AlignmentPattern(x, y, estimatedModuleSize) {
        return _super.call(this, x, y, estimatedModuleSize) || this;
    }
    AlignmentPattern.prototype.combineEstimate = function (i, j, newModuleSize) {
        var combinedX = (this.x + j) / 2.0;
        var combinedY = (this.y + i) / 2.0;
        var combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2.0;
        return new AlignmentPattern(combinedX, combinedY, combinedModuleSize);
    };
    return AlignmentPattern;
}(__WEBPACK_IMPORTED_MODULE_0__FunctionPattern__["a" /* FunctionPattern */]));
/* harmony default export */ __webpack_exports__["a"] = (AlignmentPattern);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataMask; });
/* unused harmony export DataMask000 */
/* unused harmony export DataMask001 */
/* unused harmony export DataMask010 */
/* unused harmony export DataMask011 */
/* unused harmony export DataMask100 */
/* unused harmony export DataMask101 */
/* unused harmony export DataMask110 */
/* unused harmony export DataMask111 */
/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/DataMask.java}
 *
 * @author Tatsuya Yamamoto
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataMask = (function () {
    function DataMask() {
    }
    DataMask.prototype.unmaskBitMatrix = function (bits, dimension) {
        for (var i = 0; i < dimension; i++) {
            for (var j = 0; j < dimension; j++) {
                if (this.isMasked(i, j)) {
                    bits.flip(j, i);
                }
            }
        }
    };
    DataMask.values = function () {
        return VALUES;
    };
    return DataMask;
}());

var DataMask000 = (function (_super) {
    __extends(DataMask000, _super);
    function DataMask000() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask000.prototype.isMasked = function (i, j) {
        return ((i + j) & 0x01) == 0;
    };
    return DataMask000;
}(DataMask));

var DataMask001 = (function (_super) {
    __extends(DataMask001, _super);
    function DataMask001() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask001.prototype.isMasked = function (i, _j) {
        return (i & 0x01) == 0;
    };
    return DataMask001;
}(DataMask));

var DataMask010 = (function (_super) {
    __extends(DataMask010, _super);
    function DataMask010() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask010.prototype.isMasked = function (_i, j) {
        return j % 3 == 0;
    };
    return DataMask010;
}(DataMask));

var DataMask011 = (function (_super) {
    __extends(DataMask011, _super);
    function DataMask011() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask011.prototype.isMasked = function (i, j) {
        return (i + j) % 3 == 0;
    };
    return DataMask011;
}(DataMask));

var DataMask100 = (function (_super) {
    __extends(DataMask100, _super);
    function DataMask100() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask100.prototype.isMasked = function (i, j) {
        return (((i / 2) + (j / 3)) & 0x01) == 0;
    };
    return DataMask100;
}(DataMask));

var DataMask101 = (function (_super) {
    __extends(DataMask101, _super);
    function DataMask101() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask101.prototype.isMasked = function (i, j) {
        return (i * j) % 6 == 0;
    };
    return DataMask101;
}(DataMask));

var DataMask110 = (function (_super) {
    __extends(DataMask110, _super);
    function DataMask110() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask110.prototype.isMasked = function (i, j) {
        return ((i * j) % 6) < 3;
    };
    return DataMask110;
}(DataMask));

var DataMask111 = (function (_super) {
    __extends(DataMask111, _super);
    function DataMask111() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMask111.prototype.isMasked = function (i, j) {
        return ((i + j + ((i * j) % 3)) & 0x01) == 0;
    };
    return DataMask111;
}(DataMask));

var VALUES = [
    new DataMask000(),
    new DataMask001(),
    new DataMask010(),
    new DataMask011(),
    new DataMask100(),
    new DataMask101(),
    new DataMask110(),
    new DataMask111()
];


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__ = __webpack_require__(0);
/* unused harmony export ErrorCorrectionLevel */
/* unused harmony export LevelL */
/* unused harmony export LevelM */
/* unused harmony export LevelQ */
/* unused harmony export LevelH */
/* harmony export (immutable) */ __webpack_exports__["a"] = forBits;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/ErrorCorrectionLevel.java}
 *
 * @author Tatsuya Yamamoto
 */
var ErrorCorrectionLevel = (function () {
    function ErrorCorrectionLevel(ordinal, bits) {
        this._ordinal = ordinal;
        this._bits = bits;
    }
    Object.defineProperty(ErrorCorrectionLevel.prototype, "bits", {
        get: function () {
            return this._bits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorCorrectionLevel.prototype, "ordinal", {
        get: function () {
            return this._ordinal;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorCorrectionLevel;
}());

var LevelL = (function (_super) {
    __extends(LevelL, _super);
    function LevelL() {
        return _super.call(this, LevelL.ORDINAL, LevelL.BITS) || this;
    }
    return LevelL;
}(ErrorCorrectionLevel));

LevelL.ORDINAL = 0;
LevelL.BITS = 0x01;
var LevelM = (function (_super) {
    __extends(LevelM, _super);
    function LevelM() {
        return _super.call(this, LevelM.ORDINAL, LevelM.BITS) || this;
    }
    return LevelM;
}(ErrorCorrectionLevel));

LevelM.ORDINAL = 1;
LevelM.BITS = 0x00;
var LevelQ = (function (_super) {
    __extends(LevelQ, _super);
    function LevelQ() {
        return _super.call(this, LevelQ.ORDINAL, LevelQ.BITS) || this;
    }
    return LevelQ;
}(ErrorCorrectionLevel));

LevelQ.ORDINAL = 2;
LevelQ.BITS = 0x03;
var LevelH = (function (_super) {
    __extends(LevelH, _super);
    function LevelH() {
        return _super.call(this, LevelH.ORDINAL, LevelH.BITS) || this;
    }
    return LevelH;
}(ErrorCorrectionLevel));

LevelH.ORDINAL = 3;
LevelH.BITS = 0x02;
var ErrorCorrectionLevels = [
    LevelM,
    LevelL,
    LevelH,
    LevelQ
];
/**
 * @param bits int containing the two bits encoding a QR Code's error correction level
 * @return ErrorCorrectionLevel representing the encoded error correction level
 */
function forBits(bits) {
    if (bits < 0 || bits >= ErrorCorrectionLevels.length) {
        throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]();
    }
    return new (ErrorCorrectionLevels[bits])();
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FunctionPattern__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FinderPattern = (function (_super) {
    __extends(FinderPattern, _super);
    function FinderPattern(x, y, estimatedModuleSize) {
        return _super.call(this, x, y, estimatedModuleSize) || this;
    }
    return FinderPattern;
}(__WEBPACK_IMPORTED_MODULE_0__FunctionPattern__["a" /* FunctionPattern */]));
/* harmony default export */ __webpack_exports__["a"] = (FinderPattern);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__ = __webpack_require__(0);
/* unused harmony export Mode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminatorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NumericMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return AlphaNumericMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StructuredAppendMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ByteMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EciMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return KanjiMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Fnc1FirstPositionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Fnc1SecondPositionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HanziMode; });
/* harmony export (immutable) */ __webpack_exports__["b"] = forBits;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Porting from {@link https://github.com/zxing/zxing/blob/master/core/src/main/java/com/google/zxing/qrcode/decoder/Mode.java}
 *
 * @author Tatsuya Yamamoto
 */
var Mode = (function () {
    function Mode(characterCountBitsForVersions, bits) {
        this._characterCountBitsForVersions = characterCountBitsForVersions;
        this._bits = bits;
    }
    Object.defineProperty(Mode.prototype, "characterCountBits", {
        get: function () {
            return this._characterCountBitsForVersions;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Mode.prototype, "bits", {
        get: function () {
            return this._bits;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param version version in question
     * @return number of bits used, in this QR Code symbol {@link Version}, to encode the
     *         count of characters that will follow encoded in this Mode
     */
    Mode.prototype.getCharacterCountBits = function (version) {
        var number = version.versionNumber;
        var offset;
        if (number <= 9) {
            offset = 0;
        }
        else if (number <= 26) {
            offset = 1;
        }
        else {
            offset = 2;
        }
        return this._characterCountBitsForVersions[offset];
    };
    return Mode;
}());

var TerminatorMode = (function (_super) {
    __extends(TerminatorMode, _super);
    function TerminatorMode() {
        return _super.call(this, TerminatorMode.CHARACTER_COUNT_BITS, TerminatorMode.BITS) || this;
    }
    return TerminatorMode;
}(Mode));

TerminatorMode.CHARACTER_COUNT_BITS = [0, 0, 0];
TerminatorMode.BITS = 0x00;
var NumericMode = (function (_super) {
    __extends(NumericMode, _super);
    function NumericMode() {
        return _super.call(this, NumericMode.CHARACTER_COUNT_BITS, NumericMode.BITS) || this;
    }
    return NumericMode;
}(Mode));

NumericMode.CHARACTER_COUNT_BITS = [10, 12, 14];
NumericMode.BITS = 0x01;
var AlphaNumericMode = (function (_super) {
    __extends(AlphaNumericMode, _super);
    function AlphaNumericMode() {
        return _super.call(this, AlphaNumericMode.CHARACTER_COUNT_BITS, AlphaNumericMode.BITS) || this;
    }
    return AlphaNumericMode;
}(Mode));

AlphaNumericMode.CHARACTER_COUNT_BITS = [9, 11, 13];
AlphaNumericMode.BITS = 0x02;
var StructuredAppendMode = (function (_super) {
    __extends(StructuredAppendMode, _super);
    function StructuredAppendMode() {
        return _super.call(this, StructuredAppendMode.CHARACTER_COUNT_BITS, StructuredAppendMode.BITS) || this;
    }
    return StructuredAppendMode;
}(Mode));

StructuredAppendMode.CHARACTER_COUNT_BITS = [0, 0, 0];
StructuredAppendMode.BITS = 0x03;
var ByteMode = (function (_super) {
    __extends(ByteMode, _super);
    function ByteMode() {
        return _super.call(this, ByteMode.CHARACTER_COUNT_BITS, ByteMode.BITS) || this;
    }
    return ByteMode;
}(Mode));

ByteMode.CHARACTER_COUNT_BITS = [8, 16, 16];
ByteMode.BITS = 0x04;
var EciMode = (function (_super) {
    __extends(EciMode, _super);
    function EciMode() {
        return _super.call(this, EciMode.CHARACTER_COUNT_BITS, EciMode.BITS) || this;
    }
    return EciMode;
}(Mode));

EciMode.CHARACTER_COUNT_BITS = [0, 0, 0];
EciMode.BITS = 0x07;
var KanjiMode = (function (_super) {
    __extends(KanjiMode, _super);
    function KanjiMode() {
        return _super.call(this, KanjiMode.CHARACTER_COUNT_BITS, KanjiMode.BITS) || this;
    }
    return KanjiMode;
}(Mode));

KanjiMode.CHARACTER_COUNT_BITS = [8, 10, 12];
KanjiMode.BITS = 0x08;
var Fnc1FirstPositionMode = (function (_super) {
    __extends(Fnc1FirstPositionMode, _super);
    function Fnc1FirstPositionMode() {
        return _super.call(this, Fnc1FirstPositionMode.CHARACTER_COUNT_BITS, Fnc1FirstPositionMode.BITS) || this;
    }
    return Fnc1FirstPositionMode;
}(Mode));

Fnc1FirstPositionMode.CHARACTER_COUNT_BITS = [0, 0, 0];
Fnc1FirstPositionMode.BITS = 0x05;
var Fnc1SecondPositionMode = (function (_super) {
    __extends(Fnc1SecondPositionMode, _super);
    function Fnc1SecondPositionMode() {
        return _super.call(this, Fnc1SecondPositionMode.CHARACTER_COUNT_BITS, Fnc1SecondPositionMode.BITS) || this;
    }
    return Fnc1SecondPositionMode;
}(Mode));

Fnc1SecondPositionMode.CHARACTER_COUNT_BITS = [0, 0, 0];
Fnc1SecondPositionMode.BITS = 0x09;
var HanziMode = (function (_super) {
    __extends(HanziMode, _super);
    function HanziMode() {
        return _super.call(this, HanziMode.CHARACTER_COUNT_BITS, HanziMode.BITS) || this;
    }
    return HanziMode;
}(Mode));

HanziMode.CHARACTER_COUNT_BITS = [8, 10, 12];
HanziMode.BITS = 0x0D;
/**
 * @param bits four bits encoding a QR Code data mode
 * @return Mode encoded by these bits
 * @throws IllegalArgumentException if bits do not correspond to a known mode
 */
function forBits(bits) {
    switch (bits) {
        case 0x0:
            return new TerminatorMode();
        case 0x1:
            return new NumericMode();
        case 0x2:
            return new AlphaNumericMode();
        case 0x3:
            return new StructuredAppendMode();
        case 0x4:
            return new ByteMode();
        case 0x5:
            return new Fnc1FirstPositionMode();
        case 0x7:
            return new EciMode();
        case 0x8:
            return new KanjiMode();
        case 0x9:
            return new Fnc1SecondPositionMode();
        case 0xD:
            // 0xD is defined in GBT 18284-2000, may not be supported in foreign country
            return new HanziMode();
        default:
            throw new __WEBPACK_IMPORTED_MODULE_0__error_IllegalArgumentError__["a" /* default */]();
    }
}


/***/ })
/******/ ]);
});
},{}]},{},[1]);
