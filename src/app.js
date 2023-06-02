const express = require("express");
require("dotenv").config();
const cors = require("cors");
const apiRoutes = require("./routes");
const errorRoutes = require("./routes/errors.routes");
const initModels = require("./models/initModels");
initModels();

// // Una vez que ya tengo mi base de datos sincronizada y ya no voy a realizar cambios puedo eliminar el siguiente codigo:
// const db = require("./utils/database");
// db.authenticate()
//   .then(() => console.log("Base de datos conectada (/OoO)/"))
//   .catch((err) => console.log(err));

// db.sync() // "{force: true}" borra la informacion de todas las tablas y las crea de nuevo.
//   .then(() => console.log("Base de datos sincronizada (/OoO)/"))
//   .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

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
