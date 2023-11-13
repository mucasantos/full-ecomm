const express = require("express");
const app = express();

const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");

const validSession = require('./controller/verify_session')

const bodyParser = require("body-parser");
const cookieSession = require('cookie-session')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(cookieSession({
  keys: ['septidfljkhsdlkgjdhsgkljsdhlgs69859680']
}))

app.use("/admin", authRoutes);
app.use("/admin", validSession, productsRoutes);

app.listen(3000, () => {
  console.log("Server no ar...");
});
