"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-console */
(function name(params) {
  console.log('Hello ' + params);
})('Bill');
/* eslint-disable no-console */


var string = 'bill';
console.log(_typeof(string));

var name = function name(x, y) {
  return x * y;
};

name(2, 2);