const input = require('readline-sync');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

function cabecalho(params) {
    console.log(`------------------------------------`);
    console.log(`           Matriz 3x3               `);
    console.log(`------------------------------------`);
}

function rodape() {
    console.log(`------------------------------------`);
}

function criarMatriz(nLinhas, nColunas) {
    let matriz = [];
    let array = []
    let contador = 1;

    for (let linha = 0; linha < nLinhas; linha++) {
        for (let coluna = 0; coluna < nColunas; coluna++) {
            if (contador <=3) {
                array.push(input.question(`Digite um valor:`))
                ++contador
            }
            return
        }
        
    }
    console.log(array);
    console.log(matriz);
    
    return matriz
}



criarMatriz(3, 3)
// declaraçao de variáveis


let matriz3x3 = []
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3








