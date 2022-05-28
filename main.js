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
    roundNumber++;

    const { select } = event.target.dataset;
    playerSelection = select;

    computerSelection = computerPlay();

    const matchHistory = document.querySelector("#match-history");
    const createLog = document.createElement("p");

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

        return 0;
    } else if ((playerSelection = computerSelection)) {
        console.log("Draw");
        createLog.textContent = `${roundNumber}: Draw`;
        matchHistory.appendChild(createLog);

        return 1;
    } else {
        console.log("Computer Wins");
        createLog.textContent = `${roundNumber}: Computer Wins`;
        computerScore++;
        matchHistory.appendChild(createLog);

        return 2;
    }
}

var gameWinLogic = (playerScore, computerScore) => {
    const winner = document.querySelector(".winner");
    const whoWins = document.querySelector("p");
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            whoWins.textContent = "Player Wins";
            winner.appendChild(whoWins);
            console.log("Player Wins");
        } else if (computerScore > playerScore) {
            whoWins.textContent = "Computer Wins";
            winner.appendChild(whoWins);
            console.log("Computer Wins");
        } else {
            console.log("Draw");
        }
    } else {
    }
};
