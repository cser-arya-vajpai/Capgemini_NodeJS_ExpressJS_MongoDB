console.log("hii");

const fs=require('fs')

//read the file asynchronously
const readableStream=fs.createReadStream(__dirname)
console.log(__dirname);
console.log(__filename);


//I/O Queue
readableStream.close()
readableStream.on("close",
    ()=>{
        console.log("This is from readableStream  close event callbacks");
        
    }
)
//Promise
Promise.resolve().then(
    ()=>{
        console.log("This is promise ");
        
    }
)

//Timer Queue
setTimeout(() => {
    console.log("set timeout queue 1");
}, 0);

//Check queue
setImmediate(
    ()=>{
        console.log("This is setImmediate");
        
    }
)

//nextTick()
process.nextTick(
    ()=>{
        console.log("This is nextTick ");
        
    }
)