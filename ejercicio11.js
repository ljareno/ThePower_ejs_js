const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let suma = 0
    for (let i of param) {
        if (typeof(i) === 'number') {
            suma += i
        } else {
            suma += i.length
        }
    }
    return suma
}

console.log(averageWord(mixedElements))