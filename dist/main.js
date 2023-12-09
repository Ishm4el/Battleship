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
.board-tile-footer-destroyed {
    background-color: rgb(128, 69, 69);
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
.board-tile-ship-destroyed,
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

.board-tile-ship-destroyed {
    background-image: linear-gradient(20deg, rgb(238, 147, 0), rgb(255, 0, 0));
}

.board:last-child .board-tile-shot:hover,
.board:last-child .board-tile-ship-shot {
    cursor: crosshair;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;;;IAII,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb;;;;;KAKC;IACD,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,UAAU;AACd;;AAEA;;IAEI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,cAAc;IACd,iCAAiC;IACjC,iBAAiB;IACjB,eAAe;IACf,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;;;IAMI,UAAU;IACV,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI;;;;;;KAMC;AACL;;AAEA;IACI,iDAAiD;IACjD,iBAAiB;AACrB;;AAEA;IACI,+DAA+D;IAC/D,iBAAiB;AACrB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,0EAA0E;AAC9E;;AAEA;;IAEI,iBAAiB;AACrB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\n#board-space,\n.board,\n.board-row,\n.board-tile {\n    display: flex;\n    position: relative;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-image: linear-gradient(\n        60deg,\n        rgb(0, 0, 105),\n        rgb(0, 0, 114),\n        darkblue\n    );\n    display: grid;\n    grid-template-rows: 1fr 2fr 2fr;\n}\n\n#board-space {\n    align-items: center;\n    justify-content: space-around;\n}\n\n#footer {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.footer-container {\n    display: flex;\n    justify-content: center;\n}\n\n.pieces-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    flex: auto;\n}\n\n.pieces-top-row,\n.pieces-bot-row {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.pieces-block {\n    display: flex;\n    user-select: none;\n}\n\n.board-tile-footer {\n    width: 3.5vw;\n    height: 3.5vw;\n    border: 1px white solid;\n    background-color: gray;\n}\n.board-tile-footer-destroyed {\n    background-color: rgb(128, 69, 69);\n}\n\n.board-tile-footer-head {\n    font-size: 3.5vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.draggable {\n    cursor: grab;\n}\n\n.direction-button-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n.direction-button {\n    color: white;\n    font-size: 4vw;\n    background-color: rgb(62, 62, 62);\n    user-select: none;\n    cursor: pointer;\n    border: 1px green solid;\n    height: 6vw;\n    width: 6vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.direction-button:hover {\n    background-color: rgb(45, 45, 45);\n}\n\n.direction-button:active {\n    background-color: rgb(158, 158, 158);\n}\n\n.board {\n    flex-direction: column;\n}\n\n.board-tile,\n.board-tile-shot,\n.board-tile-ship,\n.board-tile-ship-shot,\n.board-tile-ship-destroyed,\n.board-tile-finished {\n    width: 4vw;\n    height: 4vw;\n    border: 1px white solid;\n}\n\n.board-tile {\n    background-image: linear-gradient(\n        20deg,\n        black,\n        rgb(65, 65, 65),\n        black,\n        rgb(65, 65, 65)\n    );\n}\n\n.board:last-child .board-tile:hover {\n    background-image: radial-gradient(black, darkred);\n    cursor: crosshair;\n}\n\n.board:last-child .board-tile:active {\n    background-image: radial-gradient(rgb(183, 0, 0), rgb(0, 0, 0));\n    cursor: crosshair;\n}\n\n.board-tile-finished {\n    background-image: linear-gradient(blue, darkblue);\n}\n\n.board-tile-shot {\n    background-image: radial-gradient(red, black);\n}\n\n.board-tile-ship {\n    background-color: gray;\n}\n\n.board-tile-ship-shot {\n    background-image: repeating-radial-gradient(gray, red);\n}\n\n.board-tile-ship-destroyed {\n    background-image: linear-gradient(20deg, rgb(238, 147, 0), rgb(255, 0, 0));\n}\n\n.board:last-child .board-tile-shot:hover,\n.board:last-child .board-tile-ship-shot {\n    cursor: crosshair;\n}\n"],"sourceRoot":""}]);
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
            this.ships[id].appendCoord({ y: y, x: i, id });
        }
    }

    #placeShipVertical(id, size, y, x) {
        this.#validateInitialPosition(1, size, y, x);
        for (let i = y; i < y + size; i++) {
            this.board[i][x] = id;
            this.ships[id].appendCoord({ y: i, x: x, id });
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
            console.log(JSON.stringify(coord) + `, positionID: ${positionID}`);
            return null;
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

function shipDestroyed(board, coord) {
    const tile = board.querySelector(
        `[data-column="${coord.y}"][data-row="${coord.x}"]`
    );

    tile.classList.remove("board-tile-ship");
    tile.classList.remove("board-tile-ship-shot");
    tile.classList.add("board-tile-ship-destroyed");
}

function flushShip(board, coords, side) {
    flushShipFooter(coords, side);
    coords.forEach((coord) => {
        shipDestroyed(board, coord);
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

function flushShipFooter(coords, side) {
    const shipID = coords[0].id;
    const footerBlock =
        side === 0
            ? document.querySelectorAll(
                  `.footer-container:last-child [data-id="${shipID}"] div`
              )
            : document.querySelectorAll(
                  `.footer-container:first-child [data-id="${shipID}"] div`
              );
    footerBlock.forEach((tile) => {
        tile.classList.add("board-tile-footer-destroyed");
    });
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

const loadDrag = async (block, player) =>
    new Promise((res) => {
        // tile functions
        let tiles = document.querySelectorAll(".board:first-child .board-tile");
        // reset the tiles
        const cleanTiles = function () {
            tiles.forEach((tile) => {
                tile.removeEventListener("dragover", dragoverfoo);
                tile.removeEventListener("drop", dropfoo);
            });
        };
        // disables the dragover defaults
        const dragoverfoo = function (e) {
            e.preventDefault();
        };
        // event triggers on block drop on tile
        const dropfoo = function (e) {
            const direction = Number(
                document.querySelector(".direction-button").dataset.direction
            );
            const id = Number(block.dataset.id);
            // const id = Number(e.target.dataset.dropped);
            const y = Number(e.target.dataset.column);
            const x = Number(e.target.dataset.row);
            if (player.board.validatePlacement(direction, id, y, x)) {
                console.log(id);
                // remove all the draggable rules on the block
                block.removeEventListener("dragstart", dragstartfoo);
                block.setAttribute("draggable", "false");
                block.classList.remove("draggable");

                // place the ship on the board
                player.board.placeShip(direction, id, y, x);
                addShip(player.boardDOM, player.board.ships[id].getCoords());
                cleanTiles();
                res();
            } else {
                block.addEventListener("dragstart", dragstartfoo);
                cleanTiles();
            }
        };

        const dragstartfoo = function addTransferData(e) {
            block.removeEventListener("dragstart", addTransferData);
            tiles = document.querySelectorAll(".board:first-child .board-tile");

            const direction = Number(
                document.querySelector(".direction-button").dataset.direction
            );
            e.dataTransfer.setData("id", e.target.dataset.id);
            if (direction === 0) {
                [...tiles]
                    .filter((tile) => {
                        if (
                            Number(tile.dataset.row) <= 9 - this.dataset.size &&
                            !tile.classList.contains("board-tile-ship")
                        )
                            return true;
                        else return false;
                    })
                    .forEach((tile) => {
                        tile.dataset.dropped = this.dataset.id;
                        tile.addEventListener("dragover", dragoverfoo);
                        tile.addEventListener("drop", dropfoo);
                    });
            } else {
                [...tiles]
                    .filter((tile) => {
                        if (
                            Number(tile.dataset.column) <=
                                9 - block.dataset.size &&
                            !tile.classList.contains("board-tile-ship")
                        )
                            return true;
                        else return false;
                    })
                    .forEach((tile) => {
                        tile.dataset.dropped = block.dataset.id;
                        tile.addEventListener("dragover", dragoverfoo);
                        tile.addEventListener("drop", dropfoo);
                    });
            }
        };

        block.addEventListener("dragstart", dragstartfoo);
    });

module.exports = {
    generateBoard,
    addShip,
    shipHit,
    shipDestroyed,
    flushShip,
    coordinateAttack,
    playerBoardShot,
    generateBottomPieces,
    generateDirectionButton,
    loadDrag,
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
        Render.flushShip(playerAI.boardDOM, boardReact, 0);
    } else if (boardReact instanceof Object)
        if (boardReact.shipHit !== false)
            Render.shipHit(playerAI.boardDOM, boardReact);
};

// AI Turn - AI attacks Player
const playerRecieveAttack = async (player, playerAI) => {
    let enemyLandedHit = null; // the hit ship checker

    while (enemyLandedHit === null) {
        enemyLandedHit = await player.board.recieveAttack(
            playerAI.generateAttack()
        );
    }
    if (enemyLandedHit instanceof Array) {
        playerAI.flushMarks(enemyLandedHit);
        Render.flushShip(player.boardDOM, enemyLandedHit, 1);
    } else if (enemyLandedHit instanceof Object) {
        if (enemyLandedHit.shipHit !== false)
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

    const dragBank = [];
    for (block of allUserBlocks) {
        dragBank.push(Render.loadDrag(block, player));
    }
    await Promise.all(dragBank);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsZUFBZTtBQUN0QyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllckFJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUnVubmVyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jYm9hcmQtc3BhY2UsXG4uYm9hcmQsXG4uYm9hcmQtcm93LFxuLmJvYXJkLXRpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDYwZGVnLFxuICAgICAgICByZ2IoMCwgMCwgMTA1KSxcbiAgICAgICAgcmdiKDAsIDAsIDExNCksXG4gICAgICAgIGRhcmtibHVlXG4gICAgKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XG59XG5cbiNib2FyZC1zcGFjZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI2Zvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGllY2VzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGZsZXg6IGF1dG87XG59XG5cbi5waWVjZXMtdG9wLXJvdyxcbi5waWVjZXMtYm90LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnBpZWNlcy1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJvYXJkLXRpbGUtZm9vdGVyIHtcbiAgICB3aWR0aDogMy41dnc7XG4gICAgaGVpZ2h0OiAzLjV2dztcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuLmJvYXJkLXRpbGUtZm9vdGVyLWRlc3Ryb3llZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgNjksIDY5KTtcbn1cblxuLmJvYXJkLXRpbGUtZm9vdGVyLWhlYWQge1xuICAgIGZvbnQtc2l6ZTogMy41dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IGdyYWI7XG59XG5cbi5kaXJlY3Rpb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpcmVjdGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDR2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDYyLCA2Mik7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IGdyZWVuIHNvbGlkO1xuICAgIGhlaWdodDogNnZ3O1xuICAgIHdpZHRoOiA2dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGlyZWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA0NSwgNDUpO1xufVxuXG4uZGlyZWN0aW9uLWJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcbn1cblxuLmJvYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm9hcmQtdGlsZSxcbi5ib2FyZC10aWxlLXNob3QsXG4uYm9hcmQtdGlsZS1zaGlwLFxuLmJvYXJkLXRpbGUtc2hpcC1zaG90LFxuLmJvYXJkLXRpbGUtc2hpcC1kZXN0cm95ZWQsXG4uYm9hcmQtdGlsZS1maW5pc2hlZCB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBoZWlnaHQ6IDR2dztcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcbn1cblxuLmJvYXJkLXRpbGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMjBkZWcsXG4gICAgICAgIGJsYWNrLFxuICAgICAgICByZ2IoNjUsIDY1LCA2NSksXG4gICAgICAgIGJsYWNrLFxuICAgICAgICByZ2IoNjUsIDY1LCA2NSlcbiAgICApO1xufVxuXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGJsYWNrLCBkYXJrcmVkKTtcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGU6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDE4MywgMCwgMCksIHJnYigwLCAwLCAwKSk7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5ib2FyZC10aWxlLWZpbmlzaGVkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgZGFya2JsdWUpO1xufVxuXG4uYm9hcmQtdGlsZS1zaG90IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmVkLCBibGFjayk7XG59XG5cbi5ib2FyZC10aWxlLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5ib2FyZC10aWxlLXNoaXAtc2hvdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudChncmF5LCByZWQpO1xufVxuXG4uYm9hcmQtdGlsZS1zaGlwLWRlc3Ryb3llZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIwZGVnLCByZ2IoMjM4LCAxNDcsIDApLCByZ2IoMjU1LCAwLCAwKSk7XG59XG5cbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlLXNob3Q6aG92ZXIsXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZS1zaGlwLXNob3Qge1xuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7OztJQUlJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiOzs7OztLQUtDO0lBQ0QsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7SUFNSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJOzs7Ozs7S0FNQztBQUNMOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtEQUErRDtJQUMvRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSwwRUFBMEU7QUFDOUU7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNib2FyZC1zcGFjZSxcXG4uYm9hcmQsXFxuLmJvYXJkLXJvdyxcXG4uYm9hcmQtdGlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgNjBkZWcsXFxuICAgICAgICByZ2IoMCwgMCwgMTA1KSxcXG4gICAgICAgIHJnYigwLCAwLCAxMTQpLFxcbiAgICAgICAgZGFya2JsdWVcXG4gICAgKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXG59XFxuXFxuI2JvYXJkLXNwYWNlIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5waWVjZXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblxcbi5waWVjZXMtdG9wLXJvdyxcXG4ucGllY2VzLWJvdC1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnBpZWNlcy1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1mb290ZXIge1xcbiAgICB3aWR0aDogMy41dnc7XFxuICAgIGhlaWdodDogMy41dnc7XFxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uYm9hcmQtdGlsZS1mb290ZXItZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgNjksIDY5KTtcXG59XFxuXFxuLmJvYXJkLXRpbGUtZm9vdGVyLWhlYWQge1xcbiAgICBmb250LXNpemU6IDMuNXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmRpcmVjdGlvbi1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5kaXJlY3Rpb24tYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYyLCA2MiwgNjIpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBncmVlbiBzb2xpZDtcXG4gICAgaGVpZ2h0OiA2dnc7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGlyZWN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgNDUsIDQ1KTtcXG59XFxuXFxuLmRpcmVjdGlvbi1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMTU4LCAxNTgpO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYm9hcmQtdGlsZSxcXG4uYm9hcmQtdGlsZS1zaG90LFxcbi5ib2FyZC10aWxlLXNoaXAsXFxuLmJvYXJkLXRpbGUtc2hpcC1zaG90LFxcbi5ib2FyZC10aWxlLXNoaXAtZGVzdHJveWVkLFxcbi5ib2FyZC10aWxlLWZpbmlzaGVkIHtcXG4gICAgd2lkdGg6IDR2dztcXG4gICAgaGVpZ2h0OiA0dnc7XFxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xcbn1cXG5cXG4uYm9hcmQtdGlsZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDIwZGVnLFxcbiAgICAgICAgYmxhY2ssXFxuICAgICAgICByZ2IoNjUsIDY1LCA2NSksXFxuICAgICAgICBibGFjayxcXG4gICAgICAgIHJnYig2NSwgNjUsIDY1KVxcbiAgICApO1xcbn1cXG5cXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChibGFjaywgZGFya3JlZCk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uYm9hcmQ6bGFzdC1jaGlsZCAuYm9hcmQtdGlsZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiKDE4MywgMCwgMCksIHJnYigwLCAwLCAwKSk7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1maW5pc2hlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibHVlLCBkYXJrYmx1ZSk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmVkLCBibGFjayk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1zaGlwLXNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KGdyYXksIHJlZCk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNoaXAtZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIwZGVnLCByZ2IoMjM4LCAxNDcsIDApLCByZ2IoMjU1LCAwLCAwKSk7XFxufVxcblxcbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlLXNob3Q6aG92ZXIsXFxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGUtc2hpcC1zaG90IHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZShcIi4vU2hpcFwiKTtcbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgLy8gQmF0dGxlc2hpcCBoYXMgYSAxMCB4IDEwIGJvYXJkLlxuICAgICNCT0FSRFNJWkUgPSAxMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY29uc3RydWN0IHRoZSBib2FyZC5cbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0JPQVJEU0laRTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNCT0FSRFNJWkU7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcCgyKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMyksXG4gICAgICAgICAgICBuZXcgU2hpcCg0KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDUpLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEZvciB0ZXN0IHVzYWdlIC0gd2lsbCBwb3B1bGF0ZSB0aGUgc2hpcHMgb24gdGhlIGJvYXJkLlxuICAgICAgICAvLyB0aGlzLiNwcmVzZXRQbGFjZVNoaXBzKDApO1xuICAgICAgICAvLyByYW5kb21seSBwb3B1bGF0ZSB0aGUgYm9hcmQgd2l0aCB0aGUgc2hpcHNcbiAgICB9XG5cbiAgICByYW5kb21seVBsYWNlQWxsU2hpcCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy4jZ2VuZXJhdGVTaGlwUGxhY2VtZW50KGkpO1xuICAgIH1cblxuICAgICNnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoaWQpIHtcbiAgICAgICAgbGV0IHRpbGxWYWxpZCA9IHRydWU7XG4gICAgICAgIHdoaWxlICh0aWxsVmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvblJvbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25Sb2xsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAoMTEgLSB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlUGxhY2VtZW50KGRpcmVjdGlvblJvbGwsIGlkLCB5LCB4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb25Sb2xsLCBpZCwgeSwgeCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uUm9sbCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAoMTEgLSB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVBsYWNlbWVudChkaXJlY3Rpb25Sb2xsLCBpZCwgeSwgeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAoZGlyZWN0aW9uUm9sbCwgaWQsIHksIHgpO1xuICAgICAgICAgICAgICAgICAgICB0aWxsVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoZGlyZWN0aW9uLCBpZCwgeSwgeCkge1xuICAgICAgICBkaXJlY3Rpb24gPT09IDBcbiAgICAgICAgICAgID8gdGhpcy4jcGxhY2VTaGlwSG9yaXpvbnRhbChpZCwgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplLCB5LCB4KVxuICAgICAgICAgICAgOiB0aGlzLiNwbGFjZVNoaXBWZXJ0aWNhbChpZCwgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplLCB5LCB4KTtcbiAgICB9XG5cbiAgICAjcGxhY2VTaGlwSG9yaXpvbnRhbChpZCwgc2l6ZSwgeSwgeCkge1xuICAgICAgICB0aGlzLiN2YWxpZGF0ZUluaXRpYWxQb3NpdGlvbigwLCBzaXplLCB5LCB4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2ldID0gaWQ7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2lkXS5hcHBlbmRDb29yZCh7IHk6IHksIHg6IGksIGlkIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3BsYWNlU2hpcFZlcnRpY2FsKGlkLCBzaXplLCB5LCB4KSB7XG4gICAgICAgIHRoaXMuI3ZhbGlkYXRlSW5pdGlhbFBvc2l0aW9uKDEsIHNpemUsIHksIHgpO1xuICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1beF0gPSBpZDtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaWRdLmFwcGVuZENvb3JkKHsgeTogaSwgeDogeCwgaWQgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVzZXRQbGFjZVNoaXBzKGRpcmVjdGlvbikge1xuICAgICAgICAvL2ZvciB4IGRpcmVjdGlvbmFsIHBsYWNlbWVudFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHRoaXMucGxhY2VTaGlwKGRpcmVjdGlvbiwgaSwgaSwgMCk7XG4gICAgICAgIC8vIGZvciB5IGRpcmVjdGlvbmFsIHBsYWNlbWVudFxuICAgICAgICBlbHNlIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb24sIGksIDAsIGkpO1xuICAgIH1cblxuICAgICN2YWxpZGF0ZUluaXRpYWxQb3NpdGlvbihkaXJlY3Rpb24sIHNpemUsIHksIHgpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpbml0aWFsIHBvc2l0aW9ucyBmb3IgeCBhbmQgeSBhcmUgdmFsaWQuXG4gICAgICAgIGlmICh5ID4gOSB8fCB5IDwgMCkgdGhyb3cgXCJZIGlzIG91dCBvZiBib3VuZHNcIjtcbiAgICAgICAgZWxzZSBpZiAoeCA+IDkgfHwgeCA8IDApIHRocm93IFwiWCBpcyBvdXQgb2YgYm91bmRzXCI7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBzaGlwIHdpbGwgZml0IGluIHRoZSBhc3NpZ25lZCBwb3NpdGlvblxuICAgICAgICAvLyBjYXNlIDAgLSB2YWxpZGF0ZXMgdGhlIHggZGlyZWN0aW9uXG4gICAgICAgIC8vIGNhc2UgMSAtIHZhbGlkYXRlcyB0aGUgeSBkaXJlY3Rpb25cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoeCArIHNpemUgLSAxID4gOSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXppbmcgdGhlIHNoaXAgYXQgdGhpcyAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIikgcG9zaXRpb24gd291bGQgZ28gb3V0IG9mIGJvdW5kcyFcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICh5ICsgc2l6ZSAtIDEgPiA5KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkluaXRpYWxpemluZyB0aGUgc2hpcCBhdCB0aGlzIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSBwb3NpdGlvbiB3b3VsZCBnbyBvdXQgb2YgYm91bmRzIVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IChcbiAgICAgICAgICAgICAgICAgICAgXCJUaGUgZGlyZWN0aW9uIChcIiArXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiArXG4gICAgICAgICAgICAgICAgICAgIFwiKSBoYXMgbm90IGJlZW4gYXJndWVkIGNvcnJlY3RseVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlUGxhY2VtZW50KGRpcmVjdGlvbiwgaWQsIHksIHgpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuI3ZhbGlkYXRlUGxhY2VtZW50VGlsZSh5LCBpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuI3ZhbGlkYXRlUGxhY2VtZW50VGlsZShpLCB4KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICN2YWxpZGF0ZVBsYWNlbWVudFRpbGUoeSwgeCkge1xuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgcGxhY2VtZW50IGNvbmZsaWN0c1xuICAgICAgICBpZiAoeSA+IDkgfHwgeSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSBpZiAoeCA+IDkgfHwgeCA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIHJlYWN0IHRvIGF0dGFjayBhdCBjb29yZGluYXRlICd5JyBhbmQgJ3gnLlxuICAgIGFzeW5jIHJlY2lldmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgY29vcmQueSA9IE51bWJlcihjb29yZC55KTtcbiAgICAgICAgY29vcmQueCA9IE51bWJlcihjb29yZC54KTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25JRCA9IHRoaXMuYm9hcmRbY29vcmQueV1bY29vcmQueF07XG4gICAgICAgIGlmIChwb3NpdGlvbklEICE9PSBudWxsICYmIHBvc2l0aW9uSUQgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW3Bvc2l0aW9uSURdLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtjb29yZC55XVtjb29yZC54XSA9IC0xO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3Bvc2l0aW9uSURdLmlzU3VuaygpKSByZXR1cm4gY29vcmQ7XG4gICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLnNoaXBzW3Bvc2l0aW9uSURdLmdldENvb3JkcygpO1xuICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uSUQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbY29vcmQueV1bY29vcmQueF0gPSAtMTtcbiAgICAgICAgICAgIGNvb3JkLnNoaXBIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBjb29yZDtcbiAgICAgICAgfSBlbHNlIGlmIChjb29yZC5zbWFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDBcbiAgICAgICAgICAgICAgICA/IGNvb3JkLnkgPT09IDlcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlY2lldmVBdHRhY2soeyB5OiAwLCB4OiBjb29yZC54IH0pXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5yZWNpZXZlQXR0YWNrKHsgeTogY29vcmQueSArIDEsIHg6IGNvb3JkLnggfSlcbiAgICAgICAgICAgICAgICA6IGNvb3JkLnggPT09IDlcbiAgICAgICAgICAgICAgICA/IHRoaXMucmVjaWV2ZUF0dGFjayh7IHk6IGNvb3JkLnksIHg6IDAgfSlcbiAgICAgICAgICAgICAgICA6IHRoaXMucmVjaWV2ZUF0dGFjayh7IHk6IGNvb3JkLnksIHg6IGNvb3JkLnggKyAxIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29vcmQpICsgYCwgcG9zaXRpb25JRDogJHtwb3NpdGlvbklEfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNMb3N0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzW2ldLmlzU3VuaygpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaW50Qm9hcmQoKSB7XG4gICAgICAgIGxldCB0b3ByaW50ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNCT0FSRFNJWkU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNCT0FSRFNJWkU7IGorKykge1xuICAgICAgICAgICAgICAgIHRvcHJpbnQgKz1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9PT0gbnVsbCA/IFwiblxcdFwiIDogdGhpcy5ib2FyZFtpXVtqXSArIFwiXFx0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3ByaW50ICs9IFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcHJpbnQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9HYW1lYm9hcmRcIik7XG5jb25zdCBSZW5kZXIgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyTmFtZSA9IFwiUGxheWVyXCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcGxheWVyTmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5ib2FyZERPTSA9IFJlbmRlci5nZW5lcmF0ZUJvYXJkKCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi9QbGF5ZXJcIik7XG5jbGFzcyBQbGF5ZXJBSSBleHRlbmRzIFBsYXllciB7XG4gICAgI0RldGVjdGVkQXR0YWNrcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIkNQVS1BSVwiKTtcbiAgICAgICAgdGhpcy5ib2FyZC5yYW5kb21seVBsYWNlQWxsU2hpcCgpO1xuICAgIH1cbiAgICBnZW5lcmF0ZUF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuI0RldGVjdGVkQXR0YWNrcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICB9O1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYXJ0QXR0YWNrID0gdGhpcy4jc21hcnRHZW5lcmF0ZUF0dGFjayhcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBzbWFydEF0dGFjayA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB0aGlzLiNzbWFydEdlbmVyYXRlQXR0YWNrKDApXG4gICAgICAgICAgICAgICAgOiBzbWFydEF0dGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNzbWFydEdlbmVyYXRlQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxhc3RIaXQgPVxuICAgICAgICAgICAgdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzW1xuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuI0RldGVjdGVkQXR0YWNrcy5sZW5ndGgpXG4gICAgICAgICAgICBdO1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RIaXQueSAhPT0gOSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxhc3RIaXQueSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LngsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAobGFzdEhpdC55ICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogbGFzdEhpdC55IC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxhc3RIaXQueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmIChsYXN0SGl0LnggIT09IDkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBsYXN0SGl0LnksXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LnggKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RIaXQueCAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxhc3RIaXQueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxhc3RIaXQueCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtBdHRhY2soY29vcmQpIHtcbiAgICAgICAgdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzLnB1c2goY29vcmQpO1xuICAgIH1cblxuICAgIGZsdXNoTWFya3Moc3Vua2VkU2hpcCkge1xuICAgICAgICB0aGlzLiNEZXRlY3RlZEF0dGFja3MgPSB0aGlzLiNEZXRlY3RlZEF0dGFja3MuZmlsdGVyKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW5rZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjb29yZC54ID09PSBzdW5rZWRTaGlwW2ldLnggJiZcbiAgICAgICAgICAgICAgICAgICAgY29vcmQueSA9PT0gc3Vua2VkU2hpcFtpXS55XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bmtlZFNoaXAuc2xpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllckFJO1xuIiwiZnVuY3Rpb24gZ2VuZXJhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImJvYXJkLXJvd1wiKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICAgICAgcm93LmRhdGFzZXQuY29sdW1uID0gaTtcbiAgICAgICAgICAgIHJvdy5kYXRhc2V0LnJvdyA9IGo7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGFkZFNoaXAoYm9hcmQsIHNoaXApIHtcbiAgICBzaGlwLmZvckVhY2goZnVuY3Rpb24gZmlsbFRpbGUoY29vcmQpIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtjb29yZC55fVwiXVtkYXRhLXJvdz1cIiR7Y29vcmQueH1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGVcIik7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcFwiKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGxheWVyQm9hcmRTaG90KGJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtjb29yZC55fVwiXVtkYXRhLXJvdz1cIiR7Y29vcmQueH1cIl1gXG4gICAgKTtcblxuICAgIGlmICh0aWxlLmNsYXNzTGlzdC5jb250YWlucyhcImJvYXJkLXRpbGUtc2hpcFwiKSkge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLXNoaXBcIik7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcC1zaG90XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGVcIik7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hvdFwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNoaXBIaXQoYm9hcmQsIGNvb3JkKSB7XG4gICAgY29uc3QgdGlsZSA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1jb2x1bW49XCIke2Nvb3JkLnl9XCJdW2RhdGEtcm93PVwiJHtjb29yZC54fVwiXWBcbiAgICApO1xuXG4gICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaGlwXCIpO1xuICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcC1zaG90XCIpO1xufVxuXG5mdW5jdGlvbiBzaGlwRGVzdHJveWVkKGJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtjb29yZC55fVwiXVtkYXRhLXJvdz1cIiR7Y29vcmQueH1cIl1gXG4gICAgKTtcblxuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGUtc2hpcFwiKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLXNoaXAtc2hvdFwiKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXAtZGVzdHJveWVkXCIpO1xufVxuXG5mdW5jdGlvbiBmbHVzaFNoaXAoYm9hcmQsIGNvb3Jkcywgc2lkZSkge1xuICAgIGZsdXNoU2hpcEZvb3Rlcihjb29yZHMsIHNpZGUpO1xuICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBzaGlwRGVzdHJveWVkKGJvYXJkLCBjb29yZCk7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvb3JkaW5hdGVBdHRhY2soYm9hcmQpIHtcbiAgICBsZXQgY29vcmQ7XG4gICAgY29uc3QgdGlsZXMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXRpbGVcIik7XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgobXlSZXNvbHZlKSA9PiB7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hvdFwiKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlLXNoaXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaGlwXCIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlLXNob3RcIik7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtc2hpcC1zaG90XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aWxlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVwbGFjZVdpdGgobm9kZS5jbG9uZU5vZGUoZmFsc2UpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBteVJlc29sdmUoeyB5OiBub2RlLmRhdGFzZXQuY29sdW1uLCB4OiBub2RlLmRhdGFzZXQucm93IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvb3JkID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvb3JkO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUJvdHRvbVBpZWNlcyhwbGF5ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHBpZWNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGllY2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaWVjZXMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRvcFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9wUm93LmNsYXNzTGlzdC5hZGQoXCJwaWVjZXMtdG9wLXJvd1wiKTtcbiAgICBjb25zdCBib3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvdFJvdy5jbGFzc0xpc3QuYWRkKFwicGllY2VzLWJvdC1yb3dcIik7XG5cbiAgICBjb25zdCBibG9ja0dlbmVyYXRvciA9IChzaXplKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInBpZWNlcy1ibG9ja1wiKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcImRyYWdnYWJsZVwiKTtcbiAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLWZvb3RlclwiKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpbGUtZm9vdGVyLWhlYWRcIik7XG4gICAgICAgIGJsb2NrLmZpcnN0Q2hpbGQuaW5uZXJUZXh0ID0gXCIjXCI7XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2tzID0gW1xuICAgICAgICBibG9ja0dlbmVyYXRvcigyKSxcbiAgICAgICAgYmxvY2tHZW5lcmF0b3IoMyksXG4gICAgICAgIGJsb2NrR2VuZXJhdG9yKDMpLFxuICAgICAgICBibG9ja0dlbmVyYXRvcig0KSxcbiAgICAgICAgYmxvY2tHZW5lcmF0b3IoNSksXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBibG9ja3NbaV0uZGF0YXNldC5pZCA9IFN0cmluZyhpKTtcbiAgICB9XG4gICAgYmxvY2tzWzBdLmRhdGFzZXQuc2l6ZSA9IFwiMVwiO1xuICAgIGJsb2Nrc1sxXS5kYXRhc2V0LnNpemUgPSBcIjJcIjtcbiAgICBibG9ja3NbMl0uZGF0YXNldC5zaXplID0gXCIyXCI7XG4gICAgYmxvY2tzWzNdLmRhdGFzZXQuc2l6ZSA9IFwiM1wiO1xuICAgIGJsb2Nrc1s0XS5kYXRhc2V0LnNpemUgPSBcIjRcIjtcblxuICAgIHRvcFJvdy5hcHBlbmQoYmxvY2tzWzBdLCBibG9ja3NbMV0sIGJsb2Nrc1syXSk7XG4gICAgYm90Um93LmFwcGVuZChibG9ja3NbM10sIGJsb2Nrc1s0XSk7XG4gICAgcGllY2VzQ29udGFpbmVyLmFwcGVuZCh0b3BSb3csIGJvdFJvdyk7XG4gICAgY29udGFpbmVyLmFwcGVuZChwaWVjZXNDb250YWluZXIpO1xuICAgIGlmIChwbGF5ZXIgPT09IHRydWUpIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZURpcmVjdGlvbkJ1dHRvbigpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBmbHVzaFNoaXBGb290ZXIoY29vcmRzLCBzaWRlKSB7XG4gICAgY29uc3Qgc2hpcElEID0gY29vcmRzWzBdLmlkO1xuICAgIGNvbnN0IGZvb3RlckJsb2NrID1cbiAgICAgICAgc2lkZSA9PT0gMFxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgYC5mb290ZXItY29udGFpbmVyOmxhc3QtY2hpbGQgW2RhdGEtaWQ9XCIke3NoaXBJRH1cIl0gZGl2YFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgICBgLmZvb3Rlci1jb250YWluZXI6Zmlyc3QtY2hpbGQgW2RhdGEtaWQ9XCIke3NoaXBJRH1cIl0gZGl2YFxuICAgICAgICAgICAgICApO1xuICAgIGZvb3RlckJsb2NrLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZS1mb290ZXItZGVzdHJveWVkXCIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURpcmVjdGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlyZWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMFwiO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uLWJ1dHRvblwiKTtcbiAgICBkaXJlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbi1idXR0b24tY29udGFpbmVyXCIpO1xuICAgIGRpcmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbm5lclRleHQgPT09IFwiWFwiKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVyVGV4dCA9IFwiWVwiO1xuICAgICAgICAgICAgdGhpcy5kYXRhc2V0LmRpcmVjdGlvbiA9IFwiMVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5uZXJUZXh0ID09PSBcIllcIikge1xuICAgICAgICAgICAgdGhpcy5pbm5lclRleHQgPSBcIlhcIjtcbiAgICAgICAgICAgIHRoaXMuZGF0YXNldC5kaXJlY3Rpb24gPSBcIjBcIjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpcmVjdGlvbi5hcHBlbmQoZGlyZWN0aW9uQnV0dG9uKTtcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xufVxuXG5jb25zdCBsb2FkRHJhZyA9IGFzeW5jIChibG9jaywgcGxheWVyKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgLy8gdGlsZSBmdW5jdGlvbnNcbiAgICAgICAgbGV0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZDpmaXJzdC1jaGlsZCAuYm9hcmQtdGlsZVwiKTtcbiAgICAgICAgLy8gcmVzZXQgdGhlIHRpbGVzXG4gICAgICAgIGNvbnN0IGNsZWFuVGlsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ292ZXJmb28pO1xuICAgICAgICAgICAgICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZHJvcGZvbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZGlzYWJsZXMgdGhlIGRyYWdvdmVyIGRlZmF1bHRzXG4gICAgICAgIGNvbnN0IGRyYWdvdmVyZm9vID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXZlbnQgdHJpZ2dlcnMgb24gYmxvY2sgZHJvcCBvbiB0aWxlXG4gICAgICAgIGNvbnN0IGRyb3Bmb28gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTnVtYmVyKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyZWN0aW9uLWJ1dHRvblwiKS5kYXRhc2V0LmRpcmVjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGJsb2NrLmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgLy8gY29uc3QgaWQgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5kcm9wcGVkKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5jb2x1bW4pO1xuICAgICAgICAgICAgY29uc3QgeCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgICAgICAgICBpZiAocGxheWVyLmJvYXJkLnZhbGlkYXRlUGxhY2VtZW50KGRpcmVjdGlvbiwgaWQsIHksIHgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgdGhlIGRyYWdnYWJsZSBydWxlcyBvbiB0aGUgYmxvY2tcbiAgICAgICAgICAgICAgICBibG9jay5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWdzdGFydGZvbyk7XG4gICAgICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnYWJsZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIHBsYWNlIHRoZSBzaGlwIG9uIHRoZSBib2FyZFxuICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoZGlyZWN0aW9uLCBpZCwgeSwgeCk7XG4gICAgICAgICAgICAgICAgYWRkU2hpcChwbGF5ZXIuYm9hcmRET00sIHBsYXllci5ib2FyZC5zaGlwc1tpZF0uZ2V0Q29vcmRzKCkpO1xuICAgICAgICAgICAgICAgIGNsZWFuVGlsZXMoKTtcbiAgICAgICAgICAgICAgICByZXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRmb28pO1xuICAgICAgICAgICAgICAgIGNsZWFuVGlsZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkcmFnc3RhcnRmb28gPSBmdW5jdGlvbiBhZGRUcmFuc2ZlckRhdGEoZSkge1xuICAgICAgICAgICAgYmxvY2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBhZGRUcmFuc2ZlckRhdGEpO1xuICAgICAgICAgICAgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkOmZpcnN0LWNoaWxkIC5ib2FyZC10aWxlXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXJlY3Rpb24tYnV0dG9uXCIpLmRhdGFzZXQuZGlyZWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImlkXCIsIGUudGFyZ2V0LmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIFsuLi50aWxlc11cbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcih0aWxlLmRhdGFzZXQucm93KSA8PSA5IC0gdGhpcy5kYXRhc2V0LnNpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlLXNoaXBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5kYXRhc2V0LmRyb3BwZWQgPSB0aGlzLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnb3ZlcmZvbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3Bmb28pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgWy4uLnRpbGVzXVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRpbGUuZGF0YXNldC5jb2x1bW4pIDw9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDkgLSBibG9jay5kYXRhc2V0LnNpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlLXNoaXBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5kYXRhc2V0LmRyb3BwZWQgPSBibG9jay5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ292ZXJmb28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wZm9vKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYmxvY2suYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnc3RhcnRmb28pO1xuICAgIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBnZW5lcmF0ZUJvYXJkLFxuICAgIGFkZFNoaXAsXG4gICAgc2hpcEhpdCxcbiAgICBzaGlwRGVzdHJveWVkLFxuICAgIGZsdXNoU2hpcCxcbiAgICBjb29yZGluYXRlQXR0YWNrLFxuICAgIHBsYXllckJvYXJkU2hvdCxcbiAgICBnZW5lcmF0ZUJvdHRvbVBpZWNlcyxcbiAgICBnZW5lcmF0ZURpcmVjdGlvbkJ1dHRvbixcbiAgICBsb2FkRHJhZyxcbn07XG4iLCIvLyBHYW1lIFJ1bm5lciBVdGlsc1xuY29uc3QgUmVuZGVyID0gcmVxdWlyZShcIi4vUmVuZGVyXCIpO1xuXG4vLyBQbGF5ZXIgVHVybiAtIFBsYXllciBhdHRhY2tzIEFJXG5jb25zdCBvcHBvbmVudFJlY2lldmVBdHRhY2sgPSBhc3luYyBmdW5jdGlvbiAodGFyZ2V0ZWQsIHBsYXllckFJKSB7XG4gICAgY29uc3QgYm9hcmRSZWFjdCA9IGF3YWl0IHBsYXllckFJLmJvYXJkLnJlY2lldmVBdHRhY2sodGFyZ2V0ZWQpO1xuICAgIGlmIChib2FyZFJlYWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgUmVuZGVyLmZsdXNoU2hpcChwbGF5ZXJBSS5ib2FyZERPTSwgYm9hcmRSZWFjdCwgMCk7XG4gICAgfSBlbHNlIGlmIChib2FyZFJlYWN0IGluc3RhbmNlb2YgT2JqZWN0KVxuICAgICAgICBpZiAoYm9hcmRSZWFjdC5zaGlwSGl0ICE9PSBmYWxzZSlcbiAgICAgICAgICAgIFJlbmRlci5zaGlwSGl0KHBsYXllckFJLmJvYXJkRE9NLCBib2FyZFJlYWN0KTtcbn07XG5cbi8vIEFJIFR1cm4gLSBBSSBhdHRhY2tzIFBsYXllclxuY29uc3QgcGxheWVyUmVjaWV2ZUF0dGFjayA9IGFzeW5jIChwbGF5ZXIsIHBsYXllckFJKSA9PiB7XG4gICAgbGV0IGVuZW15TGFuZGVkSGl0ID0gbnVsbDsgLy8gdGhlIGhpdCBzaGlwIGNoZWNrZXJcblxuICAgIHdoaWxlIChlbmVteUxhbmRlZEhpdCA9PT0gbnVsbCkge1xuICAgICAgICBlbmVteUxhbmRlZEhpdCA9IGF3YWl0IHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKFxuICAgICAgICAgICAgcGxheWVyQUkuZ2VuZXJhdGVBdHRhY2soKVxuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoZW5lbXlMYW5kZWRIaXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBwbGF5ZXJBSS5mbHVzaE1hcmtzKGVuZW15TGFuZGVkSGl0KTtcbiAgICAgICAgUmVuZGVyLmZsdXNoU2hpcChwbGF5ZXIuYm9hcmRET00sIGVuZW15TGFuZGVkSGl0LCAxKTtcbiAgICB9IGVsc2UgaWYgKGVuZW15TGFuZGVkSGl0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGlmIChlbmVteUxhbmRlZEhpdC5zaGlwSGl0ICE9PSBmYWxzZSlcbiAgICAgICAgICAgIHBsYXllckFJLm1hcmtBdHRhY2soZW5lbXlMYW5kZWRIaXQpO1xuICAgICAgICBSZW5kZXIucGxheWVyQm9hcmRTaG90KHBsYXllci5ib2FyZERPTSwgZW5lbXlMYW5kZWRIaXQpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBvcHBvbmVudFJlY2lldmVBdHRhY2ssIHBsYXllclJlY2lldmVBdHRhY2sgfTtcbiIsImNsYXNzIFNoaXAge1xuICAgICNjb29yZHMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMuc2hpcCA9IHsgc2l6ZSwgaGl0czogMCwgc3VuazogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N1bmsoKSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwLmhpdHMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXAuaGl0cyA9PT0gdGhpcy5zaGlwLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhcHBlbmRDb29yZChjb29yZCkge1xuICAgICAgICBpZiAodGhpcy4jY29vcmRzLmxlbmd0aCA8IHRoaXMuc2hpcC5zaXplKSB0aGlzLiNjb29yZHMucHVzaChjb29yZCk7XG4gICAgICAgIGVsc2UgdGhyb3cgXCJUaGUgY29vcmRzIG9mIHRoZSBzaGlwIGFyZSBiZXlvbmQgdGhlIHNpemUgbGltaXQhXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY29vcmRzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgKi9cbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IFBsYXllckFJID0gcmVxdWlyZShcIi4vUGxheWVyQUlcIik7XG5jb25zdCBSZW5kZXIgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5jb25zdCBSdW5uZXJVdGlscyA9IHJlcXVpcmUoXCIuL1J1bm5lclV0aWxzXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnYW1lKCkge1xuICAgIC8vIGdhbWUgc2V0dXBcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyQUkgPSBuZXcgUGxheWVyQUkoKTtcbiAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZC1zcGFjZVwiKVxuICAgICAgICAuYXBwZW5kKHBsYXllci5ib2FyZERPTSwgcGxheWVyQUkuYm9hcmRET00pO1xuXG4gICAgLy8gR2VuZXJhdGUgdGhlIGZvb3RlciB0aGF0IHRoZSB1c2VyIHdpbGwgYmUgYWJsZSB1c2VcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuYXBwZW5kKFxuICAgICAgICBSZW5kZXIuZ2VuZXJhdGVCb3R0b21QaWVjZXModHJ1ZSksIC8vIHRydWUgZW5hYmxlcyBwbGF5ZXIgZHJhZ1xuICAgICAgICBSZW5kZXIuZ2VuZXJhdGVCb3R0b21QaWVjZXMoKVxuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgZHJhZyBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25zdCBhbGxVc2VyQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZT1cInRydWVcIicpO1xuXG4gICAgY29uc3QgZHJhZ0JhbmsgPSBbXTtcbiAgICBmb3IgKGJsb2NrIG9mIGFsbFVzZXJCbG9ja3MpIHtcbiAgICAgICAgZHJhZ0JhbmsucHVzaChSZW5kZXIubG9hZERyYWcoYmxvY2ssIHBsYXllcikpO1xuICAgIH1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChkcmFnQmFuayk7XG5cbiAgICAvLyBHYW1lIFJ1bm5lclxuICAgIHdoaWxlICghcGxheWVyLmJvYXJkLmhhc0xvc3QoKSAmJiAhcGxheWVyQUkuYm9hcmQuaGFzTG9zdCgpKSB7XG4gICAgICAgIGF3YWl0IFJ1bm5lclV0aWxzLm9wcG9uZW50UmVjaWV2ZUF0dGFjayhcbiAgICAgICAgICAgIGF3YWl0IFJlbmRlci5jb29yZGluYXRlQXR0YWNrKHBsYXllckFJLmJvYXJkRE9NKSxcbiAgICAgICAgICAgIHBsYXllckFJXG4gICAgICAgICk7XG4gICAgICAgIGlmICghcGxheWVyQUkuYm9hcmQuaGFzTG9zdCgpKVxuICAgICAgICAgICAgYXdhaXQgUnVubmVyVXRpbHMucGxheWVyUmVjaWV2ZUF0dGFjayhwbGF5ZXIsIHBsYXllckFJKTtcbiAgICB9XG4gICAgaWYgKHBsYXllckFJLmJvYXJkLmhhc0xvc3QoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIubmFtZX0gaGFzIHdvbiFgKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5oYXNMb3N0KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyQUkubmFtZX0gaGFzIHdvbiFgKTtcbiAgICB9IGVsc2UgdGhyb3cgXCJOb2JvZHkgd29uPz9cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXRpbGVcIikuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLWZpbmlzaGVkXCIpO1xuICAgIH0pO1xufVxuXG5nYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=