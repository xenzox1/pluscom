import express from 'express';
import todoRouter from './routes/TodoRouter';
import licencaRouter from './routes/LicencaRouter';
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import pk from "../pk";

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, pk.pk, (err, decoded) => {
            if (err) {
                res.json({success: false, message: 'Falha ao tentar autenticar o token!'});
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

router.use('/tasks', todoRouter);
router.use('/licencas', licencaRouter);

router.use((req, res) => {
    res.json({success: false, message: 'Não sabemos o que aconteceu.'})
});

export default router;