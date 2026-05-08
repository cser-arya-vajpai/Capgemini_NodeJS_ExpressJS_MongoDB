//?EXAMPLE 3:--SEND COMPLETE HTML RESPONSE

const http = require("http");

const server = http.createServer((req, res) => {
  //Set header with HTML
  res.setHeader("content-type", "text/html");
  //Set status code
  res.statusCode = 200;

  //Set Status message
  res.statusMessage = "success";

  //Send data to client
  res.write(`
                

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <h1 style="color: rgb(32, 49, 233);">Register For the Hirings</h1>
    <form >
        <label >Email:</label>
        <input type="text" /> <br><br>
        <label >Password:</label>
        <input type="text" /> <br> <br>
        <button>Submit</button>
        <hr>
    </form>
</body>
</html>
            `);

  //CLose server
  res.end();
});

//Listen to the server
server.listen(3000, (err) => {
  if (err) throw err;
  console.log("server running at http://localhost:3000");
});