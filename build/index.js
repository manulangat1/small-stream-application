"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _modules = _interopRequireDefault(require("./modules"));

require('dotenv').config();

var port = process.env.PORT || 8000;
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.send('Hello world, I am the Phidi API');
});
(0, _modules["default"])(app);
app.use('*', function (req, res) {
  res.status(404).send({
    message: "Url not found"
  });
});
app.listen(port, function () {
  console.log("Server connected successfully on http://localhost:".concat(port, "/api/v1"));
});
var _default = app;
exports["default"] = _default;