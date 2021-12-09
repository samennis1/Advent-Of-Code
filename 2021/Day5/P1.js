const fs = require("fs");
let inputs = fs.readFileSync("./input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));

let listOfPoints = [];

for(let line of inputs) {
    let split = line.split("->")
    let startLine = split[0].trim()
    let endLine = split[1].trim();
    let x = parseInt(startLine.split(",")[0]);
    let y = parseInt(startLine.split(",")[1]);

    let x2 = parseInt(endLine.split(",")[0]);
    let y2 = parseInt(endLine.split(",")[1]);

    if(x !== x2 && y !== y2) continue;
 
    if(x2 !== x) {
        for(let i = Math.min(x , x2); i <= Math.max(x, x2); i++) {
            listOfPoints.push({x: i, y});
        }
    }

    if(y2 !== y) {
        for(let i = Math.min(y, y2); i <= Math.max(y, y2); i++) {
            listOfPoints.push({x, y: i});
        }
    }
}

let endPoints = {};

for(let point of listOfPoints) {
    let string = `${point.x},${point.y}`
    console.log("PROCESSING POINT -> ", string)
    let exists = endPoints[string];
    if(exists) {
        endPoints[string] = endPoints[string] + 1;
    } else {
        endPoints[string] = 1;
    }
}

let amount = 0;

for (let key of Object.keys(endPoints)) {
    amount = amount + (endPoints[key] >= 2 ? 1 : 0)
}

console.log(amount);