// declaraão de fuções(function hoisting)
// first-class objects 
falaOi()
function falaOi(){
    console.log(`Oii`);
}

// function expression
const souUmDado = function(){
    console.log(`Sou um dado`);
}
souUmDado();

// Arrow function
const fucaoArrow = ()=>{
    console.log(`sou uma arrow function`);
}
fucaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log(`Estou falando de dentro de um objeto`);
    }
}

obj.falar();