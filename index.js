const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth/auth");

//user o body parser em um middleware
app.use(bodyParser.urlencoded({ extended: true }));
//middleware para expor uma pasta pública, como CSS
app.use(express.static("public"));

//nosso filtro q informa q toda req tem q ser /admin
app.use("/admin", authRoutes);

app.listen(3000, () => {
  console.log("Server no ar...");
});
