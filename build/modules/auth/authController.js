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

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _uuid = require("uuid");

var _sendGridHandler = _interopRequireDefault(require("./../../helpers/sendGridHandler"));

var _errorHandler = _interopRequireDefault(require("./../../helpers/errorHandler"));

var _models = _interopRequireDefault(require("./../../database/models"));

var AuthController = /*#__PURE__*/function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }

  (0, _createClass2["default"])(AuthController, null, [{
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var saltRounds, userExists, token, hashedPassword, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                saltRounds = 10; //check if user already exists

                _context.next = 4;
                return _models["default"].User.findOne({
                  where: {
                    email: req.body.email
                  }
                });

              case 4:
                userExists = _context.sent;

                if (!userExists) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  success: false,
                  message: 'An account with the same email already exists.'
                }));

              case 7:
                token = (0, _uuid.v4)();
                _context.next = 10;
                return _bcryptjs["default"].hash(req.body.password, saltRounds).then(function (hash) {
                  return hash;
                });

              case 10:
                hashedPassword = _context.sent;
                _context.next = 13;
                return _models["default"].User.create({
                  firstName: req.body.name,
                  lastName: req.body.lastname,
                  email: req.body.email,
                  password: hashedPassword,
                  token: token
                });

              case 13:
                result = _context.sent;

                _sendGridHandler["default"].sendConfirmationMail(token, req.body.email);

                return _context.abrupt("return", res.status(201).json({
                  success: true,
                  message: 'User registered successfully.Confirmation email sent to your email address.Confirm and then log in.',
                  user: result
                }));

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);

                _errorHandler["default"].handleError(_context.t0, 500, res);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      }));

      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "loginUser",
    value: function () {
      var _loginUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, email, password, userExists, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body = req.body, email = _req$body.email, password = _req$body.password; //check if user already exists

                _context2.next = 4;
                return _models["default"].User.findOne({
                  where: {
                    email: email
                  }
                });

              case 4:
                userExists = _context2.sent;

                if (!userExists) {
                  _context2.next = 16;
                  break;
                }

                if (!userExists.dataValues.status) {
                  _context2.next = 13;
                  break;
                }

                if (!_bcryptjs["default"].compareSync(password, userExists.dataValues.password)) {
                  _context2.next = 10;
                  break;
                }

                token = _jsonwebtoken["default"].sign({
                  email: email
                }, 'secret', {
                  expiresIn: '2h'
                });
                return _context2.abrupt("return", res.status(200).json({
                  success: true,
                  message: 'Logged in successfully.',
                  token: token
                }));

              case 10:
                return _context2.abrupt("return", res.status(403).json({
                  success: false,
                  message: 'Password not correct.'
                }));

              case 13:
                return _context2.abrupt("return", res.status(403).json({
                  success: false,
                  message: 'Log in failed.Confirm email then log in.'
                }));

              case 14:
                _context2.next = 17;
                break;

              case 16:
                return _context2.abrupt("return", res.status(403).json({
                  success: false,
                  message: 'No user exists with such email.'
                }));

              case 17:
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);
                console.log('LOGIN ERROR', _context2.t0);

                _errorHandler["default"].handleError(_context2.t0, 500, res);

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 19]]);
      }));

      function loginUser(_x3, _x4) {
        return _loginUser.apply(this, arguments);
      }

      return loginUser;
    }()
  }, {
    key: "confirmEmail",
    value: function () {
      var _confirmEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body2, token, email, userExists, confirmedUser;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _req$body2 = req.body, token = _req$body2.token, email = _req$body2.email; //check if user already exists

                _context3.next = 4;
                return _models["default"].User.findOne({
                  where: {
                    email: email
                  }
                });

              case 4:
                userExists = _context3.sent;

                if (!(userExists && userExists.token === token)) {
                  _context3.next = 17;
                  break;
                }

                if (!userExists.status) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json({
                  success: true,
                  message: 'Email already confirmed.Please log in.'
                }));

              case 10:
                _context3.next = 12;
                return _models["default"].User.update({
                  status: 1
                }, {
                  where: {
                    email: email
                  }
                });

              case 12:
                confirmedUser = _context3.sent;

                if (!(confirmedUser[0] === 1)) {
                  _context3.next = 15;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json({
                  success: true,
                  message: 'Email successfully confirmed.'
                }));

              case 15:
                _context3.next = 18;
                break;

              case 17:
                return _context3.abrupt("return", res.status(403).json({
                  success: false,
                  message: 'No user exists with submitted email.Signup and confirm your email.'
                }));

              case 18:
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](0);

                _errorHandler["default"].handleError(_context3.t0, 500, res);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 20]]);
      }));

      function confirmEmail(_x5, _x6) {
        return _confirmEmail.apply(this, arguments);
      }

      return confirmEmail;
    }()
  }, {
    key: "forgotPassword",
    value: function () {
      var _forgotPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var email, userExists;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                email = req.body.email;
                _context4.next = 4;
                return _models["default"].User.findOne({
                  where: {
                    email: email
                  }
                });

              case 4:
                userExists = _context4.sent;

                if (!userExists) {
                  _context4.next = 9;
                  break;
                }

                _sendGridHandler["default"].sendForgotPasswordMail(email);

                _context4.next = 10;
                break;

              case 9:
                return _context4.abrupt("return", res.status(403).json({
                  success: false,
                  message: 'No user exists with such credentials.Signup and confirm your email.'
                }));

              case 10:
                _context4.next = 15;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);

                _errorHandler["default"].handleError(_context4.t0, 500, res);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
      }));

      function forgotPassword(_x7, _x8) {
        return _forgotPassword.apply(this, arguments);
      }

      return forgotPassword;
    }()
  }, {
    key: "resetPassword",
    value: function () {
      var _resetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var saltRounds, _req$body3, email, password, hashedPassword, userExists, newPasswordUser;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                saltRounds = 10;
                _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;
                _context5.next = 5;
                return _bcryptjs["default"].hash(req.body.password, saltRounds).then(function (hash) {
                  return hash;
                });

              case 5:
                hashedPassword = _context5.sent;
                _context5.next = 8;
                return _models["default"].User.findOne({
                  where: {
                    email: email
                  }
                });

              case 8:
                userExists = _context5.sent;
                userExists.password = hashedPassword;
                _context5.next = 12;
                return userExists.save();

              case 12:
                newPasswordUser = _context5.sent;

                if (!(newPasswordUser.dataValues.password === hashedPassword)) {
                  _context5.next = 15;
                  break;
                }

                return _context5.abrupt("return", res.status(200).json({
                  success: true,
                  message: 'Password successfully reset.'
                }));

              case 15:
                _context5.next = 20;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t0 = _context5["catch"](0);

                _errorHandler["default"].handleError(_context5.t0, 500, res);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 17]]);
      }));

      function resetPassword(_x9, _x10) {
        return _resetPassword.apply(this, arguments);
      }

      return resetPassword;
    }()
  }]);
  return AuthController;
}();

var _default = AuthController;
exports["default"] = _default;