"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/common/countryselection/CountrySelector.jsx":
/*!********************************************************************!*\
  !*** ./src/components/common/countryselection/CountrySelector.jsx ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/CurrencyContext */ \"(app-pages-browser)/./src/context/CurrencyContext.jsx\");\n/* harmony import */ var _header_header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/header.module.scss */ \"(app-pages-browser)/./src/components/header/header.module.scss\");\n/* harmony import */ var _header_header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_header_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst countries = [\n    {\n        name: \"India\",\n        currency: \"INR\",\n        symbol: \"₹\",\n        flag: \"images/header/Country.svg\"\n    },\n    {\n        name: \"UK\",\n        currency: \"Euro\",\n        symbol: \"€\",\n        flag: \"🇬🇧\"\n    },\n    {\n        name: \"USA\",\n        currency: \"Dollar\",\n        symbol: \"$\",\n        flag: \"🇺🇸\"\n    }\n];\nconst CountrySelector = ()=>{\n    _s();\n    const { currency, setCurrency } = (0,_context_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__.useCurrency)();\n    const handleCountryChange = (e)=>{\n        const selectedCountry = countries.find((country)=>country.name === e.target.value);\n        setCurrency(selectedCountry);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        id: \"country-select\",\n        className: (_header_header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formControl),\n        value: currency.country,\n        onChange: handleCountryChange,\n        children: countries.map((country)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                value: country.name,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: country.flag\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\common\\\\countryselection\\\\CountrySelector.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 10\n                    }, undefined),\n                    country.name\n                ]\n            }, country.name, true, {\n                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\common\\\\countryselection\\\\CountrySelector.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\common\\\\countryselection\\\\CountrySelector.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountrySelector, \"rM2TMuaXlw1XZViGAN/umpnJpe8=\", false, function() {\n    return [\n        _context_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__.useCurrency\n    ];\n});\n_c = CountrySelector;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountrySelector);\nvar _c;\n$RefreshReg$(_c, \"CountrySelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb3VudHJ5c2VsZWN0aW9uL0NvdW50cnlTZWxlY3Rvci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3RDtBQUNIO0FBQ3JELE1BQU1FLFlBQVk7SUFDaEI7UUFBRUMsTUFBTTtRQUFTQyxVQUFVO1FBQU9DLFFBQVE7UUFBS0MsTUFBTTtJQUE0QjtJQUNqRjtRQUFFSCxNQUFNO1FBQU1DLFVBQVU7UUFBUUMsUUFBUTtRQUFLQyxNQUFNO0lBQU87SUFDMUQ7UUFBRUgsTUFBTTtRQUFPQyxVQUFVO1FBQVVDLFFBQVE7UUFBS0MsTUFBTTtJQUFPO0NBQzlEO0FBRUQsTUFBTUMsa0JBQWtCOztJQUN0QixNQUFNLEVBQUVILFFBQVEsRUFBRUksV0FBVyxFQUFFLEdBQUdSLHFFQUFXQTtJQUU3QyxNQUFNUyxzQkFBc0IsQ0FBQ0M7UUFDM0IsTUFBTUMsa0JBQWtCVCxVQUFVVSxJQUFJLENBQ3BDLENBQUNDLFVBQVlBLFFBQVFWLElBQUksS0FBS08sRUFBRUksTUFBTSxDQUFDQyxLQUFLO1FBRTlDUCxZQUFZRztJQUNkO0lBRUEscUJBQ0UsOERBQUNLO1FBQ0NDLElBQUc7UUFDSEMsV0FBV2pCLCtFQUFrQjtRQUM3QmMsT0FBT1gsU0FBU1MsT0FBTztRQUN2Qk8sVUFBVVg7a0JBRVRQLFVBQVVtQixHQUFHLENBQUMsQ0FBQ1Isd0JBQ2QsOERBQUNTO2dCQUEwQlAsT0FBT0YsUUFBUVYsSUFBSTs7a0NBQzdDLDhEQUFDb0I7d0JBQ0VDLEtBQUtYLFFBQVFQLElBQUk7Ozs7OztvQkFJbEJPLFFBQVFWLElBQUk7O2VBTkZVLFFBQVFWLElBQUk7Ozs7Ozs7Ozs7QUFXakM7R0E3Qk1JOztRQUM4QlAsaUVBQVdBOzs7S0FEekNPO0FBK0JOLGlFQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHByaXlhbmthbVxcbWFkcG9wby1yZXZhbXBcXHNyY1xcY29tcG9uZW50c1xcY29tbW9uXFxjb3VudHJ5c2VsZWN0aW9uXFxDb3VudHJ5U2VsZWN0b3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VDdXJyZW5jeSB9IGZyb20gXCJAL2NvbnRleHQvQ3VycmVuY3lDb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuY29uc3QgY291bnRyaWVzID0gW1xyXG4gIHsgbmFtZTogXCJJbmRpYVwiLCBjdXJyZW5jeTogXCJJTlJcIiwgc3ltYm9sOiBcIuKCuVwiLCBmbGFnOiBcImltYWdlcy9oZWFkZXIvQ291bnRyeS5zdmdcIiB9LFxyXG4gIHsgbmFtZTogXCJVS1wiLCBjdXJyZW5jeTogXCJFdXJvXCIsIHN5bWJvbDogXCLigqxcIiwgZmxhZzogXCLwn4es8J+Hp1wiIH0sXHJcbiAgeyBuYW1lOiBcIlVTQVwiLCBjdXJyZW5jeTogXCJEb2xsYXJcIiwgc3ltYm9sOiBcIiRcIiwgZmxhZzogXCLwn4e68J+HuFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBDb3VudHJ5U2VsZWN0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgc2V0Q3VycmVuY3kgfSA9IHVzZUN1cnJlbmN5KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvdW50cnlDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyaWVzLmZpbmQoXHJcbiAgICAgIChjb3VudHJ5KSA9PiBjb3VudHJ5Lm5hbWUgPT09IGUudGFyZ2V0LnZhbHVlXHJcbiAgICApO1xyXG4gICAgc2V0Q3VycmVuY3koc2VsZWN0ZWRDb3VudHJ5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdFxyXG4gICAgICBpZD1cImNvdW50cnktc2VsZWN0XCJcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRyb2x9XHJcbiAgICAgIHZhbHVlPXtjdXJyZW5jeS5jb3VudHJ5fVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ291bnRyeUNoYW5nZX1cclxuICAgID5cclxuICAgICAge2NvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17Y291bnRyeS5uYW1lfSB2YWx1ZT17Y291bnRyeS5uYW1lfT5cclxuICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2NvdW50cnkuZmxhZ31cclxuICAgICAgICAgICAgLy8gYWx0PXtgJHtjb3VudHJ5Lm5hbWV9IGZsYWdgfVxyXG4gICAgICAgICAgICAvLyBzdHlsZT17eyB3aWR0aDogXCIyMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtjb3VudHJ5Lm5hbWV9XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50cnlTZWxlY3RvcjtcclxuIl0sIm5hbWVzIjpbInVzZUN1cnJlbmN5Iiwic3R5bGVzIiwiY291bnRyaWVzIiwibmFtZSIsImN1cnJlbmN5Iiwic3ltYm9sIiwiZmxhZyIsIkNvdW50cnlTZWxlY3RvciIsInNldEN1cnJlbmN5IiwiaGFuZGxlQ291bnRyeUNoYW5nZSIsImUiLCJzZWxlY3RlZENvdW50cnkiLCJmaW5kIiwiY291bnRyeSIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0IiwiaWQiLCJjbGFzc05hbWUiLCJmb3JtQ29udHJvbCIsIm9uQ2hhbmdlIiwibWFwIiwib3B0aW9uIiwiaW1nIiwic3JjIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/countryselection/CountrySelector.jsx\n"));

/***/ })

});