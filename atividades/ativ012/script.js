function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);

} 
const min = 1;
const max = 50;
let rand = random(min, max);
let rand2 = random(min,max);

console.log(`numero 1: ${rand}`);
console.log(`numero 2: ${rand2}`);
console.log(`-----------------------------`);

// function maiorOuMenor(x, y){

//     return x > y ? x : y;
// }


const maiorOuMenor2 = (x, y)=>  x> y ? x :y;

console.log(maiorOuMenor2(rand, rand2));

