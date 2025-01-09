const input = require('readline-sync');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
const NUMERO_DE_LINHAS = 3
const NUMERO_DE_COLUNAS = 3
function cabecalho(params) {
    console.log(`------------------------------------`);
    console.log(`           Matriz ${NUMERO_DE_LINHAS}x${NUMERO_DE_COLUNAS}               `);
    console.log(`------------------------------------`);
    console.log(`                                    `);
    
}

function rodape() {
    console.log(`------------------------------------`);
}

function criarMatriz(nLinhas, nColunas) {
    let matriz = [];
    let array = []
    let contador = 0;

    cabecalho()

    for (let linha = 0; linha < nLinhas; linha++) {
        for (let coluna = 0; coluna < nColunas; coluna++) {
                array.push(input.question(`Digite um valor [${linha+ 1}/ ${coluna+1}]:`))
                contador++
                if (contador===nColunas) {
                    matriz.push(array)
                    array =[]
                    contador = 0
                }

        }
    }
    console.log(` `);
    
    console.log(`Essa é uma matriz ${nLinhas}x${nColunas}`);
    for (let i = 0; i <nLinhas; i++) {
        console.log(matriz[i]);
    }
    rodape();

    
}

criarMatriz(NUMERO_DE_LINHAS, NUMERO_DE_COLUNAS)









