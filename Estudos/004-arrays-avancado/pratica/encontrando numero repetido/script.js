let array = [`a`,`b`,`a`,`c`,`b`, `b`]
const numerosReptidos = {a: 0, b:0, c:0}

for (let indice = 0; indice <=array.length; indice++) {
    for (let i = 1; i <=array.length; i++) {
        if (i> indice) {

            if(array[indice] === array[i]){
                let valor = array[indice];
                if (numerosReptidos[valor]) {
                    numerosReptidos[valor] += 1
                } else{
                    numerosReptidos[valor] = 1
                }
            }
        }            
        }
}

console.log(numerosReptidos);


