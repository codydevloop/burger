$(document).ready(function() {

  //###########################
  // Add Burger
  //###########################

  $("#buttonAddBurger").on("click", function(event) {
    //event.preventDefault();

    // pull user data from input box to add to the DB
    let inputBurgerEl = $("#inputBurger");
    let newBurger = {
      name: inputBurgerEl.val().trim(), 
      devoured: 0};            

    //Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
      //location.reload();
      }
    );
  });

    //###########################
    // Devour Burger - UPDATE
    //###########################

  $(".burgerdevour").on("click", function(event) {
      let id = $(this)[0].id;
      burgerDevoured = {
        devoured: 1
      };

      $.ajax("/api/burgers/" +id, {
        type: "PUT",
        data: burgerDevoured
      }).then(
        function() {
        location.reload();
        }
      );
  });

    //###########################
    // Devour Burger - DELETE
    //###########################
  $(".burgerdelete").on("click", function(event) {

    let id = $(this)[0].id;

    $.ajax("/api/burgers/" +id, {
      type: "DELETE"
    }).then(
      function() {
      location.reload();
      }
    )
  });
  


});
  