const tarefas = document.querySelector(`.tarefas`)

const inputTarefa = document.querySelector(`.input-tarefa`)
const inputBtn = document.querySelector(`.btn-tarefa`)

function criaBotao() {
    const btnRemove = document.createElement(`button`)
    
}
function criaTarefa(tarefa) {
    tarefas.innerHTML += `<li> ${tarefa.value} </li>`
}

inputBtn.addEventListener(`click`,(e)=>{
    if (!inputTarefa.value) return
    console.log(inputTarefa.value)
    criaTarefa(inputBtn.value)


})

inputTarefa.addEventListener(`keypress`, (e)=>{
    if(e.key === `Enter`){
        console.log(`Enter`);
        criaTarefa(inputBtn.value)

    }
})