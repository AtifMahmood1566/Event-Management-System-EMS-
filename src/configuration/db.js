const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Connection error', error));

module.exports = mongoose;