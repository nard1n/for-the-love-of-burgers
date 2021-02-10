//the code to connect Node to MySQL.
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {ç
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};


connection.connect((err) => {
    if(err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

//Export the connection for ORM
module.exports = connection; 