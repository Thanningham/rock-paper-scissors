function getComputerChoice() {
    let computerChoiceNumber = getRandomInt(3)
    if (computerChoiceNumber === 0) {
        return "rock";
    }
    else if (computerChoiceNumber === 1) {
        return "paper";
    }
    else if (computerChoiceNumber === 2) {
        return "scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    return humanChoice;     
}

function playGame () {
    
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`)
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        }
    }

    for (let i=0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore === computerScore){
        console.log("It's a tie!")
    } else {
        console.log("You lose!")
    }

    console.log(`Final Score:
    Player: ${humanScore}
    Computer: ${computerScore}`)
}

playGame();

