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

/***/ "(app-pages-browser)/./src/components/homepage/domainSection/Domain.jsx":
/*!**********************************************************!*\
  !*** ./src/components/homepage/domainSection/Domain.jsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domainSection/domain.module.scss */ \"(app-pages-browser)/./src/components/homepage/domainSection/domain.module.scss\");\n/* harmony import */ var _domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SearchContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchContainer */ \"(app-pages-browser)/./src/components/homepage/domainSection/SearchContainer.jsx\");\n/* harmony import */ var _DomainPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DomainPrice */ \"(app-pages-browser)/./src/components/homepage/domainSection/DomainPrice.jsx\");\n/* harmony import */ var _components_common_sectiontitle_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/sectiontitle/SectionTitle */ \"(app-pages-browser)/./src/components/common/sectiontitle/SectionTitle.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Domain = ()=>{\n    _s();\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const handleCurrencyChange = (e)=>{\n        setCurrency(e.target.value);\n        setInputValue(e.target.value);\n    };\n    const handleDomainChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleDomainClick = (currency)=>{\n        setInputValue(currency);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().backgroundWrap),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().contentWrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().content),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_sectiontitle_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                sectionTitle: \"Domain name search – buy a domain in minutes\",\n                                className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"It’s easy – simply enter your desired domain name and instantly check its availability. Register it before someone else will.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        currency: currency,\n                        inputValue: inputValue,\n                        handleCurrencyChange: handleCurrencyChange,\n                        handleDomainChange: handleDomainChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DomainPrice__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleDomainClick: handleDomainClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_domainSection_domain_module_scss__WEBPACK_IMPORTED_MODULE_1___default().transferLink),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Already have a domain? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: \"Transfer it\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 38\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\homepage\\\\domainSection\\\\Domain.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Domain, \"QNhshV/Sbw+h/PnAT64r8hBmdKo=\");\n_c = Domain;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Domain);\nvar _c;\n$RefreshReg$(_c, \"Domain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlL2RvbWFpblNlY3Rpb24vRG9tYWluLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN5RDtBQUNUO0FBQ1I7QUFDaUM7QUFDeEM7QUFFakMsTUFBTUssU0FBUzs7SUFDYixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1NLHVCQUF1QixDQUFDQztRQUM1QkosWUFBWUksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQzFCSixjQUFjRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0g7UUFDMUJGLGNBQWNFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM5QjtJQUVBLE1BQU1FLG9CQUFvQixDQUFDVDtRQUN6QkcsY0FBY0g7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBV2pCLHlGQUFxQjtzQkFDbkMsNEVBQUNnQjtnQkFBSUMsV0FBV2pCLHNGQUFrQjs7a0NBQ2hDLDhEQUFDZ0I7d0JBQUlDLFdBQVdqQixrRkFBYzs7MENBQzVCLDhEQUFDRyxvRkFBWUE7Z0NBQ1hrQixjQUFhO2dDQUNiSixXQUFXakIsZ0ZBQVk7Ozs7OzswQ0FFekIsOERBQUN1QjswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQU1MLDhEQUFDdEIsd0RBQWVBO3dCQUNkSyxVQUFVQTt3QkFDVkUsWUFBWUE7d0JBQ1pFLHNCQUFzQkE7d0JBQ3RCSSxvQkFBb0JBOzs7Ozs7a0NBRXRCLDhEQUFDWixvREFBV0E7d0JBQUNhLG1CQUFtQkE7Ozs7OztrQ0FFaEMsOERBQUNDO3dCQUFJQyxXQUFXakIsdUZBQW1CO2tDQUNqQyw0RUFBQ3VCOztnQ0FBRTs4Q0FDc0IsOERBQUNFO29DQUFFQyxNQUFLOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7R0FqRE1yQjtLQUFBQTtBQW1ETixpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwcml5YW5rYW1cXG1hZHBvcG8tcmV2YW1wXFxzcmNcXGNvbXBvbmVudHNcXGhvbWVwYWdlXFxkb21haW5TZWN0aW9uXFxEb21haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9kb21haW5TZWN0aW9uL2RvbWFpbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgU2VhcmNoQ29udGFpbmVyIGZyb20gXCIuL1NlYXJjaENvbnRhaW5lclwiO1xyXG5pbXBvcnQgRG9tYWluUHJpY2UgZnJvbSBcIi4vRG9tYWluUHJpY2VcIjtcclxuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi9zZWN0aW9udGl0bGUvU2VjdGlvblRpdGxlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEb21haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3VycmVuY3lDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRG9tYWluQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvbWFpbkNsaWNrID0gKGN1cnJlbmN5KSA9PiB7XHJcbiAgICBzZXRJbnB1dFZhbHVlKGN1cnJlbmN5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kV3JhcH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50V3JhcH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlXHJcbiAgICAgICAgICAgICAgc2VjdGlvblRpdGxlPVwiRG9tYWluIG5hbWUgc2VhcmNoIOKAkyBidXkgYSBkb21haW4gaW4gbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEl04oCZcyBlYXN5IOKAkyBzaW1wbHkgZW50ZXIgeW91ciBkZXNpcmVkIGRvbWFpbiBuYW1lIGFuZCBpbnN0YW50bHlcclxuICAgICAgICAgICAgICBjaGVjayBpdHMgYXZhaWxhYmlsaXR5LiBSZWdpc3RlciBpdCBiZWZvcmUgc29tZW9uZSBlbHNlIHdpbGwuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxTZWFyY2hDb250YWluZXJcclxuICAgICAgICAgICAgY3VycmVuY3k9e2N1cnJlbmN5fVxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICBoYW5kbGVDdXJyZW5jeUNoYW5nZT17aGFuZGxlQ3VycmVuY3lDaGFuZ2V9XHJcbiAgICAgICAgICAgIGhhbmRsZURvbWFpbkNoYW5nZT17aGFuZGxlRG9tYWluQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxEb21haW5QcmljZSBoYW5kbGVEb21haW5DbGljaz17aGFuZGxlRG9tYWluQ2xpY2t9IC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFuc2Zlckxpbmt9PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYSBkb21haW4/IDxhIGhyZWY9XCIjXCI+VHJhbnNmZXIgaXQ8L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb21haW47XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJTZWFyY2hDb250YWluZXIiLCJEb21haW5QcmljZSIsIlNlY3Rpb25UaXRsZSIsInVzZVN0YXRlIiwiRG9tYWluIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlQ3VycmVuY3lDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEb21haW5DaGFuZ2UiLCJoYW5kbGVEb21haW5DbGljayIsImRpdiIsImNsYXNzTmFtZSIsImJhY2tncm91bmRXcmFwIiwiY29udGVudFdyYXAiLCJjb250ZW50Iiwic2VjdGlvblRpdGxlIiwidGl0bGUiLCJwIiwidHJhbnNmZXJMaW5rIiwiYSIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/homepage/domainSection/Domain.jsx\n"));

/***/ })

});