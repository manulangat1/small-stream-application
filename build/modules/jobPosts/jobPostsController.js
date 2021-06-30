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

var _errorHandler = _interopRequireDefault(require("../../helpers/errorHandler"));

var _jobPosts = _interopRequireDefault(require("./../../helpers/dummyData/job-posts"));

var JobPostsController = /*#__PURE__*/function () {
  function JobPostsController() {
    (0, _classCallCheck2["default"])(this, JobPostsController);
  }

  (0, _createClass2["default"])(JobPostsController, null, [{
    key: "fetchJobPosts",
    value: function () {
      var _fetchJobPosts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", res.status(200).json({
                  success: true,
                  message: 'Job posts fetched successfully.',
                  jobPosts: _jobPosts["default"]
                }));

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);

                _errorHandler["default"].handleError(_context.t0, 500, res);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function fetchJobPosts(_x, _x2) {
        return _fetchJobPosts.apply(this, arguments);
      }

      return fetchJobPosts;
    }()
  }]);
  return JobPostsController;
}();

var _default = JobPostsController;
exports["default"] = _default;