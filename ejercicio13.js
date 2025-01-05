const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(param, nombre) {
    let si_no = false;
    if (param.includes(nombre)) {
        si_no = true
    }
    return si_no
}

console.log(finderName(nameFinder, 'Logan'))
console.log(finderName(nameFinder, 'Laura'))