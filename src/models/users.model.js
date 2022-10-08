const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({

    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isActive:{
        type: Boolean,
        default: true
    }

}, {
    versionKey: false,
    timestamps: true
});


module.exports = model('users', userSchema);