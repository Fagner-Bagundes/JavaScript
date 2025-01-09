function processaN(num){
    if(typeof num !== `number` ) return `"${num}" Não é um numero`;
    if (num % 3 === 0 && num % 5 === 0)  return `FIZZBUZZ`;
    if(num % 3 === 0) return `FIZZ`;
    if (num % 5 === 0) return `BUZZ`;
    return num;
}


console.log(processaN(null))
for(let i = 0; i<50; i++){
    console.log(`${i}:`, processaN(i))
}




