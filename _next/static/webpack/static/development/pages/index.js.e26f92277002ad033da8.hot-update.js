webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Editor.tsx":
/*!***********************************!*\
  !*** ./src/components/Editor.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.module.scss */ "./src/components/Editor.module.scss");
/* harmony import */ var _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Editor_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Code\\tiro_playground\\src\\components\\Editor.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// Only client side import works.
var AceEditor = function () {
  if (false) {} // eslint-disable-next-line @typescript-eslint/no-var-requires

  var AceEditor = __webpack_require__(/*! react-ace */ "./node_modules/react-ace/lib/index.js")["default"];

  __webpack_require__(/*! ace-builds/src-noconflict/theme-solarized_light */ "./node_modules/ace-builds/src-noconflict/theme-solarized_light.js");

  __webpack_require__(/*! ace-builds/src-noconflict/mode-plain_text */ "./node_modules/ace-builds/src-noconflict/mode-plain_text.js");

  __webpack_require__(/*! ace-builds/src-noconflict/ext-language_tools */ "./node_modules/ace-builds/src-noconflict/ext-language_tools.js");

  return AceEditor;
}();

function Editor(_ref) {
  var initialSource = _ref.initialSource,
      onChange = _ref.onChange;
  return __jsx("div", {
    className: _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["editor-container"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(AceEditor, {
    name: "tiro_editor" // TODO Must be unique
    ,
    className: _Editor_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a["editor"],
    mode: "plain_text",
    theme: "solarized_light",
    onChange: onChange,
    height: "100%",
    width: "100%",
    showPrintMargin: false,
    debounceChangePeriod: 100,
    value: initialSource,
    enableBasicAutocompletion: true,
    enableSnippets: false,
    setOptions: {
      showLineNumbers: true,
      tabSize: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.e26f92277002ad033da8.hot-update.js.map