let computerScore = 0;
let humanScore = 0;
const choices = ["rock", "paper", "scissors"];
const WINNINGSCORE = 5;


function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(humanChoice, computerChoice) {

    const humanWins = ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))

    if (humanChoice === computerChoice) {
        winnerAnnouncement.textContent = "It's a tie!";
        return;
    }

    if (humanWins) {
        winnerAnnouncement.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        winnerAnnouncement.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    updateScoreDisplay();
    checkWinner();
}

function checkWinner() {
    if (humanScore < WINNINGSCORE && computerScore < WINNINGSCORE) {
        return;
    } 
    winnerAnnouncement.textContent = 
    resetGame();
}

function createButtons() {
    const buttonSection = document.createElement("div");
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => playRound(choice, getComputerChoice()));
        buttonSection.appendChild(button);
    })
    document.body.appendChild(buttonSection);
}

function updateScoreDisplay() {
    computerScoreDisplay.textContent =`Computer Score: ${computerScore}`;
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay ();
}

const resultDisplay = document.createElement("div");
const humanScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");
const winnerAnnouncement = document.createElement("p");

createButtons();
resultDisplay.appendChild(computerScoreDisplay);
resultDisplay.appendChild(humanScoreDisplay);
resultDisplay.appendChild(winnerAnnouncement);
document.body.appendChild(resultDisplay);
updateScoreDisplay();








