let array = [1,2,3,4,5]
let arrayinvt = []

function sla(){
    let contador = array.length
    for(let i of array){
        --contador
        arrayinvt.push(array[contador])
    }
}

sla();
console.log(`Array original: `, array);

console.log(`Array invertida: `, arrayinvt);

