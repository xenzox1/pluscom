'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _TodoRouter = require('./routes/TodoRouter');

var _TodoRouter2 = _interopRequireDefault(_TodoRouter);

var _LicencaRouter = require('./routes/LicencaRouter');

var _LicencaRouter2 = _interopRequireDefault(_LicencaRouter);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _pk = require('../pk');

var _pk2 = _interopRequireDefault(_pk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use(_bodyParser2.default.json());
router.use(_bodyParser2.default.urlencoded({ extended: false }));

router.use(function (req, res, next) {
    var token = req.session.token;
    if (token) {
        _jsonwebtoken2.default.verify(token, _pk2.default.pk, function (err, decoded) {
            if (err) {
                res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });
            }
            req.decoded = decoded;
            next();
        });
    } else {
        return res.status(403).send({
            success: false,
            message: '403 - Forbidden'
        });
    }
});

router.use('/tasks', _TodoRouter2.default);
router.use('/licencas', _LicencaRouter2.default);

router.use(function (req, res) {
    res.json({ success: false, message: 'Não sabemos o que aconteceu.' });
});

exports.default = router;
//# sourceMappingURL=Api.js.map