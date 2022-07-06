const mongoose = require('mongoose');

const connectDatabase = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/travel_log")
        console.log("Database Connected Successfully")
    }catch(err){
        console.error('Database connection failed'+ err)
    }
}

module.exports = connectDatabase;