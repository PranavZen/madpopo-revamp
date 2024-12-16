"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/homepage/domainSection/DropdownSelect.jsx":
/*!******************************************************************!*\
  !*** ./src/components/homepage/domainSection/DropdownSelect.jsx ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domainSection/domain.module.scss */ \"(app-pages-browser)/./src/components/homepage/domainSection/domain.module.scss\");\n/* harmony import */ var _domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mockdata_domainPriceMockdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mockdata/domainPriceMockdata */ \"(app-pages-browser)/./src/mockdata/domainPriceMockdata.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst DropdownSelect = (param)=>{\n    let { currency, handleCurrencyChange } = param;\n    _s();\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const selectRef = useRef(null); // Create a reference for the select element\n    const handleDropdownToggle = ()=>{\n        var _selectRef_current;\n        setIsDropdownOpen(!isDropdownOpen);\n        (_selectRef_current = selectRef.current) === null || _selectRef_current === void 0 ? void 0 : _selectRef_current.focus(); // Focus the select dropdown\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().dropdownWrap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"currencySelect\",\n                value: currency,\n                onChange: handleCurrencyChange,\n                className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().customSelect),\n                onBlur: ()=>setIsDropdownOpen(false),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \".com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\DropdownSelect.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    _mockdata_domainPriceMockdata__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: item.currency,\n                            children: item.currency\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\DropdownSelect.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\DropdownSelect.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"\".concat((_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().arrowIcon), \" \").concat(isDropdownOpen ? (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().rotated) : ''),\n                onClick: handleDropdownToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"/images/card/down-arrow.svg\",\n                    width: 17,\n                    height: 9,\n                    alt: \"down arrow\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\DropdownSelect.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\DropdownSelect.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\DropdownSelect.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DropdownSelect, \"9Uz05PJJ5IQBwP7V93tE2Z3B6wQ=\");\n_c = DropdownSelect;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownSelect);\nvar _c;\n$RefreshReg$(_c, \"DropdownSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlL2RvbWFpblNlY3Rpb24vRHJvcGRvd25TZWxlY3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDSTtBQUM5QjtBQUNFO0FBRWpDLE1BQU1JLGlCQUFpQjtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsb0JBQW9CLEVBQUU7O0lBQ3hELE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDckQsTUFBTU0sWUFBWUMsT0FBTyxPQUFPLDRDQUE0QztJQUU5RSxNQUFNQyx1QkFBdUI7WUFFM0JGO1FBREFELGtCQUFrQixDQUFDRDtTQUNuQkUscUJBQUFBLFVBQVVHLE9BQU8sY0FBakJILHlDQUFBQSxtQkFBbUJJLEtBQUssSUFBSSw0QkFBNEI7SUFDMUQ7SUFFRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2YsdUZBQW1COzswQkFDakMsOERBQUNpQjtnQkFDQ0MsTUFBSztnQkFDTEMsT0FBT2Q7Z0JBQ1BlLFVBQVVkO2dCQUNWUyxXQUFXZix1RkFBbUI7Z0JBQzlCc0IsUUFBUSxJQUFNZCxrQkFBa0I7O2tDQUVoQyw4REFBQ2U7d0JBQU9KLE9BQU07a0NBQUc7Ozs7OztvQkFDaEJsQixxRUFBZUEsQ0FBQ3VCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDMUIsOERBQUNIOzRCQUFtQkosT0FBT00sS0FBS3BCLFFBQVE7c0NBQ3JDb0IsS0FBS3BCLFFBQVE7MkJBREhxQjs7Ozs7Ozs7Ozs7MEJBS2pCLDhEQUFDQztnQkFBS1osV0FBVyxHQUF1QlIsT0FBcEJQLG9GQUFnQixFQUFDLEtBQXdDLE9BQXJDTyxpQkFBaUJQLGtGQUFjLEdBQUc7Z0JBQ3hFOEIsU0FBU25COzBCQUNULDRFQUFDVCxrREFBS0E7b0JBQ0o2QixLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtkO0dBcENNOUI7S0FBQUE7QUFzQ04saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccHJpeWFua2FtXFxtYWRwb3BvLXJldmFtcFxcc3JjXFxjb21wb25lbnRzXFxob21lcGFnZVxcZG9tYWluU2VjdGlvblxcRHJvcGRvd25TZWxlY3QuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2RvbWFpblNlY3Rpb24vZG9tYWluLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBkb21haW5QcmljZURhdGEgZnJvbSBcIkAvbW9ja2RhdGEvZG9tYWluUHJpY2VNb2NrZGF0YVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERyb3Bkb3duU2VsZWN0ID0gKHsgY3VycmVuY3ksIGhhbmRsZUN1cnJlbmN5Q2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzZWxlY3RSZWYgPSB1c2VSZWYobnVsbCk7IC8vIENyZWF0ZSBhIHJlZmVyZW5jZSBmb3IgdGhlIHNlbGVjdCBlbGVtZW50XHJcblxyXG5jb25zdCBoYW5kbGVEcm9wZG93blRvZ2dsZSA9ICgpID0+IHtcclxuICBzZXRJc0Ryb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pO1xyXG4gIHNlbGVjdFJlZi5jdXJyZW50Py5mb2N1cygpOyAvLyBGb2N1cyB0aGUgc2VsZWN0IGRyb3Bkb3duXHJcbn07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duV3JhcH0+XHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBuYW1lPVwiY3VycmVuY3lTZWxlY3RcIlxyXG4gICAgICAgIHZhbHVlPXtjdXJyZW5jeX1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ3VycmVuY3lDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tU2VsZWN0fVxyXG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpfSAvLyBDbG9zZSBkcm9wZG93biBvbiBibHVyXHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LmNvbTwvb3B0aW9uPlxyXG4gICAgICAgIHtkb21haW5QcmljZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS5jdXJyZW5jeX0+XHJcbiAgICAgICAgICAgIHtpdGVtLmN1cnJlbmN5fVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnJvd0ljb259ICR7aXNEcm9wZG93bk9wZW4gPyBzdHlsZXMucm90YXRlZCA6ICcnfWB9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlRHJvcGRvd25Ub2dnbGV9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9jYXJkL2Rvd24tYXJyb3cuc3ZnXCJcclxuICAgICAgICAgIHdpZHRoPXsxN31cclxuICAgICAgICAgIGhlaWdodD17OX1cclxuICAgICAgICAgIGFsdD1cImRvd24gYXJyb3dcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blNlbGVjdDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImRvbWFpblByaWNlRGF0YSIsIkltYWdlIiwidXNlU3RhdGUiLCJEcm9wZG93blNlbGVjdCIsImN1cnJlbmN5IiwiaGFuZGxlQ3VycmVuY3lDaGFuZ2UiLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwic2VsZWN0UmVmIiwidXNlUmVmIiwiaGFuZGxlRHJvcGRvd25Ub2dnbGUiLCJjdXJyZW50IiwiZm9jdXMiLCJkaXYiLCJjbGFzc05hbWUiLCJkcm9wZG93bldyYXAiLCJzZWxlY3QiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImN1c3RvbVNlbGVjdCIsIm9uQmx1ciIsIm9wdGlvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNwYW4iLCJhcnJvd0ljb24iLCJyb3RhdGVkIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/homepage/domainSection/DropdownSelect.jsx\n"));

/***/ })

});