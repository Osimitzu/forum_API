// check --> verificar / revisar / checar / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error con el campo username")
    .exists()
    .withMessage("Username es obligatorio")
    .notEmpty()
    .withMessage("Username no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener 6 caracteres y maximo 30"),
  check("email", "Error con el campo email")
    .exists()
    .withMessage("email es obligatorio")
    .notEmpty()
    .withMessage("email no puede estar vacio")
    .isString()
    .withMessage("email debe ser string")
    .isEmail()
    .withMessage("email no tiene formato de correo")
    .isLength({ min: 10, max: 50 })
    .withMessage("El email debe tener minimo 10 caracteres y maximo 50"),
  check("password", "Error con el password")
    .exists()
    .withMessage("El password es obligatorio")
    .notEmpty()
    .withMessage("El password no puede estar vacio")
    .isString()
    .withMessage("password debe ser string")
    .isLength({ min: 8 })
    .withMessage("El pasword debe tener minimo 8 caracteres"),

  validateResult,
];

const loginUserValidator = [
  check("email", "error con el campo email")
    .exists()
    .withMessage("email es obligatorio")
    .notEmpty()
    .withMessage("email no puede estar vacio")
    .isEmail()
    .withMessage("email no tiene el formato correcto")
    .isLength({ min: 10, max: 50 })
    .withMessage("El email debe tener minimo 10 caracteres y maximo 50"),
  check("password", "error con el campo password")
    .exists()
    .withMessage("password es obligatorio")
    .notEmpty()
    .withMessage("password no puede estar vacio")
    .isString()
    .withMessage("password debe ser string")
    .isLength({ min: 4 })
    .withMessage("El password debe tener minimo 4 caracteres"),

  validateResult,
];

// object.hasOwnProperty('propertyName');

module.exports = {
  createUserValidator,
  loginUserValidator,
};
