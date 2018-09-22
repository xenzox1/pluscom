'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LicencaModel = require('../models/LicencaModel');

var _LicencaModel2 = _interopRequireDefault(_LicencaModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import crypt from 'cripto';

var LicencaController = function () {
    function LicencaController() {
        _classCallCheck(this, LicencaController);
    }

    _createClass(LicencaController, [{
        key: 'selectOne',


        // selectAll() {
        //     return (req, res) => {
        //         Licenca.find({}, (err, r) => {
        //             if (err) {
        //                 res.json(LicencaController.Erro(err));
        //                 res.end();
        //             }
        //             res.json(LicencaController.Success(r));
        //             res.end();
        //         });
        //     }
        // }

        value: function selectOne() {
            return function (req, res) {
                _LicencaModel2.default.findById(req.params.licencaId, function (err, r) {
                    if (err) {
                        res.json(LicencaController.Erro(err));
                        res.end();
                    }
                    res.json(LicencaController.Success(r));
                    res.end();
                });
            };
        }

        // createOne() {
        //     return (req, res) => {
        //         const a = {
        //             key: crypt.createHash('sha256').update('a').digest('hex')
        //         };
        //         Licenca.create(a, (err, r) => {
        //             if (err) {
        //                     res.json(LicencaController.Erro(err));
        //                     res.end();
        //                 }
        //                 res.json(LicencaController.Success(r));
        //                 res.end();
        //         });
        //     }
        // }

        // updateOne() {
        //     return (req, res) => {
        //         const id = req.params.licencaId;
        //         const update = {};
        //         if (req.body.nome) {
        //             update.nome = req.body.nome;
        //         }
        //
        //         if (req.body.status) {
        //             update.status = req.body.status;
        //         }
        //
        //         const u = {$set: update};
        //
        //         Licenca.findByIdAndUpdate(id, u, (err, r) => {
        //             if (err) {
        //                     res.json(LicencaController.Erro(err));
        //                     res.end();
        //                 }
        //                 res.json(LicencaController.Success(r));
        //                 res.end();
        //         })
        //     }
        // }

        // deleteOne() {
        //     return (req, res) => {
        //         Licenca.findByIdAndRemove(req.params.licencaId, (err, r) => {
        //            if (err) {
        //                     res.json(LicencaController.Erro(err));
        //                     res.end();
        //                 }
        //                 res.json(LicencaController.Success(r));
        //                 res.end();
        //         });
        //     }
        // }

    }], [{
        key: 'Erro',
        value: function Erro(err) {
            return {
                success: false,
                error: err
            };
        }
    }, {
        key: 'Success',
        value: function Success(r) {
            return {
                success: true,
                result: r
            };
        }
    }]);

    return LicencaController;
}();

exports.default = LicencaController;
//# sourceMappingURL=LicencaController.js.map