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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {\n    currentLanguage: 'en',\n    isNewsLetterModal: false\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {\n    switch(action.type){\n        case 'SET_LANGUAGE':\n            return {\n                ...state,\n                currentLanguage: action.payload\n            };\n        case 'TOGGLE_NEWSLETTER_MODAL':\n            return {\n                ...state,\n                isNewsLetterModal: action.payload\n            };\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9SZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsZUFBZSxFQUFFLENBQUk7SUFDckJDLGlCQUFpQixFQUFFLEtBQUs7QUFDMUIsQ0FBQztBQUNELDZCQUFlLG9DQUFVQyxLQUFLLEdBQUdILFlBQVksRUFBRUksTUFBTSxFQUFFLENBQUM7SUFDdEQsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDakIsSUFBSSxDQUFDLENBQWM7WUFDakIsTUFBTSxDQUFDLENBQUM7bUJBQUlGLEtBQUs7Z0JBQUVGLGVBQWUsRUFBRUcsTUFBTSxDQUFDRSxPQUFPO1lBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsQ0FBeUI7WUFDNUIsTUFBTSxDQUFDLENBQUM7bUJBQUlILEtBQUs7Z0JBQUVELGlCQUFpQixFQUFFRSxNQUFNLENBQUNFLE9BQU87WUFBQyxDQUFDOztZQUV0RCxNQUFNLENBQUNILEtBQUs7O0FBRWxCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9TdG9yZS9SZWR1Y2Vycy9pbmRleC5qcz8yNDg1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY3VycmVudExhbmd1YWdlOiAnZW4nLFxuICBpc05ld3NMZXR0ZXJNb2RhbDogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9MQU5HVUFHRSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudExhbmd1YWdlOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgJ1RPR0dMRV9ORVdTTEVUVEVSX01PREFMJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc05ld3NMZXR0ZXJNb2RhbDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY3VycmVudExhbmd1YWdlIiwiaXNOZXdzTGV0dGVyTW9kYWwiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/Reducers/index.js\n");

/***/ }),

/***/ "./Store/index.js":
/*!************************!*\
  !*** ./Store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reducers */ \"./Store/Reducers/index.js\");\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_Reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1DO0FBQ0M7QUFFN0IsS0FBSyxDQUFDRSxLQUFLLEdBQUlGLGtEQUFXLENBQUNDLGlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vU3RvcmUvaW5kZXguanM/ZjA3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vUmVkdWNlcnMnXG5cbmV4cG9ydCBjb25zdCBzdG9yZSAgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7Il0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Store/index.js\n");

/***/ }),

/***/ "./context/AppReducer.js":
/*!*******************************!*\
  !*** ./context/AppReducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state, action)=>{\n    switch(action.type){\n        case 'SHOW_MODAL':\n            return {\n                ...state,\n                showModal: true\n            };\n        case 'CLOSE_MODAL':\n            return {\n                ...state,\n                showModal: false\n            };\n        case 'TOGGLE_CONTACT_MODAL':\n            return {\n                ...state,\n                showContactModal: action.payload\n            };\n        case 'TOGGLE_JOIN_NEWSLETTER_MODAL':\n            return {\n                ...state,\n                showJoinNewsLetterModal: action.payload\n            };\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcFJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFnQixDQUFBQSxLQUFLLEVBQUVDLE1BQU0sR0FBSyxDQUFDO0lBQ2pDLE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxDQUFZO1lBQ2YsTUFBTSxDQUFDLENBQUM7bUJBQ0hGLEtBQUs7Z0JBQ1JHLFNBQVMsRUFBRSxJQUFJO1lBQ2pCLENBQUM7UUFDSCxJQUFJLENBQUMsQ0FBYTtZQUNoQixNQUFNLENBQUMsQ0FBQzttQkFDSEgsS0FBSztnQkFDUkcsU0FBUyxFQUFFLEtBQUs7WUFDbEIsQ0FBQztRQUNILElBQUksQ0FBQyxDQUFzQjtZQUN6QixNQUFNLENBQUMsQ0FBQzttQkFDSEgsS0FBSztnQkFDUkksZ0JBQWdCLEVBQUVILE1BQU0sQ0FBQ0ksT0FBTztZQUNsQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLENBQThCO1lBQ2pDLE1BQU0sQ0FBQyxDQUFDO21CQUNITCxLQUFLO2dCQUNSTSx1QkFBdUIsRUFBRUwsTUFBTSxDQUFDSSxPQUFPO1lBQ3pDLENBQUM7O1lBRUQsTUFBTSxDQUFDTCxLQUFLOztBQUVsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vY29udGV4dC9BcHBSZWR1Y2VyLmpzPzNiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NIT1dfTU9EQUwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSAnQ0xPU0VfTU9EQUwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgJ1RPR0dMRV9DT05UQUNUX01PREFMJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaG93Q29udGFjdE1vZGFsOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSAnVE9HR0xFX0pPSU5fTkVXU0xFVFRFUl9NT0RBTCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd0pvaW5OZXdzTGV0dGVyTW9kYWw6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNob3dNb2RhbCIsInNob3dDb250YWN0TW9kYWwiLCJwYXlsb2FkIiwic2hvd0pvaW5OZXdzTGV0dGVyTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AppReducer.js\n");

/***/ }),

/***/ "./context/GlobalState.js":
/*!********************************!*\
  !*** ./context/GlobalState.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": () => (/* binding */ GlobalContext),\n/* harmony export */   \"GlobalProvider\": () => (/* binding */ GlobalProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppReducer */ \"./context/AppReducer.js\");\n\n\n\n// Initial state\nconst initialState = {\n    showModal: false,\n    showContactModal: false,\n    showJoinNewsLetterModal: false\n};\n// Create context\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\n// Provider component\nconst GlobalProvider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_AppReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState);\n    // Actions\n    function showNewsLetterModal(condition) {\n        dispatch({\n            type: 'SHOW_MODAL',\n            payload: condition\n        });\n    }\n    function closeNewsLetterModal(condition) {\n        dispatch({\n            type: 'CLOSE_MODAL',\n            payload: condition\n        });\n    }\n    function toggleContactModal(condition) {\n        dispatch({\n            type: 'TOGGLE_CONTACT_MODAL',\n            payload: condition\n        });\n    }\n    function toggleJoinNewsLetterModal(condition) {\n        dispatch({\n            type: 'TOGGLE_JOIN_NEWSLETTER_MODAL',\n            payload: condition\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            showModal: state.showModal,\n            showContactModal: state.showContactModal,\n            showJoinNewsLetterModal: state.showJoinNewsLetterModal,\n            showNewsLetterModal,\n            closeNewsLetterModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/context/GlobalState.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dsb2JhbFN0YXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ25CO0FBRXJDLEVBQWdCO0FBQ2hCLEtBQUssQ0FBQ0ksWUFBWSxHQUFHLENBQUM7SUFDcEJDLFNBQVMsRUFBRSxLQUFLO0lBQ2hCQyxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCQyx1QkFBdUIsRUFBRSxLQUFLO0FBQ2hDLENBQUM7QUFFRCxFQUFpQjtBQUNWLEtBQUssQ0FBQ0MsYUFBYSxpQkFBR1Asb0RBQWEsQ0FBQ0csWUFBWTtBQUV2RCxFQUFxQjtBQUNkLEtBQUssQ0FBQ0ssY0FBYyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQy9DLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlWLGlEQUFVLENBQUNDLG1EQUFVLEVBQUVDLFlBQVk7SUFFN0QsRUFBVTthQUVEUyxtQkFBbUIsQ0FBQ0MsU0FBUyxFQUFFLENBQUM7UUFDdkNGLFFBQVEsQ0FBQyxDQUFDO1lBQ1JHLElBQUksRUFBRSxDQUFZO1lBQ2xCQyxPQUFPLEVBQUVGLFNBQVM7UUFDcEIsQ0FBQztJQUNILENBQUM7YUFFUUcsb0JBQW9CLENBQUNILFNBQVMsRUFBRSxDQUFDO1FBQ3hDRixRQUFRLENBQUMsQ0FBQztZQUNSRyxJQUFJLEVBQUUsQ0FBYTtZQUNuQkMsT0FBTyxFQUFFRixTQUFTO1FBQ3BCLENBQUM7SUFDSCxDQUFDO2FBQ1FJLGtCQUFrQixDQUFDSixTQUFTLEVBQUUsQ0FBQztRQUN0Q0YsUUFBUSxDQUFDLENBQUM7WUFDUkcsSUFBSSxFQUFFLENBQXNCO1lBQzVCQyxPQUFPLEVBQUVGLFNBQVM7UUFDcEIsQ0FBQztJQUNILENBQUM7YUFDUUsseUJBQXlCLENBQUNMLFNBQVMsRUFBRSxDQUFDO1FBQzdDRixRQUFRLENBQUMsQ0FBQztZQUNSRyxJQUFJLEVBQUUsQ0FBOEI7WUFDcENDLE9BQU8sRUFBRUYsU0FBUztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hOLGFBQWEsQ0FBQ1ksUUFBUTtRQUNyQkMsS0FBSyxFQUFFLENBQUM7WUFDTmhCLFNBQVMsRUFBRU0sS0FBSyxDQUFDTixTQUFTO1lBQzFCQyxnQkFBZ0IsRUFBRUssS0FBSyxDQUFDTCxnQkFBZ0I7WUFDeENDLHVCQUF1QixFQUFFSSxLQUFLLENBQUNKLHVCQUF1QjtZQUN0RE0sbUJBQW1CO1lBQ25CSSxvQkFBb0I7UUFDdEIsQ0FBQztrQkFFQVAsUUFBUTs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmRpbmctcGFnZS8uL2NvbnRleHQvR2xvYmFsU3RhdGUuanM/MTI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBSZWR1Y2VyIGZyb20gJy4vQXBwUmVkdWNlcic7XG5cbi8vIEluaXRpYWwgc3RhdGVcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvd01vZGFsOiBmYWxzZSxcbiAgc2hvd0NvbnRhY3RNb2RhbDogZmFsc2UsXG4gIHNob3dKb2luTmV3c0xldHRlck1vZGFsOiBmYWxzZSxcbn07XG5cbi8vIENyZWF0ZSBjb250ZXh0XG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50XG5leHBvcnQgY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihBcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIC8vIEFjdGlvbnNcblxuICBmdW5jdGlvbiBzaG93TmV3c0xldHRlck1vZGFsKGNvbmRpdGlvbikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTSE9XX01PREFMJyxcbiAgICAgIHBheWxvYWQ6IGNvbmRpdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTmV3c0xldHRlck1vZGFsKGNvbmRpdGlvbikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdDTE9TRV9NT0RBTCcsXG4gICAgICBwYXlsb2FkOiBjb25kaXRpb24sXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlQ29udGFjdE1vZGFsKGNvbmRpdGlvbikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEVfQ09OVEFDVF9NT0RBTCcsXG4gICAgICBwYXlsb2FkOiBjb25kaXRpb24sXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlSm9pbk5ld3NMZXR0ZXJNb2RhbChjb25kaXRpb24pIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVE9HR0xFX0pPSU5fTkVXU0xFVFRFUl9NT0RBTCcsXG4gICAgICBwYXlsb2FkOiBjb25kaXRpb24sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzaG93TW9kYWw6IHN0YXRlLnNob3dNb2RhbCxcbiAgICAgICAgc2hvd0NvbnRhY3RNb2RhbDogc3RhdGUuc2hvd0NvbnRhY3RNb2RhbCxcbiAgICAgICAgc2hvd0pvaW5OZXdzTGV0dGVyTW9kYWw6IHN0YXRlLnNob3dKb2luTmV3c0xldHRlck1vZGFsLFxuICAgICAgICBzaG93TmV3c0xldHRlck1vZGFsLFxuICAgICAgICBjbG9zZU5ld3NMZXR0ZXJNb2RhbCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIkFwcFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzaG93TW9kYWwiLCJzaG93Q29udGFjdE1vZGFsIiwic2hvd0pvaW5OZXdzTGV0dGVyTW9kYWwiLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJzaG93TmV3c0xldHRlck1vZGFsIiwiY29uZGl0aW9uIiwidHlwZSIsInBheWxvYWQiLCJjbG9zZU5ld3NMZXR0ZXJNb2RhbCIsInRvZ2dsZUNvbnRhY3RNb2RhbCIsInRvZ2dsZUpvaW5OZXdzTGV0dGVyTW9kYWwiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/GlobalState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/variables.css */ \"./styles/variables.css\");\n/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_mapAnimation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mapAnimation.css */ \"./styles/mapAnimation.css\");\n/* harmony import */ var _styles_mapAnimation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_mapAnimation_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Store */ \"./Store/index.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/GlobalState */ \"./context/GlobalState.js\");\n\n\n\n\n// import 'animate.css/animate.min.css';\n\n\n\n// import { GlobalProvider } from './context/GlobalState';\n\nfunction MyApp({ Component , pageProps  }) {\n    return(// <Provider store={store}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_7__.GlobalProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kemojallow/Bantaba2022/lasted-landing-depoyed/current-bantaba-landing/pages/_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.appWithTranslation)(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRTtBQUNHO0FBQ25DLEVBQXdDO0FBQ0Y7QUFDSjtBQUVlO0FBRWpELEVBQTBEO0FBQ0g7U0FFOUNJLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sQ0FDSixFQUEyQjtnRkFDMUJILGdFQUFjOzt3RkFDWkUsU0FBUzttQkFBS0MsU0FBUzs7Ozs7O1lBQUksQ0FDOUI7Ozs7Ozs7QUFHSixDQUFDO0FBRUQsaUVBQWVKLGdFQUFrQixDQUFDRSxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy92YXJpYWJsZXMuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL21hcEFuaW1hdGlvbi5jc3MnO1xuLy8gaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vLi4vU3RvcmUnO1xuXG5pbXBvcnQgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xuXG4vLyBpbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4vY29udGV4dC9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvR2xvYmFsU3RhdGUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICAvLyA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8R2xvYmFsUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgIDwvR2xvYmFsUHJvdmlkZXI+XG4gICAgLy8gPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiYXBwV2l0aFRyYW5zbGF0aW9uIiwiR2xvYmFsUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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