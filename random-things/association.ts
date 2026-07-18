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

class Driver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Car {
  private driver: Driver; // Car has-a Driver

  constructor(driver: Driver) {
    this.driver = driver;
  }

  drive(): void {
    const test = "name";
    console.log(`${this.driver[test]} is driving the car.`);
  }
}

const driver = new Driver("Thang");
const car = new Car(driver);
car.drive();

export {};
