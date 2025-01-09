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
