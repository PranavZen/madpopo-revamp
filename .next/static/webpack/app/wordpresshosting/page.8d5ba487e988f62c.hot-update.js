"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/wordpresshosting/page",{

/***/ "(app-pages-browser)/./src/components/homepage/domainSection/SearchContainer.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/homepage/domainSection/SearchContainer.jsx ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_common_cta_anchorbutton_AnchorBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/cta/anchorbutton/AnchorBtn */ \"(app-pages-browser)/./src/components/common/cta/anchorbutton/AnchorBtn.jsx\");\n/* harmony import */ var _domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domainSection/domain.module.scss */ \"(app-pages-browser)/./src/components/homepage/domainSection/domain.module.scss\");\n/* harmony import */ var _domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mockdata_domainPriceMockdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mockdata/domainPriceMockdata */ \"(app-pages-browser)/./src/mockdata/domainPriceMockdata.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst SearchContainer = (param)=>{\n    let { currency } = param;\n    const handleCurrencyChange = (e)=>{\n        setCurrency(e.target.value); // Update the selected currency\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_2___default().searchContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                type: \"search\",\n                placeholder: \"Enter your domain...\",\n                name: \"searchInput\",\n                value: currency,\n                required: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        disabled: true,\n                        children: \"Select a currency\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\SearchContainer.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, undefined),\n                    _mockdata_domainPriceMockdata__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: item.currency,\n                            children: item.currency\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\SearchContainer.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\SearchContainer.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_cta_anchorbutton_AnchorBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                btnStyle: \"solidBtn\",\n                buttonText: \"Search\",\n                anchorLink: \"#\",\n                icon: \"\",\n                btnWidth: \"12rem\",\n                borderRadius: \"4.7rem\",\n                height: \"41px\",\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\SearchContainer.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\SearchContainer.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SearchContainer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchContainer);\nvar _c;\n$RefreshReg$(_c, \"SearchContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlL2RvbWFpblNlY3Rpb24vU2VhcmNoQ29udGFpbmVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3VFO0FBQ2Q7QUFDSTtBQUU3RCxNQUFNRyxrQkFBa0I7UUFBQyxFQUFFQyxRQUFRLEVBQUU7SUFFakMsTUFBTUMsdUJBQXVCLENBQUNDO1FBQzFCQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssR0FBRywrQkFBK0I7SUFDOUQ7SUFFSixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1YsMEZBQXNCOzswQkFDcEMsOERBQUNZO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxNQUFLO2dCQUNMUCxPQUFPTDtnQkFDUGEsUUFBUTs7a0NBRVYsOERBQUNDO3dCQUFPVCxPQUFNO3dCQUFHVSxRQUFRO2tDQUFDOzs7Ozs7b0JBQ3ZCakIscUVBQWVBLENBQUNrQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzFCLDhEQUFDSjs0QkFBbUJULE9BQU9ZLEtBQUtqQixRQUFRO3NDQUNyQ2lCLEtBQUtqQixRQUFROzJCQURIa0I7Ozs7Ozs7Ozs7OzBCQUtqQiw4REFBQ3RCLHFGQUFTQTtnQkFDUnVCLFVBQVM7Z0JBQ1RDLFlBQVc7Z0JBQ1hDLFlBQVc7Z0JBQ1hDLE1BQUs7Z0JBQ0xDLFVBQVM7Z0JBQ1RDLGNBQWE7Z0JBQ2JDLFFBQU87Z0JBQ1BmLE1BQUs7Ozs7Ozs7Ozs7OztBQUliO0tBbENNWDtBQW9DTixpRUFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwcml5YW5rYW1cXG1hZHBvcG8tcmV2YW1wXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVwYWdlXFxkb21haW5TZWN0aW9uXFxTZWFyY2hDb250YWluZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBBbmNob3JCdG4gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vY3RhL2FuY2hvcmJ1dHRvbi9BbmNob3JCdG5cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vZG9tYWluU2VjdGlvbi9kb21haW4ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGRvbWFpblByaWNlRGF0YSBmcm9tIFwiQC9tb2NrZGF0YS9kb21haW5QcmljZU1vY2tkYXRhXCI7XHJcblxyXG5jb25zdCBTZWFyY2hDb250YWluZXIgPSAoeyBjdXJyZW5jeSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ3VycmVuY3lDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKTsgLy8gVXBkYXRlIHRoZSBzZWxlY3RlZCBjdXJyZW5jeVxyXG4gICAgICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGRvbWFpbi4uLlwiXHJcbiAgICAgICAgbmFtZT1cInNlYXJjaElucHV0XCJcclxuICAgICAgICB2YWx1ZT17Y3VycmVuY3l9XHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+U2VsZWN0IGEgY3VycmVuY3k8L29wdGlvbj5cclxuICAgICAgICB7ZG9tYWluUHJpY2VEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0uY3VycmVuY3l9PlxyXG4gICAgICAgICAgICB7aXRlbS5jdXJyZW5jeX1cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgICAgPEFuY2hvckJ0blxyXG4gICAgICAgIGJ0blN0eWxlPVwic29saWRCdG5cIlxyXG4gICAgICAgIGJ1dHRvblRleHQ9XCJTZWFyY2hcIlxyXG4gICAgICAgIGFuY2hvckxpbms9XCIjXCJcclxuICAgICAgICBpY29uPVwiXCJcclxuICAgICAgICBidG5XaWR0aD1cIjEycmVtXCJcclxuICAgICAgICBib3JkZXJSYWRpdXM9XCI0LjdyZW1cIlxyXG4gICAgICAgIGhlaWdodD1cIjQxcHhcIlxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbnRhaW5lcjtcclxuIl0sIm5hbWVzIjpbIkFuY2hvckJ0biIsInN0eWxlcyIsImRvbWFpblByaWNlRGF0YSIsIlNlYXJjaENvbnRhaW5lciIsImN1cnJlbmN5IiwiaGFuZGxlQ3VycmVuY3lDaGFuZ2UiLCJlIiwic2V0Q3VycmVuY3kiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInNlYXJjaENvbnRhaW5lciIsInNlbGVjdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJyZXF1aXJlZCIsIm9wdGlvbiIsImRpc2FibGVkIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYnRuU3R5bGUiLCJidXR0b25UZXh0IiwiYW5jaG9yTGluayIsImljb24iLCJidG5XaWR0aCIsImJvcmRlclJhZGl1cyIsImhlaWdodCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/homepage/domainSection/SearchContainer.jsx\n"));

/***/ })

});