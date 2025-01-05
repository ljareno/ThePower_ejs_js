const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let cont_fruits = 0
for (let i of foodSchedule) {
    if (i.isVegan) {
        i.name = fruits[cont_fruits]
        cont_fruits += 1
        i.isVegan = false
    }
}

console.log(foodSchedule)