const fs = require("fs");
let inputs = fs.readFileSync("../input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));
let drawnNumbers = [];
let boards = [];

drawnNumbers.push(...inputs[0].split(","));
inputs = inputs.slice(2);

for(let i = 0; i < inputs.length; i += 6) {
    let rows = [inputs[i].split(" "), inputs[i+1].split(" "), inputs[i+2].split(" "), inputs[i+3].split(" "), inputs[i+4].split(" ")]
    boards.push(rows);
} 

for(let number of drawnNumbers) {
    for(let i = 0; i < boards.length; i++) {
        for(let j = 0; j < boards[i].length; j++) {
            let hasNum = boards[i][j].indexOf(number);
            if(hasNum == -1) continue;
            while(hasNum > -1) {
                boards[i][j][hasNum] = "-"
                hasNum = boards[i][j].indexOf(number)
            }
            let length = boards[i][j].length;
            if(boards[i][j].filter(b => b == "-").length == length) {
                winner(boards[i], number);
                return;
            };
        }
            for(let j = 0; j < boards[i].length; j++) {
                let columns = [boards[i][0][j], boards[i][1][j], boards[i][2][j], boards[i][3][j], boards[i][4][j]]
                if(columns.filter(a => a == "-").length == columns.length) {
                    winner(boards[i], number)
                    return;
                }
            }
    }
}

function winner(board, num) {
    console.log("WINNER", board);
    let total = 0;
    for(let i = 0; i < board.length; i++) {
        board[i] = board[i].filter(a => a !== "-");
        total = total + board[i].reduce((a, b) => a + parseInt(b), 0)
    }
    console.log(total, num);
    console.log("ANSWER", total * num)
}