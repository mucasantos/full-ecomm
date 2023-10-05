const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth/auth");

//user o body parser em um middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", authRoutes);

app.listen(3000, () => {
  console.log("Server no ar...");
});
