const lista = [
    {tag: `h1`, txt: `Era uma vez`},
    {tag: `section`, txt: `Um guerreiro da indonésia`},
    {tag: `div`, txt: `que tinha 4 braços`},
    {tag: `p`, txt: `Seu nome era shiva`},
]

// for (let i=0; i<lista.length; i++){

// }


let [tag1, tag2, tag3, tag4] = lista;

let {tag: h1, txt: frase1} = tag1;
let {tag: section, txt: frase2} = tag2;
let {tag: div, txt: frase3} = tag3;
let {tag: p, txt: frase4} = tag4;

console.log( h1, section, div, p, frase2);
