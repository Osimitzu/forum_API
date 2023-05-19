const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define(
  "categories",
  {
    //Sequelize crea por defecto el id :D
    categoryName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "category_name",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
