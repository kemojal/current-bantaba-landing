"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Sections/Press.js":
/*!***************************!*\
  !*** ./Sections/Press.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Press\": function() { return /* binding */ Press; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_ArrowButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ArrowButton */ \"./components/ArrowButton.js\");\n/* harmony import */ var _components_PressCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PressCard */ \"./components/PressCard.js\");\n/* harmony import */ var _components_Img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Img */ \"./components/Img.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  position: relative;\\n  padding: 50px 0;\\n  background-color: #fcf9e8;\\n  /* padding-top: 0rem; */\\n  h1 {\\n    width: 100%;\\n    text-align: center;\\n    /* padding: 10px 0; */\\n    line-height: 32px;\\n    margin-bottom: 28px;\\n  }\\n  .card-container {\\n    display: flex;\\n    /* justify-content: center; */\\n    align-items: center;\\n    /* height: 500px; */\\n    overflow-y: hidden;\\n    overflow-x: scroll;\\n    position: relative;\\n    width: 100vw;\\n    scroll-snap-type: x mandatory;\\n    padding-bottom: 10px;\\n    &::-webkit-scrollbar {\\n      display: none;\\n    }\\n    /* scroll-padding: 50%; */\\n  }\\n  .show-on-mobile {\\n    display: block;\\n  }\\n  .show-on-desktop {\\n    display: none;\\n  }\\n\\n  @media (min-width: 1280px) {\\n    background-color: #f9f9f9;\\n    .card-container {\\n      flex-direction: row;\\n      height: auto;\\n      width: 100%;\\n      /* max-width: 1153px; */\\n    }\\n    .fluid {\\n      /* max-width: 1200px; */\\n      max-width: 1150px;\\n      display: flex;\\n\\n      flex-direction: column;\\n      align-items: center;\\n      justify-content: center;\\n      /* flex-direction: row; */\\n      /* padding: 40px 0; */\\n      position: relative;\\n    }\\n    .read-title {\\n      font-family: 'Poppins';\\n      font-style: normal;\\n      font-weight: 700;\\n      font-size: 40px;\\n      line-height: 130%;\\n      text-align: left;\\n    }\\n    .press-header {\\n      display: flex;\\n      align-items: center;\\n      justify-content: space-between;\\n      width: 100%;\\n      /* padding: 10px 0; */\\n      margin-bottom: 3.125rem;\\n    }\\n    .view-all {\\n      display: flex;\\n      align-items: center;\\n      font-family: 'Poppins';\\n      font-style: normal;\\n      font-weight: 600;\\n      font-size: 20px;\\n      line-height: 150%;\\n      text-align: center;\\n      color: #009743;\\n      display: none;\\n    }\\n    .view-icon {\\n      position: relative;\\n      width: 36px;\\n      height: 36px;\\n    }\\n\\n    .show-on-mobile {\\n      display: none;\\n    }\\n    .show-on-desktop {\\n      display: flex;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar PressSection = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].section(_templateObject());\n_c = PressSection;\nvar Press = function(param) {\n    var press = param.press;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PressSection, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    bottom: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"notosans-bold-licorice-20px show-on-mobile\",\n                            children: \"Press\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"press-header show-on-desktop\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"notosans-bold-licorice-20px read-title \",\n                                    children: \"Read more about us\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"view-all\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"view-icon\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Img__WEBPACK_IMPORTED_MODULE_4__.Img, {\n                                                src: \"view-all.svg\",\n                                                alt: \"logo\",\n                                                layout: \"fill\",\n                                                objectFit: \"contain\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"View All\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    bottom: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-container\",\n                        children: press.press.map(function(item, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PressCard__WEBPACK_IMPORTED_MODULE_3__.PressCard, _objectSpread({}, item), index, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                                lineNumber: 138,\n                                columnNumber: 22\n                            }, _this1));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArrowButton__WEBPACK_IMPORTED_MODULE_2__.ArrowButton, {\n                    position: 'left'\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArrowButton__WEBPACK_IMPORTED_MODULE_2__.ArrowButton, {\n                    position: 'right'\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/Sections/Press.js\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = Press;\nvar _c, _c1;\n$RefreshReg$(_c, \"PressSection\");\n$RefreshReg$(_c1, \"Press\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TZWN0aW9ucy9QcmVzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNpQjtBQUNKO0FBQ1o7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRUEsQ0FxR3BDOzs7Ozs7O0FBckdBLEdBQUssQ0FBQ00sWUFBWSxHQUFHTCxpRUFBYztLQUE3QkssWUFBWTtBQXNHWCxHQUFLLENBQUNFLEtBQUssR0FBRyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQzNCLE1BQU0sNkVBQ0hILFlBQVk7OEZBQ1ZJLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQU87OzRGQUNuQk4sMERBQUk7b0JBQUNPLE1BQU07O29HQUNUQyxDQUFFOzRCQUFDRixTQUFTLEVBQUMsQ0FBNEM7c0NBQUMsQ0FBSzs7Ozs7O29HQUMvREQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQThCOzs0R0FDMUNELENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUF5Qzs4Q0FBQyxDQUV6RDs7Ozs7OzRHQUVDRCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBVTs7b0hBQ3RCRCxDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBVztrSUFDdkJQLGdEQUFHO2dEQUNGVSxHQUFHLEVBQUMsQ0FBYztnREFDbEJDLEdBQUcsRUFBQyxDQUFNO2dEQUNWQyxNQUFNLEVBQUMsQ0FBTTtnREFDYkMsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7Ozs7O29IQUd0QkMsQ0FBSTtzREFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBSW5CYiwwREFBSTtvQkFBQ08sTUFBTTswR0FDVEYsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWdCO2tDQUM1QkYsS0FBSyxDQUFDQSxLQUFLLENBQUNVLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSyxFQUFLLENBQUM7NEJBQ2pDLE1BQU0sNkVBQUVsQiw0REFBUyxvQkFBaUJpQixJQUFJLEdBQWZDLEtBQUs7Ozs7O3dCQUM5QixDQUFDOzs7Ozs7Ozs7Ozs0RkFRSm5CLGdFQUFXO29CQUFDb0IsUUFBUSxFQUFFLENBQU07Ozs7Ozs0RkFDNUJwQixnRUFBVztvQkFBQ29CLFFBQVEsRUFBRSxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QyxDQUFDO01BekNZZCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1NlY3Rpb25zL1ByZXNzLmpzPzU3NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQXJyb3dCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL0Fycm93QnV0dG9uJztcbmltcG9ydCB7IFByZXNzQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJlc3NDYXJkJztcbmltcG9ydCB7IEltZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW1nJztcblxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jb25zdCBQcmVzc1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y5ZTg7XG4gIC8qIHBhZGRpbmctdG9wOiAwcmVtOyAqL1xuICBoMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDEwcHggMDsgKi9cbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICB9XG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC8qIHNjcm9sbC1wYWRkaW5nOiA1MCU7ICovXG4gIH1cbiAgLnNob3ctb24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8qIG1heC13aWR0aDogMTE1M3B4OyAqL1xuICAgIH1cbiAgICAuZmx1aWQge1xuICAgICAgLyogbWF4LXdpZHRoOiAxMjAwcHg7ICovXG4gICAgICBtYXgtd2lkdGg6IDExNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xuICAgICAgLyogcGFkZGluZzogNDBweCAwOyAqL1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucmVhZC10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLnByZXNzLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLyogcGFkZGluZzogMTBweCAwOyAqL1xuICAgICAgbWFyZ2luLWJvdHRvbTogMy4xMjVyZW07XG4gICAgfVxuICAgIC52aWV3LWFsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzAwOTc0MztcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC52aWV3LWljb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgLnNob3ctb24tbW9iaWxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zaG93LW9uLWRlc2t0b3Age1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgUHJlc3MgPSAoeyBwcmVzcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByZXNzU2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbHVpZCc+XG4gICAgICAgIDxGYWRlIGJvdHRvbT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdub3Rvc2Fucy1ib2xkLWxpY29yaWNlLTIwcHggc2hvdy1vbi1tb2JpbGUnPlByZXNzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJlc3MtaGVhZGVyIHNob3ctb24tZGVza3RvcCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm90b3NhbnMtYm9sZC1saWNvcmljZS0yMHB4IHJlYWQtdGl0bGUgJz5cbiAgICAgICAgICAgICAgUmVhZCBtb3JlIGFib3V0IHVzXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZXctYWxsJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZXctaWNvbic+XG4gICAgICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICAgICAgc3JjPSd2aWV3LWFsbC5zdmcnXG4gICAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ZpbGwnXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9J2NvbnRhaW4nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuPlZpZXcgQWxsPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7cHJlc3MucHJlc3MubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPFByZXNzQ2FyZCBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHsvKiA8UHJlc3NDYXJkIHsuLi5wcmVzcy5wcmVzc1swXX0gLz5cbiAgICAgICAgICAgIDxQcmVzc0NhcmQgey4uLnByZXNzLnByZXNzWzFdfSAvPlxuICAgICAgICAgICAgPFByZXNzQ2FyZCB7Li4ucHJlc3MucHJlc3NbMl19IC8+XG4gICAgICAgICAgICA8UHJlc3NDYXJkIHsuLi5wcmVzcy5wcmVzc1szXX0gLz5cbiAgICAgICAgICAgIDxQcmVzc0NhcmQgey4uLnByZXNzLnByZXNzWzRdfSAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgICA8QXJyb3dCdXR0b24gcG9zaXRpb249eydsZWZ0J30gLz5cbiAgICAgICAgPEFycm93QnV0dG9uIHBvc2l0aW9uPXsncmlnaHQnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9QcmVzc1NlY3Rpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQXJyb3dCdXR0b24iLCJQcmVzc0NhcmQiLCJJbWciLCJGYWRlIiwiUHJlc3NTZWN0aW9uIiwic2VjdGlvbiIsIlByZXNzIiwicHJlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJib3R0b20iLCJoMSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCIsInNwYW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Sections/Press.js\n");

/***/ })

});