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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogCard */ \"./components/BlogCard.js\");\n/* harmony import */ var _components_PressCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PressCard */ \"./components/PressCard.js\");\n/* harmony import */ var _Sections_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sections/NavBar */ \"./Sections/NavBar.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Sections_Mission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Sections/Mission */ \"./Sections/Mission.js\");\n/* harmony import */ var _components_FluidContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FluidContainer */ \"./components/FluidContainer.js\");\n/* harmony import */ var _components_FeaturedBlogCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FeaturedBlogCard */ \"./components/FeaturedBlogCard.js\");\n/* harmony import */ var _components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/DesktopBlogCard */ \"./components/DesktopBlogCard.js\");\n/* harmony import */ var _components_MobileBlogDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MobileBlogDetail */ \"./components/MobileBlogDetail.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 4rem 0;\\n  padding-top: 94px;\\n  position: relative;\\n  .blog-m-title {\\n    /* color: #00853b; */\\n    font-family: var(--font-family-noto_sans);\\n    font-size: var(--font-size-xxxl);\\n    font-style: normal;\\n    font-weight: 700;\\n    letter-spacing: 0px;\\n    line-height: 38px;\\n    text-align: left;\\n    width: 100%;\\n    font-size: 28px;\\n    padding: 0px 15px;\\n  }\\n  .blog-cards-container {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  .hide-on-desktop {\\n    display: block;\\n  }\\n  .hide-on-mobile {\\n    display: none;\\n  }\\n  @media (min-width: 1280px) {\\n    padding-top: 64px;\\n    padding-bottom: 0;\\n    .blog-cards-container {\\n      max-width: 1200px;\\n      flex-direction: row;\\n      flex-wrap: wrap;\\n      justify-content: flex-start;\\n      /* background-color: red; */\\n    }\\n    .hide-on-desktop {\\n      display: none;\\n    }\\n    .hide-on-mobile {\\n      display: block;\\n    }\\n\\n    .desktop-layout {\\n      display: flex;\\n      align-items: flex-start;\\n    }\\n    .blog-desk-colum-left {\\n      width: calc(67% - 15px);\\n      margin-right: 15px;\\n    }\\n    .previous-blogs-container {\\n      width: 100%;\\n      /* margin-top: 30px; */\\n      display: flex;\\n      flex-wrap: wrap;\\n      margin-bottom: 100px;\\n    }\\n    .blog-desk-colum-right {\\n      margin-left: 15px;\\n      width: calc(33% - 15px);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar BlogContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject());\n_c = BlogContainer;\nfunction Blog(param) {\n    var blogs = param.blogs;\n    _s();\n    var featured = blogs.blogs[0];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), restBlogs = ref[0], setRestBlogs = ref[1];\n    var Blogs = [\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        },\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        },\n        {\n            title: '',\n            category: 'Design',\n            cover_img: 'nmnmnmnmn.png svg jp',\n            summart: '',\n            full_text: 'bmbmbmbmb // render as html'\n        }, \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setRestBlogs(blogs.blogs.shift());\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BlogContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_FluidContainer__WEBPACK_IMPORTED_MODULE_8__.FluidContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        bottom: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"blog-m-title\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: JSON.stringify(restBlogs.len)\n                    }, void 0, false, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"blog-cards-container mt-24 hide-on-desktop\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.BlogCard, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MobileBlogDetail__WEBPACK_IMPORTED_MODULE_11__.MobileBlogDetail, {}, void 0, false, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"blog-cards-container mt-24 hide-on-mobile desktop-layout \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"blog-desk-colum-left\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_FeaturedBlogCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _objectSpread({}, featured), void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"previous-blogs-container\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mRight: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"30px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 144,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mLeft: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"30px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 145,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mRight: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"15px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 146,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                mLeft: \"15px\",\n                                                mBottom: \"15px\",\n                                                mTop: \"15px\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                                lineNumber: 147,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"blog-desk-colum-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\",\n                                        mTop: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_DesktopBlogCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        width: \"100%\",\n                                        mBottom: \"15px\",\n                                        mTop: \"15px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                                lineNumber: 150,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Sections_Mission__WEBPACK_IMPORTED_MODULE_7__.Mission, {}, void 0, false, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Sections_NavBar__WEBPACK_IMPORTED_MODULE_5__.NavBar, {}, void 0, false, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/blog.js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this));\n}\n_s(Blog, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nBlog.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(_Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, json;\n        return _Users_kemojallow_Bantaba2022_lasted_landing_depoyed_current_bantaba_landing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch('https://blogapi.ourbantaba.com/blogs/all/en');\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        blogs: json\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n})();\nvar _c, _c1;\n$RefreshReg$(_c, \"BlogContainer\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsT0FBTyxFQUFDLENBQU07Z0RBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBRzNEckIsQ0FBRztnQ0FBQ2UsU0FBUyxFQUFDLENBQXVCOztnSEFDbkNsQixvRUFBZTt3Q0FBQzBCLEtBQUssRUFBQyxDQUFNO3dDQUFDSCxPQUFPLEVBQUMsQ0FBTTs7Ozs7O2dIQUMzQ3ZCLG9FQUFlO3dDQUFDMEIsS0FBSyxFQUFDLENBQU07d0NBQUNILE9BQU8sRUFBQyxDQUFNO3dDQUFDQyxJQUFJLEVBQUMsQ0FBTTs7Ozs7O2dIQUN2RHhCLG9FQUFlO3dDQUFDMEIsS0FBSyxFQUFDLENBQU07d0NBQUNILE9BQU8sRUFBQyxDQUFNO3dDQUFDQyxJQUFJLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQU03RDNCLHNEQUFPOzs7Ozt3RkFDUEYsb0RBQU07Ozs7Ozs7Ozs7O0FBR2IsQ0FBQztHQTVFUVMsSUFBSTtNQUFKQSxJQUFJO0FBOEViLCtEQUFlQSxJQUFJLEVBQUM7QUFFcEJBLElBQUksQ0FBQ3VCLGVBQWU7eU5BQUcsUUFBUSxTQUFEQyxHQUFHLEVBQUssQ0FBQztZQUMvQkMsR0FBRyxFQUNIQyxJQUFJOzs7OzsyQkFEUUMsS0FBSyxDQUFDLENBQTZDOztvQkFBL0RGLEdBQUc7OzJCQUNVQSxHQUFHLENBQUNDLElBQUk7O29CQUFyQkEsSUFBSTtpREFDSCxDQUFDO3dCQUFDekIsS0FBSyxFQUFFeUIsSUFBSTtvQkFBQyxDQUFDOzs7Ozs7SUFDeEIsQ0FBQztvQkFKNkJGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz9jYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCbG9nQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ0NhcmQnO1xuaW1wb3J0IHsgUHJlc3NDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QcmVzc0NhcmQnO1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vU2VjdGlvbnMvTmF2QmFyJztcblxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IHsgTWlzc2lvbiB9IGZyb20gJy4uL1NlY3Rpb25zL01pc3Npb24nO1xuaW1wb3J0IHsgRmx1aWRDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0ZsdWlkQ29udGFpbmVyJztcbmltcG9ydCBGZWF0dXJlZEJsb2dDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZWRCbG9nQ2FyZCc7XG5pbXBvcnQgRGVza3RvcEJsb2dDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRGVza3RvcEJsb2dDYXJkJztcbmltcG9ydCB7IE1vYmlsZUJsb2dEZXRhaWwgfSBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUJsb2dEZXRhaWwnO1xuXG5jb25zdCBCbG9nQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cmVtIDA7XG4gIHBhZGRpbmctdG9wOiA5NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5ibG9nLW0tdGl0bGUge1xuICAgIC8qIGNvbG9yOiAjMDA4NTNiOyAqL1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1ub3RvX3NhbnMpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4eGwpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gIH1cbiAgLmJsb2ctY2FyZHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGlkZS1vbi1tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIC5ibG9nLWNhcmRzLWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmhpZGUtb24tbW9iaWxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5kZXNrdG9wLWxheW91dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5ibG9nLWRlc2stY29sdW0tbGVmdCB7XG4gICAgICB3aWR0aDogY2FsYyg2NyUgLSAxNXB4KTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgLnByZXZpb3VzLWJsb2dzLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8qIG1hcmdpbi10b3A6IDMwcHg7ICovXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgfVxuICAgIC5ibG9nLWRlc2stY29sdW0tcmlnaHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICB3aWR0aDogY2FsYygzMyUgLSAxNXB4KTtcbiAgICB9XG4gIH1cbmA7XG5mdW5jdGlvbiBCbG9nKHsgYmxvZ3MgfSkge1xuICBjb25zdCBmZWF0dXJlZCA9IGJsb2dzLmJsb2dzWzBdO1xuICBjb25zdCBbcmVzdEJsb2dzLCBzZXRSZXN0QmxvZ3NdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBCbG9ncyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjYXRlZ29yeTogJ0Rlc2lnbicsXG4gICAgICBjb3Zlcl9pbWc6ICdubW5tbm1ubW4ucG5nIHN2ZyBqcCcsXG4gICAgICBzdW1tYXJ0OiAnJyxcbiAgICAgIGZ1bGxfdGV4dDogJ2JtYm1ibWJtYiAvLyByZW5kZXIgYXMgaHRtbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjYXRlZ29yeTogJ0Rlc2lnbicsXG4gICAgICBjb3Zlcl9pbWc6ICdubW5tbm1ubW4ucG5nIHN2ZyBqcCcsXG4gICAgICBzdW1tYXJ0OiAnJyxcbiAgICAgIGZ1bGxfdGV4dDogJ2JtYm1ibWJtYiAvLyByZW5kZXIgYXMgaHRtbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBjYXRlZ29yeTogJ0Rlc2lnbicsXG4gICAgICBjb3Zlcl9pbWc6ICdubW5tbm1ubW4ucG5nIHN2ZyBqcCcsXG4gICAgICBzdW1tYXJ0OiAnJyxcbiAgICAgIGZ1bGxfdGV4dDogJ2JtYm1ibWJtYiAvLyByZW5kZXIgYXMgaHRtbCcsXG4gICAgfSxcbiAgXTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRSZXN0QmxvZ3MoYmxvZ3MuYmxvZ3Muc2hpZnQoKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8QmxvZ0NvbnRhaW5lcj5cbiAgICAgIDxGbHVpZENvbnRhaW5lcj5cbiAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPSdibG9nLW0tdGl0bGUgaGlkZS1vbi1kZXNrdG9wJz5CbG9nPC9oMT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdibG9nLW0tdGl0bGUgaGlkZS1vbi1tb2JpbGUnPlVwZGF0ZWQgTmV3czwvaDE+ICovfVxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Jsb2ctbS10aXRsZSc+QmxvZzwvaDE+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7IEpTT04uc3RyaW5naWZ5KHJlc3RCbG9ncy5sZW4pXG4gICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmRzLWNvbnRhaW5lciBtdC0yNCBoaWRlLW9uLWRlc2t0b3AnPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPEJsb2dDYXJkIC8+XG4gICAgICAgICAgPE1vYmlsZUJsb2dEZXRhaWwgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWNhcmRzLWNvbnRhaW5lciBtdC0yNCAgaGlkZS1vbi1tb2JpbGUgZGVza3RvcC1sYXlvdXQgJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvZy1kZXNrLWNvbHVtLWxlZnQnPlxuICAgICAgICAgICAgPEZlYXR1cmVkQmxvZ0NhcmQgey4uLmZlYXR1cmVkfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXZpb3VzLWJsb2dzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgbVJpZ2h0PScxNXB4JyBtQm90dG9tPScxNXB4JyBtVG9wPSczMHB4JyAvPlxuICAgICAgICAgICAgICA8RGVza3RvcEJsb2dDYXJkIG1MZWZ0PScxNXB4JyBtQm90dG9tPScxNXB4JyBtVG9wPSczMHB4JyAvPlxuICAgICAgICAgICAgICA8RGVza3RvcEJsb2dDYXJkIG1SaWdodD0nMTVweCcgbUJvdHRvbT0nMTVweCcgbVRvcD0nMTVweCcgLz5cbiAgICAgICAgICAgICAgPERlc2t0b3BCbG9nQ2FyZCBtTGVmdD0nMTVweCcgbUJvdHRvbT0nMTVweCcgbVRvcD0nMTVweCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9nLWRlc2stY29sdW0tcmlnaHQnPlxuICAgICAgICAgICAgPERlc2t0b3BCbG9nQ2FyZCB3aWR0aD0nMTAwJScgbUJvdHRvbT0nMTVweCcgLz5cbiAgICAgICAgICAgIDxEZXNrdG9wQmxvZ0NhcmQgd2lkdGg9JzEwMCUnIG1Cb3R0b209JzE1cHgnIG1Ub3A9JzE1cHgnIC8+XG4gICAgICAgICAgICA8RGVza3RvcEJsb2dDYXJkIHdpZHRoPScxMDAlJyBtQm90dG9tPScxNXB4JyBtVG9wPScxNXB4JyAvPlxuICAgICAgICAgICAgey8qIDxEZXNrdG9wQmxvZ0NhcmQgd2lkdGg9JzEwMCUnIG1Cb3R0b209JzE1cHgnIG1Ub3A9JzE1cHgnIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmx1aWRDb250YWluZXI+XG5cbiAgICAgIDxNaXNzaW9uIC8+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgPC9CbG9nQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmxvZ2FwaS5vdXJiYW50YWJhLmNvbS9ibG9ncy9hbGwvZW4nKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IGJsb2dzOiBqc29uIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJCbG9nQ2FyZCIsIlByZXNzQ2FyZCIsIk5hdkJhciIsIkZhZGUiLCJNaXNzaW9uIiwiRmx1aWRDb250YWluZXIiLCJGZWF0dXJlZEJsb2dDYXJkIiwiRGVza3RvcEJsb2dDYXJkIiwiTW9iaWxlQmxvZ0RldGFpbCIsIkJsb2dDb250YWluZXIiLCJkaXYiLCJCbG9nIiwiYmxvZ3MiLCJmZWF0dXJlZCIsInJlc3RCbG9ncyIsInNldFJlc3RCbG9ncyIsIkJsb2dzIiwidGl0bGUiLCJjYXRlZ29yeSIsImNvdmVyX2ltZyIsInN1bW1hcnQiLCJmdWxsX3RleHQiLCJzaGlmdCIsImJvdHRvbSIsImgxIiwiY2xhc3NOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsImxlbiIsIm1SaWdodCIsIm1Cb3R0b20iLCJtVG9wIiwibUxlZnQiLCJ3aWR0aCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImpzb24iLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});