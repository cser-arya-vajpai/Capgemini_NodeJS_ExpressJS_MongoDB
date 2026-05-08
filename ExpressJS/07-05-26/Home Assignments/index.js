const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./routings");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});