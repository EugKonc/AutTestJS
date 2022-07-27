/* 
Есть ферма по разведению кроликов,
нужно высчитать сколько останется кроликов через заданное кол-во месяцев и
вывести кол-во кроликов каждый месяц, при условии что:
Каждый четный месяц отнимается 50% кроликов, иначе,
если кол-во кроликов больше 100, то отнимается 20%
В конце каждого месяца добавляется 20 кроликов
Изначально кроликов 200. Кол-во месяцев – 6 (Январь - первый)
*/


let Rabbits = 200;
let months = 6;
let x = 1;
let mounthsName = '';

for (let i = 1; i <= months; i++) {
    if (i % 2 == 0){
        Rabbits = Rabbits * 0.5;
    } else {
        if (Rabbits > 100) {
            Rabbits = Rabbits * 0.8;
        }
    }
    Rabbits = Rabbits + 20;

    switch (x){
        case 0:
            console.log("Buddy, zero month does not exist ")
            break;
        case 1:
            mounthsName = "January";
            break;
        case 2:
            mounthsName = "February";
            break;
        case 3:
            mounthsName = "March";
            break;
        case 4:
            mounthsName = "April";
            break;
        case 5:
            mounthsName = "May";
            break;
        case 6:
            mounthsName = "June";
            break;
    }
    x++;

    console.log (`In month ${mounthsName}`);
    console.log (`Rabits count =  ${Rabbits}`);
}