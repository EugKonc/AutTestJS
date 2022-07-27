/*
Есть массив который чередует строку с любым типом.
Необходимо написать функцию, которая обрабатывает входной массив и возвращает объект,
ключами которого являются чередующиеся строки
вне зависимости от размера на выходе из функции.
Если массив прерывается на ключе – его значение записывается как null. 
Пример входных данных: [‘1’, 1, ‘a’,{hello: ‘world’}, ‘qwe’]
Пример выходных данных: {1: 1, a: {hello: ‘world’}, qwe: null }
+ Добавить такую функцию в глобальный объект и в index.js использовать ее.
+ Обновить package.json фаил добавив запуск дз2
Bonus: 
  + использовать методы массива(map, reduce, forEach).
  + дополнительным свойством выходного объекта – размер самого объекта.
Bonus example:
Output: {1: 1, a: {hello: ‘world’}, qwe: null, length: 3 }
*/





let arrayInput = ['1', 1, 'a', { hello: 'world' }, 'qwe'];

console.log("input array = ", arrayInput);
//split array  
let objArray = arrayInput.filter((_, index) => index % 2 == 0);
let keyArray = arrayInput.filter((_, index) => index % 2 != 0);
// add null if break on key 
if (objArray.length != keyArray.length) {
  keyArray.push(null);
};

const obj = {};
//creat result object
objArray.forEach((element, index) => {
  obj[element] = keyArray[index];
});
// + length of object to object
let objectLength = Object.keys(obj).length;

obj.length = objectLength;

console.log("result object = ", obj);