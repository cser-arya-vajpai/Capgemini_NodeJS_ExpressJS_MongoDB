const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
    if(!process.env.MONGODB_URL){
        console.err("Database Connection URL not provided");
        process.exit(1);
    }
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
    
}catch(err){
    console.log(err);
    process.exit(1);
}
}

module.exports = connectDB