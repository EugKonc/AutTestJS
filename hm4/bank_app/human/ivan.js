import { Human } from "./base-human.js";
export class Ivan extends Human {
    constructor() {
        super('Ivan');
        this.description = "Ivan not bad ";
        this.cartNumber = 123123;
    }
    ivanHello() {
        console.log("Hello i'm Ivan ");
    }
}
