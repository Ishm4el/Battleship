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
    async recieveAttack(coord) {
        console.log("in recieveAttack");
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
            coord.shipHit = false;
            return coord;
        } else if (coord.smart === undefined) {
            return Math.floor(Math.random() * 2) === 0
                ? coord.y === 9
                    ? this.recieveAttack({ y: 0, x: coord.x })
                    : this.recieveAttack({ y: coord.y + 1, x: coord.x })
                : coord.x === 9
                ? this.recieveAttack({ y: coord.y, x: 0 })
                : this.recieveAttack({ y: coord.y, x: coord.x + 1 });
        } else {
            throw "should not be here";
            // return null;
        }
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
const Render = __webpack_require__(/*! ./Render */ "./src/Render.js");

class Player {
    constructor(playerName = "Player") {
        this.name = playerName;
        this.board = new Gameboard();
        this.boardDOM = Render.generateBoard();
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

function generateBottomPieces(player = false) {
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
        if (player === true) {
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
    if (player === true) container.appendChild(generateDirectionButton());
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

/***/ "./src/RunnerUtils.js":
/*!****************************!*\
  !*** ./src/RunnerUtils.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Game Runner Utils
const Render = __webpack_require__(/*! ./Render */ "./src/Render.js");

// Player Turn - Player attacks AI
const opponentRecieveAttack = async function (targeted, playerAI) {
    const boardReact = await playerAI.board.recieveAttack(targeted);
    if (boardReact instanceof Array) {
        boardReact.forEach((coord) => {
            Render.shipHit(playerAI.boardDOM, coord);
        });
    } else if (boardReact instanceof Object)
        if (boardReact.shipHit !== false)
            Render.shipHit(playerAI.boardDOM, boardReact);
};

// AI Turn - AI attacks Player
const playerRecieveAttack = async (player, playerAI) => {
    let enemyLandedHit = null; // the hit ship checker

    enemyLandedHit = await player.board.recieveAttack(
        playerAI.generateAttack()
    );
    if (enemyLandedHit instanceof Array) {
        playerAI.flushMarks(enemyLandedHit);
        Render.flushShip(player.boardDOM, enemyLandedHit);
    } else if (enemyLandedHit instanceof Object) {
        if (enemyLandedHit.shipHit === true)
            playerAI.markAttack(enemyLandedHit);
        Render.playerBoardShot(player.boardDOM, enemyLandedHit);
    }
};

module.exports = { opponentRecieveAttack, playerRecieveAttack };


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
const RunnerUtils = __webpack_require__(/*! ./RunnerUtils */ "./src/RunnerUtils.js");

async function game() {
    // game setup
    const player = new Player();
    const playerAI = new PlayerAI();
    document
        .getElementById("board-space")
        .append(player.boardDOM, playerAI.boardDOM);

    // Generate the footer that the user will be able use
    const footer = document.getElementById("footer");
    footer.append(
        Render.generateBottomPieces(true), // true enables player drag
        Render.generateBottomPieces()
    );

    // create drag event listeners
    const allUserBlocks = document.querySelectorAll('[draggable="true"');

    const loadDrag = (block) =>
        new Promise((res, rej) => {
            block.addEventListener("dragstart", function addTransferData(e) {
                e.dataTransfer.setData("id", e.target.dataset.id);
                res();
            });
        });

    const dragBank = [];

    for (block of allUserBlocks) {
        dragBank.push(loadDrag(block));
    }
    await Promise.all(dragBank).then(() => {
        console.log("We made it!");
    });

    console.log("tiles");
    const tiles = document.querySelectorAll(".board:first-child .board-tile");
    for (tile of tiles) {
        tile.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        tile.addEventListener("drop", function blockDropped(e) {
            console.log(e.dataTransfer.getData("id"));
        });
    }

    // Game Runner
    while (!player.board.hasLost() && !playerAI.board.hasLost()) {
        await RunnerUtils.opponentRecieveAttack(
            await Render.coordinateAttack(playerAI.boardDOM),
            playerAI
        );
        if (!playerAI.board.hasLost())
            await RunnerUtils.playerRecieveAttack(player, playerAI);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEMsTUFBTTtBQUNOLHVCQUF1QixlQUFlO0FBQ3RDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyQUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9SZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9SdW5uZXJVdGlscy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbiNib2FyZC1zcGFjZSxcbi5ib2FyZCxcbi5ib2FyZC1yb3csXG4uYm9hcmQtdGlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJvZHkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgNjBkZWcsXG4gICAgICAgIHJnYigwLCAwLCAxMDUpLFxuICAgICAgICByZ2IoMCwgMCwgMTE0KSxcbiAgICAgICAgZGFya2JsdWVcbiAgICApO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcbn1cblxuI2JvYXJkLXNwYWNlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4jZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLmZvb3Rlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5waWVjZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleDogYXV0bztcbn1cblxuLnBpZWNlcy10b3Atcm93LFxuLnBpZWNlcy1ib3Qtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ucGllY2VzLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYm9hcmQtdGlsZS1mb290ZXIge1xuICAgIHdpZHRoOiAzLjV2dztcbiAgICBoZWlnaHQ6IDMuNXZ3O1xuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5ib2FyZC10aWxlLWZvb3Rlci1oZWFkIHtcbiAgICBmb250LXNpemU6IDMuNXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRyYWdnYWJsZSB7XG4gICAgY3Vyc29yOiBncmFiO1xufVxuXG4uZGlyZWN0aW9uLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXJlY3Rpb24tYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCA2MiwgNjIpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBncmVlbiBzb2xpZDtcbiAgICBoZWlnaHQ6IDZ2dztcbiAgICB3aWR0aDogNnZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpcmVjdGlvbi1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgNDUsIDQ1KTtcbn1cblxuLmRpcmVjdGlvbi1idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCk7XG59XG5cbi5ib2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJvYXJkLXRpbGUsXG4uYm9hcmQtdGlsZS1zaG90LFxuLmJvYXJkLXRpbGUtc2hpcCxcbi5ib2FyZC10aWxlLXNoaXAtc2hvdCxcbi5ib2FyZC10aWxlLWZpbmlzaGVkIHtcbiAgICB3aWR0aDogNHZ3O1xuICAgIGhlaWdodDogNHZ3O1xuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xufVxuXG4uYm9hcmQtdGlsZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAyMGRlZyxcbiAgICAgICAgYmxhY2ssXG4gICAgICAgIHJnYig2NSwgNjUsIDY1KSxcbiAgICAgICAgYmxhY2ssXG4gICAgICAgIHJnYig2NSwgNjUsIDY1KVxuICAgICk7XG59XG5cbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYmxhY2ssIGRhcmtyZWQpO1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2IoMTgzLCAwLCAwKSwgcmdiKDAsIDAsIDApKTtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmJvYXJkLXRpbGUtZmluaXNoZWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibHVlLCBkYXJrYmx1ZSk7XG59XG5cbi5ib2FyZC10aWxlLXNob3Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZWQsIGJsYWNrKTtcbn1cblxuLmJvYXJkLXRpbGUtc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmJvYXJkLXRpbGUtc2hpcC1zaG90IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KGdyYXksIHJlZCk7XG59XG5cbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlLXNob3Q6aG92ZXIsXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZS1zaGlwLXNob3Qge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7OztJQUlJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiOzs7OztLQUtDO0lBQ0QsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7SUFLSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJOzs7Ozs7S0FNQztBQUNMOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtEQUErRDtJQUMvRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNib2FyZC1zcGFjZSxcXG4uYm9hcmQsXFxuLmJvYXJkLXJvdyxcXG4uYm9hcmQtdGlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgNjBkZWcsXFxuICAgICAgICByZ2IoMCwgMCwgMTA1KSxcXG4gICAgICAgIHJnYigwLCAwLCAxMTQpLFxcbiAgICAgICAgZGFya2JsdWVcXG4gICAgKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXG59XFxuXFxuI2JvYXJkLXNwYWNlIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5waWVjZXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5waWVjZXMtdG9wLXJvdyxcXG4ucGllY2VzLWJvdC1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnBpZWNlcy1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1mb290ZXIge1xcbiAgICB3aWR0aDogMy41dnc7XFxuICAgIGhlaWdodDogMy41dnc7XFxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1mb290ZXItaGVhZCB7XFxuICAgIGZvbnQtc2l6ZTogMy41dnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4uZGlyZWN0aW9uLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmRpcmVjdGlvbi1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDYyLCA2Mik7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IGdyZWVuIHNvbGlkO1xcbiAgICBoZWlnaHQ6IDZ2dztcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXJlY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA0NSwgNDUpO1xcbn1cXG5cXG4uZGlyZWN0aW9uLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAxNTgsIDE1OCk7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2FyZC10aWxlLFxcbi5ib2FyZC10aWxlLXNob3QsXFxuLmJvYXJkLXRpbGUtc2hpcCxcXG4uYm9hcmQtdGlsZS1zaGlwLXNob3QsXFxuLmJvYXJkLXRpbGUtZmluaXNoZWQge1xcbiAgICB3aWR0aDogNHZ3O1xcbiAgICBoZWlnaHQ6IDR2dztcXG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XFxufVxcblxcbi5ib2FyZC10aWxlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMjBkZWcsXFxuICAgICAgICBibGFjayxcXG4gICAgICAgIHJnYig2NSwgNjUsIDY1KSxcXG4gICAgICAgIGJsYWNrLFxcbiAgICAgICAgcmdiKDY1LCA2NSwgNjUpXFxuICAgICk7XFxufVxcblxcbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGJsYWNrLCBkYXJrcmVkKTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2IoMTgzLCAwLCAwKSwgcmdiKDAsIDAsIDApKTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5ib2FyZC10aWxlLWZpbmlzaGVkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsIGRhcmtibHVlKTtcXG59XFxuXFxuLmJvYXJkLXRpbGUtc2hvdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZWQsIGJsYWNrKTtcXG59XFxuXFxuLmJvYXJkLXRpbGUtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNoaXAtc2hvdCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoZ3JheSwgcmVkKTtcXG59XFxuXFxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGUtc2hvdDpob3ZlcixcXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZS1zaGlwLXNob3Qge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9TaGlwXCIpO1xuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICAvLyBCYXR0bGVzaGlwIGhhcyBhIDEwIHggMTAgYm9hcmQuXG4gICAgI0JPQVJEU0laRSA9IDEwO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjb25zdHJ1Y3QgdGhlIGJvYXJkLlxuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQk9BUkRTSVpFOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaChbXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0JPQVJEU0laRTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaGlwcyA9IFtcbiAgICAgICAgICAgIG5ldyBTaGlwKDIpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMyksXG4gICAgICAgICAgICBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoNSksXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gRm9yIHRlc3QgdXNhZ2UgLSB3aWxsIHBvcHVsYXRlIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQuXG4gICAgICAgIC8vIHRoaXMuI3ByZXNldFBsYWNlU2hpcHMoMCk7XG4gICAgICAgIC8vIHJhbmRvbWx5IHBvcHVsYXRlIHRoZSBib2FyZCB3aXRoIHRoZSBzaGlwc1xuICAgIH1cblxuICAgIHJhbmRvbWx5UGxhY2VBbGxTaGlwKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLiNnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoaSk7XG4gICAgfVxuXG4gICAgI2dlbmVyYXRlU2hpcFBsYWNlbWVudChpZCkge1xuICAgICAgICBsZXQgdGlsbFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKHRpbGxWYWxpZCkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uUm9sbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvblJvbGwgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqICgxMSAtIHRoaXMuc2hpcHNbaWRdLnNoaXAuc2l6ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVQbGFjZW1lbnQoZGlyZWN0aW9uUm9sbCwgaWQsIHksIHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKGRpcmVjdGlvblJvbGwsIGlkLCB5LCB4KTtcbiAgICAgICAgICAgICAgICAgICAgdGlsbFZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb25Sb2xsID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqICgxMSAtIHRoaXMuc2hpcHNbaWRdLnNoaXAuc2l6ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGRpcmVjdGlvblJvbGwsIGlkLCB5LCB4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb25Sb2xsLCBpZCwgeSwgeCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcChkaXJlY3Rpb24sIGlkLCB5LCB4KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gMFxuICAgICAgICAgICAgPyB0aGlzLiNwbGFjZVNoaXBIb3Jpem9udGFsKGlkLCB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUsIHksIHgpXG4gICAgICAgICAgICA6IHRoaXMuI3BsYWNlU2hpcFZlcnRpY2FsKGlkLCB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUsIHksIHgpO1xuICAgIH1cblxuICAgICNwbGFjZVNoaXBIb3Jpem9udGFsKGlkLCBzaXplLCB5LCB4KSB7XG4gICAgICAgIHRoaXMuI3ZhbGlkYXRlSW5pdGlhbFBvc2l0aW9uKDAsIHNpemUsIHksIHgpO1xuICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1baV0gPSBpZDtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaWRdLmFwcGVuZENvb3JkKHsgeTogeSwgeDogaSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNwbGFjZVNoaXBWZXJ0aWNhbChpZCwgc2l6ZSwgeSwgeCkge1xuICAgICAgICB0aGlzLiN2YWxpZGF0ZUluaXRpYWxQb3NpdGlvbigxLCBzaXplLCB5LCB4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldW3hdID0gaWQ7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2lkXS5hcHBlbmRDb29yZCh7IHk6IGksIHg6IHggfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVzZXRQbGFjZVNoaXBzKGRpcmVjdGlvbikge1xuICAgICAgICAvL2ZvciB4IGRpcmVjdGlvbmFsIHBsYWNlbWVudFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHRoaXMucGxhY2VTaGlwKGRpcmVjdGlvbiwgaSwgaSwgMCk7XG4gICAgICAgIC8vIGZvciB5IGRpcmVjdGlvbmFsIHBsYWNlbWVudFxuICAgICAgICBlbHNlIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb24sIGksIDAsIGkpO1xuICAgIH1cblxuICAgICN2YWxpZGF0ZUluaXRpYWxQb3NpdGlvbihkaXJlY3Rpb24sIHNpemUsIHksIHgpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpbml0aWFsIHBvc2l0aW9ucyBmb3IgeCBhbmQgeSBhcmUgdmFsaWQuXG4gICAgICAgIGlmICh5ID4gOSB8fCB5IDwgMCkgdGhyb3cgXCJZIGlzIG91dCBvZiBib3VuZHNcIjtcbiAgICAgICAgZWxzZSBpZiAoeCA+IDkgfHwgeCA8IDApIHRocm93IFwiWCBpcyBvdXQgb2YgYm91bmRzXCI7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBzaGlwIHdpbGwgZml0IGluIHRoZSBhc3NpZ25lZCBwb3NpdGlvblxuICAgICAgICAvLyBjYXNlIDAgLSB2YWxpZGF0ZXMgdGhlIHggZGlyZWN0aW9uXG4gICAgICAgIC8vIGNhc2UgMSAtIHZhbGlkYXRlcyB0aGUgeSBkaXJlY3Rpb25cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoeCArIHNpemUgLSAxID4gOSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXppbmcgdGhlIHNoaXAgYXQgdGhpcyAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIikgcG9zaXRpb24gd291bGQgZ28gb3V0IG9mIGJvdW5kcyFcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICh5ICsgc2l6ZSAtIDEgPiA5KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkluaXRpYWxpemluZyB0aGUgc2hpcCBhdCB0aGlzIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSBwb3NpdGlvbiB3b3VsZCBnbyBvdXQgb2YgYm91bmRzIVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IChcbiAgICAgICAgICAgICAgICAgICAgXCJUaGUgZGlyZWN0aW9uIChcIiArXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiArXG4gICAgICAgICAgICAgICAgICAgIFwiKSBoYXMgbm90IGJlZW4gYXJndWVkIGNvcnJlY3RseVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlUGxhY2VtZW50KGRpcmVjdGlvbiwgaWQsIHksIHgpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuI3ZhbGlkYXRlUGxhY2VtZW50VGlsZSh5LCBpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuI3ZhbGlkYXRlUGxhY2VtZW50VGlsZShpLCB4KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICN2YWxpZGF0ZVBsYWNlbWVudFRpbGUoeSwgeCkge1xuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgcGxhY2VtZW50IGNvbmZsaWN0c1xuICAgICAgICBpZiAoeSA+IDkgfHwgeSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSBpZiAoeCA+IDkgfHwgeCA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHJlYWN0IHRvIGF0dGFjayBhdCBjb29yZGluYXRlICd5JyBhbmQgJ3gnLlxuICAgIGFzeW5jIHJlY2lldmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiByZWNpZXZlQXR0YWNrXCIpO1xuICAgICAgICBjb29yZC55ID0gTnVtYmVyKGNvb3JkLnkpO1xuICAgICAgICBjb29yZC54ID0gTnVtYmVyKGNvb3JkLngpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbklEID0gdGhpcy5ib2FyZFtjb29yZC55XVtjb29yZC54XTtcbiAgICAgICAgaWYgKHBvc2l0aW9uSUQgIT09IG51bGwgJiYgcG9zaXRpb25JRCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbcG9zaXRpb25JRF0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2Nvb3JkLnldW2Nvb3JkLnhdID0gLTE7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNbcG9zaXRpb25JRF0uaXNTdW5rKCkpIHJldHVybiBjb29yZDtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuc2hpcHNbcG9zaXRpb25JRF0uZ2V0Q29vcmRzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb25JRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtjb29yZC55XVtjb29yZC54XSA9IC0xO1xuICAgICAgICAgICAgY29vcmQuc2hpcEhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgICAgICB9IGVsc2UgaWYgKGNvb3JkLnNtYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMFxuICAgICAgICAgICAgICAgID8gY29vcmQueSA9PT0gOVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVjaWV2ZUF0dGFjayh7IHk6IDAsIHg6IGNvb3JkLnggfSlcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnJlY2lldmVBdHRhY2soeyB5OiBjb29yZC55ICsgMSwgeDogY29vcmQueCB9KVxuICAgICAgICAgICAgICAgIDogY29vcmQueCA9PT0gOVxuICAgICAgICAgICAgICAgID8gdGhpcy5yZWNpZXZlQXR0YWNrKHsgeTogY29vcmQueSwgeDogMCB9KVxuICAgICAgICAgICAgICAgIDogdGhpcy5yZWNpZXZlQXR0YWNrKHsgeTogY29vcmQueSwgeDogY29vcmQueCArIDEgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcInNob3VsZCBub3QgYmUgaGVyZVwiO1xuICAgICAgICAgICAgLy8gcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNMb3N0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzW2ldLmlzU3VuaygpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaW50Qm9hcmQoKSB7XG4gICAgICAgIGxldCB0b3ByaW50ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNCT0FSRFNJWkU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNCT0FSRFNJWkU7IGorKykge1xuICAgICAgICAgICAgICAgIHRvcHJpbnQgKz1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9PT0gbnVsbCA/IFwiblxcdFwiIDogdGhpcy5ib2FyZFtpXVtqXSArIFwiXFx0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3ByaW50ICs9IFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcHJpbnQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9HYW1lYm9hcmRcIik7XG5jb25zdCBSZW5kZXIgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyTmFtZSA9IFwiUGxheWVyXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5ib2FyZERPTSA9IFJlbmRlci5nZW5lcmF0ZUJvYXJkKCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9QbGF5ZXJcIik7XG5jbGFzcyBQbGF5ZXJBSSBleHRlbmRzIFBsYXllciB7XG4gICAgI0RldGVjdGVkQXR0YWNrcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIkNQVS1BSVwiKTtcbiAgICAgICAgdGhpcy5ib2FyZC5yYW5kb21seVBsYWNlQWxsU2hpcCgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZUF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuI0RldGVjdGVkQXR0YWNrcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICB9O1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYXJ0QXR0YWNrID0gdGhpcy4jc21hcnRHZW5lcmF0ZUF0dGFjayhcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBzbWFydEF0dGFjayA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB0aGlzLiNzbWFydEdlbmVyYXRlQXR0YWNrKDApXG4gICAgICAgICAgICAgICAgOiBzbWFydEF0dGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzbWFydEdlbmVyYXRlQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxhc3RIaXQgPVxuICAgICAgICAgICAgdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzW1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuI0RldGVjdGVkQXR0YWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBdO1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RIaXQueSAhPT0gOSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxhc3RIaXQueSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LngsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAobGFzdEhpdC55ICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogbGFzdEhpdC55IC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxhc3RIaXQueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmIChsYXN0SGl0LnggIT09IDkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBsYXN0SGl0LnksXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LnggKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RIaXQueCAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxhc3RIaXQueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxhc3RIaXQueCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtBdHRhY2soY29vcmQpIHtcbiAgICAgICAgdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzLnB1c2goY29vcmQpO1xuICAgIH1cblxuICAgIGZsdXNoTWFya3Moc3Vua2VkU2hpcCkge1xuICAgICAgICB0aGlzLiNEZXRlY3RlZEF0dGFja3MgPSB0aGlzLiNEZXRlY3RlZEF0dGFja3MuZmlsdGVyKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW5rZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjb29yZC54ID09PSBzdW5rZWRTaGlwW2ldLnggJiZcbiAgICAgICAgICAgICAgICAgICAgY29vcmQueSA9PT0gc3Vua2VkU2hpcFtpXS55XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bmtlZFNoaXAuc2xpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllckFJO1xuIiwiZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImJvYXJkLXJvd1wiKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICAgICAgcm93LmRhdGFzZXQuY29sdW1uID0gaTtcbiAgICAgICAgICAgIHJvdy5kYXRhc2V0LnJvdyA9IGo7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGFkZFNoaXAoYm9hcmQsIHNoaXApIHtcbiAgICBzaGlwLmZvckVhY2goZnVuY3Rpb24gZmlsbFRpbGUoY29vcmQpIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtjb29yZC55fVwiXVtkYXRhLXJvdz1cIiR7Y29vcmQueH1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGVcIik7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcFwiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGxheWVyQm9hcmRTaG90KGJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtjb29yZC55fVwiXVtkYXRhLXJvdz1cIiR7Y29vcmQueH1cIl1gXG4gICAgKTtcblxuICAgIGlmICh0aWxlLmNsYXNzTGlzdC5jb250YWlucyhcImJvYXJkLXRpbGUtc2hpcFwiKSkge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLXNoaXBcIik7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcC1zaG90XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGVcIik7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hvdFwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNoaXBIaXQoYm9hcmQsIGNvb3JkKSB7XG4gICAgY29uc3QgdGlsZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2Nvb3JkLnl9XCJdW2RhdGEtcm93PVwiJHtjb29yZC54fVwiXWBcbiAgICApO1xuXG4gICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaGlwXCIpO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcC1zaG90XCIpO1xufVxuXG5mdW5jdGlvbiBmbHVzaFNoaXAoYm9hcmQsIGFyKSB7XG4gICAgYXIuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgcGxheWVyQm9hcmRTaG90KGJvYXJkLCBjb29yZCk7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvb3JkaW5hdGVBdHRhY2soYm9hcmQpIHtcbiAgICBsZXQgY29vcmQ7XG4gICAgY29uc3QgdGlsZXMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXRpbGVcIik7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgobXlSZXNvbHZlKSA9PiB7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hvdFwiKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlLXNoaXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLXNob3RcIik7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcC1zaG90XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aWxlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVwbGFjZVdpdGgobm9kZS5jbG9uZU5vZGUoZmFsc2UpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBteVJlc29sdmUoeyB5OiBub2RlLmRhdGFzZXQuY29sdW1uLCB4OiBub2RlLmRhdGFzZXQucm93IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvb3JkID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvb3JkO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUJvdHRvbVBpZWNlcyhwbGF5ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBpZWNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGllY2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaWVjZXMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wUm93LmNsYXNzTGlzdC5hZGQoXCJwaWVjZXMtdG9wLXJvd1wiKTtcbiAgICBjb25zdCBib3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvdFJvdy5jbGFzc0xpc3QuYWRkKFwicGllY2VzLWJvdC1yb3dcIik7XG5cbiAgICBjb25zdCBibG9ja0dlbmVyYXRvciA9IChzaXplKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInBpZWNlcy1ibG9ja1wiKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLWZvb3RlclwiKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtZm9vdGVyLWhlYWRcIik7XG4gICAgICAgIGJsb2NrLmZpcnN0Q2hpbGQuaW5uZXJUZXh0ID0gXCIjXCI7XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2tzID0gW1xuICAgICAgICBibG9ja0dlbmVyYXRvcigyKSxcbiAgICAgICAgYmxvY2tHZW5lcmF0b3IoMyksXG4gICAgICAgIGJsb2NrR2VuZXJhdG9yKDMpLFxuICAgICAgICBibG9ja0dlbmVyYXRvcig0KSxcbiAgICAgICAgYmxvY2tHZW5lcmF0b3IoNSksXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBibG9ja3NbaV0uZGF0YXNldC5pZCA9IFN0cmluZyhpKTtcbiAgICB9XG4gICAgYmxvY2tzWzBdLmRhdGFzZXQuc2l6ZSA9IFwiMVwiO1xuICAgIGJsb2Nrc1sxXS5kYXRhc2V0LnNpemUgPSBcIjJcIjtcbiAgICBibG9ja3NbMl0uZGF0YXNldC5zaXplID0gXCIyXCI7XG4gICAgYmxvY2tzWzNdLmRhdGFzZXQuc2l6ZSA9IFwiM1wiO1xuICAgIGJsb2Nrc1s0XS5kYXRhc2V0LnNpemUgPSBcIjRcIjtcblxuICAgIHRvcFJvdy5hcHBlbmQoYmxvY2tzWzBdLCBibG9ja3NbMV0sIGJsb2Nrc1syXSk7XG4gICAgYm90Um93LmFwcGVuZChibG9ja3NbM10sIGJsb2Nrc1s0XSk7XG4gICAgcGllY2VzQ29udGFpbmVyLmFwcGVuZCh0b3BSb3csIGJvdFJvdyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwaWVjZXNDb250YWluZXIpO1xuICAgIGlmIChwbGF5ZXIgPT09IHRydWUpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURpcmVjdGlvbkJ1dHRvbigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURpcmVjdGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlyZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uLWJ1dHRvblwiKTtcbiAgICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbi1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbm5lclRleHQgPT09IFwiWFwiKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiWVwiO1xuICAgICAgICAgICAgdGhpcy5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5uZXJUZXh0ID09PSBcIllcIikge1xuICAgICAgICAgICAgdGhpcy5pbm5lclRleHQgPSBcIlhcIjtcbiAgICAgICAgICAgIHRoaXMuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpcmVjdGlvbi5hcHBlbmQoZGlyZWN0aW9uQnV0dG9uKTtcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZW5lcmF0ZUJvYXJkLFxuICAgIGFkZFNoaXAsXG4gICAgc2hpcEhpdCxcbiAgICBmbHVzaFNoaXAsXG4gICAgY29vcmRpbmF0ZUF0dGFjayxcbiAgICBwbGF5ZXJCb2FyZFNob3QsXG4gICAgZ2VuZXJhdGVCb3R0b21QaWVjZXMsXG4gICAgZ2VuZXJhdGVEaXJlY3Rpb25CdXR0b24sXG59O1xuIiwiLy8gR2FtZSBSdW5uZXIgVXRpbHNcbmNvbnN0IFJlbmRlciA9IHJlcXVpcmUoXCIuL1JlbmRlclwiKTtcblxuLy8gUGxheWVyIFR1cm4gLSBQbGF5ZXIgYXR0YWNrcyBBSVxuY29uc3Qgb3Bwb25lbnRSZWNpZXZlQXR0YWNrID0gYXN5bmMgZnVuY3Rpb24gKHRhcmdldGVkLCBwbGF5ZXJBSSkge1xuICAgIGNvbnN0IGJvYXJkUmVhY3QgPSBhd2FpdCBwbGF5ZXJBSS5ib2FyZC5yZWNpZXZlQXR0YWNrKHRhcmdldGVkKTtcbiAgICBpZiAoYm9hcmRSZWFjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGJvYXJkUmVhY3QuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgIFJlbmRlci5zaGlwSGl0KHBsYXllckFJLmJvYXJkRE9NLCBjb29yZCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRSZWFjdCBpbnN0YW5jZW9mIE9iamVjdClcbiAgICAgICAgaWYgKGJvYXJkUmVhY3Quc2hpcEhpdCAhPT0gZmFsc2UpXG4gICAgICAgICAgICBSZW5kZXIuc2hpcEhpdChwbGF5ZXJBSS5ib2FyZERPTSwgYm9hcmRSZWFjdCk7XG59O1xuXG4vLyBBSSBUdXJuIC0gQUkgYXR0YWNrcyBQbGF5ZXJcbmNvbnN0IHBsYXllclJlY2lldmVBdHRhY2sgPSBhc3luYyAocGxheWVyLCBwbGF5ZXJBSSkgPT4ge1xuICAgIGxldCBlbmVteUxhbmRlZEhpdCA9IG51bGw7IC8vIHRoZSBoaXQgc2hpcCBjaGVja2VyXG5cbiAgICBlbmVteUxhbmRlZEhpdCA9IGF3YWl0IHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKFxuICAgICAgICBwbGF5ZXJBSS5nZW5lcmF0ZUF0dGFjaygpXG4gICAgKTtcbiAgICBpZiAoZW5lbXlMYW5kZWRIaXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBwbGF5ZXJBSS5mbHVzaE1hcmtzKGVuZW15TGFuZGVkSGl0KTtcbiAgICAgICAgUmVuZGVyLmZsdXNoU2hpcChwbGF5ZXIuYm9hcmRET00sIGVuZW15TGFuZGVkSGl0KTtcbiAgICB9IGVsc2UgaWYgKGVuZW15TGFuZGVkSGl0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmIChlbmVteUxhbmRlZEhpdC5zaGlwSGl0ID09PSB0cnVlKVxuICAgICAgICAgICAgcGxheWVyQUkubWFya0F0dGFjayhlbmVteUxhbmRlZEhpdCk7XG4gICAgICAgIFJlbmRlci5wbGF5ZXJCb2FyZFNob3QocGxheWVyLmJvYXJkRE9NLCBlbmVteUxhbmRlZEhpdCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IG9wcG9uZW50UmVjaWV2ZUF0dGFjaywgcGxheWVyUmVjaWV2ZUF0dGFjayB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gICAgI2Nvb3JkcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaGlwID0geyBzaXplLCBoaXRzOiAwLCBzdW5rOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3VuaygpKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXAuaGl0cyArPSAxO1xuICAgICAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcC5oaXRzID09PSB0aGlzLnNoaXAuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFwcGVuZENvb3JkKGNvb3JkKSB7XG4gICAgICAgIGlmICh0aGlzLiNjb29yZHMubGVuZ3RoIDwgdGhpcy5zaGlwLnNpemUpIHRoaXMuI2Nvb3Jkcy5wdXNoKGNvb3JkKTtcbiAgICAgICAgZWxzZSB0aHJvdyBcIlRoZSBjb29yZHMgb2YgdGhlIHNoaXAgYXJlIGJleW9uZCB0aGUgc2l6ZSBsaW1pdCFcIjtcbiAgICB9XG5cbiAgICBnZXRDb29yZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjb29yZHM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vUGxheWVyXCIpO1xuY29uc3QgUGxheWVyQUkgPSByZXF1aXJlKFwiLi9QbGF5ZXJBSVwiKTtcbmNvbnN0IFJlbmRlciA9IHJlcXVpcmUoXCIuL1JlbmRlclwiKTtcbmNvbnN0IFJ1bm5lclV0aWxzID0gcmVxdWlyZShcIi4vUnVubmVyVXRpbHNcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWUoKSB7XG4gICAgLy8gZ2FtZSBzZXR1cFxuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJBSSA9IG5ldyBQbGF5ZXJBSSgpO1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJvYXJkLXNwYWNlXCIpXG4gICAgICAgIC5hcHBlbmQocGxheWVyLmJvYXJkRE9NLCBwbGF5ZXJBSS5ib2FyZERPTSk7XG5cbiAgICAvLyBHZW5lcmF0ZSB0aGUgZm9vdGVyIHRoYXQgdGhlIHVzZXIgd2lsbCBiZSBhYmxlIHVzZVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5hcHBlbmQoXG4gICAgICAgIFJlbmRlci5nZW5lcmF0ZUJvdHRvbVBpZWNlcyh0cnVlKSwgLy8gdHJ1ZSBlbmFibGVzIHBsYXllciBkcmFnXG4gICAgICAgIFJlbmRlci5nZW5lcmF0ZUJvdHRvbVBpZWNlcygpXG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSBkcmFnIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNvbnN0IGFsbFVzZXJCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZHJhZ2dhYmxlPVwidHJ1ZVwiJyk7XG5cbiAgICBjb25zdCBsb2FkRHJhZyA9IChibG9jaykgPT5cbiAgICAgICAgbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uIGFkZFRyYW5zZmVyRGF0YShlKSB7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImlkXCIsIGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgICAgIHJlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgZHJhZ0JhbmsgPSBbXTtcblxuICAgIGZvciAoYmxvY2sgb2YgYWxsVXNlckJsb2Nrcykge1xuICAgICAgICBkcmFnQmFuay5wdXNoKGxvYWREcmFnKGJsb2NrKSk7XG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKGRyYWdCYW5rKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZSBtYWRlIGl0IVwiKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwidGlsZXNcIik7XG4gICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkOmZpcnN0LWNoaWxkIC5ib2FyZC10aWxlXCIpO1xuICAgIGZvciAodGlsZSBvZiB0aWxlcykge1xuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiBibG9ja0Ryb3BwZWQoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gR2FtZSBSdW5uZXJcbiAgICB3aGlsZSAoIXBsYXllci5ib2FyZC5oYXNMb3N0KCkgJiYgIXBsYXllckFJLmJvYXJkLmhhc0xvc3QoKSkge1xuICAgICAgICBhd2FpdCBSdW5uZXJVdGlscy5vcHBvbmVudFJlY2lldmVBdHRhY2soXG4gICAgICAgICAgICBhd2FpdCBSZW5kZXIuY29vcmRpbmF0ZUF0dGFjayhwbGF5ZXJBSS5ib2FyZERPTSksXG4gICAgICAgICAgICBwbGF5ZXJBSVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXBsYXllckFJLmJvYXJkLmhhc0xvc3QoKSlcbiAgICAgICAgICAgIGF3YWl0IFJ1bm5lclV0aWxzLnBsYXllclJlY2lldmVBdHRhY2socGxheWVyLCBwbGF5ZXJBSSk7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJBSS5ib2FyZC5oYXNMb3N0KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IGhhcyB3b24hYCk7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIuYm9hcmQuaGFzTG9zdCgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllckFJLm5hbWV9IGhhcyB3b24hYCk7XG4gICAgfSBlbHNlIHRocm93IFwiTm9ib2R5IHdvbj8/XCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC10aWxlXCIpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZVwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZS1maW5pc2hlZFwiKTtcbiAgICB9KTtcbn1cblxuZ2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9