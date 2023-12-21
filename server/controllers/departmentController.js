const Department = require('../models/department');

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDepartment = async (req, res) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDepartment = async ({ params: { id } }, res) => {
  try {
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDepartment = async ({ params: { id }, body }, res) => {
  try {
    const department = await Department.findByIdAndUpdate(id, body, { new: true });
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDepartment = async ({ params: { id } }, res) => {
  try {
    const department = await Department.findByIdAndDelete(id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDepartments,
  createDepartment,
  getDepartment,
  updateDepartment,
  deleteDepartment,
};
