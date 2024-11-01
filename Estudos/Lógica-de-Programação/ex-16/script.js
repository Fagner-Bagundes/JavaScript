const numeros = [8,5,4,2,9,4,6];
// entenendo o continue
for(let num of numeros){
    if (num === 9){
        console.log(`O numero do azar foi removido!!`);
        continue;
    }
    console.log(num)
};

console.log(` `);

for(let num of numeros){
    if (num === 4) {
        console.log(`${num} é um numero azarento e destruiu o sistema:(`);
        break;
    }

    console.log(num);
    
}