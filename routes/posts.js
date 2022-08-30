const express = require("express");
var path = require("path");
var fs = require("fs");
var multer = require("multer");

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

router.delete("/:postId", async (req, res) => {
  let { postId } = req.params;
  let deletePost = await Post.findByIdAndDelete(postId);
  res.json(deletePost);
});

router.put("/:postId", async (req, res) => {
  let { postId } = req.params;
  let obj = {
    author: req.body.author,
    title: req.body.title,
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    firstParagraph: req.body.firstParagraph,
    secondParagraph: req.body.secondParagraph,
    thirdParagraph: req.body.thirdParagraph,
    image: req.body.image,
    rating: req.body.rating,
    cost: req.body.cost,
    heritages: req.body.heritages,
  };

  let editPost = await Post.findByIdAndUpdate(obj);
  res.json(editPost);
});

router.post("/newPost", async (req, res) => {
  try {
    let obj = {
      author: req.body.author,
      title: req.body.title,
      location: req.body.location,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      firstParagraph: req.body.firstParagraph,
      secondParagraph: req.body.secondParagraph,
      thirdParagraph: req.body.thirdParagraph,
      image: req.body.image,
      rating: req.body.rating,
      cost: req.body.cost,
      heritages: req.body.heritages,
    };

    let result = await Post.create(obj);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now())
//   }
// });

// var upload = multer({ storage: storage });

module.exports = router;
