const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dhia',
  password : "@Dhia12345@*", //password
  database : 'studentmanager' //database name
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected to the database successfully!');
  }});


module.exports = connection;