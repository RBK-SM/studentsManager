/*  
 Before running server :
 1/ fill in your information in the index of the database
 2/ run the schema in the mysQL Workbench 
*/

const express = require("express");
const app = express();
const cors = require('cors')
const PORT =5000

//Require application Route modules
const teacherRoute = require('./routes/teacherRoutes');
// const studentsRoute = require('./routes/studentsRoutes');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api/SM/teachers', teacherRoute);
// app.use('/api/SM/students', studentsRoute);


app.listen(PORT, function () {
    console.log("listening on port 3000!");
  });
  