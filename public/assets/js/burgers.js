
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Managing the DOM and sending the requuests to the router using AJAX.
// ======================================================

$(document).ready(function() {

  // if devourIT is clicked, UPDATE "devoured" to true.
    $(".devourIt").on("click", function() {         // need to change to class becuase of jquery; index, too
     //  event.preventDefault();   prevents default aciton
     console.log("burgers.js devoured ", $(this).data("id"))
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
  