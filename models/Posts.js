const mongoose = require ('mongoose')

const postsSchema = mongoose.Schema({
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
    paragraphs:String,
    image:String,
    reviews:{
        type: Number
    },
    rating:Number,
    cost:Number,
    heritages:[String ],
    userName :String,
    map:String,
})

const Post = mongoose.model("Post", postsSchema)

module.exports = Post;
