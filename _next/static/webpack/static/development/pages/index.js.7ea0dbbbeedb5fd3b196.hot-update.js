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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TiroCompiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TiroCompiler */ "./src/TiroCompiler.ts");
/* harmony import */ var _components_CompilerView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CompilerView */ "./src/components/CompilerView.tsx");







var _jsxFileName = "C:\\Code\\tiro_playground\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var INITIAL_SOURCE = "\nimport std;\n\nfunc foo() {\n    for (var i = 1; i <= 10; i += 1) {\n        std.print(i);\n    }\n}\n".trim();

var Playground = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Playground, _Component);

  var _super = _createSuper(Playground);

  function Playground(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Playground);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_sourceChanged", function (value) {
      console.log("new source", value);
    });

    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Playground, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_TiroCompiler__WEBPACK_IMPORTED_MODULE_8__["createCompiler"])().then(function (compiler) {
        var result = compiler.compile("\n                import std;\n        \n                func foo() {\n                    for (var i = 1; i <= 10; i += 1) {\n                        std.print(i);\n                    }\n                }\n            ");

        _this2.setState({
          compiler: compiler,
          result: result
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state$compiler;

      (_this$state$compiler = this.state.compiler) === null || _this$state$compiler === void 0 ? void 0 : _this$state$compiler.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          compiler = _this$state.compiler,
          result = _this$state.result;

      if (!compiler || !result) {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 20
          }
        }, "Loading...");
      }

      var messages = result.messages.map(function (message, index) {
        return __jsx("li", {
          key: index,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 20
          }
        }, message);
      });
      /*   
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

      return __jsx(_components_CompilerView__WEBPACK_IMPORTED_MODULE_9__["CompilerView"], {
        initialSource: INITIAL_SOURCE,
        result: undefined,
        onSourceChanged: this._sourceChanged,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      });
    }
  }]);

  return Playground;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.7ea0dbbbeedb5fd3b196.hot-update.js.map