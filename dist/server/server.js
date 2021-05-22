/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(2));
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST,
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCESS,
    data: data,
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error,
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () { return function (dispatch, getState) {
    dispatch(exports.meRequest());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: "bearer " + getState().token.token }
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(exports.meRequestError(String(error)));
    });
}; };
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = exports.setToken = exports.SET_TOKEN = void 0;
exports.SET_TOKEN = 'SET_TOKEN';
var setToken = function (token) { return ({
    type: exports.SET_TOKEN,
    token: token,
}); };
exports.setToken = setToken;
var saveToken = function () { return function (dispatch) {
    var token = localStorage.getItem('token') || window.__token__;
    dispatch(exports.setToken(token));
    if (token !== 'undefined') {
        localStorage.setItem('token', token);
    }
}; };
exports.saveToken = saveToken;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcon = void 0;
var React = __importStar(__webpack_require__(0));
function BlockIcon() {
    return (React.createElement("svg", { viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" })));
}
exports.BlockIcon = BlockIcon;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsIcon = void 0;
var React = __importStar(__webpack_require__(0));
function CommentsIcon() {
    return (React.createElement("svg", { viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentsIcon = CommentsIcon;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var React = __importStar(__webpack_require__(0));
function WarningIcon() {
    return (React.createElement("svg", { viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ShareIcon() {
    return (React.createElement("svg", { viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var React = __importStar(__webpack_require__(0));
function SaveIcon() {
    return (React.createElement("svg", { viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MenuIcon() {
    return (react_1.default.createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function IconAnon() {
    return (react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(1);
var actions_1 = __webpack_require__(6);
function useUserData() {
    var data = react_redux_1.useSelector(function (state) { return state.me.data; });
    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });
    var token = react_redux_1.useSelector(function (state) { return state.token.token; });
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (!token)
            return;
        dispatch(actions_1.meRequestAsync());
    }, [token]);
    return {
        data: data,
        loading: loading,
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.assignId = exports.generateRandomString = void 0;
var assoc_1 = __webpack_require__(76);
var generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
exports.generateRandomString = generateRandomString;
exports.assignId = assoc_1.assoc('id', exports.generateRandomString());
var generateId = function (obj) { return exports.assignId(obj); };
exports.generateId = generateId;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.updateComment = void 0;
var actions_1 = __webpack_require__(6);
var reducer_1 = __webpack_require__(82);
var actions_2 = __webpack_require__(7);
var reducer_2 = __webpack_require__(83);
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var updateComment = function (text) { return ({
    type: UPDATE_COMMENT,
    text: text,
}); };
exports.updateComment = updateComment;
var initialState = {
    commentText: 'Привет',
    token: {
        token: '',
    },
    me: {
        loading: false,
        error: '',
        data: {},
    },
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case actions_2.SET_TOKEN:
            return __assign(__assign({}, state), { token: reducer_2.tokenReducer(state.token, action) });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_SUCCESS:
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(21));
var server_1 = __importDefault(__webpack_require__(22));
var App_1 = __webpack_require__(23);
var indexTemplate_1 = __webpack_require__(99);
var axios_1 = __importDefault(__webpack_require__(2));
var app = express_1.default();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', function (req, res) {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: { username: 'undefined', password: 'ndPh5uNumEC5iLdv2QTQ7HUDtQ4gYQ' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    })
        .catch(console.log);
});
app.get('*', function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(24);
var root_1 = __webpack_require__(25);
var Layout_1 = __webpack_require__(26);
var Header_1 = __webpack_require__(29);
var Content_1 = __webpack_require__(51);
var CardsList_1 = __webpack_require__(54);
var userContext_1 = __webpack_require__(77);
var postsContext_1 = __webpack_require__(78);
var redux_1 = __webpack_require__(80);
var react_redux_1 = __webpack_require__(1);
var redux_devtools_extension_1 = __webpack_require__(81);
var reducer_1 = __webpack_require__(19);
var redux_thunk_1 = __importDefault(__webpack_require__(84));
var react_router_dom_1 = __webpack_require__(8);
var Post_1 = __webpack_require__(85);
var store = redux_1.createStore(reducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
function AppComponent() {
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(userContext_1.UserContextProvider, null,
            react_1.default.createElement(Layout_1.Layout, null,
                react_1.default.createElement(Header_1.Header, null),
                react_1.default.createElement(Content_1.Content, null,
                    react_1.default.createElement(postsContext_1.PostsContextProvider, null,
                        react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, from: "/", to: "/posts" }),
                            react_1.default.createElement(react_router_dom_1.Redirect, { from: "/auth", to: "/posts" }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "/posts" },
                                react_1.default.createElement(CardsList_1.CardsList, null),
                                react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/:id" },
                                    react_1.default.createElement(Post_1.Post, null))),
                            react_1.default.createElement(react_router_dom_1.Route, { path: "*", exact: true },
                                react_1.default.createElement("h1", { style: { textAlign: 'center', padding: '50px 0' } }, "404 - \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430")))))))))));
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_less_1 = __importDefault(__webpack_require__(28));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_less_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--1XuYy"
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importStar(__webpack_require__(0));
var header_less_1 = __importDefault(__webpack_require__(31));
var SearchBlock_1 = __webpack_require__(32);
var ThreadTitle_1 = __webpack_require__(45);
var SortBlock_1 = __webpack_require__(48);
var react_redux_1 = __webpack_require__(1);
var actions_1 = __webpack_require__(7);
function Header() {
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(actions_1.saveToken());
    }, []);
    return (react_1.default.createElement("header", { className: header_less_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--rZiE5"
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchblock_less_1 = __importDefault(__webpack_require__(34));
var UserBlock_1 = __webpack_require__(35);
var useUserData_1 = __webpack_require__(16);
function SearchBlock() {
    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;
    return (react_1.default.createElement("div", { className: searchblock_less_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBLock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--C12wc"
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBLock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var userblock_less_1 = __importDefault(__webpack_require__(37));
var Text_1 = __webpack_require__(5);
var Break_1 = __webpack_require__(40);
var Icons_1 = __webpack_require__(4);
function UserBLock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=J33HZq43yS9ocA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity", className: userblock_less_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_less_1.default.userBox },
            react_1.default.createElement("div", { className: userblock_less_1.default.avatarBox }, avatarSrc
                ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_less_1.default.avatarImage })
                : react_1.default.createElement(Icons_1.IconAnon, null)),
            react_1.default.createElement("div", { className: userblock_less_1.default.username },
                react_1.default.createElement(Break_1.Break, { size: 12 }),
                loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColor.gray99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.gray99 }, username || 'Аноним'))))));
}
exports.UserBLock = UserBLock;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--2kCAN",
	"avatarBox": "userblock__avatarBox--1BN88",
	"avatarImage": "userblock__avatarImage--32i51",
	"username": "userblock__username--219Iw"
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColor = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_less_1 = __importDefault(__webpack_require__(39));
var classnames_1 = __importDefault(__webpack_require__(3));
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["grayF4"] = "grayF4";
    EColor["grayF3"] = "grayF3";
    EColor["grayD9"] = "grayD9";
    EColor["grayC4"] = "grayC4";
    EColor["gray99"] = "gray99";
    EColor["gray66"] = "gray66";
})(EColor = exports.EColor || (exports.EColor = {}));
function Text(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;
    var classes = classnames_1.default(text_less_1.default["s" + size], text_less_1.default[color], (_a = {}, _a[text_less_1.default.bold] = bold, _a), (_b = {}, _b[text_less_1.default["m" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_less_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_less_1.default["d" + desktopSize]] = desktopSize, _d));
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--1E4Mt",
	"s20": "text__s20--1AGUg",
	"s16": "text__s16--1iKkN",
	"s14": "text__s14--GUcxB",
	"s12": "text__s12--24WRT",
	"s10": "text__s10---RkRT",
	"bold": "text__bold--3OTg1",
	"black": "text__black--gQAnH",
	"orange": "text__orange--c-ima",
	"green": "text__green--3asvn",
	"white": "text__white--PH1j-",
	"grayF4": "text__grayF4--2NFgw",
	"grayF3": "text__grayF3--1LNkK",
	"grayD9": "text__grayD9--3hczu",
	"grayC4": "text__grayC4--R_ahZ",
	"gray99": "text__gray99--3WXxO",
	"gray66": "text__gray66--2BfMy",
	"m28": "text__m28--Q_LfZ",
	"m20": "text__m20--2kCEn",
	"m16": "text__m16--ID_eu",
	"m14": "text__m14--3YZst",
	"m12": "text__m12--2WgGh",
	"m10": "text__m10--YWjqv",
	"t28": "text__t28--LGCwl",
	"t20": "text__t20--3v02V",
	"t16": "text__t16--ZAaUf",
	"t14": "text__t14--1FHtG",
	"t12": "text__t12--1wP-2",
	"t10": "text__t10--3zBBS",
	"d28": "text__d28--1ArBo",
	"d20": "text__d20--2vm0n",
	"d16": "text__d16--3xxjv",
	"d14": "text__d14--H6fr_",
	"d12": "text__d12--3bR5l",
	"d10": "text__d10--1tkyV"
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
var classnames_1 = __importDefault(__webpack_require__(3));
var react_1 = __importDefault(__webpack_require__(0));
var break_less_1 = __importDefault(__webpack_require__(42));
function Break(props) {
    var _a, _b, _c, _d, _e;
    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    return (react_1.default.createElement("div", { className: classnames_1.default(break_less_1.default["s" + size], (_a = {}, _a[break_less_1.default["mobile_s" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_less_1.default["tablet_s" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_less_1.default["desktop_s" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_less_1.default.inline] = inline, _d), (_e = {}, _e[break_less_1.default.top] = top, _e)) }));
}
exports.Break = Break;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--mdIAL",
	"s8": "break__s8--uKILp",
	"s12": "break__s12--2nnLj",
	"s16": "break__s16--2aAdU",
	"s20": "break__s20--1TD5c",
	"inline": "break__inline--10BUW",
	"top": "break__top--H31po",
	"mobile_s4": "break__mobile_s4--1VaPy",
	"mobile_s8": "break__mobile_s8--1BQTI",
	"mobile_s12": "break__mobile_s12--MAF66",
	"mobile_s16": "break__mobile_s16--1qdeZ",
	"mobile_s20": "break__mobile_s20--3NArg",
	"tablet_s4": "break__tablet_s4--30cm0",
	"tablet_s8": "break__tablet_s8--1ufPQ",
	"tablet_s12": "break__tablet_s12--kaf3T",
	"tablet_s16": "break__tablet_s16--3Jm3t",
	"tablet_s20": "break__tablet_s20--2KICY",
	"desktop_s4": "break__desktop_s4--17AIS",
	"desktop_s8": "break__desktop_s8--3fjuG",
	"desktop_s12": "break__desktop_s12--2OECw",
	"desktop_s16": "break__desktop_s16--2CR2t",
	"desktop_s20": "break__desktop_s20--1WoKN"
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.EIcons = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icon_less_1 = __importDefault(__webpack_require__(44));
var classnames_1 = __importDefault(__webpack_require__(3));
var BlockIcon_1 = __webpack_require__(9);
var WarningIcon_1 = __webpack_require__(11);
var CommentsIcon_1 = __webpack_require__(10);
var ShareIcon_1 = __webpack_require__(12);
var SaveIcon_1 = __webpack_require__(13);
var MenuIcon_1 = __webpack_require__(14);
var IconAnon_1 = __webpack_require__(15);
var EIcons;
(function (EIcons) {
    EIcons["block"] = "BlockIcon";
    EIcons["warning"] = "WarningIcon";
    EIcons["comments"] = "CommentsIcon";
    EIcons["share"] = "ShareIcon";
    EIcons["save"] = "SaveIcon";
    EIcons["menu"] = "MenuIcon";
    EIcons["anon"] = "IconAnon";
})(EIcons = exports.EIcons || (exports.EIcons = {}));
var icons = {
    BlockIcon: react_1.default.createElement(BlockIcon_1.BlockIcon, null),
    WarningIcon: react_1.default.createElement(WarningIcon_1.WarningIcon, null),
    CommentsIcon: react_1.default.createElement(CommentsIcon_1.CommentsIcon, null),
    ShareIcon: react_1.default.createElement(ShareIcon_1.ShareIcon, null),
    SaveIcon: react_1.default.createElement(SaveIcon_1.SaveIcon, null),
    MenuIcon: react_1.default.createElement(MenuIcon_1.MenuIcon, null),
    IconAnon: react_1.default.createElement(IconAnon_1.IconAnon, null)
};
function Icon(props) {
    var _a, _b, _c, _d;
    var name = props.name, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;
    var classes = classnames_1.default((_a = {}, _a[icon_less_1.default["s" + size]] = size, _a), (_b = {}, _b[icon_less_1.default["m" + mobileSize]] = mobileSize, _b), (_c = {}, _c[icon_less_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[icon_less_1.default["d" + desktopSize]] = desktopSize, _d));
    return (react_1.default.createElement("i", { className: classes }, icons[name]));
}
exports.Icon = Icon;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s10": "icon__s10--3u-BY",
	"s12": "icon__s12--vDI6P",
	"s14": "icon__s14--bJ5NH",
	"s16": "icon__s16--3admG",
	"s20": "icon__s20--179PP",
	"m20": "icon__m20--2sfYq",
	"m16": "icon__m16--2l2jK",
	"m14": "icon__m14--2M8Lo",
	"m12": "icon__m12--2QEIc",
	"m10": "icon__m10--p2594",
	"t20": "icon__t20--8pVp0",
	"t16": "icon__t16--dBI3B",
	"t14": "icon__t14--3g0xV",
	"t12": "icon__t12--1vWn6",
	"t10": "icon__t10--S8V-h",
	"d20": "icon__d20--31F1D",
	"d16": "icon__d16--1OqDx",
	"d14": "icon__d14--2W9uK",
	"d12": "icon__d12--14aPX",
	"d10": "icon__d10--1lVNs"
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_less_1 = __importDefault(__webpack_require__(47));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_less_1.default.threadTitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--QB_S1"
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_less_1 = __importDefault(__webpack_require__(50));
function SortBlock() {
    return (react_1.default.createElement("div", { className: sortblock_less_1.default.sortBlock }, "sorting dropdown"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--1KalP"
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_less_1 = __importDefault(__webpack_require__(53));
function Content(_a) {
    var children = _a.children;
    return (react_1.default.createElement("main", { className: content_less_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--3fgq5"
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var axios_1 = __importDefault(__webpack_require__(2));
var react_1 = __importStar(__webpack_require__(0));
var cardslist_less_1 = __importDefault(__webpack_require__(56));
var Card_1 = __webpack_require__(57);
var generateRandomIndex_1 = __webpack_require__(18);
function CardsList() {
    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), errorLoading = _c[0], setErrorLoading = _c[1];
    var _d = react_1.useState(''), nextAfter = _d[0], setNextAfter = _d[1];
    var _e = react_1.useState(0), counter = _e[0], setCounter = _e[1];
    var _f = react_1.useState(false), more = _f[0], setMore = _f[1];
    var bottomOfList = react_1.useRef(null);
    react_1.useEffect(function () {
        function load() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, after, children_1, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setLoading(true);
                            setErrorLoading('');
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios_1.default.get('https://www.reddit.com/r/popular/best.json?sr_detail=true&limit=10', {
                                    params: {
                                        limit: 10,
                                        after: nextAfter,
                                    }
                                })];
                        case 2:
                            _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                            setNextAfter(after);
                            setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            setErrorLoading(String(error_1));
                            return [3 /*break*/, 4];
                        case 4:
                            setLoading(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                if (counter < 2) {
                    load();
                    setCounter(counter + 1);
                }
                else {
                    setMore(true);
                }
            }
        }, {
            rootMargin: '10px',
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, nextAfter, more]);
    function showMore() {
        setCounter(0);
        setMore(false);
    }
    return (react_1.default.createElement("ul", { className: cardslist_less_1.default.cardList },
        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { post: post, key: generateRandomIndex_1.generateRandomString() })); }),
        loading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: 'center' } }, errorLoading)),
        react_1.default.createElement("button", { onClick: showMore, className: cardslist_less_1.default.moreBtn, style: more ? { display: 'block' } : { display: 'none' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451"),
        react_1.default.createElement("div", { ref: bottomOfList })));
}
exports.CardsList = CardsList;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardList": "cardslist__cardList--1uQik",
	"moreBtn": "cardslist__moreBtn--3WxFV"
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_less_1 = __importDefault(__webpack_require__(59));
var TextContent_1 = __webpack_require__(60);
var Preview_1 = __webpack_require__(64);
var Menu_1 = __webpack_require__(67);
function Card(_a) {
    var post = _a.post;
    var _b = post.data, author = _b.author, title = _b.title, num_comments = _b.num_comments, score = _b.score, thumbnail = _b.thumbnail, sr_detail = _b.sr_detail, created_utc = _b.created_utc, id = _b.id;
    return (react_1.default.createElement("li", { className: card_less_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { username: author, title: title, createDate: created_utc, postId: id, icon: sr_detail }),
        react_1.default.createElement(Preview_1.Preview, { thumbnail: thumbnail, banner: sr_detail }),
        react_1.default.createElement(Menu_1.Menu, { comments: num_comments, karmaValue: score })));
}
exports.Card = Card;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--3Kg9c"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_less_1 = __importDefault(__webpack_require__(62));
var formatDate_1 = __webpack_require__(63);
var react_router_dom_1 = __webpack_require__(8);
function TextContent(_a) {
    // const [isModalOpened, setIsModalOpened] = useState(false);
    var username = _a.username, title = _a.title, createDate = _a.createDate, postId = _a.postId, icon = _a.icon;
    var authorLink = "https://reddit.com/user/" + username;
    return (react_1.default.createElement("div", { className: textcontent_less_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_less_1.default.metaData },
            react_1.default.createElement("div", { className: textcontent_less_1.default.userLink },
                react_1.default.createElement("img", { className: textcontent_less_1.default.avatar, src: icon.icon_img, alt: "avatar" }),
                react_1.default.createElement("a", { href: authorLink, target: "_blank", className: textcontent_less_1.default.username }, username)),
            react_1.default.createElement("span", { className: textcontent_less_1.default.createdAt },
                react_1.default.createElement("span", { className: textcontent_less_1.default.publishedLabel }, "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E "),
                formatDate_1.formatDate(createDate * 1000))),
        react_1.default.createElement("h2", { className: textcontent_less_1.default.title },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/" + postId, className: textcontent_less_1.default.postLink }, title))));
}
exports.TextContent = TextContent;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--EDc9_",
	"metaData": "textcontent__metaData--1zuw0",
	"userLink": "textcontent__userLink--16-LM",
	"avatar": "textcontent__avatar--2liYS",
	"username": "textcontent__username--1v8iJ",
	"createdAt": "textcontent__createdAt--3oCl4",
	"title": "textcontent__title--yJAmy",
	"postLink": "textcontent__postLink--2s6Kj"
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(d) {
    var date = new Date(d);
    var dayOfMonth = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var diffMs = new Date() - date;
    var diffSec = Math.round(diffMs / 1000);
    var diffMin = diffSec / 60;
    var diffHour = diffMin / 60;
    var diffDay = diffHour / 24;
    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    if (diffSec < 1) {
        return 'прямо сейчас';
    }
    else if (diffMin < 1) {
        return diffSec + " \u0441\u0435\u043A. \u043D\u0430\u0437\u0430\u0434";
    }
    else if (diffHour < 1) {
        return diffMin + " \u043C\u0438\u043D. \u043D\u0430\u0437\u0430\u0434";
    }
    else if (diffDay < 1) {
        return Math.floor(diffHour) + " \u0447\u0430\u0441. \u043D\u0430\u0437\u0430\u0434";
    }
    else {
        return dayOfMonth + "." + month + "." + year + " " + hour + ":" + minutes;
    }
}
exports.formatDate = formatDate;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_less_1 = __importDefault(__webpack_require__(66));
function Preview(_a) {
    var thumbnail = _a.thumbnail, banner = _a.banner;
    var content;
    if (thumbnail.split('://')[0] === 'https') {
        content = react_1.default.createElement("img", { src: thumbnail, alt: "preview", className: preview_less_1.default.previewImg });
    }
    else if (banner.banner_img) {
        content = react_1.default.createElement("img", { src: banner.banner_img, alt: "preview", className: preview_less_1.default.previewImg });
    }
    return (react_1.default.createElement("div", { className: preview_less_1.default.preview }, content));
}
exports.Preview = Preview;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--3CgtQ",
	"previewImg": "preview__previewImg--3TFva"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menu_less_1 = __importDefault(__webpack_require__(69));
var Dropdown_1 = __webpack_require__(70);
var Icons_1 = __webpack_require__(4);
var MenuItemsList_1 = __webpack_require__(73);
var Text_1 = __webpack_require__(5);
var NOOP = function () {
};
function Menu(_a) {
    var comments = _a.comments, karmaValue = _a.karmaValue, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;
    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    var _e = react_1.default.useState({}), coords = _e[0], setCoords = _e[1];
    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    var handleOpen = function (event) {
        if (event.target instanceof HTMLElement && isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
            var rect = event.target.getBoundingClientRect();
            setCoords({
                left: rect.left + pageXOffset,
                top: rect.top + pageYOffset
            });
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: menu_less_1.default.menu },
            react_1.default.createElement("button", { className: menu_less_1.default.menuButton, onClick: handleOpen },
                react_1.default.createElement(Icons_1.Icon, { name: Icons_1.EIcons.menu })),
            isDropdownOpen && (react_1.default.createElement(Dropdown_1.Dropdown, { onClose: function () { return console.log('closed'); }, onOpen: function () { return console.log('opened'); }, coords: coords, setIsDropdownOpen: setIsDropdownOpen },
                react_1.default.createElement("div", { className: menu_less_1.default.dropdown },
                    react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: '1234' }),
                    react_1.default.createElement("button", { className: menu_less_1.default.closeButton },
                        react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColor.gray66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))))),
        react_1.default.createElement("div", { className: menu_less_1.default.controls },
            react_1.default.createElement("div", { className: menu_less_1.default.karmaCounter },
                react_1.default.createElement("button", { className: menu_less_1.default.up },
                    react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" }))),
                react_1.default.createElement("span", { className: menu_less_1.default.karmaValue }, karmaValue),
                react_1.default.createElement("button", { className: menu_less_1.default.down },
                    react_1.default.createElement("svg", { className: menu_less_1.default.down, width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" })))),
            react_1.default.createElement("button", { className: menu_less_1.default.commentsButton },
                react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#999999" })),
                react_1.default.createElement("span", { className: menu_less_1.default.commentsNumber }, comments)),
            react_1.default.createElement("div", { className: menu_less_1.default.actions },
                react_1.default.createElement("button", { className: menu_less_1.default.shareButton },
                    react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                        react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
                react_1.default.createElement("button", { className: menu_less_1.default.saveButton },
                    react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                        react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" })))))));
}
exports.Menu = Menu;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--3HgxL",
	"menuButton": "menu__menuButton--3BpWR",
	"dropdown": "menu__dropdown--2uuMQ",
	"closeButton": "menu__closeButton--1cFw3",
	"controls": "menu__controls--3_TxC",
	"karmaCounter": "menu__karmaCounter--3csd5",
	"karmaValue": "menu__karmaValue--2TnoY",
	"down": "menu__down--4JGap",
	"commentsButton": "menu__commentsButton--1ud-n",
	"commentsNumber": "menu__commentsNumber--lq7h_",
	"shareButton": "menu__shareButton--zCjxq",
	"saveButton": "menu__saveButton--1HppH",
	"actions": "menu__actions--1Ht9u",
	"up": "menu__up--2JDGx"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(17));
var dropdown_less_1 = __importDefault(__webpack_require__(72));
function Dropdown(_a) {
    var children = _a.children, coords = _a.coords, setIsDropdownOpen = _a.setIsDropdownOpen, isDropdownOpen = _a.isDropdownOpen;
    var node = document.querySelector('#dropdown_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: dropdown_less_1.default.container, style: {
            left: coords.left + "px",
            top: coords.top + "px"
        } },
        react_1.default.createElement("div", { className: dropdown_less_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_less_1.default.list, onClick: function () { return setIsDropdownOpen(isDropdownOpen); } }, children)))), node);
}
exports.Dropdown = Dropdown;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--pnhGR",
	"listContainer": "dropdown__listContainer--2vn0U",
	"list": "dropdown__list--2qzIZ"
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
var React = __importStar(__webpack_require__(0));
var menuitemslist_less_1 = __importDefault(__webpack_require__(75));
var Text_1 = __webpack_require__(5);
var classnames_1 = __importDefault(__webpack_require__(3));
var Icons_1 = __webpack_require__(4);
function MenuItemsList(_a) {
    var postId = _a.postId;
    return (React.createElement("ul", { className: menuitemslist_less_1.default.menuItemsList },
        React.createElement("li", { className: classnames_1.default(menuitemslist_less_1.default.menuItem, menuitemslist_less_1.default.mobileHide), onClick: function () { return console.log(postId); } },
            React.createElement(Icons_1.Icon, { name: Icons_1.EIcons.comments, size: 14 }),
            React.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        React.createElement("div", { className: classnames_1.default(menuitemslist_less_1.default.divider, menuitemslist_less_1.default.mobileHide) }),
        React.createElement("li", { className: classnames_1.default(menuitemslist_less_1.default.menuItem, menuitemslist_less_1.default.mobileHide), onClick: function () { return console.log(postId); } },
            React.createElement(Icons_1.Icon, { name: Icons_1.EIcons.share, size: 12 }),
            React.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        React.createElement("div", { className: classnames_1.default(menuitemslist_less_1.default.divider, menuitemslist_less_1.default.mobileHide) }),
        React.createElement("li", { className: classnames_1.default(menuitemslist_less_1.default.menuItem), onClick: function () { return console.log(postId); } },
            React.createElement(Icons_1.Icon, { name: Icons_1.EIcons.block, size: 14 }),
            React.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        React.createElement("div", { className: menuitemslist_less_1.default.divider }),
        React.createElement("li", { className: classnames_1.default(menuitemslist_less_1.default.menuItem, menuitemslist_less_1.default.mobileHide), onClick: function () { return console.log(postId); } },
            React.createElement(Icons_1.Icon, { name: Icons_1.EIcons.save, size: 14 }),
            React.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        React.createElement("div", { className: classnames_1.default(menuitemslist_less_1.default.divider, menuitemslist_less_1.default.mobileHide) }),
        React.createElement("li", { className: menuitemslist_less_1.default.menuItem },
            React.createElement(Icons_1.Icon, { name: Icons_1.EIcons.warning, size: 16 }),
            React.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--3OHVa",
	"menuItem": "menuitemslist__menuItem--3MKC7",
	"divider": "menuitemslist__divider--1ryOt",
	"desktopHide": "menuitemslist__desktopHide--1BrrG",
	"tabletHide": "menuitemslist__tabletHide--6uiPY",
	"mobileHide": "menuitemslist__mobileHide--2Ckyw"
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    };
}
exports.assoc = assoc;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContextProvider = exports.userContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(16);
exports.userContext = react_1.default.createContext({});
function UserContextProvider(_a) {
    var children = _a.children;
    var data = useUserData_1.useUserData().data;
    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));
}
exports.UserContextProvider = UserContextProvider;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(79);
exports.postsContext = react_1.default.createContext({});
function PostsContextProvider(_a) {
    var children = _a.children;
    var posts = usePostsData_1.usePostsData()[0];
    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));
}
exports.PostsContextProvider = PostsContextProvider;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var react_1 = __webpack_require__(0);
var axios_1 = __importDefault(__webpack_require__(2));
function usePostsData() {
    var _a = react_1.useState({}), posts = _a[0], setPosts = _a[1];
    react_1.useEffect(function () {
        axios_1.default.get('https://www.reddit.com/r/popular/best.json?sr_detail=true&limit=10')
            .then(function (resp) {
            var postsData = resp.data;
            setPosts({ posts: postsData.data.children });
        })
            .catch(console.log);
    }, []);
    return [posts];
}
exports.usePostsData = usePostsData;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(6);
var meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenReducer = void 0;
var actions_1 = __webpack_require__(7);
var tokenReducer = function (state, action) {
    switch (action.type) {
        case actions_1.SET_TOKEN:
            return __assign(__assign({}, state), { token: action.token });
        default:
            return state;
    }
};
exports.tokenReducer = tokenReducer;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(17));
var post_less_1 = __importDefault(__webpack_require__(87));
var axios_1 = __importDefault(__webpack_require__(2));
var CommentsList_1 = __webpack_require__(88);
var CommentFormContainer_1 = __webpack_require__(93);
var react_redux_1 = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(8);
function Post(props) {
    var _a = react_1.useState({ title: '', selftext: '', url: '' }), postData = _a[0], setPostData = _a[1];
    var _b = react_1.useState({}), comments = _b[0], setComments = _b[1];
    var token = react_redux_1.useSelector(function (state) { return state.token.token; });
    var ref = react_1.useRef(null);
    var history = react_router_dom_1.useHistory();
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                history.push('/posts');
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    react_1.useEffect(function () {
        var id = document.location.href.split('/posts/')[1];
        axios_1.default.get("https://oauth.reddit.com/comments/" + id + ".json?sr_detail=true&limit=20", {
            headers: { Authorization: "bearer " + token }
        })
            .then(function (resp) {
            var post = resp.data;
            setPostData(post[0].data.children[0].data);
            setComments(post[1].data.children);
        })
            .catch(console.log);
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_less_1.default.modal, ref: ref },
        react_1.default.createElement("h2", { className: post_less_1.default.title }, postData.title),
        react_1.default.createElement("div", { className: post_less_1.default.content },
            postData.selftext,
            /jpg|png$/.test(postData.url) ? react_1.default.createElement("img", { src: postData.url, alt: '', className: post_less_1.default.img }) : null),
        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),
        react_1.default.createElement(CommentsList_1.CommentsList, { comments: comments }))), node);
}
exports.Post = Post;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--2UOV_",
	"title": "post__title--M7Sb8",
	"content": "post__content--NPLlG",
	"img": "post__img--1-FHu"
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Comment_1 = __webpack_require__(90);
var generateRandomIndex_1 = __webpack_require__(18);
function CommentsList(props) {
    var comments = props.comments;
    return (react_1.default.createElement("div", null, comments.length !== undefined ? comments.map(function (comment) { return (react_1.default.createElement(Comment_1.Comment, { author: comment.data.author, text: comment.data.body, key: generateRandomIndex_1.generateRandomString() })); }) : react_1.default.createElement("p", null, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")));
}
exports.CommentsList = CommentsList;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(91), exports);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var react_1 = __importStar(__webpack_require__(0));
var comment_less_1 = __importDefault(__webpack_require__(92));
var Icons_1 = __webpack_require__(4);
function Comment(props) {
    var author = props.author, text = props.text;
    var _a = react_1.useState(false), isFormVisible = _a[0], setIsFormVisible = _a[1];
    var _b = react_1.useState(''), comment = _b[0], setComment = _b[1];
    var ref = react_1.useRef(null);
    function handleSubmit(event) {
        event.preventDefault();
        setIsFormVisible(false);
        console.log(comment);
        setComment(author + ", ");
    }
    function handleChange(event) {
        setComment(event.target.value);
    }
    function handleReply() {
        setIsFormVisible(true);
        setTimeout(function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
            setComment(author + ", ");
        }, 0);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, author ?
        react_1.default.createElement("div", { className: comment_less_1.default.comment },
            react_1.default.createElement("span", { className: comment_less_1.default.author }, author),
            react_1.default.createElement("p", { className: comment_less_1.default.text }, text),
            react_1.default.createElement("button", { className: comment_less_1.default.btnReply, onClick: handleReply, style: !isFormVisible ? { display: 'flex' } : { display: 'none' } },
                react_1.default.createElement(Icons_1.Icon, { name: Icons_1.EIcons.comments, size: 14 }),
                "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"),
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: comment_less_1.default.form, style: isFormVisible ? { display: 'flex' } : { display: 'none' } },
                react_1.default.createElement("textarea", { className: comment_less_1.default.textarea, onChange: handleChange, value: comment, ref: ref }),
                react_1.default.createElement("button", { className: comment_less_1.default.btnComment, type: 'submit' }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")))
        : null));
}
exports.Comment = Comment;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comment": "comment__comment--3BHsC",
	"author": "comment__author--3nxzZ",
	"text": "comment__text--ucjI-",
	"btnReply": "comment__btnReply--3UwZS",
	"form": "comment__form--1UDMr",
	"textarea": "comment__textarea--13D-T",
	"btnComment": "comment__btnComment--3BxrZ"
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var reducer_1 = __webpack_require__(19);
var CommentForm_1 = __webpack_require__(95);
function CommentFormContainer() {
    var value = react_redux_1.useSelector(function (state) { return state.commentText; });
    var dispatch = react_redux_1.useDispatch();
    function handleChange(event) {
        dispatch(reducer_1.updateComment(event.target.value));
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(value);
    }
    return (react_1.default.createElement(CommentForm_1.CommentForm
    // value={value}
    // onChange={handleChange}
    // onSubmit={handleSubmit}
    , null));
}
exports.CommentFormContainer = CommentFormContainer;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var commentform_less_1 = __importDefault(__webpack_require__(97));
var formik_1 = __webpack_require__(98);
function CommentForm() {
    function validateValue(value) {
        var error;
        if (value.length <= 3) {
            error = 'Введите больше 3-х символов';
        }
        return error;
    }
    return (react_1.default.createElement(formik_1.Formik, { initialValues: {
            comment: '',
        }, onSubmit: function (value) { return alert("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \"" + value.comment + "\" \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"); } }, function (_a) {
        var errors = _a.errors, touched = _a.touched;
        return (react_1.default.createElement(formik_1.Form, { className: commentform_less_1.default.form },
            react_1.default.createElement(formik_1.Field, { className: commentform_less_1.default.input, as: "textarea", name: "comment", validate: validateValue }),
            errors.comment && touched.comment && react_1.default.createElement("div", null, errors.comment),
            react_1.default.createElement("button", { type: "submit", className: commentform_less_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
    }));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--1EH-x",
	"input": "commentform__input--owNXB",
	"button": "commentform__button--1ZHOB"
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Reddit for me</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n    window.__token__ = '" + token + "'\n  </script>\n</head>\n<body>\n  <div id=\"react_root\">" + content + "</div>\n  <div id=\"modal_root\"></div>\n  <div id=\"dropdown_root\"></div>\n</body>\n</html>\n"; };
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);