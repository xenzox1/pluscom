"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//admin
router.use('/admin', _express2.default.static(_path2.default.join(__dirname, '/admin')));
router.all('/admin/*', function (req, res) {
  return res.sendFile(_path2.default.join(__dirname, 'admin', 'index.html'));
});

//testes
router.all('/test/*', function (req, res) {
  return res.sendFile(_path2.default.join(__dirname, 'tests', 'index.html'));
});

//normal
router.use('/', _express2.default.static(_path2.default.join(__dirname, '/public')));
router.all('/*', function (req, res) {
  return res.sendFile(_path2.default.join(__dirname, 'public', 'index.html'));
});

exports.default = router;
//# sourceMappingURL=index.js.map