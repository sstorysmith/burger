// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Creates the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods to use to retrieve and store data in burgersDB.


var connection = require("./connection.js");
var orm = {
// will select any column name or *
  select: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) {
        throw err;      }
      console.log(result);
    });
  },

  // will insert with data specified
  insertOne: function(tableInput, colNames, whatToInsert) {
    var queryString = "NSERT INTO ??  ?? VALUES ??;";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },

  // will update with data specified
  updateOne: function(tableInput, colNames, whichToUPdate) {
    var queryString = "UPDATE ?? SET ?? WHERE ??";    

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
      err,
      result
    ) {
      console.log(result);
    });
  }
};
module.exports = orm;

