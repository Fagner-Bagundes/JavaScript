// o motor do JavaScript tem um limite de funções recursivas que você pode usar 

function recursiva(max){
    if (max > 10) return
    console.log(max);
    max++;
    
    recursiva(max)
    
}

recursiva(0)


function fatorial(n) {
    if(n===0) return 1;
    return n * fatorial(n - 1)
    
}

console.log(fatorial(5));
