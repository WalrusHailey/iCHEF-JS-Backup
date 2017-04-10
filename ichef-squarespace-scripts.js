/*!
 * ichef-squarespace-scripts v1.0.0
 * UNLICENSED Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ichefWebsite"] = factory();
	else
		root["ichefWebsite"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _get_locale_data = __webpack_require__(6);

	var _get_locale_data2 = _interopRequireDefault(_get_locale_data);

	var _update_header = __webpack_require__(9);

	var _update_footer = __webpack_require__(11);

	var _seo = __webpack_require__(12);

	var _home_locale_redirect = __webpack_require__(13);

	var _home_locale_redirect2 = _interopRequireDefault(_home_locale_redirect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	(function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
	        var _ref2, headerLogo, headerNav, companyInfo, socialLinks, currentLocale, footerNav, seo;

	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.prev = 0;

	                        // Home page redirect
	                        (0, _home_locale_redirect2.default)();

	                        _context.next = 4;
	                        return (0, _get_locale_data2.default)();

	                    case 4:
	                        _context.t0 = _context.sent;

	                        if (_context.t0) {
	                            _context.next = 7;
	                            break;
	                        }

	                        _context.t0 = {};

	                    case 7:
	                        _ref2 = _context.t0;
	                        headerLogo = _ref2.headerLogo;
	                        headerNav = _ref2.headerNav;
	                        companyInfo = _ref2.companyInfo;
	                        socialLinks = _ref2.socialLinks;
	                        currentLocale = _ref2.currentLocale;
	                        footerNav = _ref2.footerNav;
	                        seo = _ref2.seo;

	                        // Update header contents

	                        if (headerLogo) (0, _update_header.updateHeaderLogo)(headerLogo);
	                        if (headerNav) (0, _update_header.updateHeaderNav)(headerNav);

	                        // Show hidden header container
	                        setTimeout(function () {
	                            (0, _update_header.showHeaderContainer)();
	                        });

	                        // Update footer contents
	                        if (companyInfo) (0, _update_footer.updateFooterCompanyInfo)(companyInfo);
	                        if (socialLinks) (0, _update_footer.updateFooterSocialLinks)(socialLinks);
	                        if (currentLocale) (0, _update_footer.updateFooterCurrentLocale)(currentLocale);
	                        if (footerNav) (0, _update_footer.updateFooterNav)(footerNav);

	                        // Apply SEO(s)
	                        if (seo) {
	                            if (seo.gtm) (0, _seo.applyGTM)(seo.gtm);
	                            if (seo.pixel) (0, _seo.applyFacebookPixel)(seo.pixel);
	                            if (seo.zendesk) (0, _seo.applyZendeskChat)(seo.zendesk);
	                        }
	                        _context.next = 27;
	                        break;

	                    case 25:
	                        _context.prev = 25;
	                        _context.t1 = _context['catch'](0);

	                    case 27:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this, [[0, 25]]);
	    }));

	    function ichefSquarespaceScripts() {
	        return _ref.apply(this, arguments);
	    }

	    return ichefSquarespaceScripts;
	})()();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(4);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _jquery = __webpack_require__(7);

	var _all_locale_code = __webpack_require__(8);

	// -------------------------------------
	//   Get locale's JSON name
	// -------------------------------------

	function getLocaleJsonName(currentPathname) {
	    var pathnameArray = currentPathname.split(/[\/\/]/);
	    var localePath = pathnameArray[1];

	    // If not valid locale path, use default
	    if (_all_locale_code.ALL_LOCALES.indexOf(localePath) < 0) {
	        return _all_locale_code.DEFAULT_LOCALE + '/website';
	    }

	    // If event site
	    if (localePath === 'event') {
	        return 'event/' + pathnameArray[2];
	    }

	    // If blog site
	    if (pathnameArray[2] === 'blog') {
	        return localePath + '/blog';
	    }

	    return localePath + '/website';
	}

	// -------------------------------------
	//   Get localize data
	// -------------------------------------

	function getLocaleData() {
	    var localeJsonName = getLocaleJsonName(window.location.pathname);

	    return (0, _jquery.ajax)(_all_locale_code.LOCALE_HOST + '/' + localeJsonName + '.json');
	}

	exports.default = getLocaleData;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var $ = window.jQuery || window.$;

	if (!$) {
	    throw new Error('Please include jquery dependencies!');
	}

	var ajax = exports.ajax = $.ajax;
	exports.default = $;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
		"LOCALE_HOST": "//ichef.github.io/ichef-squarespace-scripts/locale_data",
		"DEFAULT_LOCALE": "en-us",
		"ALL_LOCALES": [
			"zh-tw",
			"zh-hk",
			"en-us",
			"en-my",
			"en-sg",
			"en-ph",
			"ja-jp",
			"th-th",
			"event",
			"language"
		],
		"COUNTRY_LOCALES": {
			"tw": "zh-tw",
			"hk": "zh-hk",
			"us": "en-us",
			"my": "en-my",
			"sg": "en-sg",
			"ph": "en-ph",
			"jp": "ja-jp",
			"th": "th-th"
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.updateHeaderLogo = updateHeaderLogo;
	exports.updateHeaderNav = updateHeaderNav;
	exports.showHeaderContainer = showHeaderContainer;

	var _jquery = __webpack_require__(7);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _NewNavBody = __webpack_require__(10);

	var _NewNavBody2 = _interopRequireDefault(_NewNavBody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// -------------------------------------
	//   Update header logo
	// -------------------------------------

	function updateHeaderLogo(headerLogo) {
	    if (!headerLogo.image || !headerLogo.link) {
	        return;
	    }

	    var LogoImgEl = (0, _jquery2.default)('#header h1[data-content-field="site-title"] img');
	    var LogoLinkEl = (0, _jquery2.default)('#header h1[data-content-field="site-title"] a');

	    // Update contents
	    LogoImgEl.attr('src', headerLogo.image);
	    LogoLinkEl.attr('href', headerLogo.link);
	}

	// -------------------------------------
	//   Update header navigation
	// -------------------------------------

	function updateHeaderNav(headerNav) {
	    var DesktopNav = (0, _jquery2.default)('#desktopNav ul');
	    var MobileNav = (0, _jquery2.default)('#mobileNav ul');

	    var newNavBody = new _NewNavBody2.default(headerNav).result();

	    DesktopNav.html(newNavBody);
	    MobileNav.html(newNavBody);
	}

	// -------------------------------------
	//   Show header container
	// -------------------------------------

	function showHeaderContainer() {
	    var HeaderContainer = (0, _jquery2.default)('#header > *');

	    HeaderContainer.css({
	        opacity: 1,
	        transition: 'opacity .1s ease-out'
	    });
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewNavBody = function () {
	    function NewNavBody(navList) {
	        var _this = this;

	        _classCallCheck(this, NewNavBody);

	        this.getNavItemClassName = function (itemType) {
	            switch (itemType) {
	                case 'index':
	                    return 'index-collection';
	                case 'page':
	                    return 'page-collection';
	                case 'folders':
	                    return 'folders-collection folder';
	                case 'external':
	                    return 'external-link';
	                default:
	                    console.warn('Get unknown nav item type: ' + itemType);
	                    return '';
	            }
	        };

	        this.newNormalNavItemElement = function (navItem) {
	            var linkTarget = navItem.type === 'external' ? '_blank' : '_self';
	            var navItemClassname = _this.getNavItemClassName(navItem.type);

	            return '\n            <li class="' + navItemClassname + '">\n                <a href="' + navItem.link + '" target="' + linkTarget + '">\n                    <span>' + navItem.name + '</span>\n                </a>\n            </li>\n        ';
	        };

	        this.newFoldersNavItemElement = function (navItem) {
	            var navItemClassname = _this.getNavItemClassName(navItem.type);

	            // folder toggle ID
	            var randomId = ('' + Math.random()).substring(2);
	            var folderToggleId = 'folder-toggle-' + randomId;

	            // Sub navItem elements
	            var subNavElements = navItem.links.map(function (subNavItem) {
	                return '\n            <li>\n                <a href="' + subNavItem.link + '">\n                    <span>' + subNavItem.name + '</span>\n                </a>\n            </li>\n        ';
	            });

	            return '\n            <li class="' + navItemClassname + '">\n                <div class="folder-parent">\n                    <input\n                        type="checkbox"\n                        class="folder-toggle-box hidden"\n                        name="' + folderToggleId + '"\n                        id="' + folderToggleId + '" />\n                    <label for="' + folderToggleId + '" class="folder-toggle-label">\n                        <a aria-haspopup="true">\n                            <span>' + navItem.name + '</span>\n                        </a>\n                    </label>\n                    <div class="folder-child-wrapper">\n                        <ul class="folder-child">\n                            ' + subNavElements.join('') + '\n                        </ul>\n                    </div>\n                </div>\n            </li>\n        ';
	        };

	        this.navList = navList;

	        this.result = this.result.bind(this);
	    }

	    // -------------------------------------
	    //   Get navItem classname
	    // -------------------------------------

	    // -------------------------------------
	    //   new nav item's element
	    // -------------------------------------

	    // -------------------------------------
	    //   Result
	    // -------------------------------------

	    NewNavBody.prototype.result = function result() {
	        var _this2 = this;

	        var resultArray = this.navList.map(function (navItem) {
	            switch (navItem.type) {
	                case 'folders':
	                    return _this2.newFoldersNavItemElement(navItem);
	                default:
	                    return _this2.newNormalNavItemElement(navItem);
	            }
	        });

	        return resultArray.join('');
	    };

	    return NewNavBody;
	}();

	exports.default = NewNavBody;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.updateFooterCompanyInfo = updateFooterCompanyInfo;
	exports.updateFooterSocialLinks = updateFooterSocialLinks;
	exports.updateFooterCurrentLocale = updateFooterCurrentLocale;
	exports.updateFooterNav = updateFooterNav;

	var _jquery = __webpack_require__(7);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _NewNavBody = __webpack_require__(10);

	var _NewNavBody2 = _interopRequireDefault(_NewNavBody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// -------------------------------------
	//   Update footer's company info
	// -------------------------------------

	function updateFooterCompanyInfo(companyInfo) {
	    (0, _jquery2.default)('#footerBlocks h3').each(function (index, h3El) {
	        var TargetEl = h3El.nextSibling || h3El;
	        var targetInfo = companyInfo[index];

	        if (targetInfo) {
	            TargetEl.innerHTML = targetInfo;
	        } else {
	            console.warn('Cannot apply info for ' + TargetEl);
	        }
	    });
	}

	// -------------------------------------
	//   Update footer's social links
	// -------------------------------------

	function updateFooterSocialLinks(socialLinks) {
	    var SocialLinksNav = (0, _jquery2.default)('#footerBlocks .socialaccountlinks-v2-block nav');

	    Object.keys(socialLinks).forEach(function (socialLinkName) {
	        var socialLinkUrl = socialLinks[socialLinkName];
	        var SocialLinksItem = (0, _jquery2.default)('a.' + socialLinkName, SocialLinksNav);

	        SocialLinksItem.attr('href', socialLinkUrl);
	    });
	}

	// -------------------------------------
	//   Update footer's current locale
	// -------------------------------------

	function updateFooterCurrentLocale(currentLocale) {
	    if (!currentLocale.name || !currentLocale.image) {
	        return;
	    }

	    var LocaleLinks = (0, _jquery2.default)('#footerBlocks a[href="/language"]');
	    LocaleLinks.each(function (index, element) {
	        switch (index) {
	            // Locale Image
	            case 0:
	                (0, _jquery2.default)(element).html('<img src="' + currentLocale.image + '" />');
	                break;
	            // Locale Text Link
	            case 1:
	                (0, _jquery2.default)(element).html(currentLocale.name);
	                break;
	            default:
	                break;
	        }
	    });
	}

	// -------------------------------------
	//   Update footer navigation
	// -------------------------------------

	function updateFooterNav(footerNav) {
	    var FooterNav = (0, _jquery2.default)('#footer #secondaryNav ul');
	    var newNavBody = new _NewNavBody2.default(footerNav).result();

	    FooterNav.html(newNavBody);
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.applyGTM = applyGTM;
	exports.applyFacebookPixel = applyFacebookPixel;
	exports.applyZendeskChat = applyZendeskChat;
	// -------------------------------------
	//   Google Tag Manager
	// -------------------------------------

	function renderGTM(gtmCode) {
	    /* eslint-disable */
	    (function (w, d, s, l, i) {
	        w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
	            j = d.createElement(s),
	            dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
	    })(window, document, 'script', 'dataLayer', gtmCode);
	    /* eslint-enable */
	}

	function applyGTM(gtmCodes) {
	    if (typeof gtmCodes === 'string') {
	        return renderGTM(gtmCodes);
	    }

	    return gtmCodes.forEach(function (code) {
	        renderGTM(code);
	    });
	}

	// -------------------------------------
	//   Facebook Pixel
	// -------------------------------------

	function applyFacebookPixel(pixelCode) {
	    /* eslint-disable */
	    !function (f, b, e, v, n, t, s) {
	        if (f.fbq) return;n = f.fbq = function () {
	            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
	        };if (!f._fbq) f._fbq = n;
	        n.push = n;n.loaded = !0;n.version = '2.0';n.queue = [];t = b.createElement(e);t.async = !0;
	        t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);
	    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

	    fbq('init', pixelCode);
	    fbq('track', "PageView");
	    /* eslint-enable */
	}

	// -------------------------------------
	//   Zendesk Zopim Live Chat
	// -------------------------------------

	function applyZendeskChat(zendeskCode) {
	    /* eslint-disable */
	    (function (d, s) {
	        var z = window.$zopim = function (c) {
	            z._.push(c);
	        },
	            $ = z.s = d.createElement(s),
	            e = d.getElementsByTagName(s)[0];z.set = function (o) {
	            z.set._.push(o);
	        };z._ = [];z.set._ = [];$.async = !0;$.setAttribute('charset', 'utf-8');
	        $.src = '//v2.zopim.com/?' + zendeskCode;z.t = +new Date();$.type = 'text/javascript';e.parentNode.insertBefore($, e);
	    })(document, 'script');
	    /* eslint-enable */
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	// -------------------------------------
	//   Home locale redirect
	// -------------------------------------

	var homeLocaleRedirect = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
	        var userLocale;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (!(window.location.pathname === '/')) {
	                            _context.next = 8;
	                            break;
	                        }

	                        _context.next = 3;
	                        return (0, _get_user_locale2.default)();

	                    case 3:
	                        _context.t0 = _context.sent;

	                        if (_context.t0) {
	                            _context.next = 6;
	                            break;
	                        }

	                        _context.t0 = _all_locale_code.DEFAULT_LOCALE;

	                    case 6:
	                        userLocale = _context.t0;


	                        // Do not redirect if user located in DEFAULT_LOCALE
	                        if (isSupportedLocale(userLocale) && userLocale !== _all_locale_code.DEFAULT_LOCALE) {
	                            window.location.replace('/' + userLocale);
	                        }

	                    case 8:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));

	    return function homeLocaleRedirect() {
	        return _ref.apply(this, arguments);
	    };
	}();

	var _get_user_locale = __webpack_require__(14);

	var _get_user_locale2 = _interopRequireDefault(_get_user_locale);

	var _all_locale_code = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	// -------------------------------------
	//   Check supported locale
	// -------------------------------------

	function isSupportedLocale(localeCode) {
	    if (_all_locale_code.ALL_LOCALES.indexOf(localeCode) < 0) {
	        return false;
	    }

	    return true;
	}exports.default = homeLocaleRedirect;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	// -------------------------------------
	//   Get user's locale
	// -------------------------------------

	var getUserLocale = function () {
	    var _ref = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
	        var userIpInformation, userCountry, navigatorLanguage;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.prev = 0;
	                        _context.next = 3;
	                        return getUserIpInformation();

	                    case 3:
	                        userIpInformation = _context.sent;
	                        userCountry = userIpInformation.country.toLowerCase();
	                        return _context.abrupt('return', _all_locale_code.COUNTRY_LOCALES[userCountry]);

	                    case 8:
	                        _context.prev = 8;
	                        _context.t0 = _context['catch'](0);
	                        navigatorLanguage = getNavigatorLanguage();
	                        return _context.abrupt('return', navigatorLanguage);

	                    case 12:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this, [[0, 8]]);
	    }));

	    return function getUserLocale() {
	        return _ref.apply(this, arguments);
	    };
	}();

	var _jquery = __webpack_require__(7);

	var _all_locale_code = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	// -------------------------------------
	//   Get language code from browser's
	//   navigator
	// -------------------------------------

	function getNavigatorLanguage() {
	    if (!window.navigator) {
	        return null;
	    }

	    return window.navigator.language.toLocaleLowerCase();
	}

	// -------------------------------------
	//   Get contry code from user IP
	// -------------------------------------

	function getUserIpInformation() {
	    return (0, _jquery.ajax)('//ipinfo.io/json');
	}exports.default = getUserLocale;

/***/ }
/******/ ])
});
;