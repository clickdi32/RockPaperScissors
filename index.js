"use strict";
let playerScore = 0;
let compScore = 0;
const elmPlayerScore = document.querySelector("#player-score");
const elmCompScore = document.querySelector("#computer-score");
const elmResult = document.querySelector("#result");
const elmCompChoice = document.querySelector("#computer-choice");
const elmRock = document.querySelector("#rock");
const elmPaper = document.querySelector("#paper");
const elmScissors = document.querySelector("#scissors");
const btnPlayAgain = document.querySelector("#play-again");

let rock2 = "rock",
    paper2 = "paper",
    scissors2 = "scissors";

btnPlayAgain.addEventListener("click", () => {
    playerScore = 0;
    compScore = 0;
    elmCompScore.innerText = compScore;
    elmPlayerScore.innerText = playerScore;
    elmResult.innerText = "Choose your weapon!";
    elmCompChoice.innerHTML = "";
    elmRock.style.pointerEvents = "auto";
    elmPaper.style.pointerEvents = "auto";
    elmScissors.style.pointerEvents = "auto";
});

const compOptione = ["rock", "paper", "scissors"];

function randomCompChoice(arr) {
    let compRandom = Math.floor(Math.random() * arr.length);
    return arr[compRandom];
    }

function whoWinner (player, computer){
    if (player === computer) {
        elmResult.innerText = "DRAW!";
        elmCompChoice.innerText = computer;
    } else if (player === "paper" && computer === "rock") {
        playerScore++;
        elmPlayerScore.innerText = playerScore;
        elmResult.innerText = "Player +1";
        elmCompChoice.innerHTML = `Computer Choised:<i class="fas fa-hand-rock"></i>`;
    } else if (player === "rock" && computer === "scissors") {
        playerScore++;
        elmPlayerScore.innerText = playerScore;
        elmResult.innerText = "Player +1";
        elmCompChoice.innerHTML = `Computer Choised:<i class="fas fa-hand-scissors"></i>`;
    } else if (player === "scissors" && computer === "paper") {
        playerScore++;
        elmPlayerScore.innerText = playerScore;
        elmResult.innerText = "Player +1";
        elmCompChoice.innerHTML = `Computer Choised:<i class="fas fa-hand-paper"></i>`;
    } else if (computer === "paper" && player === "rock") {
        compScore++;
        elmCompScore.innerText = compScore;
        elmResult.innerText = "Computer +1";
        elmCompChoice.innerHTML = `Computer Choised:<i class="fas fa-hand-paper"></i>`;
    } else if (computer === "rock" && player === "scissors") {
        compScore++;
        elmCompScore.innerText = compScore;
        elmResult.innerText = "Computer +1";
        elmCompChoice.innerHTML = `Computer Choised:<i class="fas fa-hand-rock"></i>`;
    } else if (computer === "scissors" && player === "paper") {
        compScore++;
        elmCompScore.innerText = compScore;
        elmResult.innerText = "Computer +1";
        elmCompChoice.innerHTML = `Computer Choised:<i class="fas fa-hand-scissors"></i>`;
    }
    ifWin();
};

function rock() {
    whoWinner(rock2, randomCompChoice(compOptione));
}

function paper() {
    whoWinner(paper2, randomCompChoice(compOptione));
}

function scissors() {
    whoWinner(scissors2, randomCompChoice(compOptione));
    ifWin();
}

function ifWin() {
    if (playerScore === 10) {
        elmResult.innerText = "Player Winner";
        blockedButton();
    }
    if (compScore === 10) {
        elmResult.innerText = "Computer Winner";
        blockedButton();
    }
}

function blockedButton() {
    elmCompChoice.innerHTML = "Play Again";
    elmRock.style.pointerEvents = "none";
    elmPaper.style.pointerEvents = "none";
    elmScissors.style.pointerEvents = "none";
}
