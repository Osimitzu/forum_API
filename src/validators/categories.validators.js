const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createCategoriesValidator = [
  check("categoryName", "Errores en el nombre de la categoria")
    .exists()
    .withMessage("No se esta enviando la categoria")
    .notEmpty()
    .withMessage("El nombre de la categoria no puede estar vacio")
    .isString()
    .withMessage("La categoria debe ser un texto")
    .isLength({ min: 7, max: 50 })
    .withMessage(
      "El nombre de la categoria debe ser minimo de 7 caracteres y maximo de 50"
    ),
  check("description", "Errores en la descripción")
    .exists()
    .withMessage("No se esta enviando la descripcion de la categoria")
    .notEmpty()
    .withMessage("La descripcion no puede estar vacia")
    .isString()
    .withMessage("La descripcion debe ser un texto")
    .isLength({ min: 10 })
    .withMessage("La descripcion debe tener minimo 10 caracteres"),
  validateResult,
];

module.exports = {
  createCategoriesValidator,
};
