!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("reveal.js"),require("reveal.js/dist/theme/black.css"),require("reveal.js/dist/reveal.css")):"function"==typeof define&&define.amd?define(["reveal.js","reveal.js/dist/theme/black.css","reveal.js/dist/reveal.css"],t):"object"==typeof exports?exports.slides=t(require("reveal.js"),require("reveal.js/dist/theme/black.css"),require("reveal.js/dist/reveal.css")):e.slides=t(e["reveal.js"],e["reveal.js/dist/theme/black.css"],e["reveal.js/dist/reveal.css"])}(window,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=10)}([function(e,t,n){"use strict";e.exports=n(2)},function(t,n){t.exports=e},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(3),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}function S(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=j.prototype;var x=w.prototype=new S;x.constructor=w,r(x,j.prototype),x.isPureReactComponent=!0;var O={current:null},_=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:O.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,P=[];function $(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function N(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var a=!1;if(null===t)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case i:a=!0}}if(a)return r(o,t,""===n?"."+q(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+q(c=t[l],l);a+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(c=t.next()).done;)a+=e(c=c.value,s=n+q(c,l++),r,o);else if("object"===c)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return a}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function T(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),N(e,I,t=$(t,u,r,o)),M(t)}var U={current:null};function F(){var e=U.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return T(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;N(e,A,t=$(null,null,t,n)),M(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=O.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,a=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(a[s]=n[s]);if(r){c=r(n);for(var f=0;f<c.length;f++)u.call(n,c[f])&&(a[c[f]]=n[c[f]])}}return a}},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var r=n(7),o=n(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var u={insert:"head",singleton:!1};r(o,u);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},u=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var u=e[o],a=t.base?u[0]+t.base:u[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var f=c(s),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:m(p,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=u(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function d(e,t,n){var r=n.css,o=n.media,u=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),u&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var y=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var u=v++;n=y||(y=l(t)),r=p.bind(null,n,u,!1),o=p.bind(null,n,u,!0)}else n=l(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var u=a(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}},function(e,t,n){(t=n(9)(!1)).push([e.i,"#reveal-node {\n    position: absolute;\n    height: 1px;\n    width: 1px;\n    overflow-y: hidden;\n    top: 0;\n    left: 0;\n    z-index: 999;\n}\n\n.slides-btn {\n    width: 20px;\n    height: 20px;\n    z-index: 998;\n}\n\n.slides-btn:hover {\n    opacity: 0.8;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),u=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(u).concat([o]).join("\n")}var i,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var u=0;u<this.length;u++){var i=this[u][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n.p+"assets/presentation.png",i=function(e){var t=e.src,n=e.presentSlides,r=e.btnClassName;return o.a.createElement("div",{className:r},o.a.createElement("img",{className:"slides-btn",src:t||u,onClick:n}))},c=function(e){var t=e.reveal,n=e.slides,r=e.slidesData;return o.a.createElement("div",{className:"reveal",id:"reveal-node",ref:t,hidden:!0},o.a.createElement("div",{className:"slides",ref:n},r.length?r.map((function(e,t){return o.a.createElement("section",{key:"slide"+t,dangerouslySetInnerHTML:{__html:e}})})):null))},a=n(1),l=n.n(a);n(4),n(5),n(6);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=e.src,n=e.btnClassName,u=(e.slidesConfig,e.theme,s(Object(r.useState)([]),2)),a=u[0],f=u[1],p=Object(r.useRef)(),d=Object(r.useRef)();Object(r.useEffect)((function(){p.current}),[]);var y=function(){var e=document.getElementsByClassName("ce-block"),t=[];if(e.length)for(var n=0;n<e.length;n++){var r=e[n];t.push(r.innerHTML)}f(t)},v=function(){var e=p.current;if(e){var t=new l.a(e,{embedded:!0});m(t),h(t)}},m=function(e){e.initialize({slideNumber:!0})},h=function(e){e.configure({keyboard:{70:null,27:b,13:"next",32:null}})},b=function(){p.current&&(p.current.hidden=!0)},g=function(){var e=p.current;if(!0!==e.hidden){var t=(e=e||document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.apply(e)}};return o.a.createElement("div",null,o.a.createElement(c,{reveal:p,slides:d,slidesData:a}),o.a.createElement(i,{src:t,btnClassName:n,presentSlides:function(){!a.length&&v(),y(),p.current.hidden=!1,g()}}))}}])}));