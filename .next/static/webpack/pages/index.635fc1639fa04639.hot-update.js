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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PressCard\": function() { return /* binding */ PressCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Img */ \"./components/Img.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* padding: 0 30px; */\\n  margin: 0px 30px;\\n  scroll-snap-align: center;\\n  .wrapper {\\n    background-color: var(--white);\\n    /* background-color: orange; */\\n    display: flex;\\n    flex-direction: column;\\n    border-radius: 20px;\\n    box-shadow: 0px 3px 6px #00000029;\\n    padding-bottom: 26px;\\n    /* padding: 10px 0px; */\\n    /* height: 100%; */\\n\\n    /* max-width: 330px; */\\n    max-width: 100%;\\n  }\\n  /* border: 1px solid green; */\\n\\n  .profile-frame {\\n    position: relative;\\n    width: 88vw;\\n    /* height: 335px; */\\n    /* height: 235px; */\\n    /* width: 330px; */\\n    overflow: hidden;\\n\\n    width: 350px;\\n    height: 248px;\\n  }\\n\\n  .title {\\n    /* color: var(--licorice);\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-m);\\n    font-style: normal;\\n    font-weight: 700;\\n    letter-spacing: 0px;\\n    line-height: 18px;\\n    text-align: left;\\n    padding: 10px 0;\\n    text-align: center; */\\n    /* font-size: 24px; */\\n\\n    line-height: 26px;\\n    color: var(--licorice);\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-l);\\n    font-style: normal;\\n    font-weight: 700;\\n    letter-spacing: 0px;\\n    /* padding: 0 10px; */\\n    padding: 0 30px;\\n    margin-top: 18px;\\n  }\\n  .ellipse-text {\\n    height: 100px;\\n    line-height: 22px;\\n    display: -webkit-box;\\n    -webkit-line-clamp: 4;\\n    -webkit-box-orient: vertical;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    /* padding-bottom: 15px; */\\n  }\\n\\n  .read-more {\\n    width: 100%;\\n    display: flex;\\n    align-items: center;\\n    padding: 0 30px;\\n    margin-top: 20px;\\n    font-family: 'Poppins';\\n    font-style: normal;\\n    font-weight: 600;\\n    font-size: 16px;\\n    line-height: 160%;\\n    color: #009743;\\n  }\\n  .readmore-icon {\\n    position: relative;\\n    width: 10px;\\n    height: 10px;\\n    margin-left: 0.5625rem;\\n  }\\n  @media (min-width: 1280px) {\\n    width: 300px;\\n    width: 33%;\\n    max-width: 360px;\\n    height: auto;\\n    margin: 0 15px;\\n    .wrapper {\\n      /* width: 362px; */\\n      width: 100%;\\n      height: auto;\\n      max-width: 360px;\\n      box-shadow: 4px 22px 70px rgba(71, 83, 72, 0.1);\\n      border-radius: 10px;\\n      overflow: hidden;\\n    }\\n\\n    .profile-frame {\\n      position: relative;\\n      height: 248px;\\n      width: 350px;\\n      overflow: hidden;\\n      border-radius: 10px;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  color: var(--licorice);\\n  font-family: var(--font-family-noto_sans);\\n  font-size: var(--font-size-s);\\n  font-style: normal;\\n  font-weight: 400;\\n  text-align: center;\\n  position: relative;\\n  text-align: left;\\n  padding: 10px 30px;\\n\\n  line-height: 16px;\\n\\n  width: 100%;\\n  /* background-color: green; */\\n  @media (min-width: 1280px) {\\n    font-family: 'Poppins' !important;\\n    font-style: normal;\\n    font-size: 16px !important;\\n    line-height: 150% !important;\\n    margin: 16px 0;\\n    display: -webkit-box;\\n    -webkit-line-clamp: 2 !important;\\n    height: 60px !important;\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  .source-img {\\n    position: relative;\\n    width: 25px;\\n    height: 25px;\\n  }\\n  .source {\\n    color: var(--licorice);\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-xs);\\n    font-style: normal;\\n    font-weight: 400;\\n    letter-spacing: 0px;\\n    line-height: 19px;\\n    padding: 5px 0;\\n    padding-left: 5px;\\n  }\\n\\n  @media (min-width: 1280px) {\\n    .source {\\n      font-family: 'Poppins';\\n      font-style: normal;\\n      font-weight: 400;\\n      font-size: 14px;\\n      line-height: 160%;\\n      color: #5b615e;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar PCard = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = PCard;\nvar P = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p(_templateObject1());\n_c1 = P;\nvar SourceRow = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = SourceRow;\nvar PressCard = function(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PCard, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"profile-frame\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: cover_img ? cover_img : '',\n                        alt: \"logo\",\n                        layout: \"fill\",\n                        objectFit: \"contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                        lineNumber: 185,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 184,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SourceRow, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"source-img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: author_image ? author_image : '',\n                                alt: \"logo\",\n                                layout: \"fill\",\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                                lineNumber: 189,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 188,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"notosans-normal-licorice-14px source\",\n                            children: author\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 196,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 187,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"notosans-bold-licorice-20px title\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 199,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(P, {\n                    className: \"notosans-normal-licorice-16px ellipse-text\",\n                    children: \"When the star-studded Board of Admissions of SSE BusinessLab, the venture incubator of the Stockholm School of Economics, gathered to assess the latest applicants, a total of 8 companies were given positive news. As such, these teams are today entering the prestigious incubator today. …\"\n                }, void 0, false, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 200,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"read-more\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Read More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 208,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"readmore-icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Img__WEBPACK_IMPORTED_MODULE_2__.Img, {\n                                src: \"read-more-icon.svg\",\n                                alt: \"logo\",\n                                layout: \"fill\",\n                                objectFit: \"contain\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                                lineNumber: 210,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                            lineNumber: 209,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n                    lineNumber: 207,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n            lineNumber: 183,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/components/PressCard.js\",\n        lineNumber: 182,\n        columnNumber: 5\n    }, _this));\n};\n_c3 = PressCard;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"PCard\");\n$RefreshReg$(_c1, \"P\");\n$RefreshReg$(_c2, \"SourceRow\");\n$RefreshReg$(_c3, \"PressCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByZXNzQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2E7QUFDQztBQUNQOzs7Ozs7Ozs7Ozs7OztRQUNQLENBa0h6Qjs7Ozs7Ozs7O1FBQ21CLENBeUJuQjs7Ozs7Ozs7O1FBQzZCLENBaUM3Qjs7Ozs7OztBQTlLQSxHQUFLLENBQUNJLEtBQUssR0FBR0gsNkRBQVU7S0FBbEJHLEtBQUs7QUFtSFgsR0FBSyxDQUFDRSxDQUFDLEdBQUdMLDJEQUFRO01BQVpLLENBQUM7QUEwQlAsR0FBSyxDQUFDRSxTQUFTLEdBQUdQLDZEQUFVO01BQXRCTyxTQUFTO0FBa0NSLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDbkMsTUFBTSw2RUFDSE4sS0FBSzs4RkFDSEMsQ0FBRztZQUFDTSxTQUFTLEVBQUMsQ0FBUzs7NEZBQ3JCTixDQUFHO29CQUFDTSxTQUFTLEVBQUMsQ0FBZTswR0FDM0JSLG1EQUFLO3dCQUFDUyxHQUFHLEVBQUVDLFNBQVMsR0FBR0EsU0FBUyxHQUFFLENBQUU7d0JBQUdDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxNQUFNLEVBQUMsQ0FBTTt3QkFBQ0MsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7Ozs7OzRGQUVyRlIsU0FBUzs7b0dBQ1BILENBQUc7NEJBQUNNLFNBQVMsRUFBQyxDQUFZO2tIQUN4QlIsbURBQUs7Z0NBQ0pTLEdBQUcsRUFBRUssWUFBWSxHQUFHQSxZQUFZLEdBQUcsQ0FBRTtnQ0FDckNILEdBQUcsRUFBQyxDQUFNO2dDQUNWQyxNQUFNLEVBQUMsQ0FBTTtnQ0FDYkMsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7Ozs7O29HQUd0QkUsQ0FBRTs0QkFBQ1AsU0FBUyxFQUFDLENBQXNDO3NDQUFFUSxNQUFNOzs7Ozs7Ozs7Ozs7NEZBRzdERCxDQUFFO29CQUFDUCxTQUFTLEVBQUMsQ0FBbUM7OEJBQUVTLEtBQUs7Ozs7Ozs0RkFDdkRkLENBQUM7b0JBQUNLLFNBQVMsRUFBQyxDQUE0Qzs4QkFBQyxDQU0xRDs7Ozs7OzRGQUNDTixDQUFHO29CQUFDTSxTQUFTLEVBQUMsQ0FBVzs7b0dBQ3ZCVSxDQUFJO3NDQUFDLENBQVM7Ozs7OztvR0FDZGhCLENBQUc7NEJBQUNNLFNBQVMsRUFBQyxDQUFlO2tIQUMzQlQsZ0RBQUc7Z0NBQ0ZVLEdBQUcsRUFBQyxDQUFvQjtnQ0FDeEJFLEdBQUcsRUFBQyxDQUFNO2dDQUNWQyxNQUFNLEVBQUMsQ0FBTTtnQ0FDYkMsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakMsQ0FBQztNQXpDWVAsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1ByZXNzQ2FyZC5qcz8wMTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEltZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW1nJztcbmltcG9ydCAgSW1hZ2UgIGZyb20gJ25leHQvaW1hZ2UnXG5jb25zdCBQQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogcGFkZGluZzogMCAzMHB4OyAqL1xuICBtYXJnaW46IDBweCAzMHB4O1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICAud3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgcGFkZGluZy1ib3R0b206IDI2cHg7XG4gICAgLyogcGFkZGluZzogMTBweCAwcHg7ICovXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuXG4gICAgLyogbWF4LXdpZHRoOiAzMzBweDsgKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG5cbiAgLnByb2ZpbGUtZnJhbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogODh2dztcbiAgICAvKiBoZWlnaHQ6IDMzNXB4OyAqL1xuICAgIC8qIGhlaWdodDogMjM1cHg7ICovXG4gICAgLyogd2lkdGg6IDMzMHB4OyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyNDhweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgLyogY29sb3I6IHZhcigtLWxpY29yaWNlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktbm90b19zYW5zKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICAvKiBmb250LXNpemU6IDI0cHg7ICovXG5cbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBjb2xvcjogdmFyKC0tbGljb3JpY2UpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1ub3RvX3NhbnMpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWwpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgLyogcGFkZGluZzogMCAxMHB4OyAqL1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICB9XG4gIC5lbGxpcHNlLXRleHQge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMTVweDsgKi9cbiAgfVxuXG4gIC5yZWFkLW1vcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICBjb2xvcjogIzAwOTc0MztcbiAgfVxuICAucmVhZG1vcmUtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMC41NjI1cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICAud3JhcHBlciB7XG4gICAgICAvKiB3aWR0aDogMzYycHg7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgICBib3gtc2hhZG93OiA0cHggMjJweCA3MHB4IHJnYmEoNzEsIDgzLCA3MiwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5wcm9maWxlLWZyYW1lIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMjQ4cHg7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBQID0gc3R5bGVkLnBgXG4gIGNvbG9yOiB2YXIoLS1saWNvcmljZSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1ub3RvX3NhbnMpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycgIWltcG9ydGFudDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgfVxuYDtcbmNvbnN0IFNvdXJjZVJvdyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc291cmNlLWltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxuICAuc291cmNlIHtcbiAgICBjb2xvcjogdmFyKC0tbGljb3JpY2UpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1ub3RvX3NhbnMpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIC5zb3VyY2Uge1xuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICAgIGNvbG9yOiAjNWI2MTVlO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBQcmVzc0NhcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UENhcmQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWZyYW1lJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjb3Zlcl9pbWcgPyBjb3Zlcl9pbWc6ICcnIH0gYWx0PSdsb2dvJyBsYXlvdXQ9J2ZpbGwnIG9iamVjdEZpdD0nY29udGFpbicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTb3VyY2VSb3c+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvdXJjZS1pbWcnPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17YXV0aG9yX2ltYWdlID8gYXV0aG9yX2ltYWdlIDogJyd9XG4gICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJ1xuICAgICAgICAgICAgICBvYmplY3RGaXQ9J2NvbnRhaW4nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J25vdG9zYW5zLW5vcm1hbC1saWNvcmljZS0xNHB4IHNvdXJjZSc+e2F1dGhvcn08L2gzPlxuICAgICAgICA8L1NvdXJjZVJvdz5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdub3Rvc2Fucy1ib2xkLWxpY29yaWNlLTIwcHggdGl0bGUnPnt0aXRsZX08L2gzPlxuICAgICAgICA8UCBjbGFzc05hbWU9J25vdG9zYW5zLW5vcm1hbC1saWNvcmljZS0xNnB4IGVsbGlwc2UtdGV4dCc+XG4gICAgICAgICAgV2hlbiB0aGUgc3Rhci1zdHVkZGVkIEJvYXJkIG9mIEFkbWlzc2lvbnMgb2YgU1NFIEJ1c2luZXNzTGFiLCB0aGVcbiAgICAgICAgICB2ZW50dXJlIGluY3ViYXRvciBvZiB0aGUgU3RvY2tob2xtIFNjaG9vbCBvZiBFY29ub21pY3MsIGdhdGhlcmVkIHRvXG4gICAgICAgICAgYXNzZXNzIHRoZSBsYXRlc3QgYXBwbGljYW50cywgYSB0b3RhbCBvZiA4IGNvbXBhbmllcyB3ZXJlIGdpdmVuXG4gICAgICAgICAgcG9zaXRpdmUgbmV3cy4gQXMgc3VjaCwgdGhlc2UgdGVhbXMgYXJlIHRvZGF5IGVudGVyaW5nIHRoZSBwcmVzdGlnaW91c1xuICAgICAgICAgIGluY3ViYXRvciB0b2RheS4g4oCmXG4gICAgICAgIDwvUD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWQtbW9yZSc+XG4gICAgICAgICAgPHNwYW4+UmVhZCBNb3JlPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFkbW9yZS1pY29uJz5cbiAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgc3JjPSdyZWFkLW1vcmUtaWNvbi5zdmcnXG4gICAgICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJ1xuICAgICAgICAgICAgICBvYmplY3RGaXQ9J2NvbnRhaW4nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUENhcmQ+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSW1nIiwiSW1hZ2UiLCJQQ2FyZCIsImRpdiIsIlAiLCJwIiwiU291cmNlUm93IiwiUHJlc3NDYXJkIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzcmMiLCJjb3Zlcl9pbWciLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJhdXRob3JfaW1hZ2UiLCJoMyIsImF1dGhvciIsInRpdGxlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PressCard.js\n");

/***/ })

});