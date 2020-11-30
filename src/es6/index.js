function newFunction(name, age, country) {
    var name = name || 'Oscar'
    var age = age || 32
    var country = country || 'SP'
    console.log(name, age, country);
}


//es6------------------
function newFunction2(name = 'oscar', age = 32, country = "SP") {
    console.log(name, age, country);

}

newFunction2();
newFunction2('Jesus', 27, 'VZLA')

//-----------------------------------------
let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

//es6------------------
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//------------------------------------------
let lorem = "Esto es una frase muy epica para poder dejar espaciados \n" +
    "concatenada con otra mas epica aun."
console.log(lorem)

//es6------------------
let lorem2 = `otra frase epica pero con las comillas francesas
y un salto de linea chingon`
console.log(lorem2)

//----------------------------------------------------
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age)

//es6------------------
let { name, age, country } = person
console.log(name, age)

//------------------------------------------------
let team = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

//es6------------------
let education = ['David', ...team, ...team2]
console.log(education)

//----------------------------------------------
let name = 'Oscar'
let age = 32

obj = {
    name: name,
    age: age
}

//es6------------------
obj2 = { name, age }
console.log(obj2);

//----------------------------------------------
const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]
let listOfNames = names.map(function(item) {
    console.log(item.name);
})

//es6------------------
let listOfNames2 = names.map(item => console.log(item.name))
const listOfNames3 = (name, age, country) => {
    //...
}
const listOfNames4 = name => {
    //...
}

//guardamos en una variable el resultado
//de una funcion que recibe un numero como
//parametro y retorna la multiplicacion con el mismo
const square = num => num * num;

//-------------------------------------------------------------
//Promesas en es6
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey all good')
        } else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

//--------------------------------------------------------------
//Clases es6
class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 2))

//--------------------------------------------------------
//Modulos es6
import { hello } from './module'
console.log(hello());

//--------------------------------------------------
//Generadores
function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)