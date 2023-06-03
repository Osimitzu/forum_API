const { Router } = require("express");
const {
  findAllCategories,
  createCategories,
} = require("../controllers/categories.controllers");
const {
  createCategoriesValidator,
} = require("../validators/categories.validators");
const authenticate = require("../middlewares/auth.middlewares");
const { hasRoles } = require("../middlewares/role.middlewares");

const router = Router();

router.get("/categories", findAllCategories);

router.post(
  "/categories",
  authenticate,
  hasRoles(3),
  createCategoriesValidator,
  createCategories
);

module.exports = router;
