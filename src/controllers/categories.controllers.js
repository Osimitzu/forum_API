const Categories = require("../models/categories.model");

const findAllCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllCategories,
};
