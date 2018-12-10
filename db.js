const mysql = require('mysql');

let pool = null;

exports.connect = (done) => {
    pool=mysql.createPool({
        host:'localhost',
        user:'root',
        password:'root',
        database: 'proyecto_recicla',
        port:8889
    })
    if(pool !== null){
        done(null);
    } else{
        done('No se ha podido conectar');
    }
   
}



exports.get = () =>{
    return pool;
}