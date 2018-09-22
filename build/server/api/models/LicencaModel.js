'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var LicencaSchema = new Schema({
    key: { type: String, required: true, unique: true },
    data_c: { type: Date, default: Date.now },
    data_e: {
        type: Date, default: function _default() {
            return Date.now() + 2592000000;
        }
    },
    status: { type: Boolean, default: true }
});

var Licenca = _mongoose2.default.model('Licenca', LicencaSchema);

exports.default = Licenca;
//# sourceMappingURL=LicencaModel.js.map