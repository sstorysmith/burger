
alert("inside assets/js/burger.js  ");
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  // if devourIT is clicked, change set "devoured" to ture and update.
    $("#devourIt").on("click", function(event) {     
      var id = $(this).data("id");
       
      var newDevouredState = {
        devoured: true
      };
  
      // Send the PuT request.
      //C:\utbootcamp\Homework\HW#11burger\burger\controllers\burgers_controller.js is routing
      $.ajax("/api/burgers" + id, {  
          
        type: "PUT",
        data: newDevouredState
      }
      ).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
      // if create is clicked, create a new burger.
    $("#create").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#create").val().trim(),      
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
  