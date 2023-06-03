const { Router } = require("express");
const { createAnswer } = require("../controllers/answers.controllers");
const authenticate = require("../middlewares/auth.middlewares");
const { createAnswerValidator } = require("../validators/answer.validators");

const router = Router();

router.post("/answers", authenticate, createAnswerValidator, createAnswer);

module.exports = router;
