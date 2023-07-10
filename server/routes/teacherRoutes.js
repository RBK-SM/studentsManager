const express = require('express');
const router = express.Router();
//const verifyToken=require("../middleware/verify.js");


const {getAllTeachers,getOneTeachers,updateTeacher,insertTeacher, deleteTeacher} = require('../controllers/teacherController');


router.get('/', getAllTeachers);
router.get('/:name', getOneTeachers);
//
 router.post('/insert', insertTeacher);
 //
router.put('/:idteacher',updateTeacher );
router.delete('/:idteacher',deleteTeacher);
// router.post("/register", registerTeacher);
// router.post("/login",loginTeacher);

module.exports = router;