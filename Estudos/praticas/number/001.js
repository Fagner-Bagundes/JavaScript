function vArray(value) {
    return (value instanceof Array)
}

console.log(vArray(`fsffsfs`));

// pegando os ultimos elementos de um array:

function last(array, n){{
    if (n) return array.slice(-n)
    return array[array.length - 1]
}}

console.log(last([1,2,3,465,665,23,-2]));

// junta arrays:
function add(array, arrayC) {
    const newArray = [...array]
    for(let i in array){
        if (arrayC[i]) {
            if (arrayC !== array[i]) {
                newArray.push(arrayC[i])
            }
        }
    }
    return newArray
}
function union(array1, array2) {
    
    if (array1>array2) {
        return add(array1, array2)
    }else{
        return add(array2, array1)
    }
}

console.log(union([1,2,3,4], [1,2,7,2,5]));
