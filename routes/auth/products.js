const express = require("express");
const multer = require("multer");
const router = express.Router(); 
const upload = multer({ storage: multer.memoryStorage() });

const prodRepo = require("../../repositories/products");
const newProduct = require("../../views/admin/products/new");
const cardProduct = require("../../views/admin/products/card");

router.get("/products/new", (req, res) => {
  res.send(newProduct());
});

router.post("/products/new", upload.single("image"), async (req, res) => {
  console.log(req.body);
  await prodRepo.create(req.body);
  res.send("Produto criado...");
});

router.get("/products", async (req, res) => {
  console.log(req.session.userId);

  const allprods = await prodRepo.getAll(); 
  res.send(cardProduct({ content: allprods }));
});

router.get("/bla", (req, res) => {
  res.send("OK");
});

module.exports = router;
