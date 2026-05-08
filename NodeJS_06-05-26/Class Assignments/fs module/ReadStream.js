const fs = require('fs')
const readable = fs.createReadStream("./data.txt")

readable.on("data",(chunk)=>{
    console.log(chunk.toString());
})

// readable.on("error",(error)={
//     console.log("error occured", error.message)
// })

readable.on("error",(error)=>{
    console.log("error occurred",error.message);
})

readable.on("end",()=>{
    console.log("data reading is completed");
})