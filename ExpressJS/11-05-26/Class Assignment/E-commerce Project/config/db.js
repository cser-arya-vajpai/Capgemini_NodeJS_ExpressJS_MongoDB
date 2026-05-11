const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    if (!process.env.MONGODB_URL) {
      console.log("MONGODB_URL is required");
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB Connected");

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;