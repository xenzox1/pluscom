"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _pk = require("./pk");

var _pk2 = _interopRequireDefault(_pk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoDBStore = require('connect-mongodb-session')(_expressSession2.default);

var sessionConfig = new MongoDBStore({
    uri: 'mongodb://admin:bronze10@ds111913.mlab.com:11913/pluscom',
    collection: 'sessions'
});

sessionConfig.on('connected', function () {
    console.log('Sessões conectadas com o BD');
});

sessionConfig.on('error', function (error) {
    assert.ifError(error);
    assert.ok(false);
});

var config = {
    secret: _pk2.default.pk,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 semana
    },
    store: sessionConfig,
    resave: true,
    saveUninitialized: true
};

exports.default = config;
//# sourceMappingURL=sessionConfig.js.map