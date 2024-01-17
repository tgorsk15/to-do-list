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
    /* background-color: rgb(202, 201, 201); */
    background-color: #53a8b6;
    display: flex;
    flex-direction: column;
    align-items: start;
    grid-row: 2;
    grid-column: 1 / 2;
    min-height: 2000px;
}

.task-form-container {
    display: none;
}

.task-form-container-active {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    min-height: 450px;
    width: 320px;
    left: 50%;
    top: 180px;
    transform: translate(-50%);
    padding: 30px;
    border-radius: 25px;
    background-color: #79c2d0;
    box-shadow: -7px 9px 100px 2px black;
}

#task-title, #description, #due-date,
#importance {
    margin-bottom: 20px;
    min-width: 295px;
    font-size: 17px;
    padding: 10px;
}

#task-form > label {
    display: block;
    min-width: 295px;
    font-size: 20px;
}

.exit-button {
    position: absolute;
    top: 13px;
    right: 15px;
    width: 28px;
    height: 28px;
    background-color: brown;
    color: white;
    border: none;
    border-radius: 20px;
}

.submit-task {
    /* align-content: center; */
    margin-left: 100px;
    margin-top: 20px;
    width: 100px;
    height: 35px;
    font-size: 18px;
}


/* sideBar */
.create-project-button {
    margin-top: 15px;
    margin-left: 10px;
    background-color: rgba(127, 49, 49, 0);
    color: #135589;
    font-weight: bold;
    border: none;
    font-size: 21px;
    
}

.project-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    position: relative;
    width: 100%;
}

.project-title {
    overflow: hidden;
    /* white-space: nowrap;
    text-overflow: ellipsis; */

    margin-bottom: 10px;
    margin-left: 13px;
}

.project-title:after {
    display: block;
    content: '';
    border-bottom: 2px solid black;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
}

.project-title:hover:after {
    transform: scaleX(1);
}

.add-task-button {
    height: 25px;
    width: 25px;
    /* background-color: #32485c; */
    background-color: #135589;
    border: none;
    color: white;
    border-radius: 50%;
    margin-left: 35px;
    margin-bottom: 10px;
}

.add-task-button:hover {
    border: 2px solid white;
}

.task-title-container {
    /* color: #351F39; */
    margin-bottom: 8px;
    margin-left: 35px;
}

.delete-project-button {
    position: absolute;
    top: 28px;
    right: 28px;
}`, "",{"version":3,"sources":["webpack://./src/projectBar.css"],"names":[],"mappings":";;AAEA,2BAA2B;;AAE3B;IACI,0CAA0C;IAC1C,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;;IAEI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;;AAGA,YAAY;AACZ;IACI,gBAAgB;IAChB,iBAAiB;IACjB,sCAAsC;IACtC,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB;8BAC0B;;IAE1B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,8BAA8B;IAC9B,oBAAoB;IACpB,sCAAsC;AAC1C;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf","sourcesContent":["\n\n/* styling for ProjectBar */\n\n.projects-container {\n    /* background-color: rgb(202, 201, 201); */\n    background-color: #53a8b6;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    grid-row: 2;\n    grid-column: 1 / 2;\n    min-height: 2000px;\n}\n\n.task-form-container {\n    display: none;\n}\n\n.task-form-container-active {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    min-height: 450px;\n    width: 320px;\n    left: 50%;\n    top: 180px;\n    transform: translate(-50%);\n    padding: 30px;\n    border-radius: 25px;\n    background-color: #79c2d0;\n    box-shadow: -7px 9px 100px 2px black;\n}\n\n#task-title, #description, #due-date,\n#importance {\n    margin-bottom: 20px;\n    min-width: 295px;\n    font-size: 17px;\n    padding: 10px;\n}\n\n#task-form > label {\n    display: block;\n    min-width: 295px;\n    font-size: 20px;\n}\n\n.exit-button {\n    position: absolute;\n    top: 13px;\n    right: 15px;\n    width: 28px;\n    height: 28px;\n    background-color: brown;\n    color: white;\n    border: none;\n    border-radius: 20px;\n}\n\n.submit-task {\n    /* align-content: center; */\n    margin-left: 100px;\n    margin-top: 20px;\n    width: 100px;\n    height: 35px;\n    font-size: 18px;\n}\n\n\n/* sideBar */\n.create-project-button {\n    margin-top: 15px;\n    margin-left: 10px;\n    background-color: rgba(127, 49, 49, 0);\n    color: #135589;\n    font-weight: bold;\n    border: none;\n    font-size: 21px;\n    \n}\n\n.project-cont {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: start;\n    position: relative;\n    width: 100%;\n}\n\n.project-title {\n    overflow: hidden;\n    /* white-space: nowrap;\n    text-overflow: ellipsis; */\n\n    margin-bottom: 10px;\n    margin-left: 13px;\n}\n\n.project-title:after {\n    display: block;\n    content: '';\n    border-bottom: 2px solid black;\n    transform: scaleX(0);\n    transition: transform 0.2s ease-in-out;\n}\n\n.project-title:hover:after {\n    transform: scaleX(1);\n}\n\n.add-task-button {\n    height: 25px;\n    width: 25px;\n    /* background-color: #32485c; */\n    background-color: #135589;\n    border: none;\n    color: white;\n    border-radius: 50%;\n    margin-left: 35px;\n    margin-bottom: 10px;\n}\n\n.add-task-button:hover {\n    border: 2px solid white;\n}\n\n.task-title-container {\n    /* color: #351F39; */\n    margin-bottom: 8px;\n    margin-left: 35px;\n}\n\n.delete-project-button {\n    position: absolute;\n    top: 28px;\n    right: 28px;\n}"],"sourceRoot":""}]);
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
    background-color: #53a8b6;
    min-height: 100vh;
    min-width: 100%;
    margin: 0px;
    padding: 0px;
}

body {
    margin: 0px;
    padding: 0px;
    min-height: 100vh;
    min-width: 100vh;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 4.5fr;
    grid-template-rows: 90px 7fr;
}

.header {
    background-color: #53a8b6;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    /* border-bottom: 4px solid #726A95; */
}


.main-breakout-container {
    grid-row: 2;
    grid-column: 2 / 3;
    padding-left: 40px;
    padding-top: 55px;
    background-color: #dfe2d2;
    border-top-left-radius: 25px;
}

.create-task-button {
    height: 40px;
    width: 100px;
}

.main-breakout-container > div {
    display: none;
    height: 320px;
    /* background-color: bisque; */
    margin-bottom: 25px;
}


.task-article {
    display: grid;
    grid-template-columns: 3.2fr 1fr;
    min-height: 12vh;
    width: 125vh;
    padding: 0px 20px;
    padding-top: 10px;
    background-color: #cbc5c1;
    border-radius: 20px;
    margin-bottom: 25px;
}

.task-article:hover {
    transition: all 0.3s;
    transform: scale(1.01);
    box-shadow: 4px 7px 18px -3px black;
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
    background-color: #aed9da;
    transition: all 0.3 ease;
    margin-bottom: 10px;
    padding: 5px 0px;
    padding-left: 20px;
    border-radius: 20px;
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
    padding: 0px 10px;
    padding-top: 10px;
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
    border: none;
    border-radius: 20px;
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
    border: none;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    text-align: center;
}

.drop-down-task {
    transform: rotate(180deg);
    background-color: white;
    border: none;
    border-radius: 50%;
    height: 22px;
    width: 22px;
    margin-right: 10px;
    margin-bottom: 10px;
    justify-self: end;
    align-self: center;
    font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/to-do.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,sCAAsC;AAC1C;;;AAGA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,gCAAgC;IAChC,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,mCAAmC;AACvC;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB;mBACe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;;AAGA;IACI,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["html {\n    background-color: #53a8b6;\n    min-height: 100vh;\n    min-width: 100%;\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    min-height: 100vh;\n    min-width: 100vh;\n    display: grid;\n    position: relative;\n    grid-template-columns: 1fr 4.5fr;\n    grid-template-rows: 90px 7fr;\n}\n\n.header {\n    background-color: #53a8b6;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    /* border-bottom: 4px solid #726A95; */\n}\n\n\n.main-breakout-container {\n    grid-row: 2;\n    grid-column: 2 / 3;\n    padding-left: 40px;\n    padding-top: 55px;\n    background-color: #dfe2d2;\n    border-top-left-radius: 25px;\n}\n\n.create-task-button {\n    height: 40px;\n    width: 100px;\n}\n\n.main-breakout-container > div {\n    display: none;\n    height: 320px;\n    /* background-color: bisque; */\n    margin-bottom: 25px;\n}\n\n\n.task-article {\n    display: grid;\n    grid-template-columns: 3.2fr 1fr;\n    min-height: 12vh;\n    width: 125vh;\n    padding: 0px 20px;\n    padding-top: 10px;\n    background-color: #cbc5c1;\n    border-radius: 20px;\n    margin-bottom: 25px;\n}\n\n.task-article:hover {\n    transition: all 0.3s;\n    transform: scale(1.01);\n    box-shadow: 4px 7px 18px -3px black;\n}\n\n\n.taskDrop-container {\n    display: none;\n    background-color: beige;\n    grid-column: 1 / 3;\n    /* max-height: 4vh;\n    width: 100vh; */\n    transition: all 0.3 ease;\n}\n\n.taskDrop-container-active {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 6vh;\n    max-width: 110vh;\n    grid-column: 1 / 3;\n    grid-row: 2;\n    background-color: #aed9da;\n    transition: all 0.3 ease;\n    margin-bottom: 10px;\n    padding: 5px 0px;\n    padding-left: 20px;\n    border-radius: 20px;\n}\n\n.task-space1 {\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1.5fr;\n}\n\n.task-space2 {\n    grid-column: 2;\n    display: grid;\n    grid-template-rows: 1fr 1.5fr;\n    justify-content: end;\n}\n\n.task-title2 {\n    margin: 3px;\n}\n\n.description2 {\n    padding: 0px 10px;\n    padding-top: 10px;\n}\n\n\n.task-space2-row1 {\n    display: flex;\n    justify-content: space-between;\n    grid-row: 1;\n    justify-self: stretch;\n}\n\n.due-date2 {\n    padding-right: 25px;\n}\n\n.delete-task {\n    background-color: brown;\n    color: white;\n    font-weight: bold;\n    min-width: 50px;\n    height: 46px;\n    justify-self: end;\n    border: none;\n    border-radius: 20px;\n}\n\n\n.priority-bar {\n    grid-row: 2;\n    grid-column: 1/ 3;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n.priority-title {\n    grid-column: 1;\n    grid-row: 1;\n}\n\n.priority-button {\n    margin-right: 20px;\n}\n\n.complete-task-button {\n    grid-row: 1 / 3;\n    grid-column: 2;\n    align-self: center;\n    justify-self: end;\n    margin-right: 75px;\n    height: 30px;\n    width: 75px;\n    background-color: lightseagreen;\n    border: none;\n    border-radius: 20px;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n}\n\n.drop-down-task {\n    transform: rotate(180deg);\n    background-color: white;\n    border: none;\n    border-radius: 50%;\n    height: 22px;\n    width: 22px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    justify-self: end;\n    align-self: center;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _taskModification_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskModification.js */ "./src/taskModification.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _projectModification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectModification.js */ "./src/projectModification.js");






const projectRun = (0,_projectModification_js__WEBPACK_IMPORTED_MODULE_2__.projectController)();

// let projectIndexArray = [];
let createIsTrue;


function createTask(task) {
    console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad);

    createIsTrue = false;

    console.log(task.assignedProject)
    console.log(task);


    const breakout2Run = (0,_projectModification_js__WEBPACK_IMPORTED_MODULE_2__.breakoutController)();
    
    const breakoutInstance = breakout2Run.createTaskBreakout(createIsTrue);
    console.log(breakoutInstance);



    // sets the correct project being added to
    let currentBreakoutInstance = _projectModification_js__WEBPACK_IMPORTED_MODULE_2__.correctBreakoutInstance;
    
    console.log(currentBreakoutInstance);
    

    // in this block, every container in projectIndexArray should be iterated through
    // to check if it matches the assigned container number to the specific task
    if (_index_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad === true) {
        _projectModification_js__WEBPACK_IMPORTED_MODULE_2__.correctBreakoutArray.forEach(container => {
            if (_projectModification_js__WEBPACK_IMPORTED_MODULE_2__.correctBreakoutArray.indexOf(container) === task.assignedProject){
                currentBreakoutInstance = container;
                console.log(currentBreakoutInstance)

                return currentBreakoutInstance
            }
        })

        
    } 


    createTaskArticle(task, currentBreakoutInstance, _index_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad);
   

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
        const deleteTaskRun = (0,_taskModification_js__WEBPACK_IMPORTED_MODULE_0__.taskModifier)()
        deleteTaskRun.removeTask(taskArticle, currentBreakoutInstance);

        projectRun.removeTaskTitle(taskTitleContainer);

        console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.tasks);
        const taskIndex = _index_js__WEBPACK_IMPORTED_MODULE_1__.tasks.indexOf(task);
        _index_js__WEBPACK_IMPORTED_MODULE_1__.tasks.splice(taskIndex, 1)
        console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.tasks)
        localStorage.setItem('tasks', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_1__.tasks));
    })



    // fill hidden dropdown
    const priorityBar = document.createElement('div');
    articleFactory.addToArticle(priorityBar,'priority-bar', taskDropContainer);
    (0,_taskModification_js__WEBPACK_IMPORTED_MODULE_0__.createPriorityBar)(task.importance, priorityBar, taskDropContainer);

    const completeTaskButton = document.createElement('button');
    articleFactory.addToArticle(completeTaskButton,'complete-task-button', taskDropContainer);
    completeTaskButton.textContent = 'Complete';

    completeTaskButton.addEventListener('click', () => {
        const completeTaskRun = (0,_taskModification_js__WEBPACK_IMPORTED_MODULE_0__.taskModifier)()
        completeTaskRun.removeTask(taskArticle, currentBreakoutInstance);

        projectRun.removeTaskTitle(taskTitleContainer);

        console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.tasks);
        const taskIndex = _index_js__WEBPACK_IMPORTED_MODULE_1__.tasks.indexOf(task);
        _index_js__WEBPACK_IMPORTED_MODULE_1__.tasks.splice(taskIndex, 1)
        console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.tasks)
        localStorage.setItem('tasks', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_1__.tasks));
    })


    // drop down button and function
    const dropDownTask = document.createElement('button');
    articleFactory.addToArticle(dropDownTask, 'drop-down-task', taskSpace2)
    dropDownTask.textContent = '^'
    ;(0,_taskModification_js__WEBPACK_IMPORTED_MODULE_0__.taskDropLogic)(dropDownTask, taskDropContainer, task.name)
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

    const firstBreakoutRun = (0,_projectModification_js__WEBPACK_IMPORTED_MODULE_2__.breakoutController)();
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





let addButtonArray = [];
let assignedTask;

let activeProjectContainer;

let projectContainers = [];

// in charge of creating a new container each time a project
// is created
const projectController = function () {


    function createProjectContainer(project) {
        const projectIndex = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project);

        const projectContainer = document.createElement('div');
        projectContainers.push(projectContainer);
        activeProjectContainer = projectContainer;
        const projectContainerIndex = projectContainers.indexOf(projectContainer);
        console.log(projectContainerIndex);


        projectFactory.addToProjectBar(projectContainer, 'project-cont', _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsContainer);
        console.log('added project container')

        const projectTitle = document.createElement('h2')
        projectFactory.addToProjectBar(projectTitle, 'project-title', projectContainer);
        
        projectTitle.textContent = project.name;
        projectTitle.contentEditable = "true";

        const deleteProjectButton = document.createElement('button');
        projectFactory.addToProjectBar(deleteProjectButton, 'delete-project-button', projectContainer);
        deleteProjectButton.textContent = 'X';

        
        appendTaskButton(projectContainer);


        projectContainer.addEventListener('click', () => {
            console.log('yas bitch');
            // find matching index in between appendTask buttons and 
            // project containers and then pass that matching
            // number into changeActiveBreakout ... here the display
            // will be set to active
            addButtonArray.forEach(button => {
                if (addButtonArray.indexOf(button) === projectContainerIndex) {
                    console.log('this is it')
                    const breakoutDisplayRun = breakoutController()
                    breakoutDisplayRun.changeActiveBreakout(addButtonArray.indexOf(button))
                    
                    changeProjectDisplay(correctBreakoutInstance);
                };
            });
            
        });

        deleteProjectButton.addEventListener('click', () => {
            console.log('wow it worked!!!!!');
            console.log(addButtonArray);
            console.log(projectContainers);
            console.log(taskBreakoutArray);
            console.log(correctBreakoutArray);
            // need to delete entry in all 4 of the above arrays^
            removeProject(projectContainer, _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsContainer);

            const deleteBreakoutRun = breakoutController();
            // deleteBreakoutRun.changeActiveBreakout(projectContainerIndex);
            
            console.log('changed by delete!')
            deleteBreakoutRun.deleteActiveBreakout(projectContainerIndex);

            //remove from storage
            _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectIndex, 1);
            
            localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects));
            console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects);
        });
        
    };




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

    
    function removeProject(projectContainer, projectsContainer) {
        projectsContainer.removeChild(projectContainer);

    }

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
        changeActiveProject, removeProject, removeTaskTitle}

    
    
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

            // disabled background
            console.log('has been disabled');
            _index_js__WEBPACK_IMPORTED_MODULE_0__.MainBreakoutContainer.style.pointerEvents = "none"
            _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsContainer.style.pointerEvents = "none"
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
            // correctBreakoutInstance = taskBreakoutInstance;
            correctBreakoutArray.push(correctBreakoutInstance);

            taskBreakoutCounter ++;

            return correctBreakoutInstance

        }


        return correctBreakoutInstance

    }



    function changeActiveBreakout(activeTaskButton) {
        console.log(activeTaskButton);
        correctBreakoutInstance = taskBreakoutArray[activeTaskButton];

        console.log(correctBreakoutInstance);
        console.log('breakout has changed');

        return {correctBreakoutInstance}
    };



    function deleteActiveBreakout(projectContainerIndex) {
        console.log(correctBreakoutInstance);
        // MainBreakoutContainer.removeChild(correctBreakoutInstance);

        // delete memory of breakoutContainer
        correctBreakoutArray.forEach(breakout => {
            console.log(projectContainerIndex);
            if (correctBreakoutArray.indexOf(breakout) === projectContainerIndex) {
                correctBreakoutArray.splice(breakout, 1);
                console.log(correctBreakoutArray);
            };
        });

        // delete memory of addButton
        addButtonArray.forEach(button => {
            console.log(projectContainerIndex);
            if (addButtonArray.indexOf(button) === projectContainerIndex) {
                addButtonArray.splice(button, 1);
                console.log(addButtonArray);
            };
        });

        // delete memory of projectContainer
        projectContainers.forEach(container => {
            console.log(projectContainerIndex);
            if (projectContainers.indexOf(container) === projectContainerIndex) {
                projectContainers.splice(container, 1);
                console.log(projectContainers);
            };
        });

        // delete memory of task breakout
        taskBreakoutArray.forEach(breakout2 => {
            console.log(projectContainerIndex);
            if (taskBreakoutArray.indexOf(breakout2) === projectContainerIndex) {
                console.log(breakout2);
                _index_js__WEBPACK_IMPORTED_MODULE_0__.MainBreakoutContainer.removeChild(breakout2);
                taskBreakoutArray.splice(breakout2, 1);
                console.log(taskBreakoutArray);
            };
        });

    };


    return {createTaskBreakout, changeActiveBreakout, deleteActiveBreakout}

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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./src/index.js");






// console.log(addButtonArray);

function linkForm(tasks) {
    const taskForm = document.getElementById('task-form');

    const taskTitle = document.getElementById('task-title');
    console.log(taskTitle);
    const taskDescription = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const importance = document.getElementById('importance');


    const submitTask = document.querySelector('.submit-task');
    const exitTask = document.querySelector('.exit-button');
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

        // frees up background
        _index_js__WEBPACK_IMPORTED_MODULE_3__.MainBreakoutContainer.style.pointerEvents = "auto"
        _index_js__WEBPACK_IMPORTED_MODULE_3__.projectsContainer.style.pointerEvents = "auto"

        _projectModification_js__WEBPACK_IMPORTED_MODULE_1__.modifyTaskForm.toggleTaskForm();
        resetForm(taskForm);

        (0,_objectCreator__WEBPACK_IMPORTED_MODULE_0__.createTask)(task);

        

    });

    exitTask.addEventListener('click', () => {
        _projectModification_js__WEBPACK_IMPORTED_MODULE_1__.modifyTaskForm.toggleTaskForm();

        _index_js__WEBPACK_IMPORTED_MODULE_3__.MainBreakoutContainer.style.pointerEvents = "auto"
        _index_js__WEBPACK_IMPORTED_MODULE_3__.projectsContainer.style.pointerEvents = "auto"
    })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FB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Q0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEJhci5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90by1kby5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0QmFyLmNzcz85MTkzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8uY3NzP2Y4YTgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvb2JqZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RNb2RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTW9kaWZpY2F0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdXNlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcblxuLyogc3R5bGluZyBmb3IgUHJvamVjdEJhciAqL1xuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDEsIDIwMSk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYThiNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBtaW4taGVpZ2h0OiAyMDAwcHg7XG59XG5cbi50YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1mb3JtLWNvbnRhaW5lci1hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxODBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5YzJkMDtcbiAgICBib3gtc2hhZG93OiAtN3B4IDlweCAxMDBweCAycHggYmxhY2s7XG59XG5cbiN0YXNrLXRpdGxlLCAjZGVzY3JpcHRpb24sICNkdWUtZGF0ZSxcbiNpbXBvcnRhbmNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1pbi13aWR0aDogMjk1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiN0YXNrLWZvcm0gPiBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLXdpZHRoOiAyOTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5leGl0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTNweDtcbiAgICByaWdodDogMTVweDtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc3VibWl0LXRhc2sge1xuICAgIC8qIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuXG4vKiBzaWRlQmFyICovXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCA0OSwgNDksIDApO1xuICAgIGNvbG9yOiAjMTM1NTg5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgXG59XG5cbi5wcm9qZWN0LWNvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAqL1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLnByb2plY3QtdGl0bGU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3QtdGl0bGU6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG4uYWRkLXRhc2stYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzMyNDg1YzsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1NTg5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4udGFzay10aXRsZS1jb250YWluZXIge1xuICAgIC8qIGNvbG9yOiAjMzUxRjM5OyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjhweDtcbiAgICByaWdodDogMjhweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wcm9qZWN0QmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOztBQUVBLDJCQUEyQjs7QUFFM0I7SUFDSSwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7QUFHQSxZQUFZO0FBQ1o7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCOzhCQUMwQjs7SUFFMUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuLyogc3R5bGluZyBmb3IgUHJvamVjdEJhciAqL1xcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDEsIDIwMSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E4YjY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgbWluLWhlaWdodDogMjAwMHB4O1xcbn1cXG5cXG4udGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWluLWhlaWdodDogNDUwcHg7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDE4MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5YzJkMDtcXG4gICAgYm94LXNoYWRvdzogLTdweCA5cHggMTAwcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4jdGFzay10aXRsZSwgI2Rlc2NyaXB0aW9uLCAjZHVlLWRhdGUsXFxuI2ltcG9ydGFuY2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDI5NXB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiN0YXNrLWZvcm0gPiBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI5NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5leGl0LWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxM3B4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uc3VibWl0LXRhc2sge1xcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuLyogc2lkZUJhciAqL1xcbi5jcmVhdGUtcHJvamVjdC1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDQ5LCA0OSwgMCk7XFxuICAgIGNvbG9yOiAjMTM1NTg5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGU6aG92ZXI6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4NWM7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzU1ODk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi50YXNrLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIC8qIGNvbG9yOiAjMzUxRjM5OyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI4cHg7XFxuICAgIHJpZ2h0OiAyOHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E4YjY7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNC41ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDdmcjtcbn1cblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYThiNjtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIC8qIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNzI2QTk1OyAqL1xufVxuXG5cbi5tYWluLWJyZWFrb3V0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmQyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG59XG5cbi5jcmVhdGUtdGFzay1idXR0b24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5tYWluLWJyZWFrb3V0LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5cbi50YXNrLWFydGljbGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzLjJmciAxZnI7XG4gICAgbWluLWhlaWdodDogMTJ2aDtcbiAgICB3aWR0aDogMTI1dmg7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiYzVjMTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi50YXNrLWFydGljbGU6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgYm94LXNoYWRvdzogNHB4IDdweCAxOHB4IC0zcHggYmxhY2s7XG59XG5cblxuLnRhc2tEcm9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgLyogbWF4LWhlaWdodDogNHZoO1xuICAgIHdpZHRoOiAxMDB2aDsgKi9cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG59XG5cbi50YXNrRHJvcC1jb250YWluZXItYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgbWluLWhlaWdodDogNnZoO1xuICAgIG1heC13aWR0aDogMTEwdmg7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWQ5ZGE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnRhc2stc3BhY2UxIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuNWZyO1xufVxuXG4udGFzay1zcGFjZTIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi50YXNrLXRpdGxlMiB7XG4gICAgbWFyZ2luOiAzcHg7XG59XG5cbi5kZXNjcmlwdGlvbjIge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5cbi50YXNrLXNwYWNlMi1yb3cxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBncmlkLXJvdzogMTtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5kdWUtZGF0ZTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5kZWxldGUtdGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cblxuLnByaW9yaXR5LWJhciB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDEvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcmlvcml0eS10aXRsZSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDE7XG59XG5cbi5wcmlvcml0eS1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvbXBsZXRlLXRhc2stYnV0dG9uIHtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIG1hcmdpbi1yaWdodDogNzVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHJvcC1kb3duLXRhc2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG8tZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQjttQkFDZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYThiNjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQuNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggN2ZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYThiNjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIC8qIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNzI2QTk1OyAqL1xcbn1cXG5cXG5cXG4ubWFpbi1icmVha291dC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmQyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uY3JlYXRlLXRhc2stYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5tYWluLWJyZWFrb3V0LWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuXFxuLnRhc2stYXJ0aWNsZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMy4yZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xcbiAgICB3aWR0aDogMTI1dmg7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiYzVjMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLnRhc2stYXJ0aWNsZTpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbiAgICBib3gtc2hhZG93OiA0cHggN3B4IDE4cHggLTNweCBibGFjaztcXG59XFxuXFxuXFxuLnRhc2tEcm9wLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIC8qIG1heC1oZWlnaHQ6IDR2aDtcXG4gICAgd2lkdGg6IDEwMHZoOyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XFxufVxcblxcbi50YXNrRHJvcC1jb250YWluZXItYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcXG4gICAgbWF4LXdpZHRoOiAxMTB2aDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZDlkYTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50YXNrLXNwYWNlMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcXG59XFxuXFxuLnRhc2stc3BhY2UyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuNWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnRhc2stdGl0bGUyIHtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbjIge1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcblxcbi50YXNrLXNwYWNlMi1yb3cxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4uZHVlLWRhdGUyIHtcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA0NnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5cXG4ucHJpb3JpdHktYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAxLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5wcmlvcml0eS1idXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb21wbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIG1hcmdpbi1yaWdodDogNzVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kcm9wLWRvd24tdGFzayB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdEJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RCYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvLWRvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG8tZG8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vdG8tZG8uY3NzJztcbmltcG9ydCAnLi9wcm9qZWN0QmFyLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi9vYmplY3RDcmVhdG9yJztcbmltcG9ydCB7IGxpbmtGb3JtIH0gZnJvbSAnLi91c2VyZm9ybSc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9vYmplY3QnO1xuaW1wb3J0IHsgY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UsIGJyZWFrb3V0Q29udHJvbGxlciB9IGZyb20gJy4vcHJvamVjdE1vZGlmaWNhdGlvbic7XG5cblxuLy8gb2JqZWN0Q3JlYXRvci5qczogZmlpbGUgdGhhdCBjb250YWlucyB0aGUgbG9naWMgdGhhdCBjcmVhdGVzXG4vLyBuZXcgdGFzayBhcnRpY2xlIGNhcmRzIHVuZGVyIGVhY2ggcHJvamVjdFxuXG4vLyBvYmplY3QuanMgY29udGFpbnMgdGhlIFRhc2sgY2xhc3MgaXMgdXNlZCB0byBnZW5lcmF0ZSBuZXcgaW5zdGFuY2VzXG4vLyB3aGVuIGEgbmV3IHRhc2sgaXMgZ2VuZXJhdGVkXG5cbi8vIHN0cnVjdHVyZS5qczogZmlsZSB0aGF0IGxheXMgb3V0IHRoZSBmb3VuZGF0aW9uYWwgcmVmZXJlbmNlc1xuLy8gYW5kIGxpbmtzIG9mIHRoZSB0by1kbyBzdHJ1Y3R1cmVcblxuLy8gdXNlcmZvcm0uanM6IGhhbmRsZXMgdGhlIGxvZ2ljIG9mIHdoYXQgaGFwcGVucyB3aGVuIHRoZSB1c2VyXG4vLyBmaWxscyBvdXQgYSBmb3JtIHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IG9yIHRhc2tcblxuLy8gdGFza01vZGlmaWNhdGlvbi5qczogaGFuZGxlcyB0aGUgbG9naWMgdG8gZGlzcGxheSBjaGFuZ2VzXG4vLyBvbiBicm9zd2VyIHdoZW4gdGFza3MgYXJlIGJlaW5nIGJ1aWx0IG9yIGFyZSBkZWxldGVkXG5leHBvcnQgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IE1haW5CcmVha291dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJyZWFrb3V0LWNvbnRhaW5lcicpO1xuXG5cbmV4cG9ydCBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbmNvbnNvbGUubG9nKHRhc2tzKVxuXG5leHBvcnQgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XG5cbmV4cG9ydCBsZXQgcGFnZUxvYWQgPSB0cnVlO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAvLyBjb25zdCBpbml0aWFsUnVuID0gYnJlYWtvdXRDb250cm9sbGVyKCk7XG4gICAgLy8gbGV0IHBhZ2VMb2FkID0gdHJ1ZTtcblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKGNvcnJlY3RCcmVha291dEluc3RhbmNlKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG5cbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrKHRhc2spO1xuICAgIH0pXG5cbiAgICBwYWdlTG9hZCA9IGZhbHNlO1xuXG59KTtcblxuXG5cblxubGlua0Zvcm0odGFza3MpO1xuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXByb2plY3QtYnV0dG9uJyk7XG5jcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCdOZXcgUHJvamVjdCcpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGlvbiB0aXJnZ2VyZWQnKTtcbiAgICBcblxuICAgIGNyZWF0ZVByb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbn0pXG5cblxuXG5cblxuXG4iLCJcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW5jZSwgYXNzaWduZWRQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbiAgICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3QgPSBhc3NpZ25lZFByb2plY3RcblxuICAgIH1cbn07XG5cblxuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59OyIsIlxuaW1wb3J0IHsgY3JlYXRlUHJpb3JpdHlCYXIsIHRhc2tEcm9wTG9naWMsIHRhc2tNb2RpZmllcn0gZnJvbSBcIi4vdGFza01vZGlmaWNhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdGFza3MsIHBhZ2VMb2FkfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IHByb2plY3RDb250cm9sbGVyLCBicmVha291dENvbnRyb2xsZXIsIGNvcnJlY3RCcmVha291dEluc3RhbmNlLCBjb3JyZWN0QnJlYWtvdXRBcnJheX0gZnJvbSBcIi4vcHJvamVjdE1vZGlmaWNhdGlvbi5qc1wiO1xuXG5cbmNvbnN0IHByb2plY3RSdW4gPSBwcm9qZWN0Q29udHJvbGxlcigpO1xuXG4vLyBsZXQgcHJvamVjdEluZGV4QXJyYXkgPSBbXTtcbmxldCBjcmVhdGVJc1RydWU7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaykge1xuICAgIGNvbnNvbGUubG9nKHBhZ2VMb2FkKTtcblxuICAgIGNyZWF0ZUlzVHJ1ZSA9IGZhbHNlO1xuXG4gICAgY29uc29sZS5sb2codGFzay5hc3NpZ25lZFByb2plY3QpXG4gICAgY29uc29sZS5sb2codGFzayk7XG5cblxuICAgIGNvbnN0IGJyZWFrb3V0MlJ1biA9IGJyZWFrb3V0Q29udHJvbGxlcigpO1xuICAgIFxuICAgIGNvbnN0IGJyZWFrb3V0SW5zdGFuY2UgPSBicmVha291dDJSdW4uY3JlYXRlVGFza0JyZWFrb3V0KGNyZWF0ZUlzVHJ1ZSk7XG4gICAgY29uc29sZS5sb2coYnJlYWtvdXRJbnN0YW5jZSk7XG5cblxuXG4gICAgLy8gc2V0cyB0aGUgY29ycmVjdCBwcm9qZWN0IGJlaW5nIGFkZGVkIHRvXG4gICAgbGV0IGN1cnJlbnRCcmVha291dEluc3RhbmNlID0gY29ycmVjdEJyZWFrb3V0SW5zdGFuY2U7XG4gICAgXG4gICAgY29uc29sZS5sb2coY3VycmVudEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgIFxuXG4gICAgLy8gaW4gdGhpcyBibG9jaywgZXZlcnkgY29udGFpbmVyIGluIHByb2plY3RJbmRleEFycmF5IHNob3VsZCBiZSBpdGVyYXRlZCB0aHJvdWdoXG4gICAgLy8gdG8gY2hlY2sgaWYgaXQgbWF0Y2hlcyB0aGUgYXNzaWduZWQgY29udGFpbmVyIG51bWJlciB0byB0aGUgc3BlY2lmaWMgdGFza1xuICAgIGlmIChwYWdlTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb3JyZWN0QnJlYWtvdXRBcnJheS5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgICAgICBpZiAoY29ycmVjdEJyZWFrb3V0QXJyYXkuaW5kZXhPZihjb250YWluZXIpID09PSB0YXNrLmFzc2lnbmVkUHJvamVjdCl7XG4gICAgICAgICAgICAgICAgY3VycmVudEJyZWFrb3V0SW5zdGFuY2UgPSBjb250YWluZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEJyZWFrb3V0SW5zdGFuY2UpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEJyZWFrb3V0SW5zdGFuY2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICB9IFxuXG5cbiAgICBjcmVhdGVUYXNrQXJ0aWNsZSh0YXNrLCBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSwgcGFnZUxvYWQpO1xuICAgXG5cbn07XG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tBcnRpY2xlKHRhc2ssIGN1cnJlbnRCcmVha291dEluc3RhbmNlLCBwYWdlTG9hZCkge1xuXG5cbiAgICBjb25zdCB0YXNrQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZSh0YXNrQXJ0aWNsZSwgJ3Rhc2stYXJ0aWNsZScsIGN1cnJlbnRCcmVha291dEluc3RhbmNlKTtcblxuICAgIC8vIGNyZWF0ZSB0d28gaW5uZXIgZGl2IGNvbnRhaW5lcnM6XG4gICAgY29uc3QgdGFza1NwYWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZSh0YXNrU3BhY2UxLCAndGFzay1zcGFjZTEnLCB0YXNrQXJ0aWNsZSk7XG5cbiAgICBjb25zdCB0YXNrU3BhY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHRhc2tTcGFjZTIsICd0YXNrLXNwYWNlMicsIHRhc2tBcnRpY2xlKTtcblxuXG5cbiAgICAgLy8gaW5pdGlhbGx5IGludmlzaWJsZSBjb250YWluZXI6XG4gICAgIGNvbnN0IHRhc2tEcm9wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHRhc2tEcm9wQ29udGFpbmVyLCAndGFza0Ryb3AtY29udGFpbmVyJywgdGFza0FydGljbGUpO1xuXG5cblxuICAgIC8vIGZpbGwgdGFza1NwYWNlMTpcbiAgICBjb25zdCB0YXNrVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUodGFza1RpdGxlMiwgJ3Rhc2stdGl0bGUyJywgdGFza1NwYWNlMSk7XG4gICAgdGFza1RpdGxlMi50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICB0YXNrVGl0bGUyLmNvbnRlbnRFZGl0YWJsZSA9IFwidHJ1ZVwiO1xuXG5cbiAgICAvLyBhZGQgdGFza1RpdGxlIHRvIHByb2plY3RCYXJcbiAgICBjb25zdCB0YXNrVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0Q29udHJvbGxlcik7XG4gICAgcHJvamVjdFJ1bi5hcHBlbmRUYXNrVGl0bGUodGFza1RpdGxlMiwgdGFza1RpdGxlMi50ZXh0Q29udGVudCwgXG4gICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lciwgcGFnZUxvYWQsIHRhc2suYXNzaWduZWRQcm9qZWN0KTtcblxuXG5cbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUodGFza0Rlc2NyaXB0aW9uMiwgJ2Rlc2NyaXB0aW9uMicsIHRhc2tTcGFjZTEpO1xuICAgIHRhc2tEZXNjcmlwdGlvbjIudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tEZXNjcmlwdGlvbjIuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XG4gICAgXG5cblxuICAgIC8vIGZpbGwgdGFza1NwYWNlMjpcbiAgICBjb25zdCB0YXNrU3BhY2UyRmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUodGFza1NwYWNlMkZpcnN0LCd0YXNrLXNwYWNlMi1yb3cxJywgdGFza1NwYWNlMik7XG5cbiAgICBjb25zdCBkdWVEYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShkdWVEYXRlMiwnZHVlLWRhdGUyJywgdGFza1NwYWNlMkZpcnN0KTtcbiAgICBkdWVEYXRlMi50ZXh0Q29udGVudCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfWA7XG4gICAgLy8gZmlndXJlIG91dCBob3cgdG8gZWRpdCB0aGUgZGF0ZSBoZXJlXG5cbiAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKGRlbGV0ZVRhc2tCdXR0b24sICdkZWxldGUtdGFzaycsIHRhc2tTcGFjZTJGaXJzdCk7XG4gICAgZGVsZXRlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcblxuICAgIGRlbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tSdW4gPSB0YXNrTW9kaWZpZXIoKVxuICAgICAgICBkZWxldGVUYXNrUnVuLnJlbW92ZVRhc2sodGFza0FydGljbGUsIGN1cnJlbnRCcmVha291dEluc3RhbmNlKTtcblxuICAgICAgICBwcm9qZWN0UnVuLnJlbW92ZVRhc2tUaXRsZSh0YXNrVGl0bGVDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgfSlcblxuXG5cbiAgICAvLyBmaWxsIGhpZGRlbiBkcm9wZG93blxuICAgIGNvbnN0IHByaW9yaXR5QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHByaW9yaXR5QmFyLCdwcmlvcml0eS1iYXInLCB0YXNrRHJvcENvbnRhaW5lcik7XG4gICAgY3JlYXRlUHJpb3JpdHlCYXIodGFzay5pbXBvcnRhbmNlLCBwcmlvcml0eUJhciwgdGFza0Ryb3BDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29tcGxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKGNvbXBsZXRlVGFza0J1dHRvbiwnY29tcGxldGUtdGFzay1idXR0b24nLCB0YXNrRHJvcENvbnRhaW5lcik7XG4gICAgY29tcGxldGVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcblxuICAgIGNvbXBsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcGxldGVUYXNrUnVuID0gdGFza01vZGlmaWVyKClcbiAgICAgICAgY29tcGxldGVUYXNrUnVuLnJlbW92ZVRhc2sodGFza0FydGljbGUsIGN1cnJlbnRCcmVha291dEluc3RhbmNlKTtcblxuICAgICAgICBwcm9qZWN0UnVuLnJlbW92ZVRhc2tUaXRsZSh0YXNrVGl0bGVDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgfSlcblxuXG4gICAgLy8gZHJvcCBkb3duIGJ1dHRvbiBhbmQgZnVuY3Rpb25cbiAgICBjb25zdCBkcm9wRG93blRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUoZHJvcERvd25UYXNrLCAnZHJvcC1kb3duLXRhc2snLCB0YXNrU3BhY2UyKVxuICAgIGRyb3BEb3duVGFzay50ZXh0Q29udGVudCA9ICdeJ1xuICAgIHRhc2tEcm9wTG9naWMoZHJvcERvd25UYXNrLCB0YXNrRHJvcENvbnRhaW5lciwgdGFzay5uYW1lKVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGFydGljbGVGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvQXJ0aWNsZShlbGVtZW50TmFtZSwgY2xhc3NOYW1lLCBmYXRoZXJFbGVtZW50ICkge1xuICAgICAgICAgICAgZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgZmF0aGVyRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50TmFtZSk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudE5hbWU7XG4gICAgICAgIH07XG4gICAgcmV0dXJuIHthZGRUb0FydGljbGV9O1xuXG59KSgpO1xuXG5cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIG5ldyBQb2plY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdClcblxuICAgIHByb2plY3RSdW4uY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZygncHJvamVjdCBjcmVhdGVkJyk7XG5cbiAgICBjcmVhdGVJc1RydWUgPSB0cnVlO1xuXG4gICAgY29uc3QgZmlyc3RCcmVha291dFJ1biA9IGJyZWFrb3V0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IGJyZWFrb3V0Q3JlYXRpb24gPSBmaXJzdEJyZWFrb3V0UnVuLmNyZWF0ZVRhc2tCcmVha291dChjcmVhdGVJc1RydWUpO1xuICAgIGNvbnNvbGUubG9nKGJyZWFrb3V0Q3JlYXRpb24pO1xuXG59XG5cblxuXG5cblxuXG4iLCJcbmltcG9ydCB7IHByb2plY3RzQ29udGFpbmVyLCBNYWluQnJlYWtvdXRDb250YWluZXIsIHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuXG5cbmV4cG9ydCBsZXQgYWRkQnV0dG9uQXJyYXkgPSBbXTtcbmV4cG9ydCBsZXQgYXNzaWduZWRUYXNrO1xuXG5leHBvcnQgbGV0IGFjdGl2ZVByb2plY3RDb250YWluZXI7XG5cbmxldCBwcm9qZWN0Q29udGFpbmVycyA9IFtdO1xuXG4vLyBpbiBjaGFyZ2Ugb2YgY3JlYXRpbmcgYSBuZXcgY29udGFpbmVyIGVhY2ggdGltZSBhIHByb2plY3Rcbi8vIGlzIGNyZWF0ZWRcbmV4cG9ydCBjb25zdCBwcm9qZWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVycy5wdXNoKHByb2plY3RDb250YWluZXIpO1xuICAgICAgICBhY3RpdmVQcm9qZWN0Q29udGFpbmVyID0gcHJvamVjdENvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lckluZGV4ID0gcHJvamVjdENvbnRhaW5lcnMuaW5kZXhPZihwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lckluZGV4KTtcblxuXG4gICAgICAgIHByb2plY3RGYWN0b3J5LmFkZFRvUHJvamVjdEJhcihwcm9qZWN0Q29udGFpbmVyLCAncHJvamVjdC1jb250JywgcHJvamVjdHNDb250YWluZXIpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkZWQgcHJvamVjdCBjb250YWluZXInKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKHByb2plY3RUaXRsZSwgJ3Byb2plY3QtdGl0bGUnLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNvbnRlbnRFZGl0YWJsZSA9IFwidHJ1ZVwiO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKGRlbGV0ZVByb2plY3RCdXR0b24sICdkZWxldGUtcHJvamVjdC1idXR0b24nLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcblxuICAgICAgICBcbiAgICAgICAgYXBwZW5kVGFza0J1dHRvbihwcm9qZWN0Q29udGFpbmVyKTtcblxuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneWFzIGJpdGNoJyk7XG4gICAgICAgICAgICAvLyBmaW5kIG1hdGNoaW5nIGluZGV4IGluIGJldHdlZW4gYXBwZW5kVGFzayBidXR0b25zIGFuZCBcbiAgICAgICAgICAgIC8vIHByb2plY3QgY29udGFpbmVycyBhbmQgdGhlbiBwYXNzIHRoYXQgbWF0Y2hpbmdcbiAgICAgICAgICAgIC8vIG51bWJlciBpbnRvIGNoYW5nZUFjdGl2ZUJyZWFrb3V0IC4uLiBoZXJlIHRoZSBkaXNwbGF5XG4gICAgICAgICAgICAvLyB3aWxsIGJlIHNldCB0byBhY3RpdmVcbiAgICAgICAgICAgIGFkZEJ1dHRvbkFycmF5LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkQnV0dG9uQXJyYXkuaW5kZXhPZihidXR0b24pID09PSBwcm9qZWN0Q29udGFpbmVySW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgaXQnKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBicmVha291dERpc3BsYXlSdW4gPSBicmVha291dENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgICAgICAgICBicmVha291dERpc3BsYXlSdW4uY2hhbmdlQWN0aXZlQnJlYWtvdXQoYWRkQnV0dG9uQXJyYXkuaW5kZXhPZihidXR0b24pKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJvamVjdERpc3BsYXkoY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvdyBpdCB3b3JrZWQhISEhIScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWRkQnV0dG9uQXJyYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lcnMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFza0JyZWFrb3V0QXJyYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29ycmVjdEJyZWFrb3V0QXJyYXkpO1xuICAgICAgICAgICAgLy8gbmVlZCB0byBkZWxldGUgZW50cnkgaW4gYWxsIDQgb2YgdGhlIGFib3ZlIGFycmF5c15cbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdENvbnRhaW5lciwgcHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCcmVha291dFJ1biA9IGJyZWFrb3V0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgLy8gZGVsZXRlQnJlYWtvdXRSdW4uY2hhbmdlQWN0aXZlQnJlYWtvdXQocHJvamVjdENvbnRhaW5lckluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQgYnkgZGVsZXRlIScpXG4gICAgICAgICAgICBkZWxldGVCcmVha291dFJ1bi5kZWxldGVBY3RpdmVCcmVha291dChwcm9qZWN0Q29udGFpbmVySW5kZXgpO1xuXG4gICAgICAgICAgICAvL3JlbW92ZSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfTtcblxuXG5cblxuICAgIC8vIGFkZHMgdGFza1RpdGxlIHRvIHByb2plY3RCYXJcbiAgICBjb25zdCBhcHBlbmRUYXNrVGl0bGUgPSBmdW5jdGlvbiAodGFza1RpdGxlMiwgdGFza1RpdGxlQ29udGVudCwgdGFza1RpdGxlQ29udGFpbmVyLCBwYWdlTG9hZCwgYXNzaWduZWRQcm9qZWN0KSB7XG5cbiAgICAgICAgaWYgKHBhZ2VMb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVycy5mb3JFYWNoKHNpZGVCYXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0Q29udGFpbmVycy5pbmRleE9mKHNpZGVCYXIpID09PSBhc3NpZ25lZFByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKHRhc2tUaXRsZUNvbnRhaW5lciwgJ3Rhc2stdGl0bGUtY29udGFpbmVyJywgc2lkZUJhcik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRhc2tUaXRsZUNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBwcm9qZWN0RmFjdG9yeS5hZGRUb1Byb2plY3RCYXIodGFza1RpdGxlQ29udGFpbmVyLCAndGFzay10aXRsZS1jb250YWluZXInLCBhY3RpdmVQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRhc2tUaXRsZUNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGFzayB0aXRsZSBhZGRlZCcpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZW5zdXJlIHRoYXQgdGFzayB0aXRsZXMgbWF0Y2ggd2hlbmV2ZXIgYSBjaGFuZ2UgaXMgbWFkZVxuICAgICAgICB0YXNrVGl0bGUyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IHRhc2tUaXRsZTIudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IG5ld1Rhc2tUaXRsZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXMgYmVlbiBibHVycmVkJylcbiAgICAgICAgfSk7XG5cblxuICAgIH07XG5cbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RDb250YWluZXIsIHByb2plY3RzQ29udGFpbmVyKSB7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFza1RpdGxlID0gZnVuY3Rpb24gKHRhc2tUaXRsZUNvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpO1xuICAgICAgICB0YXNrVGl0bGVDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFza0J1dHRvbihwcm9qZWN0Q29udGFpbmVyKSB7XG5cbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbkFycmF5LnB1c2goYWRkVGFza0J1dHRvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZEJ1dHRvbkFycmF5KTtcbiAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKGFkZFRhc2tCdXR0b24sICdhZGQtdGFzay1idXR0b24nLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICAgICAgY29uc3QgZW1wdHlSdW4gPSBicmVha291dENvbnRyb2xsZXIoKTtcblxuXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RpZnlUYXNrRm9ybS50b2dnbGVUYXNrRm9ybSgpXG5cbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZVByb2plY3QocHJvamVjdENvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgZW1wdHlSdW4uY2hhbmdlQWN0aXZlQnJlYWtvdXQoYWRkQnV0dG9uQXJyYXkuaW5kZXhPZihhZGRUYXNrQnV0dG9uKSk7XG5cbiAgICAgICAgICAgIGFzc2lnbmVkVGFzayA9IGFkZEJ1dHRvbkFycmF5LmluZGV4T2YoYWRkVGFza0J1dHRvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFzc2lnbmVkVGFzayk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3RDb250YWluZXIgPSBwcm9qZWN0Q29udGFpbmVyO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3RDb250YWluZXI7XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RDb250YWluZXIsIGFwcGVuZFRhc2tUaXRsZSwgXG4gICAgICAgIGNoYW5nZUFjdGl2ZVByb2plY3QsIHJlbW92ZVByb2plY3QsIHJlbW92ZVRhc2tUaXRsZX1cblxuICAgIFxuICAgIFxufVxuXG5cblxuY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWNvbnRhaW5lcicpO1xuXG5leHBvcnQgY29uc3QgbW9kaWZ5VGFza0Zvcm0gPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCd0b2dnbGUgcmFuJyk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUYXNrRm9ybSgpIHtcblxuICAgICAgICBpZiAodGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWZvcm0tY29udGFpbmVyLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcgYWN0aXZlJyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWZvcm0tY29udGFpbmVyLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgfSBlbHNlIGlmICghdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCcudGFzay1mb3JtLWNvbnRhaW5lci1hY3RpdmUnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvZXMgbm90IGhhdmUsIGFkZGluZyBub3cnKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1jb250YWluZXItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIC8vIGRpc2FibGVkIGJhY2tncm91bmRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXMgYmVlbiBkaXNhYmxlZCcpO1xuICAgICAgICAgICAgTWFpbkJyZWFrb3V0Q29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gY2xlYXJlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7dG9nZ2xlVGFza0Zvcm0sIGNsZWFyVGFza0Zvcm19XG4gICAgXG59KSgpO1xuXG5cblxuXG5cblxuXG5cbmxldCB0YXNrQnJlYWtvdXRDb3VudGVyID0gMDtcbmxldCB0YXNrQnJlYWtvdXRBcnJheSA9IFtdO1xuXG5leHBvcnQgbGV0IGNvcnJlY3RCcmVha291dEFycmF5ID0gW107XG5leHBvcnQgbGV0IGNvcnJlY3RCcmVha291dEluc3RhbmNlO1xuXG5cbmV4cG9ydCBjb25zdCBicmVha291dENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrQnJlYWtvdXQoY3JlYXRlSXNUcnVlKSB7XG5cbiAgIFxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVJc1RydWUpO1xuXG4gICAgICAgIGlmIChjcmVhdGVJc1RydWUgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tCcmVha291dEluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQnJlYWtvdXRBcnJheS5wdXNoKHRhc2tCcmVha291dEluc3RhbmNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tCcmVha291dEFycmF5KTtcblxuICAgICAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKHRhc2tCcmVha291dEluc3RhbmNlLCBgdGFzay1icmVhay1pbnN0YW5jZSR7dGFza0JyZWFrb3V0Q291bnRlcn1gLCBNYWluQnJlYWtvdXRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyB0YXNrIGJyZWFrIGNvbnRhaW5lciBjcmVhdGVkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrQnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIGNvcnJlY3RCcmVha291dEluc3RhbmNlID0gdGFza0JyZWFrb3V0QXJyYXlbdGFza0JyZWFrb3V0Q291bnRlcl07XG4gICAgICAgICAgICAvLyBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSA9IHRhc2tCcmVha291dEluc3RhbmNlO1xuICAgICAgICAgICAgY29ycmVjdEJyZWFrb3V0QXJyYXkucHVzaChjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIHRhc2tCcmVha291dENvdW50ZXIgKys7XG5cbiAgICAgICAgICAgIHJldHVybiBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZVxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJyZWFrb3V0KGFjdGl2ZVRhc2tCdXR0b24pIHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFza0J1dHRvbik7XG4gICAgICAgIGNvcnJlY3RCcmVha291dEluc3RhbmNlID0gdGFza0JyZWFrb3V0QXJyYXlbYWN0aXZlVGFza0J1dHRvbl07XG5cbiAgICAgICAgY29uc29sZS5sb2coY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnYnJlYWtvdXQgaGFzIGNoYW5nZWQnKTtcblxuICAgICAgICByZXR1cm4ge2NvcnJlY3RCcmVha291dEluc3RhbmNlfVxuICAgIH07XG5cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlQWN0aXZlQnJlYWtvdXQocHJvamVjdENvbnRhaW5lckluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvcnJlY3RCcmVha291dEluc3RhbmNlKTtcbiAgICAgICAgLy8gTWFpbkJyZWFrb3V0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvcnJlY3RCcmVha291dEluc3RhbmNlKTtcblxuICAgICAgICAvLyBkZWxldGUgbWVtb3J5IG9mIGJyZWFrb3V0Q29udGFpbmVyXG4gICAgICAgIGNvcnJlY3RCcmVha291dEFycmF5LmZvckVhY2goYnJlYWtvdXQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lckluZGV4KTtcbiAgICAgICAgICAgIGlmIChjb3JyZWN0QnJlYWtvdXRBcnJheS5pbmRleE9mKGJyZWFrb3V0KSA9PT0gcHJvamVjdENvbnRhaW5lckluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29ycmVjdEJyZWFrb3V0QXJyYXkuc3BsaWNlKGJyZWFrb3V0LCAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb3JyZWN0QnJlYWtvdXRBcnJheSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkZWxldGUgbWVtb3J5IG9mIGFkZEJ1dHRvblxuICAgICAgICBhZGRCdXR0b25BcnJheS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q29udGFpbmVySW5kZXgpO1xuICAgICAgICAgICAgaWYgKGFkZEJ1dHRvbkFycmF5LmluZGV4T2YoYnV0dG9uKSA9PT0gcHJvamVjdENvbnRhaW5lckluZGV4KSB7XG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uQXJyYXkuc3BsaWNlKGJ1dHRvbiwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkQnV0dG9uQXJyYXkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZGVsZXRlIG1lbW9yeSBvZiBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgIHByb2plY3RDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RDb250YWluZXJJbmRleCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdENvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpID09PSBwcm9qZWN0Q29udGFpbmVySW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVycy5zcGxpY2UoY29udGFpbmVyLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q29udGFpbmVycyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkZWxldGUgbWVtb3J5IG9mIHRhc2sgYnJlYWtvdXRcbiAgICAgICAgdGFza0JyZWFrb3V0QXJyYXkuZm9yRWFjaChicmVha291dDIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lckluZGV4KTtcbiAgICAgICAgICAgIGlmICh0YXNrQnJlYWtvdXRBcnJheS5pbmRleE9mKGJyZWFrb3V0MikgPT09IHByb2plY3RDb250YWluZXJJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJyZWFrb3V0Mik7XG4gICAgICAgICAgICAgICAgTWFpbkJyZWFrb3V0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGJyZWFrb3V0Mik7XG4gICAgICAgICAgICAgICAgdGFza0JyZWFrb3V0QXJyYXkuc3BsaWNlKGJyZWFrb3V0MiwgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza0JyZWFrb3V0QXJyYXkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG5cbiAgICByZXR1cm4ge2NyZWF0ZVRhc2tCcmVha291dCwgY2hhbmdlQWN0aXZlQnJlYWtvdXQsIGRlbGV0ZUFjdGl2ZUJyZWFrb3V0fVxuXG59XG5cbmNvbnN0IGNoYW5nZVByb2plY3REaXNwbGF5ID0gZnVuY3Rpb24gKGNob3NlbkJyZWFrb3V0KSB7XG4gICAgdGFza0JyZWFrb3V0QXJyYXkuZm9yRWFjaChjb250YWluZXIgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSlcblxuICAgIGNob3NlbkJyZWFrb3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbn1cblxuXG5cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0QmFyKGVsZW1lbnROYW1lLCBjbGFzc05hbWUsIGZhdGhlckVsZW1lbnQgKSB7XG4gICAgICAgICAgICBlbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBmYXRoZXJFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnROYW1lKTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50TmFtZTtcbiAgICAgICAgfTtcbiAgICByZXR1cm4ge2FkZFRvUHJvamVjdEJhcn07XG5cbn0pKCk7XG5cbiIsImltcG9ydCB7YXJ0aWNsZUZhY3Rvcnl9IGZyb20gXCIuL29iamVjdENyZWF0b3IuanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlCYXIocHJpb3JpdHlMZXZlbCwgcHJpb3JpdHlCYXIsIHRhc2tEcm9wQ29udGFpbmVyKSB7XG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW5jZScpO1xuICAgIGNvbnNvbGUubG9nKHByaW9yaXR5U2VsZWN0KTtcblxuICAgIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHByaW9yaXR5VGl0bGUsJ3ByaW9yaXR5LXRpdGxlJywgdGFza0Ryb3BDb250YWluZXIpO1xuICAgIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWw6J1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IHByaW9yaXR5U2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByaW9yaXR5T3B0aW9uKTtcbiAgICAgICAgLy9jcmVhdGUgYnV0dG9uIGZvciBlYWNoIG9wdGlvblxuICAgICAgICBjb25zdCBwcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5QnV0dG9uLnR5cGUgPSAncmFkaW8nO1xuICAgICAgICBwcmlvcml0eUJ1dHRvbi5uYW1lID0gcHJpb3JpdHlMZXZlbDtcblxuICAgICAgICAvLyBjcmVhdGUgbGFiZWwgZm9yIGVhY2ggb3B0aW9uXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gcHJpb3JpdHlTZWxlY3Qub3B0aW9uc1tpXS52YWx1ZTtcbiAgICAgICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHByaW9yaXR5QnV0dG9uTGFiZWwsJ3ByaW9yaXR5LWJ1dHRvbi1sYWJlbCcsIHByaW9yaXR5QmFyKTtcblxuICAgICAgICBpZiAocHJpb3JpdHlPcHRpb24udmFsdWUgPT09IHByaW9yaXR5TGV2ZWwpIHtcbiAgICAgICAgICAgIHByaW9yaXR5QnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJpb3JpdHlCdXR0b24pO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHByaW9yaXR5QnV0dG9uLCdwcmlvcml0eS1idXR0b24nLCBwcmlvcml0eUJhcik7XG4gICAgfVxuXG5cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrRHJvcExvZ2ljKGRyb3BCdXR0b24sIGRyb3BDb250YWluZXIsIHRpdGxlVGVzdCkge1xuICAgIGRyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcm9wIGRvd24gd29yaycpO1xuXG4gICAgICAgIGlmIChkcm9wQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygndGFza0Ryb3AtY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgIGRyb3BDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFza0Ryb3AtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBkcm9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEcm9wLWNvbnRhaW5lci1hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmIChkcm9wQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygndGFza0Ryb3AtY29udGFpbmVyLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICBkcm9wQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2tEcm9wLWNvbnRhaW5lci1hY3RpdmUnKTtcbiAgICAgICAgICAgIGRyb3BDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0Ryb3AtY29udGFpbmVyJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cblxuXG5cbmV4cG9ydCBjb25zdCB0YXNrTW9kaWZpZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tBcnRpY2xlLCBicmVha291dENvbnRhaW5lcikge1xuICAgICAgICBicmVha291dENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQXJ0aWNsZSlcblxuICAgIH1cblxuICAgIHJldHVybiB7cmVtb3ZlVGFza31cblxufSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9vYmplY3RDcmVhdG9yXCI7XG5pbXBvcnQgeyBtb2RpZnlUYXNrRm9ybSwgYXNzaWduZWRUYXNrIH0gZnJvbSBcIi4vcHJvamVjdE1vZGlmaWNhdGlvbi5qc1wiO1xuaW1wb3J0IHsgVGFzayAgfSBmcm9tIFwiLi9vYmplY3QuanNcIjtcbmltcG9ydCB7IE1haW5CcmVha291dENvbnRhaW5lciwgcHJvamVjdHNDb250YWluZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5cbi8vIGNvbnNvbGUubG9nKGFkZEJ1dHRvbkFycmF5KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtGb3JtKHRhc2tzKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tUaXRsZSk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpO1xuICAgIGNvbnN0IGltcG9ydGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0YW5jZScpO1xuXG5cbiAgICBjb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10YXNrJyk7XG4gICAgY29uc3QgZXhpdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdC1idXR0b24nKTtcbiAgICBjb25zb2xlLmxvZyhzdWJtaXRUYXNrKTtcbiAgICBcblxuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGQgdGFzayBjbGlja2VkJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYXNzaWduZWRUYXNrKTtcblxuICAgICAgICBcblxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza1RpdGxlLnZhbHVlLCB0YXNrRGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIGltcG9ydGFuY2UudmFsdWUsIGFzc2lnbmVkVGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyhUYXNrKTtcblxuICAgICAgICAvLyBzYXZlIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG5cbiAgICAgICAgLy8gZnJlZXMgdXAgYmFja2dyb3VuZFxuICAgICAgICBNYWluQnJlYWtvdXRDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIlxuXG4gICAgICAgIG1vZGlmeVRhc2tGb3JtLnRvZ2dsZVRhc2tGb3JtKCk7XG4gICAgICAgIHJlc2V0Rm9ybSh0YXNrRm9ybSk7XG5cbiAgICAgICAgY3JlYXRlVGFzayh0YXNrKTtcblxuICAgICAgICBcblxuICAgIH0pO1xuXG4gICAgZXhpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGlmeVRhc2tGb3JtLnRvZ2dsZVRhc2tGb3JtKCk7XG5cbiAgICAgICAgTWFpbkJyZWFrb3V0Q29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIlxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCJcbiAgICB9KVxuXG59XG5cblxuZnVuY3Rpb24gcmVzZXRGb3JtKHRhc2tGb3JtKSB7XG4gICAgdGFza0Zvcm0ucmVzZXQoKVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=