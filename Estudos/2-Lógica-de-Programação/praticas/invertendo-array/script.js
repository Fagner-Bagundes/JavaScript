let array = [1,2,3,4,5]
let arrayinvt = []

let contador = array.length
function sla(){
    for(let i of array){
        arrayinvt.push(array[contador])
        --contador
    }
}

sla();
console.log(arrayinvt);

