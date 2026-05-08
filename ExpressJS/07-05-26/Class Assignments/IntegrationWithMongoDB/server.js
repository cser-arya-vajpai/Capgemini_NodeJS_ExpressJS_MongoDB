const express = require("express");
const mongodb = require("mongodb").MongoClient;

const path = require("path");
// console.log(path);

// console.log(__dirname);
// console.log(__filename);
const app = express();
// mongodb://127.0.0.1:27017
// mongodb://localhost:27017

let url = "mongodb://localhost:27017";
let db = "";
let connectDb = async () => {
  let client = await mongodb.connect(url);
  db = await client.db("jecrc");
  //   console.log(db);
  console.log("jecrc Db is connected successfully");
  await db.createCollection("users");
  console.log("users collection created");
};

connectDb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Express with Mongodb Integration</h1>");
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

//sendFile

app.post("/register", async (req, res) => {
  let data = req.body;

  console.log(data);

  await db.collection("users").insertOne(data);

  res.status(200).send({
    message: "User Registered Successfully",
    data,
  });
});

app.get("/users", async (req, res) => {
  let users = await db.collection("users").find().toArray();

  res.send(users);
});

app.get("/users/:email", async (req, res) => {
  let email = req.params.email;

  let user = await db.collection("users").findOne({
    email: email,
  });

  res.send(user);
});

app.put("/users", async (req, res) => {
  let email = req.body.email;

  let newData = req.body;

  let result = await db.collection("users").updateOne(
    { email: email },
    {
      $set: newData,
    },
  );

  res.send({
    message: "User Updated Successfully",
    result,
  });
});

app.patch("/users", async (req, res) => {
  let email = req.body.email;

  let updates = req.body;

  let result = await db.collection("users").updateOne(
    { email: email },
    {
      $set: updates,
    },
  );

  res.send({
    message: "User Updated Successfully",
    result,
  });
});

app.delete("/users", async (req, res) => {
  let email = req.body.email;

  let result = await db.collection("users").deleteOne({
    email: email,
  });

  res.send({
    message: "User Deleted Successfully",
    result,
  });
});

app.get("/allusers", async (req, res) => {
  let users = await db.collection("users").find().toArray();

  res.send(users);
});

//Error handling custom----middleware
app.use((req, res) => {
  res.status(404).send("Error occured");
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("server runnning at http://localhost:3000");
});