import express from 'express';
import clientRouter from './src/client/index';
import serverRouter from './src/server/index';

const app = express();

app.use(serverRouter);
app.use(clientRouter);

app.listen(4000, () => console.log('Example app listening on port 4000!'));