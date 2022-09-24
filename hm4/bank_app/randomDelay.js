function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function afterRandomSeconds() {
    return new Promise(resolve => {
        let x = getRandom(1000, 5000);
        setTimeout(() => {
            resolve(`${x}`);
        }, x);
    });
}

export async function asyncCall() {
    const result = await afterRandomSeconds();
    console.log(result);
}
