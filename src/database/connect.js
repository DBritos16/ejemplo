const {connect} = require('mongoose');

const connectDB = ()=>{
    try {
        connect(process.env.MONGODB_URI).then(console.log('BD coneccted')).catch(err=>console.log(err))
    } catch (error) {
        return console.log({msg: err})
    }
}

module.exports = connectDB;