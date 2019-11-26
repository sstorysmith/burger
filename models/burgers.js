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
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
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