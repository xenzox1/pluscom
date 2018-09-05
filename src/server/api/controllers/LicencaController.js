import Licenca from '../models/LicencaModel';
// import crypt from 'cripto';

export default class LicencaController {
    static Erro(err) {
        return {
            success: false,
            error: err
        }
    }

    static Success(r) {
        return {
            success: true,
            result: r
        }
    }

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

    selectOne() {
        return (req, res) => {
            Licenca.findById(req.params.licencaId, (err, r) => {
                if (err) {
                    res.json(LicencaController.Erro(err));
                    res.end();
                }
                res.json(LicencaController.Success(r));
                res.end();
            });
        }
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
}