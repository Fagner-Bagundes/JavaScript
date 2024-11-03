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