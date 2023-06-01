const express = require("express");
require("dotenv").config();
// const db = require("./utils/database");
// // require('./models/initModels'); // importo y ejecuto la función exportada de initModels (Es lo mismo que las dos lineas de abajo, pero no funciono con el initModels :c)
// const initModels = require("./models/initModels");
const apiRoutes = require("./routes");
const errorRoutes = require("./routes/errors.routes");

// // Una vez que ya tengo mi base de datos sincronizada y ya no voy a realizar cambios puedo eliminar el siguiente codigo:
// // initModels();
// db.authenticate()
//   .then(() => console.log("Base de datos conectada (/OoO)/"))
//   .catch((err) => console.log(err));

// db.sync() // "{force: true}" borra la informacion de todas las tablas y las crea de nuevo.
//   .then(() => console.log("Base de datos sincronizada (/OoO)/"))
//   .catch((err) => console.log(err));

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;
// // solo para comprobar que nuestro servidor funciona al inicio:
// app.get("/", (req, res) => {
//   res.send("Servidor OK (/OoO)/");
// });

apiRoutes(app);
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} (/OoO)/`);
});

/*** HACER TEMPLATE DE PROYECTO ANTES DE LA SIGUIENTE CLASE ***/
