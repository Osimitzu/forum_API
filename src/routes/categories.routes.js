const { Router } = require("express");
const { findAllCategories } = require("../controllers/categories.controllers");

const router = Router();

router.get("/categories", findAllCategories);

module.exports = router;
