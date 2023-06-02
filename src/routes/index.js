const userRoutes = require("./users.routes");
const postRoutes = require("./posts.routes");
const categoriesRoutes = require("./categories.routes");

// recibe como parametro una instancia de expres
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(postRoutes);
  app.use(categoriesRoutes);
};

module.exports = apiRoutes;
