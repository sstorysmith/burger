// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Creates the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods to use to retrieve and store data in burgersDB.
console.log("inside orm");

var connection = require("./connection.js");
var orm = {
// will select any column name or *
  select: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) {
        throw err;      }
      //console.log(result);
       console.log("inside orm select  result= " + result);
    });
  },

  // will insert with data specified
  insert: function(tableInput, rowToInsert, valOfCol) {    
    var queryString = "INSERT INTO ??  ?? VALUES ??;";   
    console.log("inside orm insert" + queryString);
    connection.query(queryString, [tableInput, rowToInsert, valOfCol], function(err, result) {
      if (err) {
        throw err;      }
      //console.log(result);
      console.log("inside orm insert  result= " + result);
    });
  },

  // will update with data specified
  update: function(tableInput, colNames, whichToUpdate) {
    var queryString = "UPDATE ?? SET ?? WHERE id= ??";    

    console.log("inside orm update" + queryString);

    connection.query(queryString, [tableInput, colNames, whichToUpdate], function(err, result) {
      if (err) {
        throw err;      }
      //console.log(result)
      
      console.log("inside orm update  result= " + result);
    });
  }
};
module.exports = orm;

