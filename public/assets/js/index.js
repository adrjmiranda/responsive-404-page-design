/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("/**\n * Navbar Toggle Menu\n */\nvar toggleMenuBtn = document.getElementById('toggle-menu');\nvar navbarMenu = document.querySelector('.navbar-menu');\ntoggleMenuBtn === null || toggleMenuBtn === void 0 ? void 0 : toggleMenuBtn.addEventListener('click', function () {\n    var _a;\n    navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.toggle('__show');\n    (_a = toggleMenuBtn\n        .querySelectorAll('i')) === null || _a === void 0 ? void 0 : _a.forEach(function (icon) { return icon.classList.toggle('__hidden'); });\n});\n\n\n//# sourceURL=webpack://responsive-404-page-design/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;