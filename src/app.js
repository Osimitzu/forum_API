const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
// require('./models/initModels'); // importo y ejecuto la función exportada de initModels (Es lo mismo que las dos lineas de abajo, pero no funciono con el initModels :c)
const userRoutes = require("./routes/users.routes");
const postRoutes = require("./routes/posts.routes");
const errorHandler = require("./middlewares/errorHandler.middlewares");
const logError = require("./middlewares/logError.middlewares");

const initModels = require("./models/initModels");
initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada (/OoO)/"))
  .catch((err) => console.log(err));

db.sync() // "{force: true}" borra la informacion de todas las tablas y las crea de nuevo.
  .then(() => console.log("Base de datos sincronizada (/OoO)/"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Servidor OK (/OoO)/");
});

app.use(userRoutes);
app.use(postRoutes);

// en los controladores de las rutas se producen los errores

// errorHandlers
app.use(logError, errorHandler);

// manejar el 404
app.use("*", (req, res) => {
  res.status(404).json({
    message: "El backend se encuentra trabajando, pronto tendremos esta ruta",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} (/OoO)/`);
});

// No usuarios que pueden hacer?
// ver - leer
// get a todos los post por categoria
// get a un post particular

// crear un post necesita autenticación
// crear una respuesta --> auth

// proteger nuestras rutas
