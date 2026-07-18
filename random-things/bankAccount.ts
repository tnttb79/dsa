class BankAccount {
  /**
   *
   */
  private balance: number = 0.0;
  constructor() {}
  Deposit(ammount: number): number {
    if (ammount < 0) throw new Error("Deposit amount can't be negative");
    else this.balance += ammount;

    return this.balance;
  }
  WithDraw(ammount: number): number {
    if (ammount < 0) throw new Error("WithDraw amount can't be negative");
    else this.balance -= ammount;
    return this.balance;
  }
  GetBalance = (): number => this.balance;
}

export {};
