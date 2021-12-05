const fs = require("fs");
let inputs = fs.readFileSync("../input.txt", 'utf-8').trim().split("\n").filter(a => a !== "");

let ints = [];
let gamma = "";
let ep = "";

for(let i = 0; i < 12; i++) {
    ints = [];
    console.log(i)
    for(let j = 0; j < inputs.length; j++) {
        ints.push(inputs[j].split("")[i]);
    }
    solve(ints.filter(a => a!=="\r"));
}

function solve(array) {
    let numOf = [];

    for(let term of array) {
        numOf[parseInt(term)] = numOf[parseInt(term)] ? numOf[parseInt(term)] + 1 : 1;
    }

    let gammaBit = numOf[0] > numOf[1] ? 0 : 1;
    let epBit = gammaBit == 1 ? 0 : 1;


    gamma = gamma + gammaBit;
    ep = ep + epBit;
}

console.log(parseInt(parseInt(gamma, 2) * parseInt(ep, 2)))