const fs = require("fs");
let inputs = fs.readFileSync("../input.txt", 'utf-8').trim().split("\n").filter(a => a !== "");
console.log(inputs.length);
let previous;
let greater = 0;

for(let i = 0; i < inputs.length; i++) {
    console.log(`Case #${i+1}: ${solve(parseInt(inputs[i]))}`)
}

console.log(greater);


function solve(term) {
    let isGreater = term > (previous ? previous : term);
    previous = term;
    if(!isGreater) return false;

    greater = greater+1;

    return isGreater;
}