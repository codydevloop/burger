// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {

    // //display id for each Child element
  // better option would be to assign the id to the devour element
  // $(window).on('load', function(){
  //   // your logic here`enter code here`
  //   //let burgersHook= $("#devoured").childElementCount;
  //   //alert("test");
  //    //let burgersHook= $("#notdevoured");
  //    //let notDevouredChildren = burgersHook.children();
  //    let notDevouredChildren = $("#notdevourd").find("#burgerId");
  //    //let notDevouredChildrenArr = [...notDevouredChildren];

  //    console.log(notDevouredChildren);  

  //    //console.log("Hellow")
  //    //console.log(notDevouredChildrenArr);
  // });

  $("#buttonAddBurger").on("click", function(event) {
    //event.preventDefault();

    // pull user data from input box to add to the DB
    let inputBurgerEl = $("#inputBurger");
    let newBurger = {
      name: inputBurgerEl.val(), 
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

  $(".btn-sm").on("click", function(event) {
      console.log($(this)[0].id);
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
  