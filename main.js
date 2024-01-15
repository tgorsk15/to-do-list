/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/projectBar.css":
/*!**********************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/projectBar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

/* styling for ProjectBar */

.projects-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    grid-row: 2;
    grid-column: 1 / 2;
}

.task-form-container {
    display: none;
}

.task-form-container-active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    min-height: 430px;
    width: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    border: 2px solid black;
    border-radius: 25px;
}

#task-title, #description, #due-date,
#importance {
    margin-bottom: 20px;
    min-width: 295px;
    font-size: 19px;
}

#task-form > label {
    display: block;
    min-width: 295px;
    font-size: 20px;
}

.submit-task {
    /* align-content: center; */
    margin-left: 82px;
    margin-top: 20px;
    width: 100px;
    height: 35px;
    font-size: 18px;
}



.project-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
}

.project-title {
    overflow: hidden;
    /* white-space: nowrap;
    text-overflow: ellipsis; */
    margin-bottom: 10px;
}

.add-task-button {
    height: 25px;
    width: 25px;
    background-color: blanchedalmond;
    border: none;
    color: black;
    border-radius: 50%;
    margin-left: 35px;
    margin-bottom: 15px;
}

.task-title-container {
    margin-bottom: 8px;
    margin-left: 35px;
}`, "",{"version":3,"sources":["webpack://./src/projectBar.css"],"names":[],"mappings":";;AAEA,2BAA2B;;AAE3B;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB;8BAC0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["\n\n/* styling for ProjectBar */\n\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    grid-row: 2;\n    grid-column: 1 / 2;\n}\n\n.task-form-container {\n    display: none;\n}\n\n.task-form-container-active {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    min-height: 430px;\n    width: 300px;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 30px;\n    border: 2px solid black;\n    border-radius: 25px;\n}\n\n#task-title, #description, #due-date,\n#importance {\n    margin-bottom: 20px;\n    min-width: 295px;\n    font-size: 19px;\n}\n\n#task-form > label {\n    display: block;\n    min-width: 295px;\n    font-size: 20px;\n}\n\n.submit-task {\n    /* align-content: center; */\n    margin-left: 82px;\n    margin-top: 20px;\n    width: 100px;\n    height: 35px;\n    font-size: 18px;\n}\n\n\n\n.project-cont {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: start;\n}\n\n.project-title {\n    overflow: hidden;\n    /* white-space: nowrap;\n    text-overflow: ellipsis; */\n    margin-bottom: 10px;\n}\n\n.add-task-button {\n    height: 25px;\n    width: 25px;\n    background-color: blanchedalmond;\n    border: none;\n    color: black;\n    border-radius: 50%;\n    margin-left: 35px;\n    margin-bottom: 15px;\n}\n\n.task-title-container {\n    margin-bottom: 8px;\n    margin-left: 35px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/to-do.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/to-do.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    background-color: red;
    min-height: 100%;
    min-width: 100%;
}

body {
    min-height: 100vh;
    min-width: 100vh;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 4.5fr;
    grid-template-rows: 120px 7fr;
}

.header {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
}


.main-breakout-container {
    grid-row: 2;
    grid-column: 2 / 3;
}

.create-task-button {
    height: 40px;
    width: 100px;
}

.main-breakout-container > div {
    display: none;
    height: 320px;
    background-color: bisque;
    margin-bottom: 25px;
}


.task-article {
    display: grid;
    grid-template-columns: 3.2fr 1fr;
    min-height: 12vh;
    width: 125vh;
    padding: 12px 20px;
    background-color: lightgreen;
    margin-bottom: 25px;
}


.taskDrop-container {
    display: none;
    background-color: beige;
    grid-column: 1 / 3;
    /* max-height: 4vh;
    width: 100vh; */
    transition: all 0.3 ease;
}

.taskDrop-container-active {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    min-height: 6vh;
    max-width: 110vh;
    grid-column: 1 / 3;
    grid-row: 2;
    background-color: beige;
    transition: all 0.3 ease;
    padding: 5px 0px;
    padding-left: 20px;
}

.task-space1 {
    grid-column: 1;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
}

.task-space2 {
    grid-column: 2;
    display: grid;
    grid-template-rows: 1fr 1.5fr;
    justify-content: end;
}

.task-title2 {
    margin: 3px;
}

.description2 {
    padding: 10px 10px;
}


.task-space2-row1 {
    display: flex;
    justify-content: space-between;
    grid-row: 1;
    justify-self: stretch;
}

.due-date2 {
    padding-right: 25px;
}

.delete-task {
    background-color: brown;
    color: white;
    font-weight: bold;
    min-width: 50px;
    height: 46px;
    justify-self: end;
}


.priority-bar {
    grid-row: 2;
    grid-column: 1/ 3;
    display: flex;
    justify-content: start;
    align-items: center;
}

.priority-title {
    grid-column: 1;
    grid-row: 1;
}

.priority-button {
    margin-right: 20px;
}

.complete-task-button {
    grid-row: 1 / 3;
    grid-column: 2;
    align-self: center;
    justify-self: end;
    margin-right: 75px;
    height: 30px;
    width: 75px;
    background-color: lightseagreen;
    color: white;
    font-weight: bold;
    text-align: center;
}

.drop-down-task {
    transform: rotate(180deg);
    background-color: white;
    border-radius: 50%;
    height: 22px;
    width: 22px;
    margin-right: 10px;
    margin-bottom: 10px;
    justify-self: end;
    align-self: end;
    font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/to-do.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,gCAAgC;IAChC,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB;mBACe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;;AAGA;IACI,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB","sourcesContent":["html {\n    background-color: red;\n    min-height: 100%;\n    min-width: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    min-width: 100vh;\n    display: grid;\n    position: relative;\n    grid-template-columns: 1fr 4.5fr;\n    grid-template-rows: 120px 7fr;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n}\n\n\n.main-breakout-container {\n    grid-row: 2;\n    grid-column: 2 / 3;\n}\n\n.create-task-button {\n    height: 40px;\n    width: 100px;\n}\n\n.main-breakout-container > div {\n    display: none;\n    height: 320px;\n    background-color: bisque;\n    margin-bottom: 25px;\n}\n\n\n.task-article {\n    display: grid;\n    grid-template-columns: 3.2fr 1fr;\n    min-height: 12vh;\n    width: 125vh;\n    padding: 12px 20px;\n    background-color: lightgreen;\n    margin-bottom: 25px;\n}\n\n\n.taskDrop-container {\n    display: none;\n    background-color: beige;\n    grid-column: 1 / 3;\n    /* max-height: 4vh;\n    width: 100vh; */\n    transition: all 0.3 ease;\n}\n\n.taskDrop-container-active {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 6vh;\n    max-width: 110vh;\n    grid-column: 1 / 3;\n    grid-row: 2;\n    background-color: beige;\n    transition: all 0.3 ease;\n    padding: 5px 0px;\n    padding-left: 20px;\n}\n\n.task-space1 {\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1.5fr;\n}\n\n.task-space2 {\n    grid-column: 2;\n    display: grid;\n    grid-template-rows: 1fr 1.5fr;\n    justify-content: end;\n}\n\n.task-title2 {\n    margin: 3px;\n}\n\n.description2 {\n    padding: 10px 10px;\n}\n\n\n.task-space2-row1 {\n    display: flex;\n    justify-content: space-between;\n    grid-row: 1;\n    justify-self: stretch;\n}\n\n.due-date2 {\n    padding-right: 25px;\n}\n\n.delete-task {\n    background-color: brown;\n    color: white;\n    font-weight: bold;\n    min-width: 50px;\n    height: 46px;\n    justify-self: end;\n}\n\n\n.priority-bar {\n    grid-row: 2;\n    grid-column: 1/ 3;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n.priority-title {\n    grid-column: 1;\n    grid-row: 1;\n}\n\n.priority-button {\n    margin-right: 20px;\n}\n\n.complete-task-button {\n    grid-row: 1 / 3;\n    grid-column: 2;\n    align-self: center;\n    justify-self: end;\n    margin-right: 75px;\n    height: 30px;\n    width: 75px;\n    background-color: lightseagreen;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n}\n\n.drop-down-task {\n    transform: rotate(180deg);\n    background-color: white;\n    border-radius: 50%;\n    height: 22px;\n    width: 22px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    justify-self: end;\n    align-self: end;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



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

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {



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

/***/ "./src/projectBar.css":
/*!****************************!*\
  !*** ./src/projectBar.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./projectBar.css */ "../../node_modules/css-loader/dist/cjs.js!./src/projectBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/to-do.css":
/*!***********************!*\
  !*** ./src/to-do.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./to-do.css */ "../../node_modules/css-loader/dist/cjs.js!./src/to-do.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {



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

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {



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

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {



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

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {



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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainBreakoutContainer: () => (/* binding */ MainBreakoutContainer),
/* harmony export */   contentContainer: () => (/* binding */ contentContainer),
/* harmony export */   pageLoad: () => (/* binding */ pageLoad),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   projectsContainer: () => (/* binding */ projectsContainer),
/* harmony export */   tasks: () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _to_do_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do.css */ "./src/to-do.css");
/* harmony import */ var _projectBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectBar.css */ "./src/projectBar.css");
/* harmony import */ var _objectCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectCreator */ "./src/objectCreator.js");
/* harmony import */ var _userform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userform */ "./src/userform.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./src/object.js");
/* harmony import */ var _projectModification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectModification */ "./src/projectModification.js");








// objectCreator.js: fiile that contains the logic that creates
// new task article cards under each project

// object.js contains the Task class is used to generate new instances
// when a new task is generated

// structure.js: file that lays out the foundational references
// and links of the to-do structure

// userform.js: handles the logic of what happens when the user
// fills out a form to create a new project or task

// taskModification.js: handles the logic to display changes
// on broswer when tasks are being built or are deleted
const contentContainer = document.querySelector('.content-container');
const projectsContainer = document.querySelector('.projects-container');
const MainBreakoutContainer = document.querySelector('.main-breakout-container');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(tasks)

let projects = JSON.parse(localStorage.getItem('projects')) || [];

let pageLoad = true;

window.addEventListener('load', () => {
    // const initialRun = breakoutController();
    // let pageLoad = true;

    projects.forEach(project => {
        (0,_objectCreator__WEBPACK_IMPORTED_MODULE_2__.createProject)(project);
    })

    console.log(_projectModification__WEBPACK_IMPORTED_MODULE_5__.correctBreakoutInstance);
    console.log(tasks);

    tasks.forEach(task => {
        (0,_objectCreator__WEBPACK_IMPORTED_MODULE_2__.createTask)(task);
    })

    pageLoad = false;

});




(0,_userform__WEBPACK_IMPORTED_MODULE_3__.linkForm)(tasks);


const createProjectButton = document.querySelector('.create-project-button');
createProjectButton.addEventListener('click', () => {

    const project = new _object__WEBPACK_IMPORTED_MODULE_4__.Project('New Project');
    projects.push(project);
    console.log(projects);
    localStorage.setItem('projects', JSON.stringify(projects));

    (0,_objectCreator__WEBPACK_IMPORTED_MODULE_2__.createProject)(project);
    console.log('creation tirggered');
    

    createProjectButton.removeEventListener;
})








/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });


class Task {
    constructor (name, description, dueDate, importance, assignedProject) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.importance = importance;
        this.assignedProject = assignedProject

    }
};



class Project {
    constructor (name) {
        this.name = name;
    }
};

/***/ }),

/***/ "./src/objectCreator.js":
/*!******************************!*\
  !*** ./src/objectCreator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   articleFactory: () => (/* binding */ articleFactory),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _userform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userform.js */ "./src/userform.js");
/* harmony import */ var _taskModification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskModification.js */ "./src/taskModification.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _projectModification_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectModification.js */ "./src/projectModification.js");
// import { Task  } from "./object.js";






const projectRun = (0,_projectModification_js__WEBPACK_IMPORTED_MODULE_3__.projectController)();

// let projectIndexArray = [];
let createIsTrue;


function createTask(task) {
    console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.pageLoad);

    createIsTrue = false;

    console.log(task.assignedProject)
    console.log(task);


    const breakout2Run = (0,_projectModification_js__WEBPACK_IMPORTED_MODULE_3__.breakoutController)();
    
    const breakoutInstance = breakout2Run.createTaskBreakout(createIsTrue);
    console.log(breakoutInstance);



    // sets the correct project being added to
    let currentBreakoutInstance = _projectModification_js__WEBPACK_IMPORTED_MODULE_3__.correctBreakoutInstance;
    
    console.log(currentBreakoutInstance);
    

    // in this block, every container in projectIndexArray should be iterated through
    // to check if it matches the assigned container number to the specific task
    if (_index_js__WEBPACK_IMPORTED_MODULE_2__.pageLoad === true) {
        _projectModification_js__WEBPACK_IMPORTED_MODULE_3__.correctBreakoutArray.forEach(container => {
            if (_projectModification_js__WEBPACK_IMPORTED_MODULE_3__.correctBreakoutArray.indexOf(container) === task.assignedProject){
                currentBreakoutInstance = container;
                console.log(currentBreakoutInstance)

                return currentBreakoutInstance
            }
        })

        
    } 


    createTaskArticle(task, currentBreakoutInstance, _index_js__WEBPACK_IMPORTED_MODULE_2__.pageLoad);
   

};




function createTaskArticle(task, currentBreakoutInstance, pageLoad) {


    const taskArticle = document.createElement('div');
    articleFactory.addToArticle(taskArticle, 'task-article', currentBreakoutInstance);

    // create two inner div containers:
    const taskSpace1 = document.createElement('div');
    articleFactory.addToArticle(taskSpace1, 'task-space1', taskArticle);

    const taskSpace2 = document.createElement('div');
    articleFactory.addToArticle(taskSpace2, 'task-space2', taskArticle);



     // initially invisible container:
     const taskDropContainer = document.createElement('div')
     articleFactory.addToArticle(taskDropContainer, 'taskDrop-container', taskArticle);



    // fill taskSpace1:
    const taskTitle2 = document.createElement('h1');
    articleFactory.addToArticle(taskTitle2, 'task-title2', taskSpace1);
    taskTitle2.textContent = task.name;
    taskTitle2.contentEditable = "true";


    // add taskTitle to projectBar
    const taskTitleContainer = document.createElement('div');
    // console.log(projectController);
    projectRun.appendTaskTitle(taskTitle2, taskTitle2.textContent, 
        taskTitleContainer, pageLoad, task.assignedProject);



    const taskDescription2 = document.createElement('div')
    articleFactory.addToArticle(taskDescription2, 'description2', taskSpace1);
    taskDescription2.textContent = task.description;
    taskDescription2.contentEditable = "true";
    


    // fill taskSpace2:
    const taskSpace2First = document.createElement('div');
    articleFactory.addToArticle(taskSpace2First,'task-space2-row1', taskSpace2);

    const dueDate2 = document.createElement('div');
    articleFactory.addToArticle(dueDate2,'due-date2', taskSpace2First);
    dueDate2.textContent = `Due: ${task.dueDate}`;
    // figure out how to edit the date here

    const deleteTaskButton = document.createElement('button');
    articleFactory.addToArticle(deleteTaskButton, 'delete-task', taskSpace2First);
    deleteTaskButton.textContent = 'X';

    deleteTaskButton.addEventListener('click', () => {
        const deleteTaskRun = (0,_taskModification_js__WEBPACK_IMPORTED_MODULE_1__.taskModifier)()
        deleteTaskRun.removeTask(taskArticle, currentBreakoutInstance);

        projectRun.removeTaskTitle(taskTitleContainer);

        console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.tasks);
        const taskIndex = _index_js__WEBPACK_IMPORTED_MODULE_2__.tasks.indexOf(task);
        _index_js__WEBPACK_IMPORTED_MODULE_2__.tasks.splice(taskIndex, 1)
        console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.tasks)
        localStorage.setItem('tasks', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_2__.tasks));
    })



    // fill hidden dropdown
    const priorityBar = document.createElement('div');
    articleFactory.addToArticle(priorityBar,'priority-bar', taskDropContainer);
    (0,_taskModification_js__WEBPACK_IMPORTED_MODULE_1__.createPriorityBar)(task.importance, priorityBar, taskDropContainer);

    const completeTaskButton = document.createElement('button');
    articleFactory.addToArticle(completeTaskButton,'complete-task-button', taskDropContainer);
    completeTaskButton.textContent = 'Complete';

    completeTaskButton.addEventListener('click', () => {
        const completeTaskRun = (0,_taskModification_js__WEBPACK_IMPORTED_MODULE_1__.taskModifier)()
        completeTaskRun.removeTask(taskArticle, currentBreakoutInstance);

        projectRun.removeTaskTitle(taskTitleContainer);

        console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.tasks);
        const taskIndex = _index_js__WEBPACK_IMPORTED_MODULE_2__.tasks.indexOf(task);
        _index_js__WEBPACK_IMPORTED_MODULE_2__.tasks.splice(taskIndex, 1)
        console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.tasks)
        localStorage.setItem('tasks', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_2__.tasks));
    })


    // drop down button and function
    const dropDownTask = document.createElement('button');
    articleFactory.addToArticle(dropDownTask, 'drop-down-task', taskSpace2)
    dropDownTask.textContent = '^'
    ;(0,_taskModification_js__WEBPACK_IMPORTED_MODULE_1__.taskDropLogic)(dropDownTask, taskDropContainer, task.name)
}



const articleFactory = (function () {

    function addToArticle(elementName, className, fatherElement ) {
            elementName.classList.add(className);
            fatherElement.appendChild(elementName);
    
            return elementName;
        };
    return {addToArticle};

})();



// function to create new Pojects
function createProject(project) {
    console.log(project)

    projectRun.createProjectContainer(project);
    console.log('project created');

    createIsTrue = true;

    const firstBreakoutRun = (0,_projectModification_js__WEBPACK_IMPORTED_MODULE_3__.breakoutController)();
    const breakoutCreation = firstBreakoutRun.createTaskBreakout(createIsTrue);
    console.log(breakoutCreation);

}








/***/ }),

/***/ "./src/projectModification.js":
/*!************************************!*\
  !*** ./src/projectModification.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeProjectContainer: () => (/* binding */ activeProjectContainer),
/* harmony export */   addButtonArray: () => (/* binding */ addButtonArray),
/* harmony export */   assignedTask: () => (/* binding */ assignedTask),
/* harmony export */   breakoutController: () => (/* binding */ breakoutController),
/* harmony export */   correctBreakoutArray: () => (/* binding */ correctBreakoutArray),
/* harmony export */   correctBreakoutInstance: () => (/* binding */ correctBreakoutInstance),
/* harmony export */   modifyTaskForm: () => (/* binding */ modifyTaskForm),
/* harmony export */   projectController: () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _objectCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectCreator.js */ "./src/objectCreator.js");




let addButtonArray = [];
let assignedTask;

let activeProjectContainer;

let projectContainers = [];

// in charge of creating a new container each time a project
// is created
const projectController = function () {


    function createProjectContainer(project) {

        const projectContainer = document.createElement('div');
        projectContainers.push(projectContainer);
        activeProjectContainer = projectContainer;
        console.log(activeProjectContainer);


        projectFactory.addToProjectBar(projectContainer, 'project-cont', _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsContainer);
        console.log('added project container')

        const projectTitle = document.createElement('h2')
        projectFactory.addToProjectBar(projectTitle, 'project-title', projectContainer);
        
        projectTitle.textContent = project.name;
        projectTitle.contentEditable = "true";

        
        appendTaskButton(projectContainer);


        projectContainer.addEventListener('click', () => {
            console.log('yas bitch');
            // find matching index in between appendTask buttons and 
            // project containers and then pass that matching
            // number into changeActiveBreakout ... here the display
            // will be set to active
            addButtonArray.forEach(button => {
                if (addButtonArray.indexOf(button) === projectContainers.indexOf(projectContainer)) {
                    console.log('this is it')
                    console.log(button);
                    const breakoutDisplayRun = breakoutController()
                    breakoutDisplayRun.changeActiveBreakout(addButtonArray.indexOf(button))
                    console.log(correctBreakoutInstance);
                    changeProjectDisplay(correctBreakoutInstance);
                };
            });
            
        });

        
    }




    // adds taskTitle to projectBar
    const appendTaskTitle = function (taskTitle2, taskTitleContent, taskTitleContainer, pageLoad, assignedProject) {

        if (pageLoad === true) {
            projectContainers.forEach(sideBar => {
                if (projectContainers.indexOf(sideBar) === assignedProject) {
                    projectFactory.addToProjectBar(taskTitleContainer, 'task-title-container', sideBar);
                    taskTitleContainer.textContent = taskTitleContent;
                };
            });
        } else {

            projectFactory.addToProjectBar(taskTitleContainer, 'task-title-container', activeProjectContainer);
            taskTitleContainer.textContent = taskTitleContent;
            console.log('task title added');

        };

        // ensure that task titles match whenever a change is made
        taskTitle2.addEventListener('blur', () => {

            const newTaskTitle = taskTitle2.textContent;
            
            taskTitleContainer.textContent = newTaskTitle;
            console.log('has been blurred')
        });


    };


    const removeTaskTitle = function (taskTitleContainer) {
        console.log('removed');
        taskTitleContainer.remove();

    }



    function appendTaskButton(projectContainer) {

        const addTaskButton = document.createElement('button')
        addButtonArray.push(addTaskButton);
        console.log(addButtonArray);
        projectFactory.addToProjectBar(addTaskButton, 'add-task-button', projectContainer);
        
        addTaskButton.textContent = '+';

        const emptyRun = breakoutController();


        addTaskButton.addEventListener('click', () => {
            modifyTaskForm.toggleTaskForm()

            changeActiveProject(projectContainer);


            emptyRun.changeActiveBreakout(addButtonArray.indexOf(addTaskButton));

            assignedTask = addButtonArray.indexOf(addTaskButton)
            console.log(assignedTask);
        })

    }



    function changeActiveProject(projectContainer) {
        activeProjectContainer = projectContainer;
        console.log(activeProjectContainer);
        return activeProjectContainer;
    }


    return {createProjectContainer, appendTaskTitle, 
        changeActiveProject, removeTaskTitle}

    
    
}



const taskFormContainer = document.querySelector('.task-form-container');

const modifyTaskForm = (function () {
    console.log('toggle ran');

    function toggleTaskForm() {

        if (taskFormContainer.classList.contains('task-form-container-active')) {
            console.log('removing active');
            taskFormContainer.classList.remove('task-form-container-active');
            taskFormContainer.classList.add('task-form-container');
            return

        } else if (!taskFormContainer.classList.contains('.task-form-container-active')) {
            console.log('does not have, adding now');
            taskFormContainer.classList.remove('task-form-container');
            taskFormContainer.classList.add('task-form-container-active');
        };
    }

    function clearTaskForm() {
        console.log('form cleared');
    }

    return {toggleTaskForm, clearTaskForm}
    
})();



let taskBreakoutCounter = 0;
let taskBreakoutArray = [];

let correctBreakoutArray = [];
let correctBreakoutInstance;


const breakoutController = function () {

    function createTaskBreakout(createIsTrue) {

   
        console.log(createIsTrue);

        if (createIsTrue === true ) {

            const taskBreakoutInstance = document.createElement('div');
            taskBreakoutArray.push(taskBreakoutInstance);
            console.log(taskBreakoutArray);

            projectFactory.addToProjectBar(taskBreakoutInstance, `task-break-instance${taskBreakoutCounter}`, _index_js__WEBPACK_IMPORTED_MODULE_0__.MainBreakoutContainer);
            console.log('new task break container created');
            console.log(taskBreakoutInstance);

            correctBreakoutInstance = taskBreakoutArray[taskBreakoutCounter];
            correctBreakoutArray.push(correctBreakoutInstance);

            taskBreakoutCounter ++;

            return correctBreakoutInstance

        }


        return correctBreakoutInstance

    }



    function changeActiveBreakout(activeTaskButton) {
        correctBreakoutInstance = taskBreakoutArray[activeTaskButton];
        // assignedProjectHolder = taskBreakoutArray[activeTaskButton];

        console.log(correctBreakoutInstance);
        console.log('breakout has changed');

        return {correctBreakoutInstance}
    };


    return {createTaskBreakout, changeActiveBreakout}

}

const changeProjectDisplay = function (chosenBreakout) {
    taskBreakoutArray.forEach(container => {
        container.style.display = "none"
    })

    chosenBreakout.style.display = "block"
}




const projectFactory = (function () {

    function addToProjectBar(elementName, className, fatherElement ) {
            elementName.classList.add(className);
            fatherElement.appendChild(elementName);
    
            return elementName;
        };
    return {addToProjectBar};

})();



/***/ }),

/***/ "./src/taskModification.js":
/*!*********************************!*\
  !*** ./src/taskModification.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPriorityBar: () => (/* binding */ createPriorityBar),
/* harmony export */   taskDropLogic: () => (/* binding */ taskDropLogic),
/* harmony export */   taskModifier: () => (/* binding */ taskModifier)
/* harmony export */ });
/* harmony import */ var _objectCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectCreator.js */ "./src/objectCreator.js");


function createPriorityBar(priorityLevel, priorityBar, taskDropContainer) {
    const prioritySelect = document.getElementById('importance');
    console.log(prioritySelect);

    const priorityTitle = document.createElement('label')
    _objectCreator_js__WEBPACK_IMPORTED_MODULE_0__.articleFactory.addToArticle(priorityTitle,'priority-title', taskDropContainer);
    priorityTitle.textContent = 'Priority Level:'


    for (let i = 0; i < 5; i++) {
        const priorityOption = prioritySelect.options[i];
        // console.log(priorityOption);
        //create button for each option
        const priorityButton = document.createElement('input');
        priorityButton.type = 'radio';
        priorityButton.name = priorityLevel;

        // create label for each option
        const priorityButtonLabel = document.createElement('label');
        priorityButtonLabel.textContent = prioritySelect.options[i].value;
        _objectCreator_js__WEBPACK_IMPORTED_MODULE_0__.articleFactory.addToArticle(priorityButtonLabel,'priority-button-label', priorityBar);

        if (priorityOption.value === priorityLevel) {
            priorityButton.checked = true;
            console.log(priorityButton);
        }

        _objectCreator_js__WEBPACK_IMPORTED_MODULE_0__.articleFactory.addToArticle(priorityButton,'priority-button', priorityBar);
    }



}


function taskDropLogic(dropButton, dropContainer, titleTest) {
    dropButton.addEventListener('click', () => {
        console.log('drop down work');

        if (dropContainer.classList.contains('taskDrop-container')) {
            dropContainer.classList.remove('taskDrop-container');
            dropContainer.classList.add('taskDrop-container-active');
        } else if (dropContainer.classList.contains('taskDrop-container-active')) {
            dropContainer.classList.remove('taskDrop-container-active');
            dropContainer.classList.add('taskDrop-container');
        }
    })

}




const taskModifier = function () {

    function removeTask(taskArticle, breakoutContainer) {

        breakoutContainer.removeChild(taskArticle)

    }

    return {removeTask}

}

/***/ }),

/***/ "./src/userform.js":
/*!*************************!*\
  !*** ./src/userform.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkForm: () => (/* binding */ linkForm)
/* harmony export */ });
/* harmony import */ var _objectCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectCreator */ "./src/objectCreator.js");
/* harmony import */ var _projectModification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectModification.js */ "./src/projectModification.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object.js */ "./src/object.js");





// console.log(addButtonArray);

function linkForm(tasks) {
    const taskForm = document.getElementById('task-form');

    const taskTitle = document.getElementById('task-title');
    console.log(taskTitle);
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const importance = document.getElementById('importance');


    const submitTask = document.querySelector('.submit-task');
    console.log(submitTask);
    

    submitTask.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('add task clicked');

        console.log(_projectModification_js__WEBPACK_IMPORTED_MODULE_1__.assignedTask);

        

        const task = new _object_js__WEBPACK_IMPORTED_MODULE_2__.Task(taskTitle.value, taskDescription.value, dueDate.value,
        importance.value, _projectModification_js__WEBPACK_IMPORTED_MODULE_1__.assignedTask);
        console.log(task);
        console.log(_object_js__WEBPACK_IMPORTED_MODULE_2__.Task);

        // save to localStorage
        tasks.push(task);
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));


        _projectModification_js__WEBPACK_IMPORTED_MODULE_1__.modifyTaskForm.toggleTaskForm();

        resetForm(taskForm);

        (0,_objectCreator__WEBPACK_IMPORTED_MODULE_0__.createTask)(task);

        

    });
}


function resetForm(taskForm) {
    taskForm.reset()

}

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFB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IndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RCYXIuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEJhci5jc3M/OTE5MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvLmNzcz9mOGE4Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL29iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL29iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0TW9kaWZpY2F0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza01vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VzZXJmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cbi8qIHN0eWxpbmcgZm9yIFByb2plY3RCYXIgKi9cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbi50YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1mb3JtLWNvbnRhaW5lci1hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWluLWhlaWdodDogNDMwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbiN0YXNrLXRpdGxlLCAjZGVzY3JpcHRpb24sICNkdWUtZGF0ZSxcbiNpbXBvcnRhbmNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1pbi13aWR0aDogMjk1cHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4jdGFzay1mb3JtID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogMjk1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3VibWl0LXRhc2sge1xuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICBtYXJnaW4tbGVmdDogODJweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5cblxuLnByb2plY3QtY29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWRkLXRhc2stYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnRhc2stdGl0bGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvamVjdEJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjs4QkFDMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyogc3R5bGluZyBmb3IgUHJvamVjdEJhciAqL1xcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybS1jb250YWluZXItYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWluLWhlaWdodDogNDMwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jdGFzay10aXRsZSwgI2Rlc2NyaXB0aW9uLCAjZHVlLWRhdGUsXFxuI2ltcG9ydGFuY2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDI5NXB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbiN0YXNrLWZvcm0gPiBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI5NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdWJtaXQtdGFzayB7XFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IDgycHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcblxcbi5wcm9qZWN0LWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4udGFzay10aXRsZS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0LjVmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDdmcjtcbn1cblxuLmhlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuXG4ubWFpbi1icmVha291dC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbn1cblxuLmNyZWF0ZS10YXNrLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1haW4tYnJlYWtvdXQtY29udGFpbmVyID4gZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cblxuLnRhc2stYXJ0aWNsZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuMmZyIDFmcjtcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIHdpZHRoOiAxMjV2aDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5cbi50YXNrRHJvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIC8qIG1heC1oZWlnaHQ6IDR2aDtcbiAgICB3aWR0aDogMTAwdmg7ICovXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xufVxuXG4udGFza0Ryb3AtY29udGFpbmVyLWFjdGl2ZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgICBtYXgtd2lkdGg6IDExMHZoO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBncmlkLXJvdzogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi50YXNrLXNwYWNlMSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcbn1cblxuLnRhc2stc3BhY2UyIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuNWZyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4udGFzay10aXRsZTIge1xuICAgIG1hcmdpbjogM3B4O1xufVxuXG4uZGVzY3JpcHRpb24yIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5cblxuLnRhc2stc3BhY2UyLXJvdzEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbn1cblxuLmR1ZS1kYXRlMiB7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmRlbGV0ZS10YXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuXG4ucHJpb3JpdHktYmFyIHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMS8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByaW9yaXR5LXRpdGxlIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMTtcbn1cblxuLnByaW9yaXR5LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29tcGxldGUtdGFzay1idXR0b24ge1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kcm9wLWRvd24tdGFzayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvLWRvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCO21CQUNlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0LjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCA3ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuXFxuLm1haW4tYnJlYWtvdXQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ubWFpbi1icmVha291dC1jb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcblxcbi50YXNrLWFydGljbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuMmZyIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTJ2aDtcXG4gICAgd2lkdGg6IDEyNXZoO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcblxcbi50YXNrRHJvcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAvKiBtYXgtaGVpZ2h0OiA0dmg7XFxuICAgIHdpZHRoOiAxMDB2aDsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xcbn1cXG5cXG4udGFza0Ryb3AtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiA2dmg7XFxuICAgIG1heC13aWR0aDogMTEwdmg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnRhc2stc3BhY2UxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuNWZyO1xcbn1cXG5cXG4udGFzay1zcGFjZTIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4udGFzay10aXRsZTIge1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uMiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuXFxuLnRhc2stc3BhY2UyLXJvdzEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi5kdWUtZGF0ZTIge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDQ2cHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5cXG4ucHJpb3JpdHktYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5wcmlvcml0eS1idXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb21wbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogNzVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZHJvcC1kb3duLXRhc2sge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0QmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdEJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG8tZG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90by1kby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi90by1kby5jc3MnO1xuaW1wb3J0ICcuL3Byb2plY3RCYXIuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2sgfSBmcm9tICcuL29iamVjdENyZWF0b3InO1xuaW1wb3J0IHsgbGlua0Zvcm0gfSBmcm9tICcuL3VzZXJmb3JtJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgeyBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSwgYnJlYWtvdXRDb250cm9sbGVyIH0gZnJvbSAnLi9wcm9qZWN0TW9kaWZpY2F0aW9uJztcblxuXG4vLyBvYmplY3RDcmVhdG9yLmpzOiBmaWlsZSB0aGF0IGNvbnRhaW5zIHRoZSBsb2dpYyB0aGF0IGNyZWF0ZXNcbi8vIG5ldyB0YXNrIGFydGljbGUgY2FyZHMgdW5kZXIgZWFjaCBwcm9qZWN0XG5cbi8vIG9iamVjdC5qcyBjb250YWlucyB0aGUgVGFzayBjbGFzcyBpcyB1c2VkIHRvIGdlbmVyYXRlIG5ldyBpbnN0YW5jZXNcbi8vIHdoZW4gYSBuZXcgdGFzayBpcyBnZW5lcmF0ZWRcblxuLy8gc3RydWN0dXJlLmpzOiBmaWxlIHRoYXQgbGF5cyBvdXQgdGhlIGZvdW5kYXRpb25hbCByZWZlcmVuY2VzXG4vLyBhbmQgbGlua3Mgb2YgdGhlIHRvLWRvIHN0cnVjdHVyZVxuXG4vLyB1c2VyZm9ybS5qczogaGFuZGxlcyB0aGUgbG9naWMgb2Ygd2hhdCBoYXBwZW5zIHdoZW4gdGhlIHVzZXJcbi8vIGZpbGxzIG91dCBhIGZvcm0gdG8gY3JlYXRlIGEgbmV3IHByb2plY3Qgb3IgdGFza1xuXG4vLyB0YXNrTW9kaWZpY2F0aW9uLmpzOiBoYW5kbGVzIHRoZSBsb2dpYyB0byBkaXNwbGF5IGNoYW5nZXNcbi8vIG9uIGJyb3N3ZXIgd2hlbiB0YXNrcyBhcmUgYmVpbmcgYnVpbHQgb3IgYXJlIGRlbGV0ZWRcbmV4cG9ydCBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgTWFpbkJyZWFrb3V0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYnJlYWtvdXQtY29udGFpbmVyJyk7XG5cblxuZXhwb3J0IGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuY29uc29sZS5sb2codGFza3MpXG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcblxuZXhwb3J0IGxldCBwYWdlTG9hZCA9IHRydWU7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIC8vIGNvbnN0IGluaXRpYWxSdW4gPSBicmVha291dENvbnRyb2xsZXIoKTtcbiAgICAvLyBsZXQgcGFnZUxvYWQgPSB0cnVlO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNyZWF0ZVRhc2sodGFzayk7XG4gICAgfSlcblxuICAgIHBhZ2VMb2FkID0gZmFsc2U7XG5cbn0pO1xuXG5cblxuXG5saW5rRm9ybSh0YXNrcyk7XG5cblxuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdC1idXR0b24nKTtcbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoJ05ldyBQcm9qZWN0Jyk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW9uIHRpcmdnZXJlZCcpO1xuICAgIFxuXG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyO1xufSlcblxuXG5cblxuXG5cbiIsIlxuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbmNlLCBhc3NpZ25lZFByb2plY3QpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmltcG9ydGFuY2UgPSBpbXBvcnRhbmNlO1xuICAgICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdCA9IGFzc2lnbmVkUHJvamVjdFxuXG4gICAgfVxufTtcblxuXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn07IiwiLy8gaW1wb3J0IHsgVGFzayAgfSBmcm9tIFwiLi9vYmplY3QuanNcIjtcbmltcG9ydCB7IGxpbmtGb3JtIH0gZnJvbSBcIi4vdXNlcmZvcm0uanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByaW9yaXR5QmFyLCB0YXNrRHJvcExvZ2ljLCB0YXNrTW9kaWZpZXJ9IGZyb20gXCIuL3Rhc2tNb2RpZmljYXRpb24uanNcIjtcbmltcG9ydCB7IHByb2plY3RzQ29udGFpbmVyLCB0YXNrcywgcGFnZUxvYWR9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgcHJvamVjdENvbnRyb2xsZXIsIGJyZWFrb3V0Q29udHJvbGxlciwgY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UsIGNvcnJlY3RCcmVha291dEFycmF5fSBmcm9tIFwiLi9wcm9qZWN0TW9kaWZpY2F0aW9uLmpzXCI7XG5cblxuY29uc3QgcHJvamVjdFJ1biA9IHByb2plY3RDb250cm9sbGVyKCk7XG5cbi8vIGxldCBwcm9qZWN0SW5kZXhBcnJheSA9IFtdO1xubGV0IGNyZWF0ZUlzVHJ1ZTtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgY29uc29sZS5sb2cocGFnZUxvYWQpO1xuXG4gICAgY3JlYXRlSXNUcnVlID0gZmFsc2U7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrLmFzc2lnbmVkUHJvamVjdClcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuXG4gICAgY29uc3QgYnJlYWtvdXQyUnVuID0gYnJlYWtvdXRDb250cm9sbGVyKCk7XG4gICAgXG4gICAgY29uc3QgYnJlYWtvdXRJbnN0YW5jZSA9IGJyZWFrb3V0MlJ1bi5jcmVhdGVUYXNrQnJlYWtvdXQoY3JlYXRlSXNUcnVlKTtcbiAgICBjb25zb2xlLmxvZyhicmVha291dEluc3RhbmNlKTtcblxuXG5cbiAgICAvLyBzZXRzIHRoZSBjb3JyZWN0IHByb2plY3QgYmVpbmcgYWRkZWQgdG9cbiAgICBsZXQgY3VycmVudEJyZWFrb3V0SW5zdGFuY2UgPSBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSk7XG4gICAgXG5cbiAgICAvLyBpbiB0aGlzIGJsb2NrLCBldmVyeSBjb250YWluZXIgaW4gcHJvamVjdEluZGV4QXJyYXkgc2hvdWxkIGJlIGl0ZXJhdGVkIHRocm91Z2hcbiAgICAvLyB0byBjaGVjayBpZiBpdCBtYXRjaGVzIHRoZSBhc3NpZ25lZCBjb250YWluZXIgbnVtYmVyIHRvIHRoZSBzcGVjaWZpYyB0YXNrXG4gICAgaWYgKHBhZ2VMb2FkID09PSB0cnVlKSB7XG4gICAgICAgIGNvcnJlY3RCcmVha291dEFycmF5LmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgICAgIGlmIChjb3JyZWN0QnJlYWtvdXRBcnJheS5pbmRleE9mKGNvbnRhaW5lcikgPT09IHRhc2suYXNzaWduZWRQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgIH0gXG5cblxuICAgIGNyZWF0ZVRhc2tBcnRpY2xlKHRhc2ssIGN1cnJlbnRCcmVha291dEluc3RhbmNlLCBwYWdlTG9hZCk7XG4gICBcblxufTtcblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0FydGljbGUodGFzaywgY3VycmVudEJyZWFrb3V0SW5zdGFuY2UsIHBhZ2VMb2FkKSB7XG5cblxuICAgIGNvbnN0IHRhc2tBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHRhc2tBcnRpY2xlLCAndGFzay1hcnRpY2xlJywgY3VycmVudEJyZWFrb3V0SW5zdGFuY2UpO1xuXG4gICAgLy8gY3JlYXRlIHR3byBpbm5lciBkaXYgY29udGFpbmVyczpcbiAgICBjb25zdCB0YXNrU3BhY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHRhc2tTcGFjZTEsICd0YXNrLXNwYWNlMScsIHRhc2tBcnRpY2xlKTtcblxuICAgIGNvbnN0IHRhc2tTcGFjZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUodGFza1NwYWNlMiwgJ3Rhc2stc3BhY2UyJywgdGFza0FydGljbGUpO1xuXG5cblxuICAgICAvLyBpbml0aWFsbHkgaW52aXNpYmxlIGNvbnRhaW5lcjpcbiAgICAgY29uc3QgdGFza0Ryb3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUodGFza0Ryb3BDb250YWluZXIsICd0YXNrRHJvcC1jb250YWluZXInLCB0YXNrQXJ0aWNsZSk7XG5cblxuXG4gICAgLy8gZmlsbCB0YXNrU3BhY2UxOlxuICAgIGNvbnN0IHRhc2tUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZSh0YXNrVGl0bGUyLCAndGFzay10aXRsZTInLCB0YXNrU3BhY2UxKTtcbiAgICB0YXNrVGl0bGUyLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgIHRhc2tUaXRsZTIuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XG5cblxuICAgIC8vIGFkZCB0YXNrVGl0bGUgdG8gcHJvamVjdEJhclxuICAgIGNvbnN0IHRhc2tUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RDb250cm9sbGVyKTtcbiAgICBwcm9qZWN0UnVuLmFwcGVuZFRhc2tUaXRsZSh0YXNrVGl0bGUyLCB0YXNrVGl0bGUyLnRleHRDb250ZW50LCBcbiAgICAgICAgdGFza1RpdGxlQ29udGFpbmVyLCBwYWdlTG9hZCwgdGFzay5hc3NpZ25lZFByb2plY3QpO1xuXG5cblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZSh0YXNrRGVzY3JpcHRpb24yLCAnZGVzY3JpcHRpb24yJywgdGFza1NwYWNlMSk7XG4gICAgdGFza0Rlc2NyaXB0aW9uMi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGFza0Rlc2NyaXB0aW9uMi5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcbiAgICBcblxuXG4gICAgLy8gZmlsbCB0YXNrU3BhY2UyOlxuICAgIGNvbnN0IHRhc2tTcGFjZTJGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZSh0YXNrU3BhY2UyRmlyc3QsJ3Rhc2stc3BhY2UyLXJvdzEnLCB0YXNrU3BhY2UyKTtcblxuICAgIGNvbnN0IGR1ZURhdGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKGR1ZURhdGUyLCdkdWUtZGF0ZTInLCB0YXNrU3BhY2UyRmlyc3QpO1xuICAgIGR1ZURhdGUyLnRleHRDb250ZW50ID0gYER1ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgICAvLyBmaWd1cmUgb3V0IGhvdyB0byBlZGl0IHRoZSBkYXRlIGhlcmVcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUoZGVsZXRlVGFza0J1dHRvbiwgJ2RlbGV0ZS10YXNrJywgdGFza1NwYWNlMkZpcnN0KTtcbiAgICBkZWxldGVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRlVGFza1J1biA9IHRhc2tNb2RpZmllcigpXG4gICAgICAgIGRlbGV0ZVRhc2tSdW4ucmVtb3ZlVGFzayh0YXNrQXJ0aWNsZSwgY3VycmVudEJyZWFrb3V0SW5zdGFuY2UpO1xuXG4gICAgICAgIHByb2plY3RSdW4ucmVtb3ZlVGFza1RpdGxlKHRhc2tUaXRsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICB9KVxuXG5cblxuICAgIC8vIGZpbGwgaGlkZGVuIGRyb3Bkb3duXG4gICAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUocHJpb3JpdHlCYXIsJ3ByaW9yaXR5LWJhcicsIHRhc2tEcm9wQ29udGFpbmVyKTtcbiAgICBjcmVhdGVQcmlvcml0eUJhcih0YXNrLmltcG9ydGFuY2UsIHByaW9yaXR5QmFyLCB0YXNrRHJvcENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb21wbGV0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUoY29tcGxldGVUYXNrQnV0dG9uLCdjb21wbGV0ZS10YXNrLWJ1dHRvbicsIHRhc2tEcm9wQ29udGFpbmVyKTtcbiAgICBjb21wbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gICAgY29tcGxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0ZVRhc2tSdW4gPSB0YXNrTW9kaWZpZXIoKVxuICAgICAgICBjb21wbGV0ZVRhc2tSdW4ucmVtb3ZlVGFzayh0YXNrQXJ0aWNsZSwgY3VycmVudEJyZWFrb3V0SW5zdGFuY2UpO1xuXG4gICAgICAgIHByb2plY3RSdW4ucmVtb3ZlVGFza1RpdGxlKHRhc2tUaXRsZUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICB0YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICB9KVxuXG5cbiAgICAvLyBkcm9wIGRvd24gYnV0dG9uIGFuZCBmdW5jdGlvblxuICAgIGNvbnN0IGRyb3BEb3duVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShkcm9wRG93blRhc2ssICdkcm9wLWRvd24tdGFzaycsIHRhc2tTcGFjZTIpXG4gICAgZHJvcERvd25UYXNrLnRleHRDb250ZW50ID0gJ14nXG4gICAgdGFza0Ryb3BMb2dpYyhkcm9wRG93blRhc2ssIHRhc2tEcm9wQ29udGFpbmVyLCB0YXNrLm5hbWUpXG59XG5cblxuXG5leHBvcnQgY29uc3QgYXJ0aWNsZUZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gYWRkVG9BcnRpY2xlKGVsZW1lbnROYW1lLCBjbGFzc05hbWUsIGZhdGhlckVsZW1lbnQgKSB7XG4gICAgICAgICAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBmYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnROYW1lKTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50TmFtZTtcbiAgICAgICAgfTtcbiAgICByZXR1cm4ge2FkZFRvQXJ0aWNsZX07XG5cbn0pKCk7XG5cblxuXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgbmV3IFBvamVjdHNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuXG4gICAgcHJvamVjdFJ1bi5jcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0IGNyZWF0ZWQnKTtcblxuICAgIGNyZWF0ZUlzVHJ1ZSA9IHRydWU7XG5cbiAgICBjb25zdCBmaXJzdEJyZWFrb3V0UnVuID0gYnJlYWtvdXRDb250cm9sbGVyKCk7XG4gICAgY29uc3QgYnJlYWtvdXRDcmVhdGlvbiA9IGZpcnN0QnJlYWtvdXRSdW4uY3JlYXRlVGFza0JyZWFrb3V0KGNyZWF0ZUlzVHJ1ZSk7XG4gICAgY29uc29sZS5sb2coYnJlYWtvdXRDcmVhdGlvbik7XG5cbn1cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IHByb2plY3RzQ29udGFpbmVyLCBNYWluQnJlYWtvdXRDb250YWluZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL29iamVjdENyZWF0b3IuanNcIjtcblxuXG5leHBvcnQgbGV0IGFkZEJ1dHRvbkFycmF5ID0gW107XG5leHBvcnQgbGV0IGFzc2lnbmVkVGFzaztcblxuZXhwb3J0IGxldCBhY3RpdmVQcm9qZWN0Q29udGFpbmVyO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lcnMgPSBbXTtcblxuLy8gaW4gY2hhcmdlIG9mIGNyZWF0aW5nIGEgbmV3IGNvbnRhaW5lciBlYWNoIHRpbWUgYSBwcm9qZWN0XG4vLyBpcyBjcmVhdGVkXG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lcnMucHVzaChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgYWN0aXZlUHJvamVjdENvbnRhaW5lciA9IHByb2plY3RDb250YWluZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3RDb250YWluZXIpO1xuXG5cbiAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKHByb2plY3RDb250YWluZXIsICdwcm9qZWN0LWNvbnQnLCBwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRlZCBwcm9qZWN0IGNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBwcm9qZWN0RmFjdG9yeS5hZGRUb1Byb2plY3RCYXIocHJvamVjdFRpdGxlLCAncHJvamVjdC10aXRsZScsIHByb2plY3RDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XG5cbiAgICAgICAgXG4gICAgICAgIGFwcGVuZFRhc2tCdXR0b24ocHJvamVjdENvbnRhaW5lcik7XG5cblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3lhcyBiaXRjaCcpO1xuICAgICAgICAgICAgLy8gZmluZCBtYXRjaGluZyBpbmRleCBpbiBiZXR3ZWVuIGFwcGVuZFRhc2sgYnV0dG9ucyBhbmQgXG4gICAgICAgICAgICAvLyBwcm9qZWN0IGNvbnRhaW5lcnMgYW5kIHRoZW4gcGFzcyB0aGF0IG1hdGNoaW5nXG4gICAgICAgICAgICAvLyBudW1iZXIgaW50byBjaGFuZ2VBY3RpdmVCcmVha291dCAuLi4gaGVyZSB0aGUgZGlzcGxheVxuICAgICAgICAgICAgLy8gd2lsbCBiZSBzZXQgdG8gYWN0aXZlXG4gICAgICAgICAgICBhZGRCdXR0b25BcnJheS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZEJ1dHRvbkFycmF5LmluZGV4T2YoYnV0dG9uKSA9PT0gcHJvamVjdENvbnRhaW5lcnMuaW5kZXhPZihwcm9qZWN0Q29udGFpbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBpdCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrb3V0RGlzcGxheVJ1biA9IGJyZWFrb3V0Q29udHJvbGxlcigpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrb3V0RGlzcGxheVJ1bi5jaGFuZ2VBY3RpdmVCcmVha291dChhZGRCdXR0b25BcnJheS5pbmRleE9mKGJ1dHRvbikpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvcnJlY3RCcmVha291dEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJvamVjdERpc3BsYXkoY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICB9XG5cblxuXG5cbiAgICAvLyBhZGRzIHRhc2tUaXRsZSB0byBwcm9qZWN0QmFyXG4gICAgY29uc3QgYXBwZW5kVGFza1RpdGxlID0gZnVuY3Rpb24gKHRhc2tUaXRsZTIsIHRhc2tUaXRsZUNvbnRlbnQsIHRhc2tUaXRsZUNvbnRhaW5lciwgcGFnZUxvYWQsIGFzc2lnbmVkUHJvamVjdCkge1xuXG4gICAgICAgIGlmIChwYWdlTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lcnMuZm9yRWFjaChzaWRlQmFyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdENvbnRhaW5lcnMuaW5kZXhPZihzaWRlQmFyKSA9PT0gYXNzaWduZWRQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RGYWN0b3J5LmFkZFRvUHJvamVjdEJhcih0YXNrVGl0bGVDb250YWluZXIsICd0YXNrLXRpdGxlLWNvbnRhaW5lcicsIHNpZGVCYXIpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSB0YXNrVGl0bGVDb250ZW50O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKHRhc2tUaXRsZUNvbnRhaW5lciwgJ3Rhc2stdGl0bGUtY29udGFpbmVyJywgYWN0aXZlUHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgICAgICB0YXNrVGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSB0YXNrVGl0bGVDb250ZW50O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rhc2sgdGl0bGUgYWRkZWQnKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGVuc3VyZSB0aGF0IHRhc2sgdGl0bGVzIG1hdGNoIHdoZW5ldmVyIGEgY2hhbmdlIGlzIG1hZGVcbiAgICAgICAgdGFza1RpdGxlMi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSB0YXNrVGl0bGUyLnRleHRDb250ZW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrVGl0bGVDb250YWluZXIudGV4dENvbnRlbnQgPSBuZXdUYXNrVGl0bGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGFzIGJlZW4gYmx1cnJlZCcpXG4gICAgICAgIH0pO1xuXG5cbiAgICB9O1xuXG5cbiAgICBjb25zdCByZW1vdmVUYXNrVGl0bGUgPSBmdW5jdGlvbiAodGFza1RpdGxlQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkJyk7XG4gICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUYXNrQnV0dG9uKHByb2plY3RDb250YWluZXIpIHtcblxuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkQnV0dG9uQXJyYXkucHVzaChhZGRUYXNrQnV0dG9uKTtcbiAgICAgICAgY29uc29sZS5sb2coYWRkQnV0dG9uQXJyYXkpO1xuICAgICAgICBwcm9qZWN0RmFjdG9yeS5hZGRUb1Byb2plY3RCYXIoYWRkVGFza0J1dHRvbiwgJ2FkZC10YXNrLWJ1dHRvbicsIHByb2plY3RDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcblxuICAgICAgICBjb25zdCBlbXB0eVJ1biA9IGJyZWFrb3V0Q29udHJvbGxlcigpO1xuXG5cbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGlmeVRhc2tGb3JtLnRvZ2dsZVRhc2tGb3JtKClcblxuICAgICAgICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0Q29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICBlbXB0eVJ1bi5jaGFuZ2VBY3RpdmVCcmVha291dChhZGRCdXR0b25BcnJheS5pbmRleE9mKGFkZFRhc2tCdXR0b24pKTtcblxuICAgICAgICAgICAgYXNzaWduZWRUYXNrID0gYWRkQnV0dG9uQXJyYXkuaW5kZXhPZihhZGRUYXNrQnV0dG9uKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYXNzaWduZWRUYXNrKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3RDb250YWluZXIpIHtcbiAgICAgICAgYWN0aXZlUHJvamVjdENvbnRhaW5lciA9IHByb2plY3RDb250YWluZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVByb2plY3RDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdENvbnRhaW5lcjtcbiAgICB9XG5cblxuICAgIHJldHVybiB7Y3JlYXRlUHJvamVjdENvbnRhaW5lciwgYXBwZW5kVGFza1RpdGxlLCBcbiAgICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdCwgcmVtb3ZlVGFza1RpdGxlfVxuXG4gICAgXG4gICAgXG59XG5cblxuXG5jb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJyk7XG5cbmV4cG9ydCBjb25zdCBtb2RpZnlUYXNrRm9ybSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ3RvZ2dsZSByYW4nKTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhc2tGb3JtKCkge1xuXG4gICAgICAgIGlmICh0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZm9ybS1jb250YWluZXItYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhY3RpdmUnKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZm9ybS1jb250YWluZXItYWN0aXZlJyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICB9IGVsc2UgaWYgKCF0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJy50YXNrLWZvcm0tY29udGFpbmVyLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9lcyBub3QgaGF2ZSwgYWRkaW5nIG5vdycpO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWNvbnRhaW5lci1hY3RpdmUnKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclRhc2tGb3JtKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybSBjbGVhcmVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0b2dnbGVUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybX1cbiAgICBcbn0pKCk7XG5cblxuXG5sZXQgdGFza0JyZWFrb3V0Q291bnRlciA9IDA7XG5sZXQgdGFza0JyZWFrb3V0QXJyYXkgPSBbXTtcblxuZXhwb3J0IGxldCBjb3JyZWN0QnJlYWtvdXRBcnJheSA9IFtdO1xuZXhwb3J0IGxldCBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZTtcblxuXG5leHBvcnQgY29uc3QgYnJlYWtvdXRDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0JyZWFrb3V0KGNyZWF0ZUlzVHJ1ZSkge1xuXG4gICBcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlSXNUcnVlKTtcblxuICAgICAgICBpZiAoY3JlYXRlSXNUcnVlID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrQnJlYWtvdXRJbnN0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0JyZWFrb3V0QXJyYXkucHVzaCh0YXNrQnJlYWtvdXRJbnN0YW5jZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrQnJlYWtvdXRBcnJheSk7XG5cbiAgICAgICAgICAgIHByb2plY3RGYWN0b3J5LmFkZFRvUHJvamVjdEJhcih0YXNrQnJlYWtvdXRJbnN0YW5jZSwgYHRhc2stYnJlYWstaW5zdGFuY2Uke3Rhc2tCcmVha291dENvdW50ZXJ9YCwgTWFpbkJyZWFrb3V0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXcgdGFzayBicmVhayBjb250YWluZXIgY3JlYXRlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0JyZWFrb3V0SW5zdGFuY2UpO1xuXG4gICAgICAgICAgICBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSA9IHRhc2tCcmVha291dEFycmF5W3Rhc2tCcmVha291dENvdW50ZXJdO1xuICAgICAgICAgICAgY29ycmVjdEJyZWFrb3V0QXJyYXkucHVzaChjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIHRhc2tCcmVha291dENvdW50ZXIgKys7XG5cbiAgICAgICAgICAgIHJldHVybiBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZVxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJyZWFrb3V0KGFjdGl2ZVRhc2tCdXR0b24pIHtcbiAgICAgICAgY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UgPSB0YXNrQnJlYWtvdXRBcnJheVthY3RpdmVUYXNrQnV0dG9uXTtcbiAgICAgICAgLy8gYXNzaWduZWRQcm9qZWN0SG9sZGVyID0gdGFza0JyZWFrb3V0QXJyYXlbYWN0aXZlVGFza0J1dHRvbl07XG5cbiAgICAgICAgY29uc29sZS5sb2coY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnYnJlYWtvdXQgaGFzIGNoYW5nZWQnKTtcblxuICAgICAgICByZXR1cm4ge2NvcnJlY3RCcmVha291dEluc3RhbmNlfVxuICAgIH07XG5cblxuICAgIHJldHVybiB7Y3JlYXRlVGFza0JyZWFrb3V0LCBjaGFuZ2VBY3RpdmVCcmVha291dH1cblxufVxuXG5jb25zdCBjaGFuZ2VQcm9qZWN0RGlzcGxheSA9IGZ1bmN0aW9uIChjaG9zZW5CcmVha291dCkge1xuICAgIHRhc2tCcmVha291dEFycmF5LmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0pXG5cbiAgICBjaG9zZW5CcmVha291dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG59XG5cblxuXG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvUHJvamVjdEJhcihlbGVtZW50TmFtZSwgY2xhc3NOYW1lLCBmYXRoZXJFbGVtZW50ICkge1xuICAgICAgICAgICAgZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgZmF0aGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50TmFtZSk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudE5hbWU7XG4gICAgICAgIH07XG4gICAgcmV0dXJuIHthZGRUb1Byb2plY3RCYXJ9O1xuXG59KSgpO1xuXG4iLCJpbXBvcnQge2FydGljbGVGYWN0b3J5fSBmcm9tIFwiLi9vYmplY3RDcmVhdG9yLmpzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5QmFyKHByaW9yaXR5TGV2ZWwsIHByaW9yaXR5QmFyLCB0YXNrRHJvcENvbnRhaW5lcikge1xuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFuY2UnKTtcbiAgICBjb25zb2xlLmxvZyhwcmlvcml0eVNlbGVjdCk7XG5cbiAgICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShwcmlvcml0eVRpdGxlLCdwcmlvcml0eS10aXRsZScsIHRhc2tEcm9wQ29udGFpbmVyKTtcbiAgICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IExldmVsOidcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBwcmlvcml0eVNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmlvcml0eU9wdGlvbik7XG4gICAgICAgIC8vY3JlYXRlIGJ1dHRvbiBmb3IgZWFjaCBvcHRpb25cbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eUJ1dHRvbi50eXBlID0gJ3JhZGlvJztcbiAgICAgICAgcHJpb3JpdHlCdXR0b24ubmFtZSA9IHByaW9yaXR5TGV2ZWw7XG5cbiAgICAgICAgLy8gY3JlYXRlIGxhYmVsIGZvciBlYWNoIG9wdGlvblxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnNbaV0udmFsdWU7XG4gICAgICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShwcmlvcml0eUJ1dHRvbkxhYmVsLCdwcmlvcml0eS1idXR0b24tbGFiZWwnLCBwcmlvcml0eUJhcik7XG5cbiAgICAgICAgaWYgKHByaW9yaXR5T3B0aW9uLnZhbHVlID09PSBwcmlvcml0eUxldmVsKSB7XG4gICAgICAgICAgICBwcmlvcml0eUJ1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaW9yaXR5QnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShwcmlvcml0eUJ1dHRvbiwncHJpb3JpdHktYnV0dG9uJywgcHJpb3JpdHlCYXIpO1xuICAgIH1cblxuXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdGFza0Ryb3BMb2dpYyhkcm9wQnV0dG9uLCBkcm9wQ29udGFpbmVyLCB0aXRsZVRlc3QpIHtcbiAgICBkcm9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZHJvcCBkb3duIHdvcmsnKTtcblxuICAgICAgICBpZiAoZHJvcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tEcm9wLWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICBkcm9wQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2tEcm9wLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgZHJvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrRHJvcC1jb250YWluZXItYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJvcENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tEcm9wLWNvbnRhaW5lci1hY3RpdmUnKSkge1xuICAgICAgICAgICAgZHJvcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrRHJvcC1jb250YWluZXItYWN0aXZlJyk7XG4gICAgICAgICAgICBkcm9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEcm9wLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5cblxuXG5leHBvcnQgY29uc3QgdGFza01vZGlmaWVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrQXJ0aWNsZSwgYnJlYWtvdXRDb250YWluZXIpIHtcblxuICAgICAgICBicmVha291dENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQXJ0aWNsZSlcblxuICAgIH1cblxuICAgIHJldHVybiB7cmVtb3ZlVGFza31cblxufSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9vYmplY3RDcmVhdG9yXCI7XG5pbXBvcnQgeyBtb2RpZnlUYXNrRm9ybSwgYXNzaWduZWRUYXNrLCBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZX0gZnJvbSBcIi4vcHJvamVjdE1vZGlmaWNhdGlvbi5qc1wiO1xuaW1wb3J0IHsgVGFzayAgfSBmcm9tIFwiLi9vYmplY3QuanNcIjtcblxuXG4vLyBjb25zb2xlLmxvZyhhZGRCdXR0b25BcnJheSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rRm9ybSh0YXNrcykge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGl0bGUnKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrVGl0bGUpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKTtcbiAgICBjb25zdCBpbXBvcnRhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydGFuY2UnKTtcblxuXG4gICAgY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdGFzaycpO1xuICAgIGNvbnNvbGUubG9nKHN1Ym1pdFRhc2spO1xuICAgIFxuXG4gICAgc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCB0YXNrIGNsaWNrZWQnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhc3NpZ25lZFRhc2spO1xuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUudmFsdWUsIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgaW1wb3J0YW5jZS52YWx1ZSwgYXNzaWduZWRUYXNrKTtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2spO1xuXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblxuXG4gICAgICAgIG1vZGlmeVRhc2tGb3JtLnRvZ2dsZVRhc2tGb3JtKCk7XG5cbiAgICAgICAgcmVzZXRGb3JtKHRhc2tGb3JtKTtcblxuICAgICAgICBjcmVhdGVUYXNrKHRhc2spO1xuXG4gICAgICAgIFxuXG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gcmVzZXRGb3JtKHRhc2tGb3JtKSB7XG4gICAgdGFza0Zvcm0ucmVzZXQoKVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=