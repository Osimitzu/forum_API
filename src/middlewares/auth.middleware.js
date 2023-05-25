// importamos jwt
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    // recuperar el token
    const token = req.headers["access-token"];

    if (!token) {
      return res.status(401).json({
        error: "not token provided//te falta el token papi",
      });
    }

    // decodificar el token
    const decoded = jwt.verify(token, "pacrat", {
      algorithms: "HS512",
    });

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = authenticate;
