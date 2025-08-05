class BankAccount {
    #balance; // Private property

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive!");
        }
    }

    getBalance() {
        return `Current Balance: $${this.#balance}`;
    }
}

const account = new BankAccount("Doremon", 1000);

console.log(account.getBalance()); 
account.deposit(500);
console.log(account.getBalance()); 