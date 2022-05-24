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

var playRound = (playerSelection, computerSelection) => {
    playerSelection = translateSelection(playerSelection);

    console.log(
        `Player Selection: ${playerSelection}, Computer Selection: ${computerSelection}`
    );

    if (
        (playerSelection == 0 && computerSelection == 2) ||
        (playerSelection == 1 && computerSelection == 0) ||
        (playerSelection == 2 && computerSelection == 1)
    ) {
        return 0;
    } else if (playerSelection == computerSelection) {
        return 1;
    } else {
        return 2;
    }
};

var gameWinLogic = (player, computer) => {
    if (player > computer) {
        console.log("Player Wins");
    } else if (computer > player) {
        console.log("Computer Wins");
    } else {
        console.log("Draw");
    }
};

var gameStart = () => {
    var player = 0;
    var computer = 0;

    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Rock, Paper, Scissors...");
        var computerSelection = computerPlay();

        var winState = playRound(playerSelection, computerSelection);

        if (winState == 0) {
            player++;
        } else if (winState == 2) {
            computer++;
        } else {
            // Nothing Happens
        }

        console.log(`Player — ${player} : Computer — ${computer}`);
    }

    gameWinLogic(player, computer);
};

gameStart();
