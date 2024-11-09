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
