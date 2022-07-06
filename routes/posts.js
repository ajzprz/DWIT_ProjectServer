const express = require("express");
const Post = require("../models/Posts");
const router = new express.Router();

router.get("/", async (req, res) => {
  let Posts = await Post.find();
  res.json(Posts);
});

router.post("/"),
  async (req, res) => {
    let result = await Post.create({
      title: req.body.title,
      location: req.body.location,
      experiences: req.body.experiences,
      image: req.body.image,
      rating: req.body.rating,
      cost: req.body.cost,
      heritages: req.body.heritages,
    });
    res.json(result);
  };

router.get("/:postId", async (req, res) => {
  let { postId } = req.params;
  let SinglePost = await Post.findById(postId);
  res.json(SinglePost);
});

module.exports = router;
