const fs = require('fs')

//sync
// const data = fs.readFileSync("./data.txt")
// console.log(data);
//without encoding
// const data = fs.readFileSync("./data.txt", "utf-8")
// console.log(data);
// const data = fs.writeFileSync("./message.txt", "helloooo ji")

//async 
fs.readFile("./data.txt", (err, data) => {
    if (err) throw err
        console.log(data); 
})
// fs.writeFile("./message.txt", "hi there",(err)=>{
//     if (err) throw err
// })