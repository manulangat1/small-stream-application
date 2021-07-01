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

var _s = _interopRequireDefault(require("aws-sdk/clients/s3"));

var _fs = _interopRequireDefault(require("fs"));

var bucketName = process.env.AWS_BUCKET_NAME;
var region = process.env.AWS_BUCKET_REGION;
var secretKeyId = process.env.AWS_SECRET_KEY;
var accessKeyId = process.env.AWS_ACCESS_KEY;
var s3 = new _s["default"]({
  region: region,
  secretKeyId: secretKeyId,
  accessKeyId: accessKeyId
});

var UploadAWS = /*#__PURE__*/function () {
  function UploadAWS() {
    (0, _classCallCheck2["default"])(this, UploadAWS);
  }

  (0, _createClass2["default"])(UploadAWS, null, [{
    key: "uploadFileFn",
    //uploads to s3 
    value: function () {
      var _uploadFileFn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
        var fileStream, uploadParams;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fileStream = _fs["default"].createReadStream(file.path);
                uploadParams = {
                  Bucket: bucketName,
                  Body: fileStream,
                  Key: file.filename
                };
                return _context.abrupt("return", s3.upload(uploadParams).promise());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function uploadFileFn(_x) {
        return _uploadFileFn.apply(this, arguments);
      }

      return uploadFileFn;
    }() //downloads from s3 

  }, {
    key: "getFileFn",
    value: function () {
      var _getFileFn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fileKey) {
        var fileStream, downloadParams;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fileStream = _fs["default"].createReadStream(file.path);
                downloadParams = {
                  Bucket: bucketName,
                  Key: fileKey
                };
                return _context2.abrupt("return", s3.getObject(downloadParams).createReadStream());

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getFileFn(_x2) {
        return _getFileFn.apply(this, arguments);
      }

      return getFileFn;
    }()
  }]);
  return UploadAWS;
}();

var _default = UploadAWS;
exports["default"] = _default;