const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nour',
  password : "piratPG12", //password
  database : 'studentmanager' //database name
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = connection;