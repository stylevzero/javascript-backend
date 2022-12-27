const express = require('express');
let TasksController = require('../controllers/tasks');

let router = express.Router();


// GET y POST de tasks
router.route('/tasks').get(function(req, res){
    res.send('Hello desde una subruta');
}).post(TasksController.create);

/* 
router.route('/tasks').get(function(req, res){
    res.send('Hello desde una subruta');
}).post(function(req, res){

});

*/

module.exports = router;