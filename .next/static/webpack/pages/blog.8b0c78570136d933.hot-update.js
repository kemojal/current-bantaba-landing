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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogCard */ \"./components/BlogCard.js\");\n/* harmony import */ var _components_PressCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PressCard */ \"./components/PressCard.js\");\n/* harmony import */ var _Sections_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sections/NavBar */ \"./Sections/NavBar.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Sections_Mission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Sections/Mission */ \"./Sections/Mission.js\");\n/* harmony import */ var _components_FluidContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FluidContainer */ \"./components/FluidContainer.js\");\n/* harmony import */ var _components_FeaturedBlogCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FeaturedBlogCard */ \"./components/FeaturedBlogCard.js\");\n/* harmony import */ var _components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/DesktopBlogCard */ \"./components/DesktopBlogCard.js\");\n/* harmony import */ var _components_MobileBlogDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MobileBlogDetail */ \"./components/MobileBlogDetail.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 4rem 0;\\n  padding-top: 94px;\\n  position: relative;\\n  .blog-m-title {\\n    /* color: #00853b; */\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-xxxl);\\n    font-style: normal;\\n    font-weight: 700;\\n    letter-spacing: 0px;\\n    line-height: 38px;\\n    text-align: left;\\n    width: 100%;\\n    font-size: 28px;\\n    padding: 0px 15px;\\n  }\\n  .blog-cards-container {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  .hide-on-desktop {\\n    display: block;\\n  }\\n  .hide-on-mobile {\\n    display: none;\\n  }\\n  @media (min-width: 1280px) {\\n    padding-top: 64px;\\n    padding-bottom: 0;\\n    .blog-cards-container {\\n      max-width: 1200px;\\n      flex-direction: row;\\n      flex-wrap: wrap;\\n      justify-content: flex-start;\\n      /* background-color: red; */\\n    }\\n    .hide-on-desktop {\\n      display: none;\\n    }\\n    .hide-on-mobile {\\n      display: block;\\n    }\\n\\n    .desktop-layout {\\n      display: flex;\\n      align-items: flex-start;\\n    }\\n    .blog-desk-colum-left {\\n      width: calc(67% - 15px);\\n      margin-right: 15px;\\n    }\\n    .previous-blogs-container {\\n      width: 100%;\\n      /* margin-top: 30px; */\\n      display: flex;\\n      flex-wrap: wrap;\\n      margin-bottom: 100px;\\n    }\\n    .blog-desk-colum-right {\\n      margin-left: 15px;\\n      width: calc(33% - 15px);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar BlogContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject());\n_c = BlogContainer;\nfunction Blog(param) {\n    var blogs = param.blogs;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), restBlogs = ref[0], setRestBlogs = ref[1];\n    var Blogs = [\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        },\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        },\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        }, \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setRestBlogs([\n            blogs.blogs.shift()\n        ]);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BlogContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_FluidContainer__WEBPACK_IMPORTED_MODULE_8__.FluidContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        bottom: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"blog-m-title\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"blog-cards-container mt-24 hide-on-desktop\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 131,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MobileBlogDetail__WEBPACK_IMPORTED_MODULE_11__.MobileBlogDetail, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"blog-cards-container mt-24 hide-on-mobile desktop-layout \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"blog-desk-colum-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_FeaturedBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _objectSpread({}, blogs.blogs[0]), void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"previous-blogs-container\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mRight: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"30px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 143,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mLeft: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"30px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 144,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mRight: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"15px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 145,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mLeft: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"15px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 146,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 140,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"blog-desk-colum-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\",\n                                        mTop: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\",\n                                        mTop: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 149,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Sections_Mission__WEBPACK_IMPORTED_MODULE_7__.Mission, {}, void 0, false, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Sections_NavBar__WEBPACK_IMPORTED_MODULE_5__.NavBar, {}, void 0, false, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this));\n}\n_s(Blog, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nBlog.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(_Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, json;\n        return _Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('https://blogapi.ourbantaba.com/blogs/all/en');\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        blogs: json\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n})();\nvar _c, _c1;\n$RefreshReg$(_c, \"BlogContainer\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQyxDQUF1Qjs7Z0hBQ25DakIsb0VBQWU7d0NBQUNzQixLQUFLLEVBQUMsQ0FBTTt3Q0FBQ0gsT0FBTyxFQUFDLENBQU07Ozs7OztnSEFDM0NuQixvRUFBZTt3Q0FBQ3NCLEtBQUssRUFBQyxDQUFNO3dDQUFDSCxPQUFPLEVBQUMsQ0FBTTt3Q0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7OztnSEFDdkRwQixvRUFBZTt3Q0FBQ3NCLEtBQUssRUFBQyxDQUFNO3dDQUFDSCxPQUFPLEVBQUMsQ0FBTTt3Q0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFNN0R2QixzREFBTzs7Ozs7d0ZBQ1BGLG9EQUFNOzs7Ozs7Ozs7OztBQUdiLENBQUM7R0EzRVFTLElBQUk7TUFBSkEsSUFBSTtBQTZFYiwrREFBZUEsSUFBSSxFQUFDO0FBRXBCQSxJQUFJLENBQUNtQixlQUFlO3lOQUFHLFFBQVEsU0FBREMsR0FBRyxFQUFLLENBQUM7WUFDL0JDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7MkJBRFFDLEtBQUssQ0FBQyxDQUE2Qzs7b0JBQS9ERixHQUFHOzsyQkFDVUEsR0FBRyxDQUFDQyxJQUFJOztvQkFBckJBLElBQUk7aURBQ0gsQ0FBQzt3QkFBQ3JCLEtBQUssRUFBRXFCLElBQUk7b0JBQUMsQ0FBQzs7Ozs7O0lBQ3hCLENBQUM7b0JBSjZCRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cuanM/Y2JiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmxvZ0NhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dDYXJkJztcbmltcG9ydCB7IFByZXNzQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJlc3NDYXJkJztcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uL1NlY3Rpb25zL05hdkJhcic7XG5cbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcbmltcG9ydCB7IE1pc3Npb24gfSBmcm9tICcuLi9TZWN0aW9ucy9NaXNzaW9uJztcbmltcG9ydCB7IEZsdWlkQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9GbHVpZENvbnRhaW5lcic7XG5pbXBvcnQgRmVhdHVyZWRCbG9nQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0ZlYXR1cmVkQmxvZ0NhcmQnO1xuaW1wb3J0IERlc2t0b3BCbG9nQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Rlc2t0b3BCbG9nQ2FyZCc7XG5pbXBvcnQgeyBNb2JpbGVCbG9nRGV0YWlsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb2JpbGVCbG9nRGV0YWlsJztcblxuY29uc3QgQmxvZ0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBwYWRkaW5nLXRvcDogOTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuYmxvZy1tLXRpdGxlIHtcbiAgICAvKiBjb2xvcjogIzAwODUzYjsgKi9cbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktbm90b19zYW5zKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHhsKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICB9XG4gIC5ibG9nLWNhcmRzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmhpZGUtb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhpZGUtb24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAuYmxvZy1jYXJkcy1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgIH1cbiAgICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oaWRlLW9uLW1vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZGVza3RvcC1sYXlvdXQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAuYmxvZy1kZXNrLWNvbHVtLWxlZnQge1xuICAgICAgd2lkdGg6IGNhbGMoNjclIC0gMTVweCk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5wcmV2aW91cy1ibG9ncy1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvKiBtYXJnaW4tdG9wOiAzMHB4OyAqL1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cbiAgICAuYmxvZy1kZXNrLWNvbHVtLXJpZ2h0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgd2lkdGg6IGNhbGMoMzMlIC0gMTVweCk7XG4gICAgfVxuICB9XG5gO1xuZnVuY3Rpb24gQmxvZyh7IGJsb2dzIH0pIHtcbiAgY29uc3QgW3Jlc3RCbG9ncywgc2V0UmVzdEJsb2dzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgQmxvZ3MgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY2F0ZWdvcnk6ICdEZXNpZ24nLFxuICAgICAgY292ZXJfaW1nOiAnbm1ubW5tbm1uLnBuZyBzdmcganAnLFxuICAgICAgc3VtbWFydDogJycsXG4gICAgICBmdWxsX3RleHQ6ICdibWJtYm1ibWIgLy8gcmVuZGVyIGFzIGh0bWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY2F0ZWdvcnk6ICdEZXNpZ24nLFxuICAgICAgY292ZXJfaW1nOiAnbm1ubW5tbm1uLnBuZyBzdmcganAnLFxuICAgICAgc3VtbWFydDogJycsXG4gICAgICBmdWxsX3RleHQ6ICdibWJtYm1ibWIgLy8gcmVuZGVyIGFzIGh0bWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY2F0ZWdvcnk6ICdEZXNpZ24nLFxuICAgICAgY292ZXJfaW1nOiAnbm1ubW5tbm1uLnBuZyBzdmcganAnLFxuICAgICAgc3VtbWFydDogJycsXG4gICAgICBmdWxsX3RleHQ6ICdibWJtYm1ibWIgLy8gcmVuZGVyIGFzIGh0bWwnLFxuICAgIH0sXG4gIF07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UmVzdEJsb2dzKFtibG9ncy5ibG9ncy5zaGlmdCgpXSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8QmxvZ0NvbnRhaW5lcj5cbiAgICAgIDxGbHVpZENvbnRhaW5lcj5cbiAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPSdibG9nLW0tdGl0bGUgaGlkZS1vbi1kZXNrdG9wJz5CbG9nPC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdibG9nLW0tdGl0bGUgaGlkZS1vbi1tb2JpbGUnPlVwZGF0ZWQgTmV3czwvaDE+ICovfVxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Jsb2ctbS10aXRsZSc+QmxvZzwvaDE+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgeyBKU09OLnN0cmluZ2lmeShibG9ncy5ibG9ncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmRzLWNvbnRhaW5lciBtdC0yNCBoaWRlLW9uLWRlc2t0b3AnPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPE1vYmlsZUJsb2dEZXRhaWwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmRzLWNvbnRhaW5lciBtdC0yNCAgaGlkZS1vbi1tb2JpbGUgZGVza3RvcC1sYXlvdXQgJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1kZXNrLWNvbHVtLWxlZnQnPlxuICAgICAgICAgICAgPEZlYXR1cmVkQmxvZ0NhcmQgey4uLmJsb2dzLmJsb2dzWzBdfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpb3VzLWJsb2dzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgbVJpZ2h0PScxNXB4JyBtQm90dG9tPScxNXB4JyBtVG9wPSczMHB4JyAvPlxuICAgICAgICAgICAgICA8RGVza3RvcEJsb2dDYXJkIG1MZWZ0PScxNXB4JyBtQm90dG9tPScxNXB4JyBtVG9wPSczMHB4JyAvPlxuICAgICAgICAgICAgICA8RGVza3RvcEJsb2dDYXJkIG1SaWdodD0nMTVweCcgbUJvdHRvbT0nMTVweCcgbVRvcD0nMTVweCcgLz5cbiAgICAgICAgICAgICAgPERlc2t0b3BCbG9nQ2FyZCBtTGVmdD0nMTVweCcgbUJvdHRvbT0nMTVweCcgbVRvcD0nMTVweCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWRlc2stY29sdW0tcmlnaHQnPlxuICAgICAgICAgICAgPERlc2t0b3BCbG9nQ2FyZCB3aWR0aD0nMTAwJScgbUJvdHRvbT0nMTVweCcgLz5cbiAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgd2lkdGg9JzEwMCUnIG1Cb3R0b209JzE1cHgnIG1Ub3A9JzE1cHgnIC8+XG4gICAgICAgICAgICA8RGVza3RvcEJsb2dDYXJkIHdpZHRoPScxMDAlJyBtQm90dG9tPScxNXB4JyBtVG9wPScxNXB4JyAvPlxuICAgICAgICAgICAgey8qIDxEZXNrdG9wQmxvZ0NhcmQgd2lkdGg9JzEwMCUnIG1Cb3R0b209JzE1cHgnIG1Ub3A9JzE1cHgnIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmx1aWRDb250YWluZXI+XG5cbiAgICAgIDxNaXNzaW9uIC8+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgPC9CbG9nQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmxvZ2FwaS5vdXJiYW50YWJhLmNvbS9ibG9ncy9hbGwvZW4nKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IGJsb2dzOiBqc29uIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJCbG9nQ2FyZCIsIlByZXNzQ2FyZCIsIk5hdkJhciIsIkZhZGUiLCJNaXNzaW9uIiwiRmx1aWRDb250YWluZXIiLCJGZWF0dXJlZEJsb2dDYXJkIiwiRGVza3RvcEJsb2dDYXJkIiwiTW9iaWxlQmxvZ0RldGFpbCIsIkJsb2dDb250YWluZXIiLCJkaXYiLCJCbG9nIiwiYmxvZ3MiLCJyZXN0QmxvZ3MiLCJzZXRSZXN0QmxvZ3MiLCJCbG9ncyIsInRpdGxlIiwiY2F0ZWdvcnkiLCJjb3Zlcl9pbWciLCJzdW1tYXJ0IiwiZnVsbF90ZXh0Iiwic2hpZnQiLCJib3R0b20iLCJoMSIsImNsYXNzTmFtZSIsIm1SaWdodCIsIm1Cb3R0b20iLCJtVG9wIiwibUxlZnQiLCJ3aWR0aCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImpzb24iLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});