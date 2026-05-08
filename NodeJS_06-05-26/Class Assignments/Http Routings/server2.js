
//!====TEXT RESPONSE+CONTENT TYPE+STATUS CODE==

//?EXAMPLE 2:--SEND PLAIN TEXT WITH HTTP HEADERS

const http=require('http')

const server=http.createServer(
    (req,res)=>{
        //Set header
        res.setHeader(
            "content-type","text/plain"
        
        )
        //Set status code
        res.statusCode=200

        //Set Status message
        res.statusMessage="success"

        //Send data to client
        res.write("This is server ")

        //CLose server
        res.end()
    }
)

//Listen to the server
server.listen(3000,(err)=>{
    if (err) throw err
    console.log("server running at http://localhost:3000");
    }
)