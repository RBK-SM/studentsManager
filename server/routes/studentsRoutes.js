const express = require('express');
const router = express.Router();

const { getAllStudents,getOneStudents,insertStudents,updateStudents, deleteStudents} = require('../controllers/stundentController');

router.get('/', getAllStudents);
router.get('/:name', getOneStudents);
router.post('/insert', insertStudents);
router.put('/:idstudents', updateStudents);
router.delete('/:idstudents', deleteStudents);


module.exports = router;