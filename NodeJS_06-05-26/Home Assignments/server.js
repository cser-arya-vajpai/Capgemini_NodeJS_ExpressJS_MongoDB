const http = require("http");
const { MongoClient } = require("mongodb");

const MONGO_URI = "mongodb://127.0.0.1:27017";
const DB_NAME = "nodeAssignment";
const COLLECTION_NAME = "users";

let collection;

// Parse request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error("Invalid JSON"));
      }
    });

    req.on("error", reject);
  });
}

// Send JSON response
function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data, null, 2));
}

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  const parts = url.split("/");
  const id = Number(parts[2]);

  try {
    // Home Route
    if (url === "/" && method === "GET") {
      return sendResponse(res, 200, {
        message: "Welcome to Node.js CRUD API",
      });
    }

    // GET All Users
    if (url === "/users" && method === "GET") {
      const users = await collection.find({}).toArray();

      return sendResponse(res, 200, {
        success: true,
        users,
      });
    }

    // GET Single User
    if (parts[1] === "users" && method === "GET" && id) {
      const user = await collection.findOne({ id: id });

      if (!user) {
        return sendResponse(res, 404, {
          success: false,
          message: "User not found",
        });
      }

      return sendResponse(res, 200, {
        success: true,
        user,
      });
    }

    // POST User
    if (url === "/users" && method === "POST") {
      const body = await parseBody(req);

      const lastUser = await collection
        .find({})
        .sort({ id: -1 })
        .limit(1)
        .toArray();

      const newId = lastUser.length > 0 ? lastUser[0].id + 1 : 1;

      body.id = newId;

      await collection.insertOne(body);

      return sendResponse(res, 201, {
        success: true,
        message: "User added successfully",
        user: body,
      });
    }

    // PUT User
    if (parts[1] === "users" && method === "PUT" && id) {
      const body = await parseBody(req);

      body.id = id;

      const result = await collection.replaceOne({ id: id }, body);

      if (result.matchedCount === 0) {
        return sendResponse(res, 404, {
          success: false,
          message: "User not found",
        });
      }

      return sendResponse(res, 200, {
        success: true,
        message: "User replaced successfully",
      });
    }

    // PATCH User
    if (parts[1] === "users" && method === "PATCH" && id) {
      const body = await parseBody(req);

      const result = await collection.updateOne({ id: id }, { $set: body });

      if (result.matchedCount === 0) {
        return sendResponse(res, 404, {
          success: false,
          message: "User not found",
        });
      }

      return sendResponse(res, 200, {
        success: true,
        message: "User updated successfully",
      });
    }

    // DELETE User
    if (parts[1] === "users" && method === "DELETE" && id) {
      const result = await collection.deleteOne({ id: id });

      if (result.deletedCount === 0) {
        return sendResponse(res, 404, {
          success: false,
          message: "User not found",
        });
      }

      return sendResponse(res, 200, {
        success: true,
        message: "User deleted successfully",
      });
    }

    // Invalid Route
    sendResponse(res, 404, {
      success: false,
      message: "Route not found",
    });
  } catch (err) {
    sendResponse(res, 500, {
      success: false,
      error: err.message,
    });
  }
});

// Connect MongoDB and Start Server
async function startServer() {
  try {
    const client = new MongoClient(MONGO_URI);

    await client.connect();

    console.log("MongoDB Connected");

    const db = client.db(DB_NAME);

    collection = db.collection(COLLECTION_NAME);

    server.listen(3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  } catch (err) {
    console.log(err.message);
  }
}

startServer();
