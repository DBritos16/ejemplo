//Importacion de librerias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./database/connect');
require('dotenv').config();

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

connectDB();

//rutas
app.use(require('./routes/auth.routes'));
app.use(require('./routes/task.routes'));


//Puerto
app.listen(3000, (err)=>(err)?console.log('Error al inciar servidor:' + err):console.log('servidor corriendo en el puerto: 3000'))
