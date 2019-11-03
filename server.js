var orm = require("./config/orm.js");
console.log("inside server.js");

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

// select all the burgers.
orm.select("*", "burgers");

// insert new burgers.
orm.insert("burgers", "burgerName", "devoured");


// update burgers that have devoured = true
orm.update("burgers", "burgerName", "devoured", "id" );




var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgersDB"
// });
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("server connected as id " + connection.threadId);
// });
// Serve index.handlebars to the root route.
app.get("/", function(req, res) {

  console.log("                 app.get/");
   
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data });
  });
});
// Show the user the burgers and the form to update the devoured column.
app.get("/:id", function(req, res) {
  console.log("                 inside server   app.get/:id");
  connection.query("SELECT * FROM burgers where devoured= ??", [req.params.id], function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    console.log("               inside server    data:" + data);
    res.render("burgers", data);
  });
});
app.post("/api/burgers", function(req, res) {
  console.log("                 inside server  app.post/api/burgers");
  connection.query("INSERT INTO burgers (burgerName, devoured) VALUES (?, ?)", [
    req.body.burgerName, req.body.devoured
  ], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server faliure
      return res.status(500).end();
    }
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// app.delete("/api/quotes/:id", function(req, res) {
//   connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server faliure
//       return res.status(500).end();
//     } else if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
// Update a quote by an id and then redirect to the root route.
app.put("/api/burgers/:id", function(req, res) {
  console.log("                 app.put/api/burgers");
  connection.query("UPDATE burgers SET burgerName = ?, devoured = ? WHERE id = ?", [
    req.body.burgerName, req.body.devoured, req.params.id
  ], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server faliure
      return res.status(500).end();
    } else if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

