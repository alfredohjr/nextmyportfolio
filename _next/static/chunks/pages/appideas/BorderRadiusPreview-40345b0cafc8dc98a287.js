_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1OyB":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},JX7q:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},Ji7U:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return o}))},S2GW:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return j}));var r=e("nKUr"),o=e("1OyB"),i=e("vuIU"),u=e("JX7q"),c=e("Ji7U"),a=e("md7G"),f=e("foSv"),s=e("rePB"),l=e("q1tI"),p=e("Zttt"),b=e("h4VS");function d(){var t=Object(b.a)(["\n\n    min-height: 80vh;\n    margin-bottom: 5px;\n\n    .project-main {\n        background-color: #a1a1a1;\n        margin-left:auto;\n        margin-right:auto;\n        padding: 15px;\n        text-align: center;\n    }\n\n    .square {\n        margin-top: 15px;\n        margin-left: auto;\n        margin-right: auto;\n        width: 300px;\n        height: 300px;\n        border-color: 10px;\n        border-radius: ","%;\n        background-color: #b3b3b3;\n        text-align: center;\n        padding:70px;\n    }\n"]);return d=function(){return t},t}var h=e("vOnD").a.div(d(),(function(t){return t.border}));function y(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(f.a)(t);if(n){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(a.a)(this,e)}}var j=function(t){Object(c.a)(e,t);var n=y(e);function e(t){var r;return Object(o.a)(this,e),r=n.call(this,t),Object(s.a)(Object(u.a)(r),"handleinputChange",(function(t){var n=t.target,e=n.name,o=n.value;r.setState(Object(s.a)({},e,o))})),r.state={borderinput:0},r.handleinputChange=r.handleinputChange.bind(Object(u.a)(r)),r}return Object(i.a)(e,[{key:"render",value:function(){var t=this.state.borderinput;return Object(r.jsx)(p.a,{nameTitle:"BorderRadiusPreview",children:Object(r.jsx)(h,{border:t,children:Object(r.jsxs)("div",{className:"col-9 col-s-11 project-main",children:[Object(r.jsx)("h1",{children:"BorderRadiusPreview"}),Object(r.jsx)("input",{type:"range",name:"borderinput",min:0,max:50,value:t,onChange:this.handleinputChange}),Object(r.jsx)("div",{className:"square",children:Object(r.jsxs)("p",{children:["border-radius:",t,"%;"]})})]})})})}}]),e}(l.Component)},foSv:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return r}))},fs48:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/appideas/BorderRadiusPreview",function(){return e("S2GW")}])},md7G:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,"a",(function(){return i}));var o=e("JX7q");function i(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(o.a)(t):n}},rePB:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},vuIU:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))}},[["fs48",0,1,2,3,4]]]);