module.exports = (req, res, next) => {
<<<<<<< HEAD
    if (!req.session.userId) {
        res.status(401).send("não autorzado!")
        return
    }
    if (req.session) {
        next()
    }
}
=======
  console.log(req.session);

  if (!req.session.userId) {
    res.status(401).send("Não autorizado!");
    return;
  }

  if (req.session) {
    next();
  }
};
>>>>>>> resolve
