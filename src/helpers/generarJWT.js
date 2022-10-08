const jwt = require('jsonwebtoken');
const { token } = require('morgan');

const generarJWT = (uid)=>{
    return new Promise((resolve, reject) => {

        jwt.sign(uid, process.env.SECRET, {
            expiresIn: '1h'
        }, (err, token) =>{
            if(err){
                reject('No se pudo generar el token');
            }
            resolve(token);
        })
    })
}

module.exports = generarJWT;