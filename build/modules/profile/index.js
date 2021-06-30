"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _profileController = _interopRequireDefault(require("./profileController"));

var Router = _express["default"].Router();

Router.get('/profile', _profileController["default"].fetchProfile);
Router.put('/profile', _profileController["default"].editProfile);
var _default = Router;
exports["default"] = _default;