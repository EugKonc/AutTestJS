let arr = [1,6,7,8,3,4,5,6];

let result = arr.filter(checkItem);

function checkItem(a){
    return a > 3;
}

console.log(result);