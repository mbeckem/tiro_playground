webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/CompilerView.tsx":
/*!*****************************************!*\
  !*** ./src/components/CompilerView.tsx ***!
  \*****************************************/
/*! exports provided: CompilerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerView", function() { return CompilerView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor */ "./src/components/Editor.tsx");
/* harmony import */ var _CompilerView_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompilerView.module.scss */ "./src/components/CompilerView.module.scss");
/* harmony import */ var _CompilerView_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CompilerView_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Code\\tiro_playground\\src\\components\\CompilerView.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CompilerView = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function CompilerView(_ref) {
  var compiling = _ref.compiling,
      initialSource = _ref.initialSource,
      result = _ref.result,
      onSourceChanged = _ref.onSourceChanged;
  return __jsx(Split, {
    className: _CompilerView_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["split"],
    sizes: [50, 50],
    minSize: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _CompilerView_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["text-pane"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_Editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initialSource: initialSource !== null && initialSource !== void 0 ? initialSource : "",
    onChange: onSourceChanged,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _CompilerView_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["result-pane"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(ResultPane, {
    compiling: compiling,
    result: result,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })));
}); // Only client side import works.

var Split = function () {
  if (false) {} // eslint-disable-next-line @typescript-eslint/no-var-requires

  return __webpack_require__(/*! react-split */ "./node_modules/react-split/dist/react-split.es.js")["default"];
}();

var RenderResult = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function RenderResult(props) {
  var _this = this;

  var result = props.result;
  var messages = result.messages.map(function (message, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 16
      }
    }, message);
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Success: ", result.success.toString()), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Time taken: ", result.elapsedMillis.toFixed(3), " ms"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Messages:"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, messages), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, result.ast), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, result.ir), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, result.bytecode));
});
var ResultPane = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function ResultPane(props) {
  var compiling = props.compiling,
      result = props.result;
  var statusText = compiling ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 36
    }
  }, "Comdiviling...") : null;
  var resultText = result ? __jsx(RenderResult, {
    result: result,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }) : null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, statusText, resultText);
});

/***/ })

})
//# sourceMappingURL=index.js.cd33f2206d4bdf4a3dbf.hot-update.js.map