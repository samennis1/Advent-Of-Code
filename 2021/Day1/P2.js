const fs = require("fs");
let inputs = fs.readFileSync("input.txt", 'utf-8').trim().split("\r").filter(a => a !== "");
for(let i=0; i < inputs.length; i++) {inputs[i] = parseInt(inputs[i].replace("\n", "").trim())}
let greater = 0;

for(let i = 0; i < inputs.length; i++) {
    console.log(`Case #${i+1}: ${solve(i)}`)
}

console.log(greater);


function solve(i) {
    let A = parseInt(inputs[i] + inputs[i+1] + inputs[i+2]);
    let B = parseInt(inputs[i+1] + inputs[i+2] + inputs[i+3]);

    if(isNaN(A) || isNaN(B)) return true;
    let isGreater = B > A;
    if(!isGreater) return false;
    greater = greater + 1;
    return isGreater;
}