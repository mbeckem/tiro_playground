webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Playground; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../runtime */ "./src/runtime/index.ts");
/* harmony import */ var _components_CompilerView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CompilerView */ "./src/components/CompilerView.tsx");








var _jsxFileName = "C:\\Code\\tiro_playground\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var INITIAL_SOURCE = "\nimport std;\n\nfunc main() {\n    const object = \"World\";\n    std.print(\"Hello ${object}!\");\n}\n".trimStart();

function asyncSetState(comp, newState) {
  return new Promise(function (resolve) {
    comp.setState(newState, resolve);
  });
}

var Playground = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Playground, _Component);

  var _super = _createSuper(Playground);

  function Playground(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Playground);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_runtime", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_handleSourceChanged", function _callee(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(asyncSetState(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), {
                currentSource: value
              }));

            case 2:
              _this._startCompilation(value);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    _this.state = {
      compiling: false,
      currentSource: INITIAL_SOURCE
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Playground, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var compiler;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_runtime__WEBPACK_IMPORTED_MODULE_9__["createRuntime"])());

            case 3:
              compiler = _context2.sent;
              _context2.next = 10;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.error("Failed to create compiler instance", _context2.t0);
              return _context2.abrupt("return");

            case 10:
              this._runtime = compiler;

              this._startCompilation(this.state.currentSource);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 6]], Promise);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$_runtime;

      (_this$_runtime = this._runtime) === null || _this$_runtime === void 0 ? void 0 : _this$_runtime.destroy();
      this._runtime = undefined;
    }
  }, {
    key: "_startCompilation",
    value: function _startCompilation(source) {
      var _this$_runtime2, _this$_runtime3, result, exec;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _startCompilation$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(asyncSetState(this, {
                compiling: true
              }));

            case 3:
              result = (_this$_runtime2 = this._runtime) === null || _this$_runtime2 === void 0 ? void 0 : _this$_runtime2.compile(source);
              _context3.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(asyncSetState(this, {
                compiling: false,
                result: result
              }));

            case 6:
              exec = (_this$_runtime3 = this._runtime) === null || _this$_runtime3 === void 0 ? void 0 : _this$_runtime3.run("main");
              console.debug(exec);
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              // TODO: Error state in UI
              console.error("Compilation failed", _context3.t0);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[0, 10]], Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          compiling = _this$state.compiling,
          currentSource = _this$state.currentSource,
          result = _this$state.result;

      if (!this._runtime || !result) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 20
          }
        }, "Loading...");
      }

      return __jsx(_components_CompilerView__WEBPACK_IMPORTED_MODULE_10__["CompilerView"], {
        compiling: compiling,
        initialSource: currentSource,
        result: result,
        onSourceChanged: this._handleSourceChanged,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      });
    }
  }]);

  return Playground;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./src/runtime/all.ts":
false,

/***/ "./src/runtime/index.ts":
/*!******************************!*\
  !*** ./src/runtime/index.ts ***!
  \******************************/
/*! exports provided: createRuntime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impl */ "./src/runtime/impl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRuntime", function() { return _impl__WEBPACK_IMPORTED_MODULE_0__["createRuntime"]; });



/***/ })

})
//# sourceMappingURL=index.js.febfbff6808c154bfcd1.hot-update.js.map