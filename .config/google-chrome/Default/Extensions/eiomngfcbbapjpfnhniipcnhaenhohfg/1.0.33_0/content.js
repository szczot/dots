/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getColorFromVar = getColorFromVar;
exports.parse = parse;
exports.getValFromCache = getValFromCache;
exports.setValToCache = setValToCache;

var _helpers = __webpack_require__(1);

var rgbMatch = /^rgba?\([^\(\)]+\)$/;
var hslMatch = /^hsla?\([^\(\)]+\)$/;
var hexMatch = /^#[0-9a-f]+$/i;
var hslSplitter = /hsla?|\(|\)|\/|,|\s/ig;
var hslRange = [360, 1, 1, 1];
var hslUnits = { '%': 100, 'deg': 360, 'rad': 2 * Math.PI, 'turn': 1 };
var rgbSplitter = /rgba?|\(|\)|\/|,|\s/ig;
var rgbRange = [255, 255, 255, 1];
var rgbUnits = { '%': 100 };
var knownColors = new Map(Object.entries({
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgrey: 0xa9a9a9,
    darkgreen: 0x006400,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    grey: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgrey: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
}));
var systemColors = new Map(Object.entries({
    ActiveBorder: 0x3b99fc,
    ActiveCaption: 0x000000,
    AppWorkspace: 0xaaaaaa,
    Background: 0x6363ce,
    ButtonFace: 0xffffff,
    ButtonHighlight: 0xe9e9e9,
    ButtonShadow: 0x9fa09f,
    ButtonText: 0x000000,
    CaptionText: 0x000000,
    GrayText: 0x7f7f7f,
    Highlight: 0xb2d7ff,
    HighlightText: 0x000000,
    InactiveBorder: 0xffffff,
    InactiveCaption: 0xffffff,
    InactiveCaptionText: 0x000000,
    InfoBackground: 0xfbfcc5,
    InfoText: 0x000000,
    Menu: 0xf6f6f6,
    MenuText: 0xffffff,
    Scrollbar: 0xaaaaaa,
    ThreeDDarkShadow: 0x000000,
    ThreeDFace: 0xc0c0c0,
    ThreeDHighlight: 0xffffff,
    ThreeDLightShadow: 0xffffff,
    ThreeDShadow: 0x000000,
    Window: 0xececec,
    WindowFrame: 0xaaaaaa,
    WindowText: 0x000000,
    '-webkit-focus-ring-color': 0xe59700
}).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key.toLowerCase(), value];
}));

var colorMatch = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)|black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)/gi;

function parseRGB($rgb) {
    var _getNumbersFromString = getNumbersFromString($rgb, rgbSplitter, rgbRange, rgbUnits),
        _getNumbersFromString2 = _slicedToArray(_getNumbersFromString, 4),
        r = _getNumbersFromString2[0],
        g = _getNumbersFromString2[1],
        b = _getNumbersFromString2[2],
        _getNumbersFromString3 = _getNumbersFromString2[3],
        a = _getNumbersFromString3 === undefined ? 1 : _getNumbersFromString3;

    return { r: r, g: g, b: b, a: a };
}

function parseHSL($hsl) {
    var _getNumbersFromString4 = getNumbersFromString($hsl, hslSplitter, hslRange, hslUnits),
        _getNumbersFromString5 = _slicedToArray(_getNumbersFromString4, 4),
        h = _getNumbersFromString5[0],
        s = _getNumbersFromString5[1],
        l = _getNumbersFromString5[2],
        _getNumbersFromString6 = _getNumbersFromString5[3],
        a = _getNumbersFromString6 === undefined ? 1 : _getNumbersFromString6;

    return (0, _helpers.hslToRGB)({ h: h, s: s, l: l, a: a });
}

function parseHex($hex) {
    var h = $hex.substring(1);
    switch (h.length) {
        case 3:
        case 4:
            {
                var _map = [0, 1, 2].map(function (i) {
                    return parseInt('' + h[i] + h[i], 16);
                }),
                    _map2 = _slicedToArray(_map, 3),
                    r = _map2[0],
                    g = _map2[1],
                    b = _map2[2];

                var a = h.length === 3 ? 1 : parseInt('' + h[3] + h[3], 16) / 255;
                return { r: r, g: g, b: b, a: a };
            }
        case 6:
        case 8:
            {
                var _map3 = [0, 2, 4].map(function (i) {
                    return parseInt(h.substring(i, i + 2), 16);
                }),
                    _map4 = _slicedToArray(_map3, 3),
                    _r = _map4[0],
                    _g = _map4[1],
                    _b = _map4[2];

                var _a = h.length === 6 ? 1 : parseInt(h.substring(6, 8), 16) / 255;
                return { r: _r, g: _g, b: _b, a: _a };
            }
    }
    throw new Error('Unable to parse ' + $hex);
}

function getNumbersFromString(str, splitter, range, units) {
    var raw = str.split(splitter).filter(function (x) {
        return x;
    });
    var unitsList = Object.entries(units);
    var numbers = raw.map(function (r) {
        return r.trim();
    }).map(function (r, i) {
        var n = void 0;
        var unit = unitsList.find(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                u = _ref4[0];

            return r.endsWith(u);
        });
        if (unit) {
            n = parseFloat(r.substring(0, r.length - unit[0].length)) / unit[1] * range[i];
        } else {
            n = parseFloat(r);
        }
        if (range[i] > 1) {
            return Math.round(n);
        }
        return n;
    });
    return numbers;
}

function getColorByName($color) {
    var n = knownColors.get($color);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n >> 0 & 255,
        a: 1
    };
}

function getSystemColor($color) {
    var n = systemColors.get($color);
    return {
        r: n >> 16 & 255,
        g: n >> 8 & 255,
        b: n >> 0 & 255,
        a: 1
    };
}

function getColorFromVar(string, stringVar) {
    var cssVar = stringVar.trim();

    try {
        var style = getComputedStyle(document.body);
        var prop = style.getPropertyValue(cssVar);

        //let color = string.replace(/var\(.*?\)/, prop).replace(' ', '');

        return prop;
    } catch (e) {

        setTimeout(function () {
            var style = getComputedStyle(document.body);
            var prop = style.getPropertyValue(cssVar);

            if (valCss) {
                setValToCache(newMatch[0], valCss);
                value = valCss;
            }

            console.log(cssVar, prop);
        }, 2000);

        return stringVar;
    }
}

function parse($color) {
    var c = $color.trim().toLowerCase();

    return parseColor(c);
}

function parseColor(c) {

    if (c.match(rgbMatch)) {
        return parseRGB(c);
    }

    if (c.match(hslMatch)) {
        return parseHSL(c);
    }

    if (c.match(hexMatch)) {
        return parseHex(c);
    }

    if (knownColors.has(c)) {
        return getColorByName(c);
    }

    if (systemColors.has(c)) {
        return getSystemColor(c);
    }

    return c;
}

function getValFromCache(cssVar) {
    return localStorage[cssVar] ? JSON.parse(localStorage[cssVar]) : localStorage[cssVar];
}

function setValToCache(cssVar, valCss) {
    localStorage[cssVar] = JSON.stringify(valCss);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.rgbToHSL = rgbToHSL;
exports.rgbToString = rgbToString;
exports.rgbToHexString = rgbToHexString;
exports.hslToRGB = hslToRGB;
exports.getMatches = getMatches;
function rgbToHSL(_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b,
        _ref$a = _ref.a,
        a = _ref$a === undefined ? 1 : _ref$a;

    r = r / 255;
    g = g / 255;
    b = b / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var c = max - min;

    var l = (max + min) / 2;

    if (c === 0) {
        return { h: 0, s: 0, l: l, a: a };
    }

    var h = (max === r ? (g - b) / c % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4) * 60;
    if (h < 0) {
        h += 360;
    }

    var s = c / (1 - Math.abs(2 * l - 1));

    return { h: h, s: s, l: l, a: a };
}

function rgbToString(rgb) {
    var r = rgb.r,
        g = rgb.g,
        b = rgb.b,
        a = rgb.a;

    if (a != null && a < 1) {
        return 'rgba(' + toFixed(r) + ', ' + toFixed(g) + ', ' + toFixed(b) + ', ' + toFixed(a, 2) + ')';
    }
    return 'rgb(' + toFixed(r) + ', ' + toFixed(g) + ', ' + toFixed(b) + ')';
}

function rgbToHexString(_ref2) {
    var r = _ref2.r,
        g = _ref2.g,
        b = _ref2.b,
        a = _ref2.a;

    return '#' + (a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b]).map(function (x) {
        return '' + (x < 16 ? '0' : '') + x.toString(16);
    }).join('');
}

function hslToRGB(_ref3) {
    var h = _ref3.h,
        s = _ref3.s,
        l = _ref3.l,
        _ref3$a = _ref3.a,
        a = _ref3$a === undefined ? 1 : _ref3$a;

    if (s === 0) {
        var _map = [l, l, l].map(function (x) {
            return Math.round(x * 255);
        }),
            _map2 = _slicedToArray(_map, 3),
            _r = _map2[0],
            _b = _map2[1],
            _g = _map2[2];

        return { r: _r, g: _g, b: _b, a: a };
    }

    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs(h / 60 % 2 - 1));
    var m = l - c / 2;

    var _map3 = (h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]).map(function (n) {
        return Math.round((n + m) * 255);
    }),
        _map4 = _slicedToArray(_map3, 3),
        r = _map4[0],
        g = _map4[1],
        b = _map4[2];

    return { r: r, g: g, b: b, a: a };
}

function getMatches(regex, input) {
    var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var matches = [];
    var m = void 0;
    while (m = regex.exec(input)) {
        matches.push(m[group]);
    }
    return matches;
}

function toFixed(n) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var fixed = n.toFixed(digits);
    if (digits === 0) {
        return fixed;
    }
    var dot = fixed.indexOf('.');
    if (dot >= 0) {
        var zerosMatch = fixed.match(/0+$/);
        if (zerosMatch) {
            if (zerosMatch.index === dot + 1) {
                return fixed.substring(0, dot);
            }
            return fixed.substring(0, zerosMatch.index);
        }
    }
    return fixed;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.colorMatch = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.modifyBgHSL = modifyBgHSL;
exports.modifyFgHSL = modifyFgHSL;
exports.modifyBorderHSL = modifyBorderHSL;
exports.modifyColor = modifyColor;
exports.findAndReplaceColor = findAndReplaceColor;

var _math = __webpack_require__(5);

var _helpers = __webpack_require__(1);

var _parsers = __webpack_require__(0);

var filter = {
    mode: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    useFont: false,
    fontFamily: "Hiragino Kaku Gothic Pro",
    textStroke: 0,
    stylesheet: ""
};

var colorMatch = exports.colorMatch = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\)|black|silver|gray|whitesmoke|maroon|red|purple|fuchsia|green|lime|olivedrab|yellow|navy|blue|teal|aquamarine|orange|aliceblue|antiquewhite|aqua|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|goldenrod|gold|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olive|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|white|yellowgreen|rebeccapurple)/gi;

function modifyBgHSL(_ref) {
    var h = _ref.h,
        s = _ref.s,
        l = _ref.l,
        a = _ref.a;

    var lMin = 0.22;
    var lMaxS0 = 0.25;
    var lMaxS1 = 0.4;
    var sNeutralLim = 0.12;
    var lNeutralLight = 0.8;
    var sColored = 0.05;
    var hColored = 205;
    var hBlue0 = 200;
    var hBlue1 = 280;

    if (a < 0.1 && a > 0) {
        a = 0.3;
        return { h: h, s: s, l: l, a: a };
    }

    var lMax = (0, _math.scale)(s, 0, 1, lMaxS0, lMaxS1);
    var lx = l < lMax ? l : l < 0.5 ? lMax : (0, _math.scale)(l, 0.5, 1, lMax, lMin);

    var isNeutral = l >= lNeutralLight && h > hBlue0 && h < hBlue1 || s < sNeutralLim;
    var hx = h;
    var sx = s;
    if (isNeutral) {
        sx = sColored;
        hx = hColored;
    }

    return { h: hx, s: sx, l: lx, a: a };
}

function modifyFgHSL(_ref2) {
    var h = _ref2.h,
        s = _ref2.s,
        l = _ref2.l,
        a = _ref2.a;

    var lMax = 0.9;
    var lMinS0 = 0.9;
    var lMinS1 = 0.6;
    var sNeutralLim = 0.24;
    var lNeutralDark = 0.2;
    var sColored = 0.20;
    var hColored = 40;
    var hBlue0 = 205;
    var hBlue1 = 245;
    var hBlueMax = 220;
    var lBlueMin = 0.7;

    var isBlue = h > hBlue0 && h <= hBlue1;

    var lMin = (0, _math.scale)(s, 0, 1, isBlue ? (0, _math.scale)(h, hBlue0, hBlue1, lMinS0, lBlueMin) : lMinS0, lMinS1);
    var lx = l < 0.5 ? (0, _math.scale)(l, 0, 0.5, lMax, lMin) : l < lMin ? lMin : l;
    var hx = h;
    var sx = s;
    if (isBlue) {
        hx = (0, _math.scale)(hx, hBlue0, hBlue1, hBlue0, hBlueMax);
    }
    var isNeutral = l < lNeutralDark || s < sNeutralLim;
    if (isNeutral) {
        sx = sColored;
        hx = hColored;
    }

    return { h: hx, s: sx, l: lx, a: a };
}

function modifyBorderHSL(_ref3) {
    var h = _ref3.h,
        s = _ref3.s,
        l = _ref3.l,
        a = _ref3.a;

    var lMinS0 = 0.3;
    var lMinS1 = 0.4;
    var lMaxS0 = 0.4;
    var lMaxS1 = 0.5;

    var lMin = (0, _math.scale)(s, 0, 1, lMinS0, lMinS1);
    var lMax = (0, _math.scale)(s, 0, 1, lMaxS0, lMaxS1);
    var lx = (0, _math.scale)(l, 0, 1, lMax, lMin);

    return { h: h, s: s, l: lx, a: a };
}

function modifyColor(rgb, modifyHSL) {

    if (rgb == '0px' || rgb == '0px 0px' || rgb == '0 0' || rgb == 'none') {
        return rgb;
    }

    var hsl = (0, _helpers.rgbToHSL)(rgb);
    var modified = modifyHSL(hsl);

    var _hslToRGB = (0, _helpers.hslToRGB)(modified),
        r = _hslToRGB.r,
        g = _hslToRGB.g,
        b = _hslToRGB.b,
        a = _hslToRGB.a;

    var matrix = (0, _math.createFilterMatrix)(filter);

    var _applyColorMatrix = (0, _math.applyColorMatrix)([r, g, b], matrix),
        _applyColorMatrix2 = _slicedToArray(_applyColorMatrix, 3),
        rf = _applyColorMatrix2[0],
        gf = _applyColorMatrix2[1],
        bf = _applyColorMatrix2[2];

    var color = a === 1 ? (0, _helpers.rgbToHexString)({ r: rf, g: gf, b: bf }) : (0, _helpers.rgbToString)({ r: rf, g: gf, b: bf, a: a });

    return color.trim();
}

function clearTrash(value, modifier) {

    var colors = value.replace(/url\(.*?\)/g, '').match(colorMatch);

    if (colors) {

        Array.from(colors).forEach(function (color) {

            var rgb = (0, _parsers.parse)(color);
            var modifyCol = modifyColor(rgb, modifier);
            value = value.replace(color, modifyCol);
        });
    }

    return value;
}

function findAndReplaceColor(value, modifier) {

    try {

        if (value == '0px' || value == '0px 0px' || value == '0 0' || value == 'none') {
            return value;
        }

        var matchess = value.match(/var\(.*?\)/g);

        if (matchess) {

            var matcher = value.match(/--(.+?)(?=\)|,)/g).reverse();

            var _loop = function _loop() {

                var match = matcher[prop];

                var cssVar = match.trim();

                if (cssVar) {
                    var valCss = (0, _parsers.getValFromCache)(cssVar);

                    if (valCss) {

                        valCss = valCss.trim();

                        var rrr = new RegExp('var\\([^var\\(]*?' + cssVar + '[^\\)]*\\)', 'g');
                        var newValCss = value.replace(rrr, valCss);

                        newValCss = clearTrash(newValCss, modifier);

                        var one = (newValCss.match(/\)/g) || []).length;
                        var two = (newValCss.match(/\(/g) || []).length;

                        if (one != two) {
                            return {
                                v: valCss
                            };
                        }

                        setTimeout(function () {
                            var style = getComputedStyle(document.body);
                            var valCss = style.getPropertyValue(cssVar);

                            if (valCss) {
                                (0, _parsers.setValToCache)(cssVar, valCss);
                            }
                        }, 6000);

                        if (value == 'var(--steel_gray_60)') {
                            console.log('TEST', match, valCss, newValCss);
                        }

                        return {
                            v: newValCss
                        };
                    } else {
                        try {
                            var style = getComputedStyle(document.body);
                            var _valCss = style.getPropertyValue(cssVar);

                            if (_valCss) {
                                (0, _parsers.setValToCache)(cssVar, _valCss);
                            } else {

                                if (modifier.name == 'modifyBgHSL') {
                                    _valCss = "rgba(53,57,59,0.7)";

                                    return {
                                        v: _valCss
                                    };
                                } else if (modifier.name == 'modifyFgHSL') {
                                    _valCss = "#bab5ab";

                                    return {
                                        v: _valCss
                                    };
                                }

                                throw "Error2";
                            }

                            _valCss = _valCss.trim();

                            var _rrr = new RegExp('var\\([^var\\(]*?' + cssVar + '[^\\)]*\\)', 'g');
                            var _newValCss = value.replace(_rrr, _valCss);

                            _newValCss = clearTrash(_newValCss, modifier);

                            return {
                                v: _newValCss
                            };
                        } catch (e) {

                            setTimeout(function () {
                                var style = getComputedStyle(document.body);
                                var valCss = style.getPropertyValue(cssVar);

                                if (valCss) {
                                    (0, _parsers.setValToCache)(cssVar, valCss);
                                }

                                valCss = valCss.trim();

                                var rrr = new RegExp('var\\([^var\\(]*?' + cssVar + '[^\\)]*\\)', 'g');
                                var newValCss = value.replace(rrr, valCss);

                                newValCss = clearTrash(newValCss, modifier);

                                return newValCss;
                            }, 8000);
                        }
                    }
                }
            };

            for (var prop in matcher) {
                var _ret = _loop();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }
        } else {

            value = clearTrash(value, modifier);

            return value;
        }
    } catch (e) {
        var modifyCol = modifyColor(value, modifier);

        return modifyCol;
    }
}

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modify = __webpack_require__(2);

var _parsers = __webpack_require__(0);

if (localStorage) {
    activate();
}

function activate() {

    var currentLoadedStyles = [];
    var styleDark = Object;
    var firstTemporaryStyle = Object;
    var arr = [];
    var mutationObserver = null;
    var inlineStyle = '';
    var stylenodes = ["STYLE", "LINK"];
    var stringStyle = ' html, body, table, thead, input, textarea, select {color: #bab5ab!important; background: #35393b;} input[type="text"], textarea, select {color: #bab5ab!important; background: #35393b;} [data-darksite-inline-background-image-gradient] {background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))!important; -webkit-background-size: cover!important; -moz-background-size: cover!important; -o-background-size: cover!important; background-size: cover!important;} [data-darksite-force-inline-background] * {background-color: rgba(0,0,0,0.7)!important;} [data-darksite-inline-background] {background-color: rgba(0,0,0,0.7)!important;} [data-darksite-inline-color] {color: #fff!important;} [data-darksite-inline-background-image] {background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))!important}';
    var cssImportRegex = /@import (url\()?(('.+?')|(".+?")|([^\)]*?))\)?;?/g;
    var unparsableColors = ["inherit", "transparent", "initial", "currentcolor", "none"];

    window.onbeforeunload = function () {
        if (mutationObserver) {
            mutationObserver.disconnect();
        }
    };

    document.addEventListener("visibilitychange", function (evt) {

        if (document.visibilityState === 'visible' && window.self == window.top) {
            chrome.runtime.sendMessage({ context: localStorage.activeDarkSite === 'true' });
        }

        if (mutationObserver) {
            if (document.visibilityState === 'visible') {
                mutationObserver.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
                load();
            } else {
                mutationObserver.disconnect();
            }
        }
    });

    if (window.self == window.top) {
        chrome.runtime.sendMessage({ context: localStorage.activeDarkSite == 'true' });
    }

    createTemporaryStyle();

    var mmm = function mmm(mutations) {

        if (localStorage.activeDarkSite === 'true') {

            for (var j = 0; j < mutations.length; ++j) {

                var mutation = mutations[j];

                var styles = [];
                var node = mutation.target;

                if (node && node.nodeType == 1) {

                    if ((styles = node.querySelectorAll('[style]')).length) {

                        styles = Array.from(styles);
                        styles.push(node);

                        for (var prop in styles) {

                            var _node = styles[prop];

                            if (_node.style.cssText.indexOf('background-color') !== -1 && _node.style.cssText.indexOf('rgba(') == -1 && _node.style.cssText.indexOf('hsla(') == -1) {

                                var backgroundColor = _node.style.backgroundColor;

                                if (backgroundColor) {
                                    var currentStyle = (0, _parsers.parse)(backgroundColor);
                                    var finishStyle = (0, _modify.modifyColor)(currentStyle, _modify.modifyBgHSL);
                                    var stringFinishStyle = finishStyle.replace(/[^\dA-Za-z]/g, '');

                                    var st = "data-darksite-inline-background-color" + stringFinishStyle;

                                    var iL = addStyle(finishStyle + "!important", "background-color", "[" + st + "]");

                                    if (iL) {
                                        inlineStyle = inlineStyle + iL;
                                        firstTemporaryStyle.innerText = firstTemporaryStyle.innerText + iL;
                                    }

                                    _node.setAttribute(st, "");
                                }
                            } else if (_node.style.cssText.indexOf('background-image') !== -1) {

                                var backgroundImage = _node.style.backgroundImage;

                                if (backgroundImage.indexOf('url(') !== -1 && backgroundImage.indexOf('linear-gradient(') == -1) {
                                    _node.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ' + backgroundImage;
                                }
                            } else if (_node.style.cssText.indexOf('background') !== -1 && _node.style.cssText.indexOf('rgba(') == -1 && _node.style.cssText.indexOf('hsla(') == -1) {

                                var background = _node.style.background;

                                if (background) {
                                    var _currentStyle = (0, _parsers.parse)(background);
                                    var _finishStyle = (0, _modify.modifyColor)(_currentStyle, _modify.modifyBgHSL);
                                    var _stringFinishStyle = _finishStyle.replace(/[^\dA-Za-z]/g, '');

                                    var _st = "data-darksite-inline-background" + _stringFinishStyle;

                                    var _iL = addStyle(_finishStyle + "!important", "background", "[" + _st + "]");

                                    if (_iL) {
                                        inlineStyle = inlineStyle + _iL;
                                        firstTemporaryStyle.innerText = firstTemporaryStyle.innerText + _iL;
                                    }

                                    _node.setAttribute(_st, "");
                                }
                            }

                            if (_node.style.cssText.indexOf('linear-gradient(') !== -1 && _node.style.cssText.indexOf('url(') == -1) {

                                _node.setAttribute("data-darksite-inline-background-image", "");
                            }

                            if (_node.style.color) {

                                var color = _node.style.color;

                                if (color) {
                                    var _currentStyle2 = (0, _parsers.parse)(color);
                                    var _finishStyle2 = (0, _modify.modifyColor)(_currentStyle2, _modify.modifyFgHSL);
                                    var _stringFinishStyle2 = _finishStyle2.replace(/[^\dA-Za-z]/g, '');

                                    var _st2 = "data-darksite-inline-color" + _stringFinishStyle2;

                                    var _iL2 = addStyle(_finishStyle2 + "!important", "color", "[" + _st2 + "]");

                                    if (_iL2) {
                                        inlineStyle = inlineStyle + _iL2;
                                        firstTemporaryStyle.innerText = firstTemporaryStyle.innerText + _iL2;
                                    }

                                    _node.setAttribute(_st2, "");
                                }
                            }
                        }
                    }

                    var _loop = function _loop(kk) {
                        var node = mutation.addedNodes[kk];
                        if (node && node.nodeType == 1) {

                            var nodeName = node.nodeName.toUpperCase();
                            if (stylenodes.indexOf(nodeName) !== -1) {

                                try {
                                    if (node.sheet && node.sheet.cssRules && currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {

                                        pushCurrentLoadedStyles(node.sheet);

                                        var styleDarkText = interval(node.sheet.cssRules); //перебор всех стилей

                                        styleDark = document.createElement('style');
                                        styleDark.id = 'dark-theme';
                                        styleDark.innerText = styleDarkText;
                                        document.body.appendChild(styleDark);

                                        if (node instanceof HTMLStyleElement) {
                                            subscribeToSheetChanges(node.sheet, styleDark);
                                        }
                                    } else if (currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {

                                        node.addEventListener('load', function () {
                                            try {

                                                if (node.sheet && node.sheet.cssRules && currentLoadedStyles.indexOf(node.sheet) == -1) {

                                                    pushCurrentLoadedStyles(node.sheet);

                                                    var _styleDarkText = interval(node.sheet.cssRules); //загрузка и перебор всех стилей

                                                    styleDark = document.createElement('style');
                                                    styleDark.id = 'dark-theme';
                                                    styleDark.innerText = _styleDarkText;
                                                    document.body.appendChild(styleDark);
                                                }
                                            } catch (e) {
                                                if (node.sheet.href && currentLoadedStyles.indexOf(node.sheet) == -1) {
                                                    pushCurrentLoadedStyles(node.sheet);
                                                    loadCssFile(node.sheet.href, node);
                                                }
                                            }
                                        });
                                    }
                                } catch (e) {
                                    if (node.sheet.href && currentLoadedStyles.indexOf(node.sheet) == -1 && node.id != 'dark-theme' && node.id != 'temporary-dark-theme') {
                                        pushCurrentLoadedStyles(node.sheet);
                                        loadCssFile(node.sheet.href, node);
                                    }
                                }
                            }

                            if (['SVG'].indexOf(nodeName) !== -1) {

                                var fills = document.querySelectorAll("[fill]");

                                for (var i = 0; i < fills.length; i++) {
                                    var fill = fills[i].getAttribute("fill");
                                    if (fill && fill.nodeName == 'text') {
                                        var _currentStyle3 = (0, _parsers.parse)(fill);
                                        var _finishStyle3 = (0, _modify.modifyColor)(_currentStyle3, _modify.modifyFgHSL);
                                        fills[i].setAttribute("fill", _finishStyle3);
                                    } else {
                                        var _currentStyle4 = (0, _parsers.parse)(fill);
                                        var _finishStyle4 = (0, _modify.modifyColor)(_currentStyle4, _modify.modifyBgHSL);
                                        fills[i].setAttribute("fill", _finishStyle4);
                                    }
                                }

                                var strokes = document.querySelectorAll("[stroke]");

                                for (var _i = 0; _i < strokes.length; _i++) {
                                    var stroke = strokes[_i].getAttribute("stroke");
                                    if (stroke) {
                                        var _currentStyle5 = (0, _parsers.parse)(stroke);
                                        var _finishStyle5 = (0, _modify.modifyColor)(_currentStyle5, _modify.modifyFgHSL);
                                        strokes[_i].setAttribute("stroke", _finishStyle5);
                                    }
                                }
                            }
                        }
                    };

                    for (var kk in mutation.addedNodes) {
                        _loop(kk);
                    }
                }
            };
        }
    };

    document.addEventListener("DOMContentLoaded", function () {

        var links = document.querySelectorAll('link[rel="stylesheet"]');
        var styles = document.getElementsByTagName('style');
        var sum = links.length + styles.length;

        if (localStorage.activeDarkSite === 'true') {

            var ii = setInterval(function () {

                if (document.body && !document.getElementById("temporary-dark-theme")) {
                    firstTemporaryStyle = document.createElement('style');
                    firstTemporaryStyle.id = 'temporary-dark-theme';
                    firstTemporaryStyle.innerText = stringStyle;
                    document.body.appendChild(firstTemporaryStyle);
                    clearInterval(ii);
                }
            });

            setTimeout(function () {

                if (localStorage.activeDarkSite == undefined || localStorage.activeDarkSite === 'false') {

                    if (mutationObserver) {
                        mutationObserver.disconnect();
                    }

                    if (firstTemporaryStyle && firstTemporaryStyle.remove) {
                        firstTemporaryStyle.remove();
                    }
                }

                clearInterval(ii);
            }, 1500);

            for (var j = 0; j < document.styleSheets.length; ++j) {
                handlerSheet(document.styleSheets[j]);
            }

            loadImport();
            additionaLoad(document);

            mutationObserver = new MutationObserver(mmm);
            mutationObserver.observe(document.documentElement, {
                childList: true,
                subtree: true
            });

            var allNodes = document.getElementsByTagName('*');
            for (var i = 0; i < allNodes.length; i++) {
                if (allNodes[i].shadowRoot) {
                    allNodes[i].style.background = "#35393b";
                    allNodes[i].style.color = "#bab5ab";
                }
            }

            var cc = currentLoadedStyles.length;

            var aa = setInterval(function () {
                if (cc == currentLoadedStyles.length && currentLoadedStyles.length >= sum) {
                    clearInterval(aa);
                    firstTemporaryStyle.innerText = stringStyle + inlineStyle;
                }
                cc = currentLoadedStyles.length;
            }, 300);

            setTimeout(function () {
                firstTemporaryStyle.innerText = stringStyle + inlineStyle;
                clearInterval(aa);
            }, 3500);
        }

        setTimeout(function () {
            if (firstTemporaryStyle && firstTemporaryStyle.remove) {
                if (localStorage.activeDarkSite === 'false') {
                    firstTemporaryStyle.remove();
                }
            }
        }, 2000);

        if (window.self == window.top) {
            window.onmessage = function (e) {
                if (e.data == 'active') {
                    if (localStorage.activeDarkSite === 'true') {
                        e.source.postMessage('activeDarkSiteTrue', '*');
                    } else {
                        e.source.postMessage('activeDarkSiteFalse', '*');
                    }
                }
            };
        } else {

            window.top.postMessage('active', '*');

            window.onmessage = function (e) {
                if (e.data == 'activeDarkSiteTrue') {
                    localStorage.activeDarkSite = true;
                } else if (e.data == 'activeDarkSiteFalse') {
                    localStorage.activeDarkSite = false;
                }
            };

            window.onbeforeunload = function () {
                window.top.postMessage('active', '*');
            };
        }
    });

    window.addEventListener("load", load);

    function load() {

        if (localStorage.activeDarkSite == 'true') {

            for (var j = 0; j < document.styleSheets.length; ++j) {
                handlerSheet(document.styleSheets[j]);
            }

            loadImport();
            additionaLoad(document);
        }
    }

    function handlerSheet(sheet) {

        try {
            if (sheet.cssRules && sheet.cssRules.length > 0 && currentLoadedStyles.indexOf(sheet) == -1 && sheet.ownerNode.id != 'dark-theme' && sheet.ownerNode.id != 'temporary-dark-theme') {
                pushCurrentLoadedStyles(sheet);

                var styleDarkText = interval(sheet.cssRules);

                styleDark = document.createElement('style');
                styleDark.id = 'dark-theme';
                styleDark.innerText = styleDarkText;
                document.body.appendChild(styleDark);

                if (sheet.ownerNode instanceof HTMLStyleElement) {
                    subscribeToSheetChanges(sheet, styleDark);
                }
            }
        } catch (e) {
            if (sheet.href && currentLoadedStyles.indexOf(sheet) == -1) {
                pushCurrentLoadedStyles(sheet);
                loadCssFile(sheet.href, sheet.ownerNode);
            }
        }
    }

    function interval(rules) {
        // по всем правилам

        var finalString = '';

        if (rules && rules.length) {
            for (var k = 0; k < rules.length; k++) {

                if (rules[k] instanceof CSSMediaRule && rules[k].type == 4 && rules[k].conditionText == 'not all') {} else {
                    try {
                        if (rules[k] instanceof CSSImportRule && rules[k].styleSheet && rules[k].styleSheet.cssRules) {
                            finalString = finalString + interval(rules[k].styleSheet.cssRules);
                        } else {
                            finalString = finalString + addNewRule(rules[k]);
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }

        return finalString;
    }

    function subscribeToSheetChanges(element, styleDark) {
        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;


        var callb = function callb() {

            if (element.cssRules.length != length) {

                var cssText = styleDark.innerText;

                for (var k = length - 1; k < element.cssRules.length - 1; k++) {
                    cssText = cssText + addNewRule(element.cssRules[k]);
                }

                length = element.cssRules.length;

                styleDark.innerText = cssText;
            }

            requestAnimationFrame(callb);
        };

        callb();
    }

    function loadImport() {

        var docs = document.querySelectorAll('link[rel="import"]');
        var finalString = '';

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = docs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                var doc = i.import;
                for (var j = 0; j < doc.styleSheets.length; ++j) {
                    try {
                        if (doc.styleSheets[j].cssRules && doc.styleSheets[j].cssRules.length > 0 && currentLoadedStyles.indexOf(doc.styleSheets[j]) == -1 && doc.styleSheets[j].ownerNode.id != 'dark-theme' && doc.styleSheets[j].ownerNode.id != 'temporary-dark-theme') {
                            pushCurrentLoadedStyles(doc.styleSheets[j]);

                            for (var k = 0; k < doc.styleSheets[j].cssRules.length; k++) {
                                finalString = finalString + addNewRule(doc.styleSheets[j].cssRules[k]);
                            }

                            styleDark = document.createElement('style');
                            styleDark.id = 'dark-theme';
                            styleDark.innerText = finalString;
                            document.body.appendChild(styleDark);
                        }
                    } catch (e) {
                        if (doc.styleSheets[j].href && currentLoadedStyles.indexOf(doc.styleSheets[j]) == -1) {
                            pushCurrentLoadedStyles(doc.styleSheets[j]);
                            loadCssFile(doc.styleSheets[j].href, doc);
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    function additionaLoad(dom) {

        if (document.body && localStorage.activeDarkSite === 'true') {

            // let svgs = dom.getElementsByTagName("svg");
            //
            // for (let i = 0; i < svgs.length; i++) {
            //     let fill = svgs[i].getAttribute("fill");
            //     if (fill) {
            //         let currentStyle = parse(fill);
            //         let finishStyle = modifyColor(currentStyle, modifyFgHSL);
            //         svgs[i].setAttribute("fill", finishStyle);
            //     }
            // }

            var bgcolors = dom.querySelectorAll("[bgcolor]");

            for (var i = 0; i < bgcolors.length; i++) {
                var bgcolor = bgcolors[i].getAttribute("bgcolor");
                if (bgcolor) {
                    var currentStyle = (0, _parsers.parse)(bgcolor);
                    var finishStyle = (0, _modify.modifyColor)(currentStyle, _modify.modifyBgHSL);
                    bgcolors[i].setAttribute("bgcolor", finishStyle);
                }
            }

            // let fills = dom.querySelectorAll("[fill]");
            //
            // for (let i = 0; i < fills.length; i++) {
            //     let fill = fills[i].getAttribute("fill");
            //     if (fill && fill.nodeName == 'text') {
            //         let currentStyle = parse(fill);
            //         let finishStyle = modifyColor(currentStyle, modifyFgHSL);
            //         fills[i].setAttribute("fill", finishStyle);
            //     } else {
            //         let currentStyle = parse(fill);
            //         let finishStyle = modifyColor(currentStyle, modifyBgHSL);
            //         fills[i].setAttribute("fill", finishStyle);
            //     }
            // }

            var colors = dom.querySelectorAll("[color]");

            for (var _i2 = 0; _i2 < colors.length; _i2++) {
                var color = colors[_i2].getAttribute("color");
                if (color) {
                    var _currentStyle6 = (0, _parsers.parse)(color);
                    var _finishStyle6 = (0, _modify.modifyColor)(_currentStyle6, _modify.modifyFgHSL);
                    colors[_i2].setAttribute("color", _finishStyle6);
                }
            }

            // let strokes = dom.querySelectorAll("[stroke]");
            //
            // for (let i = 0; i < strokes.length; i++) {
            //     let stroke = strokes[i].getAttribute("stroke");
            //     if (stroke) {
            //         let currentStyle = parse(stroke);
            //         let finishStyle = modifyColor(currentStyle, modifyFgHSL);
            //         strokes[i].setAttribute("stroke", finishStyle);
            //     }
            // }


            var styles = dom.querySelectorAll("[style]");

            for (var _i3 = 0; _i3 < styles.length; _i3++) {
                addNewStyle(styles[_i3].style, styles[_i3]);
            }
        }
    }

    function addNewStyle(sty, st) {

        var endString = '';

        if (sty && sty.cssText.indexOf('background') !== -1) {

            if (sty.backgroundImage && sty.backgroundImage.indexOf('data:image/png') == -1 && sty.backgroundImage.indexOf('data:image/svg+xml') == -1) {

                if (sty.backgroundRepeatX == 'repeat' || sty.backgroundRepeatY == 'repeat' || sty.backgroundRepeat == 'repeat') {

                    if (sty.backgroundImage.match(_modify.colorMatch)) {
                        var start = sty.backgroundImage.trim();
                        var finish = (0, _modify.findAndReplaceColor)(start, _modify.modifyBgHSL);

                        if (start != finish) {
                            if (sty.getPropertyPriority('background-image') || sty.background) {
                                endString = endString + addStyle(finish + '!important', 'background-image', st);
                            } else {
                                endString = endString + addStyle(finish, 'background-image', st);
                            }
                        }
                    } else {
                        endString = endString + addStyle('rgba(53,57,59,0.5)', 'background', st);
                    }
                } else {

                    var _start = sty.backgroundImage.trim();

                    if (_start.indexOf('url(') !== -1 && _start.indexOf('linear-gradient(') == -1 && _start.indexOf('.svg') == -1 && _start.indexOf('.png') == -1) {

                        endString = endString + addStyle('linear-gradient(rgba(0,0,0,0.23), rgba(0,0,0,0.23)), ' + _start, 'background-image', st);
                    } else {
                        var _finish = (0, _modify.findAndReplaceColor)(_start, _modify.modifyBgHSL);

                        if (_start != _finish) {
                            if (sty.getPropertyPriority('background-image') || sty.background) {
                                endString = endString + addStyle(_finish + '!important', 'background-image', st);
                            } else {
                                endString = endString + addStyle(_finish, 'background-image', st);
                            }
                        } else if (_finish == 'none') {
                            endString = endString + addStyle(_finish, 'background-image', st);
                        } else if (sty.backgroundImage.indexOf('.gif') !== -1) {
                            endString = endString + addStyle('none', 'background-image', st);
                        }
                    }
                }
            }

            if (sty.backgroundColor) {

                var _start2 = sty.backgroundColor.trim();

                if (_start2) {

                    var _finish2 = (0, _modify.findAndReplaceColor)(_start2, _modify.modifyBgHSL);

                    if (_finish2 == '(' || _finish2 == ')' || _finish2 == '') {
                        endString = endString + addStyle('rgba(53,57,59,0.5)', 'background-color', st);
                    } else if (_start2 != _finish2) {
                        if (sty.backgroundImage && sty.backgroundImage.indexOf('url(') !== -1 && sty.backgroundImage.indexOf('.png') == -1 && sty.backgroundImage.indexOf('data:image/png') == -1 && sty.backgroundImage.indexOf('data:image/svg+xml') == -1) {
                            if (sty.getPropertyPriority('background-color') || sty.background) {
                                endString = endString + addStyle(_finish2 + '!important', 'background', st);
                            } else {
                                endString = endString + addStyle(_finish2, 'background', st);
                            }
                        } else if (sty.getPropertyPriority('background-color') || sty.background) {
                            endString = endString + addStyle(_finish2 + '!important', 'background-color', st);
                        } else {
                            endString = endString + addStyle(_finish2, 'background-color', st);
                        }
                    }
                }
            }

            if (sty.background && (sty.backgroundImage == '' || sty.backgroundImage == 'initial') && (sty.backgroundColor == '' || sty.backgroundColor == 'initial')) {

                if (sty.background.indexOf('url(') !== -1) {

                    if (sty.background.indexOf('data:image/svg+xml') == -1) {} else {
                        var sed = sty.background.match(_modify.colorMatch);
                        if (sed) {
                            var col = (0, _parsers.parse)(sed[0]);
                            var color = (0, _modify.modifyColor)(col, _modify.modifyBgHSL);
                            endString = endString + addStyle(color + '!important', 'background', st);
                        }
                    }
                } else {

                    var _start3 = sty.background.trim();
                    if (_start3) {
                        var _finish3 = (0, _modify.findAndReplaceColor)(_start3, _modify.modifyBgHSL, st);

                        if (_finish3 == '(' || _finish3 == ')' || _finish3 == '') {
                            endString = endString + addStyle('rgba(53,57,59,0.5)', 'background', st);
                        } else if (_start3 != _finish3) {
                            if (sty.getPropertyPriority('background')) {
                                endString = endString + addStyle(_finish3 + '!important', 'background', st);
                            } else {
                                endString = endString + addStyle(_finish3, 'background', st);
                            }
                        }
                    }
                }
            } else {
                var _start4 = sty.background.trim();
                if (_start4) {

                    var _finish4 = (0, _modify.findAndReplaceColor)(_start4, _modify.modifyBgHSL);

                    if (_start4 != _finish4) {
                        if (sty.getPropertyPriority('background')) {
                            endString = endString + addStyle(_finish4 + '!important', 'background', st);
                        } else {
                            endString = endString + addStyle(_finish4, 'background-color', st);
                        }
                    }
                }
            }
        }

        if (sty && sty.cssText.indexOf('border') !== -1) {

            if (sty.borderColor && unparsableColors.indexOf(sty.borderColor) == -1) {

                var _start5 = sty.borderColor.trim();
                if (_start5) {

                    var _finish5 = (0, _modify.findAndReplaceColor)(_start5, _modify.modifyBorderHSL);

                    if (_start5 != _finish5) {
                        if (sty.getPropertyPriority('border-color')) {
                            endString = endString + addStyle(_finish5 + '!important', 'border-color', st);
                        } else {
                            endString = endString + addStyle(_finish5, 'border-color', st);
                        }
                    }
                }
            }

            if (sty.border && unparsableColors.indexOf(sty.border) == -1) {

                var _start6 = sty.border.trim();

                if (_start6) {

                    var _finish6 = (0, _modify.findAndReplaceColor)(_start6, _modify.modifyBorderHSL);

                    if (_start6 != _finish6) {

                        if (sty.getPropertyPriority('border')) {
                            endString = endString + addStyle(_finish6 + '!important', 'border', st);
                        } else {
                            endString = endString + addStyle(_finish6, 'border', st);
                        }
                    }
                }
            }

            if (sty.borderBottom && unparsableColors.indexOf(sty.borderBottom) == -1) {

                var _start7 = sty.borderBottom.trim();

                if (_start7) {
                    var _finish7 = (0, _modify.findAndReplaceColor)(_start7, _modify.modifyBorderHSL);

                    if (_start7 != _finish7) {

                        if (sty.getPropertyPriority('border-bottom')) {
                            endString = endString + addStyle(_finish7 + '!important', 'border-bottom', st);
                        } else {
                            endString = endString + addStyle(_finish7, 'border-bottom', st);
                        }
                    }
                }
            }

            if (sty.borderTop && unparsableColors.indexOf(sty.borderTop) == -1) {

                var _start8 = sty.borderTop.trim();

                if (_start8) {

                    var _finish8 = (0, _modify.findAndReplaceColor)(_start8, _modify.modifyBorderHSL);

                    if (_start8 != _finish8) {

                        if (sty.getPropertyPriority('border-top')) {
                            endString = endString + addStyle(_finish8 + '!important', 'border-top', st);
                        } else {
                            endString = endString + addStyle(_finish8, 'border-top', st);
                        }
                    }
                }
            }

            if (sty.borderLeft && unparsableColors.indexOf(sty.borderLeft) == -1) {

                var _start9 = sty.borderLeft.trim();

                if (_start9) {
                    var _finish9 = (0, _modify.findAndReplaceColor)(_start9, _modify.modifyBorderHSL);

                    if (_start9 != _finish9) {

                        if (sty.getPropertyPriority('border-left')) {
                            endString = endString + addStyle(_finish9 + '!important', 'border-left', st);
                        } else {
                            endString = endString + addStyle(_finish9, 'border-left', st);
                        }
                    }
                }
            }

            if (sty.borderRight && unparsableColors.indexOf(sty.borderRight) == -1) {

                var _start10 = sty.borderRight.trim();

                if (_start10) {
                    var _finish10 = (0, _modify.findAndReplaceColor)(_start10, _modify.modifyBorderHSL);

                    if (_start10 != _finish10) {

                        if (sty.getPropertyPriority('border-right')) {
                            endString = endString + addStyle(_finish10 + '!important', 'border-right', st);
                        } else {
                            endString = endString + addStyle(_finish10, 'border-right', st);
                        }
                    }
                }
            }
        }

        if (sty && sty.outline && unparsableColors.indexOf(sty.outline) == -1) {

            var _start11 = sty.outline.trim();

            if (_start11) {
                var _finish11 = (0, _modify.findAndReplaceColor)(_start11, _modify.modifyBorderHSL);

                if (_start11 != _finish11) {

                    if (sty.getPropertyPriority('outline')) {
                        endString = endString + addStyle(_finish11 + '!important', 'outline', st);
                    } else {
                        endString = endString + addStyle(_finish11, 'outline', st);
                    }
                }
            }
        }

        if (sty && sty.boxShadow && unparsableColors.indexOf(sty.boxShadow) == -1) {

            var _start12 = sty.boxShadow.trim();

            if (_start12) {
                var _finish12 = (0, _modify.findAndReplaceColor)(_start12, _modify.modifyBorderHSL);
                if (_start12 != _finish12) {

                    if (sty.getPropertyPriority('box-shadow')) {
                        endString = endString + addStyle(_finish12 + '!important', 'box-shadow', st);
                    } else {
                        endString = endString + addStyle(_finish12, 'box-shadow', st);
                    }
                }
            }
        }

        if (sty && sty.textShadow && unparsableColors.indexOf(sty.textShadow) == -1) {

            var _start13 = sty.textShadow.trim();

            if (_start13) {
                var _finish13 = (0, _modify.findAndReplaceColor)(_start13, _modify.modifyBorderHSL);

                if (_start13 != _finish13) {
                    if (sty.getPropertyPriority('text-shadow')) {
                        endString = endString + addStyle(_finish13 + '!important', 'text-shadow', st);
                    } else {
                        endString = endString + addStyle(_finish13, 'text-shadow', st);
                    }
                }
            }
        }

        if (sty && sty.color && unparsableColors.indexOf(sty.color) == -1) {

            var _start14 = sty.color.trim();

            if (_start14 && st != '*, ::before, ::after') {

                var _finish14 = (0, _modify.findAndReplaceColor)(_start14, _modify.modifyFgHSL);

                if (_finish14 == '(' || _finish14 == ')' || _finish14 == '') {
                    endString = endString + addStyle('#bab5ab', 'color', st);
                } else if (_start14 != _finish14) {
                    if (sty.getPropertyPriority('color')) {
                        endString = endString + addStyle(_finish14 + '!important', 'color', st);
                    } else {
                        endString = endString + addStyle(_finish14, 'color', st);
                    }
                }
            }
        }

        if (sty && sty.fill && unparsableColors.indexOf(sty.fill) == -1) {

            var _start15 = sty.fill.trim();

            var _finish15 = (0, _modify.findAndReplaceColor)(_start15, _modify.modifyFgHSL);

            if (_start15 != _finish15) {
                if (sty.getPropertyPriority('fill')) {
                    endString = endString + addStyle(_finish15 + '!important', 'fill', st);
                } else {
                    endString = endString + addStyle(_finish15, 'fill', st);
                }
            }
        }

        return endString;
    }

    function addNewRule(rule) {

        if (rule && rule.selectorText == undefined && rule.cssRules) {

            var lll = '';

            for (var kk = 0; kk < rule.cssRules.length; kk++) {

                var sty = rule.cssRules[kk].style;
                var st = rule.cssRules[kk].selectorText;

                var ttt = addNewStyle(sty, st);

                if (ttt != undefined) {
                    lll = lll + ttt;
                }
            }

            return lll;
        } else if (rule) {

            var _lll = '';

            var _sty = rule.style;
            var _st3 = rule.selectorText;

            var _ttt = addNewStyle(_sty, _st3);

            if (_ttt != undefined) {
                _lll = _ttt;
            }

            return _lll;
        }
    }

    function addStyle(finishStyle, styleName, st) {

        if (typeof st === 'string') {
            var str = ' ' + st + ' {' + styleName + ':' + finishStyle + ';}';

            if (arr[str] == undefined) {
                arr[str] = ' ';
                return str;
            }
        } else if (st) {
            st.style[styleName] = finishStyle;
        }

        return '';
    }

    function createTemporaryStyle() {

        var stringStyle = 'html, body, input, textarea, select, body *, html *, table *, thead *, div, *:before, *:after, *:active {color: #bab5ab!important; background: #35393b!important; background-color: #35393b!important;} input[type="text"], textarea, select {color: #bab5ab!important; background: #35393b;}';

        if (localStorage.activeDarkSite === 'true') {

            if (!document.getElementById("temporary-dark-theme")) {
                firstTemporaryStyle = document.createElement('style');
                firstTemporaryStyle.id = 'temporary-dark-theme';
                firstTemporaryStyle.innerText = stringStyle;
                document.documentElement.appendChild(firstTemporaryStyle);
            }

            var ii = setInterval(function () {

                if (document.body && !document.body.querySelector("#temporary-dark-theme")) {
                    document.body.appendChild(firstTemporaryStyle);
                    clearInterval(ii);
                }
            });

            setTimeout(function () {
                clearInterval(ii);
            }, 1000);
        }
    }

    function loadCssFile(href, node) {

        var request = async function request() {
            var response = await fetch(href);
            var data = await response.text();

            data = data.trim().replace(cssImportRegex, '');

            var newStyleSync = createCssSync(href);
            newStyleSync.textContent = data;

            return newStyleSync;
        };

        (async function () {
            var newStyleSync = await request();

            var styleDarkText = interval(newStyleSync.sheet.cssRules); //загрузка и перебор всех стилей

            styleDark = document.createElement('style');
            styleDark.id = 'dark-theme';
            styleDark.innerText = styleDarkText;
            document.body.appendChild(styleDark);

            try {
                newStyleSync.remove();
            } catch (e) {
                console.log('Error load', e);
            }
        })();
    }

    function pushCurrentLoadedStyles(item) {
        currentLoadedStyles.push(item);
    }

    function createCssSync(href) {
        var styleSync = document.createElement('style');
        styleSync.id = href;
        document.head.appendChild(styleSync);
        return styleSync;
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.scale = scale;
exports.createFilterMatrix = createFilterMatrix;
exports.multiplyMatrices = multiplyMatrices;
exports.applyColorMatrix = applyColorMatrix;
exports.clamp = clamp;
var Matrix = {
    identity: function identity() {
        return [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    invertNHue: function invertNHue() {
        return [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    brightness: function brightness(v) {
        return [[v, 0, 0, 0, 0], [0, v, 0, 0, 0], [0, 0, v, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    contrast: function contrast(v) {
        var t = (1 - v) / 2;
        return [[v, 0, 0, 0, t], [0, v, 0, 0, t], [0, 0, v, 0, t], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    sepia: function sepia(v) {
        return [[0.393 + 0.607 * (1 - v), 0.769 - 0.769 * (1 - v), 0.189 - 0.189 * (1 - v), 0, 0], [0.349 - 0.349 * (1 - v), 0.686 + 0.314 * (1 - v), 0.168 - 0.168 * (1 - v), 0, 0], [0.272 - 0.272 * (1 - v), 0.534 - 0.534 * (1 - v), 0.131 + 0.869 * (1 - v), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    },
    grayscale: function grayscale(v) {
        return [[0.2126 + 0.7874 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0], [0.2126 - 0.2126 * (1 - v), 0.7152 + 0.2848 * (1 - v), 0.0722 - 0.0722 * (1 - v), 0, 0], [0.2126 - 0.2126 * (1 - v), 0.7152 - 0.7152 * (1 - v), 0.0722 + 0.9278 * (1 - v), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
    }
};

function scale(x, inLow, inHigh, outLow, outHigh) {
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}

function createFilterMatrix(config) {
    var m = Matrix.identity();
    if (config.sepia !== 0) {
        m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
    }
    if (config.grayscale !== 0) {
        m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
    }
    if (config.contrast !== 100) {
        m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
    }
    if (config.brightness !== 100) {
        m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
    }
    if (config.mode === 1) {
        m = multiplyMatrices(m, Matrix.invertNHue());
    }
    return m;
}

function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function applyColorMatrix(_ref, matrix) {
    var _ref2 = _slicedToArray(_ref, 3),
        r = _ref2[0],
        g = _ref2[1],
        b = _ref2[2];

    var rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
    var result = multiplyMatrices(matrix, rgb);
    return [0, 1, 2].map(function (i) {
        return clamp(Math.round(result[i][0] * 255), 0, 255);
    });
}

function clamp(x, min, max) {
    return Math.min(max, Math.max(min, x));
}

/***/ })
/******/ ]);