"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./auth"));

var _profile = _interopRequireDefault(require("./profile"));

var _jobPosts = _interopRequireDefault(require("./jobPosts"));

var apiPrefix = '/api/v1';

var routes = function routes(app) {
  app.use(apiPrefix, _auth["default"]);
  app.use(apiPrefix, _profile["default"]);
  app.use(apiPrefix, _jobPosts["default"]);
  return app;
};

var _default = routes;
exports["default"] = _default;