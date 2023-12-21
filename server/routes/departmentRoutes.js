const {
    getDepartments,
    createDepartment,
    updateDepartment,
    getDepartment,
    deleteDepartment,
} = require('../controllers/departmentController');

const express = require('express');
const router = express.Router();


router.get('/', getDepartments);
router.post('/', createDepartment);
router.get('/:id', getDepartment);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

module.exports = router;
