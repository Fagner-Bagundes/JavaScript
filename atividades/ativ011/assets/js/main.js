// Como alterar coisas do CSS no HTML



const paragrafos = document.querySelector(`.paragrafos`);
const pes = paragrafos.querySelectorAll(`p`);

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);



for (let p of pes){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = `#ffffff`
    
    
}