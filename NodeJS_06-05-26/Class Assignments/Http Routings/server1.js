
//!============CREATING A SERVER========
//?Creating a server in Nodejs is way of writing a program that listens for client requests,process them and send back responses using HTTP rules.
//createServer()-->is used to create the server

//! EXAMPLE 1:--CREATING A BASIC SERVER

//Import HTTP module
const http=require('http')

// console.log(http); //to see all methods

//Create the server
const server=http.createServer(
    (req,res)=>{
        //Send response to browser
        res.write("Basic server created")
        //End the response
        res.end()
    }
)

//Listen to the server
server.listen(3000,(err)=>{
    if (err) throw err
    console.log("server running at http://localhost:3000");
    
})