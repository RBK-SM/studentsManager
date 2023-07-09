const express = require('express');
const router = express.Router();
const verifyToken=require("../middleware/verify.js");


const {getAllTeachers,getOneTeachers,insertTeacher,updateTeacher, deleteTeacher,registerTeacher,loginTeacher} = require('../controllers/teacherController');


router.get('/', getAllTeachers);
router.get('/:name', getOneTeachers);
router.post('/insert', insertTeacher);
router.put('/:idteacher',verifyToken,updateTeacher );
router.delete('/:idteacher',verifyToken,deleteTeacher);
router.post("/register", registerTeacher);
router.post("/login",loginTeacher);

module.exports = router;