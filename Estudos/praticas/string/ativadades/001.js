// verifique se o valor é uma string
function analiseS(valor) {
    if (typeof valor !== `string`) {return false}
    return true    
}
console.log(analiseS(`Fagner Ferreira`));
console.log(analiseS(23232323));

// verifique se o valor string está vazio

function verifVazio(string) {
    let valor = !string ? false : true;    
    return valor
}

console.log(verifVazio(`fsffsfs`));
console.log(verifVazio(``));

// 