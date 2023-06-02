const { Router } = require("express");
const {
  createPost,
  getPostsByCategory,
  getPostWithAnswers,
} = require("../controllers/posts.controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

// TODO --> proteger esta ruta
router.post("/posts", authenticate, createPost);

router.get("/posts/:categoryId", getPostsByCategory);

router.get("/posts/:id/answers", getPostWithAnswers);

module.exports = router;
