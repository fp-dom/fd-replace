"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var elem = _interopRequire(require("fd-elem"));

var append = _interopRequire(require("fd-append"));

var replace = _interopRequire(require("./"));

it("fd-replace", function () {
  var appendtoBody = append(document.body);
  var h1 = elem("h1", "meow");
  var h2 = elem("h2", "bow");
  appendtoBody(h1);
  replace(document.body, h2, h1);
  assert.equal(document.body.lastChild.textContent, "bow");
});