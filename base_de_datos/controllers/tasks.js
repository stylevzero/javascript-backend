// Importamos el modelo
const Task = require('../models').Task;

module.exports = {
    index: function(req, res){
        Task.findAll().then((tasks) => {
            res.render('tasks/index', { tasks: tasks})
        })
    },
    show: function(req, res){
        //res.send(req.params)
        
        // Method findById is deprecated, replace findByPk
        //Task.findById(req.params.id).then(function(task){
        Task.findByPk(req.params.id).then(function(task){
            //res.json(task);
            res.render('tasks/show', {task: task});
            //res.render('tasks/show', {task}); // Shorthand Properties
        })
    },
    edit: function(req, res){
        Task.findByPk(req.params.id).then(function(task){
            //res.json(task);
            res.render('tasks/edit', {task: task});
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
    update: function(req, res){
        Task.update({descripcion: req.body.descripcion},{
            where: {
                id: req.params.id
            }
        }).then(function(response){
            res.json(response);
            //res.redirect('/tasks/'+req.params.id);
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