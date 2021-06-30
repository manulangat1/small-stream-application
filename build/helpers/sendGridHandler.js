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

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var SendGridHelper = /*#__PURE__*/function () {
  function SendGridHelper() {
    (0, _classCallCheck2["default"])(this, SendGridHelper);
  }

  (0, _createClass2["default"])(SendGridHelper, null, [{
    key: "sendConfirmationMail",
    value: function () {
      var _sendConfirmationMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(token, emailAddress) {
        var server, msg;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                server = process.env.SERVER || 'https://phidi.herokuapp.com/';

                _mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

                msg = {
                  to: emailAddress,
                  from: 'daniel.maina@etinx.com',
                  subject: 'Confirm email address.',
                  text: "Click on this link to verify your email ".concat(server, "verification?token=").concat(token, "&email=").concat(emailAddress),
                  html: "<p>Click on this link to verify your email ".concat(server, "verification?token=").concat(token, "&email=").concat(emailAddress, "</p>")
                };

                _mail["default"].send(msg).then(function () {}, function (error) {
                  console.error(error);

                  if (error.response) {
                    console.error(error.response.body);
                  }
                }); //ES8


                (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return _mail["default"].send(msg);

                        case 3:
                          _context.next = 9;
                          break;

                        case 5:
                          _context.prev = 5;
                          _context.t0 = _context["catch"](0);
                          console.error(_context.t0);

                          if (_context.t0.response) {
                            console.error(_context.t0.response.body);
                          }

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 5]]);
                }))();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function sendConfirmationMail(_x, _x2) {
        return _sendConfirmationMail.apply(this, arguments);
      }

      return sendConfirmationMail;
    }()
  }, {
    key: "sendForgotPasswordMail",
    value: function () {
      var _sendForgotPasswordMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(emailAddress) {
        var server, msg;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                server = process.env.SERVER || 'https://phidi.herokuapp.com/';

                _mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

                msg = {
                  to: emailAddress,
                  from: 'daniel.maina@etinx.com',
                  subject: 'Reset Phidi password.',
                  text: "Click on this link to reset you password ".concat(server, "reset-password?email=").concat(emailAddress),
                  html: "<p>Click on this link to reset you password ".concat(server, "reset-password?email=").concat(emailAddress, "</p>")
                };

                _mail["default"].send(msg).then(function () {}, function (error) {
                  console.error(error);

                  if (error.response) {
                    console.error(error.response.body);
                  }
                }); //ES8


                (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return _mail["default"].send(msg);

                        case 3:
                          _context3.next = 9;
                          break;

                        case 5:
                          _context3.prev = 5;
                          _context3.t0 = _context3["catch"](0);
                          console.error(_context3.t0);

                          if (_context3.t0.response) {
                            console.error(_context3.t0.response.body);
                          }

                        case 9:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[0, 5]]);
                }))();

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function sendForgotPasswordMail(_x3) {
        return _sendForgotPasswordMail.apply(this, arguments);
      }

      return sendForgotPasswordMail;
    }()
  }]);
  return SendGridHelper;
}();

var _default = SendGridHelper;
exports["default"] = _default;