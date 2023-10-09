const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth/auth");
const productRoutes = require("./routes/routeProduct/authProducts")

const cookieSession = require("cookie-session")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieSession({
  keys: ['gfjdslkj543648gjdkh565']
})) 


app.use("/admin", authRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server no ar...");
}); 