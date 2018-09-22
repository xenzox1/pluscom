'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var todoSchema = new Schema({
    nome: { type: String, required: true },
    data_criacao: { type: Date, default: Date.now },
    status: { type: String, default: 'Pendente', required: true }
});

var Todo = _mongoose2.default.model('Todo', todoSchema);
exports.default = Todo;
//# sourceMappingURL=TodoModel.js.map