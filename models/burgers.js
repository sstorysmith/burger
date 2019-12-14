// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Model
// Retrieve and store model state in the persistance store like a database.
// ===============================================================================
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
console.log("inside models burgersjs");

var burgers = {
  select: function(cb) {
    orm.select("*","burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(cols, vals, cb) {
    orm.insert("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
   // The variables objColVals is an object.
  update: function(objColNames, objColVals, condition, cb) {
    console.log("in models  colNames: ", objColNames +"   objColVals: " + objColVals + "   condition:" + condition)
    orm.update("burgers", objColNames, objColVals, condition, function(res) {
      cb(res);
    });
  },
   // The variables objColVals is an object.
   delete: function(objColVals, whitchOne, cb) {
    orm.delete("burgers", whichOne, function(res) {
      cb(res);
    });
  }
};
// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;