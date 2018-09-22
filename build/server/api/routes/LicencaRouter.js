'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _LicencaController = require('../controllers/LicencaController');

var _LicencaController2 = _interopRequireDefault(_LicencaController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Licenca = new _LicencaController2.default();
var router = _express2.default.Router();
router.route('/:licencaId').get(Licenca.selectOne());
// .put(Licenca.updateOne())
// .delete(Licenca.deleteOne());

// routes.route('/')
//     .get(Licenca.selectAll())
//     .post(Licenca.createOne());

exports.default = router;
//# sourceMappingURL=LicencaRouter.js.map