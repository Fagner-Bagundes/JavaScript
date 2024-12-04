function obterUsuario(){
    return new Promise((resolve, reject)=>{
        const usuario = {id: 1, nome: `joão`}
        setTimeout(()=>{
            resolve(usuario)
        }, 1000)
    })
}

function obterPedidos(){
    return new Promise((resolve, reject)=>{
        const pedidos = [
            {id: 101, total: 250},
            {id:102, total: 100}
        ]
        setTimeout(()=>{
            resolve(pedidos)
        },2000)
    })
}

function obterEndereco(){

    return new Promise((resolve, reject)=>{
        const endereco = { cidade: `São Paulo`, rua: `Rua A`}
        setTimeout(()=>{
            resolve(endereco)
        }, 15 * 100)
    })
}

const promises = [obterUsuario(),obterEndereco(), obterPedidos()]

Promise.all(promises).then((resolve)=>{
    console.log(resolve);
}).catch((error)=>{
    console.log(error);
    
})