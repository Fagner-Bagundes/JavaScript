try {
    console.log(`Abri um arquivo`);
    console.log(`Manipulei o arquivo e gerou erro`);
    console.log(a);    
    console.log(`Fechei o arquivo`);
} catch (e) {
    console.log(`tratando o erro`);
} finally{
    console.log(`Fechei arquivo`);
    console.log(`FINALLY: Eu sempre sou executado`);
}

console.log(`------------------------------------------------------`);


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date");
    }

    if (!data) data = new Date();
    
    return data.toLocaleTimeString(`pt-BR`)
}


try{
    const date = new Date(`08-06-2005 01:30:00` )
    const hora = retornaHora(date);
    console.log(hora);
} catch(error){
    // tratando error
    console.log(`Foi encontrado um erro, pois não foi mandado um objeto do tipo Date`);
    
} finally{
    console.log(`tenha um bom dia`)
}

