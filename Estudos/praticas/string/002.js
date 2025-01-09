
// cria array de string
function createArray(string) {
    return string.split(` `)
}

console.log(createArray(`Fagner Ferreira Bagundes`));

// ffatia parte da string
function extraiWord(palavra, num) {
    return palavra.slice(0, num)    
}

console.log(extraiWord(`Fagner`, 3));

// abrevia nome
function abrevia(string) {
    let array  = string.split(` `)
    let newArray = array.map((valor, i)=>{
        if (i>0) return (` ${valor[0]}.`)
    })
    newArray[0] = array[0]
    return newArray.join(` `)
}

console.log(abrevia(`Fagner Ferreira Bagundes`));

// Oculta nome de email

function ocutaEmail(email){
    let empresa;
    let nome = email.slice(0, 5)
    for (let i in email) if (email[i] === `@`) empresa = email.slice(i, email.length)
    return `${nome}...${empresa}`
}

console.log(ocutaEmail(`Edinaldoperreira@hotmail`));

// parametizando uma string

let paramet = string => (string.replace(/ /g, `-`)).toLowerCase()
console.log(paramet(`Fagner Ferreira Bagundes`));

// 
