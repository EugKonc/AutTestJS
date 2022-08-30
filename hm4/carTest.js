class Car {
wheel1 = new Wheel("koleso 1");
wheel2 = new Wheel("koleso 2");
wheel3 = new Wheel("koleso 3");
wheel4 = new Wheel("koleso 4");
gifInfoAboutWheelsPressure(){
    console.log(this.wheel1.getPressure());
    console.log(this.wheel2.getPressure());
    console.log(this.wheel3.getPressure());
    console.log(this.wheel4.getPressure());
}
}

class Wheel {
    constructor(x){
        this.pressure = x;
    }
    getPressure(){return this.pressure};
}

class Driver {
  car = new Car();
 seePanelInfo(){
    this.car.gifInfoAboutWheelsPressure();
 }
}

object1 = new Driver();
object1.seePanelInfo();