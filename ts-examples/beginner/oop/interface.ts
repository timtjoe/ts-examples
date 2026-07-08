interface BankAccount {
  balance: number;
  deposit(amount:number): void;
  withdraw(amount: number): void;
}

class CurrentAccount implements BankAccount {
  balance: number;
  overdraftLimit: number;
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if(amount <= this.balance) {
      this.balance -= amount
    }
  }
}

class SavingsAccount implements BankAccount {
  balance: number;
  deposit(amount: number): void {
    //
  }

  withdraw(amount: number): void {
    //
  }
}