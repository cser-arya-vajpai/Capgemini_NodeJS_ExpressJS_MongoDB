const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URL || !process.env.PORT) {
      console.log("MONGODB_URL and PORT are required");
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