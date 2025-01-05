const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
];

let peliculaPequeña = [];
let peliculaMediana = [];
let peliculaGrande = [];

for (let i of movies) {
    if (i.durationInMinutes < 100) {
        peliculaPequeña.push(i)
    } else if (i.durationInMinutes >= 100 && i.durationInMinutes < 200) {
        peliculaMediana.push(i)
    } else {
        peliculaGrande.push(i)
    }
}

console.log(peliculaPequeña)
console.log(peliculaMediana)
console.log(peliculaGrande)

