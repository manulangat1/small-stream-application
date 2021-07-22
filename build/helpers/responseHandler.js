"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(res, message, status, data) {
  res.status(status).send({
    message: message,
    data: data
  });
};

exports["default"] = _default;