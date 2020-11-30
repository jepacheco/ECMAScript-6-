//Flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(2))

//----------------------------------------
//FlatMap

let array = [1, 2, 3, 4, 5]
console.log(array.flatMap(value => [value, value * 2]));

//----------------------------------------------------------
//trimStart

let hello = '              hello world               '
console.log(hello)
console.log(hello.trimStart());
console.log(hello.trimEnd());

//-------------------------------------------------------------
//optional catch binding, es opcional el parametro error en el catch

try {

} catch {
    error
}

//-------------------------------------------------------------------
//from entries, transforma clave-valor en un arreglo

let entries = [
    ["name", "oscar"],
    ["age", 32]
]
console.log(Object.fromEntries(entries));

//---------------------------------------------------------------
//Objeto de tipo simbolo para acceder a una descripcion

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)