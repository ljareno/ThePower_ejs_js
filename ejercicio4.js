// 4.1
const avengers_4_1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers_4_1[0]);

// 4.2
const avengers_4_2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers_4_2[0] = 'IRONMAN';

// 4.3
const avengers_4_3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers_4_3.length);

// 4.4
const rickAndMortyCharacters_4_4 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters_4_4.push('Morty', 'Summer');
console.log(rickAndMortyCharacters_4_4[rickAndMortyCharacters_4_4.length - 1]);

// 4.5
const rickAndMortyCharacters_4_5 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters_4_5.pop();
console.log(rickAndMortyCharacters_4_5[0]);
console.log(rickAndMortyCharacters_4_5[rickAndMortyCharacters_4_5.length - 1]);

// 4.6
const rickAndMortyCharacters_4_6 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters_4_6.splice(1, 1); 
console.log(rickAndMortyCharacters_4_6)
