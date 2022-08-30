class Bank {
    // хранит Имя владельца и его баланс
    constructor(name, balance) {
        this.name = name;
        this.balance = balance || 0;
    }
    getBalance() {
        console.log(this.balance);
    }
    deposit(addBalance) {
        this.balance += addBalance;
    }
    withdraw(withdrawSum) {
        if (this.balance >= withdrawSum) {
            this.balance -= withdrawSum;
        }
        else { console.log("You don't have enough money, go to work"); }
    }

}

class Bankomat {
    //привязка к банку
    setBank(bank) {
        this.bank = bank;
    }
    //проверка баланса 
    balanceChek(name) {
        if (this.bank.name === name) {
            this.bank.getBalance();
        }
        else {console.log("You don't have bank account")}
    }
    //пополнение баланса
    addBalance(money) {
        this.bank.deposit(money);
    }
    //снятие денег
    withdrawMoney(money) {
        this.bank.withdraw(money);
    }
}

class Human {
    constructor(name) {
        this.name = name;
    }
    //привязка к банкомату
    setBankomat(bankomat) {
        this.bankomat = bankomat;
    }
    seeBalance(name) {
        this.bankomat.balanceChek(name);
    }
    addBalanceX(money) {
        this.bankomat.addBalance(money);
    }
    withdrawMoney(money) {
        this.bankomat.withdrawMoney(money);
    }
}

let human1 = new Human("Ivan");
let bank = new Bank("Ivan", 500);
let bankomat = new Bankomat();
bankomat.setBank(bank);
human1.setBankomat(bankomat);

human1.seeBalance("Ivan");
human1.addBalanceX(55);
human1.withdrawMoney(5);
human1.seeBalance("Ivan");

// метод show balance - показывает из банка баланс
// метод добавления клиента.будет bank.addUser("Ivan",500);