
// Select all elements with the class 'xobox' and store them in the 'boxes' variable
// Select the element with the ID 'gamestatus' and store it in the 'gStatus' variable
// Select the element with the ID 'restartgame' and store it in the 'restartButt' variable

const boxes = document.querySelectorAll('.xobox');
const gStatus = document.querySelector('#gamestatus');
const restartButt = document.querySelector('#restartgame');

// Define HTML strings for the 'X' and 'O' symbols
let x = "<img src='assets/Xsymbol.png'>";
let o = "<img src='assets/Osymbol.png'>";

// Define winning combinations for the tic-tac-toe game

const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Initialize an array to represent the current state of the tic-tac-toe board
let playOptions = ["", "", "", "", "", "", "", "", ""];

// Initialize variables to track the current player, symbol, and game state
let currentPlayer = x;
let player = "X"; 
let running = false;

// Call the initialization function to set up event listeners and game state
init();

// Initialization function
function init() {
    boxes.forEach(box => box.addEventListener('click', boxClick));
    restartButt.addEventListener('click', restartGame);
    gStatus.textContent = `${player} Your Turn`;
    running = true;
}

// Function called when a box is clicked
function boxClick() {
    const index = this.dataset.index;
    if (playOptions[index] !== "" || !running) {
        return;
    }
    updateBox(this, index);
    checkWinner();
}


// Function to update the game board when a box is clicked
function updateBox(box, index) {
    playOptions[index] = player;
    box.innerHTML = currentPlayer;
}

// Function to update the game board when a box is clicked
function changePlayer() {
    player = (player === 'X') ? 'O' : 'X';
    currentPlayer = (currentPlayer === x) ? o : x;
    gStatus.textContent = `${player} Your Turn`;
}

// Function to check for a winner or a draw
function checkWinner() {
    let isWon = false;

    // Iterate through each winning combination

    for (let i = 0; i < winCombo.length; i++) {
        const condition = winCombo[i];
        const box1 = playOptions[condition[0]];
        const box2 = playOptions[condition[1]];
        const box3 = playOptions[condition[2]];
        if (box1 === "" || box2 === "" || box3 === "") {
            continue;
        }
        // Check if the combination has a winner

        if (box1 === box2 && box2 === box3) {

            // Mark the winning boxes and set the 'isWon' flag to true
            isWon = true;
            boxes[condition[0]].classList.add('win');
            boxes[condition[1]].classList.add('win');
            boxes[condition[2]].classList.add('win');
        }
    }

    if (isWon) {
        gStatus.textContent = `${player} Won..`;
        running = false;
    } else if (!playOptions.includes("")) {
        gStatus.textContent = `Game Draw..!`;
        running = false;
    } else {
        changePlayer();
    }
}


// Function to restart the game
function restartGame() {
    playOptions = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = x;
    player = "X";
    running = true;
    gStatus.textContent = `${player} Your Turn`;

// Reset the visual appearance of the boxes
    boxes.forEach(box => {
        box.innerHTML = "";
        box.classList.remove('win');
    });
}