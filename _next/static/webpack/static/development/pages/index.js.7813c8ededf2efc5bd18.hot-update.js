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
/* harmony import */ var _TiroCompiler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TiroCompiler */ "./src/TiroCompiler.ts");
/* harmony import */ var _components_CompilerView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CompilerView */ "./src/components/CompilerView.tsx");








var _jsxFileName = "C:\\Code\\tiro_playground\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var INITIAL_SOURCE = "\nimport std;\n\nfunc foo() {\n    for (var i = 1; i <= 10; i += 1) {\n        std.print(i);\n    }\n}\n".trim();

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "_handleSourceChanged", function _callee(value) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("new value", value);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(asyncSetState(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), {
                currentSource: value
              }));

            case 3:
              _this._startCompilation(value);

            case 4:
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_TiroCompiler__WEBPACK_IMPORTED_MODULE_9__["createCompiler"])());

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
              _context2.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(asyncSetState(this, {
                compiler: compiler
              }));

            case 12:
              this._startCompilation(this.state.currentSource);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 6]], Promise);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state$compiler;

      (_this$state$compiler = this.state.compiler) === null || _this$state$compiler === void 0 ? void 0 : _this$state$compiler.destroy();
    }
  }, {
    key: "_startCompilation",
    value: function _startCompilation(source) {
      var compiler, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _startCompilation$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              compiler = this.state.compiler;
              _context3.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(asyncSetState(this, {
                compiling: true
              }));

            case 4:
              result = compiler === null || compiler === void 0 ? void 0 : compiler.compile(source);
              _context3.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(asyncSetState(this, {
                compiling: false,
                result: result
              }));

            case 7:
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              // TODO: Error state in UI
              console.error("Compilation failed", _context3.t0);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[0, 9]], Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          compiling = _this$state.compiling,
          currentSource = _this$state.currentSource,
          compiler = _this$state.compiler,
          result = _this$state.result;

      if (!compiler || !result) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 20
          }
        }, "Loading...");
      }

      console.log("rendering with source", currentSource);
      /*   
              const messages = result.messages.map((message, index) => {
          return <li key={index}>{message}</li>;
      });
      return (
          <div>
              <div>Success: {result.success.toString()}</div>
              <div>Time taken: {result.elapsedMillis.toFixed(3)} ms</div>
              <div>Messages:</div>
              <ul>{messages}</ul>
              <pre>{result.ast}</pre>
              <pre>{result.ir}</pre>
              <pre>{result.bytecode}</pre>
              <Editor
                  initialSource={this.state.result?.ast || ""}
                  onChange={this._sourceChanged}
              />
          </div>
          );
      */

      return __jsx(_components_CompilerView__WEBPACK_IMPORTED_MODULE_10__["CompilerView"], {
        compiling: compiling,
        initialSource: currentSource,
        result: result,
        onSourceChanged: this._handleSourceChanged,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }
      });
    }
  }]);

  return Playground;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.7813c8ededf2efc5bd18.hot-update.js.map