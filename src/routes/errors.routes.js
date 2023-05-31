const logError = require("../middlewares/logError.middlewares");
const ormErrorHandler = require("../middlewares/ormErrorHandler.middlewares");
const errorHandler = require("../middlewares/errorHandler.middlewares");

const errorRoutes = (app) => {
  // errorHandlers
  app.use(logError); // Mostramos el error
  app.use(ormErrorHandler); // Si es error del orm actuamos si no mandamos al general
  app.use(errorHandler); //

  // manejar el 404
  app.use("*", (req, res) => {
    res.status(404).json({
      message: "El backend se encuentra trabajando, pronto tendremos esta ruta",
    });
  });
};

module.exports = errorRoutes;
