const Task = require('../models/task.models');
const ctrl = {};

ctrl.getTask = async (req, res)=>{
    const {_id} = req.user

    if(!_id){
        return res.status(400).json({
            msg: 'ID no recibida'
        })
    }

    const getTask = await Task.find({userId: _id});

    res.json(getTask);

}

ctrl.postTask = async (req, res)=>{

    const {tittle, description} = req.body;
    
    const newTask = new Task({
        tittle, description, userId: req.user._id
    });

    await newTask.save();

    res.json('tarea creada con exito')


}




module.exports = ctrl;