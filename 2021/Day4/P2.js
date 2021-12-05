const fs = require("fs");
let inputs = fs.readFileSync("../input.txt", "utf8").split("\r\n").map(a => a.replace("  ", " "));
let drawnNumbers = [];
let wonBoards = [];
let boards = [];

drawnNumbers.push(...inputs[0].split(","));
inputs = inputs.slice(2);

for(let i = 0; i < inputs.length; i += 6) {
    let rows = [inputs[i].split(" "), inputs[i+1].split(" "), inputs[i+2].split(" "), inputs[i+3].split(" "), inputs[i+4].split(" ")]
    boards.push(rows);
} 

for(let number of drawnNumbers) {
    for(let i = 0; i < boards.length; i++) {
        if(hasWon(i)) continue;
        for(let j = 0; j < boards[i].length; j++) {
            let hasNum = boards[i][j].indexOf(number);
            if(hasNum == -1) continue;
            while(hasNum > -1) {
                boards[i][j][hasNum] = "-"
                hasNum = boards[i][j].indexOf(number)
            }
            let length = boards[i][j].length;
            if(boards[i][j].filter(b => b == "-").length == length) {
                winner(i, number);
                break;
            };
        }
            for(let j = 0; j < boards[i].length; j++) {
                let columns = [boards[i][0][j], boards[i][1][j], boards[i][2][j], boards[i][3][j], boards[i][4][j]]
                if(columns.filter(a => a == "-").length == columns.length) {
                    winner(i, number)
                    break;
                }
            }
    }
}

winnerCalc(wonBoards[wonBoards.length-1])

function winner(i, num) {
    wonBoards.push({i, num});
}

function hasWon(i) {
    return wonBoards.filter(a => a.i == i).length > 0;
}

function winnerCalc({i, num}) {
    let board = boards[i];
    console.log("WINNER", board);
    let total = 0;
    for(let i = 0; i < board.length; i++) {
        board[i] = board[i].filter(a => a !== "-");
        total = total + board[i].reduce((a, b) => a + parseInt(b), 0)
    }
    console.log(total, num);
    console.log("ANSWER", total * num)
}