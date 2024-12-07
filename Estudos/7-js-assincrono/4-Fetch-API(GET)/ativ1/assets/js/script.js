const btn = document.querySelectorAll(`button`)
const divPage = document.querySelector(`#pagina`)

console.log(btn);

async function getPage(className) {
    const response = await fetch(`pagina${className}.html`)
    const data = await response.text()
    addPagina(data)
    
}


function addPagina(pagina) {
    divPage.innerHTML = pagina
}

document.addEventListener(`click`,(event)=>{
    const button = event.target
    if (button.type === `button`) {
        const classe = button.className
        getPage(classe)
    }
})