let a = 'ahb acb aeb aeeb adcb axeb';
let result = a.match(/a.b/g);
console.log(result);

let b =  '2+3 223 2223';
let g = b.match(/2\p{Sm}\d/u);
console.log(Array.from(g));

let date = new Date();
console.log("День " + date.getDate());
console.log("Месяц " + date.getMonth());
console.log("Год " + date.getFullYear());