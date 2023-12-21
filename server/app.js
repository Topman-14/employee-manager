require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();
// Define your routes here

app.use(express.json());

const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

app.use('/staff', employeeRoutes);
app.use('/departments', departmentRoutes);
app.get('/', (req, res) => {
  res.json({'messg': 'Welcome to my New horizon CRUD app API, please use the /staff and /departments routes to access the data'});
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
