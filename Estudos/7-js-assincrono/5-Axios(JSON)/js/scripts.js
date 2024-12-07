fetch(`pessoas.json`)
.then((response)=> response.json())
.then((json)=> addSite(json))


const pessoaInput = document.querySelector(`.pessoas`)
console.log(pessoaInput);


function addSite(json){
  const table = document.createElement(`table`)
  json.map((pessoa)=>{
    let tr = document.createElement(`tr`)
    let td = document.createElement(`td`)
    
    td.innerHTML = pessoa.nome
    tr.appendChild(td)

    td = document.createElement(`td`)
    td.innerHTML = pessoa.idade
    tr.appendChild(td)

    td = document.createElement(`td`)
    td.innerHTML = pessoa.email
    tr.appendChild(td)



    table.appendChild(tr);
  })
  console.log(table);

  pessoaInput.appendChild(table)
  
}