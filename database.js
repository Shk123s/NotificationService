const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://shaqeebsk1234:3hHFxs8LAq9Drnas@cluster0.au4cd8l.mongodb.net',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to database: ', error);
  }
};

module.exports = connectDB;
