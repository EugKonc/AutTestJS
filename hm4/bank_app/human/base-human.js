export class Human {
    constructor(name) {
        console.log('HUMAN name', name);
        this.name = name;
        this.cartNumber = 0;
    }
    getName() { return this.name }
    setBankomat(bankomat) {
        this.bankomat = bankomat;
    }
    async seeBalance() {
        try {
            console.log('Name from Bank : ', this.name);
            return await this.bankomat.balanceChek(this.name);
        }
        catch (error) { console.log(error) }
    }
    async addBalanceX(money) {
        try {
            throw new Error("Ошибка!");
            await this.bankomat.addBalance(this.name, money);
        }
        catch (error) { console.log(error) }
    }
    async withdrawMoney(money) {
        try {
            await this.bankomat.withdrawMoney(this.name, money);
        } catch (err) { console.log(err) }
    }
    async getCartNumber() {
        return await this.cartNumber;
    }
}