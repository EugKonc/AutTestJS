const car = {
    color: "black",
    power: function () {
        console.log("мощность двигателя");
    }
 }

car.color = "green";


console.log(car['color']);
car.power();