const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

let sumaVentas = 0;

for (let i of products) {
    sumaVentas += i.sellCount
}

let mediaVentas = sumaVentas / products.length
console.log(`La media de las ventas es ${mediaVentas}`)
