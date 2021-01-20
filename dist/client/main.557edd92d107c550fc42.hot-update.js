webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/DropList/DropList.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/DropList/DropList.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DropList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar droplist_less_1 = __importDefault(__webpack_require__(/*! ./droplist.less */ \"./src/shared/CardsList/Card/Menu/DropList/droplist.less\"));\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar GenericList_1 = __webpack_require__(/*! ../../../../GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\nvar merge_1 = __webpack_require__(/*! ../../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nvar ICONS = { comments: react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        \" \",\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" }))\n};\nvar LIST = [\n    { As: 'li', text: 'Комментарии', id: generateRandomIndex_1.generateRandomString(), className: 'comments', icon: ICONS.comments },\n    { As: 'li', text: 'Поделиться', id: generateRandomIndex_1.generateRandomString(), className: 'share' },\n    { As: 'li', text: 'Скрыть', id: generateRandomIndex_1.generateRandomString(), className: 'hide' },\n    { As: 'li', text: 'Сохранить', id: generateRandomIndex_1.generateRandomString(), className: 'save' },\n    { As: 'li', text: 'Пожаловаться', id: generateRandomIndex_1.generateRandomString(), className: 'complain' }\n];\nfunction DropList() {\n    var handleClick = function (id) {\n        console.log(id);\n    };\n    return (react_1.default.createElement(\"ul\", { className: droplist_less_1.default.list },\n        react_1.default.createElement(GenericList_1.GenericList, { list: LIST.map(merge_1.merge({ onClick: handleClick })) })));\n}\nexports.DropList = DropList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/DropList/DropList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/DropList/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/DropList/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./DropList */ \"./src/shared/CardsList/Card/Menu/DropList/DropList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/DropList/index.ts?");

/***/ })

})