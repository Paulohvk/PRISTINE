module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("N08F");


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

/***/ "Ewas":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RB2s");
/* harmony import */ var _build_EventTest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TcDP");
var _build_EventTest_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("TcDP", 1);


const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].eth.Contract(JSON.parse(_build_EventTest_json__WEBPACK_IMPORTED_MODULE_1__.interface), "0xce45befd75ea1159a6c29f12afffaa3e5f5d816e" // <- Data recording - Event contract
); // import testContract from './build/Test.json';
// const instance = new web3.eth.Contract(
//     JSON.parse(testContract.interface),
//     "0x120dd2b21b93eb3b358fe5e5f6c3b54210337fe5" <- Hello World Contract
// );

/* harmony default export */ __webpack_exports__["a"] = (instance);

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

/***/ "N08F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Yp1");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_getEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ODbA");
/* harmony import */ var _components_getTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ZoJ7");
/* harmony import */ var _components_decodeData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("rUnp");










class TestIndex extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps() {
    var results = await Object(_components_getEvents__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])();
    const blockNumber = results.blockNumber;
    const decodedEvents = results.events; // console.log(decodedEvents);

    return {
      blockNumber,
      decodedEvents
    };
  }

  renderMarketPlace() {
    const style = {
      color: "#33364d"
    };
    const items = this.props.decodedEvents.map(item => {
      // console.log(item);
      var dataType = Object(_components_getTags__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(item);
      const decodedData = Object(_components_decodeData__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(item);
      const timestamp = new Date(parseInt(decodedData[1])).toLocaleString();
      const cost = parseInt(decodedData[2]._hex, 16);
      return {
        header: item.transactionHash,
        meta: "Block: " + item.blockNumber,
        description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          verticalAlign: "middle",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              floated: "left",
              width: 13,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                style: style,
                children: ["From: 0x", item.topics[1].substr(26, 64).toUpperCase()]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                style: style,
                children: ["Tags: ", dataType]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                style: style,
                children: ["ID: ", parseInt(item.topics[2], 16)]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                style: style,
                children: ["Cost: ", cost, " Tokens"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                style: style,
                children: ["Timestamp: ", timestamp]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
              floated: "right",
              width: 3,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
                route: `/data/${item.transactionHash}`,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                    content: "Buy this data",
                    icon: "money",
                    primary: true
                  })
                })
              })
            })]
          })
        }),
        fluid: true,
        color: 'yellow'
      };
    });
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        verticalAlign: "middle",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            floated: "left",
            width: 13,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
              children: "Welcome to the Blockchain-powered Data Marketplace!"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h3", {
              children: ["There are currently ", this.props.blockNumber, " blocks in the blockchain."]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h3", {
              children: ["Smart contract address: ", this.props.decodedEvents[0].address, "."]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h3", {
              children: ["Event signature: ", this.props.decodedEvents[0].topics[0], "."]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h3", {
              children: ["Showing a total of ", this.props.decodedEvents.length, " events."]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            floated: "right",
            width: 3,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
              route: "/data/submit",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  content: "Submit Data",
                  icon: "download",
                  primary: true
                })
              })
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
        items: items
      })]
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        children: this.renderMarketPlace()
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TestIndex);

/***/ }),

/***/ "ODbA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEvents; });
/* harmony import */ var _Ethereum_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ewas");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RB2s");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TYn5");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);



async function getEvents() {
  let provider = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].providers.Web3Provider(_Ethereum_web3__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].currentProvider);
  let abi = ["event DataTransfer(string data_type, string timestamp, uint minPayment, address indexed source, uint indexed serialID, uint indexed tag)"];
  let ens = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].Contract(_Ethereum_contract__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]._address, abi, provider);
  var filter = ens.filters.DataTransfer();
  filter.fromBlock = 0;
  filter.toBlock = "latest";
  const blockNumber = await provider.getBlockNumber();
  const events = (await provider.getLogs(filter)).reverse();
  return {
    blockNumber: blockNumber,
    events: events
  };
}
;

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

const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('http://52.48.42.217:8545');
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

/***/ "TcDP":
/***/ (function(module) {

module.exports = JSON.parse("{\"assembly\":{\".code\":[{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":25,\"end\":375,\"name\":\"MSTORE\"},{\"begin\":25,\"end\":375,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":25,\"end\":375,\"name\":\"POP\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH #[$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":25,\"end\":375,\"name\":\"DUP1\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH [$]\",\"value\":\"0000000000000000000000000000000000000000000000000000000000000000\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":375,\"name\":\"CODECOPY\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":375,\"name\":\"RETURN\"}],\".data\":{\"0\":{\".auxdata\":\"a165627a7a7230582043d8c5bb60ab05131aadae1cd2d169caf8c5dbe851ed6c8f22626cb1938558ed0029\",\".code\":[{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"80\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":25,\"end\":375,\"name\":\"MSTORE\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":25,\"end\":375,\"name\":\"CALLDATASIZE\"},{\"begin\":25,\"end\":375,\"name\":\"LT\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH [tag]\",\"value\":\"1\"},{\"begin\":25,\"end\":375,\"name\":\"JUMPI\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"FFFFFFFF\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"100000000000000000000000000000000000000000000000000000000\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":375,\"name\":\"CALLDATALOAD\"},{\"begin\":25,\"end\":375,\"name\":\"DIV\"},{\"begin\":25,\"end\":375,\"name\":\"AND\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"33C0DA74\"},{\"begin\":25,\"end\":375,\"name\":\"DUP2\"},{\"begin\":25,\"end\":375,\"name\":\"EQ\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH [tag]\",\"value\":\"2\"},{\"begin\":25,\"end\":375,\"name\":\"JUMPI\"},{\"begin\":25,\"end\":375,\"name\":\"tag\",\"value\":\"1\"},{\"begin\":25,\"end\":375,\"name\":\"JUMPDEST\"},{\"begin\":25,\"end\":375,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":25,\"end\":375,\"name\":\"DUP1\"},{\"begin\":25,\"end\":375,\"name\":\"REVERT\"},{\"begin\":197,\"end\":373,\"name\":\"tag\",\"value\":\"2\"},{\"begin\":197,\"end\":373,\"name\":\"JUMPDEST\"},{\"begin\":197,\"end\":373,\"name\":\"CALLVALUE\"},{\"begin\":8,\"end\":17,\"name\":\"DUP1\"},{\"begin\":5,\"end\":7,\"name\":\"ISZERO\"},{\"begin\":5,\"end\":7,\"name\":\"PUSH [tag]\",\"value\":\"3\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPI\"},{\"begin\":30,\"end\":31,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":27,\"end\":28,\"name\":\"DUP1\"},{\"begin\":20,\"end\":32,\"name\":\"REVERT\"},{\"begin\":5,\"end\":7,\"name\":\"tag\",\"value\":\"3\"},{\"begin\":5,\"end\":7,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"MLOAD\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"4\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATALOAD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATALOAD\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":197,\"end\":373,\"name\":\"DUP2\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP1\"},{\"begin\":197,\"end\":373,\"name\":\"DIV\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"MUL\"},{\"begin\":197,\"end\":373,\"name\":\"DUP6\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP1\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP6\"},{\"begin\":197,\"end\":373,\"name\":\"MSTORE\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"MSTORE\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH [tag]\",\"value\":\"4\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP5\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATASIZE\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP5\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP3\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP4\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"24\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP4\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP3\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP2\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP1\"},{\"begin\":197,\"end\":373,\"name\":\"DUP2\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP1\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP4\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"MLOAD\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":197,\"end\":373,\"name\":\"DUP10\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATALOAD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP12\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATALOAD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP2\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP4\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP1\"},{\"begin\":197,\"end\":373,\"name\":\"DIV\"},{\"begin\":197,\"end\":373,\"name\":\"DUP4\"},{\"begin\":197,\"end\":373,\"name\":\"MUL\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP4\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP1\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP5\"},{\"begin\":197,\"end\":373,\"name\":\"MSTORE\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"DUP4\"},{\"begin\":197,\"end\":373,\"name\":\"MSTORE\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP8\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP11\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP10\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP9\"},{\"begin\":197,\"end\":373,\"name\":\"DUP2\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP8\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP2\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP7\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP2\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP5\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP3\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"DUP4\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"DUP1\"},{\"begin\":197,\"end\":373,\"name\":\"DUP3\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATACOPY\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP5\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP8\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"DUP5\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATALOAD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP6\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":197,\"end\":373,\"name\":\"DUP4\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATALOAD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP3\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":197,\"end\":373,\"name\":\"ADD\"},{\"begin\":197,\"end\":373,\"name\":\"CALLDATALOAD\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP2\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"PUSH [tag]\",\"value\":\"5\"},{\"begin\":197,\"end\":373,\"name\":\"SWAP1\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"JUMP\"},{\"begin\":197,\"end\":373,\"name\":\"tag\",\"value\":\"4\"},{\"begin\":197,\"end\":373,\"name\":\"JUMPDEST\"},{\"begin\":197,\"end\":373,\"name\":\"STOP\"},{\"begin\":197,\"end\":373,\"name\":\"tag\",\"value\":\"5\"},{\"begin\":197,\"end\":373,\"name\":\"JUMPDEST\"},{\"begin\":362,\"end\":365,\"name\":\"DUP1\"},{\"begin\":352,\"end\":360,\"name\":\"DUP3\"},{\"begin\":340,\"end\":350,\"name\":\"CALLER\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\"},{\"begin\":305,\"end\":366,\"name\":\"AND\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"DAA32B1C44343FFE6BAF0945C60469F17D07E54E5D0E0AED5536AF817FDE1F07\"},{\"begin\":318,\"end\":323,\"name\":\"DUP9\"},{\"begin\":325,\"end\":329,\"name\":\"DUP9\"},{\"begin\":331,\"end\":338,\"name\":\"DUP9\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"DUP5\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"MSTORE\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":305,\"end\":366,\"name\":\"MSTORE\"},{\"begin\":305,\"end\":366,\"name\":\"DUP7\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"MSTORE\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP2\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"7\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"8\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"7\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"8\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":305,\"end\":366,\"name\":\"AND\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"ISZERO\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH [tag]\",\"value\":\"10\"},{\"begin\":305,\"end\":366,\"name\":\"JUMPI\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP3\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":305,\"end\":366,\"name\":\"EXP\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"NOT\"},{\"begin\":305,\"end\":366,\"name\":\"AND\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"MSTORE\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP2\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"tag\",\"value\":\"10\"},{\"begin\":305,\"end\":366,\"name\":\"JUMPDEST\"},{\"begin\":-1,\"end\":-1,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"DUP3\"},{\"begin\":305,\"end\":366,\"name\":\"MSTORE\"},{\"begin\":305,\"end\":366,\"name\":\"DUP6\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"MSTORE\"},{\"begin\":305,\"end\":366,\"name\":\"DUP6\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP2\"},{\"begin\":305,\"end\":366,\"name\":\"DUP3\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP2\"},{\"begin\":305,\"end\":366,\"name\":\"DUP8\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":23,\"end\":24,\"name\":\"PUSH\",\"value\":\"0\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"11\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":33,\"end\":36,\"name\":\"DUP4\"},{\"begin\":30,\"end\":31,\"name\":\"DUP2\"},{\"begin\":27,\"end\":37,\"name\":\"LT\"},{\"begin\":8,\"end\":108,\"name\":\"ISZERO\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"12\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPI\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"DUP2\"},{\"begin\":90,\"end\":101,\"name\":\"ADD\"},{\"begin\":84,\"end\":102,\"name\":\"MLOAD\"},{\"begin\":71,\"end\":82,\"name\":\"DUP4\"},{\"begin\":71,\"end\":82,\"name\":\"DUP3\"},{\"begin\":71,\"end\":82,\"name\":\"ADD\"},{\"begin\":64,\"end\":103,\"name\":\"MSTORE\"},{\"begin\":52,\"end\":54,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":45,\"end\":55,\"name\":\"ADD\"},{\"begin\":8,\"end\":108,\"name\":\"PUSH [tag]\",\"value\":\"11\"},{\"begin\":8,\"end\":108,\"name\":\"JUMP\"},{\"begin\":8,\"end\":108,\"name\":\"tag\",\"value\":\"12\"},{\"begin\":8,\"end\":108,\"name\":\"JUMPDEST\"},{\"begin\":12,\"end\":26,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"1F\"},{\"begin\":305,\"end\":366,\"name\":\"AND\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"ISZERO\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH [tag]\",\"value\":\"14\"},{\"begin\":305,\"end\":366,\"name\":\"JUMPI\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP3\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"1\"},{\"begin\":305,\"end\":366,\"name\":\"DUP4\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"100\"},{\"begin\":305,\"end\":366,\"name\":\"EXP\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"NOT\"},{\"begin\":305,\"end\":366,\"name\":\"AND\"},{\"begin\":305,\"end\":366,\"name\":\"DUP2\"},{\"begin\":305,\"end\":366,\"name\":\"MSTORE\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"20\"},{\"begin\":305,\"end\":366,\"name\":\"ADD\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP2\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"tag\",\"value\":\"14\"},{\"begin\":305,\"end\":366,\"name\":\"JUMPDEST\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP6\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"POP\"},{\"begin\":305,\"end\":366,\"name\":\"PUSH\",\"value\":\"40\"},{\"begin\":305,\"end\":366,\"name\":\"MLOAD\"},{\"begin\":305,\"end\":366,\"name\":\"DUP1\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP2\"},{\"begin\":305,\"end\":366,\"name\":\"SUB\"},{\"begin\":305,\"end\":366,\"name\":\"SWAP1\"},{\"begin\":305,\"end\":366,\"name\":\"LOG4\"},{\"begin\":197,\"end\":373,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"POP\"},{\"begin\":197,\"end\":373,\"name\":\"JUMP\",\"value\":\"[out]\"}]}}},\"bytecode\":\"608060405234801561001057600080fd5b5061023f806100206000396000f3006080604052600436106100405763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166333c0da748114610045575b600080fd5b34801561005157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100e994369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750508435955050506020830135926040013591506100eb9050565b005b80823373ffffffffffffffffffffffffffffffffffffffff167fdaa32b1c44343ffe6baf0945c60469f17d07e54e5d0e0aed5536af817fde1f07888888604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561016f578181015183820152602001610157565b50505050905090810190601f16801561019c5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156101cf5781810151838201526020016101b7565b50505050905090810190601f1680156101fc5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a450505050505600a165627a7a7230582043d8c5bb60ab05131aadae1cd2d169caf8c5dbe851ed6c8f22626cb1938558ed0029\",\"functionHashes\":{\"EmitEvent(string,string,uint256,uint256,uint256)\":\"33c0da74\"},\"gasEstimates\":{\"creation\":[159,115000],\"external\":{\"EmitEvent(string,string,uint256,uint256,uint256)\":null},\"internal\":{}},\"interface\":\"[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"dtype\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"time\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"payment\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"serialID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"tag\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"EmitEvent\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"name\\\":\\\"data_type\\\",\\\"type\\\":\\\"string\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"string\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"minPayment\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"source\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"serialID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"tag\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"DataTransfer\\\",\\\"type\\\":\\\"event\\\"}]\",\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.4.25+commit.59dbf8f1\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"name\\\":\\\"dtype\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"time\\\",\\\"type\\\":\\\"string\\\"},{\\\"name\\\":\\\"payment\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"serialID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"name\\\":\\\"tag\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"EmitEvent\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":false,\\\"name\\\":\\\"data_type\\\",\\\"type\\\":\\\"string\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"timestamp\\\",\\\"type\\\":\\\"string\\\"},{\\\"indexed\\\":false,\\\"name\\\":\\\"minPayment\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"source\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"serialID\\\",\\\"type\\\":\\\"uint256\\\"},{\\\"indexed\\\":true,\\\"name\\\":\\\"tag\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"DataTransfer\\\",\\\"type\\\":\\\"event\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"\\\":\\\"EventTest\\\"},\\\"evmVersion\\\":\\\"byzantium\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":true,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"\\\":{\\\"keccak256\\\":\\\"0x9a777f95c921d3be43ac607edba95be8c573f9f3e7ce141bebf82bb433b174f4\\\",\\\"urls\\\":[\\\"bzzr://561b1b443cbfb2c650d863bdcfc847c96394499a3ae9337ea97e20e8f5964e08\\\"]}},\\\"version\\\":1}\",\"opcodes\":\"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x23F DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x40 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x33C0DA74 DUP2 EQ PUSH2 0x45 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x51 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x4 DUP1 CALLDATALOAD DUP1 DUP3 ADD CALLDATALOAD PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP6 ADD DUP5 ADD SWAP1 SWAP6 MSTORE DUP5 DUP5 MSTORE PUSH2 0xE9 SWAP5 CALLDATASIZE SWAP5 SWAP3 SWAP4 PUSH1 0x24 SWAP4 SWAP3 DUP5 ADD SWAP2 SWAP1 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x1F DUP10 CALLDATALOAD DUP12 ADD DUP1 CALLDATALOAD SWAP2 DUP3 ADD DUP4 SWAP1 DIV DUP4 MUL DUP5 ADD DUP4 ADD SWAP1 SWAP5 MSTORE DUP1 DUP4 MSTORE SWAP8 SWAP11 SWAP10 SWAP9 DUP2 ADD SWAP8 SWAP2 SWAP7 POP SWAP2 DUP3 ADD SWAP5 POP SWAP3 POP DUP3 SWAP2 POP DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP POP DUP5 CALLDATALOAD SWAP6 POP POP POP PUSH1 0x20 DUP4 ADD CALLDATALOAD SWAP3 PUSH1 0x40 ADD CALLDATALOAD SWAP2 POP PUSH2 0xEB SWAP1 POP JUMP JUMPDEST STOP JUMPDEST DUP1 DUP3 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDAA32B1C44343FFE6BAF0945C60469F17D07E54E5D0E0AED5536AF817FDE1F07 DUP9 DUP9 DUP9 PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP1 PUSH1 0x20 ADD DUP5 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP2 SUB DUP4 MSTORE DUP7 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x16F JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x157 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x19C JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP DUP4 DUP2 SUB DUP3 MSTORE DUP6 MLOAD DUP2 MSTORE DUP6 MLOAD PUSH1 0x20 SWAP2 DUP3 ADD SWAP2 DUP8 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1CF JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x1B7 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x1FC JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP6 POP POP POP POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 POP POP POP POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 NUMBER 0xd8 0xc5 0xbb PUSH1 0xAB SDIV SGT BYTE 0xad 0xae SHR 0xd2 0xd1 PUSH10 0xCAF8C5DBE851ED6C8F22 PUSH3 0x6CB193 DUP6 PC 0xed STOP 0x29 \",\"runtimeBytecode\":\"6080604052600436106100405763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166333c0da748114610045575b600080fd5b34801561005157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100e994369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750508435955050506020830135926040013591506100eb9050565b005b80823373ffffffffffffffffffffffffffffffffffffffff167fdaa32b1c44343ffe6baf0945c60469f17d07e54e5d0e0aed5536af817fde1f07888888604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561016f578181015183820152602001610157565b50505050905090810190601f16801561019c5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156101cf5781810151838201526020016101b7565b50505050905090810190601f1680156101fc5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a450505050505600a165627a7a7230582043d8c5bb60ab05131aadae1cd2d169caf8c5dbe851ed6c8f22626cb1938558ed0029\",\"srcmap\":\"25:350:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:350:0;;;;;;;\",\"srcmapRuntime\":\"25:350:0:-;;;;;;;;;;;;;;;;;;;;;;;197:176;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;197:176:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;197:176:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;197:176:0;;;;-1:-1:-1;197:176:0;-1:-1:-1;197:176:0;;-1:-1:-1;197:176:0;;;;;;;;-1:-1:-1;197:176:0;;-1:-1:-1;;197:176:0;;;-1:-1:-1;;;197:176:0;;;;;;;;;-1:-1:-1;197:176:0;;-1:-1:-1;197:176:0;;;;362:3;352:8;340:10;305:61;;;318:5;325:4;331:7;305:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;305:61:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;305:61:0;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;305:61:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;197:176;;;;;:::o\"}");

/***/ }),

/***/ "WSW/":
/***/ (function(module, exports) {

module.exports = require("web3-core");

/***/ }),

/***/ "ZoJ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTags; });
function getTags(item) {
  var dataType = "";

  switch (item.topics[3].slice(-1)) {
    case "1":
      dataType = "Temperature";
      break;

    case "2":
      dataType = "Humidity";
      break;

    case "3":
      dataType = "Temp and Humidity";
      break;

    case "4":
      dataType = "Pressure";
      break;

    case "5":
      dataType = "Test Data";
      break;

    default:
      dataType = "Any";
      break;
  }

  return dataType;
}
;

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

/***/ "rUnp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decodeData; });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TYn5");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

function decodeData(item) {
  const decoder = new ethers__WEBPACK_IMPORTED_MODULE_0__["ethers"].utils.AbiCoder();
  return decoder.decode(["string", "string", "uint"], item.data);
}
;

/***/ }),

/***/ "yr9D":
/***/ (function(module, exports) {

module.exports = require("web3-eth");

/***/ })

/******/ });