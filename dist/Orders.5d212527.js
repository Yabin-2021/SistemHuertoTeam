parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ibwB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(t){var r=t.species,l=t.sides,n=t.price,a=r.map(function(t){return e.default.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:t},t)});return e.default.createElement("div",{className:"Order"},e.default.createElement("p",null,"Flavors: ",a),e.default.createElement("p",null,"Side: ",l),e.default.createElement("p",null,"Price: ",e.default.createElement("strong",null,n,"Ⓝ")),e.default.createElement("style",null,"\n        .Order {\n            width: 80%;\n            border: 1px solid #eee;\n            box-shadow: 0 2px 3px #ccc;\n            padding: 10px;\n            margin: 10px auto;\n            box-sizing: border-box;\n        }"))};exports.default=r;
},{"react":"n8MK"}],"iCSR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("react"));function n(e){return e&&e.__esModule?e:{default:e}}var t=function(){return e.default.createElement("div",{className:"Loader"},e.default.createElement("style",null,"\n        .Loader,\n        .Loader:before,\n        .Loader:after {\n        border-radius: 50%;\n        }\n        .Loader {\n        color: #521751;\n        font-size: 11px;\n        text-indent: -99999em;\n        margin: 55px auto;\n        position: relative;\n        width: 10em;\n        height: 10em;\n        box-shadow: inset 0 0 0 1em;\n        -webkit-transform: translateZ(0);\n        -ms-transform: translateZ(0);\n        transform: translateZ(0);\n        }\n        .Loader:before,\n        .Loader:after {\n        position: absolute;\n        content: '';\n        }\n        .Loader:before {\n        width: 5.2em;\n        height: 10.2em;\n        background: #fff;\n        border-radius: 10.2em 0 0 10.2em;\n        top: -0.1em;\n        left: -0.1em;\n        -webkit-transform-origin: 5.2em 5.1em;\n        transform-origin: 5.2em 5.1em;\n        -webkit-animation: load2 2s infinite ease 1.5s;\n        animation: load2 2s infinite ease 1.5s;\n        }\n        .Loader:after {\n        width: 5.2em;\n        height: 10.2em;\n        background: #fff;\n        border-radius: 0 10.2em 10.2em 0;\n        top: -0.1em;\n        left: 5.1em;\n        -webkit-transform-origin: 0px 5.1em;\n        transform-origin: 0px 5.1em;\n        -webkit-animation: load2 2s infinite ease;\n        animation: load2 2s infinite ease;\n        }\n        @-webkit-keyframes load2 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n        }\n        @keyframes load2 {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n        }\n        }"))};exports.default=t;
},{"react":"n8MK"}],"rzNv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),t=require("react-redux"),r=i(require("../../store/actions/index")),n=u(require("../../components/Order/Order")),o=u(require("../../components/Utils/Spinner"));function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=O();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(t){p(u,e.Component);var r=d(u);function u(){return a(this,u),r.apply(this,arguments)}return l(u,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.currentUser.accountId)}},{key:"render",value:function(){var t=e.default.createElement(o.default,null);return this.props.loading||(t=this.props.orders.map(function(t){return e.default.createElement(n.default,{key:t.id,species:t.iceCream.species,sides:t.iceCream.sides,price:t.iceCream.price})})),e.default.createElement(e.default.Fragment,null,t)}}]),u}(),g=function(e){return{orders:e.order.orders,currentUser:e.auth.currentUser,loading:e.order.loading}},j=function(e){return{onFetchOrders:function(t){return e(r.fetchOrders(t))}}},_=(0,t.connect)(g,j)(v);exports.default=_;
},{"react":"n8MK","react-redux":"jYIL","../../store/actions/index":"olzG","../../components/Order/Order":"ibwB","../../components/Utils/Spinner":"iCSR"}]},{},[], null)
//# sourceMappingURL=Orders.5d212527.js.map