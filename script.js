var cell1 = document.getElementById('box1');
var cell2 = document.getElementById('box2');
var cell3 = document.getElementById('box3');
var cell4 = document.getElementById('box4');
var cell5 = document.getElementById('box5');
var cell6 = document.getElementById('box6');
var cell7 = document.getElementById('box7');
var cell8 = document.getElementById('box8');
var cell9 = document.getElementById('box9');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']
let gameActive = true;

function CheckWinner() {

    const winner = [[cell1, cell2, cell3], [cell4, cell5, cell6], [cell7, cell8, cell9],
                    [cell1, cell4, cell7], [cell2, cell5, cell8], [cell3, cell6, cell9],
                    [cell1, cell5, cell9], [cell3, cell5, cell7]
                ];
            
    for(const pattern of winner) {

        const [a, b, c] = pattern;

        if(a.innerText !== '' && a.innerText === b.innerText && b.innerText === c.innerText) {
           
            return a.innerText
            
        }
    }
    
    return null;
}

function checkTie() {

   return gameBoard.every(cell => cell !== '');
}


function cellClick(cell) {

    console.log('cell clicked: ', cell);

    if(!gameActive || cell.innerText !== '') {
        return;
    }

    cell.innerText = currentPlayer;
    gameBoard[cell.id.slice(-1) - 1] = currentPlayer;

    const winner = CheckWinner();

    if(winner) {
        
        displayConfetti();
        setTimeout(() => {
            alert(`Player ${winner} won!!`);
        }, 1500);
       
        gameActive = false;
        return;
    }

    const tie = checkTie();

    if(tie) {

        alert(`No winner! Tie!!`);
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : "X";

}

function restartGame() {

    for(let i = 1; i <= 9; ++i) {

        const cell = document.getElementById(`box${i}`)
        cell.innerText = '';
    }

    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameActive = true;
}

function displayConfetti() {

    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
        emojiSize: 100,
        confettiNumber: 5000,
        confettiSpeed: 5,
        confettiRotation: 45,  
        confettiRotationSpread: 180,
     })

}