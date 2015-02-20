var Pizza = {
  cut: 0,

  pizzaCut: function() {
    if (this.topping === "Pepperoni") {
      this.cut = this.diameter * 4 ;
      return 2 * Math.floor(this.cut / 2);
    } else {
      this.cut = this.diameter / 3.14;
      return 2 * Math.ceil(this.cut / 2);
    }
  }
};

// Was going to make a topping prototype, but with two toppings it seemed like overkill
// var Topping = {
//   name: "",
// }


$(document).ready(function() {
  $(".jumbotron#form").hide();
  $(".jumbotron#form").show("slide", 1200);
  $(".jumbotron#pizza").hide();
  $("ul#customer").hide();
  $("ul#toppings").hide();
  $("ul#pizza-output").hide();


  $("form#pizza-form").submit(function(event) {
    event.preventDefault();
    $("div#pizza").show("slide", 630);
    $("ul#customer").show(700);
    $("ul#toppings").show(750);
    $("ul#pizza-output").show(770);


    var inputtedDiameter = $("input#pizza-size").val();
    var inputtedName = $("input#customer").val();
    var inputtedTopping = $("select#topping").val();


    var newPizza = Object.create(Pizza);
    newPizza.customerName = inputtedName;
    newPizza.diameter = inputtedDiameter;
    newPizza.topping = inputtedTopping;
    newPizzaCut = newPizza.pizzaCut();


    $("ul#customer").append("<p>" + "Customer Name:" + " " + newPizza.customerName + "</p>");
    $("ul#toppings").append("<p>" + "Toppings:" + " " + newPizza.topping + "</p>");
    $("ul#pizza-output").append("<p>" + "Amount of slices:" + " " + newPizzaCut + "</p>");

  })


})
