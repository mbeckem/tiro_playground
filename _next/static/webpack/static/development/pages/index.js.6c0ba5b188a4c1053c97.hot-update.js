webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/TiroCompiler.ts":
/*!*****************************!*\
  !*** ./src/TiroCompiler.ts ***!
  \*****************************/
/*! exports provided: default, createCompiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TiroCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _lib_tiro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/tiro */ "./lib/tiro.js");
/* harmony import */ var _lib_tiro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_tiro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_tiro_wasm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/tiro.wasm */ "./lib/tiro.wasm");







var TiroCompiler = /*#__PURE__*/function () {
  function TiroCompiler(nativeTiro) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TiroCompiler);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "_native", void 0);

    this._native = nativeTiro;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TiroCompiler, [{
    key: "destroy",
    value: function destroy() {
      if (this._native) {
        this._native = undefined;
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
      var output = JSON.parse(this._native.tiro_compile(input));
      output.elapsedMillis = new Date().getTime() - start.getTime();
      return output;
    }
  }, {
    key: "_checkDestroyed",
    value: function _checkDestroyed() {
      if (!this._native) throw new Error("Tiro compiler was already destroyed.");
    }
  }]);

  return TiroCompiler;
}();


function createCompiler() {
  var _await$loadTiro, nativeTiro;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createCompiler$(_context) {
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
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(loadTiro());

        case 4:
          _await$loadTiro = _context.sent;
          nativeTiro = _await$loadTiro.nativeTiro;
          return _context.abrupt("return", new TiroCompiler(nativeTiro));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

function loadTiro() {
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
        // Must not resolve with the instance itself  "then" function
        // but is *NOT* a promise (-> infinite loop).
        resolve({
          nativeTiro: instance
        });
      }
    });
  });
}

/***/ })

})
//# sourceMappingURL=index.js.6c0ba5b188a4c1053c97.hot-update.js.map