"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _AuthController = require("./controllers/AuthController");

var _AuthController2 = _interopRequireDefault(_AuthController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var Auth = new _AuthController2.default();

router.use(_bodyParser2.default.urlencoded({ extended: false }));
router.use(_bodyParser2.default.json());

router.post('/login', Auth.login());
router.post('/register', Auth.register());
router.all('/verify/:userId', Auth.verify());
router.all('/status', _AuthController2.default.status());

router.use(function (req, res) {
    res.json({ success: false, message: 'Rota invalida para autenticação' });
});

exports.default = router;
//# sourceMappingURL=Auth.js.map