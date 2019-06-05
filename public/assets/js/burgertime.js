// wait to attach handlers until the DOM is fully loaded
$(function() {
    $(".change-taken").on("click", function(event) {
      var id = $(this).data("id");
      var newTaken = $(this).data("newtaken");
  
      var newTakenState = {
        claimed: newTaken
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newTakenState
      }).then(
        function() {
          console.log("changed status to", newTaken);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      //preventDefault on a submit event
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerup").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger");
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
  