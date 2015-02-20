var Pizza = {
  cut: 0,

  pizzaCut: function() {
    this.cut = this.diameter / 3.14;
    return Math.ceil(this.cut);
  }
};

var Topping = {
  name: "",
}

var toppings = []


$(document).ready(function() {

  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    var inputtedDiameter = $("input#pizza-size").val();
    var inputtedName = $("input#customer").val();
    var inputtedTopping = $("input#topping").val();


    var newPizza = Object.create(Pizza);
    newPizza.customerName = inputtedName;
    newPizza.diameter = inputtedDiameter;
    newPizza.toppings = inputtedTopping;
    newPizzaCut = newPizza.pizzaCut();

    $("ul#customer").append("<p>" + "Customer Name:" + " " + newPizza.customerName + "</p>");
    $("ul#toppings").append("<p>" + "Toppings:" + " " + newPizza.toppings + "</p>");
    $("ul#pizza-output").append("<p>" + "Amount of slices:" + " " + newPizzaCut + "</p>");

  })


})
