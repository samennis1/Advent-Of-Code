const fs = require("fs");
let inputs = fs.readFileSync("input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));

let signal = inputs.map(a => a.split("|")[0].trim())
let render = inputs.map(a => a.split("|")[1].trim())

let arr = [6,2,5,5,4,5,6,3,7,6]
let total = 0;

console.time("RUN")

function includes(elem, array) {
    let includes = true;
    let search = [].concat(...array.map(a => a.split("")))
    for(let i of search) {if(!elem.includes(i)) {includes = false; break}}
    return includes;
}

for(let i = 0; i < render.length; i++) {
    let signals = signal[i];
    let renders = render[i];
    let renderSplit = renders.split(" ");
    let signalSplit = signals.split(" ");
    let meanings = {};
    
    for(let elem of signalSplit) {
        let length = elem.length;
        let howMany = arr.filter(a => a == length);
        if(howMany.length == 0 || howMany.length > 1) continue;
        meanings[arr.indexOf(howMany[0])] = elem;
        signalSplit = signalSplit.filter(a => a !== elem);
    }
    for(let elem of signalSplit) {
        if(elem.length !== 6) continue;
        if(!includes(elem, [meanings['1']])) {meanings['6'] = elem; continue;}
        if(includes(elem, [meanings['1'], meanings['4']])) {meanings['9'] = elem; continue;}
        signalSplit = signalSplit.filter(a => a !== elem)
        meanings['0'] = elem;
    }

    for(let elem of signalSplit) {
        if(elem.length !== 5) continue;
        if(includes(elem, [meanings['1']])) {meanings[3] = elem; continue;}
        if(includes(meanings['9'], [elem])) {meanings[5] = elem; continue;}
        meanings[2] = elem;
    }
    let ans = "";
    for(let item of renderSplit) {
        let split = item.split("");
        for(let [key, v] of Object.entries(meanings)) {
            if(JSON.stringify(split.sort()) !== JSON.stringify(v.split("").sort())) continue;
            ans += key;
        }
    }
    total += parseInt(ans);
}

console.log(total);
console.timeEnd("RUN")
