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

var _stripe = _interopRequireDefault(require("stripe"));

var _models = require("../../database/models");

var _errorHandler = _interopRequireDefault(require("./../../helpers/errorHandler"));

var _responseHandler = _interopRequireDefault(require("./../../helpers/responseHandler"));

var _moment = _interopRequireDefault(require("moment"));

var _Mpesa = _interopRequireDefault(require("../../middlewares/Mpesa"));

var Stripe = (0, _stripe["default"])(process.env.STRIPE_SECRET_KEY);

var subscriptionController = /*#__PURE__*/function () {
  function subscriptionController() {
    (0, _classCallCheck2["default"])(this, subscriptionController);
  }

  (0, _createClass2["default"])(subscriptionController, null, [{
    key: "createSubscription",
    value: function () {
      var _createSubscription = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var userSubscriptionStatus, endDate, plan, subscription;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models.Subscriptions.findOne({
                  where: {
                    userId: req.user.id,
                    isActive: true
                  }
                });

              case 3:
                userSubscriptionStatus = _context.sent;

                if (!userSubscriptionStatus) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", (0, _responseHandler["default"])(res, "You have an active subscription", 403, "You have an active subscription"));

              case 8:
                endDate = (0, _moment["default"])().add(30, 'days');
                plan = req.body.plan;
                _context.next = 12;
                return _models.Subscriptions.create({
                  userId: req.user.id,
                  plan: plan,
                  planId: '1',
                  endDate: endDate,
                  isActive: true
                });

              case 12:
                subscription = _context.sent;
                return _context.abrupt("return", (0, _responseHandler["default"])(res, "Subscription successful", 201, subscription));

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _errorHandler["default"].handleError(_context.t0.message, 500, res));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16]]);
      }));

      function createSubscription(_x, _x2) {
        return _createSubscription.apply(this, arguments);
      }

      return createSubscription;
    }()
  }]);
  return subscriptionController;
}();

var _default = subscriptionController;
exports["default"] = _default;