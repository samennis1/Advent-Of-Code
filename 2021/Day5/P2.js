const fs = require("fs");
let inputs = fs.readFileSync("input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));

let listOfPoints = [];
console.time("TIME TO RUN")
for(let line of inputs) {
    let split = line.split("->")
    let startLine = split[0].trim()
    let endLine = split[1].trim();
    let x = parseInt(startLine.split(",")[0]);
    let y = parseInt(startLine.split(",")[1]);
    
    let x2 = parseInt(endLine.split(",")[0]);
    let y2 = parseInt(endLine.split(",")[1]);
    
    let isDiagonal = x !== x2 && y !== y2;
    
    if(isDiagonal) {
        console.log("BASE", {x, y}, {x2, y2})
        let dist = (Math.max(x, x2) - Math.min(x, x2)) + 1;
        let lowestPoint = Math.max(x, x2) == x2 ? {x, y} : {x: x2, y: y2}
        console.log("LOWEST", lowestPoint)
        let isBiggerX = Math.min(x, x2) == lowestPoint.x ? false : true
        let isBiggerY = Math.min(y, y2) == lowestPoint.y ? false : true
        console.log("DIST", {x, y}, {x2, y2}, dist)
        for(let i = 0; i < dist; i++) {
            if(i == 0) {listOfPoints.push(lowestPoint); console.log("POINT", lowestPoint); continue;}
            let point = {x: isBiggerX ? lowestPoint.x - i : lowestPoint.x + i, y: isBiggerY ? lowestPoint.y - i : lowestPoint.y + i}
            listOfPoints.push(point)
            console.log("POINT", point)
        }
        
    } else if (x2 !== x) {
        for(let i = Math.min(x , x2); i <= Math.max(x, x2); i++) {
            listOfPoints.push({x: i, y});
            console.log("CHANGING X", {x: i, y})
        }
    } else if(y2 !== y) {
        for(let i = Math.min(y, y2); i <= Math.max(y, y2); i++) {
            listOfPoints.push({x, y: i});
            console.log("CHANGING Y", {x, y: i})
        }
    }
}

let endPoints = {};

for(let point of listOfPoints) {
    let string = `${point.x},${point.y}`
    console.log("CHECKING", string)
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

console.log(amount)

console.timeEnd("TIME TO RUN")
//=========================================================================================================