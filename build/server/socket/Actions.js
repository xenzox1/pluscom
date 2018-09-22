'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var a = function a(io) {
    return [{
        'hook': 'chat message',
        'cb': function cb(msg) {
            io.emit('chat message', msg);
        }
    }, {
        'hook': 'click',
        'cb': function cb(data) {
            console.log(data);
            io.emit('res', 'Entendido');
        }
    }];
};

exports.default = a;
//# sourceMappingURL=Actions.js.map