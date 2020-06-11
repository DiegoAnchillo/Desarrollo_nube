var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'plutondb.ckwobjyftcb5.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'tecsup123',
    database:'academico',
    port:'3306'
});
connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Conectado!');
    }
});

module.exports = connection;