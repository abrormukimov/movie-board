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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./HFF Fire Dancer.ttf */ \"./src/HFF Fire Dancer.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./CroissantOne-Regular.ttf */ \"./src/CroissantOne-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: MyFont;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: Croissant;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Croissant', sans-serif;\\r\\n  background-color: rgb(45, 32, 19);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  width: 100vw;\\r\\n  height: 12vh;\\r\\n  padding: 10px 250px;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  margin-bottom: 50px;\\r\\n  background-color: #a3a3a3;\\r\\n  box-shadow: 1px 1px 2px rgb(235, 8, 121);\\r\\n}\\r\\n\\r\\n.alert {\\r\\n  display: none;\\r\\n  width: 50%;\\r\\n  margin: 0 auto 30px auto;\\r\\n  text-align: center;\\r\\n  padding: 20px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.success {\\r\\n  background-color: rgb(157, 245, 157);\\r\\n}\\r\\n\\r\\n.error {\\r\\n  background-color: rgb(238, 130, 130);\\r\\n}\\r\\n\\r\\n.visible {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.invisible {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 150px;\\r\\n  color: yellow;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  margin-left: 100px;\\r\\n}\\r\\n\\r\\nnav ul li a,\\r\\np {\\r\\n  color: #fff;\\r\\n  text-decoration: none;\\r\\n  background: -webkit-linear-gradient(#bf0a23, #ff008d, #e01326);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n}\\r\\n\\r\\nnav ul li a:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.meals {\\r\\n  text-decoration: underline;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr;\\r\\n  margin-top: 100px;\\r\\n  margin-bottom: 60px;\\r\\n  width: 100vw;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  height: 200px;\\r\\n  width: 200px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  width: 200px;\\r\\n  justify-content: space-between;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.likes img {\\r\\n  width: 30px;\\r\\n}\\r\\n\\r\\n.like-counter {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 20%;\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.like-counter p {\\r\\n  font-size: 12px;\\r\\n  width: 60px;\\r\\n  margin-top: 8px;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  cursor: pointer;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  margin-bottom: 30px;\\r\\n  color: yellow;\\r\\n  margin-left: 20px;\\r\\n  padding: 5px 10px;\\r\\n  background: #23180d;\\r\\n  border: 1px solid yellow;\\r\\n  box-shadow: 1px 1px 1px green;\\r\\n  cursor: pointer;\\r\\n  border-radius: 8px;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\n.popup-window {\\r\\n  position: fixed;\\r\\n  left: 17.5%;\\r\\n  width: 65%;\\r\\n  top: 10px;\\r\\n  bottom: 10px;\\r\\n  padding: 20px;\\r\\n  backdrop-filter: blur(4px);\\r\\n  background-color: rgb(45, 32, 19);\\r\\n  border: 2px solid rgba(255, 255, 0, 0.3);\\r\\n  box-shadow: 1px 1px 1px rgba(0, 128, 0, 0.5);\\r\\n  animation-name: modalSlideUp;\\r\\n  animation-duration: 1s;\\r\\n  max-height: calc(100vh);\\r\\n  overflow-y: auto;\\r\\n  -ms-overflow-style: none;\\r\\n  scrollbar-width: none;\\r\\n}\\r\\n\\r\\n.popup-window::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.meal-popup-img {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.close-menu {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  background: -webkit-linear-gradient(orange, yellow, green);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  font-size: 100px;\\r\\n  font-weight: bold;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 50px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-menu:hover {\\r\\n  background: green;\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n}\\r\\n\\r\\n.popup-window li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.popup-img-div {\\r\\n  width: 70%;\\r\\n  margin: 20px auto;\\r\\n}\\r\\n\\r\\n.popup-img-div img {\\r\\n  width: 100%;\\r\\n  height: 400px;\\r\\n}\\r\\n\\r\\n.popup-details-div {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup-details-div h1 {\\r\\n  font-family: 'MyFont', sans-serif;\\r\\n  background: -webkit-linear-gradient(orange, yellow, green);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  font-size: 50px;\\r\\n  margin-top: 30px;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.details-list {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-size: 20px;\\r\\n  margin: 10px 130px;\\r\\n  margin-right: 0;\\r\\n}\\r\\n\\r\\n.details-list ul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.details-list ul:nth-child(2) {\\r\\n  margin-right: 40px;\\r\\n}\\r\\n\\r\\n.details-list ul li {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.comments-container h3 {\\r\\n  font-family: 'Croissant', sans-serif;\\r\\n  background: -webkit-linear-gradient(orange, yellow, green);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  text-align: center;\\r\\n  margin: 20px 0;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.comments-container p {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.comments-container form {\\r\\n  width: 50%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.comments-div div p {\\r\\n  margin-left: 25%;\\r\\n  background: #fff;\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.input-group input,\\r\\ntextarea {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  font-weight: bold;\\r\\n  font-size: 1rem;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  margin: 10px 0;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\ninput:focus,\\r\\ntextarea:focus {\\r\\n  outline-width: 0;\\r\\n}\\r\\n\\r\\n#nameInput {\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.button-div button {\\r\\n  margin-left: 0;\\r\\n}\\r\\n\\r\\n.submit-comment-btn {\\r\\n  margin-left: 0;\\r\\n  width: 40%;\\r\\n  font-size: larger;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  padding: 10px 100px;\\r\\n  border-top: 2px solid #23180d;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100vw;\\r\\n  margin-top: 100px;\\r\\n  background-color: #a3a3a3;\\r\\n  box-shadow: 1px 1px 2px rgb(235, 8, 121);\\r\\n  color: rgb(12, 9, 9);\\r\\n  font-weight: bold;\\r\\n  border-top: #ff008d;\\r\\n}\\r\\n\\r\\n@keyframes modalSlideUp {\\r\\n  0% {\\r\\n    transform: translateY(1500px);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: translateY(0);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ \"./src/logo.svg\");\n/* harmony import */ var _Like_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Like.svg */ \"./src/Like.svg\");\n/* harmony import */ var _myapi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myapi.js */ \"./src/myapi.js\");\n/* harmony import */ var _likeFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likeFunctions.js */ \"./src/likeFunctions.js\");\n\n\n\n\n\n\nconst elementGenerator = (typeName, className) => {\n  const element = document.createElement(typeName);\n  if (className) element.className = className;\n  return element;\n};\n\nconst dismisAlert = (alertDiv) => {\n  setTimeout(() => {\n    alertDiv.classList.remove('success', 'error');\n    alertDiv.classList.add('invisible');\n  }, 5000);\n};\n\nconst header = elementGenerator('header');\nconst logo = elementGenerator('img', 'logo');\nlogo.src = _logo_svg__WEBPACK_IMPORTED_MODULE_1__;\nconst navigation = elementGenerator('nav');\nconst uList = elementGenerator('ul');\nconst listOne = elementGenerator('li', 'meals');\nconst linkOne = elementGenerator('a');\nlinkOne.href = '#';\n\nfunction mealCounter() {\n  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')\n    .then((response) => response.json())\n    .then((data) => {\n      linkOne.textContent = `Meals (${data.meals.length})`;\n    });\n}\nmealCounter();\n\nconst listTwo = elementGenerator('li');\nconst linkTwo = elementGenerator('a');\nlinkTwo.href = '#';\nlinkTwo.textContent = 'Vegetarian';\n\nconst listThree = elementGenerator('li');\nconst linkThree = elementGenerator('a');\nlinkThree.href = '#';\nlinkThree.textContent = 'Diary';\n\nconst footer = elementGenerator('footer');\nfooter.textContent = 'Created by Tufoin and Abror under CC licence';\n\nconst root = document.getElementById('root');\n\nconst main = elementGenerator('main');\n\nconst getMealComments = async (popupSection, mealId) => {\n  const comments = await (0,_myapi_js__WEBPACK_IMPORTED_MODULE_3__.fetchComments)(mealId);\n  document.querySelector('.comments-div h3').textContent = `Comments ( ${comments.length || 0} )`;\n  if (!comments.error) {\n    let commentMarkup = '';\n    const commentsTag = popupSection.querySelector('.comments-list');\n    for (let i = 0; i < comments.length; i += 1) {\n      commentMarkup += `<p> ${comments[i].creation_date} ${comments[i].username} : ${comments[i].comment} </p>`;\n    }\n    commentsTag.innerHTML = commentMarkup;\n  }\n};\n\nconst commentCreator = (popupSection, mealId) => {\n  const data = { item_id: mealId, username: '', comment: '' };\n  const nameInput = popupSection.children[1].children[2].children[2].children[0].children[0];\n  const commentInput = popupSection.children[1].children[2].children[2].children[1].children[0];\n  const commentBtn = popupSection.children[1].children[2].children[2].children[2].children[0];\n  const alertDiv = popupSection.children[1].children[2].children[0].children[0];\n\n  nameInput.addEventListener('change', (e) => {\n    data.username = e.target.value;\n  });\n  commentInput.addEventListener('change', (e) => {\n    data.comment = e.target.value;\n  });\n\n  commentBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    if (nameInput.value.length > 0 && commentInput.value.length > 0) { // NOTE: revert it back\n      const response = await (0,_myapi_js__WEBPACK_IMPORTED_MODULE_3__.addComment)(data);\n      if (response?.status === 201) {\n        // await setMealCommentsInStore(mealId);\n        nameInput.value = '';\n        commentInput.value = '';\n        alertDiv.innerHTML = 'Comment Created Successfully';\n        getMealComments(popupSection, mealId);\n        alertDiv.classList.remove('invisible');\n        alertDiv.classList.add('success', 'visible');\n        dismisAlert(alertDiv);\n      }\n    }\n  });\n};\n\nconst displayMealDetails = async (popupSection, mealId) => {\n  const { meals } = await (0,_myapi_js__WEBPACK_IMPORTED_MODULE_3__.fetchMealById)(mealId);\n  popupSection.children[1].children[1].children[1].children[0].children[0].textContent = `Region: ${meals[0].strArea}`;\n\n  popupSection.children[1].children[1].children[1].children[0].children[1].textContent = `Category: ${meals[0].strCategory}`;\n\n  popupSection.children[1].children[1].children[1].children[1].children[0].textContent = `Ingredients: ${meals[0].strIngredient1}, ${meals[0].strIngredient2} ...`;\n\n  popupSection.children[1].children[1].children[1].children[1].children[1].textContent = `Tags: ${meals[0].strTags}`;\n};\n\nconst createPopup = (meal) => {\n  const popupSection = elementGenerator('section', 'popup-window invisible');\n  const popupMarkup = ` \n    <small class='close-menu'>&times;</small>   \n    <div class='blur-background'> \n      \n      <div class=\"popup-img-div\"><img class=\"meal-popup-img\" src=\"${meal.image}\" alt=\"meal\" /></div>\n      <div class=\"popup-details-div\">\n      <h1> ${meal.title} </h1>\n      <div class=\"details-list\">\n          <ul>\n          <li>Category: Rice</li>\n          <li>Category: Rice</li>\n          </ul>\n          <ul>\n          <li>Category: Rice</li>\n          <li>Category: Rice</li>\n          </ul>\n      </div>\n    </div>\n    <div class=\"comments-container\">\n  <div class=\"comments-div\">\n    <div class='alert'></div>\n    <h3></h3>\n    <div class=\"comments-list\"></div>\n  </div>\n  <h3>Add a comment</h3>\n  <form>\n    <div class=\"input-group\">\n      <input type=\"text\" id=\"nameInput\" placeholder=\"Your name\" required/>\n    </div>\n    <div class=\"input-group\">\n      <textarea\n        name=\"\"\n        id=\"commentInput\"\n        cols=\"30\"\n        rows=\"10\"\n        placeholder=\"Your insights\"\n      required></textarea>\n    </div>\n    <div class=''button-div>\n    <button type='submit' class='submit-comment-btn'> Comment </button>\n    </div>\n  </form>\n</div>\n`;\n  popupSection.innerHTML = popupMarkup;\n  commentCreator(popupSection, meal.id);\n  getMealComments(popupSection, meal.id);\n  displayMealDetails(popupSection, meal.id);\n\n  popupSection.style.display = 'block';\n  main.style.display = 'none';\n  document.body.appendChild(popupSection);\n  const closePopup = document.querySelector('.close-menu');\n  closePopup.addEventListener('click', () => {\n    popupSection.remove();\n    main.style.display = 'grid';\n  });\n};\n\nconst displayPopup = (mainTag) => {\n  const divs = mainTag.children;\n  const mealDetails = {\n    id: '',\n    title: '',\n    image: '',\n  };\n\n  for (let i = 0; i < divs.length; i += 1) {\n    const btn = divs[i].children[2];\n    btn.addEventListener('click', (e) => {\n      const mealTitle = e.target.parentElement.children[1].children[0].textContent;\n      const imageSrc = e.target.parentElement.children[0].src;\n      mealDetails.id = e.target.parentElement.id;\n      mealDetails.title = mealTitle;\n      mealDetails.image = imageSrc;\n      createPopup(mealDetails);\n    });\n  }\n};\n\nconst getMeals = async () => {\n  const likes1 = (0,_likeFunctions_js__WEBPACK_IMPORTED_MODULE_4__.getLikes)(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_myapi_js__WEBPACK_IMPORTED_MODULE_3__.APP_ID}/likes/`,\n  );\n\n  const data = await (0,_myapi_js__WEBPACK_IMPORTED_MODULE_3__.fetchMeals)();\n  data.meals.forEach((meal, index) => {\n    meal = elementGenerator('section');\n    const picture = elementGenerator('img', 'image');\n    picture.src = data.meals[index].strMealThumb;\n    picture.alt = 'space-image';\n    meal.id = data.meals[index].idMeal;\n    const likes = elementGenerator('div', 'likes');\n    const paragraph = elementGenerator('p');\n    paragraph.textContent = data.meals[index].strMeal;\n\n    const likeCounter = elementGenerator('div', 'like-counter');\n    const heart = elementGenerator('img');\n    heart.src = _Like_svg__WEBPACK_IMPORTED_MODULE_2__;\n    heart.alt = 'heart-image';\n    const like = elementGenerator('p');\n    like.textContent = '0 like';\n\n    heart.addEventListener('click', async (e) => {\n      e.preventDefault();\n      await (0,_likeFunctions_js__WEBPACK_IMPORTED_MODULE_4__.postLikes)(\n        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_myapi_js__WEBPACK_IMPORTED_MODULE_3__.APP_ID}/likes/`,\n        {\n          item_id: meal.id,\n        },\n      );\n      const prevLikes = like.textContent.split(' ')[0];\n      like.innerHTML = `${parseInt(prevLikes, 10) + 1} likes`;\n    });\n\n    likes1.then((data) => {\n      const foundItem = data.find((item) => meal.id === item.item_id);\n      like.textContent = `${foundItem?.likes || 0} likes`;\n    });\n\n    likeCounter.appendChild(heart);\n    likeCounter.appendChild(like);\n\n    likes.appendChild(paragraph);\n    likes.appendChild(likeCounter);\n\n    const comments = elementGenerator('button');\n    comments.textContent = 'Comments';\n\n    meal.appendChild(picture);\n    meal.appendChild(likes);\n    meal.appendChild(comments);\n\n    main.appendChild(meal);\n  });\n  displayPopup(main);\n};\ngetMeals();\n\nlistOne.appendChild(linkOne);\nlistTwo.appendChild(linkTwo);\nlistThree.appendChild(linkThree);\n\nuList.append(listOne, listTwo, listThree);\n\nnavigation.appendChild(uList);\n\nheader.appendChild(logo, navigation);\n\nroot.append(header, main, footer);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/likeFunctions.js":
/*!******************************!*\
  !*** ./src/likeFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nasync function postLikes(url = '', data = {}) {\n  const response = await fetch(url, {\n    method: 'POST',\n    mode: 'cors',\n    cache: 'no-cache',\n    credentials: 'same-origin',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    redirect: 'follow',\n    referrerPolicy: 'no-referrer',\n    body: JSON.stringify(data),\n  });\n  return response;\n}\n\nasync function getLikes(url = '') {\n  const response = await fetch(url, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  return response.json();\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/likeFunctions.js?");

/***/ }),

/***/ "./src/myapi.js":
/*!**********************!*\
  !*** ./src/myapi.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_ID\": () => (/* binding */ APP_ID),\n/* harmony export */   \"fetchMeals\": () => (/* binding */ fetchMeals),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"fetchMealById\": () => (/* binding */ fetchMealById)\n/* harmony export */ });\nconst MEAL_API = 'https://www.themealdb.com/api/json/v1/1';\n// const INVOLVEMENT_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6UlXEVzMxLrY3bfiZ0o/likes/';\nconst INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst APP_ID = 'EotQWBCIBSjk0iF4aIlc';\n\nconst fetchMeals = async () => {\n  const url = `${MEAL_API}/filter.php?c=Seafood`;\n  const response = await fetch(url);\n  return response.json();\n};\n\nconst addComment = async (data) => {\n  const url = `${INVOLVEMENT_API_URL}${APP_ID}/comments`;\n  const response = await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: data.item_id,\n      username: data.username,\n      comment: data.comment,\n    }),\n    headers: { 'Content-type': 'application/json' },\n  });\n\n  return response;\n};\n\nconst fetchComments = async (itemId) => {\n  const url = `${INVOLVEMENT_API_URL}${APP_ID}/comments?item_id=${itemId}`;\n  const response = await fetch(url);\n  return response.json();\n};\n\nconst fetchMealById = async (mealId) => {\n  const response = await fetch(\n    `${MEAL_API}/lookup.php?i=${mealId}`,\n  );\n  return response.json();\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/myapi.js?");

/***/ }),

/***/ "./src/CroissantOne-Regular.ttf":
/*!**************************************!*\
  !*** ./src/CroissantOne-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b6a7babc45d77f0cade9.ttf\";\n\n//# sourceURL=webpack://webpack-demo/./src/CroissantOne-Regular.ttf?");

/***/ }),

/***/ "./src/HFF Fire Dancer.ttf":
/*!*********************************!*\
  !*** ./src/HFF Fire Dancer.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"caa3c2ab05b244a23ee6.ttf\";\n\n//# sourceURL=webpack://webpack-demo/./src/HFF_Fire_Dancer.ttf?");

/***/ }),

/***/ "./src/Like.svg":
/*!**********************!*\
  !*** ./src/Like.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c55643c0020530601e0b.svg\";\n\n//# sourceURL=webpack://webpack-demo/./src/Like.svg?");

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"63767e7133f8433ea664.svg\";\n\n//# sourceURL=webpack://webpack-demo/./src/logo.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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