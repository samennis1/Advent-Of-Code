const fs = require("fs");
let inputs = fs.readFileSync("input.txt", 'utf-8').trim().split("\n");

let depth = 0;
let hor = 0;

for(let i = 0; i < inputs.length; i++) {
    solve(i);
}


function solve(i) {
    let t = inputs[i].split(" ")[1];
    let type = inputs[i].split(" ")[0];

    if(type == 'forward') {
        hor = hor + parseInt(t);
    }
    if(type == 'down') {
        depth = depth + parseInt(t);
    }

    if(type == 'up') {
        depth = depth - parseInt(t);
    }
}

console.log(depth*hor)