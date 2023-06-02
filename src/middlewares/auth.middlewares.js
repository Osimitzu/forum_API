// importamos jwt
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    // recuperar el token
    const token = req.headers["access-token"];

    if (!token) {
      return next({
        status: 401,
        error: "not token",
        message: "token is not present on request headers",
      });
    }

    // decodificar el token
    const decoded = jwt.verify(token, "pacrat", {
      algorithms: "HS512",
    });

    // el token esta expirado
    // el token es invalido

    req.user = decoded;
    next();
  } catch (err) {
    return next({
      status: 498,
      name: "Invalid or expired token",
      message: err,
    });
  }
};

module.exports = authenticate;
