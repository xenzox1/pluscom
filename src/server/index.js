import express from 'express';
import DB from './db';
import apiRoutes from './api/Api';
import authRoutes from './auth/Auth';

const router = express.Router();

const connection = new DB();
connection.mongoDB();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});
router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

export default router;