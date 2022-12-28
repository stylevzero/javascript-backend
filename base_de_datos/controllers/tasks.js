// Importamos el modelo
const Task = require('../models').Task;

module.exports = {
    index: function(req, res){
        Task.findAll().then((tasks) => {
            res.render('tasks/index', { tasks: tasks})
        })
    },
    create: function(req, res){
        Task.create({
            descripcion: req.body.descripcion
        }).then(result=>{
            res.json(result);
        }).catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
    new: function(req, res){
        res.render('tasks/new');
    }

    /*
    home: function(req, res) {

        Task.findAll().then(function(tasks){
            res.render('tasks/index', {tasks: tasks});
        });
    }
*/
};