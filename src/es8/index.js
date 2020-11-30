//Object entries es8: muesta los valores como matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entradas = Object.entries(data)
console.log(entradas)
console.log(entradas.length)

//----------------------------------------------------------
//Object values, muestra los valores como arreglos
const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
const values = Object.values(data2)
console.log(values)
console.log(values.length)

//-------------------------------------------------------------
//Padding, concatena strings al principio o al final

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '---------'))
console.log('food'.padEnd(12, '  ----------yes'))

//-------------------------------------------------------------
//Trailing-Comas, anade mas elementos a un objeto solo agregando una coma al final de cada uno
const obj = {
    name: 'Jesus', // <---------esta coma
}

//-------------------------------------------------------------
//Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test Error'))
    })
}

const helloAsync = async() => {
    const hello = await helloWorld()
    console.log(hello);
}
helloAsync()

const anotherFunction = async() => {
    try {
        const hello = await helloWorld()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction()