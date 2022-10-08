const User = require("../models/users.model");
const bcrypt = require('bcrypt');
const generarJWT = require("../helpers/generarJWT");
const ctrl = {};


ctrl.register = async (req, res)=>{
    const {username, email, password} = req.body;

    const newPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: newPassword
    })

    const user = await newUser.save();

    return res.json({
        msg: 'Usuario creado correctamente',
        user
    })

}

ctrl.login = async (req, res)=>{
    const {username, password} = req.body;

    const user = await User.findOne({username})

    if(!user){
        return res.status(404).json({
            msg: 'Usuario no encontrado'
        })
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if(!passwordIsValid){
        return res.status(401).json({
            msg: 'Contraseña incorrecta'
        })
    }

    const token = await generarJWT({uid: user._id});

    res.json(token)

}


module.exports = ctrl;