var express = require('express');
var router = express.Router();
let usuarioModel = require('../../models/usuario');

router.get('/:tipo',(req,res)=>{
    usuarioModel.getAll((err,rows) =>{
        console.log(err);
        if (req.params.tipo === 'html') {
            res.render('usuarios/main',{
                arrUsuarios: rows
            })
        } else {
            res.json(rows)
        }
    });
});
//aqui recogemos los datos que hemos enviado desde la parte front de angular
router.post('/json',(req,res)=>{
    console.log(req.body);
    usuarioModel.insert(req.body,(err,result)=>{
        console.log(result);
        if(err) return res.json({error: err.message})
    });
   
});

//aqui vamos a recoger los datos con los que el usuario ha intentado loguearse
router.post('/json',(req,res)=>{
    console.log(req.body);
    usuarioModel.checkLogin(req.body,(err,result)=>{
        if(err) return res.json({error: err.message})
        console.log(result);
    });
});

module.exports = router;