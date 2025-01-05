const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(param) {
    let words = {};

    for (let i of param) {
        if (words[i]) {
            words[i] += 1
        } else {
            words[i] = 1
        }
    }

    return words
}

console.log(repeatCounter(counterWords))