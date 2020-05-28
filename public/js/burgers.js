// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#buttonAddBurger").on("click", function(event) {

      event.preventDefault();

      let inputEl = $("#inputBurger");
      let newBurger = {
        name: inputEl.val(), 
        devoured: 0};            
 
      //Send the PUT request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  