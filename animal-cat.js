class Animal {
    constructor() {
    }
    move() {
        console.log("i move");
    }
}
class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    showName(){console.log(this.name)}
}
let cat = new Cat("Bobbi");
cat.move();
cat.showName();
