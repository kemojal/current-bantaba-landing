/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Store/Reducers/index.js":
/*!*********************************!*\
  !*** ./Store/Reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  currentLanguage: 'en',\n  isNewsLetterModal: false\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {\n  switch (action.type) {\n    case 'SET_LANGUAGE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentLanguage: action.payload\n      });\n\n    case 'TOGGLE_NEWSLETTER_MODAL':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isNewsLetterModal: action.payload\n      });\n\n    default:\n      return state;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9SZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxlQUFlLEVBQUUsSUFERTtBQUVuQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFGQSxDQUFyQjtBQUlBLDZCQUFlLG9DQUFVQyxLQUFLLEdBQUdILFlBQWxCLEVBQWdDSSxNQUFoQyxFQUF3QztBQUNyRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGNBQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQkYsUUFBQUEsZUFBZSxFQUFFRyxNQUFNLENBQUNFO0FBQTNDOztBQUNGLFNBQUsseUJBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQkQsUUFBQUEsaUJBQWlCLEVBQUVFLE1BQU0sQ0FBQ0U7QUFBN0M7O0FBQ0Y7QUFDRSxhQUFPSCxLQUFQO0FBTko7QUFRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmRpbmctcGFnZS8uL1N0b3JlL1JlZHVjZXJzL2luZGV4LmpzPzI0ODUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjdXJyZW50TGFuZ3VhZ2U6ICdlbicsXG4gIGlzTmV3c0xldHRlck1vZGFsOiBmYWxzZSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX0xBTkdVQUdFJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50TGFuZ3VhZ2U6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVE9HR0xFX05FV1NMRVRURVJfTU9EQUwnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTmV3c0xldHRlck1vZGFsOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJjdXJyZW50TGFuZ3VhZ2UiLCJpc05ld3NMZXR0ZXJNb2RhbCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Store/Reducers/index.js\n");

/***/ }),

/***/ "./Store/index.js":
/*!************************!*\
  !*** ./Store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reducers */ \"./Store/Reducers/index.js\");\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_Reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1FLEtBQUssR0FBSUYsa0RBQVcsQ0FBQ0MsaURBQUQsQ0FBMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9TdG9yZS9pbmRleC5qcz9mMDdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9SZWR1Y2VycydcblxuZXhwb3J0IGNvbnN0IHN0b3JlICA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTsiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/index.js\n");

/***/ }),

/***/ "./context/AppReducer.js":
/*!*******************************!*\
  !*** ./context/AppReducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state, action) => {\n  switch (action.type) {\n    case 'SHOW_MODAL':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showModal: true\n      });\n\n    case 'CLOSE_MODAL':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showModal: false\n      });\n\n    case 'TOGGLE_CONTACT_MODAL':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showContactModal: action.payload\n      });\n\n    case 'TOGGLE_JOIN_NEWSLETTER_MODAL':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showJoinNewsLetterModal: action.payload\n      });\n\n    case 'SET_LANGUAGE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentLanguage: action.payload\n      });\n\n    case 'SHOW_DETAILS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        showBlogDetail: action.payload\n      });\n\n    case 'SET_DETAILS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentDetail: action.payload\n      });\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcFJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUFlLENBQUNBLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNoQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLFlBQUw7QUFDRSw2Q0FDS0YsS0FETDtBQUVFRyxRQUFBQSxTQUFTLEVBQUU7QUFGYjs7QUFJRixTQUFLLGFBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFRyxRQUFBQSxTQUFTLEVBQUU7QUFGYjs7QUFJRixTQUFLLHNCQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRUksUUFBQUEsZ0JBQWdCLEVBQUVILE1BQU0sQ0FBQ0k7QUFGM0I7O0FBSUYsU0FBSyw4QkFBTDtBQUNFLDZDQUNLTCxLQURMO0FBRUVNLFFBQUFBLHVCQUF1QixFQUFFTCxNQUFNLENBQUNJO0FBRmxDOztBQUlGLFNBQUssY0FBTDtBQUNFLDZDQUFZTCxLQUFaO0FBQW1CTyxRQUFBQSxlQUFlLEVBQUVOLE1BQU0sQ0FBQ0k7QUFBM0M7O0FBQ0YsU0FBSyxjQUFMO0FBQ0UsNkNBQVlMLEtBQVo7QUFBbUJRLFFBQUFBLGNBQWMsRUFBRVAsTUFBTSxDQUFDSTtBQUExQzs7QUFDRixTQUFLLGFBQUw7QUFDRSw2Q0FBWUwsS0FBWjtBQUFtQlMsUUFBQUEsYUFBYSxFQUFFUixNQUFNLENBQUNJO0FBQXpDOztBQUNGO0FBQ0UsYUFBT0wsS0FBUDtBQTVCSjtBQThCRCxDQS9CRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmRpbmctcGFnZS8uL2NvbnRleHQvQXBwUmVkdWNlci5qcz8zYjY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTSE9XX01PREFMJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ0NMT1NFX01PREFMJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlICdUT0dHTEVfQ09OVEFDVF9NT0RBTCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd0NvbnRhY3RNb2RhbDogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgJ1RPR0dMRV9KT0lOX05FV1NMRVRURVJfTU9EQUwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dKb2luTmV3c0xldHRlck1vZGFsOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX0xBTkdVQUdFJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50TGFuZ3VhZ2U6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnU0hPV19ERVRBSUxTJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG93QmxvZ0RldGFpbDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdTRVRfREVUQUlMUyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudERldGFpbDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNob3dNb2RhbCIsInNob3dDb250YWN0TW9kYWwiLCJwYXlsb2FkIiwic2hvd0pvaW5OZXdzTGV0dGVyTW9kYWwiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzaG93QmxvZ0RldGFpbCIsImN1cnJlbnREZXRhaWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AppReducer.js\n");

/***/ }),

/***/ "./context/GlobalState.js":
/*!********************************!*\
  !*** ./context/GlobalState.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": () => (/* binding */ GlobalContext),\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppReducer */ \"./context/AppReducer.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/context/GlobalState.js\";\n\n // Initial state\n\n\nconst initialState = {\n  currentLanguage: 'en',\n  showModal: false,\n  showContactModal: false,\n  showJoinNewsLetterModal: false,\n  showBlogDetail: false,\n  currentDetail: {}\n}; // Create context\n\nconst GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState); // Provider component\n\nconst GlobalProvider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_AppReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], initialState); // Actions\n\n  function showNewsLetterModal(condition) {\n    dispatch({\n      type: 'SHOW_MODAL',\n      payload: condition\n    });\n  }\n\n  function closeNewsLetterModal(condition) {\n    dispatch({\n      type: 'CLOSE_MODAL',\n      payload: condition\n    });\n  }\n\n  function toggleContactModal(condition) {\n    dispatch({\n      type: 'TOGGLE_CONTACT_MODAL',\n      payload: condition\n    });\n  }\n\n  function toggleJoinNewsLetterModal(condition) {\n    dispatch({\n      type: 'TOGGLE_JOIN_NEWSLETTER_MODAL',\n      payload: condition\n    });\n  }\n\n  function setCurrentLanguage(lang) {\n    dispatch({\n      type: 'SET_LANGUAGE',\n      payload: lang\n    });\n  }\n\n  function showBlogDetailFunction(condition) {\n    dispatch({\n      type: 'SHOW_DETAILS',\n      payload: condition\n    });\n  }\n\n  function setBlogDetailFunction(condition) {\n    dispatch({\n      type: 'SET_DETAILS',\n      payload: condition\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GlobalContext.Provider, {\n    value: {\n      currentLanguage: state.currentLanguage,\n      showModal: state.showModal,\n      showContactModal: state.showContactModal,\n      showJoinNewsLetterModal: state.showJoinNewsLetterModal,\n      showBlogDetail: state.showBlogDetail,\n      currentDetail: state.currentDetail,\n      showNewsLetterModal,\n      closeNewsLetterModal,\n      setCurrentLanguage,\n      showBlogDetailFunction,\n      setBlogDetailFunction\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dsb2JhbFN0YXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7O0FBQ0EsTUFBTUksWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxlQUFlLEVBQUUsSUFERTtBQUVuQkMsRUFBQUEsU0FBUyxFQUFFLEtBRlE7QUFHbkJDLEVBQUFBLGdCQUFnQixFQUFFLEtBSEM7QUFJbkJDLEVBQUFBLHVCQUF1QixFQUFFLEtBSk47QUFLbkJDLEVBQUFBLGNBQWMsRUFBRSxLQUxHO0FBTW5CQyxFQUFBQSxhQUFhLEVBQUU7QUFOSSxDQUFyQixFQVNBOztBQUNPLE1BQU1DLGFBQWEsZ0JBQUdWLG9EQUFhLENBQUNHLFlBQUQsQ0FBbkMsRUFFUDs7QUFDTyxNQUFNUSxjQUFjLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFDOUMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CYixpREFBVSxDQUFDQyxtREFBRCxFQUFhQyxZQUFiLENBQXBDLENBRDhDLENBRzlDOztBQUVBLFdBQVNZLG1CQUFULENBQTZCQyxTQUE3QixFQUF3QztBQUN0Q0YsSUFBQUEsUUFBUSxDQUFDO0FBQ1BHLE1BQUFBLElBQUksRUFBRSxZQURDO0FBRVBDLE1BQUFBLE9BQU8sRUFBRUY7QUFGRixLQUFELENBQVI7QUFJRDs7QUFFRCxXQUFTRyxvQkFBVCxDQUE4QkgsU0FBOUIsRUFBeUM7QUFDdkNGLElBQUFBLFFBQVEsQ0FBQztBQUNQRyxNQUFBQSxJQUFJLEVBQUUsYUFEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUVGO0FBRkYsS0FBRCxDQUFSO0FBSUQ7O0FBQ0QsV0FBU0ksa0JBQVQsQ0FBNEJKLFNBQTVCLEVBQXVDO0FBQ3JDRixJQUFBQSxRQUFRLENBQUM7QUFDUEcsTUFBQUEsSUFBSSxFQUFFLHNCQURDO0FBRVBDLE1BQUFBLE9BQU8sRUFBRUY7QUFGRixLQUFELENBQVI7QUFJRDs7QUFDRCxXQUFTSyx5QkFBVCxDQUFtQ0wsU0FBbkMsRUFBOEM7QUFDNUNGLElBQUFBLFFBQVEsQ0FBQztBQUNQRyxNQUFBQSxJQUFJLEVBQUUsOEJBREM7QUFFUEMsTUFBQUEsT0FBTyxFQUFFRjtBQUZGLEtBQUQsQ0FBUjtBQUlEOztBQUNELFdBQVNNLGtCQUFULENBQTRCQyxJQUE1QixFQUFrQztBQUNoQ1QsSUFBQUEsUUFBUSxDQUFDO0FBQ1BHLE1BQUFBLElBQUksRUFBRSxjQURDO0FBRVBDLE1BQUFBLE9BQU8sRUFBRUs7QUFGRixLQUFELENBQVI7QUFJRDs7QUFDRCxXQUFTQyxzQkFBVCxDQUFnQ1IsU0FBaEMsRUFBMkM7QUFDekNGLElBQUFBLFFBQVEsQ0FBQztBQUNQRyxNQUFBQSxJQUFJLEVBQUUsY0FEQztBQUVQQyxNQUFBQSxPQUFPLEVBQUVGO0FBRkYsS0FBRCxDQUFSO0FBSUQ7O0FBQ0QsV0FBU1MscUJBQVQsQ0FBK0JULFNBQS9CLEVBQTBDO0FBQ3hDRixJQUFBQSxRQUFRLENBQUM7QUFDUEcsTUFBQUEsSUFBSSxFQUFFLGFBREM7QUFFUEMsTUFBQUEsT0FBTyxFQUFFRjtBQUZGLEtBQUQsQ0FBUjtBQUlEOztBQUVELHNCQUNFLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0UsU0FBSyxFQUFFO0FBQ0xaLE1BQUFBLGVBQWUsRUFBRVMsS0FBSyxDQUFDVCxlQURsQjtBQUVMQyxNQUFBQSxTQUFTLEVBQUVRLEtBQUssQ0FBQ1IsU0FGWjtBQUdMQyxNQUFBQSxnQkFBZ0IsRUFBRU8sS0FBSyxDQUFDUCxnQkFIbkI7QUFJTEMsTUFBQUEsdUJBQXVCLEVBQUVNLEtBQUssQ0FBQ04sdUJBSjFCO0FBS0xDLE1BQUFBLGNBQWMsRUFBRUssS0FBSyxDQUFDTCxjQUxqQjtBQU1MQyxNQUFBQSxhQUFhLEVBQUVJLEtBQUssQ0FBQ0osYUFOaEI7QUFPTE0sTUFBQUEsbUJBUEs7QUFRTEksTUFBQUEsb0JBUks7QUFTTEcsTUFBQUEsa0JBVEs7QUFVTEUsTUFBQUEsc0JBVks7QUFXTEMsTUFBQUE7QUFYSyxLQURUO0FBQUEsY0FlR2I7QUFmSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQkQsQ0FwRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9jb250ZXh0L0dsb2JhbFN0YXRlLmpzPzEyNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwUmVkdWNlciBmcm9tICcuL0FwcFJlZHVjZXInO1xuXG4vLyBJbml0aWFsIHN0YXRlXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGN1cnJlbnRMYW5ndWFnZTogJ2VuJyxcbiAgc2hvd01vZGFsOiBmYWxzZSxcbiAgc2hvd0NvbnRhY3RNb2RhbDogZmFsc2UsXG4gIHNob3dKb2luTmV3c0xldHRlck1vZGFsOiBmYWxzZSxcbiAgc2hvd0Jsb2dEZXRhaWw6IGZhbHNlLFxuICBjdXJyZW50RGV0YWlsOiB7fSxcbn07XG5cbi8vIENyZWF0ZSBjb250ZXh0XG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50XG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihBcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIC8vIEFjdGlvbnNcblxuICBmdW5jdGlvbiBzaG93TmV3c0xldHRlck1vZGFsKGNvbmRpdGlvbikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTSE9XX01PREFMJyxcbiAgICAgIHBheWxvYWQ6IGNvbmRpdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTmV3c0xldHRlck1vZGFsKGNvbmRpdGlvbikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdDTE9TRV9NT0RBTCcsXG4gICAgICBwYXlsb2FkOiBjb25kaXRpb24sXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlQ29udGFjdE1vZGFsKGNvbmRpdGlvbikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEVfQ09OVEFDVF9NT0RBTCcsXG4gICAgICBwYXlsb2FkOiBjb25kaXRpb24sXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlSm9pbk5ld3NMZXR0ZXJNb2RhbChjb25kaXRpb24pIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFX0pPSU5fTkVXU0xFVFRFUl9NT0RBTCcsXG4gICAgICBwYXlsb2FkOiBjb25kaXRpb24sXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0Q3VycmVudExhbmd1YWdlKGxhbmcpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0xBTkdVQUdFJyxcbiAgICAgIHBheWxvYWQ6IGxhbmcsXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2hvd0Jsb2dEZXRhaWxGdW5jdGlvbihjb25kaXRpb24pIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0hPV19ERVRBSUxTJyxcbiAgICAgIHBheWxvYWQ6IGNvbmRpdGlvbixcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzZXRCbG9nRGV0YWlsRnVuY3Rpb24oY29uZGl0aW9uKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9ERVRBSUxTJyxcbiAgICAgIHBheWxvYWQ6IGNvbmRpdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGN1cnJlbnRMYW5ndWFnZTogc3RhdGUuY3VycmVudExhbmd1YWdlLFxuICAgICAgICBzaG93TW9kYWw6IHN0YXRlLnNob3dNb2RhbCxcbiAgICAgICAgc2hvd0NvbnRhY3RNb2RhbDogc3RhdGUuc2hvd0NvbnRhY3RNb2RhbCxcbiAgICAgICAgc2hvd0pvaW5OZXdzTGV0dGVyTW9kYWw6IHN0YXRlLnNob3dKb2luTmV3c0xldHRlck1vZGFsLFxuICAgICAgICBzaG93QmxvZ0RldGFpbDogc3RhdGUuc2hvd0Jsb2dEZXRhaWwsXG4gICAgICAgIGN1cnJlbnREZXRhaWw6IHN0YXRlLmN1cnJlbnREZXRhaWwsXG4gICAgICAgIHNob3dOZXdzTGV0dGVyTW9kYWwsXG4gICAgICAgIGNsb3NlTmV3c0xldHRlck1vZGFsLFxuICAgICAgICBzZXRDdXJyZW50TGFuZ3VhZ2UsXG4gICAgICAgIHNob3dCbG9nRGV0YWlsRnVuY3Rpb24sXG4gICAgICAgIHNldEJsb2dEZXRhaWxGdW5jdGlvbixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIkFwcFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzaG93TW9kYWwiLCJzaG93Q29udGFjdE1vZGFsIiwic2hvd0pvaW5OZXdzTGV0dGVyTW9kYWwiLCJzaG93QmxvZ0RldGFpbCIsImN1cnJlbnREZXRhaWwiLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJzaG93TmV3c0xldHRlck1vZGFsIiwiY29uZGl0aW9uIiwidHlwZSIsInBheWxvYWQiLCJjbG9zZU5ld3NMZXR0ZXJNb2RhbCIsInRvZ2dsZUNvbnRhY3RNb2RhbCIsInRvZ2dsZUpvaW5OZXdzTGV0dGVyTW9kYWwiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJsYW5nIiwic2hvd0Jsb2dEZXRhaWxGdW5jdGlvbiIsInNldEJsb2dEZXRhaWxGdW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/GlobalState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/variables.css */ \"./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_mapAnimation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mapAnimation.css */ \"./styles/mapAnimation.css\");\n/* harmony import */ var _styles_mapAnimation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mapAnimation_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Store */ \"./Store/index.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/GlobalState */ \"./context/GlobalState.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import 'animate.css/animate.min.css';\n\n\n\n // import { GlobalProvider } from './context/GlobalState';\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return (\n    /*#__PURE__*/\n    // <Provider store={store}>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_6__.GlobalProvider, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, this), \";\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, this) // </Provider>\n\n  );\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.appWithTranslation)(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FJQTs7QUFDQTs7O0FBRUEsU0FBU0ksS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDO0FBQUE7QUFDRTtBQUNBLGtFQUFDLGdFQUFEO0FBQUEsOEJBQ0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FLRTs7QUFMRjtBQU9EOztBQUVELGlFQUFlSixnRUFBa0IsQ0FBQ0UsS0FBRCxDQUFqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy92YXJpYWJsZXMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL21hcEFuaW1hdGlvbi5jc3MnO1xuLy8gaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vLi4vU3RvcmUnO1xuXG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xuXG4vLyBpbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICAvLyA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8R2xvYmFsUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgIDwvR2xvYmFsUHJvdmlkZXI+XG4gICAgLy8gPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiYXBwV2l0aFRyYW5zbGF0aW9uIiwiR2xvYmFsUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/mapAnimation.css":
/*!*********************************!*\
  !*** ./styles/mapAnimation.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();