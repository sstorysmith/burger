//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// This connects Node to MySQL.
// the connection is exported for use with other modules
// developer- lines 9 - 19 are inserted to enable heroku
//       delete these lines and remove the comment delimieters
//       from lines 24-30.
//      modify user, password, database for your specifics
console.log("inside connection.js");

var mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection= mysql.createConnection(process.env.JAWSDB_URL);
} else{
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgersDB",
  port: 3306
});
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgersDB",
//   port: 8889
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(
    "inside connection   mysql connected as id " + connection.threadId
  );
});
module.exports = connection;
