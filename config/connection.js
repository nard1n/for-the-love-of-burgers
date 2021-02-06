//the code to connect Node to MySQL.
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to mysql!');
});

module.export = connection; //Export the connection.