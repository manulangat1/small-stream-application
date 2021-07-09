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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = require("../database/models");

var _subscriptions = _interopRequireDefault(require("../database/models/subscriptions"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var isAuth = /*#__PURE__*/function () {
  function isAuth() {
    (0, _classCallCheck2["default"])(this, isAuth);
  }

  (0, _createClass2["default"])(isAuth, null, [{
    key: "isAuthenticated",
    value: function () {
      var _isAuthenticated = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var token, email, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = req.headers['authorization'];

                if (!token) {
                  _context.next = 17;
                  break;
                }

                token = token.slice(7, token.length);
                _context.next = 5;
                return _jsonwebtoken["default"].verify(token, 'secret').email;

              case 5:
                email = _context.sent;
                _context.next = 8;
                return _models.User.findOne({
                  where: {
                    email: email
                  }
                });

              case 8:
                user = _context.sent;

                if (!user) {
                  _context.next = 14;
                  break;
                }

                req.user = user;
                next();
                _context.next = 15;
                break;

              case 14:
                return _context.abrupt("return", res.status(400).json({
                  success: false,
                  message: 'Make sure to login to make this request.'
                }));

              case 15:
                _context.next = 18;
                break;

              case 17:
                return _context.abrupt("return", res.status(400).json({
                  success: false,
                  message: 'Make sure to login to make this request.'
                }));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isAuthenticated(_x, _x2, _x3) {
        return _isAuthenticated.apply(this, arguments);
      }

      return isAuthenticated;
    }()
  }, {
    key: "isSubscribed",
    value: function () {
      var _isSubscribed = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var userSubscription;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _subscriptions["default"].findOne({
                  where: {
                    userId: req.user.id
                  }
                });

              case 2:
                userSubscription = _context2.sent;

                if (!userSubscription) {
                  _context2.next = 11;
                  break;
                }

                if (!userSubscription.isActive) {
                  _context2.next = 8;
                  break;
                }

                next();
                _context2.next = 9;
                break;

              case 8:
                return _context2.abrupt("return", (0, _responseHandler["default"])(res, "Create a subscription to get going", 403, "Create a subscription to get going"));

              case 9:
                _context2.next = 12;
                break;

              case 11:
                return _context2.abrupt("return", (0, _responseHandler["default"])(res, "Subscription not found", 403, "Subscription not found"));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function isSubscribed(_x4, _x5, _x6) {
        return _isSubscribed.apply(this, arguments);
      }

      return isSubscribed;
    }()
  }]);
  return isAuth;
}();

var _default = isAuth;
exports["default"] = _default;