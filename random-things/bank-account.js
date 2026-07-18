"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        var _this = this;
        /**
         *
         */
        this.balance = 0.0;
        this.GetBalance = function () { return _this.balance; };
    }
    BankAccount.prototype.Deposit = function (ammount) {
        if (ammount < 0)
            throw new Error("Deposit amount can't be negative");
        else
            this.balance += ammount;
        return this.balance;
    };
    BankAccount.prototype.WithDraw = function (ammount) {
        if (ammount < 0)
            throw new Error("WithDraw amount can't be negative");
        else
            this.balance -= ammount;
        return this.balance;
    };
    return BankAccount;
}());
