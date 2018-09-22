'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _Actions = require('./Actions.js');

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Io = function () {
    function Io(server) {
        _classCallCheck(this, Io);

        this.io = (0, _socket2.default)(server);
        this.app();
    }

    _createClass(Io, [{
        key: 'app',
        value: function app() {
            var io = this.io;
            io.on('connection', function (client) {
                var a = (0, _Actions2.default)(io);
                a.map(function (snap) {
                    client.on(snap.hook, snap.cb);
                });
            });
        }
    }]);

    return Io;
}();

exports.default = Io;
//# sourceMappingURL=Socket.js.map