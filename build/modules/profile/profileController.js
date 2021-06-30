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

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _errorHandler = _interopRequireDefault(require("./../../helpers/errorHandler"));

var _models = _interopRequireDefault(require("./../../database/models"));

var ProfileController = /*#__PURE__*/function () {
  function ProfileController() {
    (0, _classCallCheck2["default"])(this, ProfileController);
  }

  (0, _createClass2["default"])(ProfileController, null, [{
    key: "fetchProfile",
    value: function () {
      var _fetchProfile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var token, email, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = req.headers['authorization'];

                if (!token) {
                  _context.next = 12;
                  break;
                }

                token = token.slice(7, token.length);
                _context.next = 5;
                return _jsonwebtoken["default"].verify(token, 'secret').email;

              case 5:
                email = _context.sent;
                _context.next = 8;
                return _models["default"].User.findOne({
                  where: {
                    email: email
                  }
                });

              case 8:
                user = _context.sent;
                return _context.abrupt("return", res.status(200).json({
                  success: true,
                  user: user
                }));

              case 12:
                return _context.abrupt("return", res.status(400).json({
                  success: false,
                  message: 'Make sure to login to make this request.'
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchProfile(_x, _x2) {
        return _fetchProfile.apply(this, arguments);
      }

      return fetchProfile;
    }()
  }, {
    key: "editProfile",
    value: function () {
      var _editProfile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var saltRounds, userExists, edittedUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                saltRounds = 10;

                if (!req.body.password) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 5;
                return _models["default"].User.findOne({
                  where: {
                    email: req.body.email
                  }
                });

              case 5:
                userExists = _context2.sent;

                if (!_bcryptjs["default"].compareSync(req.body.currentPassword, userExists.dataValues.password)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 9;
                return _bcryptjs["default"].hash(req.body.password, saltRounds).then(function (hash) {
                  return hash;
                });

              case 9:
                req.body.password = _context2.sent;
                _context2.next = 13;
                break;

              case 12:
                return _context2.abrupt("return", res.status(403).json({
                  success: false,
                  message: 'Current password is incorrect.Type in the current password.'
                }));

              case 13:
                delete req.body.profile;
                _context2.next = 16;
                return _models["default"].User.update(req.body, {
                  where: {
                    email: req.body.email
                  }
                });

              case 16:
                edittedUser = _context2.sent;

                if (!(edittedUser[0] === 1)) {
                  _context2.next = 21;
                  break;
                }

                return _context2.abrupt("return", res.status(200).json({
                  success: true,
                  message: 'User profile editted successfully'
                }));

              case 21:
                return _context2.abrupt("return", res.status(500).json({
                  success: false,
                  message: 'User profile not successful.Try again.'
                }));

              case 22:
                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](0);

                _errorHandler["default"].handleError(_context2.t0, 500, res);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 24]]);
      }));

      function editProfile(_x3, _x4) {
        return _editProfile.apply(this, arguments);
      }

      return editProfile;
    }()
  }]);
  return ProfileController;
}();

var _default = ProfileController;
exports["default"] = _default;