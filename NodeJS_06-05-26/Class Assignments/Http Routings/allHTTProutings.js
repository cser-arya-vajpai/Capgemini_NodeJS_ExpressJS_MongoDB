const http = require("http");

let users = [
    { id: 1, name: "Dhoni" },
    { id: 2, name: "Kohli" }
];

const server = http.createServer((req, res) => {


    if (req.url === "/users" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users));
    }


    else if (req.url === "/users" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const newUser = JSON.parse(body);

            users.push(newUser);

            res.writeHead(201, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "User Added Successfully",
                users
            }));
        });
    }


    else if (req.url === "/users" && req.method === "PUT") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const updatedUser = JSON.parse(body);

            users = users.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "User Updated Successfully",
                users
            }));
        });
    }


    else if (req.url === "/users" && req.method === "DELETE") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const deleteData = JSON.parse(body);

            users = users.filter(
                (user) => user.id !== deleteData.id
            );

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "User Deleted Successfully",
                users
            }));
        });
    }

    else if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to Basic Node.js CRUD Server");
    }


    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 Page Not Found");
    }
});

// Listen Server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});