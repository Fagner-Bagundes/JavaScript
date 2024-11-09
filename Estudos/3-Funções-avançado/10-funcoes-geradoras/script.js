function* geradora1() {
    //  código qualquer...
    yield `Valor 1`;
    //  código qualquer...
    yield `Valor 2`;
    //  código qualquer...
    yield `Valor 3`;
    //  código qualquer...
};


const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

console.log(`--------------------------------------------`);

// funções geradoras infinitas:

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

let g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);









