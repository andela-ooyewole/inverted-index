/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books_json__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__books_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adventure_books_json__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adventure_books_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__adventure_books_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_array_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_array_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__empty_array_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invalid_content_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invalid_content_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__invalid_content_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invalid_file_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invalid_file_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__invalid_file_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invalid_key_json__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invalid_key_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__invalid_key_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__science_fiction_books_json__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__science_fiction_books_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__science_fiction_books_json__);
// eslint-disable-next-line no-use-before-define








const index = new Index();

index.createIndex('books.json', __WEBPACK_IMPORTED_MODULE_0__books_json___default.a);
index.createIndex('adventure-books.json', __WEBPACK_IMPORTED_MODULE_1__adventure_books_json___default.a);
index.createIndex('science-fiction-books.json', __WEBPACK_IMPORTED_MODULE_6__science_fiction_books_json___default.a);

describe('Read book data', () => {
  it('Should have keys named \'title\' and \'text\' with string for values',
    () => {
      expect(index.validateFile(__WEBPACK_IMPORTED_MODULE_3__invalid_content_json___default.a)).toBe('Invalid file content');
      expect(index.validateFile(__WEBPACK_IMPORTED_MODULE_5__invalid_key_json___default.a)).toBe('Invalid file content');
    });
  it('Should not be empty', () => {
    expect(index.validateFile(__WEBPACK_IMPORTED_MODULE_2__empty_array_json___default.a)).toBe('File is empty');
  });
  it('Should not be an invalid file', () => {
    expect(index.validateFile(__WEBPACK_IMPORTED_MODULE_4__invalid_file_json___default.a)).toBe('Invalid file');
    expect(index.validateFile(__WEBPACK_IMPORTED_MODULE_0__books_json___default.a)).toBe('Valid file');
  });
});

describe('Populate Index', () => {
  it('Should verify that the index is created once the JSON file has been read',
    () => {
      expect(index.getIndex('books.json')).toBeDefined();
    });
  it('Should map the string keys to the correct objects in the JSON array',
    () => {
      expect(index.getIndex('books.json')).toEqual(
        {
          a: [0, 1],
          alice: [0],
          alliance: [1],
          an: [1],
          and: [0, 1],
          destroy: [1],
          dwarf: [1],
          elf: [1],
          enters: [0],
          falls: [0],
          fellowship: [1],
          full: [0],
          hobbit: [1],
          hole: [0],
          imagination: [0],
          in: [0],
          into: [0],
          lord: [1],
          man: [1],
          of: [0, 1],
          powerful: [1],
          rabbit: [0],
          ring: [1],
          rings: [1],
          seek: [1],
          the: [1],
          to: [1],
          unusual: [1],
          wizard: [1],
          wonderland: [0],
          world: [0]
        }
      );
    });
});

describe('Search Index', () => {
  it(`Should return an array of the indices of the correct objects that contain
    the words in the search query`, () => {
    expect(index.searchIndex('books.json', 'a rabbit')).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });
    expect(index.searchIndex('adventure-books.json', 'a king billy')).toEqual({
      'adventure-books.json': {
        a: [0, 1],
        king: [0],
        billy: [1]
      }
    });
  });
  it('Should handle an array of search terms', () => {
    expect(index.searchIndex('books.json', ['a, rabbit'])).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });
    expect(index.searchIndex('adventure-books.json', ['a', 'king', 'billy']))
      .toEqual({
        'adventure-books.json': {
          a: [0, 1],
          king: [0],
          billy: [1]
        }
      });
  });
  it('Should handle a varied number of search terms', () => {
    expect(index.searchIndex('books.json', 'a', 'rabbit')).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });
  });
  it('Should return an empty object if no match is found', () => {
    expect(index.searchIndex('adventure-books.json', 'house'))
      .toEqual({
        'adventure-books.json': {}
      });
  });
  it('Should normalize search string before search', () => {
    expect(index.searchIndex(
      'books.json', 'A RABBIT!@#$%^&*()_+=-][}{/?><.,|}]`~€‹›'
    )).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });
  });
  it('Should have an optional "filename" argument ', () => {
    expect(index.searchIndex('a', 'and', 'of'))
    .toEqual({
      'books.json': {
        a: [0, 1],
        and: [0, 1],
        of: [0, 1]
      },
      'adventure-books.json': {
        a: [0, 1],
        of: [0]
      },
      'science-fiction-books.json': {
        a: [0, 2],
        and: [2],
        of: [2]
      }
    });
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(9);

module.exports = {
  entry: './jasmine/spec/inverted-index-test.js',
  output: {
    filename: 'bundled-inverted-index-test.js',
    path: path.resolve(__dirname, './jasmine/spec/')
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = [
	{
		"title": "King Solomons Mines",
		"text": "It tells of a search of an unexplored region of Africa by a group of adventurers."
	},
	{
		"title": "Treasure Island",
		"text": "A wild seaman, Billy Bones, comes to stay, bringing with him a large sea chest"
	}
];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [
	{
		"title": "Alice in Wonderland",
		"text": "Alice falls into a rabbit hole and enters a world full of imagination."
	},
	{
		"title": "The Lord of the Rings: The Fellowship of the Ring.",
		"text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
	}
];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [
	{
		"title": "sample",
		"text": true
	}
];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [
	{
		"t": "sample",
		"text": "sample"
	}
];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = [
	{
		"title": "Stranger in a Strange Land",
		"text": "Valentine Michael Smith is a human being raised on Mars, newly returned to Earth."
	},
	{
		"title": "Ender's Game",
		"text": "Andrew Ender Wiggin thinks he is playing computer simulated war games."
	},
	{
		"title": "The Moon is a Harsh Mistress",
		"text": "The Moon is a penal colony for the rebellious and the unwanted of Earth."
	}
];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);