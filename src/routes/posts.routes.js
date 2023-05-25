const { Router } = require("express");
const { createPost } = require("../controllers/posts.controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

// TODO --> proteger esta ruta
router.post("/posts", authenticate, createPost);

module.exports = router;
