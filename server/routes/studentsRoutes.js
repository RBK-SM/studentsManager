const express = require('express');
const router = express.Router();

const { getAllStudents,insertStudents,updateStudents, deleteStudents} = require('../controllers/stundentController');

router.get('/', getAllStudents);
router.post('/insert/:teachers_idteacher', insertStudents);
router.put('/:idstudents/:teachers_idteacher', updateStudents);
router.delete('/:idstudents', deleteStudents);


module.exports = router;