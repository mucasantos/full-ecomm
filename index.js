const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const authRoutes = require("./routes/auth/auth");
const productsRoutes = require("./routes/auth/products");

const validSession = require("./controller/verify_session");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cookieSession({
    keys: ["septidfljkhsdlkgjdhsgkljsdhlgs69859680"],
  })
);
app.use("/admin", authRoutes);
app.use("/admin", validSession, productsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodado em http://localhost:${PORT}`);
});
