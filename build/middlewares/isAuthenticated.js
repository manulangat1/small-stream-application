"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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
                return jwt.verify(token, 'secret').email;

              case 5:
                email = _context.sent;
                _context.next = 8;
                return models.User.findOne({
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
  }]);
  return isAuth;
}();