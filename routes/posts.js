const express = require("express");
var path = require('path');
var fs = require('fs');
var multer = require('multer');

const { requireAuth } = require("../middleware/auth");
const Post = require("../models/Posts");
const router = new express.Router();


router.get("/post", async (req, res) => {
  let Posts = await Post.find();
  res.json(Posts);
});



router.get("/:postId", async (req, res) => {
  let { postId } = req.params;
  let SinglePost = await Post.findById(postId);
  res.json(SinglePost);
});


  
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

router.post("/newPost", upload.single('image'),
  async (req, res) => {
    try {
      var obj = {title: req.body.title,
      location: req.body.location,
      firstParagraph: req.body.firstParagraph,
      secondParagraph: req.body.secondParagraph,
      thirdParagraph: req.body.thirdParagraph,
      img : req.body.img,
    //   img : {
    //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
    //     contentType: 'image/png'
    // },
      rating: req.body.rating,
      cost: req.body.cost,
      heritages: req.body.heritages,}

      let result = await Post.create(obj,{
        if(err){
          conslole.log(err)
        }
       
      });
      res.json(result)
      
    } catch (error) {
      console.log(error)
    }
   
});


module.exports = router;
