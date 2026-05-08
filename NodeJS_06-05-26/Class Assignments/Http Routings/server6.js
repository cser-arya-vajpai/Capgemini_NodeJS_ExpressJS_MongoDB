
//! EXAMPLE 6:--CREATING A BASIC SERVER HTTP ROUTING

//Import HTTP module
const http=require('http')

//Create the server
const server=http.createServer(
    (req,res)=>{
        //Define Home page in plain Text
        if(req.url==="/" && req.method==="GET"){
        res.writeHead(200,{
            "context-type":"text/plain"
        })

        //Send response to browser
        res.end("This is Home Page")
        }
        else if(req.url==="/about" && req.method==="GET"){
            //Send HTML RESPONSE
            res.writeHead(201,{
            "context-type":"text/html"
        })
        res.write("<h1>This is About Page</h1>")
        //Send response to browser
        res.end()
        }
        else if (req.url==="/api/marvel" && req.method==="GET"){
            const superHero={
            name:"Iron Man",
            power:"Technology"
        }

        //Set header with status code
        res.writeHead(200,{
            "content-type":"text/json"
        })

        

        //CLose server after converting that json to string-->JSON.stringify
        res.end(JSON.stringify(superHero))
        }
        else{
            res.writeHead(404,{
                "content-type":"text/plain"
            })
            res.end("404 Page Not Found")
        }


    }
)

//Listen to the server
server.listen(3000,(err)=>{
    if (err) throw err
    console.log("server running at http://localhost:3000");
    
})