const paragrafos = document.querySelectorAll(`p`)
const body = document.querySelector(`body`)

let estilosBody = getComputedStyle(body);

let backgroundBody = estilosBody.backgroundColor;

for (p of paragrafos){
    p.style.backgroundColor = backgroundBody
    p.style.color = `#fff`
    p.style.padding = `10px`    
}

