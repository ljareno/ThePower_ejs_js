const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let longestWord = avengers[0]

function findLongestWord(param) {
    let longestWord = param[0]
    for (let i of param) {
        if (longestWord.length < i.length) {
            longestWord = i
        }
    }
  return longestWord
}

console.log(findLongestWord(avengers))


