import { Bankomat } from "./base-bankomat.js";
export class PriorBankomat extends Bankomat {
    constructor() {
        super();
        this.description = "Bankomat Prior Banka";
    }
    showTime() {
        console.log(getHours());
    }
}