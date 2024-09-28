
const mongoose = require('mongoose');

const database = async () => {
  try {
    const con = await mongoose.connect(
      'mongodb+srv://alfiyanajqureshi:7ePi1ZotqUwNsVhc@cluster0.yeq0i.mongodb.net/testtb?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log("MongoDB connected");
  } catch (er) {
    console.error(er); // Use 'er' instead of 'error'
    process.exit(1);
  }
};

module.exports = database;

