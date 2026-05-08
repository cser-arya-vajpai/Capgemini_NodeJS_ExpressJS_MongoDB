const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server is live!");
});

app.get("/html", (req, res) => {
  res.send("<h1>Welcome to the HTML page!</h1>");
});

app.get("/json", (req, res) => {
  res.json({
    message: "This is a JSON response",
  });
});

app.get("/array", (req, res) => {
  res.json([1, 2, 3, 4, 5]);
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on http://localhost:${port}`);
});