class Card {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance || 0;
    }
    addBalance(x) {
        this.balance = this.balance + x;
    }
    minusBalance(x) {
        this.balance = this.balance - x;
    }
    getBalance() {
        console.log(this.balance);
    }
    exchangBalance(x) {
        console.log("Баланс после обмена = ", this.balance / x);
    }
}

class MileniumCard extends Card {
    bankName = "Millenium";  
    getBankName (){
        return this.bankName;
    }
};

class PriorCard extends Card {
getBalance(){}
};

card = new Card();
card.balance = 55;
card.getBalance();
card.addBalance(33);

/*
Добавить классы :
1.Bank - хранит баланс, подумать о взаимодействии банка- банкомата и карты. Баланс нельзя изменить из вне на прямую, только методом.
2.Bankomat - какие методы у него есть. 
3.Human - главный стартует методом getCash ;
С помощью класса Human методом getCash 
*/
