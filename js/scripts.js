var Pizza = {};


$(document).ready(function() {

  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    var inputtedDiameter = $("input#pizza-size").val();

    var newPizza = Object.create(Pizza);
  })


})
