const isAdmin = (req, res, next) => {
  const { username, roleId } = req.user;
  // 1 --> member
  // 2 --> moderator
  // 3 --> admin
  if (roleId !== 3) {
    return next({
      status: 401,
      name: "No admin",
      message: `Sorry ${username} only admins can access here`,
    });
  }
  next();
};

// hasRoles --> va a dejar pasar los siguientes roles...
// recibe un arreglo de roles
// hasRoles(2, 3, 5)
const hasRoles = (...roles) => {
  // devolver una función de middleware
  return (req, res, next) => {
    const { roleId } = req.user;
    if (!roles.includes(roleId)) {
      next({
        status: 401,
        name: "Role required",
        message: `User have not required role`,
      });
    }
    next();
  };
};

module.exports = {
  isAdmin,
  hasRoles,
};
