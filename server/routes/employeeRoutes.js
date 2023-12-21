const {
    getEmployees,
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
} = require('../controllers/employeeController');


const express = require('express');
const router = express.Router();

// GET all employees
router.get('/', getEmployees);

// POST create a new employee
router.post('/', createEmployee);

// GET a specific employee by ID
router.get('/:id', getEmployee);

// PUT update a specific employee by ID
router.put('/:id', updateEmployee);

// DELETE a specific employee by ID
router.delete('/:id', deleteEmployee);

module.exports = router;
