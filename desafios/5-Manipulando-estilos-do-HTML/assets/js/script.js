const container = document.querySelector(`.container`)
const paragrafos = container.querySelectorAll(`p`)

const backgroundBody = getComputedStyle(document.body).backgroundColor;

for(let i in paragrafos){
    paragrafos[i].style.backgroundColor = backgroundBody;

}

console.log(paragrafos)

