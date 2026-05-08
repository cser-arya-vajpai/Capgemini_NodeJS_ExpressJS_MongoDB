

//?EXAMPLE 3:--SEND HTML RESPONSE


const http=require('http')

const server=http.createServer(
    (req,res)=>{
        //Set header with HTML
        res.setHeader(
            "content-type","text/html"
        
        )
        //Set status code
        res.statusCode=200

        //Set Status message
        res.statusMessage="success"

        //Send data to client
        res.write("<h1>This is server</h1> ")

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