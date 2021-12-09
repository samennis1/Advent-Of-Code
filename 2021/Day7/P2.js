const fs = require("fs");
let inputs = fs.readFileSync("input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));
let list = inputs[0].split(",").map(a => parseInt(a)).sort((a,b) => b-a)

let shortest = {}

function sumOfN(n) {
    let sum = 0;
    while(n > 0) {
        sum+= n;
        n--
    }
    return sum;
}

for(let i = 0; i < list[0]; i++) {
    let dist = 0;
    for(let item of list) {
        dist += sumOfN(Math.round(Math.abs(i - item)));
    }
    let avgDist = dist / list.length;
    console.log("I", i, "DIST", avgDist)
    if(!shortest) {shortest = {i, avgDist}; continue;}
    if(shortest.avgDist <= avgDist) continue;
    shortest = {i, avgDist}
}

let totalFuel = 0;

for(let item of list) {
    let dist = Math.abs(shortest.i-item);
    let fuelCost = 0;
    for(let j = 1; j <= dist; j++) {
        fuelCost += j;
    }
    totalFuel += fuelCost;
}

console.log(totalFuel)