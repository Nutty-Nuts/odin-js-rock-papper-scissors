const button = document.querySelector("#select-button");
button.addEventListener("click", playRound);

var roundNumber = 0;
var playerScore = 0;
var computerScore = 0;

var computerPlay = () => {
    var numGen = Math.floor(Math.random() * 3);

    return numGen;
};

var translateSelection = (playerSelection) => {
    if (playerSelection.toLowerCase() == "rock") {
        return 0;
    } else if (playerSelection.toLowerCase() == "paper") {
        return 1;
    } else if (playerSelection.toLowerCase() == "scissors") {
        return 2;
    }
};

function playRound(event) {
    if (playerScore < 5 && computerScore < 5) {
        roundNumber++;

        const { select } = event.target.dataset;
        playerSelection = select;

        computerSelection = computerPlay();

        const matchHistory = document.querySelector("#match-history");
        const createLog = document.createElement("p");

        const player = document.querySelector(".player");
        const computer = document.querySelector(".computer");

        console.log(
            `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection}`
        );

        if (
            (playerSelection == "0" && computerSelection == "2") ||
            (playerSelection == "1" && computerSelection == "0") ||
            (playerSelection == "2" && computerSelection == "1")
        ) {
            console.log("Player Wins");
            createLog.textContent = `${roundNumber}: Player Wins`;
            playerScore++;
            matchHistory.appendChild(createLog);
            player.textContent = `Player: ${playerScore}`;
        } else if ((playerSelection = computerSelection)) {
            console.log("Draw");
            createLog.textContent = `${roundNumber}: Draw`;
            matchHistory.appendChild(createLog);
        } else {
            console.log("Computer Wins");
            createLog.textContent = `${roundNumber}: Computer Wins`;
            computerScore++;
            matchHistory.appendChild(createLog);
            computer.textContent = `Computer: ${computerScore}`;
        }
        gameWinLogic(playerScore, computerScore);
    }
}

var gameWinLogic = (playerScore, computerScore) => {
    const winner = document.querySelector("#winner");
    const whoWins = document.createElement("p");
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            whoWins.textContent = "Player Wins the Game";
            winner.appendChild(whoWins);
            console.log("Player Wins the Game");
        } else if (computerScore > playerScore) {
            whoWins.textContent = "Computer Wins the Game";
            winner.appendChild(whoWins);
            console.log("Computer Wins the Game");
        } else {
            console.log("Draw");
        }
    } else {
    }
};
