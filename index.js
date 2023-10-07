const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth/auth");
const productRoutes = require("./routes/auth/product")

//import cookie
const cookieSession = require("cookie-session")

//user o body parser em um middleware
app.use(bodyParser.urlencoded({ extended: true }));
//middleware para expor uma pasta pública, como CSS
app.use(express.static("public"));
//cokkies
app.use(cookieSession({
  keys: ['adfa7ef68d76fsd6f']
}))

//nosso filtro q informa q toda req tem q ser /admin
app.use("/admin", authRoutes);
app.use("/products", productRoutes);

app.listen(2020, () => {
  console.log("Server no ar...");
});
