const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
// require('./models/initModels'); // importo y ejecuto la función exportada de initModels (Es lo mismo que las dos lineas de abajo, pero no funciono con el initModels :c)
const initModels = require("./models/initModels");
const Posts = require("./models/posts.model");
const Users = require("./models/users.model");
const Categories = require("./models/categories.model");
const Answers = require("./models/answers.model");
initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada (/OoO)/"))
  .catch((err) => console.log(err));

db.sync() // "{force: true}" borra la informacion de todas las tablas y las crea de nuevo.
  .then(() => console.log("Base de datos sincronizada (/OoO)/"))
  .catch((err) => console.log(err));

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Servidor OK (/OoO)/");
});

// Obtener una publicación con su categoria y el usuario que la creo:
// Obtener las respuestas de la publicación:
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Posts.findByPk(id, {
      attributes: {
        exclude: ["userId", "categoryId"],
      },
      include: [
        {
          model: Users,
          attributes: ["id", "username"],
        },
        {
          model: Categories,
          attributes: ["id", "category_name"],
        },
        {
          model: Answers,
          // includes anidados:
          include: {
            model: Users,
            attributes: ["id", "username"],
          },
        },
      ],
    });
    res.json(post);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} (/OoO)/`);
});
