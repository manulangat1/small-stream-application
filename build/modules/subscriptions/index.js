"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _subscriptionController = _interopRequireDefault(require("./subscriptionController"));

var _isAuthenticated = _interopRequireDefault(require("../../middlewares/isAuthenticated"));

var _Mpesa = _interopRequireDefault(require("../../middlewares/Mpesa"));

var Router = _express["default"].Router();

Router.post('/subscribe', _isAuthenticated["default"].isAuthenticated, // Mpesa.getAuthOToken,
_subscriptionController["default"].createSubscription);
var _default = Router;
exports["default"] = _default;