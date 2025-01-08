function createArray(string) {
    return string.split(` `)
}

console.log(createArray(`Fagner Ferreira Bagundes`));

function extraiWord(palavra, num) {
    return palavra.slice(0, num)    
}

console.log(extraiWord(`Fagner`, 3));

function abrevia(string) {
    let array  = string.split(` `)
    let newArray = array.map((valor, i)=>{
        if (i>0) return (` ${valor[0]}.`)
    })
    newArray[0] = array[0]
    return newArray.join(` `)
}

console.log(abrevia(`Fagner Ferreira Bagundes`));
