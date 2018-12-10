var express = require('express');
var router = express.Router();
let partidaModel = require('../../models/partida');

router.get('/',(req,res)=>{
    partidaModel.getAll((err,rows) =>{
        console.log(err);
        res.render('partidas/main',{
            arrPartidas: rows
        })
    });
});

module.exports = router;