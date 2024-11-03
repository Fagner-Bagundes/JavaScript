// // entendendo o try

// try{
//     console.log(naoExisto);
// } catch(erro) {
//     console.log(`Variavel nao existe`);
//     console.log(erro);
    
// }


function soma(x,y) {
    if (
      typeof x !== `number` ||
      typeof y !== `number`
    ){
        throw(`x e y precisam ser números`)
    }
    return x + y;
};

console.log(soma(3,`fd `));

try {
    console.log(soma(1,5));
    console.log(soma(3,`fd `));
    
} catch(error){
    console.log(error);
    
}

