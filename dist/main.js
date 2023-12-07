/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
}

#board-space,
.board,
.board-row,
.board-tile {
    display: flex;
    position: relative;
}

body {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
        60deg,
        rgb(0, 0, 105),
        rgb(0, 0, 114),
        darkblue
    );
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
}

#board-space {
    align-items: center;
    justify-content: space-around;
}

#footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.footer-container {
    display: flex;
    justify-content: center;
}

.pieces-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: auto;
}

.pieces-top-row,
.pieces-bot-row {
    display: flex;
    justify-content: space-evenly;
}

.pieces-block {
    display: flex;
    user-select: none;
}

.board-tile-footer {
    width: 3.5vw;
    height: 3.5vw;
    border: 1px white solid;
    background-color: gray;
}

.board-tile-footer-head {
    font-size: 3.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.draggable {
    cursor: grab;
}

.direction-button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.direction-button {
    color: white;
    font-size: 4vw;
    background-color: rgb(62, 62, 62);
    user-select: none;
    cursor: pointer;
    border: 1px green solid;
    height: 6vw;
    width: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.direction-button:hover {
    background-color: rgb(45, 45, 45);
}

.direction-button:active {
    background-color: rgb(158, 158, 158);
}

.board {
    flex-direction: column;
}

.board-tile,
.board-tile-shot,
.board-tile-ship,
.board-tile-ship-shot,
.board-tile-finished {
    width: 4vw;
    height: 4vw;
    border: 1px white solid;
}

.board-tile {
    background-image: linear-gradient(
        20deg,
        black,
        rgb(65, 65, 65),
        black,
        rgb(65, 65, 65)
    );
}

.board:last-child .board-tile:hover {
    background-image: radial-gradient(black, darkred);
    cursor: crosshair;
}

.board:last-child .board-tile:active {
    background-image: radial-gradient(rgb(183, 0, 0), rgb(0, 0, 0));
    cursor: crosshair;
}

.board-tile-finished {
    background-image: linear-gradient(blue, darkblue);
}

.board-tile-shot {
    background-image: radial-gradient(red, black);
}

.board-tile-ship {
    background-color: gray;
}

.board-tile-ship-shot {
    background-image: repeating-radial-gradient(gray, red);
}

.board:last-child .board-tile-shot:hover,
.board:last-child .board-tile-ship-shot {
    cursor: crosshair;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;;;IAII,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb;;;;;KAKC;IACD,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,UAAU;AACd;;AAEA;;IAEI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,cAAc;IACd,iCAAiC;IACjC,iBAAiB;IACjB,eAAe;IACf,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;;IAKI,UAAU;IACV,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI;;;;;;KAMC;AACL;;AAEA;IACI,iDAAiD;IACjD,iBAAiB;AACrB;;AAEA;IACI,+DAA+D;IAC/D,iBAAiB;AACrB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;;IAEI,iBAAiB;AACrB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\n#board-space,\n.board,\n.board-row,\n.board-tile {\n    display: flex;\n    position: relative;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-image: linear-gradient(\n        60deg,\n        rgb(0, 0, 105),\n        rgb(0, 0, 114),\n        darkblue\n    );\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n}\n\n#board-space {\n    align-items: center;\n    justify-content: space-around;\n}\n\n#footer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.footer-container {\n    display: flex;\n    justify-content: center;\n}\n\n.pieces-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex: auto;\n}\n\n.pieces-top-row,\n.pieces-bot-row {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.pieces-block {\n    display: flex;\n    user-select: none;\n}\n\n.board-tile-footer {\n    width: 3.5vw;\n    height: 3.5vw;\n    border: 1px white solid;\n    background-color: gray;\n}\n\n.board-tile-footer-head {\n    font-size: 3.5vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.draggable {\n    cursor: grab;\n}\n\n.direction-button-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.direction-button {\n    color: white;\n    font-size: 4vw;\n    background-color: rgb(62, 62, 62);\n    user-select: none;\n    cursor: pointer;\n    border: 1px green solid;\n    height: 6vw;\n    width: 6vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.direction-button:hover {\n    background-color: rgb(45, 45, 45);\n}\n\n.direction-button:active {\n    background-color: rgb(158, 158, 158);\n}\n\n.board {\n    flex-direction: column;\n}\n\n.board-tile,\n.board-tile-shot,\n.board-tile-ship,\n.board-tile-ship-shot,\n.board-tile-finished {\n    width: 4vw;\n    height: 4vw;\n    border: 1px white solid;\n}\n\n.board-tile {\n    background-image: linear-gradient(\n        20deg,\n        black,\n        rgb(65, 65, 65),\n        black,\n        rgb(65, 65, 65)\n    );\n}\n\n.board:last-child .board-tile:hover {\n    background-image: radial-gradient(black, darkred);\n    cursor: crosshair;\n}\n\n.board:last-child .board-tile:active {\n    background-image: radial-gradient(rgb(183, 0, 0), rgb(0, 0, 0));\n    cursor: crosshair;\n}\n\n.board-tile-finished {\n    background-image: linear-gradient(blue, darkblue);\n}\n\n.board-tile-shot {\n    background-image: radial-gradient(red, black);\n}\n\n.board-tile-ship {\n    background-color: gray;\n}\n\n.board-tile-ship-shot {\n    background-image: repeating-radial-gradient(gray, red);\n}\n\n.board:last-child .board-tile-shot:hover,\n.board:last-child .board-tile-ship-shot {\n    cursor: crosshair;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
class Gameboard {
    // Battleship has a 10 x 10 board.
    #BOARDSIZE = 10;
    constructor() {
        // construct the board.
        this.board = [];
        for (let i = 0; i < this.#BOARDSIZE; i++) {
            this.board.push([]);
            for (let j = 0; j < this.#BOARDSIZE; j++) {
                this.board[i].push(null);
            }
        }

        this.ships = [
            new Ship(2),
            new Ship(3),
            new Ship(3),
            new Ship(4),
            new Ship(5),
        ];

        // For test usage - will populate the ships on the board.
        // this.#presetPlaceShips(0);
        // randomly populate the board with the ships
    }

    randomlyPlaceAllShip() {
        for (let i = 0; i < this.ships.length; i++)
            this.#generateShipPlacement(i);
    }

    #generateShipPlacement(id) {
        let tillValid = true;
        while (tillValid) {
            const directionRoll = Math.floor(Math.random() * 2);
            if (directionRoll === 0) {
                const x = Math.floor(
                    Math.random() * (11 - this.ships[id].ship.size)
                );
                const y = Math.floor(Math.random() * 10);
                if (this.validatePlacement(directionRoll, id, y, x)) {
                    this.placeShip(directionRoll, id, y, x);
                    tillValid = false;
                }
            } else if (directionRoll === 1) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(
                    Math.random() * (11 - this.ships[id].ship.size)
                );
                if (this.validatePlacement(directionRoll, id, y, x)) {
                    this.placeShip(directionRoll, id, y, x);
                    tillValid = false;
                }
            }
        }
    }

    placeShip(direction, id, y, x) {
        direction === 0
            ? this.#placeShipHorizontal(id, this.ships[id].ship.size, y, x)
            : this.#placeShipVertical(id, this.ships[id].ship.size, y, x);
    }

    #placeShipHorizontal(id, size, y, x) {
        this.#validateInitialPosition(0, size, y, x);
        for (let i = x; i < x + size; i++) {
            this.board[y][i] = id;
            this.ships[id].appendCoord({ y: y, x: i });
        }
    }

    #placeShipVertical(id, size, y, x) {
        this.#validateInitialPosition(1, size, y, x);
        for (let i = y; i < y + size; i++) {
            this.board[i][x] = id;
            this.ships[id].appendCoord({ y: i, x: x });
        }
    }

    presetPlaceShips(direction) {
        //for x directional placement
        if (direction === 0)
            for (let i = 0; i < 5; i++) this.placeShip(direction, i, i, 0);
        // for y directional placement
        else for (let i = 0; i < 5; i++) this.placeShip(direction, i, 0, i);
    }

    #validateInitialPosition(direction, size, y, x) {
        // Determine if the initial positions for x and y are valid.
        if (y > 9 || y < 0) throw "Y is out of bounds";
        else if (x > 9 || x < 0) throw "X is out of bounds";

        // Determine if the ship will fit in the assigned position
        // case 0 - validates the x direction
        // case 1 - validates the y direction
        switch (direction) {
            case 0:
                if (x + size - 1 > 9)
                    throw (
                        "Initializing the ship at this (" +
                        x +
                        ", " +
                        y +
                        ") position would go out of bounds!"
                    );
                break;
            case 1:
                if (y + size - 1 > 9)
                    throw (
                        "Initializing the ship at this (" +
                        x +
                        ", " +
                        y +
                        ") position would go out of bounds!"
                    );
                break;
            default:
                throw (
                    "The direction (" +
                    direction +
                    ") has not been argued correctly"
                );
        }
    }

    validatePlacement(direction, id, y, x) {
        if (direction === 0) {
            for (let i = x; i < x + this.ships[id].ship.size; i++) {
                if (!this.#validatePlacementTile(y, i)) return false;
            }
        } else {
            for (let i = y; i < y + this.ships[id].ship.size; i++) {
                if (!this.#validatePlacementTile(i, x)) return false;
            }
        }
        return true;
    }

    #validatePlacementTile(y, x) {
        // determine if placement conflicts
        if (y > 9 || y < 0) return false;
        else if (x > 9 || x < 0) return false;
        else if (this.board[y][x] !== null) return false;
        else return true;
    }

    // react to attack at coordinate 'y' and 'x'.
    recieveAttack(coord) {
        coord.y = Number(coord.y);
        coord.x = Number(coord.x);
        const positionID = this.board[coord.y][coord.x];
        if (positionID !== null && positionID !== -1) {
            this.ships[positionID].hit();
            this.board[coord.y][coord.x] = -1;
            if (!this.ships[positionID].isSunk()) return coord;
            else return this.ships[positionID].getCoords();
        } else if (positionID === null) {
            this.board[coord.y][coord.x] = -1;
        } else if (coord.smart === undefined) {
            return Math.floor(Math.random() * 2) === 0
                ? coord.y === 9
                    ? this.recieveAttack({ y: 0, x: coord.x })
                    : this.recieveAttack({ y: coord.y + 1, x: coord.x })
                : coord.x === 9
                ? this.recieveAttack({ y: coord.y, x: 0 })
                : this.recieveAttack({ y: coord.y, x: coord.x + 1 });
        } else return null;
    }

    hasLost() {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isSunk() === false) return false;
        }
        return true;
    }

    printBoard() {
        let toprint = "";
        for (let i = 0; i < this.#BOARDSIZE; i++) {
            for (let j = 0; j < this.#BOARDSIZE; j++) {
                toprint +=
                    this.board[i][j] === null ? "n\t" : this.board[i][j] + "\t";
            }
            toprint += "\n";
        }
        return toprint;
    }
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-fallthrough */
const Gameboard = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");

class Player {
    constructor(playerName = "Player") {
        this.name = playerName;
        this.board = new Gameboard();
    }
}

module.exports = Player;


/***/ }),

/***/ "./src/PlayerAI.js":
/*!*************************!*\
  !*** ./src/PlayerAI.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-fallthrough */
const Player = __webpack_require__(/*! ./Player */ "./src/Player.js");
class PlayerAI extends Player {
    #DetectedAttacks = [];
    constructor() {
        super("CPU-AI");
        this.board.randomlyPlaceAllShip();
    }
    generateAttack() {
        if (this.#DetectedAttacks.length === 0)
            return {
                y: Math.floor(Math.random() * 10),
                x: Math.floor(Math.random() * 10),
            };
        else {
            const smartAttack = this.#smartGenerateAttack(
                Math.floor(Math.random() * 4)
            );
            return smartAttack === undefined
                ? this.#smartGenerateAttack(0)
                : smartAttack;
        }
    }

    #smartGenerateAttack(position) {
        const lastHit =
            this.#DetectedAttacks[
                Math.floor(Math.random() * this.#DetectedAttacks.length)
            ];
        switch (position) {
            case 0:
                if (lastHit.y !== 9)
                    return {
                        y: lastHit.y + 1,
                        x: lastHit.x,
                        smart: true,
                    };
            case 1:
                if (lastHit.y !== 0)
                    return {
                        y: lastHit.y - 1,
                        x: lastHit.x,
                        smart: true,
                    };
            case 2:
                if (lastHit.x !== 9)
                    return {
                        y: lastHit.y,
                        x: lastHit.x + 1,
                        smart: true,
                    };
            case 3:
                if (lastHit.x !== 0)
                    return {
                        y: lastHit.y,
                        x: lastHit.x - 1,
                        smart: true,
                    };
            default:
                return undefined;
        }
    }

    markAttack(coord) {
        this.#DetectedAttacks.push(coord);
    }

    flushMarks(sunkedShip) {
        this.#DetectedAttacks = this.#DetectedAttacks.filter((coord) => {
            for (let i = 0; i < sunkedShip.length; i++) {
                if (
                    coord.x === sunkedShip[i].x &&
                    coord.y === sunkedShip[i].y
                ) {
                    sunkedShip.slice(i, 1);
                    return false;
                }
            }
            return true;
        });
    }
}

module.exports = PlayerAI;


/***/ }),

/***/ "./src/Render.js":
/*!***********************!*\
  !*** ./src/Render.js ***!
  \***********************/
/***/ ((module) => {

function generateBoard() {
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < 10; i++) {
        const column = document.createElement("div");
        column.classList.add("board-row");
        board.appendChild(column);
        for (let j = 0; j < 10; j++) {
            const row = document.createElement("div");
            row.classList.add("board-tile");
            row.dataset.column = i;
            row.dataset.row = j;
            column.appendChild(row);
        }
    }
    return board;
}

function addShip(board, ship) {
    ship.forEach(function fillTile(coord) {
        const tile = board.querySelector(
            `[data-column="${coord.y}"][data-row="${coord.x}"]`
        );
        tile.classList.remove("board-tile");
        tile.classList.add("board-tile-ship");
    });
}

function playerBoardShot(board, coord) {
    const tile = board.querySelector(
        `[data-column="${coord.y}"][data-row="${coord.x}"]`
    );

    if (tile.classList.contains("board-tile-ship")) {
        tile.classList.remove("board-tile-ship");
        tile.classList.add("board-tile-ship-shot");
    } else {
        tile.classList.remove("board-tile");
        tile.classList.add("board-tile-shot");
    }
}

function shipHit(board, coord) {
    const tile = board.querySelector(
        `[data-column="${coord.y}"][data-row="${coord.x}"]`
    );

    tile.classList.remove("board-tile-ship");
    tile.classList.add("board-tile-ship-shot");
}

function flushShip(board, ar) {
    ar.forEach((coord) => {
        playerBoardShot(board, coord);
    });
}

async function coordinateAttack(board) {
    let coord;
    const tiles = board.querySelectorAll(".board-tile");

    await new Promise((myResolve) => {
        tiles.forEach((node) => {
            node.addEventListener("click", () => {
                node.classList.remove("board-tile");
                node.classList.add("board-tile-shot");
                if (node.classList.contains("board-tile-ship")) {
                    node.classList.remove("board-tile-ship");
                    node.classList.remove("board-tile-shot");
                    node.classList.add("board-tile-ship-shot");
                }
                tiles.forEach((node) => {
                    node.replaceWith(node.cloneNode(false));
                });
                myResolve({ y: node.dataset.column, x: node.dataset.row });
            });
        });
    }).then((value) => {
        coord = value;
    });
    return coord;
}

function generateBottomPieces(player = null) {
    const container = document.createElement("div");
    container.classList.add("footer-container");
    const piecesContainer = document.createElement("div");
    piecesContainer.classList.add("pieces-container");
    const topRow = document.createElement("div");
    topRow.classList.add("pieces-top-row");
    const botRow = document.createElement("div");
    botRow.classList.add("pieces-bot-row");

    const blockGenerator = (size) => {
        const block = document.createElement("div");
        block.classList.add("pieces-block");
        if (player !== null) {
            block.classList.add("draggable");
            block.setAttribute("draggable", "true");
        }

        for (let i = 0; i < size; i++) {
            const tile = document.createElement("div");
            tile.classList.add("board-tile-footer");
            block.appendChild(tile);
        }
        block.firstChild.classList.add("board-tile-footer-head");
        block.firstChild.innerText = "#";
        return block;
    };

    const blocks = [
        blockGenerator(2),
        blockGenerator(3),
        blockGenerator(3),
        blockGenerator(4),
        blockGenerator(5),
    ];
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].dataset.id = String(i);
    }
    blocks[0].dataset.size = "1";
    blocks[1].dataset.size = "2";
    blocks[2].dataset.size = "2";
    blocks[3].dataset.size = "3";
    blocks[4].dataset.size = "4";

    topRow.append(blocks[0], blocks[1], blocks[2]);
    botRow.append(blocks[3], blocks[4]);
    piecesContainer.append(topRow, botRow);
    container.append(piecesContainer);
    if (player === null) container.appendChild(generateDirectionButton());
    return container;
}

function generateDirectionButton() {
    const direction = document.createElement("div");
    const directionButton = document.createElement("div");
    directionButton.innerText = "X";
    directionButton.dataset.direction = "0";
    directionButton.classList.add("direction-button");
    direction.classList.add("direction-button-container");
    directionButton.addEventListener("click", function () {
        if (this.innerText === "X") {
            this.innerText = "Y";
            this.dataset.direction = "1";
        } else if (this.innerText === "Y") {
            this.innerText = "X";
            this.dataset.direction = "0";
        }
    });
    direction.append(directionButton);
    return direction;
}

module.exports = {
    generateBoard,
    addShip,
    shipHit,
    flushShip,
    coordinateAttack,
    playerBoardShot,
    generateBottomPieces,
    generateDirectionButton,
};


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((module) => {

class Ship {
    #coords = [];
    constructor(size) {
        this.ship = { size, hits: 0, sunk: false };
    }

    hit() {
        if (!this.isSunk()) {
            this.ship.hits += 1;
            this.isSunk();
        }
    }

    isSunk() {
        if (this.ship.hits === this.ship.size) {
            this.ship.sunk = true;
            return true;
        }
        return false;
    }

    appendCoord(coord) {
        if (this.#coords.length < this.ship.size) this.#coords.push(coord);
        else throw "The coords of the ship are beyond the size limit!";
    }

    getCoords() {
        return this.#coords;
    }
}

module.exports = Ship;


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/* eslint-disable */
__webpack_require__(/*! ./style.css */ "./src/style.css");
const Player = __webpack_require__(/*! ./Player */ "./src/Player.js");
const PlayerAI = __webpack_require__(/*! ./PlayerAI */ "./src/PlayerAI.js");
const Render = __webpack_require__(/*! ./Render */ "./src/Render.js");

async function game() {
    const player = new Player();
    const playerAI = new PlayerAI();
    player.boardDOM = Render.generateBoard();
    playerAI.boardDOM = Render.generateBoard();
    const boardSpace = document.getElementById("board-space");
    boardSpace.appendChild(player.boardDOM);
    boardSpace.appendChild(playerAI.boardDOM);

    // Generate the footer that the user will be able use
    const footer = document.getElementById("footer");
    playerFooter = Render.generateBottomPieces(player);
    playerFooter.appendChild(Render.generateDirectionButton());
    footer.appendChild(playerFooter);

    // Add the AI Footer.
    footer.appendChild(Render.generateBottomPieces());

    // // Generate preset board for the player.
    // player.board.presetPlaceShips(0);
    // player.board.ships.forEach((ship) => {
    //     Render.addShip(player.boardDOM, ship.getCoords());
    // });

    while (!player.board.hasLost() && !playerAI.board.hasLost()) {
        const playerShoot = await Render.coordinateAttack(playerAI.boardDOM);
        const boardReact = playerAI.board.recieveAttack(playerShoot);
        if (boardReact instanceof Array) {
            boardReact.forEach((coord) => {
                Render.shipHit(playerAI.boardDOM, coord);
            });
        } else if (boardReact instanceof Object)
            Render.shipHit(playerAI.boardDOM, boardReact);

        let enemyLandedHit = null;
        let aiCoordinatedAttack = null;
        while (enemyLandedHit === null) {
            aiCoordinatedAttack = playerAI.generateAttack();
            enemyLandedHit = player.board.recieveAttack(aiCoordinatedAttack);
        }
        if (enemyLandedHit instanceof Array) {
            playerAI.flushMarks(enemyLandedHit);
            Render.flushShip(player.boardDOM, enemyLandedHit);
        } else if (enemyLandedHit instanceof Object) {
            playerAI.markAttack(enemyLandedHit);
            Render.playerBoardShot(player.boardDOM, enemyLandedHit);
        } else {
            Render.playerBoardShot(player.boardDOM, aiCoordinatedAttack);
        }
    }
    if (playerAI.board.hasLost()) {
        console.log(`${player.name} has won!`);
    } else if (player.board.hasLost()) {
        console.log(`${playerAI.name} has won!`);
    } else throw "Nobody won??";
    document.querySelectorAll(".board-tile").forEach((node) => {
        node.classList.remove("board-tile");
        node.classList.add("board-tile-finished");
    });
}

game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyQUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jYm9hcmQtc3BhY2UsXG4uYm9hcmQsXG4uYm9hcmQtcm93LFxuLmJvYXJkLXRpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDYwZGVnLFxuICAgICAgICByZ2IoMCwgMCwgMTA1KSxcbiAgICAgICAgcmdiKDAsIDAsIDExNCksXG4gICAgICAgIGRhcmtibHVlXG4gICAgKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XG59XG5cbiNib2FyZC1zcGFjZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI2Zvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGllY2VzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGZsZXg6IGF1dG87XG59XG5cbi5waWVjZXMtdG9wLXJvdyxcbi5waWVjZXMtYm90LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnBpZWNlcy1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJvYXJkLXRpbGUtZm9vdGVyIHtcbiAgICB3aWR0aDogMy41dnc7XG4gICAgaGVpZ2h0OiAzLjV2dztcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uYm9hcmQtdGlsZS1mb290ZXItaGVhZCB7XG4gICAgZm9udC1zaXplOiAzLjV2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kcmFnZ2FibGUge1xuICAgIGN1cnNvcjogZ3JhYjtcbn1cblxuLmRpcmVjdGlvbi1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGlyZWN0aW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgNjIsIDYyKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7XG4gICAgaGVpZ2h0OiA2dnc7XG4gICAgd2lkdGg6IDZ2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXJlY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDQ1LCA0NSk7XG59XG5cbi5kaXJlY3Rpb24tYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xufVxuXG4uYm9hcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib2FyZC10aWxlLFxuLmJvYXJkLXRpbGUtc2hvdCxcbi5ib2FyZC10aWxlLXNoaXAsXG4uYm9hcmQtdGlsZS1zaGlwLXNob3QsXG4uYm9hcmQtdGlsZS1maW5pc2hlZCB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBoZWlnaHQ6IDR2dztcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbn1cblxuLmJvYXJkLXRpbGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMjBkZWcsXG4gICAgICAgIGJsYWNrLFxuICAgICAgICByZ2IoNjUsIDY1LCA2NSksXG4gICAgICAgIGJsYWNrLFxuICAgICAgICByZ2IoNjUsIDY1LCA2NSlcbiAgICApO1xufVxuXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGJsYWNrLCBkYXJrcmVkKTtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGU6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDE4MywgMCwgMCksIHJnYigwLCAwLCAwKSk7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5ib2FyZC10aWxlLWZpbmlzaGVkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgZGFya2JsdWUpO1xufVxuXG4uYm9hcmQtdGlsZS1zaG90IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmVkLCBibGFjayk7XG59XG5cbi5ib2FyZC10aWxlLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5ib2FyZC10aWxlLXNoaXAtc2hvdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudChncmF5LCByZWQpO1xufVxuXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZS1zaG90OmhvdmVyLFxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGUtc2hpcC1zaG90IHtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYjs7Ozs7S0FLQztJQUNELGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7O0lBS0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTs7Ozs7O0tBTUM7QUFDTDs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrREFBK0Q7SUFDL0QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYm9hcmQtc3BhY2UsXFxuLmJvYXJkLFxcbi5ib2FyZC1yb3csXFxuLmJvYXJkLXRpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDYwZGVnLFxcbiAgICAgICAgcmdiKDAsIDAsIDEwNSksXFxuICAgICAgICByZ2IoMCwgMCwgMTE0KSxcXG4gICAgICAgIGRhcmtibHVlXFxuICAgICk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XFxufVxcblxcbiNib2FyZC1zcGFjZSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGllY2VzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4ucGllY2VzLXRvcC1yb3csXFxuLnBpZWNlcy1ib3Qtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5waWVjZXMtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkLXRpbGUtZm9vdGVyIHtcXG4gICAgd2lkdGg6IDMuNXZ3O1xcbiAgICBoZWlnaHQ6IDMuNXZ3O1xcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmJvYXJkLXRpbGUtZm9vdGVyLWhlYWQge1xcbiAgICBmb250LXNpemU6IDMuNXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmRpcmVjdGlvbi1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kaXJlY3Rpb24tYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCA2MiwgNjIpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBncmVlbiBzb2xpZDtcXG4gICAgaGVpZ2h0OiA2dnc7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGlyZWN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgNDUsIDQ1KTtcXG59XFxuXFxuLmRpcmVjdGlvbi1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQtdGlsZSxcXG4uYm9hcmQtdGlsZS1zaG90LFxcbi5ib2FyZC10aWxlLXNoaXAsXFxuLmJvYXJkLXRpbGUtc2hpcC1zaG90LFxcbi5ib2FyZC10aWxlLWZpbmlzaGVkIHtcXG4gICAgd2lkdGg6IDR2dztcXG4gICAgaGVpZ2h0OiA0dnc7XFxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xcbn1cXG5cXG4uYm9hcmQtdGlsZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDIwZGVnLFxcbiAgICAgICAgYmxhY2ssXFxuICAgICAgICByZ2IoNjUsIDY1LCA2NSksXFxuICAgICAgICBibGFjayxcXG4gICAgICAgIHJnYig2NSwgNjUsIDY1KVxcbiAgICApO1xcbn1cXG5cXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChibGFjaywgZGFya3JlZCk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDE4MywgMCwgMCksIHJnYigwLCAwLCAwKSk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1maW5pc2hlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibHVlLCBkYXJrYmx1ZSk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmVkLCBibGFjayk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1zaGlwLXNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KGdyYXksIHJlZCk7XFxufVxcblxcbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlLXNob3Q6aG92ZXIsXFxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGUtc2hpcC1zaG90IHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZShcIi4vU2hpcFwiKTtcbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgLy8gQmF0dGxlc2hpcCBoYXMgYSAxMCB4IDEwIGJvYXJkLlxuICAgICNCT0FSRFNJWkUgPSAxMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY29uc3RydWN0IHRoZSBib2FyZC5cbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0JPQVJEU0laRTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNCT0FSRFNJWkU7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcCgyKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMyksXG4gICAgICAgICAgICBuZXcgU2hpcCg0KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDUpLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEZvciB0ZXN0IHVzYWdlIC0gd2lsbCBwb3B1bGF0ZSB0aGUgc2hpcHMgb24gdGhlIGJvYXJkLlxuICAgICAgICAvLyB0aGlzLiNwcmVzZXRQbGFjZVNoaXBzKDApO1xuICAgICAgICAvLyByYW5kb21seSBwb3B1bGF0ZSB0aGUgYm9hcmQgd2l0aCB0aGUgc2hpcHNcbiAgICB9XG5cbiAgICByYW5kb21seVBsYWNlQWxsU2hpcCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy4jZ2VuZXJhdGVTaGlwUGxhY2VtZW50KGkpO1xuICAgIH1cblxuICAgICNnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoaWQpIHtcbiAgICAgICAgbGV0IHRpbGxWYWxpZCA9IHRydWU7XG4gICAgICAgIHdoaWxlICh0aWxsVmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvblJvbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25Sb2xsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAoMTEgLSB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGRpcmVjdGlvblJvbGwsIGlkLCB5LCB4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb25Sb2xsLCBpZCwgeSwgeCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uUm9sbCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAoMTEgLSB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVBsYWNlbWVudChkaXJlY3Rpb25Sb2xsLCBpZCwgeSwgeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAoZGlyZWN0aW9uUm9sbCwgaWQsIHksIHgpO1xuICAgICAgICAgICAgICAgICAgICB0aWxsVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoZGlyZWN0aW9uLCBpZCwgeSwgeCkge1xuICAgICAgICBkaXJlY3Rpb24gPT09IDBcbiAgICAgICAgICAgID8gdGhpcy4jcGxhY2VTaGlwSG9yaXpvbnRhbChpZCwgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplLCB5LCB4KVxuICAgICAgICAgICAgOiB0aGlzLiNwbGFjZVNoaXBWZXJ0aWNhbChpZCwgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplLCB5LCB4KTtcbiAgICB9XG5cbiAgICAjcGxhY2VTaGlwSG9yaXpvbnRhbChpZCwgc2l6ZSwgeSwgeCkge1xuICAgICAgICB0aGlzLiN2YWxpZGF0ZUluaXRpYWxQb3NpdGlvbigwLCBzaXplLCB5LCB4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2ldID0gaWQ7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2lkXS5hcHBlbmRDb29yZCh7IHk6IHksIHg6IGkgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjcGxhY2VTaGlwVmVydGljYWwoaWQsIHNpemUsIHksIHgpIHtcbiAgICAgICAgdGhpcy4jdmFsaWRhdGVJbml0aWFsUG9zaXRpb24oMSwgc2l6ZSwgeSwgeCk7XG4gICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVt4XSA9IGlkO1xuICAgICAgICAgICAgdGhpcy5zaGlwc1tpZF0uYXBwZW5kQ29vcmQoeyB5OiBpLCB4OiB4IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlc2V0UGxhY2VTaGlwcyhkaXJlY3Rpb24pIHtcbiAgICAgICAgLy9mb3IgeCBkaXJlY3Rpb25hbCBwbGFjZW1lbnRcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMClcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb24sIGksIGksIDApO1xuICAgICAgICAvLyBmb3IgeSBkaXJlY3Rpb25hbCBwbGFjZW1lbnRcbiAgICAgICAgZWxzZSBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykgdGhpcy5wbGFjZVNoaXAoZGlyZWN0aW9uLCBpLCAwLCBpKTtcbiAgICB9XG5cbiAgICAjdmFsaWRhdGVJbml0aWFsUG9zaXRpb24oZGlyZWN0aW9uLCBzaXplLCB5LCB4KSB7XG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgaW5pdGlhbCBwb3NpdGlvbnMgZm9yIHggYW5kIHkgYXJlIHZhbGlkLlxuICAgICAgICBpZiAoeSA+IDkgfHwgeSA8IDApIHRocm93IFwiWSBpcyBvdXQgb2YgYm91bmRzXCI7XG4gICAgICAgIGVsc2UgaWYgKHggPiA5IHx8IHggPCAwKSB0aHJvdyBcIlggaXMgb3V0IG9mIGJvdW5kc1wiO1xuXG4gICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCB3aWxsIGZpdCBpbiB0aGUgYXNzaWduZWQgcG9zaXRpb25cbiAgICAgICAgLy8gY2FzZSAwIC0gdmFsaWRhdGVzIHRoZSB4IGRpcmVjdGlvblxuICAgICAgICAvLyBjYXNlIDEgLSB2YWxpZGF0ZXMgdGhlIHkgZGlyZWN0aW9uXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKHggKyBzaXplIC0gMSA+IDkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5pdGlhbGl6aW5nIHRoZSBzaGlwIGF0IHRoaXMgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIpIHBvc2l0aW9uIHdvdWxkIGdvIG91dCBvZiBib3VuZHMhXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAoeSArIHNpemUgLSAxID4gOSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXppbmcgdGhlIHNoaXAgYXQgdGhpcyAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIikgcG9zaXRpb24gd291bGQgZ28gb3V0IG9mIGJvdW5kcyFcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgICAgICAgICAgIFwiVGhlIGRpcmVjdGlvbiAoXCIgK1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gK1xuICAgICAgICAgICAgICAgICAgICBcIikgaGFzIG5vdCBiZWVuIGFyZ3VlZCBjb3JyZWN0bHlcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZVBsYWNlbWVudChkaXJlY3Rpb24sIGlkLCB5LCB4KSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHRoaXMuc2hpcHNbaWRdLnNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiN2YWxpZGF0ZVBsYWNlbWVudFRpbGUoeSwgaSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHRoaXMuc2hpcHNbaWRdLnNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiN2YWxpZGF0ZVBsYWNlbWVudFRpbGUoaSwgeCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjdmFsaWRhdGVQbGFjZW1lbnRUaWxlKHksIHgpIHtcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHBsYWNlbWVudCBjb25mbGljdHNcbiAgICAgICAgaWYgKHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYgKHggPiA5IHx8IHggPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYm9hcmRbeV1beF0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyByZWFjdCB0byBhdHRhY2sgYXQgY29vcmRpbmF0ZSAneScgYW5kICd4Jy5cbiAgICByZWNpZXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIGNvb3JkLnkgPSBOdW1iZXIoY29vcmQueSk7XG4gICAgICAgIGNvb3JkLnggPSBOdW1iZXIoY29vcmQueCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uSUQgPSB0aGlzLmJvYXJkW2Nvb3JkLnldW2Nvb3JkLnhdO1xuICAgICAgICBpZiAocG9zaXRpb25JRCAhPT0gbnVsbCAmJiBwb3NpdGlvbklEICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc1twb3NpdGlvbklEXS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbY29vcmQueV1bY29vcmQueF0gPSAtMTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaGlwc1twb3NpdGlvbklEXS5pc1N1bmsoKSkgcmV0dXJuIGNvb3JkO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5zaGlwc1twb3NpdGlvbklEXS5nZXRDb29yZHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbklEID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2Nvb3JkLnldW2Nvb3JkLnhdID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoY29vcmQuc21hcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwXG4gICAgICAgICAgICAgICAgPyBjb29yZC55ID09PSA5XG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZWNpZXZlQXR0YWNrKHsgeTogMCwgeDogY29vcmQueCB9KVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMucmVjaWV2ZUF0dGFjayh7IHk6IGNvb3JkLnkgKyAxLCB4OiBjb29yZC54IH0pXG4gICAgICAgICAgICAgICAgOiBjb29yZC54ID09PSA5XG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlY2lldmVBdHRhY2soeyB5OiBjb29yZC55LCB4OiAwIH0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLnJlY2lldmVBdHRhY2soeyB5OiBjb29yZC55LCB4OiBjb29yZC54ICsgMSB9KTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhc0xvc3QoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpbnRCb2FyZCgpIHtcbiAgICAgICAgbGV0IHRvcHJpbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0JPQVJEU0laRTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0JPQVJEU0laRTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdG9wcmludCArPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID09PSBudWxsID8gXCJuXFx0XCIgOiB0aGlzLmJvYXJkW2ldW2pdICsgXCJcXHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcHJpbnQgKz0gXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wcmludDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZmFsbHRocm91Z2ggKi9cbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL0dhbWVib2FyZFwiKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lID0gXCJQbGF5ZXJcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBwbGF5ZXJOYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCAqL1xuY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vUGxheWVyXCIpO1xuY2xhc3MgUGxheWVyQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAgICNEZXRlY3RlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJDUFUtQUlcIik7XG4gICAgICAgIHRoaXMuYm9hcmQucmFuZG9tbHlQbGFjZUFsbFNoaXAoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLiNEZXRlY3RlZEF0dGFja3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzbWFydEF0dGFjayA9IHRoaXMuI3NtYXJ0R2VuZXJhdGVBdHRhY2soXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gc21hcnRBdHRhY2sgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gdGhpcy4jc21hcnRHZW5lcmF0ZUF0dGFjaygwKVxuICAgICAgICAgICAgICAgIDogc21hcnRBdHRhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjc21hcnRHZW5lcmF0ZUF0dGFjayhwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBsYXN0SGl0ID1cbiAgICAgICAgICAgIHRoaXMuI0RldGVjdGVkQXR0YWNrc1tcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLiNEZXRlY3RlZEF0dGFja3MubGVuZ3RoKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChsYXN0SGl0LnkgIT09IDkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBsYXN0SGl0LnkgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogbGFzdEhpdC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RIaXQueSAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxhc3RIaXQueSAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LngsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAobGFzdEhpdC54ICE9PSA5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogbGFzdEhpdC55LFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogbGFzdEhpdC54ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmIChsYXN0SGl0LnggIT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBsYXN0SGl0LnksXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LnggLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHRoaXMuI0RldGVjdGVkQXR0YWNrcy5wdXNoKGNvb3JkKTtcbiAgICB9XG5cbiAgICBmbHVzaE1hcmtzKHN1bmtlZFNoaXApIHtcbiAgICAgICAgdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzID0gdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzLmZpbHRlcigoY29vcmQpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vua2VkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY29vcmQueCA9PT0gc3Vua2VkU2hpcFtpXS54ICYmXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkLnkgPT09IHN1bmtlZFNoaXBbaV0ueVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdW5rZWRTaGlwLnNsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJBSTtcbiIsImZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1yb3dcIik7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZVwiKTtcbiAgICAgICAgICAgIHJvdy5kYXRhc2V0LmNvbHVtbiA9IGk7XG4gICAgICAgICAgICByb3cuZGF0YXNldC5yb3cgPSBqO1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG5mdW5jdGlvbiBhZGRTaGlwKGJvYXJkLCBzaGlwKSB7XG4gICAgc2hpcC5mb3JFYWNoKGZ1bmN0aW9uIGZpbGxUaWxlKGNvb3JkKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7Y29vcmQueX1cIl1bZGF0YS1yb3c9XCIke2Nvb3JkLnh9XCJdYFxuICAgICAgICApO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXBcIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBsYXllckJvYXJkU2hvdChib2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCB0aWxlID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7Y29vcmQueX1cIl1bZGF0YS1yb3c9XCIke2Nvb3JkLnh9XCJdYFxuICAgICk7XG5cbiAgICBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlLXNoaXBcIikpIHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaGlwXCIpO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXAtc2hvdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNob3RcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaGlwSGl0KGJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtjb29yZC55fVwiXVtkYXRhLXJvdz1cIiR7Y29vcmQueH1cIl1gXG4gICAgKTtcblxuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGUtc2hpcFwiKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXAtc2hvdFwiKTtcbn1cblxuZnVuY3Rpb24gZmx1c2hTaGlwKGJvYXJkLCBhcikge1xuICAgIGFyLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIHBsYXllckJvYXJkU2hvdChib2FyZCwgY29vcmQpO1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb29yZGluYXRlQXR0YWNrKGJvYXJkKSB7XG4gICAgbGV0IGNvb3JkO1xuICAgIGNvbnN0IHRpbGVzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC10aWxlXCIpO1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKG15UmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aWxlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZVwiKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNob3RcIik7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmQtdGlsZS1zaGlwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGUtc2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaG90XCIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXAtc2hvdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlsZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlcGxhY2VXaXRoKG5vZGUuY2xvbmVOb2RlKGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXlSZXNvbHZlKHsgeTogbm9kZS5kYXRhc2V0LmNvbHVtbiwgeDogbm9kZS5kYXRhc2V0LnJvdyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb29yZCA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBjb29yZDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVCb3R0b21QaWVjZXMocGxheWVyID0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBpZWNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGllY2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaWVjZXMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wUm93LmNsYXNzTGlzdC5hZGQoXCJwaWVjZXMtdG9wLXJvd1wiKTtcbiAgICBjb25zdCBib3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvdFJvdy5jbGFzc0xpc3QuYWRkKFwicGllY2VzLWJvdC1yb3dcIik7XG5cbiAgICBjb25zdCBibG9ja0dlbmVyYXRvciA9IChzaXplKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInBpZWNlcy1ibG9ja1wiKTtcbiAgICAgICAgaWYgKHBsYXllciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLWZvb3RlclwiKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtZm9vdGVyLWhlYWRcIik7XG4gICAgICAgIGJsb2NrLmZpcnN0Q2hpbGQuaW5uZXJUZXh0ID0gXCIjXCI7XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2tzID0gW1xuICAgICAgICBibG9ja0dlbmVyYXRvcigyKSxcbiAgICAgICAgYmxvY2tHZW5lcmF0b3IoMyksXG4gICAgICAgIGJsb2NrR2VuZXJhdG9yKDMpLFxuICAgICAgICBibG9ja0dlbmVyYXRvcig0KSxcbiAgICAgICAgYmxvY2tHZW5lcmF0b3IoNSksXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBibG9ja3NbaV0uZGF0YXNldC5pZCA9IFN0cmluZyhpKTtcbiAgICB9XG4gICAgYmxvY2tzWzBdLmRhdGFzZXQuc2l6ZSA9IFwiMVwiO1xuICAgIGJsb2Nrc1sxXS5kYXRhc2V0LnNpemUgPSBcIjJcIjtcbiAgICBibG9ja3NbMl0uZGF0YXNldC5zaXplID0gXCIyXCI7XG4gICAgYmxvY2tzWzNdLmRhdGFzZXQuc2l6ZSA9IFwiM1wiO1xuICAgIGJsb2Nrc1s0XS5kYXRhc2V0LnNpemUgPSBcIjRcIjtcblxuICAgIHRvcFJvdy5hcHBlbmQoYmxvY2tzWzBdLCBibG9ja3NbMV0sIGJsb2Nrc1syXSk7XG4gICAgYm90Um93LmFwcGVuZChibG9ja3NbM10sIGJsb2Nrc1s0XSk7XG4gICAgcGllY2VzQ29udGFpbmVyLmFwcGVuZCh0b3BSb3csIGJvdFJvdyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwaWVjZXNDb250YWluZXIpO1xuICAgIGlmIChwbGF5ZXIgPT09IG51bGwpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURpcmVjdGlvbkJ1dHRvbigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURpcmVjdGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlyZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uLWJ1dHRvblwiKTtcbiAgICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbi1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbm5lclRleHQgPT09IFwiWFwiKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiWVwiO1xuICAgICAgICAgICAgdGhpcy5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5uZXJUZXh0ID09PSBcIllcIikge1xuICAgICAgICAgICAgdGhpcy5pbm5lclRleHQgPSBcIlhcIjtcbiAgICAgICAgICAgIHRoaXMuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpcmVjdGlvbi5hcHBlbmQoZGlyZWN0aW9uQnV0dG9uKTtcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZW5lcmF0ZUJvYXJkLFxuICAgIGFkZFNoaXAsXG4gICAgc2hpcEhpdCxcbiAgICBmbHVzaFNoaXAsXG4gICAgY29vcmRpbmF0ZUF0dGFjayxcbiAgICBwbGF5ZXJCb2FyZFNob3QsXG4gICAgZ2VuZXJhdGVCb3R0b21QaWVjZXMsXG4gICAgZ2VuZXJhdGVEaXJlY3Rpb25CdXR0b24sXG59O1xuIiwiY2xhc3MgU2hpcCB7XG4gICAgI2Nvb3JkcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaGlwID0geyBzaXplLCBoaXRzOiAwLCBzdW5rOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3VuaygpKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXAuaGl0cyArPSAxO1xuICAgICAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcC5oaXRzID09PSB0aGlzLnNoaXAuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFwcGVuZENvb3JkKGNvb3JkKSB7XG4gICAgICAgIGlmICh0aGlzLiNjb29yZHMubGVuZ3RoIDwgdGhpcy5zaGlwLnNpemUpIHRoaXMuI2Nvb3Jkcy5wdXNoKGNvb3JkKTtcbiAgICAgICAgZWxzZSB0aHJvdyBcIlRoZSBjb29yZHMgb2YgdGhlIHNoaXAgYXJlIGJleW9uZCB0aGUgc2l6ZSBsaW1pdCFcIjtcbiAgICB9XG5cbiAgICBnZXRDb29yZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjb29yZHM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vUGxheWVyXCIpO1xuY29uc3QgUGxheWVyQUkgPSByZXF1aXJlKFwiLi9QbGF5ZXJBSVwiKTtcbmNvbnN0IFJlbmRlciA9IHJlcXVpcmUoXCIuL1JlbmRlclwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2FtZSgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyQUkgPSBuZXcgUGxheWVyQUkoKTtcbiAgICBwbGF5ZXIuYm9hcmRET00gPSBSZW5kZXIuZ2VuZXJhdGVCb2FyZCgpO1xuICAgIHBsYXllckFJLmJvYXJkRE9NID0gUmVuZGVyLmdlbmVyYXRlQm9hcmQoKTtcbiAgICBjb25zdCBib2FyZFNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZC1zcGFjZVwiKTtcbiAgICBib2FyZFNwYWNlLmFwcGVuZENoaWxkKHBsYXllci5ib2FyZERPTSk7XG4gICAgYm9hcmRTcGFjZS5hcHBlbmRDaGlsZChwbGF5ZXJBSS5ib2FyZERPTSk7XG5cbiAgICAvLyBHZW5lcmF0ZSB0aGUgZm9vdGVyIHRoYXQgdGhlIHVzZXIgd2lsbCBiZSBhYmxlIHVzZVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuICAgIHBsYXllckZvb3RlciA9IFJlbmRlci5nZW5lcmF0ZUJvdHRvbVBpZWNlcyhwbGF5ZXIpO1xuICAgIHBsYXllckZvb3Rlci5hcHBlbmRDaGlsZChSZW5kZXIuZ2VuZXJhdGVEaXJlY3Rpb25CdXR0b24oKSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBsYXllckZvb3Rlcik7XG5cbiAgICAvLyBBZGQgdGhlIEFJIEZvb3Rlci5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoUmVuZGVyLmdlbmVyYXRlQm90dG9tUGllY2VzKCkpO1xuXG4gICAgLy8gLy8gR2VuZXJhdGUgcHJlc2V0IGJvYXJkIGZvciB0aGUgcGxheWVyLlxuICAgIC8vIHBsYXllci5ib2FyZC5wcmVzZXRQbGFjZVNoaXBzKDApO1xuICAgIC8vIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgLy8gICAgIFJlbmRlci5hZGRTaGlwKHBsYXllci5ib2FyZERPTSwgc2hpcC5nZXRDb29yZHMoKSk7XG4gICAgLy8gfSk7XG5cbiAgICB3aGlsZSAoIXBsYXllci5ib2FyZC5oYXNMb3N0KCkgJiYgIXBsYXllckFJLmJvYXJkLmhhc0xvc3QoKSkge1xuICAgICAgICBjb25zdCBwbGF5ZXJTaG9vdCA9IGF3YWl0IFJlbmRlci5jb29yZGluYXRlQXR0YWNrKHBsYXllckFJLmJvYXJkRE9NKTtcbiAgICAgICAgY29uc3QgYm9hcmRSZWFjdCA9IHBsYXllckFJLmJvYXJkLnJlY2lldmVBdHRhY2socGxheWVyU2hvb3QpO1xuICAgICAgICBpZiAoYm9hcmRSZWFjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBib2FyZFJlYWN0LmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgUmVuZGVyLnNoaXBIaXQocGxheWVyQUkuYm9hcmRET00sIGNvb3JkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkUmVhY3QgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgICAgICAgICBSZW5kZXIuc2hpcEhpdChwbGF5ZXJBSS5ib2FyZERPTSwgYm9hcmRSZWFjdCk7XG5cbiAgICAgICAgbGV0IGVuZW15TGFuZGVkSGl0ID0gbnVsbDtcbiAgICAgICAgbGV0IGFpQ29vcmRpbmF0ZWRBdHRhY2sgPSBudWxsO1xuICAgICAgICB3aGlsZSAoZW5lbXlMYW5kZWRIaXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGFpQ29vcmRpbmF0ZWRBdHRhY2sgPSBwbGF5ZXJBSS5nZW5lcmF0ZUF0dGFjaygpO1xuICAgICAgICAgICAgZW5lbXlMYW5kZWRIaXQgPSBwbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhhaUNvb3JkaW5hdGVkQXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5lbXlMYW5kZWRIaXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcGxheWVyQUkuZmx1c2hNYXJrcyhlbmVteUxhbmRlZEhpdCk7XG4gICAgICAgICAgICBSZW5kZXIuZmx1c2hTaGlwKHBsYXllci5ib2FyZERPTSwgZW5lbXlMYW5kZWRIaXQpO1xuICAgICAgICB9IGVsc2UgaWYgKGVuZW15TGFuZGVkSGl0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICBwbGF5ZXJBSS5tYXJrQXR0YWNrKGVuZW15TGFuZGVkSGl0KTtcbiAgICAgICAgICAgIFJlbmRlci5wbGF5ZXJCb2FyZFNob3QocGxheWVyLmJvYXJkRE9NLCBlbmVteUxhbmRlZEhpdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBSZW5kZXIucGxheWVyQm9hcmRTaG90KHBsYXllci5ib2FyZERPTSwgYWlDb29yZGluYXRlZEF0dGFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBsYXllckFJLmJvYXJkLmhhc0xvc3QoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIubmFtZX0gaGFzIHdvbiFgKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5oYXNMb3N0KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyQUkubmFtZX0gaGFzIHdvbiFgKTtcbiAgICB9IGVsc2UgdGhyb3cgXCJOb2JvZHkgd29uPz9cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXRpbGVcIikuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLWZpbmlzaGVkXCIpO1xuICAgIH0pO1xufVxuXG5nYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=