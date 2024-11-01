const container = document.querySelector(`.container`)
const paragrafos = container.querySelectorAll(`p`)

const backgroundBody = getComputedStyle(document.body).backgroundColor;

for(let p of paragrafos){
    p.style.backgroundColor = backgroundBody;
    p.style.color = `#fff`

}

console.log(paragrafos)

