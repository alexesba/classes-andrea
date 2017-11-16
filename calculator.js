const Calculator = function() {
};

Calculator.prototype.sum = function(num1, num2) {
  return num1 + num2;
}

module.exports = new Calculator;
