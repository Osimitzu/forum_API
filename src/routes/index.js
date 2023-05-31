const userRoutes = require("./users.routes");
const postRoutes = require("./posts.routes");

// recibe como parametro una instancia de expres
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(postRoutes);
};

module.exports = apiRoutes;
