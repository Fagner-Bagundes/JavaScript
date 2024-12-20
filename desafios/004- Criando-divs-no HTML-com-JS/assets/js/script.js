const container =  document.querySelector(`.container`)

const lista = [
    {tag: `h1`, txt: `Era uma vez`},
    {tag: `section`, txt: `Um guerreiro da indonésia`},
    {tag: `div`, txt: `que tinha 4 braços`},
    {tag: `p`, txt: `Seu nome era shiva`},
]

for(let i = 0; i<lista.length; i++){
    let {tag, txt} = lista[i];
    console.log(tag, txt);
    let tags = document.createElement(tag);
    container.appendChild(tags)
    const tagContainer = container.querySelector(tag)
    tagContainer.innerHTML = txt;

}




