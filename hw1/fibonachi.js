/*
Вывести числа Фибоначчи (от 0 до 100).
В конце вывести кол-во этих чисел
*/
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

let sum = 1;
let x = 0;
let i = 0;
while (sum < 100){
sum = fib(x);
x++;
if (sum<=100){
    i++;
    console.log(sum);}
}
console.log("amount of numbers = "+i);
