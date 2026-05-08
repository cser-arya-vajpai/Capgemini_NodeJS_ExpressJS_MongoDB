
//!===============JSON API RESPONSE=============
//API IS THE MIDDLEWARE WHERE THE COMMUNICATION ESTABLISH BETWEEN FRONTEND,BACKEND
//Server behaves like an API returning JSON

//?EXAMPLE 5:--SEND JSON  WITH HTTP HEADERS

const http=require('http')

const server=http.createServer(
    (req,res)=>{
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
)

//Listen to the server
server.listen(3000,(err)=>{
    if (err) throw err
    console.log("server running at http://localhost:3000");
    }
)