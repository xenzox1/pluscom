import cripto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '../models/AuthModel';
import pk from '../../pk';

export default class AuthController {
    static Erro(err) {
        return {
            success: false,
            error: err
        }
    }

    login() {
        return (req, res) => {
            let nome = '';
            let email = '';
            let un = '';
            if (req.body.username) {
                un = req.body.username;
            }
            let up = '';
            if (req.body.password) {
                up = cripto.createHash('sha256').update(req.body.password).digest('hex');
            }

            User.find({username: un, password: up, verified: true}, (err, r) => {
                if (err || r.length !== 1) {
                    if (!err) {
                        err = {message: 'Usuario ou senha incorretos!'};
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

                        const p = {
                            nome: nome,
                            email: email,
                            username: un,
                            password: up,
                            nivel: r[0].nivel
                        };

                        req.session.token = jwt.sign(p, pk.pk, {expiresIn: '7d'});
                        res.json({success: true, message: 'Token criado!!'});
                        res.end();
                    } else {
                        if (!err) {
                            err = {message: 'Usuario ou senha incorretos!'};
                        }
                        res.json(AuthController.Erro(err));
                    }
                }
            })
        }
    }

    register() {
        return (req, res) => {
            if (req.body.nome === '' && req.body.email === '' && req.body.username === '' && req.body.password === '' && req.body.nivel === '') {
                res.json({success: false, message: 'Algum campo está faltando!'});
                return;
            }

            const nome = req.body.nome;
            const email = req.body.email;
            const username = req.body.username;
            const password = cripto.createHash('sha256').update(req.body.password).digest('hex');
            const nivel = req.body.nivel;

            const a = {nome: nome, email: email, username: username, password: password, nivel: nivel};

            const user = new User(a);
            user.save((err) => {
                if (err) {
                    res.json(AuthController.Erro(err));
                } else {
                    res.json({success: true, message: 'Usuario criado!'});
                }
            });
        }
    }

    verify() {
        return (req, res) => {
            const token = req.headers['x-access-token'];
            if (token) {
                jwt.verify(token, pk.pk, (err, decoded) => {
                    if (err) {
                        res.json({success: false, message: 'Falha ao tentar autenticar o token!'});
                        return;
                    }

                    if (decoded.nivel < 2) {
                        res.json({success: false, message: 'Nivel de acesso insuficiente!'});
                        return;
                    }

                    const id = req.params.userId;
                    User.findByIdAndUpdate(id, {verified: true}, (err) => {
                        if (err) {
                            res.json(AuthController.Erro(err));
                        } else {
                            res.json({success: true, message: 'Modificado com sucesso!'});
                        }
                    })
                });
            } else {
                return res.status(403).send({
                    success: false,
                    message: '403 - Forbidden'
                });
            }
        }
    }

    static status() {
        function tokenVerify(token) {
            jwt.verify(token, pk.pk, (err) => {
                return !err;
            });
        }

        return (req, res) => {
            if (req.session) {
                if (req.session.token) {
                    const token = req.session.token;
                    if (tokenVerify(token)) {
                        res.json({success: true});
                    } else {
                        res.json({success: false});
                    }
                } else {
                    res.json({success: false});
                }
            } else {
                res.json({success: false});
            }
        };
    }
}