//Entry point of backend. 
//? 1. Loads environment variables
//? 2. Connects to mongoDB
//? 3. Starts the server

require("dotenv").config();

const app = require("./app");

const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});