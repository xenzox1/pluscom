'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var AuthSchema = new Schema({
    nome: String,
    email: { type: String, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nivel: { type: Number, required: true },
    verified: { type: Boolean, default: false }
});

var Auth = _mongoose2.default.model('User', AuthSchema);

exports.default = Auth;
//# sourceMappingURL=AuthModel.js.map