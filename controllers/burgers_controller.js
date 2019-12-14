// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Controller
// Basically it controls the flow of the data. It controls the data flow into model object and updates 
// the view whenever data changes.
// Create all our routes and set up logic within those routes where required.
// ===============================================================================
console.log("inside burgers_controller.js");
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");



router.get("/", function(req, res) {
  burger.select(function(data) {
    var hbsObject = {
    burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// create new row
router.post("/api/burgers", function(req, res) {
  req.body.devoured = false;
  burger.insert(["burgerName", "devoured"], [req.body.burgerName, req.body.devoured], function(result) {
    // Send back the ID of the new burger order
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log('controller update cparams id', req.params.id)
  req.params.devoured = false;
  const { id } = req.params.id;
  console.log('update params devoured', req.params.devoured);
  burger.update(req.body.devoured, true, condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;