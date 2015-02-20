describe("Pizza", function() {
  it("creates a Pizza object", function() {
    var testPizza = Object.create(Pizza);
    testPizza.customerName = "Renato";
    testPizza.diameter = 12;
    expect(testPizza.customerName).to.equal("Renato");
  });
  describe("pizzaCut", function() {
    it("cuts the pizza into slices", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 12;
      expect(testPizza.pizzaCut()).to.equal(4);
    });
    it("the cuts of pie is rounded to the nearest even number of cuts", function() {
      var testPizza = Object.create(Pizza);
      testPizza.diameter = 20;
      expect(testPizza.pizzaCut()).to.equal(8);
    });
    it("when pepperoni is given as a topping the pie is cut differently", function() {
      var testPizza = Object.create(Pizza);
      testPizza.topping = "Pepperoni";
      testPizza.diameter = 20;
      expect(testPizza.pizzaCut()).to.equal(80)
    })
  });
});
