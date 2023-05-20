const Users = require("../models/users.model");

const createUser = async (req, res) => {
  try {
    // validar la información
    const { username, email, password } = req.body;
    // asegurarse de que no venga vacia
    // asegurarse de que cumpla con el tipo de dato
    if (typeof username !== "string" || !username) {
      return res.status(400).json({
        error: "invalid username",
        message: "username can not be null or different to string",
      });
    }
    if (typeof email !== "string" || !email) {
      return res.status(400).json({
        error: "invalid email",
        message: "email can not be null or different to string",
      });
    }
    if (typeof password !== "string" || !password) {
      return res.status(400).json({
        error: "invalid password",
        message: "password  can not be null or different to string",
      });
    }
    await Users.create({ username, email, password });
    res.status(201).send();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
};
