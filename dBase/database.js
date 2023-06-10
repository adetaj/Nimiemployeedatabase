var mysql = require('mysql');
var conn = mysql.createConnection({
host: 'process.env.HOST', 
user: 'process.env.USERNAME',     
password: 'process.env.PASWORD', 
database: 'process.env.DATABASE' 
                     //process.env.DB_PORT
}); 
conn.connect(function(err) {
if (err) throw err;
console.log('Database is connected successfully !');
});
module.exports = conn;

