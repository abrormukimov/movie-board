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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fascinate&family=Permanent+Marker&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  overflow-x: hidden;\\r\\n  font-family: 'Croissant', sans-serif;\\r\\n  background-color: rgb(45, 32, 19);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100vw;\\r\\n  height: 12vh;\\r\\n  padding: 10px 250px;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  margin-bottom: 50px;\\r\\n  background-color: #23180D;\\r\\n  box-shadow: 1px 1px 2px green;\\r\\n}\\r\\n\\r\\n/* p {\\r\\n  text-align: center;\\r\\n} */\\r\\n\\r\\n.visible {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.invisible {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 150px;\\r\\n  color: yellow;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  margin-left: 100px;\\r\\n}\\r\\n\\r\\nnav ul li a,\\r\\np {\\r\\n  color: #fff;\\r\\n  text-decoration: none;\\r\\n  background: -webkit-linear-gradient(orange, yellow, green);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n}\\r\\n\\r\\nnav ul li a :hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.meals {\\r\\n  text-decoration: underline;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr;\\r\\n  margin-top: 100px;\\r\\n  margin-bottom: 60px;\\r\\n  width: 100vw;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  height: 200px;\\r\\n  width: 200px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  width: 200px;\\r\\n  justify-content: space-between;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.likes img {\\r\\n  width: 30px;\\r\\n}\\r\\n\\r\\n.like-counter {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 20%;\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.like-counter p {\\r\\n  font-size: 12px;\\r\\n  width: 60px;\\r\\n  margin-top: 8px;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  cursor: pointer;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  margin-bottom: 30px;\\r\\n  color: yellow;\\r\\n  margin-left: 20px;\\r\\n  padding: 5px 10px;\\r\\n  background: black;\\r\\n  border: 1px solid yellow;\\r\\n  box-shadow: 1px 1px 1px green;\\r\\n  cursor: pointer;\\r\\n  border-radius: 8px;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.popup-window {\\r\\n  position: relative;\\r\\n  width: 65%;\\r\\n  margin: 20px auto;\\r\\n  padding: 20px;\\r\\n  backdrop-filter: blur(4px);\\r\\n  border: 2px solid #000;\\r\\n  box-shadow: 1px 1px 1px yellow;\\r\\n}\\r\\n\\r\\n.meal-popup-img {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.close-menu {\\r\\n  font-size: 35px;\\r\\n  position: absolute;\\r\\n  top: 33px;\\r\\n  font-weight: 900;\\r\\n  right: -30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-window li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.popup-img-div img {\\r\\n  margin-top: 20px;\\r\\n  width: 100%;\\r\\n  height: 400px;\\r\\n}\\r\\n\\r\\n.popup-details-div {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup-details-div h1 {\\r\\n  font-size: 50px;\\r\\n}\\r\\n\\r\\n.details-list {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.comments-container h3 {\\r\\n  text-align: center;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n.comments-container form {\\r\\n  width: 50%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.input-group input,\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\n.button-div button {\\r\\n  margin-left: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Like.png":
/*!**********************!*\
  !*** ./src/Like.png ***!
  \**********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://webpack-demo/./src/Like.png?");

/***/ }),

/***/ "./src/generate.js":
/*!*************************!*\
  !*** ./src/generate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst elementGenerator = (typeName, className) => {\r\n  const element = document.createElement(typeName);\r\n  if (className) element.className = className;\r\n  return element;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementGenerator); \r\n\n\n//# sourceURL=webpack://webpack-demo/./src/generate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _myapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myapi.js */ \"./src/myapi.js\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Like_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Like.png */ \"./src/Like.png\");\n/* harmony import */ var _Like_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Like_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generate.js */ \"./src/generate.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./likes.js */ \"./src/likes.js\");\n\n\n//  import icon from './icon.png';\n\n// eslint-disable-next-line import/no-unresolved\n\n\n\n\nconst header = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('header');\nconst logo = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('img', 'logo');\nlogo.src = (_logo_png__WEBPACK_IMPORTED_MODULE_2___default());\nlogo.alt = 'restaurant-logo';\nconst navigation = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('nav');\nconst uList = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('ul');\nconst listOne = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('li', 'meals');\nconst linkOne = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('a');\nlinkOne.href = '#';\n\nfunction mealCounter() {\n  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')\n    .then((response) => response.json())\n    .then((data) => {\n      linkOne.textContent = `Meals (${data.meals.length})`;\n    });\n}\nmealCounter();\n\nconst listTwo = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('li');\nconst linkTwo = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('a');\nlinkTwo.href = '#';\nlinkTwo.textContent = 'non-Vegetarian';\n\nconst listThree = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('li');\nconst linkThree = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('a');\nlinkThree.href = '#';\nlinkThree.textContent = 'fried';\n\nconst footer = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('footer');\nfooter.textContent = 'Created By Tufoin & Abror under CC licence';\n\nconst allmain = document.getElementById('allmain');\n\nconst main = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('main');\n\nconst createPopup = (meal) => {\n  const popupSection = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('section', 'popup-window invisible');\n  const popupMarkup = ` \n    <small class='close-menu'>X</small>   \n    <div class='blur-background'> \n\n    <div class=\"popup-img-div\"><img class=\"meal-popup-img\" src=\"${meal.image}\" alt=\"meal\" /></div>\n    <div class=\"popup-details-div\">\n    <h1> ${meal.title} </h1>\n    <div class=\"details-list\">\n        <ul>\n        <li>Category: Rice</li>\n        <li>Category: Rice</li>\n        </ul>\n        <ul>\n        <li>Category: Rice</li>\n        <li>Category: Rice</li>\n        </ul>\n    </div>\n  </div>\n  <div class=\"comments-container\">\n<div class=\"comments-div\">\n  <h3>Comments (3)</h3>\n</div>\n<h3>Add a comment</h3>\n<form>\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"nameInput\" placeholder=\"Your name\" />\n  </div>\n  <div class=\"input-group\">\n    <textarea\n      name=\"\"\n      id=\"commentInput\"\n      cols=\"30\"\n      rows=\"10\"\n      placeholder=\"Your insights\"\n    ></textarea>\n  </div>\n  <div class=''button-div>\n  <button type='submit' class='submit-comment-btn'> Comment </button>\n  </div>\n</form>\n</div>\n`;\n  popupSection.innerHTML = popupMarkup;\n  popupSection.style.display = 'block';\n  main.style.display = 'none';\n  document.body.appendChild(popupSection);\n  const closePopup = document.querySelector('.close-menu');\n  closePopup.addEventListener('click', () => {\n    popupSection.remove();\n    main.style.display = 'grid';\n  });\n};\n\nconst displayPopup = (mainTag) => {\n  const divs = mainTag.children;\n  const mealDetails = {\n    title: '',\n    category: '',\n    price: '',\n    image: '',\n  };\n\n  for (let i = 0; i < divs.length; i += 1) {\n    const btn = divs[i].children[2];\n    btn.addEventListener('click', (e) => {\n      const mealTitle = e.target.parentElement.children[1].children[0].textContent;\n      const imageSrc = e.target.parentElement.children[0].src;\n      mealDetails.title = mealTitle;\n      mealDetails.image = imageSrc;\n      createPopup(mealDetails);\n    });\n  }\n};\n\nconst getMeals = async () => {\n  const data = await (0,_myapi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  data.meals.forEach((meal, index) => {\n    meal = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('section');\n    const picture = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('img', 'image');\n    picture.src = data.meals[index].strMealThumb;\n    picture.alt = 'space-image';\n\n    meal.id = data.meals[index].idMeal;\n\n    const likes = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', 'likes');\n    const paragraph = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('p');\n    paragraph.textContent = data.meals[index].strMeal;\n\n    const likeCounter = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', 'like-counter');\n    const heart = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('img', 'heart');\n    heart.src = (_Like_png__WEBPACK_IMPORTED_MODULE_3___default());\n    heart.alt = 'heart-image';\n    const like = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('p');\n    like.textContent = '0 likes';\n\n    heart.addEventListener('click', async (e) => {\n      e.preventDefault();\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_5__.postLikes)(\n        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6UlXEVzMxLrY3bfiZ0o/likes/',\n        {\n          item_id: meal.id,\n        },\n      );\n\n      const prevLikes = like.textContent.split(' ')[0];\n      like.innerHTML = `${parseInt(prevLikes, 10) + 1} likes`;\n    });\n\n    const likes1 = (0,_likes_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6UlXEVzMxLrY3bfiZ0o/likes/',\n    );\n\n    likes1.then((data) => {\n      like.textContent = `${data[index].likes} likes`;\n    });\n\n    likeCounter.appendChild(heart);\n    likeCounter.appendChild(like);\n\n    likes.appendChild(paragraph);\n    likes.appendChild(likeCounter);\n\n    const comments = (0,_generate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('button');\n    comments.textContent = 'Comments';\n\n    meal.appendChild(picture);\n    meal.appendChild(likes);\n    meal.appendChild(comments);\n\n    main.appendChild(meal);\n  });\n  displayPopup(main);\n};\ngetMeals();\n\nlistOne.appendChild(linkOne);\nlistTwo.appendChild(linkTwo);\nlistThree.appendChild(linkThree);\n\nuList.append(listOne, listTwo, listThree);\nnavigation.appendChild(uList);\nheader.append(logo, navigation);\nallmain.append(header, main, footer);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nasync function postLikes(url = '', data = {}) {\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    mode: 'cors',\r\n    cache: 'no-cache',\r\n    credentials: 'same-origin',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    redirect: 'follow',\r\n    referrerPolicy: 'no-referrer',\r\n    body: JSON.stringify(data),\r\n  });\r\n  return response;\r\n}\r\n\r\nasync function getLikes(url = '') {\r\n  const response = await fetch(url, {\r\n    method: 'GET',\r\n    mode: 'cors',\r\n    cache: 'no-cache',\r\n    credentials: 'same-origin',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return response.json();\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/likes.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://webpack-demo/./src/logo.png?");

/***/ }),

/***/ "./src/myapi.js":
/*!**********************!*\
  !*** ./src/myapi.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchMeals = async () => {\n  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken');\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);\n\n//involvement api = https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6UlXEVzMxLrY3bfiZ0o/likes/\n\n//# sourceURL=webpack://webpack-demo/./src/myapi.js?");

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