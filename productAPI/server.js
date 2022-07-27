var express = require("express");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// frontend: 4200, backend: 8080
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

var productAPI = require("./controllers/product.controller");

app.use("/api/products", productAPI);

app.listen(8080);

console.log("Server up and running on port 8080");
