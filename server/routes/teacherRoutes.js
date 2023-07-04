const express = require('express');
const router = express.Router();

const { getAllTeachers,insertTeacher,updateTeacher, deleteTeacher} = require('../controllers/teacherController');

router.get('/', getAllTeachers);
router.post('/insert', insertTeacher);
router.put('/:idteacher', updateTeacher);
router.delete('/:idteacher', deleteTeacher);


module.exports = router;