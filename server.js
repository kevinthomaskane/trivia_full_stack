

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var htmlRoutes = require("./app/routing/htmlRoutes.js")


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

htmlRoutes(app)

app.use("/", express.static("app/public"))

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
