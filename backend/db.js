var mysql= require ('mysql');
const dotenv = require('dotenv');
dotenv.config({path:"./environments/.env"});

 console.log("Db Name: ",process.env.database);
    conn = mysql.createConnection({
        host: process.env.host,  
        database: process.env.database,
        user: process.env.user,
        password: process.env.password,
    });


    


    module.exports ={
        conn: conn,
    } 
    