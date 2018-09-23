import express from 'express';
import session from 'express-session';
import http from 'http';
import https from 'https';
import fs from 'fs';
import clientRouter from './client/index';
import serverRouter from './server/index';
import Io from "./server/socket/Socket";
import config from "./server/sessionConfig";

const app = express();
let server;

if(process.env.NODE_ENV === "production"){
    server = http.Server(app);
} else {
    const chavePrivada = fs.readFileSync('./src/https/localhost+2-key.pem', 'utf8');
    const certificado = fs.readFileSync('./src/https/localhost+2.pem', 'utf8');
    const credentials = {key: chavePrivada, cert: certificado};
    server = https.Server(credentials, app);
}

app.use(session(config));

new Io(server);

app.use(serverRouter);
app.use(clientRouter);

server.listen(process.env.PORT || 4000, () => console.log('Example app listening on port 4000!'));