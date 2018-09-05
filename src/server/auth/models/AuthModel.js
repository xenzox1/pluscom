import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    nome: String,
    email: {type: String, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    nivel: {type: Number, required: true},
    verified: {type: Boolean, default: false}
});

const Auth = mongoose.model('User', AuthSchema);

export default Auth;