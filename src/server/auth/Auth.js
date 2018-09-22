import express from 'express';
import bodyParser from "body-parser";
import AuthController from "./controllers/AuthController";

const router = express.Router();
const Auth = new AuthController();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/login', Auth.login());
router.post('/register', Auth.register());
router.all('/verify/:userId', Auth.verify());
router.all('/status', AuthController.status());

router.use((req, res) => {
    res.json({success: false, message: 'Rota invalida para autenticação'})
});

export default router;