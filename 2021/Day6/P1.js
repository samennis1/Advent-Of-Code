const fs = require("fs");
let inputs = fs.readFileSync("input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));

let listOfFish = inputs[0].split(",").map(a => parseInt(a))

let days = 49;
let addFish = [];

while(days > 0) {
    for(let i = 0; i < listOfFish.length; i++) {
        if(listOfFish[i] > 0) {listOfFish[i]--; continue} 
        if(listOfFish[i] == 0) {
            addFish.push(8)
            listOfFish[i] = 6;
        }
    }
    listOfFish = listOfFish.concat(addFish)
    addFish = [];
    days--
}

console.log(listOfFish.length)