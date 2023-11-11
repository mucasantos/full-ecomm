module.exports = (req, res, next) => {
    console.log(req.session);
  
    if (!req.session.userId) {
      res.status(401).send("Não autorizado!");
      return;
    }
  
    if (req.session) {
      next();
    }
  };