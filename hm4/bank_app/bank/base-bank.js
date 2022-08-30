export class Bank {
    // Имя клиента баланс и Id 
    constructor() {
        this.clientBase = [];
    }
    addUser(name, balance) {
        let obj = {};
        obj.name = name;
        obj.balance = balance || 0;
        obj.id = this.clientBase.length;
        this.clientBase.push(obj);
    }

    getBalance(name) {
        this.clientBase.forEach((item) => {
            if (item.name === name) {
                console.log(item.name, " balance = ", item.balance, "$");
            }
        });
    }
    deposit(name, addBalance) {
        this.clientBase.forEach((item) => {
            if (item.name === name) {
                item.balance += addBalance;
                console.log(item.name, " you add to balance = ", addBalance, "$");
            }
        });
    }
    withdraw(name, withdrawSum) {
        this.clientBase.forEach((item) => {
            if (item.name === name) {
                if (item.balance >= withdrawSum) {
                    item.balance -= withdrawSum;
                    console.log(item.name, " you withdraw = ", withdrawSum, "$");
                }
                else { console.log("You try to withdraw = ", withdrawSum, " sorry don't have enough money"); }
            }
        });

    }

}
