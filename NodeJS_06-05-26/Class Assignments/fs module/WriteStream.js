const fs = require('fs')
const writable = fs.createWriteStream("./message.txt")

writable.write("hellodata",(err)=>{
    if (err) throw err
    console.log("file is overrriden");
})

//R&D highwatermark--size 20