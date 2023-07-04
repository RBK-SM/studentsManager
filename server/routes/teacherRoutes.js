const express = require('express');
const router = express.Router();

const { getAllTeachers,insertTeacher,updateTeacher, deleteTeacher,registerTeacher,loginTeacher} = require('../controllers/teacherController');

router.get('/', getAllTeachers);
router.post('/insert', insertTeacher);
router.put('/:idteacher', updateTeacher);
router.delete('/:idteacher', deleteTeacher);
router.post("/register", registerTeacher);
router.post("/login", loginTeacher);

module.exports = router;