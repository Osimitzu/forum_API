const Users = require("../models/users.model");
const bcrypt = require("bcrypt");

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

    // Hasheamos la contraseña
    const hashed = await bcrypt.hash(password, 10);

    await Users.create({ username, email, password: hashed });
    res.status(201).send();
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validar que el email exista y sea string
    // existe el usuario con email?
    const user = await Users.findOne({
      where: { email },
    });

    if(!user) { // null --> false niego un falso obtengo un verdadero
      return res.status(400).json({
        error: "Invalid email",
        message: "Email doesn't exist", 
      });
    };

    // comparar las contraseñas
    console.log(user.password);
    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword) {
      return res.status(400).json({
        message: 'YOU SHALL NOT PASS'
      });
    };

    const { firstName, lastName, id, username, roleId } = user

    res.json({ firstName, lastName, id, email, username, roleId });
  
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
  login,
};
