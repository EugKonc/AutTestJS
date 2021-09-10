let arr = [5, 3, 6, 7, 8, 3];

function getIndexElement (a,b){
    if (a.indexOf(b) != -1) {
        console.log(a.indexOf(b));
    }
    else{
        console.log("Элемент " + b + " не найден");
    }
}

getIndexElement(arr,2);