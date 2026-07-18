enum Operations {
  add = "add",
  subtract = "",
}
class Calculator {
  calculate(operation: Operations, a: number, b: number): number {
    switch (operation) {
      case Operations.add:
        return a + b;
      case Operations.subtract:
        return a - b;
      default:
        throw new Error("can operate this!!!");
    }
  }
}

const myCalculator = new Calculator();
console.log("result = ", myCalculator.calculate(Operations.add, 2, 7));
