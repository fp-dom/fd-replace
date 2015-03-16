"use strict";

var curry3 = require("fj-curry").curry3;


var _replace = function (parentNode, newChild, oldChild) {
  console.log("pn", oldChild);
  parentNode.replaceChild(newChild, oldChild);
};
module.exports = curry3(_replace);