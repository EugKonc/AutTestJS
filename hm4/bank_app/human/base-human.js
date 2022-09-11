export  class Human {
    constructor(name) {
        console.log('HUMAN name', name);
        this.name = name;
        this.cartNumber = 0;
    }
    getName() { return this.name }
    setBankomat(bankomat) {
        this.bankomat = bankomat;
    }
    seeBalance() {
        console.log('FROM BANK NAME:', this.name)
       return this.bankomat.balanceChek(this.name);
    }
    addBalanceX(money) {
        this.bankomat.addBalance(this.name, money);
    }
    withdrawMoney(money) {
        this.bankomat.withdrawMoney(this.name, money);
    }
    getCartNumber() {
        return this.cartNumber;
    }
}