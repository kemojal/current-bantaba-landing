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

/***/ "./components/PressCard.js":
/*!*********************************!*\
  !*** ./components/PressCard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PressCard\": function() { return /* binding */ PressCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Img */ \"./components/Img.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100vw;\\n  height: 550px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* padding: 0 30px; */\\n  margin: 0px 30px;\\n  scroll-snap-align: center;\\n  .wrapper {\\n    background-color: var(--white);\\n    /* background-color: orange; */\\n    display: flex;\\n    flex-direction: column;\\n    border-radius: 20px;\\n    box-shadow: 0px 3px 6px #00000029;\\n    padding-bottom: 26px;\\n    height: 100%;\\n    /* padding: 10px 0px; */\\n    /* height: 100%; */\\n\\n    /* max-width: 330px; */\\n    max-width: 100%;\\n  }\\n  /* border: 1px solid green; */\\n\\n  .profile-frame {\\n    position: relative;\\n    width: 88vw;\\n    /* height: 335px; */\\n    /* height: 235px; */\\n    /* width: 330px; */\\n    overflow: hidden;\\n    border-top-left-radius: 20px;\\n    border-top-right-radius: 20px;\\n\\n    width: 350px;\\n    height: 248px;\\n\\n    /* border-top-left-radius: 20px;\\n    border-top-right-radius: 20px; */\\n    width: 350px;\\n    height: 259px;\\n  }\\n\\n  .title {\\n    /* color: var(--licorice);\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-m);\\n    font-style: normal;\\n    font-weight: 700;\\n    letter-spacing: 0px;\\n    line-height: 18px;\\n    text-align: left;\\n    padding: 10px 0;\\n    text-align: center; */\\n    /* font-size: 24px; */\\n\\n    line-height: 26px;\\n    color: var(--licorice);\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-l);\\n    font-style: normal;\\n    font-weight: 700;\\n    letter-spacing: 0px;\\n    /* padding: 0 10px; */\\n    padding: 0 30px;\\n    margin-top: 18px;\\n\\n    display: -webkit-box;\\n    -webkit-line-clamp: 3;\\n    -webkit-box-orient: vertical;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n  }\\n  .ellipse-text {\\n    height: 100px;\\n    line-height: 22px;\\n    display: -webkit-box;\\n    -webkit-line-clamp: 4;\\n    -webkit-box-orient: vertical;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    /* padding-bottom: 15px; */\\n  }\\n\\n  .read-more {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    padding: 0 30px;\\n    margin-top: 20px;\\n    font-family: 'Poppins';\\n    font-style: normal;\\n    font-weight: 600;\\n    font-size: 16px;\\n    line-height: 160%;\\n    color: #009743;\\n  }\\n  .readmore-icon {\\n    position: relative;\\n    width: 10px;\\n    height: 10px;\\n    margin-left: 0.5625rem;\\n  }\\n  @media (min-width: 1280px) {\\n    width: 300px;\\n    width: 33%;\\n    max-width: 360px;\\n    height: 550px;\\n    margin: 0 15px;\\n    .wrapper {\\n      /* width: 362px; */\\n      width: 100%;\\n      /* height: auto; */\\n      /* max-width: 360px; */\\n      box-shadow: 4px 22px 70px rgba(71, 83, 72, 0.1);\\n      /* border-radius: 10px; */\\n      overflow: hidden;\\n    }\\n\\n    .profile-frame {\\n      position: relative;\\n      height: 248px;\\n      width: 350px;\\n      overflow: hidden;\\n      border-radius: 10px;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: var(--licorice);\\n  font-family: var(--font-family-noto_sans);\\n  font-size: var(--font-size-s);\\n  font-style: normal;\\n  font-weight: 400;\\n  text-align: center;\\n  position: relative;\\n  text-align: left;\\n  padding: 10px 30px;\\n\\n  line-height: 16px;\\n\\n  width: 100%;\\n  /* background-color: green; */\\n  @media (min-width: 1280px) {\\n    font-family: 'Poppins' !important;\\n    font-style: normal;\\n    font-size: 16px !important;\\n    line-height: 150% !important;\\n    margin: 16px 0;\\n    display: -webkit-box;\\n    -webkit-line-clamp: 2 !important;\\n    height: 60px !important;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  .source-img {\\n    position: relative;\\n    width: 25px;\\n    height: 25px;\\n  }\\n  .source {\\n    color: var(--licorice);\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-xs);\\n    font-style: normal;\\n    font-weight: 400;\\n    letter-spacing: 0px;\\n    line-height: 19px;\\n    padding: 5px 0;\\n    padding-left: 5px;\\n  }\\n\\n  @media (min-width: 1280px) {\\n    .source {\\n      font-family: 'Poppins';\\n      font-style: normal;\\n      font-weight: 400;\\n      font-size: 14px;\\n      line-height: 160%;\\n      color: #5b615e;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar PCard = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = PCard;\nvar P = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p(_templateObject1());\n_c1 = P;\nvar SourceRow = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = SourceRow;\n//\nvar PressCard = function(param) {\n    var title = param.title, author = param.author, author_image = param.author_image, cover_img = param.cover_img;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PCard, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"profile-frame\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: cover_img,\n                        alt: \"logo\",\n                        layout: \"fill\",\n                        objectFit: \"cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                        lineNumber: 202,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 201,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SourceRow, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"source-img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: author_image,\n                                alt: \"logo\",\n                                layout: \"fill\",\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                                lineNumber: 206,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 205,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"notosans-normal-licorice-14px source\",\n                            children: author\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 213,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 204,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"notosans-bold-licorice-20px title\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 216,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P, {\n                    className: \"notosans-normal-licorice-16px ellipse-text\",\n                    children: \"When the star-studded Board of Admissions of SSE BusinessLab, the venture incubator of the Stockholm School of Economics, gathered to assess the latest applicants, a total of 8 companies were given positive news. As such, these teams are today entering the prestigious incubator today. …\"\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 217,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"read-more\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Read More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 225,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"readmore-icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Img__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                src: \"read-more-icon.svg\",\n                                alt: \"logo\",\n                                layout: \"fill\",\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                                lineNumber: 227,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 226,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 224,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n            lineNumber: 200,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n        lineNumber: 199,\n        columnNumber: 5\n    }, _this));\n};\n_c3 = PressCard;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"PCard\");\n$RefreshReg$(_c1, \"P\");\n$RefreshReg$(_c2, \"SourceRow\");\n$RefreshReg$(_c3, \"PressCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByZXNzQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDQztBQUVUOzs7Ozs7Ozs7Ozs7OztRQUNMLENBaUl6Qjs7Ozs7Ozs7O1FBQ21CLENBeUJuQjs7Ozs7Ozs7O1FBQzZCLENBaUM3Qjs7Ozs7OztBQTdMQSxHQUFLLENBQUNJLEtBQUssR0FBR0gsNkRBQVU7S0FBbEJHLEtBQUs7QUFrSVgsR0FBSyxDQUFDRSxDQUFDLEdBQUdMLDJEQUFRO01BQVpLLENBQUM7QUEwQlAsR0FBSyxDQUFDRSxTQUFTLEdBQUdQLDZEQUFVO01BQXRCTyxTQUFTO0FBa0NmLEVBQUU7QUFDSyxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLFFBQXdDLENBQUM7UUFBOUNDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsWUFBWSxTQUFaQSxZQUFZLEVBQUVDLFNBQVMsU0FBVEEsU0FBUztJQUNoRSxNQUFNLDZFQUNIVCxLQUFLOzhGQUNIQyxDQUFHO1lBQUNTLFNBQVMsRUFBQyxDQUFTOzs0RkFDckJULENBQUc7b0JBQUNTLFNBQVMsRUFBQyxDQUFlOzBHQUMzQlgsbURBQUs7d0JBQUNZLEdBQUcsRUFBRUYsU0FBUzt3QkFBRUcsR0FBRyxFQUFDLENBQU07d0JBQUNDLE1BQU0sRUFBQyxDQUFNO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7NEZBRWxFVixTQUFTOztvR0FDUEgsQ0FBRzs0QkFBQ1MsU0FBUyxFQUFDLENBQVk7a0hBQ3hCWCxtREFBSztnQ0FDSlksR0FBRyxFQUFFSCxZQUFZO2dDQUNqQkksR0FBRyxFQUFDLENBQU07Z0NBQ1ZDLE1BQU0sRUFBQyxDQUFNO2dDQUNiQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7Ozs7b0dBR3RCQyxDQUFFOzRCQUFDTCxTQUFTLEVBQUMsQ0FBc0M7c0NBQUVILE1BQU07Ozs7Ozs7Ozs7Ozs0RkFHN0RRLENBQUU7b0JBQUNMLFNBQVMsRUFBQyxDQUFtQzs4QkFBRUosS0FBSzs7Ozs7OzRGQUN2REosQ0FBQztvQkFBQ1EsU0FBUyxFQUFDLENBQTRDOzhCQUFDLENBTTFEOzs7Ozs7NEZBQ0NULENBQUc7b0JBQUNTLFNBQVMsRUFBQyxDQUFXOztvR0FDdkJNLENBQUk7c0NBQUMsQ0FBUzs7Ozs7O29HQUNkZixDQUFHOzRCQUFDUyxTQUFTLEVBQUMsQ0FBZTtrSEFDM0JaLGdEQUFHO2dDQUNGYSxHQUFHLEVBQUMsQ0FBb0I7Z0NBQ3hCQyxHQUFHLEVBQUMsQ0FBTTtnQ0FDVkMsTUFBTSxFQUFDLENBQU07Z0NBQ2JDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pDLENBQUM7TUF6Q1lULFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVzc0NhcmQuanM/MDEzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICcuLi9jb21wb25lbnRzL0ltZyc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmNvbnN0IFBDYXJkID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDU1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBwYWRkaW5nOiAwIDMwcHg7ICovXG4gIG1hcmdpbjogMHB4IDMwcHg7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG4gIC53cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjZweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogcGFkZGluZzogMTBweCAwcHg7ICovXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuXG4gICAgLyogbWF4LXdpZHRoOiAzMzBweDsgKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG5cbiAgLnByb2ZpbGUtZnJhbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODh2dztcbiAgICAvKiBoZWlnaHQ6IDMzNXB4OyAqL1xuICAgIC8qIGhlaWdodDogMjM1cHg7ICovXG4gICAgLyogd2lkdGg6IDMzMHB4OyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcblxuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDI0OHB4O1xuXG4gICAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDsgKi9cbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyNTlweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgLyogY29sb3I6IHZhcigtLWxpY29yaWNlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktbm90b19zYW5zKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICAvKiBmb250LXNpemU6IDI0cHg7ICovXG5cbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBjb2xvcjogdmFyKC0tbGljb3JpY2UpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1ub3RvX3NhbnMpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWwpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgLyogcGFkZGluZzogMCAxMHB4OyAqL1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAuZWxsaXBzZS10ZXh0IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDE1cHg7ICovXG4gIH1cblxuICAucmVhZC1tb3JlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gICAgY29sb3I6ICMwMDk3NDM7XG4gIH1cbiAgLnJlYWRtb3JlLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNTYyNXJlbTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAzMyU7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIC53cmFwcGVyIHtcbiAgICAgIC8qIHdpZHRoOiAzNjJweDsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICAgICAgLyogbWF4LXdpZHRoOiAzNjBweDsgKi9cbiAgICAgIGJveC1zaGFkb3c6IDRweCAyMnB4IDcwcHggcmdiYSg3MSwgODMsIDcyLCAwLjEpO1xuICAgICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtZnJhbWUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAyNDhweDtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IFAgPSBzdHlsZWQucGBcbiAgY29sb3I6IHZhcigtLWxpY29yaWNlKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LW5vdG9fc2Fucyk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG5cbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTUwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTZweCAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMiAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB9XG5gO1xuY29uc3QgU291cmNlUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5zb3VyY2UtaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG4gIC5zb3VyY2Uge1xuICAgIGNvbG9yOiB2YXIoLS1saWNvcmljZSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LW5vdG9fc2Fucyk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgLnNvdXJjZSB7XG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICAgICAgY29sb3I6ICM1YjYxNWU7XG4gICAgfVxuICB9XG5gO1xuLy9cbmV4cG9ydCBjb25zdCBQcmVzc0NhcmQgPSAoeyB0aXRsZSwgYXV0aG9yLCBhdXRob3JfaW1hZ2UsIGNvdmVyX2ltZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBDYXJkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZS1mcmFtZSc+XG4gICAgICAgICAgPEltYWdlIHNyYz17Y292ZXJfaW1nfSBhbHQ9J2xvZ28nIGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb3ZlcicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTb3VyY2VSb3c+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvdXJjZS1pbWcnPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17YXV0aG9yX2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIGxheW91dD0nZmlsbCdcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb250YWluJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdub3Rvc2Fucy1ub3JtYWwtbGljb3JpY2UtMTRweCBzb3VyY2UnPnthdXRob3J9PC9oMz5cbiAgICAgICAgPC9Tb3VyY2VSb3c+XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nbm90b3NhbnMtYm9sZC1saWNvcmljZS0yMHB4IHRpdGxlJz57dGl0bGV9PC9oMz5cbiAgICAgICAgPFAgY2xhc3NOYW1lPSdub3Rvc2Fucy1ub3JtYWwtbGljb3JpY2UtMTZweCBlbGxpcHNlLXRleHQnPlxuICAgICAgICAgIFdoZW4gdGhlIHN0YXItc3R1ZGRlZCBCb2FyZCBvZiBBZG1pc3Npb25zIG9mIFNTRSBCdXNpbmVzc0xhYiwgdGhlXG4gICAgICAgICAgdmVudHVyZSBpbmN1YmF0b3Igb2YgdGhlIFN0b2NraG9sbSBTY2hvb2wgb2YgRWNvbm9taWNzLCBnYXRoZXJlZCB0b1xuICAgICAgICAgIGFzc2VzcyB0aGUgbGF0ZXN0IGFwcGxpY2FudHMsIGEgdG90YWwgb2YgOCBjb21wYW5pZXMgd2VyZSBnaXZlblxuICAgICAgICAgIHBvc2l0aXZlIG5ld3MuIEFzIHN1Y2gsIHRoZXNlIHRlYW1zIGFyZSB0b2RheSBlbnRlcmluZyB0aGUgcHJlc3RpZ2lvdXNcbiAgICAgICAgICBpbmN1YmF0b3IgdG9kYXkuIOKAplxuICAgICAgICA8L1A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFkLW1vcmUnPlxuICAgICAgICAgIDxzcGFuPlJlYWQgTW9yZTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhZG1vcmUtaWNvbic+XG4gICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgIHNyYz0ncmVhZC1tb3JlLWljb24uc3ZnJ1xuICAgICAgICAgICAgICBhbHQ9J2xvZ28nXG4gICAgICAgICAgICAgIGxheW91dD0nZmlsbCdcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb250YWluJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BDYXJkPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkltZyIsIkltYWdlIiwiUENhcmQiLCJkaXYiLCJQIiwicCIsIlNvdXJjZVJvdyIsIlByZXNzQ2FyZCIsInRpdGxlIiwiYXV0aG9yIiwiYXV0aG9yX2ltYWdlIiwiY292ZXJfaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDMiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PressCard.js\n");

/***/ })

});