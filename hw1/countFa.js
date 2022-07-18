/*
Посчитать факториал заданного числа(больше 12)
*/

function factorial(n) {  
    return n ? n * factorial(n - 1) : 1;
  }

  let x = 13; 
  
  if (x <=12) {console.log("You must indicate more than 12");}
  else console.log( factorial(x) );
