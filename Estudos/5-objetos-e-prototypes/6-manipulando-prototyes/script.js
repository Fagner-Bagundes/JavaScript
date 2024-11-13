// sempre que voce cria um objeto literal, o js faz altomaticamente a chamada da funcão que é a construtora de Objetos


// new Object --tem--> Pbject.protype 

const objA = {
chaveA: `A`
//  __protp__ = Object.prototype
}

const objB = {
    chaveB: `B`
    //  __protp__ = Object.prototype

    }

// se vc quiser que que o __proto__ do objB não seja object.prototype e sim o "objA", é possível, use: 
Object.setPrototypeOf(objB, objA)
console.log(objB);

const objC = new Object();

objC.chaveC = `C`
Object.setPrototypeOf(objC, objB)
console.log(objC);

// em ves de usar Objeto__proto__ para saber qual é o protótipo de um objeto, use:

Object.getPrototypeOf(objA)
