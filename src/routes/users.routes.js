// Router de express
const { Router } = require("express");
const {
  createUser,
  login,
  validateEmail,
} = require("../controllers/users.controllers");
const {
  createUserValidator,
  loginUserValidator,
} = require("../validators/users.validators");

const router = Router();

router.post("/users", createUserValidator, createUser);

router.post("/users/login", loginUserValidator, login);

router.post("/users/email-validate", validateEmail);

module.exports = router;
