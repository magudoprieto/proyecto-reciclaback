const db = require('../db');

//con esta forma exportamos una variable igualada a una fucnion

exports.getAll = (done) =>{
db.get().query('SELECT 	u.username,g.nombre,j.puntuacion,j.fecha FROM usuarios as u,juegan as j,juegos as g WHERE j.fk_juegos=g.id;',(err,rows)=>{
    if(err) return done(err)
    done(null,rows);
    });
};