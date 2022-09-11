export class Bankomat {
    //привязка к банку
    setBank(bank) {
        this.bank = bank;
    }
    //проверка баланса 
    balanceChek(name) {
       return this.bank.getBalance(name);
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