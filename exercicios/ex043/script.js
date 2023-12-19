// Funções geradoras: tem um recurso que quase pode pausar o código em algum lugar

// Exemplo 1: gerador normal

function* geradora1() {
    // Código qualquer ...
    yield `valor 1`;
    // Código qualquer ...
    yield `valor 2`;
    // Código qualquer ...
    yield `valor 3`;
}

const g1 = geradora1();
for(let valor of g1){
    console.log(valor);
}
console.log(`================================`);
// Emxemplo 2: Gerador infinito

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log(`=======================================`);
// Emxemplo 3: que delega tarefa para outro gerador

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4()  {
    yield*geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for( valor of g4) {
    console.log(valor);
}
console.log(`==========================`);

//  Exemplo 5: com function 

function* geradora5 () {
    yield function () {
        console.log(`vim dá func1`);
    }


    // Código ...

    yield function () {
        console.log(`vim dá func2`);
    }
};

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();