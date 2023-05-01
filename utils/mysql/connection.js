const mysql = require('mysql2');
const mysqlConfig = require('../../config/appConfig.json').mysql;

const connection = mysql.createPool({
    host: mysqlConfig.host,
    user: mysqlConfig.username,
    database: mysqlConfig.database,
    port: mysqlConfig.port,
    password: mysqlConfig.password,
    connectTimeout : mysqlConfig.timeout
});
connection.getConnection((err, connection)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to mysql database")
    }
        
})
module.exports = connection;