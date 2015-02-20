describe("Pizza", function() {

  it("creates a Pizza object", function() {
    var testPizza = Object.create(Pizza);
    testPizza.customerName = "Renato";
    testPizza.toppings = "cheese"
    testPizza.diameter = 12
    expect(testPizza.customerName).to.equal("Renato");
  })
})
