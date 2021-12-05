const fs = require("fs")
//parse commands
let diagnostics = fs.readFileSync("../input.txt", "utf8").split("\r\n");

let diag = [];
let co2 = [];

for(let i = 0; i < diagnostics[0].length; i++) {
  if(diag.length == 1) break;
  let elemZero = i > 0 ? diag.filter(a => a.split("")[i] == "0") : diagnostics.filter(a => a.split("")[i] == "0")
  let elemOne = i > 0 ? diag.filter(a => a.split("")[i] == "1") : diagnostics.filter(a => a.split("")[i] == "1")

  diag = elemZero.length > elemOne.length ? elemZero : elemOne;
}

for(let i = 0; i < diagnostics[0].length; i++) {
  if(co2.length == 1) break;
  let elemZero = i > 0 ? co2.filter(a => a.split("")[i] == "0") : diagnostics.filter(a => a.split("")[i] == "0")
  let elemOne = i > 0 ? co2.filter(a => a.split("")[i] == "1") : diagnostics.filter(a => a.split("")[i] == "1")

  co2 = elemZero.length > elemOne.length ? elemOne : elemZero;
}

console.log(parseInt(diag[0], 2) * parseInt(co2[0], 2));