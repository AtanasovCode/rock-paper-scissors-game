const choices = document.querySelectorAll(".choice");
const imgChoices = document.querySelectorAll(".imgChoice");
const pscore = document.querySelector(".player-score");
const cscore = document.querySelector(".computer-score");
const roundPlayed = document.querySelector(".rounds");
const newRound = document.querySelector(".btn");

const playerChoice = document.querySelector(".player-selected");
const computerChoice = document.querySelector(".computer-selected");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const winner = document.querySelector(".winner");

let playerScore = 0;
let computerScore = 0;
let round = 0;

function computerSelect() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", playRound);
});

function playRound(e) {
    let c = computerSelect();
    let p = e.target.id;
    if (p === "rock") {
        playerChoice.style.cssText = "background-image: url(images/rock.png);";
    } else if (p === "paper") {
        playerChoice.style.cssText = "background-image: url(images/paper.png);";
    } else if (p === "scissors") {
        playerChoice.style.cssText = "background-image: url(images/scissors.png);";
    }
    if (c === "rock") {
        computerChoice.style.cssText = "background-image: url(images/rock.png);";
    } else if (c === "paper") {
        computerChoice.style.cssText = "background-image: url(images/paper.png);";
    } else if (c === "scissors") {
        computerChoice.style.cssText =
            "background-image: url(images/scissors.png);";
    }
    if (p === c) {
        winner.textContent = "DRAW";
        round++;
        roundCount(round);
        updateScore(0);
    } else if (p === "rock" && c === "paper") {
        winner.textContent = "rock loses to paper";
        updateScore(2);
        round++;
        roundCount(round);
    } else if (p === "paper" && c === "rock") {
        winner.textContent = "paper beats rock";
        updateScore(1);
        round++;
        roundCount(round);
    } else if (p === "rock" && c === "scissors") {
        winner.textContent = "rock beats scissors";
        updateScore(1);
        round++;
        roundCount(round);
    } else if (p === "scissors" && c === "rock") {
        winner.textContent = "scissors lose to rock";
        updateScore(2);
        round++;
        roundCount(round);
    } else if (p === "paper" && c === "scissors") {
        winner.textContent = "paper loses to scissors";
        updateScore(2);
        round++;
        roundCount(round);
    } else if (p === "scissors" && c === "paper") {
        winner.textContent = "scissors beats paper";
        updateScore(1);
        round++;
        roundCount(round);
    }
}

function removeScore() {
    pscore.textContent = 0;
    cscore.textContent = 0;
    playerScore = 0;
    computerScore = 0;
}

function roundCount(x) {
    if (x === 5) {
        whoWon(playerScore, computerScore);
        roundPlayed.textContent = x;
        choices.forEach((choice) => {
            choice.removeEventListener("click", playRound);
            choice.classList.remove("active");
        });
    }
    roundPlayed.textContent = x;
}

function updateScore(x) {
    if (x === 1) {
        playerScore++;
        pscore.textContent = playerScore;
    } else if (x === 2) {
        computerScore++;
        cscore.textContent = computerScore;
    }else if(x === 0) {
        console.log("Ignore");
    }
}

function whoWon(x, y) {
    if (x === y) {
        winner.textContent = "Game Ended In A Draw!";
    } else if (x > y) {
        winner.textContent = "Player Won This Game!";
    } else if(x < y) {
        winner.textContent = "Computer Won This Game!";
    }
}

newRound.addEventListener("click", () => {
    roundCount(0);
    winner.textContent = "Who Will Win?";
    round = 0;
    removeScore();
    computerChoice.style.cssText = "background-image: none;";
    playerChoice.style.cssText = "background-image: none;";
    choices.forEach((choice) => {
        choice.addEventListener("click", playRound);
        choice.classList.add("active");
    });
});
