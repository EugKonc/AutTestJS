import { asyncCall } from "../randomDelay.js";
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
    async getBalance(name) {
        await asyncCall();
        let result = 0;
        this.clientBase.forEach((item) => {
            if (item.name === name) {
                console.log(item.name, " balance = ", item.balance, "$");
                result = item.balance;
            }
        });
        return result;
    }
    async deposit(name, addBalance) {
        await asyncCall();
        this.clientBase.forEach((item) => {
            if (item.name === name) {
                item.balance += addBalance;
                console.log(item.name, " you add to balance = ", addBalance, "$");
            }
        });
    }
    async withdraw(name, withdrawSum) {
        await asyncCall();
        this.clientBase.forEach((item) => {
            if (item.name === name) {
                if (item.balance >= withdrawSum) {
                    item.balance -= withdrawSum;
                    console.log(item.name, " you withdraw = ", withdrawSum, "$");
                }
                else { console.log(item.name, " try to withdraw = ", withdrawSum, "$ sorry don't have enough money"); }
            }
        });

    }
}
