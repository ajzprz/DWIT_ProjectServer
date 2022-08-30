const mongoose = require('mongoose');

const connectDatabase = async () =>{
    try{
        const mongodbURI = "mongodb://localhost:27017/travel_log"
        // const mongodbURI = "mongodb+srv://ajzprz:Imlonly0000@travellog.ladoxvn.mongodb.net/?retryWrites=true&w=majority"
            mongoose.connect(mongodbURI ,{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            })
        console.log("Database Connected Successfully")
    }catch(err){
        console.error('Database connection failed'+ err)
    }
}

module.exports = connectDatabase;