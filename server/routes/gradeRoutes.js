const express = require('express');
const router = express.Router();

const {getAllGrades,getOneGrades,insertGrades,updateGrades,deleteGrades } = require('../controllers/gardeController');

router.get('/', getAllGrades);
router.get('/:subject', getOneGrades);
router.post('/insert/:students_idstudents', insertGrades);
router.put('/:idgrades/:students_idstudents', updateGrades);
router.delete('/:idgrades', deleteGrades);


module.exports = router;