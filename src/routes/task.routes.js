const router = require('express').Router();
const validarJWT = require('../middlewares/validarJWT');
const {getTask, postTask, putTask} = require('../controllers/task.controllers');

router.get('/task', validarJWT, getTask);

router.post('/task', validarJWT, postTask);

router.put('/task/:id', validarJWT, putTask);

router.delete('/task');

module.exports = router;