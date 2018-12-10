const db = require('../db');

//con esta forma exportamos una variable igualada a una fucnion

exports.getAll = (done) =>{
db.get().query('SELECT * FROM usuarios',(err,rows)=>{
    if(err) return done(err)
    done(null,rows);
    });
};