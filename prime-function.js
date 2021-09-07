const inputvalue = 25;

function getPrime(a){
    if(a <=1){
        console.log(" Не простое ");
        return false;
    }

    if(a % 2 == 0 && a > 2){
        console.log(" Не простое ");
        return false;
    }

    const s = Math.sqrt(a);

    for(let i = 3; i <= s; i += 2){
        if(a % i === 0){
            console.log(" Не простое ");
            return false;
        }    
    }
    console.log(" Простое "); 
};

getPrime(inputvalue);