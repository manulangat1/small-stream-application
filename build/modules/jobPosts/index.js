"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _jobPostsController = _interopRequireDefault(require("./jobPostsController"));

var Router = _express["default"].Router();

Router.get('/job-posts', _jobPostsController["default"].fetchJobPosts);
var _default = Router;
exports["default"] = _default;