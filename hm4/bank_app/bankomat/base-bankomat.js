export class Bankomat {
    //привязка к банку
    setBank(bank) {
        this.bank = bank;
    }
    //проверка баланса 
    async balanceChek(name) {
        return await this.bank.getBalance(name);
    }
    //пополнение баланса
    async addBalance(name, money) {
        await this.bank.deposit(name, money);
    }
    //снятие денег
    async withdrawMoney(name, money) {
       await this.bank.withdraw(name, money);
    }
}