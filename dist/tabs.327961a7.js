parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({6:[function(require,module,exports) {
"use strict";var t=function(){Array.from(document.querySelectorAll(".tabs")).forEach(function(t){var a=Array.from(t.querySelectorAll(".tabs-nav div")),e=Array.from(t.querySelectorAll(".tabs-content div"));a.forEach(function(t){t.addEventListener("click",function(){var t=this,r=this;a.forEach(function(t){return t===r?t.classList.add("active-tab"):t.classList.contains("active-tab")?t.classList.remove("active-tab"):void 0}),e.forEach(function(a){var e=a.classList;a.id===t.dataset.target?e.add("active-tab"):e.contains("active-tab")&&e.remove("active-tab")})})})})};document.addEventListener("DOMContentLoaded",function(){return t()});
},{}]},{},[6], null)
//# sourceMappingURL=tabs.327961a7.map