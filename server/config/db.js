
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;

const connectDB = () => mongoose.connect(url)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});

module.exports = connectDB;
