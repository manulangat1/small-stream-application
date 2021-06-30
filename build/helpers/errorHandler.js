"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Error = /*#__PURE__*/function () {
  function Error() {
    (0, _classCallCheck2["default"])(this, Error);
  }

  (0, _createClass2["default"])(Error, null, [{
    key: "handleError",
    value: function handleError(error, statusCode, response) {
      return response.status(statusCode).json({
        success: false,
        error: error
      });
    }
  }]);
  return Error;
}();

var _default = Error;
exports["default"] = _default;