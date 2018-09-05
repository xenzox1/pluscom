import Todo from '../models/TodoModel';

export default class TodoController {

    static Erro(err) {
        return {
            erro: true,
            err: err
        }
    }

    selectAll() {
        return (req, res) => {
            Todo.find({}, (err, r) => {
                if (err) {
                    res.json(TodoController.Erro(err));
                    res.end();
                }
                res.json(r);
                res.end();
            });
        }
    }

    selectOne() {
        return (req, res) => {
            Todo.findById(req.params.taskId, (err, r) => {
                if (err) {
                    res.json(TodoController.Erro(err));
                    res.end();
                }
                res.json(r);
                res.end();
            });
        }
    }

    createOne() {
        return (req, res) => {
            Todo.create({nome: req.body.nome}, (err) => {
                if (err) {
                    res.json(TodoController.Erro(err));
                    res.end();
                }
                res.json({success: 'Criado com sucesso!'});
                res.end();
            });
        }
    }

    updateOne() {
        return (req, res) => {
            const id = req.params.taskId;
            const update = {};
            if (req.body.nome) {
                update.nome = req.body.nome;
            }

            if (req.body.status) {
                update.status = req.body.status;
            }

            const u = {$set: update};

            Todo.findByIdAndUpdate(id, u, (err) => {
                if (err) {
                    res.json(TodoController.Erro(err));
                    res.end();
                }
                res.json({success: 'Atualizado com sucesso!'});
                res.end();
            })
        }
    }

    deleteOne() {
        return (req, res) => {
            Todo.findByIdAndRemove(req.params.taskId, (err) => {
                if (err) {
                    res.json(TodoController.Erro(err));
                    res.end();
                }
                res.json({success: 'Deletado com sucesso!'});
                res.end();
            });
        }
    }
}