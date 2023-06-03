const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createAnswerValidator = [
  check("content", "Error en el contenido de la respuesta")
    .exists()
    .withMessage("No se esta enviando el contenido de la respuesta")
    .notEmpty()
    .withMessage("El contenido de la respuesta no debe estar vacio")
    .isLength({ min: 10 })
    .withMessage("El contenido debe tener al menos 10 caracteres"),
  check("userId", "Error con el id del usuario")
    .exists()
    .withMessage("No se esta enviando el id del usuario")
    .notEmpty()
    .withMessage("El id del usuario no puede estar vacio")
    .isInt()
    .withMessage("El id del usuario debe ser un entero"),
  check("postId", "Error con el id de la publicación")
    .exists()
    .withMessage("No se esta enviando el id de la publicación")
    .notEmpty()
    .withMessage("El id de la publicación no puede estar vacio")
    .isInt()
    .withMessage("El id de la publicación debe ser entero"),
  validateResult,
];

module.exports = {
  createAnswerValidator,
};
