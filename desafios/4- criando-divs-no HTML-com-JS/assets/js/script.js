const container =  document.querySelector(`.container`)



const lista = [
    {tag: `h1`, txt: `Era uma vez`},
    {tag: `section`, txt: `Um guerreiro da indonésia`},
    {tag: `div`, txt: `que tinha 4 braços`},
    {tag: `p`, txt: `Seu nome era shiva`},
]

// for (let i=0; i<lista.length; i++){

// }


let [objeto1 , objeto2, objeto3, objeto4] = lista;


let {tag: tag1, txt: frase1} = objeto1;
let {tag: tag2, txt: frase2} = objeto2;
let {tag: tag3, txt: frase3} = objeto3;
let {tag: tag4, txt: frase4} = objeto4;

// listaTags = [tag1, tag2, tag3, tag4];
// listaFrases = [frase1, frase2, frase3];


// for(let i = 0; listaTags.length>=4; i++){




//     h1Container.innerHTML = frase1;
//     sectionContainer.innerHTML = frase2;
//     divContainer.innerHTML = frase3;
//     pContainer.innerHTML = frase4;

// }

let h1 = document.createElement(tag1)
let section = document.createElement(tag2)
let div = document.createElement(tag3)
let p = document.createElement(tag4)

container.appendChild(h1)
container.appendChild(section)
container.appendChild(div)
container.appendChild(p)

const h1Container = container.querySelector(`h1`)
const sectionContainer = container.querySelector(`section`)
const divContainer = container.querySelector(`div`)
const pContainer= container.querySelector(`p`)






h1Container.innerHTML = frase1;
sectionContainer.innerHTML = frase2;
divContainer.innerHTML = frase3;
pContainer.innerHTML = frase4;



