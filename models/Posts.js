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
    firstParagraph:String,
    secondParagraph:String,
    thirdParagraph:String,
    image:String,
    img:{
      data:Buffer,
      contentType:String,  
    },
    reviews:{
        type: Number
    },
    rating:Number,
    cost:Number,
    heritages:[String ],
    suggestions:String,
    userName :String,
    latitude:String,
    longitude:String,
})

const Post = mongoose.model("Post", postsSchema)

module.exports = Post;
