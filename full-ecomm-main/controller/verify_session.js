const error = require("../views/error");

module.exports = (req, res, next) => {
  console.log(req.session);

  if (!req.session.userId) {
    res.status(401).send(error());
    return;
  }

  if (req.session) {
    next();
  }
};
