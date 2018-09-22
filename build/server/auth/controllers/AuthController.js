'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _AuthModel = require('../models/AuthModel');

var _AuthModel2 = _interopRequireDefault(_AuthModel);

var _pk = require('../../pk');

var _pk2 = _interopRequireDefault(_pk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthController = function () {
    function AuthController() {
        _classCallCheck(this, AuthController);
    }

    _createClass(AuthController, [{
        key: 'login',
        value: function login() {
            return function (req, res) {
                var nome = '';
                var email = '';
                var un = '';
                if (req.body.username) {
                    un = req.body.username;
                }
                var up = '';
                if (req.body.password) {
                    up = _crypto2.default.createHash('sha256').update(req.body.password).digest('hex');
                }

                _AuthModel2.default.find({ username: un, password: up, verified: true }, function (err, r) {
                    if (err || r.length !== 1) {
                        if (!err) {
                            err = { message: 'Usuario ou senha incorretos!' };
                        }
                        res.json(AuthController.Erro(err));
                    } else {
                        if (r[0].verified) {
                            if (r[0].nome) {
                                nome = r[0].nome;
                            }

                            if (r[0].email) {
                                email = r[0].email;
                            }

                            var p = {
                                nome: nome,
                                email: email,
                                username: un,
                                password: up,
                                nivel: r[0].nivel
                            };

                            req.session.token = _jsonwebtoken2.default.sign(p, _pk2.default.pk, { expiresIn: '7d' });
                            res.json({ success: true, message: 'Token criado!!' });
                            res.end();
                        } else {
                            if (!err) {
                                err = { message: 'Usuario ou senha incorretos!' };
                            }
                            res.json(AuthController.Erro(err));
                        }
                    }
                });
            };
        }
    }, {
        key: 'register',
        value: function register() {
            return function (req, res) {
                if (req.body.nome === '' && req.body.email === '' && req.body.username === '' && req.body.password === '' && req.body.nivel === '') {
                    res.json({ success: false, message: 'Algum campo está faltando!' });
                    return;
                }

                var nome = req.body.nome;
                var email = req.body.email;
                var username = req.body.username;
                var password = _crypto2.default.createHash('sha256').update(req.body.password).digest('hex');
                var nivel = req.body.nivel;

                var a = { nome: nome, email: email, username: username, password: password, nivel: nivel };

                var user = new _AuthModel2.default(a);
                user.save(function (err) {
                    if (err) {
                        res.json(AuthController.Erro(err));
                    } else {
                        res.json({ success: true, message: 'Usuario criado!' });
                    }
                });
            };
        }
    }, {
        key: 'verify',
        value: function verify() {
            return function (req, res) {
                var token = req.headers['x-access-token'];
                if (token) {
                    _jsonwebtoken2.default.verify(token, _pk2.default.pk, function (err, decoded) {
                        if (err) {
                            res.json({ success: false, message: 'Falha ao tentar autenticar o token!' });
                            return;
                        }

                        if (decoded.nivel < 2) {
                            res.json({ success: false, message: 'Nivel de acesso insuficiente!' });
                            return;
                        }

                        var id = req.params.userId;
                        _AuthModel2.default.findByIdAndUpdate(id, { verified: true }, function (err) {
                            if (err) {
                                res.json(AuthController.Erro(err));
                            } else {
                                res.json({ success: true, message: 'Modificado com sucesso!' });
                            }
                        });
                    });
                } else {
                    return res.status(403).send({
                        success: false,
                        message: '403 - Forbidden'
                    });
                }
            };
        }
    }], [{
        key: 'Erro',
        value: function Erro(err) {
            return {
                success: false,
                error: err
            };
        }
    }, {
        key: 'status',
        value: function status() {
            function tokenVerify(token) {
                _jsonwebtoken2.default.verify(token, _pk2.default.pk, function (err) {
                    return !err;
                });
            }

            return function (req, res) {
                if (req.session) {
                    if (req.session.token) {
                        var token = req.session.token;
                        if (tokenVerify(token)) {
                            res.json({ success: true });
                        } else {
                            res.json({ success: false });
                        }
                    } else {
                        res.json({ success: false });
                    }
                } else {
                    res.json({ success: false });
                }
            };
        }
    }]);

    return AuthController;
}();

exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map