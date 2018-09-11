import session from "express-session";
import pk from "./pk";

const MongoDBStore = require('connect-mongodb-session')(session);

const sessionConfig = new MongoDBStore({
    uri: 'mongodb://localhost:27017/pluscom',
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