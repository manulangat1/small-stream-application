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

var _axios = _interopRequireDefault(require("axios"));

var _responseHandler = _interopRequireDefault(require("../helpers/responseHandler"));

var _moment = _interopRequireDefault(require("moment"));

var Mpesa = /*#__PURE__*/function () {
  function Mpesa() {
    (0, _classCallCheck2["default"])(this, Mpesa);
  }

  (0, _createClass2["default"])(Mpesa, null, [{
    key: "getAuthOToken",
    value: function () {
      var _getAuthOToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var consumer_key, consumer_secret, url, buffer, auth, _yield$axios$get, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                consumer_key = process.env.MPESA_CONSUMER_KEY;
                consumer_secret = process.env.MPESA_SECRET_KEY;
                url = process.env.MPESA_TOKEN_URL; //form a buffer of the consumer key and secret

                buffer = new Buffer.from(consumer_key + ":" + consumer_secret);
                auth = "Basic ".concat(buffer.toString('base64'));
                _context.prev = 5;
                _context.next = 8;
                return _axios["default"].get(url, {
                  "headers": {
                    "Authorization": auth
                  }
                });

              case 8:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                console.log(data.access_token); // req.mpesa_token = data.access_token
                // console.log(req.mpesa_token)
                // return req.mpesa_token = data['access_token']

                return _context.abrupt("return", data.access_token);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);
                return _context.abrupt("return", (0, _responseHandler["default"])(res, _context.t0['response']['statusText'], 403, _context.t0['response']['statusText']));

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 14]]);
      }));

      function getAuthOToken(_x, _x2, _x3) {
        return _getAuthOToken.apply(this, arguments);
      }

      return getAuthOToken;
    }()
  }, {
    key: "lipaNaMpesaOnline",
    value: function () {
      var _lipaNaMpesaOnline = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var token, auth, timestamp, url, bs_short_code, passkey, password, transcation_type, amount, partyA, partyB, phoneNumber, callBackUrl, accountReference, transaction_desc, _axios$post$then$catc, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getAuthOToken();

              case 2:
                token = _context2.sent;
                console.log('token', token);
                auth = "Bearer ".concat(token);
                timestamp = (0, _moment["default"])();
                url = process.env.MPESA_LIPA_ONLINE;
                bs_short_code = process.env.MPESA_SHORT_CODE;
                passkey = process.env.MPESA_PASS_KEY;
                password = new Buffer.from("".concat(bs_short_code).concat(passkey).concat(timestamp)).toString('base64');
                transcation_type = "CustomerPayBillOnline";
                amount = "1"; //you can enter any amount

                partyA = "254740415950"; //should follow the format:2547xxxxxxxx

                partyB = process.env.lipa_na_mpesa_shortcode;
                phoneNumber = "254740415950"; //should follow the format:2547xxxxxxxx

                callBackUrl = "https://1a00b38f367a.ngrok.io/";
                accountReference = "lipa-na-mpesa-tutorial";
                transaction_desc = "Testing lipa na mpesa functionality";
                _context2.prev = 18;
                _axios$post$then$catc = _axios["default"].post(url, {
                  "BusinessShortCode": bs_short_code,
                  "Password": password,
                  "Timestamp": timestamp,
                  "TransactionType": transcation_type,
                  "Amount": amount,
                  "PartyA": partyA,
                  "PartyB": partyB,
                  "PhoneNumber": phoneNumber,
                  "CallBackURL": callBackUrl,
                  "AccountReference": accountReference,
                  "TransactionDesc": transaction_desc
                }, {
                  "headers": {
                    "Authorization": auth
                  }
                }).then(function (res) {
                  return console.log(res);
                })["catch"](function (err) {
                  return console.log(err);
                }), data = _axios$post$then$catc.data;
                console.log('data', data);
                return _context2.abrupt("return", (0, _responseHandler["default"])(res, "Success", 200, data));

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](18);
                console.log("Error is", _context2.t0);
                return _context2.abrupt("return", (0, _responseHandler["default"])(res, "Failed", 403, _context2.t0['response']['statustext']));

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[18, 24]]);
      }));

      function lipaNaMpesaOnline(_x4, _x5) {
        return _lipaNaMpesaOnline.apply(this, arguments);
      }

      return lipaNaMpesaOnline;
    }()
  }]);
  return Mpesa;
}();

var _default = Mpesa;
exports["default"] = _default;