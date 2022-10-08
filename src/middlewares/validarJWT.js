const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

const validarJWT = async (req, res, next)=>{

    const token = req.headers['token'];

    if(!token){
        return res.status(404).json({
            msg: 'Token no recibido'
        })
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRET);

        const user = await User.findById(uid);

        if(!user){
            res.status(404).json({
                msg: 'Usuario no encontrado'
            })
        }

        if(!user.isActive){
            return res.status(401).json({
                msg: 'Token no valido'
            })
        }

        req.user = user

        next()

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Error de autenticación'
        })
    }
}

module.exports = validarJWT;