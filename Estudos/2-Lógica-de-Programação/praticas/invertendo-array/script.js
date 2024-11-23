let array = [1,2,3,4,5]
let arrayinvt = []

let contador = array.length
function sla(){
    for(let i of array){
        --contador
        arrayinvt.push(array[contador])
    }
}

sla();
console.log(arrayinvt);

