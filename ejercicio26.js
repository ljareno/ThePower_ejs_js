const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (let i of products) {
    if (i.sellCount > 20) {
        goodProducts.push(i)
    } else {
        badProducts.push(i)
    }
}

console.log(goodProducts)
console.log(badProducts)