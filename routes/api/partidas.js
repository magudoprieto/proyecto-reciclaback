var express = require('express');
var router = express.Router();
let partidaModel = require('../../models/partida');

router.get('/:tipo',(req,res)=>{
    partidaModel.getAll((err,rows) =>{
        console.log(err);
        if (req.params.tipo === 'html') {
            res.render('partidas/main',{
                arrPartidas: rows
            })
        } else {
            res.json(rows)
        }
    });
});

router.post('/enter',(req,res)=>{
    partidaModel.insert(req.body,(err,result)=>{
        console.log(req.body);
    });
});

module.exports = router;