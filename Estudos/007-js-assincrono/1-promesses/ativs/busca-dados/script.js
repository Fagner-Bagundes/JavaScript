function buscarDados(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let dados = {id: 1, nome: `Produto A`, precos: 99.99}
            if (dados){
                resolve(dados)
            } else{
                reject(`Dados não encontrados`)
            } 
        },1000)
    })
}

const usuario1 = buscarDados()

usuario1
.then((resolve)=>{console.log(`Dados encontrados: `, resolve)})
.catch((reject)=>{console.log(`Error: `,reject)})
.finally(()=>{console.log(`Operação finalizada`);
})