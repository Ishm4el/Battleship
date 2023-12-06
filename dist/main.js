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
    grid-template: 1fr 1fr 1fr;
}

#board-space {
    align-items: center;
    justify-content: space-around;
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
}

.board:last-child .board-tile:active {
    background-image: radial-gradient(rgb(183, 0, 0), rgb(0, 0, 0));
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;;;IAII,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb;;;;;KAKC;IACD,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;;IAKI,UAAU;IACV,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI;;;;;;KAMC;AACL;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,+DAA+D;AACnE;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sDAAsD;AAC1D","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\n#board-space,\n.board,\n.board-row,\n.board-tile {\n    display: flex;\n    position: relative;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background-image: linear-gradient(\n        60deg,\n        rgb(0, 0, 105),\n        rgb(0, 0, 114),\n        darkblue\n    );\n    display: grid;\n    grid-template: 1fr 1fr 1fr;\n}\n\n#board-space {\n    align-items: center;\n    justify-content: space-around;\n}\n\n.board {\n    flex-direction: column;\n}\n\n.board-tile,\n.board-tile-shot,\n.board-tile-ship,\n.board-tile-ship-shot,\n.board-tile-finished {\n    width: 4vw;\n    height: 4vw;\n    border: 1px white solid;\n}\n\n.board-tile {\n    background-image: linear-gradient(\n        20deg,\n        black,\n        rgb(65, 65, 65),\n        black,\n        rgb(65, 65, 65)\n    );\n}\n\n.board:last-child .board-tile:hover {\n    background-image: radial-gradient(black, darkred);\n}\n\n.board:last-child .board-tile:active {\n    background-image: radial-gradient(rgb(183, 0, 0), rgb(0, 0, 0));\n}\n\n.board-tile-finished {\n    background-image: linear-gradient(blue, darkblue);\n}\n\n.board-tile-shot {\n    background-image: radial-gradient(red, black);\n}\n\n.board-tile-ship {\n    background-color: gray;\n}\n\n.board-tile-ship-shot {\n    background-image: repeating-radial-gradient(gray, red);\n}\n"],"sourceRoot":""}]);
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
                if (this.#validatePlacement(directionRoll, id, y, x)) {
                    this.placeShip(directionRoll, id, y, x);
                    tillValid = false;
                }
            } else if (directionRoll === 1) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(
                    Math.random() * (11 - this.ships[id].ship.size)
                );
                if (this.#validatePlacement(directionRoll, id, y, x)) {
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

    #validatePlacement(direction, id, y, x) {
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

async function game() {
    const player = new Player();
    player.board.presetPlaceShips(0);
    const playerAI = new PlayerAI();
    player.boardDOM = generateBoard();
    playerAI.boardDOM = generateBoard();
    player.board.ships.forEach((ship) => {
        addShip(player.boardDOM, ship.getCoords());
    });
    const boardSpace = document.getElementById("board-space");
    boardSpace.appendChild(player.boardDOM);
    boardSpace.appendChild(playerAI.boardDOM);
    while (!player.board.hasLost() && !playerAI.board.hasLost()) {
        const playerShoot = await coordinateAttack(playerAI.boardDOM);
        const boardReact = playerAI.board.recieveAttack(playerShoot);
        if (boardReact instanceof Array) {
            boardReact.forEach((coord) => {
                shipHit(playerAI.boardDOM, coord);
            });
        } else if (boardReact instanceof Object)
            shipHit(playerAI.boardDOM, boardReact);

        let enemyLandedHit = null;
        let aiCoordinatedAttack = null;
        while (enemyLandedHit === null) {
            aiCoordinatedAttack = playerAI.generateAttack();
            enemyLandedHit = player.board.recieveAttack(aiCoordinatedAttack);
        }
        if (enemyLandedHit instanceof Array) {
            playerAI.flushMarks(enemyLandedHit);
            flushShip(player.boardDOM, enemyLandedHit);
        } else if (enemyLandedHit instanceof Object) {
            playerAI.markAttack(enemyLandedHit);
            playerBoardShot(player.boardDOM, enemyLandedHit);
        } else {
            playerBoardShot(player.boardDOM, aiCoordinatedAttack);
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

const body = document.getElementsByTagName("body")[0];
game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEMsTUFBTTtBQUNOLHVCQUF1QixlQUFlO0FBQ3RDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXJBSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbiNib2FyZC1zcGFjZSxcbi5ib2FyZCxcbi5ib2FyZC1yb3csXG4uYm9hcmQtdGlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJvZHkge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgNjBkZWcsXG4gICAgICAgIHJnYigwLCAwLCAxMDUpLFxuICAgICAgICByZ2IoMCwgMCwgMTE0KSxcbiAgICAgICAgZGFya2JsdWVcbiAgICApO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnI7XG59XG5cbiNib2FyZC1zcGFjZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmJvYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm9hcmQtdGlsZSxcbi5ib2FyZC10aWxlLXNob3QsXG4uYm9hcmQtdGlsZS1zaGlwLFxuLmJvYXJkLXRpbGUtc2hpcC1zaG90LFxuLmJvYXJkLXRpbGUtZmluaXNoZWQge1xuICAgIHdpZHRoOiA0dnc7XG4gICAgaGVpZ2h0OiA0dnc7XG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XG59XG5cbi5ib2FyZC10aWxlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDIwZGVnLFxuICAgICAgICBibGFjayxcbiAgICAgICAgcmdiKDY1LCA2NSwgNjUpLFxuICAgICAgICBibGFjayxcbiAgICAgICAgcmdiKDY1LCA2NSwgNjUpXG4gICAgKTtcbn1cblxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChibGFjaywgZGFya3JlZCk7XG59XG5cbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYigxODMsIDAsIDApLCByZ2IoMCwgMCwgMCkpO1xufVxuXG4uYm9hcmQtdGlsZS1maW5pc2hlZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsdWUsIGRhcmtibHVlKTtcbn1cblxuLmJvYXJkLXRpbGUtc2hvdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJlZCwgYmxhY2spO1xufVxuXG4uYm9hcmQtdGlsZS1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uYm9hcmQtdGlsZS1zaGlwLXNob3Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoZ3JheSwgcmVkKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYjs7Ozs7S0FLQztJQUNELGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7OztJQUtJLFVBQVU7SUFDVixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7Ozs7OztLQU1DO0FBQ0w7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSwrREFBK0Q7QUFDbkU7O0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2JvYXJkLXNwYWNlLFxcbi5ib2FyZCxcXG4uYm9hcmQtcm93LFxcbi5ib2FyZC10aWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICA2MGRlZyxcXG4gICAgICAgIHJnYigwLCAwLCAxMDUpLFxcbiAgICAgICAgcmdiKDAsIDAsIDExNCksXFxuICAgICAgICBkYXJrYmx1ZVxcbiAgICApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI2JvYXJkLXNwYWNlIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ib2FyZC10aWxlLFxcbi5ib2FyZC10aWxlLXNob3QsXFxuLmJvYXJkLXRpbGUtc2hpcCxcXG4uYm9hcmQtdGlsZS1zaGlwLXNob3QsXFxuLmJvYXJkLXRpbGUtZmluaXNoZWQge1xcbiAgICB3aWR0aDogNHZ3O1xcbiAgICBoZWlnaHQ6IDR2dztcXG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XFxufVxcblxcbi5ib2FyZC10aWxlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMjBkZWcsXFxuICAgICAgICBibGFjayxcXG4gICAgICAgIHJnYig2NSwgNjUsIDY1KSxcXG4gICAgICAgIGJsYWNrLFxcbiAgICAgICAgcmdiKDY1LCA2NSwgNjUpXFxuICAgICk7XFxufVxcblxcbi5ib2FyZDpsYXN0LWNoaWxkIC5ib2FyZC10aWxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGJsYWNrLCBkYXJrcmVkKTtcXG59XFxuXFxuLmJvYXJkOmxhc3QtY2hpbGQgLmJvYXJkLXRpbGU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYigxODMsIDAsIDApLCByZ2IoMCwgMCwgMCkpO1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1maW5pc2hlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibHVlLCBkYXJrYmx1ZSk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmVkLCBibGFjayk7XFxufVxcblxcbi5ib2FyZC10aWxlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYm9hcmQtdGlsZS1zaGlwLXNob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KGdyYXksIHJlZCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZShcIi4vU2hpcFwiKTtcbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgLy8gQmF0dGxlc2hpcCBoYXMgYSAxMCB4IDEwIGJvYXJkLlxuICAgICNCT0FSRFNJWkUgPSAxMDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY29uc3RydWN0IHRoZSBib2FyZC5cbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0JPQVJEU0laRTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNCT0FSRFNJWkU7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcCgyKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoMyksXG4gICAgICAgICAgICBuZXcgU2hpcCg0KSxcbiAgICAgICAgICAgIG5ldyBTaGlwKDUpLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEZvciB0ZXN0IHVzYWdlIC0gd2lsbCBwb3B1bGF0ZSB0aGUgc2hpcHMgb24gdGhlIGJvYXJkLlxuICAgICAgICAvLyB0aGlzLiNwcmVzZXRQbGFjZVNoaXBzKDApO1xuICAgICAgICAvLyByYW5kb21seSBwb3B1bGF0ZSB0aGUgYm9hcmQgd2l0aCB0aGUgc2hpcHNcbiAgICB9XG5cbiAgICByYW5kb21seVBsYWNlQWxsU2hpcCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy4jZ2VuZXJhdGVTaGlwUGxhY2VtZW50KGkpO1xuICAgIH1cblxuICAgICNnZW5lcmF0ZVNoaXBQbGFjZW1lbnQoaWQpIHtcbiAgICAgICAgbGV0IHRpbGxWYWxpZCA9IHRydWU7XG4gICAgICAgIHdoaWxlICh0aWxsVmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvblJvbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25Sb2xsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAoMTEgLSB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiN2YWxpZGF0ZVBsYWNlbWVudChkaXJlY3Rpb25Sb2xsLCBpZCwgeSwgeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAoZGlyZWN0aW9uUm9sbCwgaWQsIHksIHgpO1xuICAgICAgICAgICAgICAgICAgICB0aWxsVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvblJvbGwgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogKDExIC0gdGhpcy5zaGlwc1tpZF0uc2hpcC5zaXplKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI3ZhbGlkYXRlUGxhY2VtZW50KGRpcmVjdGlvblJvbGwsIGlkLCB5LCB4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb25Sb2xsLCBpZCwgeSwgeCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGxWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcChkaXJlY3Rpb24sIGlkLCB5LCB4KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gMFxuICAgICAgICAgICAgPyB0aGlzLiNwbGFjZVNoaXBIb3Jpem9udGFsKGlkLCB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUsIHksIHgpXG4gICAgICAgICAgICA6IHRoaXMuI3BsYWNlU2hpcFZlcnRpY2FsKGlkLCB0aGlzLnNoaXBzW2lkXS5zaGlwLnNpemUsIHksIHgpO1xuICAgIH1cblxuICAgICNwbGFjZVNoaXBIb3Jpem9udGFsKGlkLCBzaXplLCB5LCB4KSB7XG4gICAgICAgIHRoaXMuI3ZhbGlkYXRlSW5pdGlhbFBvc2l0aW9uKDAsIHNpemUsIHksIHgpO1xuICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1baV0gPSBpZDtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbaWRdLmFwcGVuZENvb3JkKHsgeTogeSwgeDogaSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNwbGFjZVNoaXBWZXJ0aWNhbChpZCwgc2l6ZSwgeSwgeCkge1xuICAgICAgICB0aGlzLiN2YWxpZGF0ZUluaXRpYWxQb3NpdGlvbigxLCBzaXplLCB5LCB4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldW3hdID0gaWQ7XG4gICAgICAgICAgICB0aGlzLnNoaXBzW2lkXS5hcHBlbmRDb29yZCh7IHk6IGksIHg6IHggfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVzZXRQbGFjZVNoaXBzKGRpcmVjdGlvbikge1xuICAgICAgICAvL2ZvciB4IGRpcmVjdGlvbmFsIHBsYWNlbWVudFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHRoaXMucGxhY2VTaGlwKGRpcmVjdGlvbiwgaSwgaSwgMCk7XG4gICAgICAgIC8vIGZvciB5IGRpcmVjdGlvbmFsIHBsYWNlbWVudFxuICAgICAgICBlbHNlIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB0aGlzLnBsYWNlU2hpcChkaXJlY3Rpb24sIGksIDAsIGkpO1xuICAgIH1cblxuICAgICN2YWxpZGF0ZUluaXRpYWxQb3NpdGlvbihkaXJlY3Rpb24sIHNpemUsIHksIHgpIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBpbml0aWFsIHBvc2l0aW9ucyBmb3IgeCBhbmQgeSBhcmUgdmFsaWQuXG4gICAgICAgIGlmICh5ID4gOSB8fCB5IDwgMCkgdGhyb3cgXCJZIGlzIG91dCBvZiBib3VuZHNcIjtcbiAgICAgICAgZWxzZSBpZiAoeCA+IDkgfHwgeCA8IDApIHRocm93IFwiWCBpcyBvdXQgb2YgYm91bmRzXCI7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBzaGlwIHdpbGwgZml0IGluIHRoZSBhc3NpZ25lZCBwb3NpdGlvblxuICAgICAgICAvLyBjYXNlIDAgLSB2YWxpZGF0ZXMgdGhlIHggZGlyZWN0aW9uXG4gICAgICAgIC8vIGNhc2UgMSAtIHZhbGlkYXRlcyB0aGUgeSBkaXJlY3Rpb25cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoeCArIHNpemUgLSAxID4gOSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJbml0aWFsaXppbmcgdGhlIHNoaXAgYXQgdGhpcyAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIikgcG9zaXRpb24gd291bGQgZ28gb3V0IG9mIGJvdW5kcyFcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICh5ICsgc2l6ZSAtIDEgPiA5KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkluaXRpYWxpemluZyB0aGUgc2hpcCBhdCB0aGlzIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSBwb3NpdGlvbiB3b3VsZCBnbyBvdXQgb2YgYm91bmRzIVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IChcbiAgICAgICAgICAgICAgICAgICAgXCJUaGUgZGlyZWN0aW9uIChcIiArXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiArXG4gICAgICAgICAgICAgICAgICAgIFwiKSBoYXMgbm90IGJlZW4gYXJndWVkIGNvcnJlY3RseVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICN2YWxpZGF0ZVBsYWNlbWVudChkaXJlY3Rpb24sIGlkLCB5LCB4KSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHRoaXMuc2hpcHNbaWRdLnNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiN2YWxpZGF0ZVBsYWNlbWVudFRpbGUoeSwgaSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHRoaXMuc2hpcHNbaWRdLnNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiN2YWxpZGF0ZVBsYWNlbWVudFRpbGUoaSwgeCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjdmFsaWRhdGVQbGFjZW1lbnRUaWxlKHksIHgpIHtcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHBsYWNlbWVudCBjb25mbGljdHNcbiAgICAgICAgaWYgKHkgPiA5IHx8IHkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYgKHggPiA5IHx8IHggPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYm9hcmRbeV1beF0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyByZWFjdCB0byBhdHRhY2sgYXQgY29vcmRpbmF0ZSAneScgYW5kICd4Jy5cbiAgICByZWNpZXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIGNvb3JkLnkgPSBOdW1iZXIoY29vcmQueSk7XG4gICAgICAgIGNvb3JkLnggPSBOdW1iZXIoY29vcmQueCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uSUQgPSB0aGlzLmJvYXJkW2Nvb3JkLnldW2Nvb3JkLnhdO1xuICAgICAgICBpZiAocG9zaXRpb25JRCAhPT0gbnVsbCAmJiBwb3NpdGlvbklEICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc1twb3NpdGlvbklEXS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbY29vcmQueV1bY29vcmQueF0gPSAtMTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaGlwc1twb3NpdGlvbklEXS5pc1N1bmsoKSkgcmV0dXJuIGNvb3JkO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5zaGlwc1twb3NpdGlvbklEXS5nZXRDb29yZHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbklEID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2Nvb3JkLnldW2Nvb3JkLnhdID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoY29vcmQuc21hcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwXG4gICAgICAgICAgICAgICAgPyBjb29yZC55ID09PSA5XG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5yZWNpZXZlQXR0YWNrKHsgeTogMCwgeDogY29vcmQueCB9KVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMucmVjaWV2ZUF0dGFjayh7IHk6IGNvb3JkLnkgKyAxLCB4OiBjb29yZC54IH0pXG4gICAgICAgICAgICAgICAgOiBjb29yZC54ID09PSA5XG4gICAgICAgICAgICAgICAgPyB0aGlzLnJlY2lldmVBdHRhY2soeyB5OiBjb29yZC55LCB4OiAwIH0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLnJlY2lldmVBdHRhY2soeyB5OiBjb29yZC55LCB4OiBjb29yZC54ICsgMSB9KTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhc0xvc3QoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpbnRCb2FyZCgpIHtcbiAgICAgICAgbGV0IHRvcHJpbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0JPQVJEU0laRTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0JPQVJEU0laRTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdG9wcmludCArPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID09PSBudWxsID8gXCJuXFx0XCIgOiB0aGlzLmJvYXJkW2ldW2pdICsgXCJcXHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvcHJpbnQgKz0gXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9wcmludDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tZmFsbHRocm91Z2ggKi9cbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoXCIuL0dhbWVib2FyZFwiKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lID0gXCJQbGF5ZXJcIikge1xuICAgICAgICB0aGlzLm5hbWUgPSBwbGF5ZXJOYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCAqL1xuY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vUGxheWVyXCIpO1xuY2xhc3MgUGxheWVyQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAgICNEZXRlY3RlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJDUFUtQUlcIik7XG4gICAgICAgIHRoaXMuYm9hcmQucmFuZG9tbHlQbGFjZUFsbFNoaXAoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLiNEZXRlY3RlZEF0dGFja3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgICAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzbWFydEF0dGFjayA9IHRoaXMuI3NtYXJ0R2VuZXJhdGVBdHRhY2soXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gc21hcnRBdHRhY2sgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gdGhpcy4jc21hcnRHZW5lcmF0ZUF0dGFjaygwKVxuICAgICAgICAgICAgICAgIDogc21hcnRBdHRhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjc21hcnRHZW5lcmF0ZUF0dGFjayhwb3NpdGlvbikge1xuICAgICAgICBjb25zdCBsYXN0SGl0ID1cbiAgICAgICAgICAgIHRoaXMuI0RldGVjdGVkQXR0YWNrc1tcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLiNEZXRlY3RlZEF0dGFja3MubGVuZ3RoKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChsYXN0SGl0LnkgIT09IDkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBsYXN0SGl0LnkgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogbGFzdEhpdC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RIaXQueSAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxhc3RIaXQueSAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LngsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAobGFzdEhpdC54ICE9PSA5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogbGFzdEhpdC55LFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogbGFzdEhpdC54ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYXJ0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmIChsYXN0SGl0LnggIT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBsYXN0SGl0LnksXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBsYXN0SGl0LnggLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIHRoaXMuI0RldGVjdGVkQXR0YWNrcy5wdXNoKGNvb3JkKTtcbiAgICB9XG5cbiAgICBmbHVzaE1hcmtzKHN1bmtlZFNoaXApIHtcbiAgICAgICAgdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzID0gdGhpcy4jRGV0ZWN0ZWRBdHRhY2tzLmZpbHRlcigoY29vcmQpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vua2VkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY29vcmQueCA9PT0gc3Vua2VkU2hpcFtpXS54ICYmXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkLnkgPT09IHN1bmtlZFNoaXBbaV0ueVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzdW5rZWRTaGlwLnNsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJBSTtcbiIsImNsYXNzIFNoaXAge1xuICAgICNjb29yZHMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XG4gICAgICAgIHRoaXMuc2hpcCA9IHsgc2l6ZSwgaGl0czogMCwgc3VuazogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N1bmsoKSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwLmhpdHMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXAuaGl0cyA9PT0gdGhpcy5zaGlwLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhcHBlbmRDb29yZChjb29yZCkge1xuICAgICAgICBpZiAodGhpcy4jY29vcmRzLmxlbmd0aCA8IHRoaXMuc2hpcC5zaXplKSB0aGlzLiNjb29yZHMucHVzaChjb29yZCk7XG4gICAgICAgIGVsc2UgdGhyb3cgXCJUaGUgY29vcmRzIG9mIHRoZSBzaGlwIGFyZSBiZXlvbmQgdGhlIHNpemUgbGltaXQhXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY29vcmRzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgKi9cbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IFBsYXllckFJID0gcmVxdWlyZShcIi4vUGxheWVyQUlcIik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1yb3dcIik7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGlsZVwiKTtcbiAgICAgICAgICAgIHJvdy5kYXRhc2V0LmNvbHVtbiA9IGk7XG4gICAgICAgICAgICByb3cuZGF0YXNldC5yb3cgPSBqO1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG5mdW5jdGlvbiBhZGRTaGlwKGJvYXJkLCBzaGlwKSB7XG4gICAgc2hpcC5mb3JFYWNoKGZ1bmN0aW9uIGZpbGxUaWxlKGNvb3JkKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7Y29vcmQueX1cIl1bZGF0YS1yb3c9XCIke2Nvb3JkLnh9XCJdYFxuICAgICAgICApO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXBcIik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBsYXllckJvYXJkU2hvdChib2FyZCwgY29vcmQpIHtcbiAgICBjb25zdCB0aWxlID0gYm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWNvbHVtbj1cIiR7Y29vcmQueX1cIl1bZGF0YS1yb3c9XCIke2Nvb3JkLnh9XCJdYFxuICAgICk7XG5cbiAgICBpZiAodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJib2FyZC10aWxlLXNoaXBcIikpIHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaGlwXCIpO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXAtc2hvdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNob3RcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaGlwSGl0KGJvYXJkLCBjb29yZCkge1xuICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtY29sdW1uPVwiJHtjb29yZC55fVwiXVtkYXRhLXJvdz1cIiR7Y29vcmQueH1cIl1gXG4gICAgKTtcblxuICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGUtc2hpcFwiKTtcbiAgICB0aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXAtc2hvdFwiKTtcbn1cblxuZnVuY3Rpb24gZmx1c2hTaGlwKGJvYXJkLCBhcikge1xuICAgIGFyLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIHBsYXllckJvYXJkU2hvdChib2FyZCwgY29vcmQpO1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb29yZGluYXRlQXR0YWNrKGJvYXJkKSB7XG4gICAgbGV0IGNvb3JkO1xuICAgIGNvbnN0IHRpbGVzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC10aWxlXCIpO1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKG15UmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aWxlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZVwiKTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNob3RcIik7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmQtdGlsZS1zaGlwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImJvYXJkLXRpbGUtc2hpcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9hcmQtdGlsZS1zaG90XCIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLXNoaXAtc2hvdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlsZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlcGxhY2VXaXRoKG5vZGUuY2xvbmVOb2RlKGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXlSZXNvbHZlKHsgeTogbm9kZS5kYXRhc2V0LmNvbHVtbiwgeDogbm9kZS5kYXRhc2V0LnJvdyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb29yZCA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBjb29yZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2FtZSgpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgcGxheWVyLmJvYXJkLnByZXNldFBsYWNlU2hpcHMoMCk7XG4gICAgY29uc3QgcGxheWVyQUkgPSBuZXcgUGxheWVyQUkoKTtcbiAgICBwbGF5ZXIuYm9hcmRET00gPSBnZW5lcmF0ZUJvYXJkKCk7XG4gICAgcGxheWVyQUkuYm9hcmRET00gPSBnZW5lcmF0ZUJvYXJkKCk7XG4gICAgcGxheWVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgYWRkU2hpcChwbGF5ZXIuYm9hcmRET00sIHNoaXAuZ2V0Q29vcmRzKCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGJvYXJkU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkLXNwYWNlXCIpO1xuICAgIGJvYXJkU3BhY2UuYXBwZW5kQ2hpbGQocGxheWVyLmJvYXJkRE9NKTtcbiAgICBib2FyZFNwYWNlLmFwcGVuZENoaWxkKHBsYXllckFJLmJvYXJkRE9NKTtcbiAgICB3aGlsZSAoIXBsYXllci5ib2FyZC5oYXNMb3N0KCkgJiYgIXBsYXllckFJLmJvYXJkLmhhc0xvc3QoKSkge1xuICAgICAgICBjb25zdCBwbGF5ZXJTaG9vdCA9IGF3YWl0IGNvb3JkaW5hdGVBdHRhY2socGxheWVyQUkuYm9hcmRET00pO1xuICAgICAgICBjb25zdCBib2FyZFJlYWN0ID0gcGxheWVyQUkuYm9hcmQucmVjaWV2ZUF0dGFjayhwbGF5ZXJTaG9vdCk7XG4gICAgICAgIGlmIChib2FyZFJlYWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGJvYXJkUmVhY3QuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwSGl0KHBsYXllckFJLmJvYXJkRE9NLCBjb29yZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFJlYWN0IGluc3RhbmNlb2YgT2JqZWN0KVxuICAgICAgICAgICAgc2hpcEhpdChwbGF5ZXJBSS5ib2FyZERPTSwgYm9hcmRSZWFjdCk7XG5cbiAgICAgICAgbGV0IGVuZW15TGFuZGVkSGl0ID0gbnVsbDtcbiAgICAgICAgbGV0IGFpQ29vcmRpbmF0ZWRBdHRhY2sgPSBudWxsO1xuICAgICAgICB3aGlsZSAoZW5lbXlMYW5kZWRIaXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGFpQ29vcmRpbmF0ZWRBdHRhY2sgPSBwbGF5ZXJBSS5nZW5lcmF0ZUF0dGFjaygpO1xuICAgICAgICAgICAgZW5lbXlMYW5kZWRIaXQgPSBwbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhhaUNvb3JkaW5hdGVkQXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5lbXlMYW5kZWRIaXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcGxheWVyQUkuZmx1c2hNYXJrcyhlbmVteUxhbmRlZEhpdCk7XG4gICAgICAgICAgICBmbHVzaFNoaXAocGxheWVyLmJvYXJkRE9NLCBlbmVteUxhbmRlZEhpdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZW5lbXlMYW5kZWRIaXQgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHBsYXllckFJLm1hcmtBdHRhY2soZW5lbXlMYW5kZWRIaXQpO1xuICAgICAgICAgICAgcGxheWVyQm9hcmRTaG90KHBsYXllci5ib2FyZERPTSwgZW5lbXlMYW5kZWRIaXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyQm9hcmRTaG90KHBsYXllci5ib2FyZERPTSwgYWlDb29yZGluYXRlZEF0dGFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBsYXllckFJLmJvYXJkLmhhc0xvc3QoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIubmFtZX0gaGFzIHdvbiFgKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZC5oYXNMb3N0KCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyQUkubmFtZX0gaGFzIHdvbiFgKTtcbiAgICB9IGVsc2UgdGhyb3cgXCJOb2JvZHkgd29uPz9cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXRpbGVcIikuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJib2FyZC10aWxlXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aWxlLWZpbmlzaGVkXCIpO1xuICAgIH0pO1xufVxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuZ2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9