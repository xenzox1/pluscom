'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _TodoController = require('../controllers/TodoController');

var _TodoController2 = _interopRequireDefault(_TodoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = new _TodoController2.default();
var router = _express2.default.Router();

router.route('/:taskId').get(Todo.selectOne()).put(Todo.updateOne()).delete(Todo.deleteOne());

router.route('/').get(Todo.selectAll()).post(Todo.createOne());

exports.default = router;
//# sourceMappingURL=TodoRouter.js.map