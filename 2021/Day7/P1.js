const fs = require("fs");
let inputs = fs.readFileSync("input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));
let list = inputs[0].split(",").map(a => parseInt(a));

let shortest = {}

for(let i = 0; i < list.length; i++) {
    let dist = 0;
    for(let item of list) {
        dist += Math.abs(item - list[i]);
    }
    let avgDist = dist / list.length;
    if(!shortest) {shortest.index =  i; shortest.distance = avgDist; continue;}
    if(shortest.distance <= avgDist) continue;
    console.log(shortest)
    shortest = {index: i, distance: avgDist}
}

let totalFuel = 0;

for(let item of list) {
    let dist = Math.abs(list[shortest.index]-item);
    let fuelCost = 0;
    for(let j = 0; j < dist; j++) {
        fuelCost += j;
    }
    totalFuel += dist;
}

console.log(totalFuel)