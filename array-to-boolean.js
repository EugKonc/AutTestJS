//input array
let numbers = [1, 2, 3, 4, 5];
//array item type output
for (let item of numbers){
    console.log(typeof(item));
}
//array item type changes to boolean and output type 
for (let item of numbers){
    item = Boolean(item);
    console.log(typeof(item));
}
