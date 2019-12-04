
//alert("inside assets/js/burger.js  ");
// Make sure we wait to attach our handlers until the DOM is fully loaded.


$(document).ready(function() {
  // if devourIT is clicked, change set "devoured" to true and update.
    $("#devourIt").on("click", function() {     
     //  event.preventDefault();
      var id = $(this).data("id");
      var updateBurger = {
        id: $(this).data("id"),      
        devoured: true      
      };
  
      // Send the PuT request.
      console.log("/api/burgers:" + id);
      $.ajax("/api/burgers/" + id, {  
          
        type: "PUT",
        data: updateBurger
      }
      ).then(
        function() {
          console.log("changed devoured to", updateBurger.devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
      // if create is clicked, create a new burger.
    $("#submitBtn").on("click", function() {
      // Make sure to preventDefault on a submit event.
      //event.preventDefault();
      name = $("#create").val().trim()
  
      var newBurger = {
        burger_name: name,      
        devoured: false
      };
  
      // Send the Post request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  