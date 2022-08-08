function mul(a) {
   return function (b) {
      return a * b;
   };
}

let result = mul(2)(5);
console.log(result);