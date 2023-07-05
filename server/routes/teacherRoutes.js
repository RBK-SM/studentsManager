const express = require('express');
const router = express.Router();

const { getAllTeachers,getOneTeachers,insertTeacher,updateTeacher, deleteTeacher} = require('../controllers/teacherController');

router.get('/', getAllTeachers);
router.get('/:name', getOneTeachers);
router.post('/insert', insertTeacher);
router.put('/:idteacher', updateTeacher);
router.delete('/:idteacher', deleteTeacher);


module.exports = router;