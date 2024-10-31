const container =  document.querySelector(`.container`)



const lista = [
    {tag: `h1`, txt: `Era uma vez`},
    {tag: `section`, txt: `Um guerreiro da indonésia`},
    {tag: `div`, txt: `que tinha 4 braços`},
    {tag: `p`, txt: `Seu nome era shiva`},
]

let [objeto1 , objeto2, objeto3, objeto4] = lista;


let {tag: tag1, txt: frase1} = objeto1;
let {tag: tag2, txt: frase2} = objeto2;
let {tag: tag3, txt: frase3} = objeto3;
let {tag: tag4, txt: frase4} = objeto4;

let listaTags = [tag1, tag2, tag3, tag4]
let listaFrases = [frase1, frase2, frase3, frase4];

for(let i = 0; i<4; i++){
    let tags = document.createElement(listaTags[i]);
    container.appendChild(tags)

    const tagContainer = container.querySelector(listaTags[i])
    console.log(tagContainer)

    tagContainer.innerHTML = listaFrases[i];
}



// const sectionContainer = container.querySelector(`section`)
// const divContainer = container.querySelector(`div`)
// const pContainer= container.querySelector(`p`)



// sectionContainer.innerHTML = frase2;
// divContainer.innerHTML = frase3;
// pContainer.innerHTML = frase4;





