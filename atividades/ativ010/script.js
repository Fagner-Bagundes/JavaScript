const elementos = [
    {tag: `p`, texto: `Frase 1`},
    {tag: `div`, texto: `Frase 2`},
    {tag: `footer`, texto: `Frase 3`},
    {tag: `section`, texto: `Frase 4`},
];

const conteiner = document.querySelector(`.conteiner`);
const div = document.createElement(`div`);

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagcriada = document.createElement(tag);
    tagcriada.innerHTML = texto;
    div.appendChild(tagcriada);


    console.log(tag);
}

conteiner.appendChild(div);