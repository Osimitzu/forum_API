const Answers = require("../models/answers.model");
const Posts = require("../models/posts.model");
const Users = require("../models/users.model");

const createPost = async (req, res, next) => {
  try {
    const newPost = req.body;
    await Posts.create(newPost);
    res.status(201).send();
  } catch (err) {
    next(err);
  }
};

const getPostsByCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const posts = await Posts.findAll({
      where: { categoryId },
      attributes: {
        exclude: ["content", "categoryId", "userId"],
      },
      include: {
        model: Users,
        as: "createdBy",
        attributes: ["username", "id"],
      },
    });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

const getPostWithAnswers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Posts.findByPk(id, {
      attributes: {
        exclude: ["categoryId", "userId"],
      },
      include: [
        {
          model: Users,
          as: "createdBy",
          attributes: ["id", "username"],
        },
        {
          model: Answers,
          attributes: ["content", "created_at"],
          include: {
            model: Users,
            attributes: ["id", "username"],
          },
        },
      ],
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPost,
  getPostsByCategory,
  getPostWithAnswers,
};
