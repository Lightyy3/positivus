"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/List/page",{

/***/ "(app-pages-browser)/./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const files = [\n        {\n            href: \"/About\",\n            label: \"About us\"\n        },\n        {\n            href: \"/Services\",\n            label: \"Services and Pricing\"\n        },\n        {\n            href: \"/Usecases\",\n            label: \"Use Cases\"\n        },\n        {\n            href: \"/List\",\n            label: \"Request List\"\n        },\n        {\n            href: \"/Blog\",\n            label: \"Blog\"\n        }\n    ];\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-white shadow-md fixed top-0  w-full z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex  justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4 mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/images/15.png\",\n                                alt: \"Logo\",\n                                className: \"h-8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/\",\n                                className: \"text-xl font-bold text-gray-800\",\n                                children: \"Positivus\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden lg:flex space-x-10\",\n                        children: [\n                            files.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: item.href,\n                                    className: path === item.href ? \"text-green-500 hover:text-green-600 font-semibold border-b-2 border-green-500 py-2\" : \"text-gray-700 hover:text-green-500 py-2\",\n                                    children: item.label\n                                }, item.href, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/Quote\",\n                                className: path === \"/Quote\" ? \"text-green-500 hover:text-green-600 font-semibold border-b-2 border-green-500 py-2\" : \"text-white hover:text-gray-800 hover:bg-green-600 py-2 bg-green-500 rounded-full px-4\",\n                                children: \"Request a quote\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMenu,\n                        className: \"lg:hidden flex text-gray-700 mt-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-6 h-6\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeWidth: \"2\",\n                                d: isMenuOpen ? \"M6 18L18 6M6 6l12 12\" : \"M4 6h16M4 12h16M4 18h16\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"lg:hidden bg-white shadow-md rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-2 px-4 py-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                            className: \"w-full h-1 bg-green-500\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        files.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: item.href,\n                                className: \"block text-gray-700 hover:text-green-500 py-2 text-center\",\n                                children: item.label\n                            }, item.href, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/Quote\",\n                            className: \"block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 text-center\",\n                            children: \"Request a quote\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Desktop\\\\projects\\\\NextJS\\\\demo\\\\01-starting-project\\\\components\\\\header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"Uy0OavhUgaOEjTAbrZQeivPG6KE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ2lCO0FBQ2I7QUFFbEIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNSSxPQUFPTCw0REFBV0E7SUFDeEIsTUFBTU0sUUFBUTtRQUNaO1lBQUVDLE1BQU07WUFBVUMsT0FBTztRQUFXO1FBQ3BDO1lBQUVELE1BQU07WUFBYUMsT0FBTztRQUF1QjtRQUNuRDtZQUFFRCxNQUFNO1lBQWFDLE9BQU87UUFBWTtRQUN4QztZQUFFRCxNQUFNO1lBQVNDLE9BQU87UUFBZTtRQUN2QztZQUFFRCxNQUFNO1lBQVNDLE9BQU87UUFBTztLQUNoQztJQUVELE1BQU1DLGFBQWE7UUFDakJMLGNBQWMsQ0FBQ0Q7SUFDakI7SUFDQSxxQkFDRSw4REFBQ087UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUlDLEtBQUk7Z0NBQWlCQyxLQUFJO2dDQUFPSixXQUFVOzs7Ozs7MENBQy9DLDhEQUFDWixpREFBSUE7Z0NBQUNRLE1BQUs7Z0NBQUlJLFdBQVU7MENBQWtDOzs7Ozs7Ozs7Ozs7a0NBSzdELDhEQUFDSzt3QkFBSUwsV0FBVTs7NEJBQ1pMLE1BQU1XLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ25CLGlEQUFJQTtvQ0FFSFEsTUFBTVcsS0FBS1gsSUFBSTtvQ0FDZkksV0FDRU4sU0FBU2EsS0FBS1gsSUFBSSxHQUNkLHVGQUNBOzhDQUdMVyxLQUFLVixLQUFLO21DQVJOVSxLQUFLWCxJQUFJOzs7OzswQ0FXbEIsOERBQUNSLGlEQUFJQTtnQ0FDSFEsTUFBSztnQ0FDTEksV0FDRU4sU0FBUyxXQUNMLHVGQUNBOzBDQUVQOzs7Ozs7Ozs7Ozs7a0NBS0gsOERBQUNjO3dCQUNDQyxTQUFTWDt3QkFDVEUsV0FBVTtrQ0FFViw0RUFBQ1U7NEJBQ0NWLFdBQVU7NEJBQ1ZXLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05DLFNBQVE7NEJBQ1JDLFFBQU87c0NBRVAsNEVBQUNwQjtnQ0FDQ3FCLGFBQVk7Z0NBQ1pDLEdBQ0V4QixhQUFhLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU8vQ0EsNEJBQ0MsOERBQUNhO2dCQUFJTCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNpQjs0QkFBR2pCLFdBQVU7Ozs7Ozt3QkFDYkwsTUFBTVcsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDbkIsaURBQUlBO2dDQUVIUSxNQUFNVyxLQUFLWCxJQUFJO2dDQUNmSSxXQUFVOzBDQUVUTyxLQUFLVixLQUFLOytCQUpOVSxLQUFLWCxJQUFJOzs7OztzQ0FPbEIsOERBQUNSLGlEQUFJQTs0QkFDSFEsTUFBSzs0QkFDTEksV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQWhHd0JUOztRQUdURix3REFBV0E7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgZmlsZXMgPSBbXHJcbiAgICB7IGhyZWY6IFwiL0Fib3V0XCIsIGxhYmVsOiBcIkFib3V0IHVzXCIgfSxcclxuICAgIHsgaHJlZjogXCIvU2VydmljZXNcIiwgbGFiZWw6IFwiU2VydmljZXMgYW5kIFByaWNpbmdcIiB9LFxyXG4gICAgeyBocmVmOiBcIi9Vc2VjYXNlc1wiLCBsYWJlbDogXCJVc2UgQ2FzZXNcIiB9LFxyXG4gICAgeyBocmVmOiBcIi9MaXN0XCIsIGxhYmVsOiBcIlJlcXVlc3QgTGlzdFwiIH0sXHJcbiAgICB7IGhyZWY6IFwiL0Jsb2dcIiwgbGFiZWw6IFwiQmxvZ1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIGZpeGVkIHRvcC0wICB3LWZ1bGwgei01MFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04IHB5LTIgZmxleCAganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBtdC0yXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMTUucG5nXCIgYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cImgtOFwiIC8+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgUG9zaXRpdnVzXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggc3BhY2UteC0xMFwiPlxyXG4gICAgICAgICAge2ZpbGVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9PT0gaXRlbS5ocmVmXHJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyZWVuLTUwMCBob3Zlcjp0ZXh0LWdyZWVuLTYwMCBmb250LXNlbWlib2xkIGJvcmRlci1iLTIgYm9yZGVyLWdyZWVuLTUwMCBweS0yXCJcclxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmVlbi01MDAgcHktMlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9RdW90ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgcGF0aCA9PT0gXCIvUXVvdGVcIlxyXG4gICAgICAgICAgICAgICAgPyBcInRleHQtZ3JlZW4tNTAwIGhvdmVyOnRleHQtZ3JlZW4tNjAwIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWItMiBib3JkZXItZ3JlZW4tNTAwIHB5LTJcIlxyXG4gICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmVlbi02MDAgcHktMiBiZy1ncmVlbi01MDAgcm91bmRlZC1mdWxsIHB4LTRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlcXVlc3QgYSBxdW90ZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIGZsZXggdGV4dC1ncmF5LTcwMCBtdC0zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgIGQ9e1xyXG4gICAgICAgICAgICAgICAgaXNNZW51T3BlbiA/IFwiTTYgMThMMTggNk02IDZsMTIgMTJcIiA6IFwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtpc01lbnVPcGVuICYmIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImxnOmhpZGRlbiBiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcHgtNCBweS00XCI+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xIGJnLWdyZWVuLTUwMFwiIC8+XHJcbiAgICAgICAgICAgIHtmaWxlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JlZW4tNTAwIHB5LTIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9RdW90ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVxdWVzdCBhIHF1b3RlXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICApfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInBhdGgiLCJmaWxlcyIsImhyZWYiLCJsYWJlbCIsInRvZ2dsZU1lbnUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJtYXAiLCJpdGVtIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsImZpbGwiLCJ4bWxucyIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImQiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header.js\n"));

/***/ })

});