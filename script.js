let computerScore = 0;
let humanScore = 0;
const choices = ["rock", "paper", "scissors"];
const WINNINGSCORE = 5;
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundWinnerTextDisplay = document.querySelector("#round-winner-text-display")
const buttons = document.querySelectorAll(".choices");
const computerChoiceTextDisplay= document.querySelector("#computer-choice-text-display");
const gameWinnerTextDisplay = document.querySelector("#game-winner-text-display");
const playAgainButton = document.querySelector("#play-again");
let gameOver = false;


function getComputerChoice() {
    return choices[getRandomInt(choices.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(humanChoice, computerChoice) {
    if (gameOver) {
        return;
    }
    computerChoiceTextDisplay.textContent = `Computer picked: ${computerChoice}`
    humanChoice = humanChoice.toLowerCase()
    const humanWins = ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))

    if (humanChoice === computerChoice) {
        roundWinnerTextDisplay.textContent = "It's a tie!";
        return;
    }

    if (humanWins) {
        roundWinnerTextDisplay.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        roundWinnerTextDisplay.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    updateScoreDisplay();
    checkWinner();
}

function checkWinner() {
    if (humanScore < WINNINGSCORE && computerScore < WINNINGSCORE) {
        return;
    }

    if (humanScore >= WINNINGSCORE) {
        gameWinnerTextDisplay.textContent = `You win!`
    } else {
        gameWinnerTextDisplay.textContent = `Computer wins!`
    }
    gameOver = true;
    playAgainButton.hidden = false;
    playAgainButton.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}

function initializeButtons() {
    buttons.forEach(button => {
        button.addEventListener("click", () => playRound(button.dataset.choice, getComputerChoice()));
    })
    playAgainButton.addEventListener("click", resetGame)
}

function updateScoreDisplay() {
    computerScoreDisplay.textContent = `${computerScore}`;
    humanScoreDisplay.textContent = `${humanScore}`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameWinnerTextDisplay.textContent = "";
    computerChoiceTextDisplay.textContent = "";
    roundWinnerTextDisplay.textContent = "";
    gameOver = false;
    playAgainButton.hidden = true;
    updateScoreDisplay ();
}


initializeButtons();
updateScoreDisplay();








