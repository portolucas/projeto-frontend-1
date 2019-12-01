/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/css/index.css":
/*!****************************!*\
  !*** ./dist/css/index.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dist/css/index.css?");

/***/ }),

/***/ "./src/img/apple-touch-icon.png":
/*!**************************************!*\
  !*** ./src/img/apple-touch-icon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/apple-touch-icon.png\";\n\n//# sourceURL=webpack:///./src/img/apple-touch-icon.png?");

/***/ }),

/***/ "./src/img/favicon-142x142.png":
/*!*************************************!*\
  !*** ./src/img/favicon-142x142.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-142x142.png\";\n\n//# sourceURL=webpack:///./src/img/favicon-142x142.png?");

/***/ }),

/***/ "./src/img/favicon-144x144.png":
/*!*************************************!*\
  !*** ./src/img/favicon-144x144.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-144x144.png\";\n\n//# sourceURL=webpack:///./src/img/favicon-144x144.png?");

/***/ }),

/***/ "./src/img/favicon-192x192.png":
/*!*************************************!*\
  !*** ./src/img/favicon-192x192.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-192x192.png\";\n\n//# sourceURL=webpack:///./src/img/favicon-192x192.png?");

/***/ }),

/***/ "./src/img/favicon-32x32.png":
/*!***********************************!*\
  !*** ./src/img/favicon-32x32.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-32x32.png\";\n\n//# sourceURL=webpack:///./src/img/favicon-32x32.png?");

/***/ }),

/***/ "./src/img/favicon-512x512.png":
/*!*************************************!*\
  !*** ./src/img/favicon-512x512.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/favicon-512x512.png\";\n\n//# sourceURL=webpack:///./src/img/favicon-512x512.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/apple-touch-icon.png */ \"./src/img/apple-touch-icon.png\");\n/* harmony import */ var _img_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/favicon-32x32.png */ \"./src/img/favicon-32x32.png\");\n/* harmony import */ var _img_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_favicon_142x142_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/favicon-142x142.png */ \"./src/img/favicon-142x142.png\");\n/* harmony import */ var _img_favicon_142x142_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_142x142_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_favicon_144x144_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/favicon-144x144.png */ \"./src/img/favicon-144x144.png\");\n/* harmony import */ var _img_favicon_144x144_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_144x144_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_favicon_192x192_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/favicon-192x192.png */ \"./src/img/favicon-192x192.png\");\n/* harmony import */ var _img_favicon_192x192_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_192x192_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_favicon_512x512_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/favicon-512x512.png */ \"./src/img/favicon-512x512.png\");\n/* harmony import */ var _img_favicon_512x512_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_512x512_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _dist_css_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dist/css/index.css */ \"./dist/css/index.css\");\n/* harmony import */ var _dist_css_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dist_css_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position */ \"./src/position.js\");\n\n\n\n\n\n\n\n\n_position__WEBPACK_IMPORTED_MODULE_7__[\"lat\"];\n_position__WEBPACK_IMPORTED_MODULE_7__[\"long\"];\ndocument.getElementById(\"registrarPonto\").addEventListener(\"click\", getPosition);\n\nfunction getPosition() {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      Object(_position__WEBPACK_IMPORTED_MODULE_7__[\"onSuccess\"])(position);\n    }, function (error) {\n      Object(_position__WEBPACK_IMPORTED_MODULE_7__[\"onError\"])(error);\n    });\n  }\n}\n\nObject(_position__WEBPACK_IMPORTED_MODULE_7__[\"onSuccess\"])(position);\nObject(_position__WEBPACK_IMPORTED_MODULE_7__[\"onError\"])(error);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/position.js":
/*!*************************!*\
  !*** ./src/position.js ***!
  \*************************/
/*! exports provided: lat, long, onSuccess, onError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lat\", function() { return lat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"long\", function() { return _long; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSuccess\", function() { return onSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onError\", function() { return onError; });\nvar lat = \"Latitude: \";\nvar _long = \"Longitude: \";\n\nfunction onSuccess(position) {\n  var latitude = position.coords.latitude;\n  var longitude = position.coords.longitude;\n  document.getElementById('startLat').innerHTML = \"\".concat(lat, \" \").concat(latitude);\n  document.getElementById('startLon').innerHTML = \"\".concat(_long, \" \").concat(longitude);\n}\n\n;\n\nfunction onError(error) {\n  document.getElementById(\"errorMessage\").innerHTML = 'Motivo: ' + error.message;\n}\n\n\n\n//# sourceURL=webpack:///./src/position.js?");

/***/ })

/******/ });