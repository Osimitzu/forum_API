const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    /* Remplazamos el siguiente codigo comentado por nuestro validador */
    // // validar la información
    // // asegurarse de que no venga vacia
    // // asegurarse de que cumpla con el tipo de dato
    // if (typeof username !== "string" || !username) {
    //   return res.status(400).json({
    //     error: "invalid username",
    //     message: "username can not be null or different to string",
    //   });
    // }
    // if (typeof email !== "string" || !email) {
    //   return res.status(400).json({
    //     error: "invalid email",
    //     message: "email can not be null or different to string",
    //   });
    // }
    // if (typeof password !== "string" || !password) {
    //   return res.status(400).json({
    //     error: "invalid password",
    //     message: "password  can not be null or different to string",
    //   });
    // }

    // Hasheamos la contraseña
    const hashed = await bcrypt.hash(password, 10);
    await Users.create({ username, email, password: hashed });
    // Despues del "await" para abajo no se ejecuta si tiene un error
    res.status(201).send();
    transporter
      .sendMail({
        from: "osimitzuuu@gmail.com",
        to: email,
        subject: "Probando nodemailer :D",
        text: "Este seria un mensaje con texto plano", // El texto plano solo se envia si el html falla
        html: "<h1>Bienvenido al foro</h1><p>Espero que contribuyas y aprendas demasiado :D</p>",
      })
      .then(() => console.log("Mensaje enviado"))
      .catch((err) => console.log(err));
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // validar que el email exista y sea string
    // existe el usuario con email?
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      // null --> false niego un falso obtengo un verdadero
      return next({
        status: 400,
        name: "Invalid email",
        message: "Email doesn't exist",
      });
    }

    // comparar las contraseñas
    console.log(user.password);
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return next({
        status: 400,
        name: "Invalid password",
        message: "Your password doesn't match with user email",
      });
    }

    const { firstName, lastName, id, username, roleId } = user;

    // debemos devolver un token para que el usuario loggeado pueda acceder a los recursos del backend

    //Generar un token:
    const userData = { firstName, lastName, id, email, username, roleId };

    const token = jwt.sign(userData, "pacrat", {
      algorithm: "HS512",
      expiresIn: "5m",
    });

    //Agregar el token en userData:
    userData.token = token;

    res.json(userData);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  login,
};
