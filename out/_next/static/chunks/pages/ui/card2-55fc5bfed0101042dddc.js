_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"8oxB":function(n,t){var e,r,i=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(n){if(e===setTimeout)return setTimeout(n,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(n){e=o}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(n){r=u}}();var a,s=[],l=!1,f=-1;function h(){l&&a&&(l=!1,a.length?s=a.concat(s):f=-1,s.length&&d())}function d(){if(!l){var n=c(h);l=!0;for(var t=s.length;t;){for(a=s,s=[];++f<t;)a&&a[f].run();f=-1,t=s.length}a=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function p(n,t){this.fun=n,this.array=t}function g(){}i.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new p(n,t)),1!==s.length||l||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},Qetd:function(n,t,e){"use strict";var r=Object.assign.bind(Object);n.exports=r,n.exports.default=n.exports},TXI4:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return c}));var r=e("nKUr"),i=e("h4VS");function o(){var n=Object(i.a)(["\n\n    background: rgb(54,113,230);\n    background: linear-gradient(193deg, rgba(54,113,230,1) 16%, rgba(255,255,255,1) 94%);\n\n    .main {\n        width: 700px;\n        height: 250px;\n        margin-top: 50px;\n        margin-left: auto;\n        margin-right: auto;\n        border: 3px solid black;\n        border-radius: 10px;\n    }\n\n    .title {\n        width: 150px;\n        height: 30px;\n        padding: 5px;\n        border-radius: 10px 10px 0px 0px;\n        margin-top: -30px;\n        background: black;\n        color: white;\n        text-align: center;\n        margin-left: auto;\n        margin-right: auto;\n    }\n"]);return o=function(){return n},n}var u=e("vOnD").a.div(o());function c(){return Object(r.jsx)(u,{children:Object(r.jsx)("div",{className:"main",children:Object(r.jsx)("div",{className:"title",children:"The example"})})})}},jKh7:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui/card2",function(){return e("TXI4")}])}},[["jKh7",0,1,4]]]);