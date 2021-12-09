const fs = require("fs");
let inputs = fs.readFileSync("input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));

let listOfFish = inputs[0].split(",").map(a => parseInt(a))
let days = 256;

let fish = [];
for (const current of listOfFish) {
    fish[current] = (fish[current] ?? 0) + 1;
}

for (let i = 0; i < days; i++) {
    const breedingFish = fish.shift() ?? 0;
    fish[6] = (fish[6] ?? 0) + breedingFish;
    fish[8] = breedingFish;
}

console.log(fish.reduce((a,b) => a + b))