import Mysql from 'mysql';
import MongoDB from 'mongoose';

export default class DBconnection {

    constructor() {
        if(process.env.NODE_ENV === "production"){
            this.mongoURL = 'mongodb://admin:bronze10@ds111913.mlab.com:11913/pluscom';
        } else {
            this.mongoURL = 'mongodb://localhost:27017/pluscom';
        }
    }

    static mysql() {
        const connection = Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'pluscom'
        });

        return connection.connect();
    }

    mongoDB() {
        const mongoose = MongoDB.connect(this.mongoURL, {useNewUrlParser: true});
        mongoose.then(() => {
            console.info('Connect to mongoDB success!');
            // return mongoose;
        }).catch(() => {
            console.error.bind(console, 'connection error:')
        });
    }
}