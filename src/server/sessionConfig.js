import session from "express-session";
import pk from "./pk";

const MongoDBStore = require('connect-mongodb-session')(session);

let mongoURL = null;

if(process.env.NODE_ENV === "production"){
    mongoURL = 'mongodb://admin:bronze10@ds111913.mlab.com:11913/pluscom';
} else {
    mongoURL = 'mongodb://localhost:27017/pluscom';
}

const sessionConfig = new MongoDBStore({
    uri: mongoURL,
    collection: 'sessions'
});

sessionConfig.on('connected', function () {
    console.log('Sessões conectadas com o BD');
});

sessionConfig.on('error', function (error) {
    assert.ifError(error);
    assert.ok(false);
});

const config = {
    secret: pk.pk,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 semana
    },
    store: sessionConfig,
    resave: true,
    saveUninitialized: true
};

export default config;