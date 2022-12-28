const express = require('express');
let TasksController = require('../controllers/tasks');

let router = express.Router();

// GET y POST de tasks
router.route('/tasks').get(TasksController.index).post(TasksController.create);

// Usamos Get -> mostramos solo una vista
router.get('/tasks/new', TasksController.new);

router.route('/tasks/:id').get(TasksController.show).put(TasksController.update);

module.exports = router;