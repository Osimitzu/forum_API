// importar los modelos
const Users = require("./users.model");
const Roles = require("./roles.model");
const Posts = require("./posts.model");
const Answers = require("./answers.model");
const Categories = require("./categories.model");

const initModels = () => {
  // Relación 1 - M ==> belongsTo / hasMany
  //Un usuario tiene un rol:
  Users.belongsTo(Roles, { foreignKey: "roleId" });
  //Un rol tiene muchos usuarios:
  Roles.hasMany(Users, { foreignKey: "roleId" });

  ////////////////////////////////////////////////
  //Un usuario responde muchas publicaciones
  //Una publicación es respondida por muchos usuarios: Relacion M - M:

  //Una respuesta le pertenece a un usuario:
  Answers.belongsTo(Users, { foreignKey: "userId" });
  //Un usuario tiene muchas respuestas:
  Users.hasMany(Answers, { foreignKey: "userId" });

  //Una respuesta le pertenece a una publicación:
  Answers.belongsTo(Posts, { foreignKey: "postId" });
  //Una publicación tiene muchas respuestas:
  Posts.hasMany(Answers, { foreignKey: "postId" });
  ////////////////////////////////////////////////

  //Un post es creado por un usuario:
  Posts.belongsTo(Users, { foreignKey: "userId" });
  //Un usuario crea muchos posts:
  Users.hasMany(Posts, { foreignKey: "userId" });

  //Un post tiene una categoria:
  Posts.belongsTo(Categories, { foreignKey: "categoryId" });
  //Una categoria tiene muchos posts:
  Categories.hasMany(Posts, { foreignKey: "categoryId" });
};

module.exports = initModels;
// Relación de usuarios y roles:
// Un usuario tiene uno o puede tener muchos roles?  ===> 1 (belongsTo)
// Un rol lo tiene un usuario o lo pueden tener muchos? ===> Muchos (hasMany)
// 1 - M
