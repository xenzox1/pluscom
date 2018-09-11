import express from 'express';
import session from 'express-session';
import https from 'https';
import fs from 'fs';
import clientRouter from './src/client/index';
import serverRouter from './src/server/index';
import Io from "./src/server/socket/Socket";
import config from "./src/server/sessionConfig";

const chavePrivada = fs.readFileSync('https/localhost+2-key.pem', 'utf8');
const certificado = fs.readFileSync('https/localhost+2.pem', 'utf8');
const credentials = {key: chavePrivada, cert: certificado};

const app = express();
const server = https.Server(credentials, app);

//Sessions
app.use(session(config));

//Socket.io
new Io(server);

app.use(serverRouter);
app.use(clientRouter);

server.listen(4000, () => console.log('Example app listening on port 4000!'));