"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _responseHandler = _interopRequireDefault(require("../../helpers/responseHandler"));

var itemController = /*#__PURE__*/function () {
  function itemController() {
    (0, _classCallCheck2["default"])(this, itemController);
  }

  (0, _createClass2["default"])(itemController, null, [{
    key: "loadAllItems",
    value: function () {
      var _loadAllItems = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", (0, _responseHandler["default"])(res, "Items Loaded successfully", 200, "Items loaded successfully"));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadAllItems(_x, _x2) {
        return _loadAllItems.apply(this, arguments);
      }

      return loadAllItems;
    }()
  }]);
  return itemController;
}();

var _default = itemController;
exports["default"] = _default;