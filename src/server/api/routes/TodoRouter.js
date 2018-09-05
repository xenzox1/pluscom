import express from 'express';
import TodoController from "../controllers/TodoController";

const Todo = new TodoController();
const router = express.Router();

router.route('/:taskId')
    .get(Todo.selectOne())
    .put(Todo.updateOne())
    .delete(Todo.deleteOne());

router.route('/')
    .get(Todo.selectAll())
    .post(Todo.createOne());

export default router;