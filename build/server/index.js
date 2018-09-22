'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _Api = require('./api/Api');

var _Api2 = _interopRequireDefault(_Api);

var _Auth = require('./auth/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var connection = new _db2.default();
connection.mongoDB();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});
router.use('/auth', _Auth2.default);
router.use('/api', _Api2.default);

exports.default = router;
//# sourceMappingURL=index.js.map