class Car {
    wheel1 = new Wheel(1.8);
    wheel2 = new Wheel(2);
    wheel3 = new Wheel(2.4);
    wheel4 = new Wheel(2.9);
    getWheelInfo() {
        console.log(this.wheel1.getPresure());
        console.log(this.wheel2.getPresure());
        console.log(this.wheel3.getPresure());
        console.log(this.wheel4.getPresure());
    }
    //getPresure() {
    //     return this.wheel1.presure;
    //}
}

class Driver {
    car = new Car();

    getPanalInfo() {
        this.car.getWheelInfo();
    }
}

class Wheel {
    constructor(presure) {
        this.presure = presure;
    }
    getPresure() {
        return this.presure;
    }
}

let human = new Driver();
human.getPanalInfo();