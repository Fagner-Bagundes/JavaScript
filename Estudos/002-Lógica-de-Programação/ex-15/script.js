function random(min, max){
    let r = Math.random() * (max-min) + min;
    return Math.floor(r)

}

let NumRandom = random(1, 11)

while (NumRandom !== 10){
    NumRandom = random(1,11)
    console.log(NumRandom)
}
console.log(`-------------------------------------------`);


do{
    NumRandom = random(1,11)
    console.log(NumRandom)
}while(NumRandom !== 10)