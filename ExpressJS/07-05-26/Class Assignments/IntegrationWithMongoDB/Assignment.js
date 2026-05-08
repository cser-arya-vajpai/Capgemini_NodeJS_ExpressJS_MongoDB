//create url where u can app.get("/Displayusers"),,,,not in json in the form inline html

const express = require("express");
const mongodb = require("mongodb").MongoClient;
const path = require("path");

const app = express();

let url = "mongodb://127.0.0.1:27017";

let db;

let connectDb = async () => {
  let client = await mongodb.connect(url);

  db = await client.db("jecrc");

  console.log("jecrc db connected successfully");

  await db.createCollection("users");
};

connectDb();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Express With MongoDB</h1>");
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

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

  let output = "";

  users.forEach((user) => {
    output += `
    
      <div>

        <p>${user.name}</p>

        <p>Email: ${user.email}</p>

        <p>Phone: ${user.phone}</p>

        <p>City: ${user.city}</p>

        <hr>

      </div>

    `;
  });

  res.send(output);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});