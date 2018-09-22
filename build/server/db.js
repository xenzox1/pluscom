'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DBconnection = function () {
    function DBconnection() {
        _classCallCheck(this, DBconnection);
    }

    _createClass(DBconnection, [{
        key: 'mongoDB',
        value: function mongoDB() {
            var mongoose = _mongoose2.default.connect('mongodb://admin:bronze10@ds111913.mlab.com:11913/pluscom', { useNewUrlParser: true });
            mongoose.then(function () {
                console.info('Connect to mongoDB success!');
                // return mongoose;
            }).catch(function () {
                console.error.bind(console, 'connection error:');
            });
        }
    }], [{
        key: 'mysql',
        value: function mysql() {
            var connection = _mysql2.default.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'pluscom'
            });

            return connection.connect();
        }
    }]);

    return DBconnection;
}();

exports.default = DBconnection;
//# sourceMappingURL=db.js.map