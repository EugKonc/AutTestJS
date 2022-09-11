import { Bank } from "./base-bank.js";

export class PriorBank extends Bank {
    constructor() {
        super();
        this.description = "Приор Банк Беларусь";
    }
    showDescription() {
        console.log(this.description);
    }
}
