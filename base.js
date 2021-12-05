const fs = require("fs");
let inputs = fs.readFileSync("../input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));

for(let i = 0; i < inputs.length; i++) {
    console.log(`Case #${i}: ${solve(inputs[i])}`)
}

function solve(term) {
    
}