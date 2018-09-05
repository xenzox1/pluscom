import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LicencaSchema = new Schema({
    key: {type: String, required: true, unique: true},
    data_c: {type: Date, default: Date.now},
    data_e: {
        type: Date, default: function () {
            return Date.now() + 2592000000;
        }
    },
    status: {type: Boolean, default: true}
});

const Licenca = mongoose.model('Licenca', LicencaSchema);

export default Licenca;