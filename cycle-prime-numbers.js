const b = 80;

point:
for (let i = 2; i < b; i++) {
    
    if(i % 2 == 0 && i > 2){
        continue point;
    }
    const s = Math.sqrt(i);
    for(let c = 3; c <= s; c += 2){
        if(i % c === 0){
            continue point;
        }
    }   
    console.log(i); 
}