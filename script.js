let playerScore = 0;
let computerScore = 0;

const playerName = prompt(`Hello, what's your name?`).toLowerCase();
alert(`Nice to meet you ${playerName}`);

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerInput() {
  let playerChoice = prompt(
    `Let's play a game! Choose rock, paper, or scissors`
  ).toLowerCase();
  return playerChoice;
}

function playRound() {
  const playerChoice = playerInput();
  const computerChoice = getComputerChoice();

  alert(`${playerName} chose ${playerChoice}`);
  alert(`Computer chose ${computerChoice}`);

  if (playerChoice === computerChoice) {
    alert(`It's a tie!`);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    alert(`You win! ${playerChoice} beats ${computerChoice}.`);
    playerScore++;
  } else {
    alert(`You lose! ${computerChoice} beats ${playerChoice}.`);
    computerScore++;
  }

  alert(`Your score: ${playerScore} - Computer Score: ${computerScore}`);
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    playRound();
  }

  if (playerScore >= 5) {
    alert(`Congratulations! You win the game!`);
  } else {
    alert(`Oops! Computer wins the game!`);
  }
}

// Start the game
game();
