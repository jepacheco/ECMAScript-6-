//Spread
const obj = {
    name: 'jesus',
    age: 27,
    country: 'SP'
}

let { name, ...all } = obj
console.log(name, all)

//------------------------------------------
//Propagation

const obj = {
    name: 'jesus',
    age: 27,
    country: 'SP'
}

const obj1 = {
    ...obj,
    country: 'SP'
}

console.log(obj1);

//------------------------------------------------
//Promise Finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))