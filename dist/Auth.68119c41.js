parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rbIa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=c(require("react")),e=require("react-redux"),n=require("react-router-dom"),r=c(require("../../store/actions/index")),o=i(require("../../components/Utils/Button"));function i(t){return t&&t.__esModule?t:{default:t}}function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function c(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}return n.default=t,e&&e.set(t,n),n}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(f){return void n(f)}c.done?e(a):Promise.resolve(a).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){f(i,r,o,u,c,"next",t)}function c(t){f(i,r,o,u,c,"throw",t)}u(void 0)})}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=v();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=function(e){h(i,t.Component);var r=b(i);function i(){var t;s(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return P(g(t=r.call.apply(r,[this].concat(n))),"requestSignIn",l(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("start sign in"),"NEAR ICECREAM",t.next=4,window.wallet.requestSignIn(window.nearConfig.contractName,"NEAR ICECREAM");case 4:window.location.search.includes("account_id")&&window.location.replace(window.location.origin+window.location.pathname);case 5:case"end":return t.stop()}},t)}))),t}return d(i,[{key:"componentDidMount",value:function(){this.props.building||"/"===this.props.authRedirectPath||this.props.setPath(),window.wallet.isSignedIn()&&this.props.setCurrentUser(window.currentUser)}},{key:"render",value:function(){return this.props.isAuthenticated?t.default.createElement(n.Redirect,{to:this.props.authRedirectPath}):t.default.createElement(o.default,{clicked:this.requestSignIn},"Log In with NEAR Wallet",t.default.createElement("style",null,"\n      .Auth {\n        margin: 20px auto;\n        width: 80%;\n        text-align: center;\n        box-shadow: 0 2px 3px #ccc;\n        border: 1px solid #eee;\n        padding: 10px;\n        box-sizing: border-box;\n    }\n    \n    @media (min-width: 600px) {\n        .Auth {\n            width: 500px;\n        }\n    }"))}}]),i}(),O=function(t){return{isAuthenticated:!!t.auth.currentUser,building:t.burgerBuilder.building,authRedirectPath:t.auth.authRedirectPath}},R=function(t){return{setCurrentUser:function(e){return t(r.LogIn(e))},setPath:function(){return t(r.setRedirectPath("/"))}}},j=(0,e.connect)(O,R)(x);exports.default=j;
},{"react":"n8MK","react-redux":"jYIL","react-router-dom":"uc19","../../store/actions/index":"olzG","../../components/Utils/Button":"d4W8"}]},{},[], null)
//# sourceMappingURL=Auth.68119c41.js.map