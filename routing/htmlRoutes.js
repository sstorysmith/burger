
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path")
// var express = require("express");
// var app = express();

module.exports = function(app) {

// Routes
// =============================================================
// Basic route that sends the user to the home page
console.log("htmlRoutes");
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Route sends the survey to the user.
app.get("/burgers", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/burgerStatus.html"));
});

app.get("*", function(req, res) {
console.log("request or catchall =" + req);
console.log(path.join(__dirname, "../public/home.html"));
  res.sendFile(path.join(__dirname, "../public/home.html"));
  });




}

        

   