import socket from 'socket.io';
import Actions from './Actions.js';

export default class Io {
    constructor(server) {
        this.io = socket(server);
        this.app();
    }

    app() {
        const io = this.io;
        io.on('connection', client => {
            const a = Actions(io);
            a.map(snap => {
                client.on(snap.hook, snap.cb)
            });
        });
    }
}

