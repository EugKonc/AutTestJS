import { banks } from "./config.js";
import { bankomats } from "./config.js";

export class BankFactory {
    getData() {
        return {
            bank: banks[process.env.BANK || 'prior'],
            bankomat: bankomats[process.env.BANKOMAT || 'prior'],
        };
    }
}
