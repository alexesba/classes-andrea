const assert = require("assert");
const Calculator = require("../calculator.js")

describe("Calculator", () => {
  describe("suma", () => {
    it("should return 3", () => {
      assert.equal(3, Calculator.sum(1, 2) );
    });
  });
});
