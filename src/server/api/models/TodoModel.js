import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    nome: {type: String, required: true},
    data_criacao: {type: Date, default: Date.now},
    status: {type: String, default: 'Pendente', required: true}
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;