function random(min, max){
    let r = Math.random() * (max-min) + min;
    return Math.floor(r)

}

let NumRandom = random(1, 20)

while (NumRandom !== 10){
    NumRandom = random(1,20)
    console.log(NumRandom)
}


