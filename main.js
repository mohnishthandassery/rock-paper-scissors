let playerScore = 0;
let computerScore = 0;

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function titleCase(title) {
  return title[0].toUpperCase() + title.toLowerCase().slice(1, title.length);
}

function getUserInput(e) {
  return e.target.value;
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];

  const index = getRandomIndex(options.length);
  return options[index];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "It's a Tie!";
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock")
  ) {
    ++computerScore;
    return `You Lose! ${titleCase(computer)} beats ${titleCase(player)}`;
  } else {
    ++playerScore;
    return `You Win! ${titleCase(player)} beats ${titleCase(computer)}`;
  }
}

function updateDOM(result) {
  const resultP = document.getElementById("result");
  const playerSpan = document.getElementById("player");
  const computerSpan = document.getElementById("computer");
  resultP.textContent = result;
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

function game(e) {
  const playerSelection = getUserInput(e);
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  if (playerScore === 5) {
    updateDOM("You win");
    resetScores();
    updateDOM("You win");
  } else if (computerScore === 5) {
    updateDOM("You Lose");
    resetScores();
    updateDOM("You Lose");
  } else {
    updateDOM(result);
  }
}

const rps = document.querySelectorAll("button.rps");
rps.forEach((e) => e.addEventListener("click", game));
