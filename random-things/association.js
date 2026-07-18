// class Driver {
//   private name: string;
//   /**
//    *
//    */
//   constructor(name: string) {
//     this.name = name;
//   }
//   getName = (): string => {
//     return this.name;
//   };
// }
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Driver_name;
// class Car {
//   /**
//    *
//    */
//   private driver: Driver;
//   constructor(driver: Driver) {
//     this.driver = driver;
//   }
//   drive(): void {
//     console.log("car is driving by:" + this.driver.getName());
//   }
// }
// const driver = new Driver("Thang");
// const car = new Car(driver);
// car.drive();
var Driver = /** @class */ (function () {
    function Driver(name) {
        _Driver_name.set(this, void 0);
        __classPrivateFieldSet(this, _Driver_name, name, "f");
    }
    return Driver;
}());
_Driver_name = new WeakMap();
var Car = /** @class */ (function () {
    function Car(driver) {
        this.driver = driver;
    }
    Car.prototype.drive = function () {
        var test = "name";
        console.log("".concat(this.driver[test], " is driving the car."));
    };
    return Car;
}());
var driver = new Driver("Thang");
var car = new Car(driver);
car.drive();
