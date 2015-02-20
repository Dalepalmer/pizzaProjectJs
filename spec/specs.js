describe("Pizza", function() {
  it("creates a Pizza object", function() {
    var testPizza = Object.create(Pizza);
    testPizza.customerName = "Renato";
    testPizza.toppings = "cheese";
    testPizza.diameter = 12;
    expect(testPizza.customerName).to.equal("Renato");
  });
  it("cuts the pizza into slices", function() {
    var testPizza = Object.create(Pizza);
    testPizza.customerName = "Stephanie";
    testPizza.toppings = "cheese";
    testPizza.diameter = 12;
    expect(testPizza.pizzaCut()).to.equal(4);
  });
});

describe("Topping", function() {
  it("create a Topping object", function() {
    var testTopping = Object.create(Topping);
    testTopping.name = "Cheese";
    expect(testTopping.name).to.equal("Cheese");
  });
});
