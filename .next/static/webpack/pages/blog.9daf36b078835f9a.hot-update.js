"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlogCard */ \"./components/BlogCard.js\");\n/* harmony import */ var _components_PressCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PressCard */ \"./components/PressCard.js\");\n/* harmony import */ var _Sections_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sections/NavBar */ \"./Sections/NavBar.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Sections_Mission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Sections/Mission */ \"./Sections/Mission.js\");\n/* harmony import */ var _components_FluidContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FluidContainer */ \"./components/FluidContainer.js\");\n/* harmony import */ var _components_FeaturedBlogCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FeaturedBlogCard */ \"./components/FeaturedBlogCard.js\");\n/* harmony import */ var _components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/DesktopBlogCard */ \"./components/DesktopBlogCard.js\");\n/* harmony import */ var _components_MobileBlogDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MobileBlogDetail */ \"./components/MobileBlogDetail.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 4rem 0;\\n  padding-top: 94px;\\n  position: relative;\\n  .blog-m-title {\\n    /* color: #00853b; */\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-xxxl);\\n    font-style: normal;\\n    font-weight: 700;\\n    letter-spacing: 0px;\\n    line-height: 38px;\\n    text-align: left;\\n    width: 100%;\\n    font-size: 28px;\\n    padding: 0px 15px;\\n  }\\n  .blog-cards-container {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  .hide-on-desktop {\\n    display: block;\\n  }\\n  .hide-on-mobile {\\n    display: none;\\n  }\\n  @media (min-width: 1280px) {\\n    padding-top: 64px;\\n    padding-bottom: 0;\\n    .blog-cards-container {\\n      max-width: 1200px;\\n      flex-direction: row;\\n      flex-wrap: wrap;\\n      justify-content: flex-start;\\n      /* background-color: red; */\\n    }\\n    .hide-on-desktop {\\n      display: none;\\n    }\\n    .hide-on-mobile {\\n      display: block;\\n    }\\n\\n    .desktop-layout {\\n      display: flex;\\n      align-items: flex-start;\\n    }\\n    .blog-desk-colum-left {\\n      width: calc(67% - 15px);\\n      margin-right: 15px;\\n    }\\n    .previous-blogs-container {\\n      width: 100%;\\n      /* margin-top: 30px; */\\n      display: flex;\\n      flex-wrap: wrap;\\n      margin-bottom: 100px;\\n    }\\n    .blog-desk-colum-right {\\n      margin-left: 15px;\\n      width: calc(33% - 15px);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar BlogContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject());\n_c = BlogContainer;\nfunction Blog(param) {\n    var blogs = param.blogs;\n    var Blogs = [\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        },\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        },\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FluidContainer__WEBPACK_IMPORTED_MODULE_7__.FluidContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        bottom: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"blog-m-title\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-cards-container mt-24 hide-on-desktop\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MobileBlogDetail__WEBPACK_IMPORTED_MODULE_10__.MobileBlogDetail, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blog-cards-container mt-24 hide-on-mobile desktop-layout \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"blog-desk-colum-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FeaturedBlogCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"previous-blogs-container\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                mRight: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"30px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 132,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                mLeft: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"30px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 133,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                mRight: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"15px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 134,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                mLeft: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"15px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 135,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"blog-desk-colum-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\",\n                                        mTop: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\",\n                                        mTop: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sections_Mission__WEBPACK_IMPORTED_MODULE_6__.Mission, {}, void 0, false, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sections_NavBar__WEBPACK_IMPORTED_MODULE_4__.NavBar, {}, void 0, false, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"BlogContainer\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFHYixDQUFDO01BaEVRUyxJQUFJO0FBa0ViLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJsb2dDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nQ2FyZCc7XG5pbXBvcnQgeyBQcmVzc0NhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL1ByZXNzQ2FyZCc7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9TZWN0aW9ucy9OYXZCYXInO1xuXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgeyBNaXNzaW9uIH0gZnJvbSAnLi4vU2VjdGlvbnMvTWlzc2lvbic7XG5pbXBvcnQgeyBGbHVpZENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRmx1aWRDb250YWluZXInO1xuaW1wb3J0IEZlYXR1cmVkQmxvZ0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9GZWF0dXJlZEJsb2dDYXJkJztcbmltcG9ydCBEZXNrdG9wQmxvZ0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9EZXNrdG9wQmxvZ0NhcmQnO1xuaW1wb3J0IHsgTW9iaWxlQmxvZ0RldGFpbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlQmxvZ0RldGFpbCc7XG5cbmNvbnN0IEJsb2dDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gMDtcbiAgcGFkZGluZy10b3A6IDk0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmJsb2ctbS10aXRsZSB7XG4gICAgLyogY29sb3I6ICMwMDg1M2I7ICovXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LW5vdG9fc2Fucyk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHh4bCk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgfVxuICAuYmxvZy1jYXJkcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oaWRlLW9uLW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgLmJsb2ctY2FyZHMtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgICB9XG4gICAgLmhpZGUtb24tZGVza3RvcCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuaGlkZS1vbi1tb2JpbGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmRlc2t0b3AtbGF5b3V0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG4gICAgLmJsb2ctZGVzay1jb2x1bS1sZWZ0IHtcbiAgICAgIHdpZHRoOiBjYWxjKDY3JSAtIDE1cHgpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAucHJldmlvdXMtYmxvZ3MtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLyogbWFyZ2luLXRvcDogMzBweDsgKi9cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB9XG4gICAgLmJsb2ctZGVzay1jb2x1bS1yaWdodCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIHdpZHRoOiBjYWxjKDMzJSAtIDE1cHgpO1xuICAgIH1cbiAgfVxuYDtcbmZ1bmN0aW9uIEJsb2coe2Jsb2dzfSkge1xuICBjb25zdCBCbG9ncyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjYXRlZ29yeTogJ0Rlc2lnbicsXG4gICAgICBjb3Zlcl9pbWc6ICdubW5tbm1ubW4ucG5nIHN2ZyBqcCcsXG4gICAgICBzdW1tYXJ0OiAnJyxcbiAgICAgIGZ1bGxfdGV4dDogJ2JtYm1ibWJtYiAvLyByZW5kZXIgYXMgaHRtbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjYXRlZ29yeTogJ0Rlc2lnbicsXG4gICAgICBjb3Zlcl9pbWc6ICdubW5tbm1ubW4ucG5nIHN2ZyBqcCcsXG4gICAgICBzdW1tYXJ0OiAnJyxcbiAgICAgIGZ1bGxfdGV4dDogJ2JtYm1ibWJtYiAvLyByZW5kZXIgYXMgaHRtbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjYXRlZ29yeTogJ0Rlc2lnbicsXG4gICAgICBjb3Zlcl9pbWc6ICdubW5tbm1ubW4ucG5nIHN2ZyBqcCcsXG4gICAgICBzdW1tYXJ0OiAnJyxcbiAgICAgIGZ1bGxfdGV4dDogJ2JtYm1ibWJtYiAvLyByZW5kZXIgYXMgaHRtbCcsXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8QmxvZ0NvbnRhaW5lcj5cbiAgICAgIDxGbHVpZENvbnRhaW5lcj5cbiAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPSdibG9nLW0tdGl0bGUgaGlkZS1vbi1kZXNrdG9wJz5CbG9nPC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdibG9nLW0tdGl0bGUgaGlkZS1vbi1tb2JpbGUnPlVwZGF0ZWQgTmV3czwvaDE+ICovfVxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Jsb2ctbS10aXRsZSc+QmxvZzwvaDE+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZHMtY29udGFpbmVyIG10LTI0IGhpZGUtb24tZGVza3RvcCc+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8QmxvZ0NhcmQgLz5cbiAgICAgICAgICA8QmxvZ0NhcmQgLz5cbiAgICAgICAgICA8QmxvZ0NhcmQgLz5cbiAgICAgICAgICA8QmxvZ0NhcmQgLz5cbiAgICAgICAgICA8QmxvZ0NhcmQgLz5cbiAgICAgICAgICA8TW9iaWxlQmxvZ0RldGFpbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2ctY2FyZHMtY29udGFpbmVyIG10LTI0ICBoaWRlLW9uLW1vYmlsZSBkZXNrdG9wLWxheW91dCAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWRlc2stY29sdW0tbGVmdCc+XG4gICAgICAgICAgICA8RmVhdHVyZWRCbG9nQ2FyZCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpb3VzLWJsb2dzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgbVJpZ2h0PScxNXB4JyBtQm90dG9tPScxNXB4JyBtVG9wPSczMHB4Jy8+XG4gICAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgbUxlZnQ9JzE1cHgnIG1Cb3R0b209JzE1cHgnIG1Ub3A9JzMwcHgnLz5cbiAgICAgICAgICAgICAgPERlc2t0b3BCbG9nQ2FyZCBtUmlnaHQ9JzE1cHgnIG1Cb3R0b209JzE1cHgnIG1Ub3A9JzE1cHgnIC8+XG4gICAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgbUxlZnQ9JzE1cHgnIG1Cb3R0b209JzE1cHgnIG1Ub3A9JzE1cHgnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1kZXNrLWNvbHVtLXJpZ2h0Jz5cbiAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgd2lkdGg9JzEwMCUnIG1Cb3R0b209JzE1cHgnIC8+XG4gICAgICAgICAgICA8RGVza3RvcEJsb2dDYXJkIHdpZHRoPScxMDAlJyBtQm90dG9tPScxNXB4JyBtVG9wPScxNXB4JyAvPlxuICAgICAgICAgICAgPERlc2t0b3BCbG9nQ2FyZCB3aWR0aD0nMTAwJScgbUJvdHRvbT0nMTVweCcgbVRvcD0nMTVweCcgLz5cbiAgICAgICAgICAgIHsvKiA8RGVza3RvcEJsb2dDYXJkIHdpZHRoPScxMDAlJyBtQm90dG9tPScxNXB4JyBtVG9wPScxNXB4JyAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZsdWlkQ29udGFpbmVyPlxuXG4gICAgICA8TWlzc2lvbiAvPlxuICAgICAgPE5hdkJhciAvPlxuICAgIDwvQmxvZ0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJsb2dDYXJkIiwiUHJlc3NDYXJkIiwiTmF2QmFyIiwiRmFkZSIsIk1pc3Npb24iLCJGbHVpZENvbnRhaW5lciIsIkZlYXR1cmVkQmxvZ0NhcmQiLCJEZXNrdG9wQmxvZ0NhcmQiLCJNb2JpbGVCbG9nRGV0YWlsIiwiQmxvZ0NvbnRhaW5lciIsImRpdiIsIkJsb2ciLCJibG9ncyIsIkJsb2dzIiwidGl0bGUiLCJjYXRlZ29yeSIsImNvdmVyX2ltZyIsInN1bW1hcnQiLCJmdWxsX3RleHQiLCJib3R0b20iLCJoMSIsImNsYXNzTmFtZSIsIm1SaWdodCIsIm1Cb3R0b20iLCJtVG9wIiwibUxlZnQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});