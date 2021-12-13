module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("j6OS");


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");

// CONCATENATED MODULE: ./components/Header.js





/* harmony default export */ var Header = (() => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Menu"], {
    style: {
      marginTop: "10px"
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(routes["Link"], {
      route: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Icon"], {
          color: "black",
          name: "home"
        }), "Home"]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(routes["Link"], {
      route: "/data/market",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Icon"], {
          name: "users"
        }), "Marketplace"]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(routes["Link"], {
      route: "/data/submit",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Icon"], {
          name: "download"
        }), "Submit your Data"]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(routes["Link"], {
      route: "/about",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "item",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Icon"], {
          name: "users"
        }), "About Us"]
      })
    })]
  });
});
// CONCATENATED MODULE: ./components/Layout.js





/* harmony default export */ var Layout = __webpack_exports__["a"] = (props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Container"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), props.children]
  });
});

/***/ }),

/***/ "6/hJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RB2s");
/* harmony import */ var _build_BuyEventTest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Vkv+");
var _build_BuyEventTest_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("Vkv+", 1);


const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].eth.Contract(JSON.parse(_build_BuyEventTest_json__WEBPACK_IMPORTED_MODULE_1__.interface), "0x171db86cda1452d0ffda3b8fb999452f56f00c52" // <- Buy event contract.
);
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__("90Kz")();

routes.add('/data/submit', '/data/submit').add('/data/market', '/data/market').add('/data/:address', '/data/show');
module.exports = routes;

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "Gz5v":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"web3\",\"version\":\"1.3.5\",\"description\":\"Ethereum JavaScript API\",\"repository\":\"https://github.com/ethereum/web3.js\",\"license\":\"LGPL-3.0\",\"engines\":{\"node\":\">=8.0.0\"},\"main\":\"lib/index.js\",\"bugs\":{\"url\":\"https://github.com/ethereum/web3.js/issues\"},\"keywords\":[\"Ethereum\",\"JavaScript\",\"API\"],\"author\":\"ethereum.org\",\"types\":\"types/index.d.ts\",\"scripts\":{\"compile\":\"tsc -b tsconfig.json\",\"dtslint\":\"dtslint --localTs ../../node_modules/typescript/lib types\",\"postinstall\":\"echo \\\"WARNING: the web3-shh and web3-bzz api will be deprecated in the next version\\\"\"},\"authors\":[{\"name\":\"Fabian Vogelsteller\",\"email\":\"fabian@ethereum.org\",\"homepage\":\"http://frozeman.de\"},{\"name\":\"Marek Kotewicz\",\"email\":\"marek@parity.io\",\"url\":\"https://github.com/debris\"},{\"name\":\"Marian Oancea\",\"url\":\"https://github.com/cubedro\"},{\"name\":\"Gav Wood\",\"email\":\"g@parity.io\",\"homepage\":\"http://gavwood.com\"},{\"name\":\"Jeffery Wilcke\",\"email\":\"jeffrey.wilcke@ethereum.org\",\"url\":\"https://github.com/obscuren\"}],\"dependencies\":{\"web3-bzz\":\"1.3.5\",\"web3-core\":\"1.3.5\",\"web3-eth\":\"1.3.5\",\"web3-eth-personal\":\"1.3.5\",\"web3-net\":\"1.3.5\",\"web3-shh\":\"1.3.5\",\"web3-utils\":\"1.3.5\"},\"devDependencies\":{\"@types/node\":\"^12.12.6\",\"dtslint\":\"^3.4.1\",\"typescript\":\"^3.9.5\"},\"gitHead\":\"6674ea5d39fa33677a1547e23ef8c1b86031a4d0\"}");

/***/ }),

/***/ "KkSz":
/***/ (function(module, exports) {

module.exports = require("web3-net");

/***/ }),

/***/ "Q3jY":
/***/ (function(module, exports) {

module.exports = require("web3-shh");

/***/ }),

/***/ "RB2s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("meUc");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://52.48.42.217:8545');
var web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
/* harmony default export */ __webpack_exports__["a"] = (web3); // let web3;
// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//     //We are in the browser & metamask is running
//     web3 = new Web3(window.web3.currentProvider);
// } else {
//     //We are on the server OR the user is not running metamask
//     const provider = new Web3.providers.HttpProvider(
//         'https://rinkeby.infura.io/v3/1da2fd13a9894c518fab5e8bcc05468a'
//     );
//     web3 = new Web3(provider);
// }

/***/ }),

/***/ "TYn5":
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "Vkv+":
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":25,\"end\":552,\"name\":\"MSTORE\"},{\"begin\":25,\"end\":552,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":25,\"end\":552,\"name\":\"POP\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":25,\"end\":552,\"name\":\"DUP1\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":552,\"name\":\"CODECOPY\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":552,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a7230582017338daf209ca082faa766a0e78e376106d07600de9b2b69780568e74fc1dec60029\",\".code\":[{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":25,\"end\":552,\"name\":\"MSTORE\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":25,\"end\":552,\"name\":\"CALLDATASIZE\"},{\"begin\":25,\"end\":552,\"name\":\"LT\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":25,\"end\":552,\"name\":\"JUMPI\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":552,\"name\":\"CALLDATALOAD\"},{\"begin\":25,\"end\":552,\"name\":\"DIV\"},{\"begin\":25,\"end\":552,\"name\":\"AND\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"74487F4\"},{\"begin\":25,\"end\":552,\"name\":\"DUP2\"},{\"begin\":25,\"end\":552,\"name\":\"EQ\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":25,\"end\":552,\"name\":\"JUMPI\"},{\"begin\":25,\"end\":552,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":25,\"end\":552,\"name\":\"JUMPDEST\"},{\"begin\":25,\"end\":552,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":552,\"name\":\"DUP1\"},{\"begin\":25,\"end\":552,\"name\":\"REVERT\"},{\"begin\":221,\"end\":550,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":221,\"end\":550,\"name\":\"JUMPDEST\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":221,\"end\":550,\"name\":\"DUP1\"},{\"begin\":221,\"end\":550,\"name\":\"MLOAD\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"64\"},{\"begin\":221,\"end\":550,\"name\":\"CALLDATALOAD\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":221,\"end\":550,\"name\":\"DUP2\"},{\"begin\":221,\"end\":550,\"name\":\"DUP2\"},{\"begin\":221,\"end\":550,\"name\":\"ADD\"},{\"begin\":221,\"end\":550,\"name\":\"CALLDATALOAD\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP3\"},{\"begin\":221,\"end\":550,\"name\":\"DUP4\"},{\"begin\":221,\"end\":550,\"name\":\"ADD\"},{\"begin\":221,\"end\":550,\"name\":\"DUP5\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP1\"},{\"begin\":221,\"end\":550,\"name\":\"DIV\"},{\"begin\":221,\"end\":550,\"name\":\"DUP5\"},{\"begin\":221,\"end\":550,\"name\":\"MUL\"},{\"begin\":221,\"end\":550,\"name\":\"DUP6\"},{\"begin\":221,\"end\":550,\"name\":\"ADD\"},{\"begin\":221,\"end\":550,\"name\":\"DUP5\"},{\"begin\":221,\"end\":550,\"name\":\"ADD\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP1\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP6\"},{\"begin\":221,\"end\":550,\"name\":\"MSTORE\"},{\"begin\":221,\"end\":550,\"name\":\"DUP2\"},{\"begin\":221,\"end\":550,\"name\":\"DUP5\"},{\"begin\":221,\"end\":550,\"name\":\"MSTORE\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP5\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":221,\"end\":550,\"name\":\"DUP2\"},{\"begin\":221,\"end\":550,\"name\":\"CALLDATALOAD\"},{\"begin\":221,\"end\":550,\"name\":\"AND\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP5\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":221,\"end\":550,\"name\":\"DUP1\"},{\"begin\":221,\"end\":550,\"name\":\"CALLDATALOAD\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP6\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"44\"},{\"begin\":221,\"end\":550,\"name\":\"CALLDATALOAD\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP6\"},{\"begin\":221,\"end\":550,\"name\":\"CALLDATASIZE\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP6\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH\",\"value\":\"84\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP5\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP4\"},{\"begin\":221,\"end\":550,\"name\":\"ADD\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP2\"},{\"begin\":221,\"end\":550,\"name\":\"DUP2\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP1\"},{\"begin\":221,\"end\":550,\"name\":\"DUP5\"},{\"begin\":221,\"end\":550,\"name\":\"ADD\"},{\"begin\":221,\"end\":550,\"name\":\"DUP4\"},{\"begin\":221,\"end\":550,\"name\":\"DUP3\"},{\"begin\":221,\"end\":550,\"name\":\"DUP1\"},{\"begin\":221,\"end\":550,\"name\":\"DUP3\"},{\"begin\":221,\"end\":550,\"name\":\"DUP5\"},{\"begin\":221,\"end\":550,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP5\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP8\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":221,\"end\":550,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":221,\"end\":550,\"name\":\"SWAP7\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":221,\"end\":550,\"name\":\"JUMP\"},{\"begin\":221,\"end\":550,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":221,\"end\":550,\"name\":\"JUMPDEST\"},{\"begin\":221,\"end\":550,\"name\":\"STOP\"},{\"begin\":221,\"end\":550,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":221,\"end\":550,\"name\":\"JUMPDEST\"},{\"begin\":353,\"end\":363,\"name\":\"CALLER\"},{\"begin\":353,\"end\":371,\"name\":\"BALANCE\"},{\"begin\":353,\"end\":388,\"name\":\"DUP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"GT\"},{\"begin\":353,\"end\":388,\"name\":\"ISZERO\"},{\"begin\":344,\"end\":389,\"name\":\"PUSH [tag]\",\"value\":\"6\"},{\"begin\":344,\"end\":389,\"name\":\"JUMPI\"},{\"begin\":344,\"end\":389,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":344,\"end\":389,\"name\":\"DUP1\"},{\"begin\":344,\"end\":389,\"name\":\"REVERT\"},{\"begin\":344,\"end\":389,\"name\":\"tag\",\"value\":\"6\"},{\"begin\":344,\"end\":389,\"name\":\"JUMPDEST\"},{\"begin\":399,\"end\":404,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":399,\"end\":417,\"name\":\"DUP1\"},{\"begin\":399,\"end\":417,\"name\":\"SLOAD\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":399,\"end\":417,\"name\":\"AND\"},{\"begin\":407,\"end\":417,\"name\":\"CALLER\"},{\"begin\":399,\"end\":417,\"name\":\"OR\"},{\"begin\":399,\"end\":417,\"name\":\"DUP2\"},{\"begin\":399,\"end\":417,\"name\":\"SSTORE\"},{\"begin\":427,\"end\":460,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":427,\"end\":460,\"name\":\"MLOAD\"},{\"begin\":399,\"end\":417,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":427,\"end\":445,\"name\":\"DUP7\"},{\"begin\":427,\"end\":445,\"name\":\"AND\"},{\"begin\":427,\"end\":445,\"name\":\"SWAP2\"},{\"begin\":427,\"end\":460,\"name\":\"DUP6\"},{\"begin\":427,\"end\":460,\"name\":\"ISZERO\"},{\"begin\":427,\"end\":460,\"name\":\"PUSH\",\"value\":\"8FC\"},{\"begin\":427,\"end\":460,\"name\":\"MUL\"},{\"begin\":427,\"end\":460,\"name\":\"SWAP2\"},{\"begin\":446,\"end\":459,\"name\":\"DUP7\"},{\"begin\":446,\"end\":459,\"name\":\"SWAP2\"},{\"begin\":427,\"end\":460,\"name\":\"DUP2\"},{\"begin\":399,\"end\":404,\"name\":\"DUP2\"},{\"begin\":427,\"end\":460,\"name\":\"DUP2\"},{\"begin\":446,\"end\":459,\"name\":\"DUP6\"},{\"begin\":427,\"end\":445,\"name\":\"DUP9\"},{\"begin\":427,\"end\":460,\"name\":\"DUP9\"},{\"begin\":427,\"end\":460,\"name\":\"CALL\"},{\"begin\":427,\"end\":460,\"name\":\"SWAP4\"},{\"begin\":427,\"end\":460,\"name\":\"POP\"},{\"begin\":427,\"end\":460,\"name\":\"POP\"},{\"begin\":427,\"end\":460,\"name\":\"POP\"},{\"begin\":427,\"end\":460,\"name\":\"POP\"},{\"begin\":427,\"end\":460,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":45,\"end\":61,\"name\":\"RETURNDATASIZE\"},{\"begin\":42,\"end\":43,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":39,\"end\":40,\"name\":\"DUP1\"},{\"begin\":24,\"end\":62,\"name\":\"RETURNDATACOPY\"},{\"begin\":77,\"end\":93,\"name\":\"RETURNDATASIZE\"},{\"begin\":74,\"end\":75,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":67,\"end\":94,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":427,\"end\":460,\"name\":\"POP\"},{\"begin\":533,\"end\":542,\"name\":\"DUP1\"},{\"begin\":484,\"end\":543,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":484,\"end\":543,\"name\":\"MLOAD\"},{\"begin\":484,\"end\":543,\"name\":\"DUP1\"},{\"begin\":484,\"end\":543,\"name\":\"DUP3\"},{\"begin\":484,\"end\":543,\"name\":\"DUP1\"},{\"begin\":484,\"end\":543,\"name\":\"MLOAD\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":484,\"end\":543,\"name\":\"ADD\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"DUP1\"},{\"begin\":484,\"end\":543,\"name\":\"DUP4\"},{\"begin\":484,\"end\":543,\"name\":\"DUP4\"},{\"begin\":36,\"end\":189,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":36,\"end\":189,\"name\":\"JUMPDEST\"},{\"begin\":66,\"end\":68,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":58,\"end\":69,\"name\":\"DUP4\"},{\"begin\":58,\"end\":69,\"name\":\"LT\"},{\"begin\":36,\"end\":189,\"name\":\"PUSH [tag]\",\"value\":\"9\"},{\"begin\":36,\"end\":189,\"name\":\"JUMPI\"},{\"begin\":176,\"end\":186,\"name\":\"DUP1\"},{\"begin\":176,\"end\":186,\"name\":\"MLOAD\"},{\"begin\":164,\"end\":187,\"name\":\"DUP3\"},{\"begin\":164,\"end\":187,\"name\":\"MSTORE\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":139,\"end\":151,\"name\":\"SWAP1\"},{\"begin\":139,\"end\":151,\"name\":\"SWAP3\"},{\"begin\":139,\"end\":151,\"name\":\"ADD\"},{\"begin\":139,\"end\":151,\"name\":\"SWAP2\"},{\"begin\":98,\"end\":100,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":89,\"end\":101,\"name\":\"SWAP2\"},{\"begin\":89,\"end\":101,\"name\":\"DUP3\"},{\"begin\":89,\"end\":101,\"name\":\"ADD\"},{\"begin\":89,\"end\":101,\"name\":\"SWAP2\"},{\"begin\":114,\"end\":126,\"name\":\"ADD\"},{\"begin\":36,\"end\":189,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":36,\"end\":189,\"name\":\"JUMP\"},{\"begin\":36,\"end\":189,\"name\":\"tag\",\"value\":\"9\"},{\"begin\":36,\"end\":189,\"name\":\"JUMPDEST\"},{\"begin\":299,\"end\":309,\"name\":\"MLOAD\"},{\"begin\":344,\"end\":354,\"name\":\"DUP2\"},{\"begin\":344,\"end\":354,\"name\":\"MLOAD\"},{\"begin\":263,\"end\":265,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":259,\"end\":271,\"name\":\"SWAP4\"},{\"begin\":259,\"end\":271,\"name\":\"DUP5\"},{\"begin\":259,\"end\":271,\"name\":\"SUB\"},{\"begin\":254,\"end\":257,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":250,\"end\":272,\"name\":\"EXP\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":-1,\"end\":-1,\"name\":\"NOT\"},{\"begin\":246,\"end\":276,\"name\":\"ADD\"},{\"begin\":311,\"end\":320,\"name\":\"DUP1\"},{\"begin\":311,\"end\":320,\"name\":\"NOT\"},{\"begin\":295,\"end\":321,\"name\":\"SWAP1\"},{\"begin\":295,\"end\":321,\"name\":\"SWAP3\"},{\"begin\":295,\"end\":321,\"name\":\"AND\"},{\"begin\":340,\"end\":361,\"name\":\"SWAP2\"},{\"begin\":340,\"end\":361,\"name\":\"AND\"},{\"begin\":377,\"end\":397,\"name\":\"OR\"},{\"begin\":365,\"end\":398,\"name\":\"SWAP1\"},{\"begin\":365,\"end\":398,\"name\":\"MSTORE\"},{\"begin\":484,\"end\":543,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":484,\"end\":543,\"name\":\"DUP1\"},{\"begin\":484,\"end\":543,\"name\":\"MLOAD\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP3\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP5\"},{\"begin\":484,\"end\":543,\"name\":\"ADD\"},{\"begin\":484,\"end\":543,\"name\":\"DUP3\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"SUB\"},{\"begin\":484,\"end\":543,\"name\":\"DUP3\"},{\"begin\":484,\"end\":543,\"name\":\"KECCAK256\"},{\"begin\":-1,\"end\":-1,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":518,\"end\":523,\"name\":\"SLOAD\"},{\"begin\":518,\"end\":523,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":484,\"end\":543,\"name\":\"DUP13\"},{\"begin\":484,\"end\":543,\"name\":\"DUP2\"},{\"begin\":484,\"end\":543,\"name\":\"AND\"},{\"begin\":484,\"end\":543,\"name\":\"DUP6\"},{\"begin\":484,\"end\":543,\"name\":\"MSTORE\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP3\"},{\"begin\":484,\"end\":543,\"name\":\"DUP5\"},{\"begin\":484,\"end\":543,\"name\":\"ADD\"},{\"begin\":484,\"end\":543,\"name\":\"DUP12\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"MSTORE\"},{\"begin\":484,\"end\":543,\"name\":\"DUP6\"},{\"begin\":484,\"end\":543,\"name\":\"MLOAD\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP2\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP8\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":525,\"end\":531,\"name\":\"DUP10\"},{\"begin\":525,\"end\":531,\"name\":\"SWAP7\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":518,\"end\":523,\"name\":\"SWAP2\"},{\"begin\":518,\"end\":523,\"name\":\"SWAP1\"},{\"begin\":518,\"end\":523,\"name\":\"SWAP2\"},{\"begin\":518,\"end\":523,\"name\":\"AND\"},{\"begin\":518,\"end\":523,\"name\":\"SWAP4\"},{\"begin\":484,\"end\":543,\"name\":\"PUSH\",\"value\":\"D34B75FDFB75181CA7EEF29EDFE507DA17FBAD2E5E0CF2535E4C32CE7949A030\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP4\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP2\"},{\"begin\":484,\"end\":543,\"name\":\"DUP2\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"SUB\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP2\"},{\"begin\":484,\"end\":543,\"name\":\"ADD\"},{\"begin\":484,\"end\":543,\"name\":\"SWAP1\"},{\"begin\":484,\"end\":543,\"name\":\"LOG4\"},{\"begin\":221,\"end\":550,\"name\":\"POP\"},{\"begin\":221,\"end\":550,\"name\":\"POP\"},{\"begin\":221,\"end\":550,\"name\":\"POP\"},{\"begin\":221,\"end\":550,\"name\":\"POP\"},{\"begin\":221,\"end\":550,\"name\":\"JUMP\",\"value\":\"[out]\"}]}}},\"bytecode\":\"608060405234801561001057600080fd5b50610207806100206000396000f3006080604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663074487f48114610045575b600080fd5b604080516020601f6064356004818101359283018490048402850184019095528184526100b19473ffffffffffffffffffffffffffffffffffffffff81351694602480359560443595369560849493019181908401838280828437509497506100b39650505050505050565b005b33318311156100c157600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19163317815560405173ffffffffffffffffffffffffffffffffffffffff86169185156108fc02918691818181858888f19350505050158015610121573d6000803e3d6000fd5b50806040518082805190602001908083835b602083106101525780518252601f199092019160209182019101610133565b51815160209384036101000a60001901801990921691161790526040805192909401829003822060005473ffffffffffffffffffffffffffffffffffffffff8c811685529284018b9052855191975089965091909116937fd34b75fdfb75181ca7eef29edfe507da17fbad2e5e0cf2535e4c32ce7949a03093509181900390910190a4505050505600a165627a7a7230582017338daf209ca082faa766a0e78e376106d07600de9b2b69780568e74fc1dec60029\",\"functionHashes\":{\"EmitEvent(address,uint256,uint256,string)\":\"074487f4\"},\"gasEstimates\":{\"creation\":[153,103800],\"external\":{\"EmitEvent(address,uint256,uint256,string)\":null},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"transferValue\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"dataID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"EmitEvent\\\",\\\"outputs\\\":[],\\\"payable\\\":true,\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"transferValue\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"addressFrom\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"dataID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"BuyData\\\",\\\"type\\\":\\\"event\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.25+commit.59dbf8f1\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"name\\\":\\\"transferValue\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"dataID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"EmitEvent\\\",\\\"outputs\\\":[],\\\"payable\\\":true,\\\"stateMutability\\\":\\\"payable\\\",\\\"type\\\":\\\"function\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"transferValue\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"addressFrom\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"dataID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"string\\\"}],\\\"name\\\":\\\"BuyData\\\",\\\"type\\\":\\\"event\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"\\\":\\\"BuyEventTest\\\"},\\\"evmVersion\\\":\\\"byzantium\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"\\\":{\\\"keccak256\\\":\\\"0x564f4bbe15df7573f72267d5ee35da21efdfc52af18cc004f9ec4ea9e91cb6b4\\\",\\\"urls\\\":[\\\"bzzr://74aa176b0cacdc3aa91510a331c88bd44bdd504ab3f4727dfab738d90b26ee99\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x207 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x40 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x74487F4 DUP2 EQ PUSH2 0x45 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x1F PUSH1 0x64 CALLDATALOAD PUSH1 0x4 DUP2 DUP2 ADD CALLDATALOAD SWAP3 DUP4 ADD DUP5 SWAP1 DIV DUP5 MUL DUP6 ADD DUP5 ADD SWAP1 SWAP6 MSTORE DUP2 DUP5 MSTORE PUSH2 0xB1 SWAP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 CALLDATALOAD AND SWAP5 PUSH1 0x24 DUP1 CALLDATALOAD SWAP6 PUSH1 0x44 CALLDATALOAD SWAP6 CALLDATASIZE SWAP6 PUSH1 0x84 SWAP5 SWAP4 ADD SWAP2 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP PUSH2 0xB3 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST CALLER BALANCE DUP4 GT ISZERO PUSH2 0xC1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND CALLER OR DUP2 SSTORE PUSH1 0x40 MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP7 AND SWAP2 DUP6 ISZERO PUSH2 0x8FC MUL SWAP2 DUP7 SWAP2 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x121 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP DUP1 PUSH1 0x40 MLOAD DUP1 DUP3 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 JUMPDEST PUSH1 0x20 DUP4 LT PUSH2 0x152 JUMPI DUP1 MLOAD DUP3 MSTORE PUSH1 0x1F NOT SWAP1 SWAP3 ADD SWAP2 PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 ADD PUSH2 0x133 JUMP JUMPDEST MLOAD DUP2 MLOAD PUSH1 0x20 SWAP4 DUP5 SUB PUSH2 0x100 EXP PUSH1 0x0 NOT ADD DUP1 NOT SWAP1 SWAP3 AND SWAP2 AND OR SWAP1 MSTORE PUSH1 0x40 DUP1 MLOAD SWAP3 SWAP1 SWAP5 ADD DUP3 SWAP1 SUB DUP3 KECCAK256 PUSH1 0x0 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP13 DUP2 AND DUP6 MSTORE SWAP3 DUP5 ADD DUP12 SWAP1 MSTORE DUP6 MLOAD SWAP2 SWAP8 POP DUP10 SWAP7 POP SWAP2 SWAP1 SWAP2 AND SWAP4 PUSH32 0xD34B75FDFB75181CA7EEF29EDFE507DA17FBAD2E5E0CF2535E4C32CE7949A030 SWAP4 POP SWAP2 DUP2 SWAP1 SUB SWAP1 SWAP2 ADD SWAP1 LOG4 POP POP POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 OR CALLER DUP14 0xaf KECCAK256 SWAP13 LOG0 DUP3 STATICCALL 0xa7 PUSH7 0xA0E78E376106D0 PUSH23 0xDE9B2B69780568E74FC1DEC600290000000000000000 \",\"runtimeBytecode\":\"6080604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663074487f48114610045575b600080fd5b604080516020601f6064356004818101359283018490048402850184019095528184526100b19473ffffffffffffffffffffffffffffffffffffffff81351694602480359560443595369560849493019181908401838280828437509497506100b39650505050505050565b005b33318311156100c157600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19163317815560405173ffffffffffffffffffffffffffffffffffffffff86169185156108fc02918691818181858888f19350505050158015610121573d6000803e3d6000fd5b50806040518082805190602001908083835b602083106101525780518252601f199092019160209182019101610133565b51815160209384036101000a60001901801990921691161790526040805192909401829003822060005473ffffffffffffffffffffffffffffffffffffffff8c811685529284018b9052855191975089965091909116937fd34b75fdfb75181ca7eef29edfe507da17fbad2e5e0cf2535e4c32ce7949a03093509181900390910190a4505050505600a165627a7a7230582017338daf209ca082faa766a0e78e376106d07600de9b2b69780568e74fc1dec60029\",\"srcmap\":\"25:527:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:527:0;;;;;;;\",\"srcmapRuntime\":\"25:527:0:-;;;;;;;;;;;;;;;;;;;;;;;221:329;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;221:329:0;;-1:-1:-1;221:329:0;;-1:-1:-1;;;;;;;221:329:0;;;;353:10;:18;:35;-1:-1:-1;353:35:0;344:45;;;;;;399:5;:18;;-1:-1:-1;;399:18:0;407:10;399:18;;;427:33;;399:18;427;;;:33;;;;;446:13;;427:33;399:5;427:33;446:13;427:18;:33;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;427:33:0;533:9;484:59;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;484:59:0;;;;;;;;;;;;-1:-1:-1;518:5:0;;484:59;;;;;;;;;;;;;;;-1:-1:-1;525:6:0;;-1:-1:-1;518:5:0;;;;;484:59;;-1:-1:-1;484:59:0;;;;;;;;;221:329;;;;:::o\"}");

/***/ }),

/***/ "WSW/":
/***/ (function(module, exports) {

module.exports = require("web3-core");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cHlk":
/***/ (function(module, exports) {

module.exports = require("web3-eth-personal");

/***/ }),

/***/ "dhnp":
/***/ (function(module, exports) {

module.exports = require("web3-bzz");

/***/ }),

/***/ "j6OS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./Ethereum/contract2.js
var contract2 = __webpack_require__("6/hJ");

// EXTERNAL MODULE: ./Ethereum/web3.js
var web3 = __webpack_require__("RB2s");

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__("TYn5");

// CONCATENATED MODULE: ./components/getBuyEvents.js



async function getBuyEvents() {
  let provider = new external_ethers_["ethers"].providers.Web3Provider(web3["a" /* default */].currentProvider);
  let abi = ["event BuyData(address recipient, uint transferValue, address indexed addressFrom, uint indexed dataID, string indexed timestamp)"];
  let ens = new external_ethers_["ethers"].Contract(contract2["a" /* default */]._address, abi, provider);
  var filter = ens.filters.BuyData();
  filter.fromBlock = 0;
  filter.toBlock = "latest";
  const blockNumber = await provider.getBlockNumber();
  const events = (await provider.getLogs(filter)).reverse(); // console.log(events);

  return {
    blockNumber: blockNumber,
    events: events
  };
}
;
// CONCATENATED MODULE: ./components/decodeBuyingData.js

function decodeBuyingData(item) {
  const decoder = new external_ethers_["ethers"].utils.AbiCoder();
  return decoder.decode(["address", "uint"], item.data);
}
;
// CONCATENATED MODULE: ./pages/data/market.js


//Show all transactions






class market_Market extends external_react_["Component"] {
  static async getInitialProps() {
    var results = await getBuyEvents();
    const blockNumber = results.blockNumber;
    const decodedEvents = results.events; // console.log(decodedEvents);

    return {
      blockNumber,
      decodedEvents
    };
  }

  renderTransactions() {
    const style = {
      color: "#33364d"
    };
    const items = this.props.decodedEvents.map(item => {
      //console.log(item);
      console.log(1);
      const decodedData = decodeBuyingData(item);
      const recipient = decodedData[0];
      const cost = parseInt(decodedData[1]._hex, 16);
      const buyer = "0x" + item.topics[1].substr(26, 64).toUpperCase();
      const dataID = parseInt(item.topics[2], 16); // const timestamp = new Date(parseInt(item.topics[3])).toLocaleString();
      // console.log(Date(parseInt(item.topics[3])).toLocaleString())

      return {
        header: item.transactionHash,
        meta: "Block: " + item.blockNumber,
        description: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"], {
          verticalAlign: "middle",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"].Row, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"].Column, {
              floated: "left",
              width: 13,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: style,
                children: ["Buyer: ", buyer]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: style,
                children: ["Seller: ", recipient]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: style,
                children: ["Data ID: ", dataID]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: style,
                children: ["Price: ", cost, " Tokens"]
              })]
            })
          })
        }),
        fluid: true,
        color: 'yellow'
      };
    });
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"], {
        verticalAlign: "middle",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Grid"].Row, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_semantic_ui_react_["Grid"].Column, {
            floated: "left",
            width: 13,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: "This page shows all the data traded in the market."
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
              children: ["There are currently ", this.props.blockNumber, " blocks in the blockchain."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
              children: ["Smart contract address: ", this.props.decodedEvents[0].address, "."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
              children: ["Event signature: ", this.props.decodedEvents[0].topics[0], "."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
              children: ["Showing a total of ", this.props.decodedEvents.length, " events."]
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_semantic_ui_react_["Card"].Group, {
        items: items
      })]
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: this.renderTransactions()
      })
    });
  }

}

/* harmony default export */ var market = __webpack_exports__["default"] = (market_Market);

/***/ }),

/***/ "l6o+":
/***/ (function(module, exports) {

module.exports = require("web3-utils");

/***/ }),

/***/ "meUc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Gav Wood <gav@parity.io>
 *   Jeffrey Wilcke <jeffrey.wilcke@ethereum.org>
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea <marian@ethereum.org>
 * @date 2017
 */

var version = __webpack_require__("Gz5v").version;
var core = __webpack_require__("WSW/");
var Eth = __webpack_require__("yr9D");
var Net = __webpack_require__("KkSz");
var Personal = __webpack_require__("cHlk");
var Shh = __webpack_require__("Q3jY");
var Bzz = __webpack_require__("dhnp");
var utils = __webpack_require__("l6o+");
var Web3 = function Web3() {
    var _this = this;
    // sets _requestmanager etc
    core.packageInit(this, arguments);
    this.version = version;
    this.utils = utils;
    this.eth = new Eth(this);
    this.shh = new Shh(this);
    this.bzz = new Bzz(this);
    // overwrite package setProvider
    var setProvider = this.setProvider;
    this.setProvider = function (provider, net) {
        /*jshint unused: false */
        setProvider.apply(_this, arguments);
        _this.eth.setRequestManager(_this._requestManager);
        _this.shh.setRequestManager(_this._requestManager);
        _this.bzz.setProvider(provider);
        return true;
    };
};
Web3.version = version;
Web3.utils = utils;
Web3.modules = {
    Eth: Eth,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};
core.addProviders(Web3);
module.exports = Web3;


/***/ }),

/***/ "yr9D":
/***/ (function(module, exports) {

module.exports = require("web3-eth");

/***/ })

/******/ });