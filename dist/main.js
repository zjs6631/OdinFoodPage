/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPageLoad */ \"./src/mainPageLoad.js\");\n\r\n\r\nconsole.log(\"index.js connected\");\r\n\r\nconst container = document.getElementById('content')\r\ncontainer.appendChild((0,_mainPageLoad__WEBPACK_IMPORTED_MODULE_0__.homeContent)());\n\n//# sourceURL=webpack://odinfoodpage/./src/index.js?");

/***/ }),

/***/ "./src/mainPageLoad.js":
/*!*****************************!*\
  !*** ./src/mainPageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeContent\": () => (/* binding */ homeContent)\n/* harmony export */ });\n\r\n//module used to create the initial home page\r\nconst homeContent = () => {\r\n    //I create a div element and begin adding a title, buttons, along with divs containing different sections for the page.\r\n    //I append all of the additional elements to their appropriate div then append those divs to the main container div.\r\n    //I then return the container\r\n    const container = document.createElement('div');\r\n    container.classList.add('tabPage');\r\n    const title = document.createElement('h1');\r\n    title.innerHTML = \"Cats and Coffee\";\r\n    const buttonBar = document.createElement('div');\r\n    buttonBar.classList.add('buttonbar');\r\n    const homeBtn = document.createElement('button');\r\n    homeBtn.innerHTML = \"HOME\";\r\n    homeBtn.setAttribute('id','homeBtn')\r\n    homeBtn.classList.add('barBtns');\r\n    const menuBtn = document.createElement('button');\r\n    menuBtn.innerHTML = \"MENU\";\r\n    menuBtn.setAttribute('id', 'menuBtn');\r\n    menuBtn.classList.add('barBtns');\r\n    const contactusBtn = document.createElement('button');\r\n    contactusBtn.innerHTML = \"CONTACT US\";\r\n    contactusBtn.classList.add('barBtns');\r\n    contactusBtn.setAttribute('id', 'contactBtn');\r\n    buttonBar.appendChild(homeBtn);\r\n    buttonBar.appendChild(menuBtn);\r\n    buttonBar.appendChild(contactusBtn);\r\n    const descDiv = document.createElement('div');\r\n    descDiv.classList.add('homeInfo');\r\n    descDiv.innerText = \"Welcome to Cats and Coffee! The purrrfect location to come get your caffiene and kitty fix. We carry a variety of locally sources coffee beans that\" +\r\n    \" allow us to offer a high quality brew. The cats are just a plus!\"\r\n    const hoursDiv = document.createElement('div');\r\n    hoursDiv.classList.add('homeInfo');\r\n    hoursDiv.innerHTML = \"HOURS:<br> Sunday: 8am-8pm<br>Monday: 6am-6pm<br>Tuesday: 6am-6pm<br>Wednesday: 6am-6pm<br>Thursday: 6am-6pm<br>Friday: 6am-10pm<br>Saturday: 8am-10pm\";\r\n    const addressDiv = document.createElement('div');\r\n    addressDiv.classList.add('homeInfo');\r\n    addressDiv.innerHTML = \"Location: 333 Cat Nap Ln, Wilmington, North Carolina\"\r\n\r\n    container.appendChild(title);\r\n    container.appendChild(buttonBar);\r\n    container.appendChild(descDiv);\r\n    container.appendChild(hoursDiv);\r\n    container.appendChild(addressDiv);\r\n    return container;\r\n};\r\n//I export this module for use in my index.js\r\n\n\n//# sourceURL=webpack://odinfoodpage/./src/mainPageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;