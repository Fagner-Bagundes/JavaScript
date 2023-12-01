function retornaHora(data){
    if ( !data instanceof Date){
       throw new Error(`Esperando instância de Date`)
    }


    return data.toLocaleString(`pt-BR`);
}

try {
   const data = new Date(`01-01-1970 12:58:12`)
   const hora = retornaHora(dsd);
   console.log(hora);

} catch (error) {
    // tratar error
    console.log(error);
    
}finally{
    console.log(`tenha um bom dia`);
}




// try {
//     console.log(variavel);
// } catch(error){
//     console.log(`variavel não existe`);
//     console.log(error);
// }



// function soma(x, y) {
//     if (typeof x !== `number` ||typeof y !== `number`)
//     {
//         throw new Error(`x e y precisam ser números`)
//     }

//     return x + y;
// }

// try {
//     console.log(soma(1,2));
//     console.log(soma(1,`2`));

// } catch(error){
//     console.log(error);
// }





