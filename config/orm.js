// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations )
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
} // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Creates the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods to use to retrieve and store data in burgersDB.
console.log("inside orm");
var connection = require("./connection.js");
var orm = {
  // will select any column name or *
  select: function(whatToSelect, tableInput, cb) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      //console.log(result);
      console.log("inside orm select  result= " + result);
      cb(result);
    });
  },
  // will insert with data specified
  insert: function(tableInput, info, cb) {
    var queryString = `INSERT INTO burgers(burgerName, devoured) VALUES (?, ?);`;

    //console.log("inside orm insert" + queryString + " colname: " + colNames + " valcol:" + valOfCol);
    connection.query(queryString, info, function(err, result) {
      if (err) {
        console.log(" ORM insert error ", queryString);
        throw err;
      }
      cb(result);
      //console.log(result);
      console.log("inside orm insert  result= " + result);
    });
  },

  // will update with data specified
  update: function(tableInput, objcolVals, whichToUpdate, cb) {
    //var queryString = "UPDATE ?? SET " + objToSql(objColVals) + " WHERE ??";
    var queryString =
      "UPDATE burgers SET devoured = true WHERE " + whichToUpdate;
    console.log("inside orm update" + queryString);
    //connection.query(queryString, [tableInput, colNames, whichToUpdate], function(err, result) {
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //console.log(result)
      cb(result);
      console.log("inside orm update  result= " + result);
    });
  },
  // will update with data specified
  delete: function(whichToDelete, cb) {
    var queryString = "DELETE FROM burgers " + "WHERE " + whichToDelete;

    console.log("inside orm delete" + queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("inside orm delete  result= " + result);
      cb(result);
    });
  }
};
module.exports = orm;
