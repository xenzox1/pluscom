'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _index = require('./client/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./server/index');

var _index4 = _interopRequireDefault(_index3);

var _Socket = require('./server/socket/Socket');

var _Socket2 = _interopRequireDefault(_Socket);

var _sessionConfig = require('./server/sessionConfig');

var _sessionConfig2 = _interopRequireDefault(_sessionConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const chavePrivada = fs.readFileSync('../https/localhost+2-key.pem', 'utf8');
// const certificado = fs.readFileSync('../https/localhost+2.pem', 'utf8');
// const credentials = {key: chavePrivada, cert: certificado};

// import https from 'https';
// import fs from 'fs';
var app = (0, _express2.default)();
// const server = https.Server(credentials, app);
var server = _http2.default.Server(app);

//Sessions
app.use((0, _expressSession2.default)(_sessionConfig2.default));

//Socket.io
new _Socket2.default(server);

app.use(_index4.default);
app.use(_index2.default);

server.listen(process.env.PORT || 4000, function () {
  return console.log('Example app listening on port 4000!');
});
//# sourceMappingURL=server.js.map