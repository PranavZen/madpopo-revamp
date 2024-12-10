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

/***/ "(app-pages-browser)/./src/components/fetchdatacard/WordpressHostingCard.jsx":
/*!***************************************************************!*\
  !*** ./src/components/fetchdatacard/WordpressHostingCard.jsx ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mockdata_mockData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mockdata/mockData */ \"(app-pages-browser)/./src/mockdata/mockData.js\");\n/* harmony import */ var _common_card_PriciningCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card/PriciningCard */ \"(app-pages-browser)/./src/components/common/card/PriciningCard.jsx\");\n/* harmony import */ var _common_slider_CardSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/slider/CardSlider */ \"(app-pages-browser)/./src/components/common/slider/CardSlider.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst WordpressHostingCard = ()=>{\n    _s();\n    const hostingPlans = _mockdata_mockData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].WordPressHosting;\n    const [isAllOpen, setIsAllOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleToggleAll = ()=>{\n        setIsAllOpen((prevState)=>!prevState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_slider_CardSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: hostingPlans.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_card_PriciningCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: item.name,\n                discounted: item.price.discounted,\n                renewal_price: item.price.renewal_price,\n                original: item.price.original,\n                anchorLink: item.anchorLink,\n                websites: item.features.websites,\n                storage: item.features.storage,\n                visits: item.features.visits,\n                clssName: item.clssName,\n                managed_wordpress: item.features.hosting.managed_wordpress,\n                daily_backups: item.features.hosting.daily_backups,\n                cdn: item.features.hosting.cdn,\n                dedicated_ip: item.features.hosting.dedicated_ip,\n                priority_support: item.features.hosting.priority_support,\n                one_click_installation: item.features.wordpress.one_click_installation,\n                google_integration: item.features.wordpress.google_integration,\n                acceleration: item.features.wordpress.acceleration,\n                auto_update: item.features.wordpress.auto_updates,\n                vulnerability_scanner: item.features.wordpress.vulnerability_scanner,\n                ai_builder: item.features.builder.ai_builder,\n                drag_and_drop_editor: item.features.builder.drag_and_drop_editor,\n                transaction_fees: item.features.builder.transaction_fees,\n                payment_methods: item.features.builder.payment_methods,\n                ai_features: item.features.builder.ai_features,\n                ddos_protection: item.features.security.ddos_protection,\n                domain_privacy: item.features.security.domain_privacy,\n                web_application_firewall: item.features.security.web_application_firewall,\n                cloudflare_protected_nameservers: item.features.security.cloudflare_protected_nameservers,\n                secure_access_manager: item.features.security.secure_access_manager,\n                bandwidth: item.features.support.bandwidth,\n                uptime_guarantee: item.features.support.uptime_guarantee,\n                global_data_centers: item.features.support.global_data_centers,\n                customer_support: item.features.support.customer_support,\n                money_back_guarantee: item.features.support.money_back_guarantee,\n                isOpen: isAllOpen,\n                onToggle: handleToggleAll\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\fetchdatacard\\\\WordpressHostingCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\priyankam\\\\madpopo-revamp\\\\src\\\\components\\\\fetchdatacard\\\\WordpressHostingCard.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WordpressHostingCard, \"4FbNqrd3KLyS+sXVj0Ywsai73RA=\");\n_c = WordpressHostingCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WordpressHostingCard);\nvar _c;\n$RefreshReg$(_c, \"WordpressHostingCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2ZldGNoZGF0YWNhcmQvV29yZHByZXNzSG9zdGluZ0NhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQztBQUNZO0FBQ0Y7QUFDcEI7QUFFakMsTUFBTUksdUJBQXVCOztJQUMzQixNQUFNQyxlQUFlTCwwREFBUUEsQ0FBQ00sZ0JBQWdCO0lBQzlDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNTSxrQkFBa0I7UUFDdEJELGFBQWEsQ0FBQ0UsWUFBYyxDQUFDQTtJQUMvQjtJQUVBLHFCQUNFLDhEQUFDUixpRUFBVUE7a0JBQ1JHLGFBQWFNLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDdkIsOERBQUNaLGtFQUFXQTtnQkFFVmEsT0FBT0YsS0FBS0csSUFBSTtnQkFDaEJDLFlBQVlKLEtBQUtLLEtBQUssQ0FBQ0QsVUFBVTtnQkFDakNFLGVBQWVOLEtBQUtLLEtBQUssQ0FBQ0MsYUFBYTtnQkFDdkNDLFVBQVVQLEtBQUtLLEtBQUssQ0FBQ0UsUUFBUTtnQkFDN0JDLFlBQVlSLEtBQUtRLFVBQVU7Z0JBQzNCQyxVQUFVVCxLQUFLVSxRQUFRLENBQUNELFFBQVE7Z0JBQ2hDRSxTQUFTWCxLQUFLVSxRQUFRLENBQUNDLE9BQU87Z0JBQzlCQyxRQUFRWixLQUFLVSxRQUFRLENBQUNFLE1BQU07Z0JBQzVCQyxVQUFVYixLQUFLYSxRQUFRO2dCQUN2QkMsbUJBQW1CZCxLQUFLVSxRQUFRLENBQUNLLE9BQU8sQ0FBQ0QsaUJBQWlCO2dCQUMxREUsZUFBZWhCLEtBQUtVLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxhQUFhO2dCQUNsREMsS0FBS2pCLEtBQUtVLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDRSxHQUFHO2dCQUM5QkMsY0FBY2xCLEtBQUtVLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDRyxZQUFZO2dCQUNoREMsa0JBQWtCbkIsS0FBS1UsUUFBUSxDQUFDSyxPQUFPLENBQUNJLGdCQUFnQjtnQkFDeERDLHdCQUF3QnBCLEtBQUtVLFFBQVEsQ0FBQ1csU0FBUyxDQUFDRCxzQkFBc0I7Z0JBQ3RFRSxvQkFBb0J0QixLQUFLVSxRQUFRLENBQUNXLFNBQVMsQ0FBQ0Msa0JBQWtCO2dCQUM5REMsY0FBY3ZCLEtBQUtVLFFBQVEsQ0FBQ1csU0FBUyxDQUFDRSxZQUFZO2dCQUNsREMsYUFBYXhCLEtBQUtVLFFBQVEsQ0FBQ1csU0FBUyxDQUFDSSxZQUFZO2dCQUNqREMsdUJBQXVCMUIsS0FBS1UsUUFBUSxDQUFDVyxTQUFTLENBQUNLLHFCQUFxQjtnQkFDcEVDLFlBQVkzQixLQUFLVSxRQUFRLENBQUNrQixPQUFPLENBQUNELFVBQVU7Z0JBQzVDRSxzQkFBc0I3QixLQUFLVSxRQUFRLENBQUNrQixPQUFPLENBQUNDLG9CQUFvQjtnQkFDaEVDLGtCQUFrQjlCLEtBQUtVLFFBQVEsQ0FBQ2tCLE9BQU8sQ0FBQ0UsZ0JBQWdCO2dCQUN4REMsaUJBQWlCL0IsS0FBS1UsUUFBUSxDQUFDa0IsT0FBTyxDQUFDRyxlQUFlO2dCQUN0REMsYUFBYWhDLEtBQUtVLFFBQVEsQ0FBQ2tCLE9BQU8sQ0FBQ0ksV0FBVztnQkFDOUNDLGlCQUFpQmpDLEtBQUtVLFFBQVEsQ0FBQ3dCLFFBQVEsQ0FBQ0QsZUFBZTtnQkFDdkRFLGdCQUFnQm5DLEtBQUtVLFFBQVEsQ0FBQ3dCLFFBQVEsQ0FBQ0MsY0FBYztnQkFDckRDLDBCQUEwQnBDLEtBQUtVLFFBQVEsQ0FBQ3dCLFFBQVEsQ0FBQ0Usd0JBQXdCO2dCQUN6RUMsa0NBQWtDckMsS0FBS1UsUUFBUSxDQUFDd0IsUUFBUSxDQUFDRyxnQ0FBZ0M7Z0JBQ3pGQyx1QkFBdUJ0QyxLQUFLVSxRQUFRLENBQUN3QixRQUFRLENBQUNJLHFCQUFxQjtnQkFDbkVDLFdBQVd2QyxLQUFLVSxRQUFRLENBQUM4QixPQUFPLENBQUNELFNBQVM7Z0JBQzFDRSxrQkFBa0J6QyxLQUFLVSxRQUFRLENBQUM4QixPQUFPLENBQUNDLGdCQUFnQjtnQkFDeERDLHFCQUFxQjFDLEtBQUtVLFFBQVEsQ0FBQzhCLE9BQU8sQ0FBQ0UsbUJBQW1CO2dCQUM5REMsa0JBQWtCM0MsS0FBS1UsUUFBUSxDQUFDOEIsT0FBTyxDQUFDRyxnQkFBZ0I7Z0JBQ3hEQyxzQkFBc0I1QyxLQUFLVSxRQUFRLENBQUM4QixPQUFPLENBQUNJLG9CQUFvQjtnQkFDaEVDLFFBQVFsRDtnQkFDUm1ELFVBQVVqRDtlQXBDTEk7Ozs7Ozs7Ozs7QUF5Q2Y7R0FyRE1UO0tBQUFBO0FBdUROLGlFQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccHJpeWFua2FtXFxtYWRwb3BvLXJldmFtcFxcc3JjXFxjb21wb25lbnRzXFxmZXRjaGRhdGFjYXJkXFxXb3JkcHJlc3NIb3N0aW5nQ2FyZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vY2tEYXRhIGZyb20gXCJAL21vY2tkYXRhL21vY2tEYXRhXCI7XHJcbmltcG9ydCBQcmljaW5nQ2FyZCBmcm9tIFwiLi4vY29tbW9uL2NhcmQvUHJpY2luaW5nQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZFNsaWRlciBmcm9tIFwiLi4vY29tbW9uL3NsaWRlci9DYXJkU2xpZGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBXb3JkcHJlc3NIb3N0aW5nQ2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBob3N0aW5nUGxhbnMgPSBtb2NrRGF0YS5Xb3JkUHJlc3NIb3N0aW5nO1xyXG4gIGNvbnN0IFtpc0FsbE9wZW4sIHNldElzQWxsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNBbGxPcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIH07XHJcbiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFNsaWRlcj5cclxuICAgICAge2hvc3RpbmdQbGFucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgIGRpc2NvdW50ZWQ9e2l0ZW0ucHJpY2UuZGlzY291bnRlZH1cclxuICAgICAgICAgIHJlbmV3YWxfcHJpY2U9e2l0ZW0ucHJpY2UucmVuZXdhbF9wcmljZX1cclxuICAgICAgICAgIG9yaWdpbmFsPXtpdGVtLnByaWNlLm9yaWdpbmFsfVxyXG4gICAgICAgICAgYW5jaG9yTGluaz17aXRlbS5hbmNob3JMaW5rfVxyXG4gICAgICAgICAgd2Vic2l0ZXM9e2l0ZW0uZmVhdHVyZXMud2Vic2l0ZXN9XHJcbiAgICAgICAgICBzdG9yYWdlPXtpdGVtLmZlYXR1cmVzLnN0b3JhZ2V9XHJcbiAgICAgICAgICB2aXNpdHM9e2l0ZW0uZmVhdHVyZXMudmlzaXRzfVxyXG4gICAgICAgICAgY2xzc05hbWU9e2l0ZW0uY2xzc05hbWV9XHJcbiAgICAgICAgICBtYW5hZ2VkX3dvcmRwcmVzcz17aXRlbS5mZWF0dXJlcy5ob3N0aW5nLm1hbmFnZWRfd29yZHByZXNzfVxyXG4gICAgICAgICAgZGFpbHlfYmFja3Vwcz17aXRlbS5mZWF0dXJlcy5ob3N0aW5nLmRhaWx5X2JhY2t1cHN9XHJcbiAgICAgICAgICBjZG49e2l0ZW0uZmVhdHVyZXMuaG9zdGluZy5jZG59XHJcbiAgICAgICAgICBkZWRpY2F0ZWRfaXA9e2l0ZW0uZmVhdHVyZXMuaG9zdGluZy5kZWRpY2F0ZWRfaXB9XHJcbiAgICAgICAgICBwcmlvcml0eV9zdXBwb3J0PXtpdGVtLmZlYXR1cmVzLmhvc3RpbmcucHJpb3JpdHlfc3VwcG9ydH1cclxuICAgICAgICAgIG9uZV9jbGlja19pbnN0YWxsYXRpb249e2l0ZW0uZmVhdHVyZXMud29yZHByZXNzLm9uZV9jbGlja19pbnN0YWxsYXRpb259XHJcbiAgICAgICAgICBnb29nbGVfaW50ZWdyYXRpb249e2l0ZW0uZmVhdHVyZXMud29yZHByZXNzLmdvb2dsZV9pbnRlZ3JhdGlvbn1cclxuICAgICAgICAgIGFjY2VsZXJhdGlvbj17aXRlbS5mZWF0dXJlcy53b3JkcHJlc3MuYWNjZWxlcmF0aW9ufVxyXG4gICAgICAgICAgYXV0b191cGRhdGU9e2l0ZW0uZmVhdHVyZXMud29yZHByZXNzLmF1dG9fdXBkYXRlc31cclxuICAgICAgICAgIHZ1bG5lcmFiaWxpdHlfc2Nhbm5lcj17aXRlbS5mZWF0dXJlcy53b3JkcHJlc3MudnVsbmVyYWJpbGl0eV9zY2FubmVyfVxyXG4gICAgICAgICAgYWlfYnVpbGRlcj17aXRlbS5mZWF0dXJlcy5idWlsZGVyLmFpX2J1aWxkZXJ9XHJcbiAgICAgICAgICBkcmFnX2FuZF9kcm9wX2VkaXRvcj17aXRlbS5mZWF0dXJlcy5idWlsZGVyLmRyYWdfYW5kX2Ryb3BfZWRpdG9yfVxyXG4gICAgICAgICAgdHJhbnNhY3Rpb25fZmVlcz17aXRlbS5mZWF0dXJlcy5idWlsZGVyLnRyYW5zYWN0aW9uX2ZlZXN9XHJcbiAgICAgICAgICBwYXltZW50X21ldGhvZHM9e2l0ZW0uZmVhdHVyZXMuYnVpbGRlci5wYXltZW50X21ldGhvZHN9XHJcbiAgICAgICAgICBhaV9mZWF0dXJlcz17aXRlbS5mZWF0dXJlcy5idWlsZGVyLmFpX2ZlYXR1cmVzfVxyXG4gICAgICAgICAgZGRvc19wcm90ZWN0aW9uPXtpdGVtLmZlYXR1cmVzLnNlY3VyaXR5LmRkb3NfcHJvdGVjdGlvbn1cclxuICAgICAgICAgIGRvbWFpbl9wcml2YWN5PXtpdGVtLmZlYXR1cmVzLnNlY3VyaXR5LmRvbWFpbl9wcml2YWN5fVxyXG4gICAgICAgICAgd2ViX2FwcGxpY2F0aW9uX2ZpcmV3YWxsPXtpdGVtLmZlYXR1cmVzLnNlY3VyaXR5LndlYl9hcHBsaWNhdGlvbl9maXJld2FsbH1cclxuICAgICAgICAgIGNsb3VkZmxhcmVfcHJvdGVjdGVkX25hbWVzZXJ2ZXJzPXtpdGVtLmZlYXR1cmVzLnNlY3VyaXR5LmNsb3VkZmxhcmVfcHJvdGVjdGVkX25hbWVzZXJ2ZXJzfVxyXG4gICAgICAgICAgc2VjdXJlX2FjY2Vzc19tYW5hZ2VyPXtpdGVtLmZlYXR1cmVzLnNlY3VyaXR5LnNlY3VyZV9hY2Nlc3NfbWFuYWdlcn1cclxuICAgICAgICAgIGJhbmR3aWR0aD17aXRlbS5mZWF0dXJlcy5zdXBwb3J0LmJhbmR3aWR0aH1cclxuICAgICAgICAgIHVwdGltZV9ndWFyYW50ZWU9e2l0ZW0uZmVhdHVyZXMuc3VwcG9ydC51cHRpbWVfZ3VhcmFudGVlfVxyXG4gICAgICAgICAgZ2xvYmFsX2RhdGFfY2VudGVycz17aXRlbS5mZWF0dXJlcy5zdXBwb3J0Lmdsb2JhbF9kYXRhX2NlbnRlcnN9XHJcbiAgICAgICAgICBjdXN0b21lcl9zdXBwb3J0PXtpdGVtLmZlYXR1cmVzLnN1cHBvcnQuY3VzdG9tZXJfc3VwcG9ydH1cclxuICAgICAgICAgIG1vbmV5X2JhY2tfZ3VhcmFudGVlPXtpdGVtLmZlYXR1cmVzLnN1cHBvcnQubW9uZXlfYmFja19ndWFyYW50ZWV9XHJcbiAgICAgICAgICBpc09wZW49e2lzQWxsT3Blbn1cclxuICAgICAgICAgIG9uVG9nZ2xlPXtoYW5kbGVUb2dnbGVBbGx9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0NhcmRTbGlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRwcmVzc0hvc3RpbmdDYXJkO1xyXG4iXSwibmFtZXMiOlsibW9ja0RhdGEiLCJQcmljaW5nQ2FyZCIsIkNhcmRTbGlkZXIiLCJ1c2VTdGF0ZSIsIldvcmRwcmVzc0hvc3RpbmdDYXJkIiwiaG9zdGluZ1BsYW5zIiwiV29yZFByZXNzSG9zdGluZyIsImlzQWxsT3BlbiIsInNldElzQWxsT3BlbiIsImhhbmRsZVRvZ2dsZUFsbCIsInByZXZTdGF0ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwibmFtZSIsImRpc2NvdW50ZWQiLCJwcmljZSIsInJlbmV3YWxfcHJpY2UiLCJvcmlnaW5hbCIsImFuY2hvckxpbmsiLCJ3ZWJzaXRlcyIsImZlYXR1cmVzIiwic3RvcmFnZSIsInZpc2l0cyIsImNsc3NOYW1lIiwibWFuYWdlZF93b3JkcHJlc3MiLCJob3N0aW5nIiwiZGFpbHlfYmFja3VwcyIsImNkbiIsImRlZGljYXRlZF9pcCIsInByaW9yaXR5X3N1cHBvcnQiLCJvbmVfY2xpY2tfaW5zdGFsbGF0aW9uIiwid29yZHByZXNzIiwiZ29vZ2xlX2ludGVncmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwiYXV0b191cGRhdGUiLCJhdXRvX3VwZGF0ZXMiLCJ2dWxuZXJhYmlsaXR5X3NjYW5uZXIiLCJhaV9idWlsZGVyIiwiYnVpbGRlciIsImRyYWdfYW5kX2Ryb3BfZWRpdG9yIiwidHJhbnNhY3Rpb25fZmVlcyIsInBheW1lbnRfbWV0aG9kcyIsImFpX2ZlYXR1cmVzIiwiZGRvc19wcm90ZWN0aW9uIiwic2VjdXJpdHkiLCJkb21haW5fcHJpdmFjeSIsIndlYl9hcHBsaWNhdGlvbl9maXJld2FsbCIsImNsb3VkZmxhcmVfcHJvdGVjdGVkX25hbWVzZXJ2ZXJzIiwic2VjdXJlX2FjY2Vzc19tYW5hZ2VyIiwiYmFuZHdpZHRoIiwic3VwcG9ydCIsInVwdGltZV9ndWFyYW50ZWUiLCJnbG9iYWxfZGF0YV9jZW50ZXJzIiwiY3VzdG9tZXJfc3VwcG9ydCIsIm1vbmV5X2JhY2tfZ3VhcmFudGVlIiwiaXNPcGVuIiwib25Ub2dnbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/fetchdatacard/WordpressHostingCard.jsx\n"));

/***/ })

});