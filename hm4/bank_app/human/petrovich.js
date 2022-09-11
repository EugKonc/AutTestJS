import { Human } from "./base-human.js";
export class Petrovich extends Human {
    constructor() {
        super('Petrovich');
        this.description = "Petrovich number 2 ";
        this.cartNumber = 321321;
    }
    petrovichHello() {
        console.log("Hello i'm Petro ");
    }
}
