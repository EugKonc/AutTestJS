import {Bank} from "./bank/base-bank.js";

class PriorBank extends Bank {
    constructor() {
        super();
        this.description = "Приор Банк Беларусь";
    }
    showDescription() {
        console.log(this.description);
    }
}

class PKOBank extends Bank {
    constructor() {
        super();
        this.description = "PKO Банк Польша";
    }
    giveCredit(name, count) {
        this.clientBase.forEach((item) => {
            if (item.name === name) {
                item.balance += count;
                console.log("You received a loan");
            }
        });
    }
}

class Bankomat {
    //привязка к банку
    setBank(bank) {
        this.bank = bank;
    }
    //проверка баланса 
    balanceChek(name) {
        this.bank.getBalance(name);
    }
    //пополнение баланса
    addBalance(name, money) {
        this.bank.deposit(name, money);
    }
    //снятие денег
    withdrawMoney(name, money) {
        this.bank.withdraw(name, money);
    }
}

class PriorBankomat extends Bankomat {
    constructor() {
        super();
        this.description = "Bankomat Prior Banka";
    }
    showTime() {
        console.log(getHours());
    }
}

class PKOBankomat extends Bankomat {
    constructor() {
        super();
        this.description = "Bankomat PKO Banka";
    }
    showLOL() {
        console.log("I don't know ");
    }
}

class Human {
    constructor(name) {
        this.name = name;
    }
    setBankomat(bankomat) {
        this.bankomat = bankomat;
    }
    seeBalance(name) {
        this.bankomat.balanceChek(name);
    }
    addBalanceX(name, money) {
        this.bankomat.addBalance(name, money);
    }
    withdrawMoney(name, money) {
        this.bankomat.withdrawMoney(name, money);
    }
}
//console.log("!!!!!!!!",process.env.ENV);
// BANK=prior BANKOMAT=prior node client.js
//вынести отсюда вызовы и назначения оставить только связь 
// в зависимости от полученного process.env.параметр  - запускать создание определенного банка и банкомата
// из своих отдельных файлов  
//инициализация
let human1 = new Human("Ivan");
let bank = new PriorBank();
let bankomat = new PriorBankomat();
let human2 = new Human("Petrovich");
//ассоциация
bankomat.setBank(bank);
human1.setBankomat(bankomat);
human2.setBankomat(bankomat);

//добавление новых клиентов
bank.addUser("Ivan", 500);
bank.addUser("Petrovich", 500);

//операции
human1.seeBalance(human1.name);
human1.addBalanceX(human1.name, 300);
human1.seeBalance(human1.name);
human1.withdrawMoney(human1.name, 1000);
human1.withdrawMoney(human1.name, 500);
human1.seeBalance(human1.name);

human2.seeBalance(human2.name);
human2.addBalanceX(human2.name, 3555);

//операции с новыми банками