const fs = require("fs");
let inputs = fs.readFileSync("input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));

let signal = inputs.map(a => a.split("|")[0].trim())
let renderInp = inputs.map(a => a.split("|")[1].trim())
let render = [];

let arr = [2,4,3,7]
let amt = 0;

for(let elem of renderInp) {
    render.push(...elem.split(" "))
}

for(let num of render) {
    let length = num.length;
    let howMany = arr.filter(a => a == length).length;
    if(howMany > 1 || howMany == 0) continue;
    console.log("PASSED",num)
    amt+=1;
}

console.log(amt)