var axios = require("axios");
var queryURL = "http://api.wolframalpha.com/v2/query?appid=DEMO&i=" + query+ "&output=json";
let query = "";

function axiosQuery(query) {
   //console.log("query url: "+queryURL);
    axios.get(queryURL)
       .then(function(res){
   // console.log("JSON: ",res);
   // console.log("data: ",res.data.queryresult);
   // console.log(" status :" + res.status, " statusText: " + res.status.statusText);       
       })
           .catch(function(err){
           // console.log(err)
           });

    waApi.getSpoken(query)
    .then(function(result){
        console.log('----------------------------------spoken--------------------');
        console.log(result)})
        .catch(function(err){
            console.log(err);
        });        
  return result;
}


alert("inside assets/js/carousel.js  ");
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
    $("#eclipse").on("click", function(event) {  
        // the query result comes back as a string
        query = 'when is the next eclipse'); 
        axiosQuery;
    })


    $("#sunset").on("submit", function(event) {
     
      // the query result comes back as a string
      query = 'when is the next sunset'; 
      axiosQuery;
    });

  
    $("#fullmoon").on("click", function(event) {
       // the query result comes back as a string
       query = 'when is the next fullmoon'; 
       axiosQuery;
    });

    $("#meteorShowers").on("submit", function(event) {
       // the query result comes back as a string
       query = 'when is the next meteorshower'; 
       axiosQuery;
  });
    
  });
  