var express = require('express');
var router = express.Router();

const usuariosApiRouter = require('./api/usuarios');
router.use('/usuarios',usuariosApiRouter);


module.exports = router;