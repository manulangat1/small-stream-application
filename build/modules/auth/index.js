"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authController = _interopRequireDefault(require("./authController"));

var Router = _express["default"].Router();

Router.post('/register', _authController["default"].createUser);
Router.post('/login', _authController["default"].loginUser);
Router.post('/confirm-email', _authController["default"].confirmEmail);
Router.post('/forgot-password', _authController["default"].forgotPassword);
Router.put('/reset-password', _authController["default"].resetPassword);
var _default = Router;
exports["default"] = _default;