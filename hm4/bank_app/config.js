import { PriorBankomat } from "./bankomat/prior-bankomat.js";
import { PriorBank } from "./bank/prior-bank.js";
import { PKOBank } from "./bank/pko-bank.js";
import { PKOBankomat } from "./bankomat/pko-bankomat.js";

export const banks = {
    prior: new PriorBank(),
    pko: new PKOBank()
}
export const bankomats = {
    prior: new PriorBankomat(),
    pko: new PKOBankomat(),
}
