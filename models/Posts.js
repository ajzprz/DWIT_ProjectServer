const mongoose = require ('mongoose')

const postsSchema = mongoose.Schema({
    author: {
        type:String,
    },
    title : {
        type:String,
        reqired:true,
        maxLength:100    
    },

    location : {
        type:String,
        reqired:true,
        maxLength:100
    },
    expriences:String,
    firstParagraph:String,
    secondParagraph:String,
    thirdParagraph:String,
    image:String,
    reviews:{
        type: Number
    },
    rating:Number,
    cost:Number,
    heritages:[String ],
    suggestion:String,
    userName :String,
    latitude:String,
    longitude:String,


})

const Post = mongoose.model("Post", postsSchema)

module.exports = Post;
