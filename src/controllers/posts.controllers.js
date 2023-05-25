const Posts = require("../models/posts.model");

const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    await Posts.create(newPost);
    res.status(201).send();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createPost,
};
