import express from 'express';
import LicencaController from "../controllers/LicencaController";

const Licenca = new LicencaController();
const router = express.Router();
router.route('/:licencaId')
    .get(Licenca.selectOne());
// .put(Licenca.updateOne())
// .delete(Licenca.deleteOne());

// routes.route('/')
//     .get(Licenca.selectAll())
//     .post(Licenca.createOne());

export default router;