const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let suma = 0
    for (let i of param) {
        suma += i
    }
    return suma
}

console.log(sumAll(numbers))