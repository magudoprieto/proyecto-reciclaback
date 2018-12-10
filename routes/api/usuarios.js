var express = require('express');
var router = express.Router();
let usuarioModel = require('../../models/usuario');

router.get('/',(req,res)=>{
    usuarioModel.getAll((err,rows) =>{
        console.log(err);
        res.render('usuarios/main',{
            arrUsuarios: rows
        })
    });
});

module.exports = router;