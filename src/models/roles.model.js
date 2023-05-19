const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Roles = db.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = Roles;
