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
    min-width: max-content;
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
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
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
    font-family: 'Quicksand', sans-serif;
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
    font-family: 'Roboto', sans-serif;
}

.delete-project-button {
    position: absolute;
    top: 28px;
    right: 28px;
}`, "",{"version":3,"sources":["webpack://./src/projectBar.css"],"names":[],"mappings":";;AAEA,2BAA2B;;AAE3B;IACI,0CAA0C;IAC1C,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,oCAAoC;;AAExC;;AAEA;;IAEI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iCAAiC;IACjC,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;;AAGA,YAAY;AACZ;IACI,gBAAgB;IAChB,iBAAiB;IACjB,sCAAsC;IACtC,cAAc;IACd,iBAAiB;IACjB,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB;8BAC0B;IAC1B,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,8BAA8B;IAC9B,oBAAoB;IACpB,sCAAsC;AAC1C;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf","sourcesContent":["\n\n/* styling for ProjectBar */\n\n.projects-container {\n    /* background-color: rgb(202, 201, 201); */\n    background-color: #53a8b6;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    grid-row: 2;\n    grid-column: 1 / 2;\n    min-height: 2000px;\n    min-width: max-content;\n}\n\n.task-form-container {\n    display: none;\n}\n\n.task-form-container-active {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    justify-content: center;\n    position: absolute;\n    min-height: 450px;\n    width: 320px;\n    left: 50%;\n    top: 180px;\n    transform: translate(-50%);\n    padding: 30px;\n    border-radius: 25px;\n    background-color: #79c2d0;\n    box-shadow: -7px 9px 100px 2px black;\n    \n}\n\n#task-title, #description, #due-date,\n#importance {\n    margin-bottom: 20px;\n    min-width: 295px;\n    font-size: 17px;\n    padding: 10px;\n}\n\n#task-form > label {\n    display: block;\n    min-width: 295px;\n    font-size: 20px;\n    font-family: 'Roboto', sans-serif;\n    font-weight: bold;\n}\n\n.exit-button {\n    position: absolute;\n    top: 13px;\n    right: 15px;\n    width: 28px;\n    height: 28px;\n    background-color: brown;\n    color: white;\n    border: none;\n    border-radius: 20px;\n}\n\n.submit-task {\n    /* align-content: center; */\n    margin-left: 100px;\n    margin-top: 20px;\n    width: 100px;\n    height: 35px;\n    font-size: 18px;\n}\n\n\n/* sideBar */\n.create-project-button {\n    margin-top: 15px;\n    margin-left: 10px;\n    background-color: rgba(127, 49, 49, 0);\n    color: #135589;\n    font-weight: bold;\n    border: none;\n    font-size: 21px;\n    \n}\n\n.project-cont {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: start;\n    position: relative;\n    width: 100%;\n}\n\n.project-title {\n    overflow: hidden;\n    /* white-space: nowrap;\n    text-overflow: ellipsis; */\n    font-family: 'Quicksand', sans-serif;\n    margin-bottom: 10px;\n    margin-left: 13px;\n}\n\n.project-title:after {\n    display: block;\n    content: '';\n    border-bottom: 2px solid black;\n    transform: scaleX(0);\n    transition: transform 0.2s ease-in-out;\n}\n\n.project-title:hover:after {\n    transform: scaleX(1);\n}\n\n.add-task-button {\n    height: 25px;\n    width: 25px;\n    /* background-color: #32485c; */\n    background-color: #135589;\n    border: none;\n    color: white;\n    border-radius: 50%;\n    margin-left: 35px;\n    margin-bottom: 10px;\n}\n\n.add-task-button:hover {\n    border: 2px solid white;\n}\n\n.task-title-container {\n    /* color: #351F39; */\n    margin-bottom: 8px;\n    margin-left: 35px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.delete-project-button {\n    position: absolute;\n    top: 28px;\n    right: 28px;\n}"],"sourceRoot":""}]);
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
    display: flex;
    align-items: center;
    margin-left: 270px;
}

.app-title {
    grid-column: 2 / 3;
    grid-row: 1;
    align-self: center;
    font-size: 41px;
    font-weight: bolder;
    color: white;
    font-family: 'Salsa', cursive;
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
    font-family: 'Quicksand', sans-serif;
}

.description2 {
    padding: 0px 10px;
    padding-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
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
`, "",{"version":3,"sources":["webpack://./src/to-do.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;AACjC;;;AAGA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,gCAAgC;IAChC,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,mCAAmC;AACvC;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB;mBACe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iCAAiC;IACjC,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;AACvB;;;AAGA;IACI,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["html {\n    background-color: #53a8b6;\n    min-height: 100vh;\n    min-width: 100%;\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    min-height: 100vh;\n    min-width: 100vh;\n    display: grid;\n    position: relative;\n    grid-template-columns: 1fr 4.5fr;\n    grid-template-rows: 90px 7fr;\n}\n\n.header {\n    background-color: #53a8b6;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    margin-left: 270px;\n}\n\n.app-title {\n    grid-column: 2 / 3;\n    grid-row: 1;\n    align-self: center;\n    font-size: 41px;\n    font-weight: bolder;\n    color: white;\n    font-family: 'Salsa', cursive;\n}\n\n\n.main-breakout-container {\n    grid-row: 2;\n    grid-column: 2 / 3;\n    padding-left: 40px;\n    padding-top: 55px;\n    background-color: #dfe2d2;\n    border-top-left-radius: 25px;\n}\n\n.create-task-button {\n    height: 40px;\n    width: 100px;\n}\n\n.main-breakout-container > div {\n    display: none;\n    height: 320px;\n    /* background-color: bisque; */\n    margin-bottom: 25px;\n}\n\n\n.task-article {\n    display: grid;\n    grid-template-columns: 3.2fr 1fr;\n    min-height: 12vh;\n    width: 125vh;\n    padding: 0px 20px;\n    padding-top: 10px;\n    background-color: #cbc5c1;\n    border-radius: 20px;\n    margin-bottom: 25px;\n}\n\n.task-article:hover {\n    transition: all 0.3s;\n    transform: scale(1.01);\n    box-shadow: 4px 7px 18px -3px black;\n}\n\n\n.taskDrop-container {\n    display: none;\n    background-color: beige;\n    grid-column: 1 / 3;\n    /* max-height: 4vh;\n    width: 100vh; */\n    transition: all 0.3 ease;\n}\n\n.taskDrop-container-active {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    min-height: 6vh;\n    max-width: 110vh;\n    grid-column: 1 / 3;\n    grid-row: 2;\n    background-color: #aed9da;\n    transition: all 0.3 ease;\n    margin-bottom: 10px;\n    padding: 5px 0px;\n    padding-left: 20px;\n    border-radius: 20px;\n}\n\n.task-space1 {\n    grid-column: 1;\n    display: grid;\n    grid-template-rows: 1fr 1.5fr;\n}\n\n.task-space2 {\n    grid-column: 2;\n    display: grid;\n    grid-template-rows: 1fr 1.5fr;\n    justify-content: end;\n}\n\n.task-title2 {\n    margin: 3px;\n    font-family: 'Quicksand', sans-serif;\n}\n\n.description2 {\n    padding: 0px 10px;\n    padding-top: 10px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n}\n\n\n.task-space2-row1 {\n    display: flex;\n    justify-content: space-between;\n    grid-row: 1;\n    justify-self: stretch;\n}\n\n.due-date2 {\n    padding-right: 25px;\n}\n\n.delete-task {\n    background-color: brown;\n    color: white;\n    font-weight: bold;\n    min-width: 50px;\n    height: 46px;\n    justify-self: end;\n    border: none;\n    border-radius: 20px;\n}\n\n\n.priority-bar {\n    grid-row: 2;\n    grid-column: 1/ 3;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n.priority-title {\n    grid-column: 1;\n    grid-row: 1;\n}\n\n.priority-button {\n    margin-right: 20px;\n}\n\n.complete-task-button {\n    grid-row: 1 / 3;\n    grid-column: 2;\n    align-self: center;\n    justify-self: end;\n    margin-right: 75px;\n    height: 30px;\n    width: 75px;\n    background-color: lightseagreen;\n    border: none;\n    border-radius: 20px;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n}\n\n.drop-down-task {\n    transform: rotate(180deg);\n    background-color: white;\n    border: none;\n    border-radius: 50%;\n    height: 22px;\n    width: 22px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    justify-self: end;\n    align-self: center;\n    font-weight: bold;\n}\n"],"sourceRoot":""}]);
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

        // taking away for now
        // const deleteProjectButton = document.createElement('button');
        // projectFactory.addToProjectBar(deleteProjectButton, 'delete-project-button', projectContainer);
        // deleteProjectButton.textContent = 'X';

        
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

        // deleteProjectButton.addEventListener('click', () => {
        //     console.log('wow it worked!!!!!');
        //     console.log(addButtonArray);
        //     console.log(projectContainers);
        //     console.log(taskBreakoutArray);
        //     console.log(correctBreakoutArray);
        //     // need to delete entry in all 4 of the above arrays^
        //     removeProject(projectContainer, projectsContainer);

        //     const deleteBreakoutRun = breakoutController();
        //     // deleteBreakoutRun.changeActiveBreakout(projectContainerIndex);
            
        //     console.log('changed by delete!')
        //     deleteBreakoutRun.deleteActiveBreakout(projectContainerIndex);

        //     //remove from storage
        //     projects.splice(projectIndex, 1);
            
        //     localStorage.setItem('projects', JSON.stringify(projects));
        //     console.log(projects);
        // });
        
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



    // function deleteActiveBreakout(projectContainerIndex) {
    //     console.log(correctBreakoutInstance);
    //     // MainBreakoutContainer.removeChild(correctBreakoutInstance);

    //     // delete memory of breakoutContainer
    //     correctBreakoutArray.forEach(breakout => {
    //         console.log(projectContainerIndex);
    //         if (correctBreakoutArray.indexOf(breakout) === projectContainerIndex) {
    //             correctBreakoutArray.splice(breakout, 1);
    //             console.log(correctBreakoutArray);
    //         };
    //     });

    //     // delete memory of addButton
    //     addButtonArray.forEach(button => {
    //         console.log(projectContainerIndex);
    //         if (addButtonArray.indexOf(button) === projectContainerIndex) {
    //             addButtonArray.splice(button, 1);
    //             console.log(addButtonArray);
    //         };
    //     });

    //     // delete memory of projectContainer
    //     projectContainers.forEach(container => {
    //         console.log(projectContainerIndex);
    //         if (projectContainers.indexOf(container) === projectContainerIndex) {
    //             projectContainers.splice(container, 1);
    //             console.log(projectContainers);
    //         };
    //     });

    //     // delete memory of task breakout
    //     taskBreakoutArray.forEach(breakout2 => {
    //         console.log(projectContainerIndex);
    //         if (taskBreakoutArray.indexOf(breakout2) === projectContainerIndex) {
    //             console.log(breakout2);
    //             MainBreakoutContainer.removeChild(breakout2);
    //             taskBreakoutArray.splice(breakout2, 1);
    //             console.log(taskBreakoutArray);
    //         };
    //     });

    // };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxh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QTtBQUNBOztBQUVBOzs7Ozs7VUNuRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RCYXIuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEJhci5jc3M/OTE5MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvLWRvLmNzcz9mOGE4Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL29iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL29iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0TW9kaWZpY2F0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza01vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3VzZXJmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cbi8qIHN0eWxpbmcgZm9yIFByb2plY3RCYXIgKi9cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjAxLCAyMDEpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E4YjY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgbWluLWhlaWdodDogMjAwMHB4O1xuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi50YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1mb3JtLWNvbnRhaW5lci1hY3RpdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxODBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5YzJkMDtcbiAgICBib3gtc2hhZG93OiAtN3B4IDlweCAxMDBweCAycHggYmxhY2s7XG4gICAgXG59XG5cbiN0YXNrLXRpdGxlLCAjZGVzY3JpcHRpb24sICNkdWUtZGF0ZSxcbiNpbXBvcnRhbmNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1pbi13aWR0aDogMjk1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiN0YXNrLWZvcm0gPiBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLXdpZHRoOiAyOTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXhpdC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEzcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnN1Ym1pdC10YXNrIHtcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cblxuLyogc2lkZUJhciAqL1xuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgNDksIDQ5LCAwKTtcbiAgICBjb2xvcjogIzEzNTU4OTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIFxufVxuXG4ucHJvamVjdC1jb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLnByb2plY3QtdGl0bGU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3QtdGl0bGU6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG4uYWRkLXRhc2stYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzMyNDg1YzsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1NTg5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4udGFzay10aXRsZS1jb250YWluZXIge1xuICAgIC8qIGNvbG9yOiAjMzUxRjM5OyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI4cHg7XG4gICAgcmlnaHQ6IDI4cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvamVjdEJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQSwyQkFBMkI7O0FBRTNCO0lBQ0ksMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9DQUFvQzs7QUFFeEM7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBR0EsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjs4QkFDMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4vKiBzdHlsaW5nIGZvciBQcm9qZWN0QmFyICovXFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMSwgMjAxKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzYThiNjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBtaW4taGVpZ2h0OiAyMDAwcHg7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybS1jb250YWluZXItYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogMTgwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzljMmQwO1xcbiAgICBib3gtc2hhZG93OiAtN3B4IDlweCAxMDBweCAycHggYmxhY2s7XFxuICAgIFxcbn1cXG5cXG4jdGFzay10aXRsZSwgI2Rlc2NyaXB0aW9uLCAjZHVlLWRhdGUsXFxuI2ltcG9ydGFuY2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDI5NXB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiN0YXNrLWZvcm0gPiBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI5NXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5leGl0LWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxM3B4O1xcbiAgICByaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uc3VibWl0LXRhc2sge1xcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuLyogc2lkZUJhciAqL1xcbi5jcmVhdGUtcHJvamVjdC1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDQ5LCA0OSwgMCk7XFxuICAgIGNvbG9yOiAjMTM1NTg5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGU6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZTpob3ZlcjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzMyNDg1YzsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzNTU4OTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRhc2stdGl0bGUtY29udGFpbmVyIHtcXG4gICAgLyogY29sb3I6ICMzNTFGMzk7ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyOHB4O1xcbiAgICByaWdodDogMjhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNhOGI2O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQuNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA3ZnI7XG59XG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E4YjY7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDI3MHB4O1xufVxuXG4uYXBwLXRpdGxlIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDFweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1NhbHNhJywgY3Vyc2l2ZTtcbn1cblxuXG4ubWFpbi1icmVha291dC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDU1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJkMjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xufVxuXG4uY3JlYXRlLXRhc2stYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4ubWFpbi1icmVha291dC1jb250YWluZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuXG4udGFzay1hcnRpY2xlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMy4yZnIgMWZyO1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gICAgd2lkdGg6IDEyNXZoO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmM1YzE7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4udGFzay1hcnRpY2xlOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIGJveC1zaGFkb3c6IDRweCA3cHggMThweCAtM3B4IGJsYWNrO1xufVxuXG5cbi50YXNrRHJvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIC8qIG1heC1oZWlnaHQ6IDR2aDtcbiAgICB3aWR0aDogMTAwdmg7ICovXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xufVxuXG4udGFza0Ryb3AtY29udGFpbmVyLWFjdGl2ZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIG1pbi1oZWlnaHQ6IDZ2aDtcbiAgICBtYXgtd2lkdGg6IDExMHZoO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBncmlkLXJvdzogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVkOWRhO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50YXNrLXNwYWNlMSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcbn1cblxuLnRhc2stc3BhY2UyIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEuNWZyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4udGFzay10aXRsZTIge1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbn1cblxuLmRlc2NyaXB0aW9uMiB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuXG4udGFzay1zcGFjZTItcm93MSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xufVxuXG4uZHVlLWRhdGUyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4uZGVsZXRlLXRhc2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5cbi5wcmlvcml0eS1iYXIge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAxLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJpb3JpdHktdGl0bGUge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAxO1xufVxuXG4ucHJpb3JpdHktYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb21wbGV0ZS10YXNrLWJ1dHRvbiB7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRyb3AtZG93bi10YXNrIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvLWRvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQjttQkFDZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E4YjY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0LjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDdmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1M2E4YjY7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMjcwcHg7XFxufVxcblxcbi5hcHAtdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDFweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1NhbHNhJywgY3Vyc2l2ZTtcXG59XFxuXFxuXFxuLm1haW4tYnJlYWtvdXQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJkMjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcXG59XFxuXFxuLmNyZWF0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ubWFpbi1icmVha291dC1jb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcblxcbi50YXNrLWFydGljbGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMuMmZyIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTJ2aDtcXG4gICAgd2lkdGg6IDEyNXZoO1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmM1YzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcblxcbi50YXNrLWFydGljbGU6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDdweCAxOHB4IC0zcHggYmxhY2s7XFxufVxcblxcblxcbi50YXNrRHJvcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAvKiBtYXgtaGVpZ2h0OiA0dmg7XFxuICAgIHdpZHRoOiAxMDB2aDsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xcbn1cXG5cXG4udGFza0Ryb3AtY29udGFpbmVyLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiA2dmg7XFxuICAgIG1heC13aWR0aDogMTEwdmg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWQ5ZGE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4udGFzay1zcGFjZTEge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XFxufVxcblxcbi50YXNrLXNwYWNlMiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi50YXNrLXRpdGxlMiB7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5kZXNjcmlwdGlvbjIge1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5cXG4udGFzay1zcGFjZTItcm93MSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmR1ZS1kYXRlMiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbi5kZWxldGUtdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNDZweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuXFxuLnByaW9yaXR5LWJhciB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMS8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LXRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ucHJpb3JpdHktYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY29tcGxldGUtdGFzay1idXR0b24ge1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZHJvcC1kb3duLXRhc2sge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgd2lkdGg6IDIycHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RCYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0QmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90by1kby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvLWRvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3RvLWRvLmNzcyc7XG5pbXBvcnQgJy4vcHJvamVjdEJhci5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vb2JqZWN0Q3JlYXRvcic7XG5pbXBvcnQgeyBsaW5rRm9ybSB9IGZyb20gJy4vdXNlcmZvcm0nO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCB7IGNvcnJlY3RCcmVha291dEluc3RhbmNlLCBicmVha291dENvbnRyb2xsZXIgfSBmcm9tICcuL3Byb2plY3RNb2RpZmljYXRpb24nO1xuXG5cbi8vIG9iamVjdENyZWF0b3IuanM6IGZpaWxlIHRoYXQgY29udGFpbnMgdGhlIGxvZ2ljIHRoYXQgY3JlYXRlc1xuLy8gbmV3IHRhc2sgYXJ0aWNsZSBjYXJkcyB1bmRlciBlYWNoIHByb2plY3RcblxuLy8gb2JqZWN0LmpzIGNvbnRhaW5zIHRoZSBUYXNrIGNsYXNzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgbmV3IGluc3RhbmNlc1xuLy8gd2hlbiBhIG5ldyB0YXNrIGlzIGdlbmVyYXRlZFxuXG4vLyBzdHJ1Y3R1cmUuanM6IGZpbGUgdGhhdCBsYXlzIG91dCB0aGUgZm91bmRhdGlvbmFsIHJlZmVyZW5jZXNcbi8vIGFuZCBsaW5rcyBvZiB0aGUgdG8tZG8gc3RydWN0dXJlXG5cbi8vIHVzZXJmb3JtLmpzOiBoYW5kbGVzIHRoZSBsb2dpYyBvZiB3aGF0IGhhcHBlbnMgd2hlbiB0aGUgdXNlclxuLy8gZmlsbHMgb3V0IGEgZm9ybSB0byBjcmVhdGUgYSBuZXcgcHJvamVjdCBvciB0YXNrXG5cbi8vIHRhc2tNb2RpZmljYXRpb24uanM6IGhhbmRsZXMgdGhlIGxvZ2ljIHRvIGRpc3BsYXkgY2hhbmdlc1xuLy8gb24gYnJvc3dlciB3aGVuIHRhc2tzIGFyZSBiZWluZyBidWlsdCBvciBhcmUgZGVsZXRlZFxuZXhwb3J0IGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBNYWluQnJlYWtvdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1icmVha291dC1jb250YWluZXInKTtcblxuXG5leHBvcnQgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG5jb25zb2xlLmxvZyh0YXNrcylcblxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xuXG5leHBvcnQgbGV0IHBhZ2VMb2FkID0gdHJ1ZTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgLy8gY29uc3QgaW5pdGlhbFJ1biA9IGJyZWFrb3V0Q29udHJvbGxlcigpO1xuICAgIC8vIGxldCBwYWdlTG9hZCA9IHRydWU7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSk7XG4gICAgY29uc29sZS5sb2codGFza3MpO1xuXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY3JlYXRlVGFzayh0YXNrKTtcbiAgICB9KVxuXG4gICAgcGFnZUxvYWQgPSBmYWxzZTtcblxufSk7XG5cblxuXG5cbmxpbmtGb3JtKHRhc2tzKTtcblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCgnTmV3IFByb2plY3QnKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRpb24gdGlyZ2dlcmVkJyk7XG4gICAgXG5cbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG59KVxuXG5cblxuXG5cblxuIiwiXG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFuY2UsIGFzc2lnbmVkUHJvamVjdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG4gICAgICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0ID0gYXNzaWduZWRQcm9qZWN0XG5cbiAgICB9XG59O1xuXG5cblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufTsiLCJcbmltcG9ydCB7IGNyZWF0ZVByaW9yaXR5QmFyLCB0YXNrRHJvcExvZ2ljLCB0YXNrTW9kaWZpZXJ9IGZyb20gXCIuL3Rhc2tNb2RpZmljYXRpb24uanNcIjtcbmltcG9ydCB7IHRhc2tzLCBwYWdlTG9hZH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciwgYnJlYWtvdXRDb250cm9sbGVyLCBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSwgY29ycmVjdEJyZWFrb3V0QXJyYXl9IGZyb20gXCIuL3Byb2plY3RNb2RpZmljYXRpb24uanNcIjtcblxuXG5jb25zdCBwcm9qZWN0UnVuID0gcHJvamVjdENvbnRyb2xsZXIoKTtcblxuLy8gbGV0IHByb2plY3RJbmRleEFycmF5ID0gW107XG5sZXQgY3JlYXRlSXNUcnVlO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICBjb25zb2xlLmxvZyhwYWdlTG9hZCk7XG5cbiAgICBjcmVhdGVJc1RydWUgPSBmYWxzZTtcblxuICAgIGNvbnNvbGUubG9nKHRhc2suYXNzaWduZWRQcm9qZWN0KVxuICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG5cbiAgICBjb25zdCBicmVha291dDJSdW4gPSBicmVha291dENvbnRyb2xsZXIoKTtcbiAgICBcbiAgICBjb25zdCBicmVha291dEluc3RhbmNlID0gYnJlYWtvdXQyUnVuLmNyZWF0ZVRhc2tCcmVha291dChjcmVhdGVJc1RydWUpO1xuICAgIGNvbnNvbGUubG9nKGJyZWFrb3V0SW5zdGFuY2UpO1xuXG5cblxuICAgIC8vIHNldHMgdGhlIGNvcnJlY3QgcHJvamVjdCBiZWluZyBhZGRlZCB0b1xuICAgIGxldCBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSA9IGNvcnJlY3RCcmVha291dEluc3RhbmNlO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCcmVha291dEluc3RhbmNlKTtcbiAgICBcblxuICAgIC8vIGluIHRoaXMgYmxvY2ssIGV2ZXJ5IGNvbnRhaW5lciBpbiBwcm9qZWN0SW5kZXhBcnJheSBzaG91bGQgYmUgaXRlcmF0ZWQgdGhyb3VnaFxuICAgIC8vIHRvIGNoZWNrIGlmIGl0IG1hdGNoZXMgdGhlIGFzc2lnbmVkIGNvbnRhaW5lciBudW1iZXIgdG8gdGhlIHNwZWNpZmljIHRhc2tcbiAgICBpZiAocGFnZUxvYWQgPT09IHRydWUpIHtcbiAgICAgICAgY29ycmVjdEJyZWFrb3V0QXJyYXkuZm9yRWFjaChjb250YWluZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGNvcnJlY3RCcmVha291dEFycmF5LmluZGV4T2YoY29udGFpbmVyKSA9PT0gdGFzay5hc3NpZ25lZFByb2plY3Qpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha291dEluc3RhbmNlID0gY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCcmVha291dEluc3RhbmNlKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRCcmVha291dEluc3RhbmNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgfSBcblxuXG4gICAgY3JlYXRlVGFza0FydGljbGUodGFzaywgY3VycmVudEJyZWFrb3V0SW5zdGFuY2UsIHBhZ2VMb2FkKTtcbiAgIFxuXG59O1xuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQXJ0aWNsZSh0YXNrLCBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSwgcGFnZUxvYWQpIHtcblxuXG4gICAgY29uc3QgdGFza0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUodGFza0FydGljbGUsICd0YXNrLWFydGljbGUnLCBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAvLyBjcmVhdGUgdHdvIGlubmVyIGRpdiBjb250YWluZXJzOlxuICAgIGNvbnN0IHRhc2tTcGFjZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUodGFza1NwYWNlMSwgJ3Rhc2stc3BhY2UxJywgdGFza0FydGljbGUpO1xuXG4gICAgY29uc3QgdGFza1NwYWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZSh0YXNrU3BhY2UyLCAndGFzay1zcGFjZTInLCB0YXNrQXJ0aWNsZSk7XG5cblxuXG4gICAgIC8vIGluaXRpYWxseSBpbnZpc2libGUgY29udGFpbmVyOlxuICAgICBjb25zdCB0YXNrRHJvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZSh0YXNrRHJvcENvbnRhaW5lciwgJ3Rhc2tEcm9wLWNvbnRhaW5lcicsIHRhc2tBcnRpY2xlKTtcblxuXG5cbiAgICAvLyBmaWxsIHRhc2tTcGFjZTE6XG4gICAgY29uc3QgdGFza1RpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHRhc2tUaXRsZTIsICd0YXNrLXRpdGxlMicsIHRhc2tTcGFjZTEpO1xuICAgIHRhc2tUaXRsZTIudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgdGFza1RpdGxlMi5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcblxuXG4gICAgLy8gYWRkIHRhc2tUaXRsZSB0byBwcm9qZWN0QmFyXG4gICAgY29uc3QgdGFza1RpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdENvbnRyb2xsZXIpO1xuICAgIHByb2plY3RSdW4uYXBwZW5kVGFza1RpdGxlKHRhc2tUaXRsZTIsIHRhc2tUaXRsZTIudGV4dENvbnRlbnQsIFxuICAgICAgICB0YXNrVGl0bGVDb250YWluZXIsIHBhZ2VMb2FkLCB0YXNrLmFzc2lnbmVkUHJvamVjdCk7XG5cblxuXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHRhc2tEZXNjcmlwdGlvbjIsICdkZXNjcmlwdGlvbjInLCB0YXNrU3BhY2UxKTtcbiAgICB0YXNrRGVzY3JpcHRpb24yLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRGVzY3JpcHRpb24yLmNvbnRlbnRFZGl0YWJsZSA9IFwidHJ1ZVwiO1xuICAgIFxuXG5cbiAgICAvLyBmaWxsIHRhc2tTcGFjZTI6XG4gICAgY29uc3QgdGFza1NwYWNlMkZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKHRhc2tTcGFjZTJGaXJzdCwndGFzay1zcGFjZTItcm93MScsIHRhc2tTcGFjZTIpO1xuXG4gICAgY29uc3QgZHVlRGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUoZHVlRGF0ZTIsJ2R1ZS1kYXRlMicsIHRhc2tTcGFjZTJGaXJzdCk7XG4gICAgZHVlRGF0ZTIudGV4dENvbnRlbnQgPSBgRHVlOiAke3Rhc2suZHVlRGF0ZX1gO1xuICAgIC8vIGZpZ3VyZSBvdXQgaG93IHRvIGVkaXQgdGhlIGRhdGUgaGVyZVxuXG4gICAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShkZWxldGVUYXNrQnV0dG9uLCAnZGVsZXRlLXRhc2snLCB0YXNrU3BhY2UyRmlyc3QpO1xuICAgIGRlbGV0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrUnVuID0gdGFza01vZGlmaWVyKClcbiAgICAgICAgZGVsZXRlVGFza1J1bi5yZW1vdmVUYXNrKHRhc2tBcnRpY2xlLCBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAgICAgcHJvamVjdFJ1bi5yZW1vdmVUYXNrVGl0bGUodGFza1RpdGxlQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIH0pXG5cblxuXG4gICAgLy8gZmlsbCBoaWRkZW4gZHJvcGRvd25cbiAgICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShwcmlvcml0eUJhciwncHJpb3JpdHktYmFyJywgdGFza0Ryb3BDb250YWluZXIpO1xuICAgIGNyZWF0ZVByaW9yaXR5QmFyKHRhc2suaW1wb3J0YW5jZSwgcHJpb3JpdHlCYXIsIHRhc2tEcm9wQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFydGljbGVGYWN0b3J5LmFkZFRvQXJ0aWNsZShjb21wbGV0ZVRhc2tCdXR0b24sJ2NvbXBsZXRlLXRhc2stYnV0dG9uJywgdGFza0Ryb3BDb250YWluZXIpO1xuICAgIGNvbXBsZXRlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG5cbiAgICBjb21wbGV0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlVGFza1J1biA9IHRhc2tNb2RpZmllcigpXG4gICAgICAgIGNvbXBsZXRlVGFza1J1bi5yZW1vdmVUYXNrKHRhc2tBcnRpY2xlLCBjdXJyZW50QnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAgICAgcHJvamVjdFJ1bi5yZW1vdmVUYXNrVGl0bGUodGFza1RpdGxlQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgIH0pXG5cblxuICAgIC8vIGRyb3AgZG93biBidXR0b24gYW5kIGZ1bmN0aW9uXG4gICAgY29uc3QgZHJvcERvd25UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYXJ0aWNsZUZhY3RvcnkuYWRkVG9BcnRpY2xlKGRyb3BEb3duVGFzaywgJ2Ryb3AtZG93bi10YXNrJywgdGFza1NwYWNlMilcbiAgICBkcm9wRG93blRhc2sudGV4dENvbnRlbnQgPSAnXidcbiAgICB0YXNrRHJvcExvZ2ljKGRyb3BEb3duVGFzaywgdGFza0Ryb3BDb250YWluZXIsIHRhc2submFtZSlcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBhcnRpY2xlRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb0FydGljbGUoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSwgZmF0aGVyRWxlbWVudCApIHtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGZhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWUpO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnROYW1lO1xuICAgICAgICB9O1xuICAgIHJldHVybiB7YWRkVG9BcnRpY2xlfTtcblxufSkoKTtcblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBuZXcgUG9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG5cbiAgICBwcm9qZWN0UnVuLmNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCk7XG4gICAgY29uc29sZS5sb2coJ3Byb2plY3QgY3JlYXRlZCcpO1xuXG4gICAgY3JlYXRlSXNUcnVlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGZpcnN0QnJlYWtvdXRSdW4gPSBicmVha291dENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBicmVha291dENyZWF0aW9uID0gZmlyc3RCcmVha291dFJ1bi5jcmVhdGVUYXNrQnJlYWtvdXQoY3JlYXRlSXNUcnVlKTtcbiAgICBjb25zb2xlLmxvZyhicmVha291dENyZWF0aW9uKTtcblxufVxuXG5cblxuXG5cblxuIiwiXG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciwgTWFpbkJyZWFrb3V0Q29udGFpbmVyLCBwcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cblxuXG5leHBvcnQgbGV0IGFkZEJ1dHRvbkFycmF5ID0gW107XG5leHBvcnQgbGV0IGFzc2lnbmVkVGFzaztcblxuZXhwb3J0IGxldCBhY3RpdmVQcm9qZWN0Q29udGFpbmVyO1xuXG5sZXQgcHJvamVjdENvbnRhaW5lcnMgPSBbXTtcblxuLy8gaW4gY2hhcmdlIG9mIGNyZWF0aW5nIGEgbmV3IGNvbnRhaW5lciBlYWNoIHRpbWUgYSBwcm9qZWN0XG4vLyBpcyBjcmVhdGVkXG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lcnMucHVzaChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgYWN0aXZlUHJvamVjdENvbnRhaW5lciA9IHByb2plY3RDb250YWluZXI7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJJbmRleCA9IHByb2plY3RDb250YWluZXJzLmluZGV4T2YocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RDb250YWluZXJJbmRleCk7XG5cblxuICAgICAgICBwcm9qZWN0RmFjdG9yeS5hZGRUb1Byb2plY3RCYXIocHJvamVjdENvbnRhaW5lciwgJ3Byb2plY3QtY29udCcsIHByb2plY3RzQ29udGFpbmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZGVkIHByb2plY3QgY29udGFpbmVyJylcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIHByb2plY3RGYWN0b3J5LmFkZFRvUHJvamVjdEJhcihwcm9qZWN0VGl0bGUsICdwcm9qZWN0LXRpdGxlJywgcHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3RUaXRsZS5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcblxuICAgICAgICAvLyB0YWtpbmcgYXdheSBmb3Igbm93XG4gICAgICAgIC8vIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgLy8gcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKGRlbGV0ZVByb2plY3RCdXR0b24sICdkZWxldGUtcHJvamVjdC1idXR0b24nLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcblxuICAgICAgICBcbiAgICAgICAgYXBwZW5kVGFza0J1dHRvbihwcm9qZWN0Q29udGFpbmVyKTtcblxuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneWFzIGJpdGNoJyk7XG4gICAgICAgICAgICAvLyBmaW5kIG1hdGNoaW5nIGluZGV4IGluIGJldHdlZW4gYXBwZW5kVGFzayBidXR0b25zIGFuZCBcbiAgICAgICAgICAgIC8vIHByb2plY3QgY29udGFpbmVycyBhbmQgdGhlbiBwYXNzIHRoYXQgbWF0Y2hpbmdcbiAgICAgICAgICAgIC8vIG51bWJlciBpbnRvIGNoYW5nZUFjdGl2ZUJyZWFrb3V0IC4uLiBoZXJlIHRoZSBkaXNwbGF5XG4gICAgICAgICAgICAvLyB3aWxsIGJlIHNldCB0byBhY3RpdmVcbiAgICAgICAgICAgIGFkZEJ1dHRvbkFycmF5LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWRkQnV0dG9uQXJyYXkuaW5kZXhPZihidXR0b24pID09PSBwcm9qZWN0Q29udGFpbmVySW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgaXQnKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBicmVha291dERpc3BsYXlSdW4gPSBicmVha291dENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgICAgICAgICBicmVha291dERpc3BsYXlSdW4uY2hhbmdlQWN0aXZlQnJlYWtvdXQoYWRkQnV0dG9uQXJyYXkuaW5kZXhPZihidXR0b24pKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlUHJvamVjdERpc3BsYXkoY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3dvdyBpdCB3b3JrZWQhISEhIScpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYWRkQnV0dG9uQXJyYXkpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lcnMpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGFza0JyZWFrb3V0QXJyYXkpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coY29ycmVjdEJyZWFrb3V0QXJyYXkpO1xuICAgICAgICAvLyAgICAgLy8gbmVlZCB0byBkZWxldGUgZW50cnkgaW4gYWxsIDQgb2YgdGhlIGFib3ZlIGFycmF5c15cbiAgICAgICAgLy8gICAgIHJlbW92ZVByb2plY3QocHJvamVjdENvbnRhaW5lciwgcHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgICAgIC8vICAgICBjb25zdCBkZWxldGVCcmVha291dFJ1biA9IGJyZWFrb3V0Q29udHJvbGxlcigpO1xuICAgICAgICAvLyAgICAgLy8gZGVsZXRlQnJlYWtvdXRSdW4uY2hhbmdlQWN0aXZlQnJlYWtvdXQocHJvamVjdENvbnRhaW5lckluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQgYnkgZGVsZXRlIScpXG4gICAgICAgIC8vICAgICBkZWxldGVCcmVha291dFJ1bi5kZWxldGVBY3RpdmVCcmVha291dChwcm9qZWN0Q29udGFpbmVySW5kZXgpO1xuXG4gICAgICAgIC8vICAgICAvL3JlbW92ZSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgLy8gICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgfTtcblxuXG5cblxuICAgIC8vIGFkZHMgdGFza1RpdGxlIHRvIHByb2plY3RCYXJcbiAgICBjb25zdCBhcHBlbmRUYXNrVGl0bGUgPSBmdW5jdGlvbiAodGFza1RpdGxlMiwgdGFza1RpdGxlQ29udGVudCwgdGFza1RpdGxlQ29udGFpbmVyLCBwYWdlTG9hZCwgYXNzaWduZWRQcm9qZWN0KSB7XG5cbiAgICAgICAgaWYgKHBhZ2VMb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVycy5mb3JFYWNoKHNpZGVCYXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0Q29udGFpbmVycy5pbmRleE9mKHNpZGVCYXIpID09PSBhc3NpZ25lZFByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKHRhc2tUaXRsZUNvbnRhaW5lciwgJ3Rhc2stdGl0bGUtY29udGFpbmVyJywgc2lkZUJhcik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRhc2tUaXRsZUNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBwcm9qZWN0RmFjdG9yeS5hZGRUb1Byb2plY3RCYXIodGFza1RpdGxlQ29udGFpbmVyLCAndGFzay10aXRsZS1jb250YWluZXInLCBhY3RpdmVQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRhc2tUaXRsZUNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGFzayB0aXRsZSBhZGRlZCcpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZW5zdXJlIHRoYXQgdGFzayB0aXRsZXMgbWF0Y2ggd2hlbmV2ZXIgYSBjaGFuZ2UgaXMgbWFkZVxuICAgICAgICB0YXNrVGl0bGUyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IHRhc2tUaXRsZTIudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IG5ld1Rhc2tUaXRsZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXMgYmVlbiBibHVycmVkJylcbiAgICAgICAgfSk7XG5cblxuICAgIH07XG5cbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RDb250YWluZXIsIHByb2plY3RzQ29udGFpbmVyKSB7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFza1RpdGxlID0gZnVuY3Rpb24gKHRhc2tUaXRsZUNvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpO1xuICAgICAgICB0YXNrVGl0bGVDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFza0J1dHRvbihwcm9qZWN0Q29udGFpbmVyKSB7XG5cbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbkFycmF5LnB1c2goYWRkVGFza0J1dHRvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZEJ1dHRvbkFycmF5KTtcbiAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKGFkZFRhc2tCdXR0b24sICdhZGQtdGFzay1idXR0b24nLCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICAgICAgY29uc3QgZW1wdHlSdW4gPSBicmVha291dENvbnRyb2xsZXIoKTtcblxuXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RpZnlUYXNrRm9ybS50b2dnbGVUYXNrRm9ybSgpXG5cbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZVByb2plY3QocHJvamVjdENvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgZW1wdHlSdW4uY2hhbmdlQWN0aXZlQnJlYWtvdXQoYWRkQnV0dG9uQXJyYXkuaW5kZXhPZihhZGRUYXNrQnV0dG9uKSk7XG5cbiAgICAgICAgICAgIGFzc2lnbmVkVGFzayA9IGFkZEJ1dHRvbkFycmF5LmluZGV4T2YoYWRkVGFza0J1dHRvbilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFzc2lnbmVkVGFzayk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3RDb250YWluZXIgPSBwcm9qZWN0Q29udGFpbmVyO1xuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3RDb250YWluZXI7XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RDb250YWluZXIsIGFwcGVuZFRhc2tUaXRsZSwgXG4gICAgICAgIGNoYW5nZUFjdGl2ZVByb2plY3QsIHJlbW92ZVByb2plY3QsIHJlbW92ZVRhc2tUaXRsZX1cblxuICAgIFxuICAgIFxufVxuXG5cblxuY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWNvbnRhaW5lcicpO1xuXG5leHBvcnQgY29uc3QgbW9kaWZ5VGFza0Zvcm0gPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCd0b2dnbGUgcmFuJyk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUYXNrRm9ybSgpIHtcblxuICAgICAgICBpZiAodGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWZvcm0tY29udGFpbmVyLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcgYWN0aXZlJyk7XG4gICAgICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWZvcm0tY29udGFpbmVyLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgfSBlbHNlIGlmICghdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCcudGFzay1mb3JtLWNvbnRhaW5lci1hY3RpdmUnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvZXMgbm90IGhhdmUsIGFkZGluZyBub3cnKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1jb250YWluZXItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIC8vIGRpc2FibGVkIGJhY2tncm91bmRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXMgYmVlbiBkaXNhYmxlZCcpO1xuICAgICAgICAgICAgTWFpbkJyZWFrb3V0Q29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0gY2xlYXJlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB7dG9nZ2xlVGFza0Zvcm0sIGNsZWFyVGFza0Zvcm19XG4gICAgXG59KSgpO1xuXG5cblxuXG5cblxuXG5cbmxldCB0YXNrQnJlYWtvdXRDb3VudGVyID0gMDtcbmxldCB0YXNrQnJlYWtvdXRBcnJheSA9IFtdO1xuXG5leHBvcnQgbGV0IGNvcnJlY3RCcmVha291dEFycmF5ID0gW107XG5leHBvcnQgbGV0IGNvcnJlY3RCcmVha291dEluc3RhbmNlO1xuXG5cbmV4cG9ydCBjb25zdCBicmVha291dENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrQnJlYWtvdXQoY3JlYXRlSXNUcnVlKSB7XG5cbiAgIFxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVJc1RydWUpO1xuXG4gICAgICAgIGlmIChjcmVhdGVJc1RydWUgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tCcmVha291dEluc3RhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQnJlYWtvdXRBcnJheS5wdXNoKHRhc2tCcmVha291dEluc3RhbmNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tCcmVha291dEFycmF5KTtcblxuICAgICAgICAgICAgcHJvamVjdEZhY3RvcnkuYWRkVG9Qcm9qZWN0QmFyKHRhc2tCcmVha291dEluc3RhbmNlLCBgdGFzay1icmVhay1pbnN0YW5jZSR7dGFza0JyZWFrb3V0Q291bnRlcn1gLCBNYWluQnJlYWtvdXRDb250YWluZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25ldyB0YXNrIGJyZWFrIGNvbnRhaW5lciBjcmVhdGVkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrQnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIGNvcnJlY3RCcmVha291dEluc3RhbmNlID0gdGFza0JyZWFrb3V0QXJyYXlbdGFza0JyZWFrb3V0Q291bnRlcl07XG4gICAgICAgICAgICAvLyBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSA9IHRhc2tCcmVha291dEluc3RhbmNlO1xuICAgICAgICAgICAgY29ycmVjdEJyZWFrb3V0QXJyYXkucHVzaChjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIHRhc2tCcmVha291dENvdW50ZXIgKys7XG5cbiAgICAgICAgICAgIHJldHVybiBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZVxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBjb3JyZWN0QnJlYWtvdXRJbnN0YW5jZVxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJyZWFrb3V0KGFjdGl2ZVRhc2tCdXR0b24pIHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlVGFza0J1dHRvbik7XG4gICAgICAgIGNvcnJlY3RCcmVha291dEluc3RhbmNlID0gdGFza0JyZWFrb3V0QXJyYXlbYWN0aXZlVGFza0J1dHRvbl07XG5cbiAgICAgICAgY29uc29sZS5sb2coY29ycmVjdEJyZWFrb3V0SW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLmxvZygnYnJlYWtvdXQgaGFzIGNoYW5nZWQnKTtcblxuICAgICAgICByZXR1cm4ge2NvcnJlY3RCcmVha291dEluc3RhbmNlfVxuICAgIH07XG5cblxuXG4gICAgLy8gZnVuY3Rpb24gZGVsZXRlQWN0aXZlQnJlYWtvdXQocHJvamVjdENvbnRhaW5lckluZGV4KSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGNvcnJlY3RCcmVha291dEluc3RhbmNlKTtcbiAgICAvLyAgICAgLy8gTWFpbkJyZWFrb3V0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvcnJlY3RCcmVha291dEluc3RhbmNlKTtcblxuICAgIC8vICAgICAvLyBkZWxldGUgbWVtb3J5IG9mIGJyZWFrb3V0Q29udGFpbmVyXG4gICAgLy8gICAgIGNvcnJlY3RCcmVha291dEFycmF5LmZvckVhY2goYnJlYWtvdXQgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lckluZGV4KTtcbiAgICAvLyAgICAgICAgIGlmIChjb3JyZWN0QnJlYWtvdXRBcnJheS5pbmRleE9mKGJyZWFrb3V0KSA9PT0gcHJvamVjdENvbnRhaW5lckluZGV4KSB7XG4gICAgLy8gICAgICAgICAgICAgY29ycmVjdEJyZWFrb3V0QXJyYXkuc3BsaWNlKGJyZWFrb3V0LCAxKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb3JyZWN0QnJlYWtvdXRBcnJheSk7XG4gICAgLy8gICAgICAgICB9O1xuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICAvLyBkZWxldGUgbWVtb3J5IG9mIGFkZEJ1dHRvblxuICAgIC8vICAgICBhZGRCdXR0b25BcnJheS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q29udGFpbmVySW5kZXgpO1xuICAgIC8vICAgICAgICAgaWYgKGFkZEJ1dHRvbkFycmF5LmluZGV4T2YoYnV0dG9uKSA9PT0gcHJvamVjdENvbnRhaW5lckluZGV4KSB7XG4gICAgLy8gICAgICAgICAgICAgYWRkQnV0dG9uQXJyYXkuc3BsaWNlKGJ1dHRvbiwgMSk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYWRkQnV0dG9uQXJyYXkpO1xuICAgIC8vICAgICAgICAgfTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgLy8gZGVsZXRlIG1lbW9yeSBvZiBwcm9qZWN0Q29udGFpbmVyXG4gICAgLy8gICAgIHByb2plY3RDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RDb250YWluZXJJbmRleCk7XG4gICAgLy8gICAgICAgICBpZiAocHJvamVjdENvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpID09PSBwcm9qZWN0Q29udGFpbmVySW5kZXgpIHtcbiAgICAvLyAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVycy5zcGxpY2UoY29udGFpbmVyLCAxKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Q29udGFpbmVycyk7XG4gICAgLy8gICAgICAgICB9O1xuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICAvLyBkZWxldGUgbWVtb3J5IG9mIHRhc2sgYnJlYWtvdXRcbiAgICAvLyAgICAgdGFza0JyZWFrb3V0QXJyYXkuZm9yRWFjaChicmVha291dDIgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lckluZGV4KTtcbiAgICAvLyAgICAgICAgIGlmICh0YXNrQnJlYWtvdXRBcnJheS5pbmRleE9mKGJyZWFrb3V0MikgPT09IHByb2plY3RDb250YWluZXJJbmRleCkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJyZWFrb3V0Mik7XG4gICAgLy8gICAgICAgICAgICAgTWFpbkJyZWFrb3V0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGJyZWFrb3V0Mik7XG4gICAgLy8gICAgICAgICAgICAgdGFza0JyZWFrb3V0QXJyYXkuc3BsaWNlKGJyZWFrb3V0MiwgMSk7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGFza0JyZWFrb3V0QXJyYXkpO1xuICAgIC8vICAgICAgICAgfTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyB9O1xuXG5cbiAgICByZXR1cm4ge2NyZWF0ZVRhc2tCcmVha291dCwgY2hhbmdlQWN0aXZlQnJlYWtvdXR9XG5cbn1cblxuY29uc3QgY2hhbmdlUHJvamVjdERpc3BsYXkgPSBmdW5jdGlvbiAoY2hvc2VuQnJlYWtvdXQpIHtcbiAgICB0YXNrQnJlYWtvdXRBcnJheS5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9KVxuXG4gICAgY2hvc2VuQnJlYWtvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxufVxuXG5cblxuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb1Byb2plY3RCYXIoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSwgZmF0aGVyRWxlbWVudCApIHtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGZhdGhlckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWUpO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnROYW1lO1xuICAgICAgICB9O1xuICAgIHJldHVybiB7YWRkVG9Qcm9qZWN0QmFyfTtcblxufSkoKTtcblxuIiwiaW1wb3J0IHthcnRpY2xlRmFjdG9yeX0gZnJvbSBcIi4vb2JqZWN0Q3JlYXRvci5qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eUJhcihwcmlvcml0eUxldmVsLCBwcmlvcml0eUJhciwgdGFza0Ryb3BDb250YWluZXIpIHtcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRhbmNlJyk7XG4gICAgY29uc29sZS5sb2cocHJpb3JpdHlTZWxlY3QpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUocHJpb3JpdHlUaXRsZSwncHJpb3JpdHktdGl0bGUnLCB0YXNrRHJvcENvbnRhaW5lcik7XG4gICAgcHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbDonXG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5T3B0aW9uID0gcHJpb3JpdHlTZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJpb3JpdHlPcHRpb24pO1xuICAgICAgICAvL2NyZWF0ZSBidXR0b24gZm9yIGVhY2ggb3B0aW9uXG4gICAgICAgIGNvbnN0IHByaW9yaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJpb3JpdHlCdXR0b24udHlwZSA9ICdyYWRpbyc7XG4gICAgICAgIHByaW9yaXR5QnV0dG9uLm5hbWUgPSBwcmlvcml0eUxldmVsO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBsYWJlbCBmb3IgZWFjaCBvcHRpb25cbiAgICAgICAgY29uc3QgcHJpb3JpdHlCdXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5QnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSBwcmlvcml0eVNlbGVjdC5vcHRpb25zW2ldLnZhbHVlO1xuICAgICAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUocHJpb3JpdHlCdXR0b25MYWJlbCwncHJpb3JpdHktYnV0dG9uLWxhYmVsJywgcHJpb3JpdHlCYXIpO1xuXG4gICAgICAgIGlmIChwcmlvcml0eU9wdGlvbi52YWx1ZSA9PT0gcHJpb3JpdHlMZXZlbCkge1xuICAgICAgICAgICAgcHJpb3JpdHlCdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmlvcml0eUJ1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlRmFjdG9yeS5hZGRUb0FydGljbGUocHJpb3JpdHlCdXR0b24sJ3ByaW9yaXR5LWJ1dHRvbicsIHByaW9yaXR5QmFyKTtcbiAgICB9XG5cblxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tEcm9wTG9naWMoZHJvcEJ1dHRvbiwgZHJvcENvbnRhaW5lciwgdGl0bGVUZXN0KSB7XG4gICAgZHJvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Ryb3AgZG93biB3b3JrJyk7XG5cbiAgICAgICAgaWYgKGRyb3BDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrRHJvcC1jb250YWluZXInKSkge1xuICAgICAgICAgICAgZHJvcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrRHJvcC1jb250YWluZXInKTtcbiAgICAgICAgICAgIGRyb3BDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0Ryb3AtY29udGFpbmVyLWFjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKGRyb3BDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrRHJvcC1jb250YWluZXItYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGRyb3BDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFza0Ryb3AtY29udGFpbmVyLWFjdGl2ZScpO1xuICAgICAgICAgICAgZHJvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrRHJvcC1jb250YWluZXInKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuXG5cblxuZXhwb3J0IGNvbnN0IHRhc2tNb2RpZmllciA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0FydGljbGUsIGJyZWFrb3V0Q29udGFpbmVyKSB7XG4gICAgICAgIGJyZWFrb3V0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tBcnRpY2xlKVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZW1vdmVUYXNrfVxuXG59IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgY3JlYXRlVGFzayB9IGZyb20gXCIuL29iamVjdENyZWF0b3JcIjtcbmltcG9ydCB7IG1vZGlmeVRhc2tGb3JtLCBhc3NpZ25lZFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0TW9kaWZpY2F0aW9uLmpzXCI7XG5pbXBvcnQgeyBUYXNrICB9IGZyb20gXCIuL29iamVjdC5qc1wiO1xuaW1wb3J0IHsgTWFpbkJyZWFrb3V0Q29udGFpbmVyLCBwcm9qZWN0c0NvbnRhaW5lciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cblxuLy8gY29uc29sZS5sb2coYWRkQnV0dG9uQXJyYXkpO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua0Zvcm0odGFza3MpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJyk7XG4gICAgY29uc29sZS5sb2codGFza1RpdGxlKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJyk7XG4gICAgY29uc3QgaW1wb3J0YW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRhbmNlJyk7XG5cblxuICAgIGNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXRhc2snKTtcbiAgICBjb25zdCBleGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0LWJ1dHRvbicpO1xuICAgIGNvbnNvbGUubG9nKHN1Ym1pdFRhc2spO1xuICAgIFxuXG4gICAgc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCB0YXNrIGNsaWNrZWQnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhc3NpZ25lZFRhc2spO1xuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUudmFsdWUsIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgaW1wb3J0YW5jZS52YWx1ZSwgYXNzaWduZWRUYXNrKTtcbiAgICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2spO1xuXG4gICAgICAgIC8vIHNhdmUgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblxuICAgICAgICAvLyBmcmVlcyB1cCBiYWNrZ3JvdW5kXG4gICAgICAgIE1haW5CcmVha291dENvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiXG5cbiAgICAgICAgbW9kaWZ5VGFza0Zvcm0udG9nZ2xlVGFza0Zvcm0oKTtcbiAgICAgICAgcmVzZXRGb3JtKHRhc2tGb3JtKTtcblxuICAgICAgICBjcmVhdGVUYXNrKHRhc2spO1xuXG4gICAgICAgIFxuXG4gICAgfSk7XG5cbiAgICBleGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kaWZ5VGFza0Zvcm0udG9nZ2xlVGFza0Zvcm0oKTtcblxuICAgICAgICBNYWluQnJlYWtvdXRDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIlxuICAgIH0pXG5cbn1cblxuXG5mdW5jdGlvbiByZXNldEZvcm0odGFza0Zvcm0pIHtcbiAgICB0YXNrRm9ybS5yZXNldCgpXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==