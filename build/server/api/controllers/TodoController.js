'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TodoModel = require('../models/TodoModel');

var _TodoModel2 = _interopRequireDefault(_TodoModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoController = function () {
    function TodoController() {
        _classCallCheck(this, TodoController);
    }

    _createClass(TodoController, [{
        key: 'selectAll',
        value: function selectAll() {
            return function (req, res) {
                _TodoModel2.default.find({}, function (err, r) {
                    if (err) {
                        res.json(TodoController.Erro(err));
                        res.end();
                    }
                    res.json(r);
                    res.end();
                });
            };
        }
    }, {
        key: 'selectOne',
        value: function selectOne() {
            return function (req, res) {
                _TodoModel2.default.findById(req.params.taskId, function (err, r) {
                    if (err) {
                        res.json(TodoController.Erro(err));
                        res.end();
                    }
                    res.json(r);
                    res.end();
                });
            };
        }
    }, {
        key: 'createOne',
        value: function createOne() {
            return function (req, res) {
                _TodoModel2.default.create({ nome: req.body.nome }, function (err) {
                    if (err) {
                        res.json(TodoController.Erro(err));
                        res.end();
                    }
                    res.json({ success: 'Criado com sucesso!' });
                    res.end();
                });
            };
        }
    }, {
        key: 'updateOne',
        value: function updateOne() {
            return function (req, res) {
                var id = req.params.taskId;
                var update = {};
                if (req.body.nome) {
                    update.nome = req.body.nome;
                }

                if (req.body.status) {
                    update.status = req.body.status;
                }

                var u = { $set: update };

                _TodoModel2.default.findByIdAndUpdate(id, u, function (err) {
                    if (err) {
                        res.json(TodoController.Erro(err));
                        res.end();
                    }
                    res.json({ success: 'Atualizado com sucesso!' });
                    res.end();
                });
            };
        }
    }, {
        key: 'deleteOne',
        value: function deleteOne() {
            return function (req, res) {
                _TodoModel2.default.findByIdAndRemove(req.params.taskId, function (err) {
                    if (err) {
                        res.json(TodoController.Erro(err));
                        res.end();
                    }
                    res.json({ success: 'Deletado com sucesso!' });
                    res.end();
                });
            };
        }
    }], [{
        key: 'Erro',
        value: function Erro(err) {
            return {
                erro: true,
                err: err
            };
        }
    }]);

    return TodoController;
}();

exports.default = TodoController;
//# sourceMappingURL=TodoController.js.map