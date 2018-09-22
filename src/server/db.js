import Mysql from 'mysql';
import MongoDB from 'mongoose';

export default class DBconnection {
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
        const mongoose = MongoDB.connect('mongodb://admin:bronze10@ds111913.mlab.com:11913/pluscom', {useNewUrlParser: true});
        mongoose.then(() => {
            console.info('Connect to mongoDB success!');
            // return mongoose;
        }).catch(() => {
            console.error.bind(console, 'connection error:')
        });
    }
}