function Card(name, balans) {
    this.name = name;
    this.balans = balans;
    this.balansnsAdd = function (x) {
        this.balans = this.balans + x;
    }
    this.balansnsMinus = function (x) {
        this.balans = this.balans - x;
    }
    this.balansnsToUsd = function (x) {
        result = this.balans / x;
        console.log("In Usd your balans = ", result)
    }
}

let user = new Card("Billi", 55);

user.balansnsAdd(130);
user.balansnsMinus(25);
console.log(user.balans);
user.balansnsToUsd(2);
