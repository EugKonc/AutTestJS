import { Bank } from "./base-bank.js";
export class PKOBank extends Bank {
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
