const Categories = require("../models/categories.model");

const findAllCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const createCategories = async (req, res, next) => {
  try {
    const { categoryName, description } = req.body;
    await Categories.create({ categoryName, description });
    res.status(201).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllCategories,
  createCategories,
};
