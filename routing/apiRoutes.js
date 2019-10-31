// ===============================================================================
// LOAD DATA
// We are linking our routes to our data source. 
// This data source holds array of information on each survey participant.
// ===============================================================================
 const burgersData = require("../data/friendsData.js");
 const determineCompatibles = require("../../determineCompatibles");

// ===============================================================================
// ROUTING
// These route the user's request to the page they will visit/see.
// ===============================================================================

  console.log("API Router has started"); 
  module.exports = function(app) {

// API GET Requests
// Below code handles when the user's path takes them to "visit" a page. 
// responds with the burgers data file  
// ---------------------------------------------------------------------------
  app.get("/api/burger", function(req, res) {
    console.log('inside api Routes app.post   burgers');
 const friendsData = require(burgersData);
    res.json(burgersData);  
                                             });      
                                               

// Below code handles when the user's requests burger to be devoured.
// When the user clicks the devour button,  
// -----------------------------------------------------------------------

      app.post("/api/devour", function(req, res) {
    console.log('inside api Routes app.post  devour');   
    // store user and survey results to the datafile 
    burgers.devour = true;                                     
          
      // display
        res.json(burger);         

// Below code handles when the user adds a new burger.
// -----------------------------------------------------------------------

      app.post("/api/addBurger", function(req, res) {
    console.log('inside api Routes app.post  addBurger');   
    // use SQL to insert new burger to datafile 
      addBurgertoDB(userData); 
      // display
        res.json(burgers);         
                                                  })
                                                }