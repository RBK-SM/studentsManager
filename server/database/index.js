const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : "", //password
  database : '' //database name
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = connection;