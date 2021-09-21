try {
    console.log(a);
    let a = 3;
}
catch {
    console.log("let перед использованием нужно объявить");
  }
try {
    let a = 1;
    let b = 0;
    let res = a/b;
    if (b==0){
        throw new Error ("на ноль делить нельзя");
    }
    console.log(res);
}
catch (z){
    console.log(z.message);
  }