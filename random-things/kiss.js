var Operations;
(function (Operations) {
    Operations["add"] = "add";
    Operations["subtract"] = "";
})(Operations || (Operations = {}));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function (operation, a, b) {
        switch (operation) {
            case Operations.add:
                return a + b;
            case Operations.subtract:
                return a - b;
            default:
                throw new Error("can operate this!!!");
        }
    };
    return Calculator;
}());
var myCalculator = new Calculator();
console.log("result = ", myCalculator.calculate(Operations.add, 2, 7));
