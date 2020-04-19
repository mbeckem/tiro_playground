webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/runtime/impl.ts":
/*!*****************************!*\
  !*** ./src/runtime/impl.ts ***!
  \*****************************/
/*! exports provided: createRuntime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRuntime", function() { return createRuntime; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_tiro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/tiro */ "./lib/tiro.js");
/* harmony import */ var _lib_tiro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_tiro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_tiro_wasm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/tiro.wasm */ "./lib/tiro.wasm");






function createRuntime() {
  var _await$loadTiro, nativeTiro, runtime;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.async(function createRuntime$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (true) {
            _context.next = 2;
            break;
          }

          throw new Error("Cannot compile server side.");

        case 2:
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.awrap(loadTiro());

        case 4:
          _await$loadTiro = _context.sent;
          nativeTiro = _await$loadTiro.nativeTiro;
          runtime = new nativeTiro.TiroRuntime();
          return _context.abrupt("return", new RuntimeImpl(runtime));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

var RuntimeImpl = /*#__PURE__*/function () {
  function RuntimeImpl(nativeRuntime) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RuntimeImpl);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_nativeRuntime", void 0);

    this._nativeRuntime = nativeRuntime;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RuntimeImpl, [{
    key: "destroy",
    value: function destroy() {
      if (this._nativeRuntime) {
        this._nativeRuntime["delete"]();

        this._nativeRuntime = undefined;
      }
    }
  }, {
    key: "compile",
    value: function compile(source) {
      this._checkDestroyed();

      var start = new Date();
      var input = JSON.stringify({
        source: source
      });
      var output = JSON.parse(this._nativeRuntime.compile(input));
      output.elapsedMillis = new Date().getTime() - start.getTime();
      return output;
    }
  }, {
    key: "run",
    value: function run(functionName) {
      this._checkDestroyed();

      var start = new Date();
      var input = JSON.stringify({
        "function": functionName
      });
      var output = JSON.parse(this._nativeRuntime.run(input));
      output.elapsedMillis = new Date().getTime() - start.getTime();
      return output;
    }
  }, {
    key: "_checkDestroyed",
    value: function _checkDestroyed() {
      if (!this._nativeRuntime) throw new Error("Tiro compiler was already destroyed.");
    }
  }]);

  return RuntimeImpl;
}();

var loadTiro = function loadTiro() {
  // Lazily loaded once on demand.
  var tiroWasm = undefined;

  function loadModule() {
    return new Promise(function (resolve, reject) {
      var instance = _lib_tiro__WEBPACK_IMPORTED_MODULE_4___default()({
        noInitialRun: true,
        noExitRuntime: true,
        locateFile: function locateFile(file) {
          if (file === "tiro.wasm") {
            return _lib_tiro_wasm__WEBPACK_IMPORTED_MODULE_5__["default"];
          }

          throw new Error("Unknown file requested by WebAssembly module: '".concat(file, "'."));
        },
        onAbort: function onAbort() {
          reject("Native tiro module aborted.");
        },
        onRuntimeInitialized: function onRuntimeInitialized() {
          // Must not resolve with the instance itself. It has a "then" function
          // but is *NOT* a promise (-> infinite loop).
          resolve({
            nativeTiro: instance
          });
        }
      });
    });
  }

  return function loadTiro() {
    if (!tiroWasm) {
      tiroWasm = loadModule();
    }

    return tiroWasm;
  };
};

/***/ })

})
//# sourceMappingURL=index.js.49f670782ab4c3756486.hot-update.js.map