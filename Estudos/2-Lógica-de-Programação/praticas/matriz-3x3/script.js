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
    let contador = 0;

    for (let linha = 0; linha < nLinhas; linha++) {
        for (let coluna = 0; coluna < nColunas; coluna++) {
                array.push(input.question(`Digite um valor:`))
                contador++
                if (contador===3) {
                    matriz.push(array)
                    array =[]
                    contador = 0
                }

        }
    }
    for (let i = 0; i <=2; i++) {
        console.log(matriz[i]);
        
        
    }
}

const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3
let matriz3x3 = [criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)]









